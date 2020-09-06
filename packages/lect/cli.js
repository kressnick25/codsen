#!/usr/bin/env node

/* eslint no-console:0, no-param-reassign: 0, no-nested-ternary: 0 */

// -----------------------------------------------------------------------------
// SETUP
const fs = require("fs-extra");
const writeFileAtomic = require("write-file-atomic");
const writeJsonFile = require("write-json-file");
const path = require("path");
const logSymbols = require("log-symbols");
const chalk = require("chalk");
const objectPath = require("object-path");
const deleteKey = require("object-delete-key");
const format = require("format-package");
const mergeAdvanced = require("object-merge-advanced");
const pMap = require("p-map");

const trim = require("lodash.trim");
const isObj = require("lodash.isplainobject");
const clone = require("lodash.clonedeep");
const partition = require("lodash.partition");
const uniq = require("lodash.uniq");
const camelCase = require("lodash.camelcase");
// const semverRegex = require("semver-regex");
// const semverCompare = require("semver-compare");

const pull1 = require("array-pull-all-with-glob");

const findRecursivelyUp = require("find-file-recursively-up");
const inquirer = require("inquirer");
// const matcher = require('matcher')

function pull(arg1, arg2) {
  return pull1(arg1, arg2, { caseSensitive: false });
}
const arrayiffy = require("arrayiffy-if-string");

const {
  // initNpmIgnore,
  npmWillTakeCareOfThese,
  encodeDot,
  decodeDot,
} = require("./init-npmignore");

// const flow = require('lodash.flow')

const { resolveVars } = require("./util");

const log = console.log;
const isArr = Array.isArray;

function isStr(something) {
  return typeof something === "string";
}
function existy(x) {
  return x != null;
}

// -----------------------------------------------------------------------------
// 0. STUFF WE READ

let showCoverageBadge = true; // flipswitch for coverage badges
let coverageValues = null; // the container to place coverage report's content
let pack = {}; // package.json of the lib located at root
let parsedPack; // package.json parsed through "getPkgRepo"
let lectrc = {}; // .lectrc one level above from root

let isCLI = false; // is this a CLI package ("special" packages are both or neither)
let isSpecial = false; // is this special package where we granularly control everything

// -----------------------------------------------------------------------------
// 0. STUFF WE SET

// For every setting fetching, we first look for lectrc if something is set.
// Then, that setting might be overridden in package.json .lect key
// In either outcome, return the promise of the value of that path.
function get(
  pathInEither,
  pathOverrideForPackageJson,
  opts = { mode: "merge" }
) {
  let packContents;
  let res;
  // case 1. package.json uses different path naming (shouldn't be used normally)
  if (existy(pathOverrideForPackageJson)) {
    packContents = objectPath.get(pack, `lect.${pathOverrideForPackageJson}`);
  } else {
    packContents = objectPath.get(pack, `lect.${pathInEither}`);
  }
  const lectrcContents = objectPath.get(lectrc, pathInEither);

  if (opts.mode === "merge") {
    res = mergeAdvanced(lectrcContents, packContents, {
      mergeBoolsUsingOrNotAnd: false,
    });
    return res;
  }
  res = mergeAdvanced(lectrcContents, packContents, {
    mergeBoolsUsingOrNotAnd: false,
  });
  if (isStr(res) && res.length > 0) {
    return res;
  }
  return null;
}

// primitive tool to turn strings to slugs
function slugify(str) {
  if (typeof str !== "string") {
    return str;
  }
  return str.split(" ")[0].replace(" ", "_").toLowerCase();
}

//
//                                            --------------------------,
//                                  A___A    / REAL ACTION STARTS HERE  |
//                      A___A      | o o |  | JUST READ FROM THE BOTTOM |
//                ____ / o o \   ∩  =='== <____________________________/
// _____________/ ____   ='= /___||/    |_______________________________________
//             (______)__m_m_)   |/  ||||
//                               |___||||]
//
//                          LISTEN TO THE CATS!

// -----------------------------------------------------------------------------
// 14. finish

async function step14(receivedPack) {
  // log(`${chalk.white("\nSTEP 14 - Write out package.json and .lectrc.json")}`);

  // delete all contributors-related entries
  objectPath.del(receivedPack, "lect.badges.contributors");
  objectPath.del(receivedPack, "lect.contribution_types");
  objectPath.del(receivedPack, "lect.contributors");

  // let's remove Engines key because we don't test against particular Node
  // versions, plus we've got 3 builds!!! Maybe transpiled CJS is ES5 but ESM
  // is way higher.
  objectPath.del(receivedPack, "engines");
  objectPath.del(receivedPack, "lect.badges.vulnerabilities");
  objectPath.del(receivedPack, "lect.header");
  objectPath.del(receivedPack, "lect.badges");
  objectPath.del(receivedPack, "lect.babelrc");
  objectPath.del(receivedPack, "lect.eslintrc");
  objectPath.del(receivedPack, "lect.various.back_to_top");
  objectPath.del(receivedPack, "lect.various.travisVersionsOverride");

  if (
    !objectPath.has(receivedPack, "scripts.republish") &&
    !receivedPack.private
  ) {
    console.log(
      `${`\u001b[${31}m${`lect CLI: [THROW_ID_03] republish script is missing`}\u001b[${39}m`}`
    );
    process.abort();
  }

  receivedPack.homepage = `https://codsen.com/os/${receivedPack.name}/`;

  // // if it's a tap-tested package, remove all AVA references
  // if (objectPath.has(receivedPack, "devDependencies.tap")) {
  //   objectPath.del(receivedPack, "devDependencies.ava");
  //   objectPath.del(receivedPack, "scripts.ava");
  //   objectPath.del(receivedPack, "scripts.coverage");
  //   objectPath.del(receivedPack, "devDependencies.@babel/register");
  //   objectPath.del(receivedPack, "devDependencies.babel-plugin-istanbul");
  //   objectPath.del(receivedPack, "devDependencies.eslint-plugin-ava");
  //   objectPath.del(receivedPack, "devDependencies.esm");
  //   objectPath.del(receivedPack, "devDependencies.nyc");
  //   objectPath.del(receivedPack, "ava");
  //   objectPath.del(receivedPack, "esm");
  //   objectPath.del(receivedPack, "nyc");
  //   // objectPath.set(
  //   //   receivedPack,
  //   //   "scripts.unittest",
  //   //   "./node_modules/.bin/tap && npm run perf"
  //   // );
  //
  //   // this can be either Mocha (eslint-*) or Tap (the rest)
  //   if (!objectPath.get(receivedPack, "lect.special")) {
  //     objectPath.set(
  //       receivedPack,
  //       "scripts.unittest",
  //       "./node_modules/.bin/tap --no-only"
  //     );
  //     objectPath.set(
  //       receivedPack,
  //       "scripts.devunittest",
  //       "npm run dev && ./node_modules/.bin/tap --only"
  //     );
  //   }
  //   objectPath.set(
  //     receivedPack,
  //     "scripts.test",
  //     "npm run lint && npm run unittest && npm run format"
  //   );
  //
  //   objectPath.set(receivedPack, "tap.coverage-report", "json-summary");
  //   objectPath.set(receivedPack, "tap.timeout", 0);
  // }

  const formattedPack = await format(receivedPack);

  // finally, write out amended var "lectrc" contents onto .lectrc.json
  // console.log(`0285 lect: about to write the lectrc:\n\n\n███████████████████████████████████████\n\n\n${JSON.stringify(lectrc, null, 4)}\n\n\n███████████████████████████████████████\n\n\n`)

  if (isObj(lectrc) && Object.keys(lectrc).length) {
    // console.log(`0288 ${`\u001b[${33}m${`lectrc`}\u001b[${39}m`} = ${JSON.stringify(lectrc, null, 4)}`);
    // console.log(`0289 lect: path=${path.resolve("../.lectrc.json")}`);

    await writeJsonFile(path.resolve("../.lectrc.json"), lectrc)
      .then(() => {
        log(`${chalk.green(logSymbols.success, ".lectrc.json written OK")}`);
      })
      .catch((err) => {
        log(
          `${chalk.red(
            logSymbols.error,
            `could not write .lectrc.json:\n${err}`
          )}`
        );
        if (!(isStr(formattedPack) && formattedPack.length)) {
          process.exit(1);
        }
      });
  } else {
    throw new Error(
      "lect CLI: [THROW_ID_01] something is wrong with newly generated lectrc data, it's empty"
    );
  }

  if (isStr(formattedPack) && formattedPack.length) {
    // and also write out amended var "pack" contents (formattedPack) onto package.json
    writeFileAtomic("package.json", formattedPack, (err) => {
      if (err) {
        log(
          `${chalk.red(
            logSymbols.error,
            `could not write package.json:\n${err}`
          )}`
        );
        process.exit(1);
      }
      log(`${chalk.green(logSymbols.success, "package.json OK")}`);
      log(`${chalk.green(logSymbols.success, "LECT OK")}`);
      process.exit(0);
    });
  }
}

// -----------------------------------------------------------------------------
// 13. generate Rollup config file

function step13() {
  // if Rollup is not used, skip to next step:
  if (isSpecial || !objectPath.has(pack, "devDependencies.rollup")) {
    step14(pack);
    return;
  }

  let entryPoint = "main.js";

  if (isSpecial && objectPath.get(pack, "lect.various.rollupEntryPoint")) {
    entryPoint = objectPath.get(pack, "lect.various.rollupEntryPoint");
  }

  // console.log(`addon:\n-------\n` + addon + `\n-------`);

  const rollupExtraImports = objectPath.get(
    pack,
    "lect.various.rollupExtraDependenciesImports"
  );
  const rollupExtraPlugins = objectPath.get(
    pack,
    "lect.various.rollupExtraDependenciesPlugins"
  );
  let rollupPluginsStrToInsert = "";
  if (isArr(rollupExtraPlugins) && rollupExtraPlugins.length > 0) {
    // trim any commas
    rollupPluginsStrToInsert = `\n        ${rollupExtraPlugins
      .map((val) => trim(val, " ,"))
      .join(",\n        ")},`;
  }

  let defaultUmdBit = "";
  if (objectPath.has(pack, "browser")) {
    defaultUmdBit = `
    // browser-friendly UMD build
    {
      input: "src/${entryPoint}",
      output: {
        file: pkg.browser,
        format: "umd",
        name: "${camelCase(pack.name)}",
      },
      plugins: [
        strip({
          sourceMap: false,
        })${rollupPluginsStrToInsert}${
      pack.devDependencies["rollup-plugin-node-builtins"]
        ? ",\n        builtins()"
        : ""
    }${
      pack.devDependencies["rollup-plugin-node-globals"]
        ? ",\n        globals()"
        : ""
    },
        resolve()${
          pack.devDependencies["@rollup/plugin-json"] ? ",\n        json()" : ""
        },
        commonjs(),
        babel({
          rootMode: "upward",
        }),
        terser(),
        banner(licensePiece),
      ],
    },
`;
  }

  // notice terser() is absent:
  let defaultDevUmdBit = "";
  if (objectPath.has(pack, "browser")) {
    defaultDevUmdBit = `
    // browser-friendly UMD build, non-minified, for dev purposes
    {
      input: "src/${entryPoint}",
      output: {
        file: \`dist/\${pkg.name}.dev.umd.js\`,
        format: "umd",
        name: "${camelCase(pack.name)}",
      },
      plugins: [
        strip({
          sourceMap: false,
        })${rollupPluginsStrToInsert}${
      pack.devDependencies["rollup-plugin-node-builtins"]
        ? ",\n        builtins()"
        : ""
    }${
      pack.devDependencies["rollup-plugin-node-globals"]
        ? ",\n        globals()"
        : ""
    },
        resolve()${
          pack.devDependencies["@rollup/plugin-json"] ? ",\n        json()" : ""
        },
        commonjs(),
        babel({
          rootMode: "upward",
        }),
        banner(licensePiece),
      ],
    },
`;
  }

  let defaultCommonJSBit = "";
  if (objectPath.has(pack, "main")) {
    defaultCommonJSBit = `
    // CommonJS build (for Node)
    {
      input: "src/${entryPoint}",
      output: [{ file: pkg.main, format: "cjs" }],
      external: [${
        isObj(pack) &&
        pack.dependencies &&
        Object.keys(pack.dependencies).length
          ? `\n        "${Object.keys(pack.dependencies).join(
              '",\n        "'
            )}",\n      `
          : ""
      }],
      plugins: [
        strip({
          sourceMap: false,
        })${
          isObj(pack) &&
          pack.devDependencies &&
          pack.devDependencies["rollup-plugin-node-builtins"]
            ? ",\n        builtins()"
            : ""
        }${
      isObj(pack) &&
      pack.devDependencies &&
      pack.devDependencies["rollup-plugin-node-globals"]
        ? ",\n        globals()"
        : ""
    }${pack.devDependencies["@rollup/plugin-json"] ? ",\n        json()" : ""}${
      rollupPluginsStrToInsert ? `,\n        ${rollupPluginsStrToInsert}` : ""
    },
        babel({
          rootMode: "upward",
        }),
        cleanup({ comments: "istanbul" }),
        banner(licensePiece),
      ],
    },
`;
  }

  let defaultESMBit = "";
  if (objectPath.has(pack, "module")) {
    defaultESMBit = `
    // ES module build (for bundlers)
    {
      input: "src/${entryPoint}",
      output: [{ file: pkg.module, format: "es" }],
      external: [${
        isObj(pack) &&
        pack.dependencies &&
        Object.keys(pack.dependencies).length
          ? `\n        "${Object.keys(pack.dependencies).join(
              '",\n        "'
            )}",\n      `
          : ""
      }],
      plugins: [
        strip({
          sourceMap: false,
        })${
          pack.devDependencies["rollup-plugin-node-builtins"]
            ? ",\n        builtins()"
            : ""
        }${
      pack.devDependencies["rollup-plugin-node-globals"]
        ? ",\n        globals()"
        : ""
    }${pack.devDependencies["@rollup/plugin-json"] ? ",\n        json()" : ""}${
      rollupPluginsStrToInsert ? `,${rollupPluginsStrToInsert}` : ""
    },
        cleanup({ comments: "istanbul" }),
        banner(licensePiece),
      ],
    },`;
  }

  const newRollupConfig = `${
    rollupExtraImports ? `${rollupExtraImports}\n` : ""
  }${
    pack.devDependencies["rollup-plugin-node-builtins"]
      ? `import builtins from "rollup-plugin-node-builtins";\n`
      : ""
  }${
    pack.devDependencies["rollup-plugin-node-globals"]
      ? `import globals from "rollup-plugin-node-globals";\n`
      : ""
  }import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import banner from "rollup-plugin-banner";
import babel from "@rollup/plugin-babel";
import strip from "@rollup/plugin-strip";
${
  pack.devDependencies["@rollup/plugin-json"]
    ? `import json from "@rollup/plugin-json";\n`
    : ""
}import pkg from "./package.json";

const licensePiece = \`\${pkg.name}
\${pkg.description}
Version: \${pkg.version}
Author: Roy Revelt, Codsen Ltd
License: \${pkg.license}
Homepage: \${pkg.homepage}\`;

export default (commandLineArgs) => {
  const finalConfig = [${defaultUmdBit}${defaultDevUmdBit}${defaultCommonJSBit}${defaultESMBit}
  ];

  if (commandLineArgs.dev) {
    // if rollup was called without a --dev flag,
    // dispose of a comment removal, strip():
    finalConfig.forEach((singleConfigVal, i) => {
      finalConfig[i].plugins.shift();
    });
    // https://github.com/rollup/rollup/issues/2694#issuecomment-463915954
    delete commandLineArgs.dev;

    // don't build minified UMD in dev, it takes too long
    finalConfig.shift();
  }
  return finalConfig;
};
`;
  fs.outputFile("rollup.config.js", newRollupConfig, (err) => {
    if (err) {
      log(
        `${chalk.red(
          logSymbols.error,
          `We could not write the rollup.config.js! We encountered an error:\n${err}`
        )}`
      );
    }
  });

  step14(pack);
}

// -----------------------------------------------------------------------------
// 12. write .travis.yml file if one was set in .lectrc.json

// (removed since)

// -----------------------------------------------------------------------------
// 11. generate a fresh .npmignore

function ask(regardingSomePath, what = "folder") {
  return inquirer.prompt(
    regardingSomePath.map((pathName, i, arr) => ({
      type: "list",
      name: pathName,
      message: `${chalk.grey(
        `${i + 1}/${arr.length}`
      )} What should we do with ${what} ${chalk.yellow.bold(
        decodeDot(pathName)
      )}?`,
      choices: [
        {
          name: `${chalk.green("do not put")} onto any .npmignore`,
          value: false,
        },
        {
          name: `${chalk.red("put")} onto ${chalk.yellow(
            "local"
          )} lectrc npmignore in package.json`,
          value: 1,
        },
        {
          name: `${chalk.red("put")} onto ${chalk.yellow(
            "global"
          )} lectrc npmignore list in .lectrc`,
          value: 2,
        },
      ],
    }))
  );
}

async function step11part2(files) {
  let filesList = [];
  let foldersList = [];
  for (let i = files.length; i--; ) {
    if (fs.statSync(files[i]).isDirectory()) {
      foldersList.push(files[i]);
    } else {
      filesList.push(files[i]);
    }
  }

  foldersList = pull(foldersList, npmWillTakeCareOfThese);
  filesList = pull(filesList, npmWillTakeCareOfThese);

  // F O L D E R S   F I R S T

  let badFolders = [];
  let unclearFolders = [];
  [badFolders, unclearFolders] = partition(foldersList, (foldersName) =>
    get("npmignore.badFolders").includes(foldersName)
  );
  unclearFolders = pull(unclearFolders, get("npmignore.goodFolders"));
  let foldersToAddToLocalList = [];
  let foldersToAddToGlobalList = [];

  if (isArr(unclearFolders) && unclearFolders.length > 0) {
    const folderAnswers = await ask(encodeDot(unclearFolders));
    // remove paths which are equal to "false". Leave only ones with values 1 & 2.
    [foldersToAddToLocalList, foldersToAddToGlobalList] = partition(
      Object.keys(folderAnswers).filter((key1) => folderAnswers[key1]),
      (key2) => folderAnswers[key2] === 1
    );
    foldersToAddToLocalList = decodeDot(foldersToAddToLocalList);
    foldersToAddToGlobalList = decodeDot(foldersToAddToGlobalList);
  }

  // F I L E S   S E C O N D

  let badFiles = [];
  let unclearFiles = [];
  [badFiles, unclearFiles] = partition(filesList, (filesName) =>
    get("npmignore.badFiles").includes(filesName)
  );
  unclearFiles = pull(unclearFiles, get("npmignore.goodFiles"));
  let filesToAddToLocalList = [];
  let filesToAddToGlobalList = [];

  if (isArr(unclearFiles) && unclearFiles.length > 0) {
    const fileAnswers = await ask(encodeDot(unclearFiles), "file");
    // remove paths which are equal to "false". Leave only ones with values 1 & 2.
    [filesToAddToLocalList, filesToAddToGlobalList] = partition(
      Object.keys(fileAnswers).filter((key1) => fileAnswers[key1]),
      (key2) => fileAnswers[key2] === 1
    );
    filesToAddToLocalList = decodeDot(filesToAddToLocalList);
    filesToAddToGlobalList = decodeDot(filesToAddToGlobalList);
  }

  // A S S E M B L E   T H E   F I N A L   N P M I G N O R E

  const frontStr =
    "# .... generated using www.npmjs.com/package/lect ....\n#\n#\n#       __         ______     ______     ______  \n#      /\\ \\       /\\  ___\\   /\\  ___\\   /\\__  _\\ \n#      \\ \\ \\____  \\ \\  __\\   \\ \\ \\____  \\/_/\\ \\/ \n#       \\ \\_____\\  \\ \\_____\\  \\ \\_____\\    \\ \\_\\ \n#        \\/_____/   \\/_____/   \\/_____/     \\/_/ \n#  \n#\n";

  const finalNpmIgnoreFile = `${frontStr}\n# folders:\n\n${badFolders
    .concat(foldersToAddToLocalList, foldersToAddToGlobalList)
    .sort()
    .join("\n")}\n\n# files:\n\n${badFiles
    .concat(filesToAddToLocalList, filesToAddToGlobalList)
    .sort()
    .join("\n")}\n`;

  writeFileAtomic(".npmignore", finalNpmIgnoreFile, (err) => {
    if (err) {
      log(
        `${chalk.red(logSymbols.error, `could not write .npmignore:\n${err}`)}`
      );
    } else {
      // log(`${chalk.green(logSymbols.success, ".npmignore OK")}`);
    }

    if (foldersToAddToLocalList.length) {
      objectPath.set(
        pack,
        "lect.npmignore.badFolders",
        mergeAdvanced(
          objectPath.get(pack, "lect.npmignore.badFolders"),
          foldersToAddToLocalList
        ).sort()
      );
    }
    if (foldersToAddToGlobalList.length) {
      objectPath.set(
        lectrc,
        "npmignore.badFolders",
        mergeAdvanced(
          objectPath.get(lectrc, "npmignore.badFolders"),
          foldersToAddToGlobalList
        ).sort()
      );
    }
    if (filesToAddToLocalList.length) {
      objectPath.set(
        pack,
        "lect.npmignore.badFiles",
        mergeAdvanced(
          objectPath.get(pack, "lect.npmignore.badFiles"),
          filesToAddToLocalList
        ).sort()
      );
    }
    if (filesToAddToGlobalList.length) {
      objectPath.set(
        lectrc,
        "npmignore.badFiles",
        mergeAdvanced(
          objectPath.get(lectrc, "npmignore.badFiles"),
          filesToAddToGlobalList
        ).sort()
      );
    }

    step13();
    // F I N.
  });
}

function step11() {
  // log(`${chalk.white("\nSTEP 11 - Assemble and write a fresh .npmignore")}`);
  fs.readdir("./", (err, files) => {
    if (err) {
      log(
        `${chalk.red(
          logSymbols.error,
          `could not read the root folder:\n${err}`
        )}`
      );
      process.exit(1);
    } else {
      step11part2(files);
    }
  });
}

// -----------------------------------------------------------------------------
// 9. setting the package.json (it will be written in the end)

// second part
async function writePackageJson(receivedPackageJsonObj) {
  // delete unit test-related entries in case those were not present before:
  if (!objectPath.has(pack, "devDependencies.ava")) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.ava");
  }
  if (!objectPath.has(pack, "devDependencies.babel-cli")) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.babel-cli");
  }
  if (!objectPath.has(pack, "devDependencies.babel-preset-env")) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.babel-preset-env");
  }
  // remove any references to coveralls.io:
  objectPath.del(receivedPackageJsonObj, "devDependencies.coveralls");
  if (!objectPath.has(pack, "devDependencies.husky")) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.husky");
  }
  if (!objectPath.has(pack, "devDependencies.nyc")) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.nyc");
  }

  // get rid of gitHead on every package.json - it comes from Lerna and is bad
  objectPath.del(receivedPackageJsonObj, "gitHead");

  // remove unused clear-cli:
  if (
    objectPath.has(pack, "scripts") &&
    objectPath.has(pack, "devDependencies.clear-cli") &&
    !JSON.stringify(pack.scripts).includes("clear")
  ) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.clear-cli");
  }

  // remove unused nodemon:
  if (
    objectPath.has(pack, "scripts") &&
    objectPath.has(pack, "devDependencies.nodemon") &&
    !JSON.stringify(pack.scripts).includes("nodemon")
  ) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.nodemon");
  }

  // remove unused format-package:
  if (
    objectPath.has(pack, "scripts") &&
    objectPath.has(pack, "devDependencies.format-package") &&
    !JSON.stringify(pack.scripts).includes("format-package")
  ) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.format-package");
  }

  if (!isSpecial) {
    if (isCLI || (isStr(pack.name) && pack.name.startsWith("gulp"))) {
      // it's a CLI
      // set scripts to the ones set in .lectrc
      const cliScripts = objectPath.get(lectrc, "scripts.cli");
      if (cliScripts) {
        receivedPackageJsonObj.scripts = clone(cliScripts);
      }
    } else {
      // it's not a normal library
      // set scripts to the ones set in .lectrc
      const normalScripts = objectPath.get(lectrc, "scripts.rollup");
      if (normalScripts) {
        receivedPackageJsonObj.scripts = clone(normalScripts);
      }
    }
  }

  // now, the versions in .lectrc.json might be stale.
  // let's overwrite the pack.devDependencies keys with only same or newer versions.
  // Two steps.
  // If lectrc devdep has newer version than pack, lectrc overwrites devdep.
  // If lectrc devdep is older version than pack, letrc does not overwrite pack -
  // instead, pack's version is taken and written to .lectrc.json

  const packDevDeps = pack.devDependencies;
  // if (DEBUG) {
  //   console.log(`1039 packDevDeps.ava = ${packDevDeps.ava}`);
  //   const lectrcDevDeps = receivedPackageJsonObj.devDependencies;
  // }
  const lectrcDevDeps = lectrc.package.devDependencies;
  // if (DEBUG) {
  //   console.log(`1044 lectrcDevDeps.ava = ${lectrcDevDeps.ava}`);
  // }

  // console.log("\n-------\n");

  Object.keys(receivedPackageJsonObj.devDependencies).forEach((key) => {
    // console.log(`1050 lect: processing ${key}`);
    // if a certain dev dependency in package.json does not exist in a reference
    // lectrc list of dev devpendencies, we remove it, unless it is among
    // lect.various.devDependencies[]

    const whitelist = ["tempy", "execa", "tap"];

    if (
      !Object.prototype.hasOwnProperty.call(lectrcDevDeps, key) &&
      !whitelist.includes(key) &&
      (!isArr(objectPath.get(pack, "lect.various.devDependencies")) ||
        !pack.lect.various.devDependencies.includes(key)) &&
      !(isCLI || (isStr(pack.name) && pack.name.startsWith("gulp")))
    ) {
      console.log(`793 lect: we'll delete key "${key}" from dev dependencies`);
      delete receivedPackageJsonObj.devDependencies[key];
    } else if (
      Object.prototype.hasOwnProperty.call(lectrcDevDeps, key) &&
      Object.prototype.hasOwnProperty.call(packDevDeps, key)
    ) {
      // if existing package.json key is present, keep its value as it is
      lectrc.package.devDependencies[key] = pack.devDependencies[key];
      // console.log(`1072 lect: ${key} stays ${pack.devDependencies[key]}`);
    }
    // console.log("\n-------\n");
  });

  Object.keys(lectrcDevDeps).forEach((key) => {
    // if certain key is not present in package.json dev deps but it's listed
    // in lectrc, add it.
    // Ensure it's not a CLI app or it is but it's not rollup-
    // dependency
    if (
      (!Object.prototype.hasOwnProperty.call(packDevDeps, key) &&
        !(isCLI || (isStr(pack.name) && pack.name.startsWith("gulp")))) ||
      !key.startsWith("rollup")
    ) {
      // console.log(`1087 lect: we'll add a new key ${key} under dev deps`);
      receivedPackageJsonObj.devDependencies[key] = lectrcDevDeps[key];
    }
  });

  // delete "bugs" key from package.json
  objectPath.del(receivedPackageJsonObj, "bugs");

  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //           ADHOC KEY CHANGE REQUESTS COMING FROM CONFIGS:
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S

  //     config format example:

  // "package_keys": {
  //   "write_hard": {
  //     "repository": "https://gitlab.com/codsen/codsen/"
  //   },
  //   "write_soft": {},
  //   "delete": ["", ""]
  // },

  const adhocKeyOpsToDo = get("package_keys");
  // tend key hard write requests:
  if (
    adhocKeyOpsToDo &&
    adhocKeyOpsToDo.write_hard &&
    isObj(adhocKeyOpsToDo.write_hard)
  ) {
    Object.keys(adhocKeyOpsToDo.write_hard).forEach((key) => {
      if (isStr(key) && key.trim().length) {
        // console.log(`1132 lect cli: key to write hard =${key}`);
        objectPath.set(
          receivedPackageJsonObj,
          key,
          adhocKeyOpsToDo.write_hard[key]
        );
      }
    });
  }

  // don't touch the config parts
  receivedPackageJsonObj.lect = pack.lect;

  if (!isSpecial && receivedPackageJsonObj.bin) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.benchmark");
  }

  pack = receivedPackageJsonObj;
  // pack.scripts.perf = backupPerfScript;

  step11();
}

// the logic of prepping the package.json before overwriting it
async function step10() {
  // log(`${chalk.white("\nSTEP 10 - Edit and write package.json")}`);
  // let newValues = clone(get("package"));

  let newValues = clone(pack);

  if (isObj(newValues) && Object.keys(newValues).length > 0) {
    // detect non-rollup setups and remove rollup if necessary:
    if (!objectPath.has(pack, "devDependencies.rollup")) {
      // 1. delete Rollup-related devdeps:
      ["rollup*", "uglify-es"].forEach((key) => {
        newValues = deleteKey(newValues, { key });
      });

      // 2. delete rollup config in the root:
      const rollupConfPath = path.resolve("./rollup.config.js");
      try {
        if (fs.statSync(rollupConfPath)) {
          fs.remove(rollupConfPath)
            .then(() => {
              log(chalk.green(logSymbols.success, "rollup.config.js DELETED"));
              // and move on to the next step
            })
            .catch((err) => {
              log(
                `${chalk.red(
                  logSymbols.error,
                  `error deleting rollup.config.js:\n${err}`
                )}`
              );
              // and move on to the next step
            });
        }
      } catch (err) {
        // log(
        //   `${chalk.blue(
        //     logSymbols.info,
        //     `rollup.config.js not detected, that's fine`
        //   )}`
        // );
      }
    }

    // delete any clinton entries from package.json:
    objectPath.del(newValues, "clinton");
    objectPath.del(pack, "clinton");

    const finalThing = mergeAdvanced(newValues, pack, {
      concatInsteadOfMerging: false,
      dedupeStringsInArrayValues: true,
    });
    // console.log(
    //   `1208 lect.js: ${`\u001b[${33}m${`finalThing`}\u001b[${39}m`} = ${JSON.stringify(
    //     finalThing,
    //     null,
    //     4
    //   )}`
    // );

    // if there's rollup used, set the right dist paths
    if (objectPath.has(pack, "devDependencies.rollup")) {
      objectPath.set(finalThing, "main", `dist/${pack.name}.cjs.js`);
      objectPath.set(finalThing, "module", `dist/${pack.name}.esm.js`);
      objectPath.set(finalThing, "browser", `dist/${pack.name}.umd.js`);
      if (objectPath.has(lectrc, "scripts.rollup") && !isSpecial) {
        objectPath.set(finalThing, "scripts", lectrc.scripts.rollup);
      }
      const defaultDevDeps = get("package.devDependencies");
      if (defaultDevDeps) {
        // objectPath.set(finalThing, "devDependencies", defaultDevDeps);
        finalThing.devDependencies = {
          ...defaultDevDeps.devDependencies,
          ...finalThing.devDependencies,
        };
      }
    }

    // delete "files" because that's too big of a liability
    objectPath.del(finalThing, "files");

    // also, remove any of the builds if they don't exist in "pack"
    // that's necessary because we might have done checks on previous steps
    // and removed entries for missing build files etc.
    if (!objectPath.has(pack, "main")) {
      objectPath.del(finalThing, "main");
    }
    if (!objectPath.has(pack, "module")) {
      objectPath.del(finalThing, "module");
    }
    if (!objectPath.has(pack, "browser")) {
      objectPath.del(finalThing, "browser");
    }

    // then write out whole thing:
    writePackageJson(finalThing);
  } else {
    // just write out sorted:
    writePackageJson(pack);
  }
}

// -----------------------------------------------------------------------------
// 9. writing the .eslintrc.json

// (removed since)

// -----------------------------------------------------------------------------
// 8. ad-hoc delete all files
// (keys files.delete and files.write_soft from .lectrc.json)

function step8() {
  // log(`${chalk.white("\nSTEP 8 - ad-hoc delete files")}`);

  const thingsToDelete = get("files.delete").filter((val) => val.trim() !== "");
  pMap(thingsToDelete, (currPath) => {
    fs.access(currPath, fs.constants.F_OK)
      .then(() =>
        fs
          .remove(currPath)
          .then(
            log(chalk.green(logSymbols.success, currPath), chalk.red("DELETED"))
          )
      )
      .catch(() => {});
  })
    .then(() => {
      step10();
    })
    .catch((err) => {
      log(`${chalk.red(logSymbols.error, `error deleting file:\n${err}`)}`);
      step10();
    });
}

// -----------------------------------------------------------------------------
// 7. hard write all static files
// (key files.write_hard from package.json / .lectrc.json)

function step7() {
  // log(`${chalk.white("\nSTEP 7 - hard writing static files")}`);

  const contentsToWriteHard = get("files.write_hard").filter((obj) => {
    return (
      existy(obj.name) &&
      isStr(obj.name) &&
      obj.name.trim() !== "" &&
      existy(obj.contents) &&
      isStr(obj.contents) &&
      obj.contents.trim() !== ""
    );
  });

  // if to-do list is empty, bail early:
  if (
    !contentsToWriteHard ||
    (isArr(contentsToWriteHard) && contentsToWriteHard.length === 0)
  ) {
    step8();
  }

  pMap(contentsToWriteHard, (oneToDoObj) => {
    fs.outputFile(
      oneToDoObj.name,
      resolveVars(oneToDoObj.contents, pack, parsedPack)
    );
    // .then(() => {
    //   log(chalk.green(logSymbols.success, oneToDoObj.name, "OK"));
    // });
  })
    .then(() => {
      step8();
    })
    .catch((err) => {
      log(`${chalk.red(logSymbols.error, `error writing file:\n${err}`)}`);
      step8();
    });
}

// -----------------------------------------------------------------------------
// 6. generating and overwriting the readme

function step6() {
  // log(`${chalk.white("\nSTEP 6 - Assemble and write readme.md")}`);
  // log(
  //   `${chalk.blue(
  //     logSymbols.info,
  //     `so lectrc was read OK, total ${Object.keys(lectrc).length} keys read`
  //   )}`
  // );

  const noDepsBadge = `https://img.shields.io/badge/-no%20dependencies-brightgreen?style=flat-square`;
  const noDepsUrl = `https://www.npmjs.com/package/${pack.name}?activeTab=dependencies`;

  let topBadgesString = "";
  let bottomBadgesString = "";

  // if this is a CLI app, don't show the Runkit badge
  let showRunkitBadge = true;
  if (!isSpecial && isCLI && !(pack.lect && pack.lect.special)) {
    showRunkitBadge = false;
  }

  // 1. get custom badges from package.json > lect.badges_custom
  let customBadges = objectPath.get(pack, "lect.badges_custom");
  if (
    !customBadges ||
    !isObj(customBadges) ||
    (isObj(customBadges) && Object.keys(customBadges).length === 0)
  ) {
    customBadges = null;
  }

  let customBadgesSortedIndexList = [];
  if (customBadges) {
    // if (DEBUG) { console.log(`customBadges = ${JSON.stringify(customBadges, null, 4)}`) }
    customBadgesSortedIndexList = uniq(
      Object.keys(customBadges).map((badgeName) =>
        parseInt(customBadges[badgeName].insert_before, 10)
      )
    ).sort();

    // console.log(
    //   `customBadgesSortedIndexList = ${JSON.stringify(
    //     customBadgesSortedIndexList,
    //     null,
    //     4
    //   )}`
    // );
  }

  // 2. assemble the badges string:
  let res;
  topBadgesString = lectrc.badges
    .reduce((totalConcatenatedString, badge) => {
      res = totalConcatenatedString;

      // There's only one object per-badge within "badges" in .lectrc.json.
      // Within that object there's only one key - name of the badge. Get that name.
      const name = Object.keys(badge)[0];

      // if there's no coverage set up, automatically don't show the coverage's badge:
      if (name === "cov" && !showCoverageBadge) {
        return res;
      }

      // if it's a CLI app, automatically don't show the runkit badge:
      if (name === "runkit" && !showRunkitBadge) {
        return res;
      }

      // if package.json doesn't contain contributors, don't show the badge:
      if (
        name === "contributors" &&
        (!objectPath.has(pack, "lect.contributors") ||
          !isArr(pack.lect.contributors) ||
          (isArr(pack.lect.contributors) && pack.lect.contributors.length < 2))
      ) {
        return res;
      }

      // if there are no deps, don't show "deps in 2D":
      if (name === "deps2d" && !pack.dependencies) {
        return `${totalConcatenatedString}[![no dependencies][no-deps-img]][no-deps-url]\n`;
      }

      // Now reduce into string depending if badges are switched on or off or setting's missing
      if (
        !objectPath.has(pack, `lect.badges.${name}`) ||
        pack.lect.badges[name]
      ) {
        return `${totalConcatenatedString}[![${badge[name].alt}][${name}-img]][${name}-url]\n`;
      }
      return res;
    }, "")
    .trim();

  // now that we have topBadgesString, let's add custom badges.
  topBadgesString = topBadgesString
    .split("\n")
    .map((el, idx, wholeArr) => {
      if (customBadgesSortedIndexList.includes(idx + 2)) {
        Object.keys(customBadges).forEach((key) => {
          if (customBadges[key].insert_before === idx + 2) {
            const slug = slugify(customBadges[key].alt);
            // check, do any of the existing slugs match it, and if so, throw
            if (
              wholeArr.some(
                (oneOfBadgeObjects) =>
                  Object.keys(oneOfBadgeObjects)[0] === slug
              )
            ) {
              throw new Error(
                `${chalk.red(
                  logSymbols.error,
                  ` When we tried to create a slug from your custom badge's "alt" key:\n${JSON.stringify(
                    customBadges[key],
                    null,
                    4
                  )}\nthe slug we generated (${slug}) is clashing with one of existing badges from .lectrc.json:\n${JSON.stringify(
                    wholeArr.filter((obj) => obj[slug] !== undefined)[0],
                    null,
                    4
                  )}. Please set a different "alt" value for the custom badge in this package.json.`
                )}`
              );
            }
            //
            el += `\n[![${customBadges[key].alt}][${slug}-img]][${slug}-url]`;
          }
        });
      }
      return el;
    })
    .join("\n");

  bottomBadgesString = lectrc.badges
    .reduce((totalConcatenatedString, badge, i) => {
      res = totalConcatenatedString;

      // If there are custom badges, add their corresponding footer links too:
      if (customBadgesSortedIndexList.includes(i)) {
        // if (DEBUG) { console.log(`add before this badge: ${JSON.stringify(badge, null, 4)}`) }
        Object.keys(customBadges).forEach((key) => {
          if (customBadges[key].insert_before === i) {
            const slug = slugify(customBadges[key].alt);
            // no need to check, do any of the existing slugs match it
            // because the head links would have thrown already
            res += `[${slug}-img]: ${customBadges[key].img}\n[${slug}-url]: ${customBadges[key].url}\n\n`;
          }
        });
      }

      const name = Object.keys(badge)[0];

      // if there's no coverage set up, automatically don't show the badge:
      if (name === "cov" && !showCoverageBadge) {
        return res;
      }

      // if it's a CLI app, automatically don't show the badge:
      if (name === "runkit" && !showRunkitBadge) {
        return res;
      }

      // if package.json doesn't contain contributors, don't show the badge:
      if (
        name === "contributors" &&
        (!objectPath.has(pack, "lect.contributors") ||
          !isArr(pack.lect.contributors) ||
          (isArr(pack.lect.contributors) && pack.lect.contributors.length < 2))
      ) {
        return res;
      }

      // Now reduce footer badge links into string depending are they switched on or
      // not or setting is missing (means "on")
      if (!pack.dependencies && name === "deps2d") {
        return `${res}[no-deps-img]: ${noDepsBadge}\n[no-deps-url]: ${noDepsUrl}\n\n`;
      }
      if (
        !objectPath.has(pack, `lect.badges.${name}`) ||
        pack.lect.badges[name]
      ) {
        return `${res}[${name}-img]: ${badge[name].img}\n[${name}-url]: ${badge[name].url}\n\n`;
      }
      return res;
    }, "")
    .trim();

  // start setting up the final readme's string:
  let content = `# ${pack.name}

> ${pack.description}

${topBadgesString.trim()}

## Install

\`\`\`bash
npm i${isCLI ? " -g" : ""} ${pack.name}
\`\`\`

## Documentation

Please [visit our documentation](https://codsen.com/os/${
    pack.name
  }/) for a full description of the API and examples.

`;

  // licence module
  const licenceExtras = get("licence.extras");

  content += `${
    lectrc.licence.header.length > 0 ? `${lectrc.licence.header}` : ""
  }`;
  content += `${
    lectrc.licence.restofit.length > 0
      ? `\n\n${lectrc.licence.restofit}\n\n`
      : ""
  }`;

  if (licenceExtras) {
    content += `\n${arrayiffy(licenceExtras)
      .filter((singleExtra) => singleExtra.length > 0)
      .join("\n")}`;
  }

  // here go the footer bits:
  content = `${content.trim()}\n\n${
    bottomBadgesString.length > 0
      ? `${bottomBadgesString.replace(/\n+/g, "\n").trim()}`
      : ""
  }`;

  if (!content.endsWith("\n")) {
    content += "\n";
  }

  content = resolveVars(content, pack, parsedPack, null);
  // also, fix coverage variables, %COVPERC% and %COVBADGECOLOR% which come
  // from .lectrc.json:
  if (content.includes("%COVPERC%")) {
    let colour = "red";
    let perc = objectPath.get(coverageValues, "total.lines.pct");
    let caught;
    if (
      Object.keys(coverageValues).some((key) => {
        caught = key;
        return key.includes(".esm.");
      })
    ) {
      const perc2 = objectPath.get(coverageValues[caught], `lines.pct`);
      if (perc2) {
        perc = perc2;
      }
    }
    if (typeof perc === "number" && perc > 50) {
      colour = perc > 85 ? "brightgreen" : "yellow";
    }

    content = content.replace("%COVPERC%", `${perc}%25` || "n/a");
    content = content.replace("%COVBADGECOLOR%", perc ? colour : "lightgrey");
    // if (perc) {
    //   log(`${chalk.blue(logSymbols.info, `coverage: ${perc} (${colour})`)}`);
    // } else {
    //   log(`${chalk.red(logSymbols.error, `coverage: ${perc} (${colour})`)}`);
    // }
  }

  writeFileAtomic("README.md", content, (err) => {
    if (err) {
      throw new Error(`${chalk.red(logSymbols.error, err)}`);
    }
    // log(`${chalk.green(logSymbols.success, "readme.md OK")}`);
    step7();
  });
}

// -----------------------------------------------------------------------------
// 5. manage babelrc

// (removed since)

// -----------------------------------------------------------------------------
// 4. fetch github contributors user data

// (removed since)

// -----------------------------------------------------------------------------
// 3. Read the lectrc file one level above, the .lectrc

function step3() {
  // log(
  // 	`1989 ${chalk.blue(
  // 		logSymbols.info,
  // 		`so pack was read OK, total ${Object.keys(pack).length} keys read`
  // 	)}`
  // );
  // log(`${chalk.white("\nSTEP 3 - Read the .lectrc.json")}`);

  findRecursivelyUp(".lectrc.json", (err, foundPath) => {
    // If lectrc was not found, that's a dealbreaker. Will exit with a non-zero code.
    if (err) {
      log(
        `${chalk.red(
          logSymbols.error,
          "couldn't find the .lectrc.json anywhere!"
        )}`
      );
      process.exit(1);
    }
    // Otherwise, read the config on the found path:
    try {
      fs.readJson(path.resolve(foundPath), { throws: false }, (err2, obj) => {
        if (err2) {
          log(
            `${chalk.red(
              logSymbols.error,
              `couldn't read the .lectrc.json!\n${err2}`
            )}`
          );
          process.exit(1);
        }
        lectrc = obj;
        step6();
      });
    } catch (e) {
      log(
        `${chalk.red(
          logSymbols.error,
          "Computer couldn't find the .lectrc.json anywhere! Exiting.\n"
        )}`
      );
      process.exit(1);
    }
  });
}

// -----------------------------------------------------------------------------
// 2. We fetched the contents of readme successfully.

function step2() {
  fs.readJson("package.json", { throws: false }, (err, obj) => {
    if (err) {
      log(
        `${chalk.red(
          logSymbols.error,
          `couldn't read the package.json!\n${err}`
        )}`
      );
      process.exit(1);
    }

    parsedPack = clone(obj);
    pack = clone(obj);

    if (pack.lect && pack.lect.special) {
      isSpecial = true;
      log(`${chalk.yellow(logSymbols.info, `package is special!`)}`);
    }

    if (pack.bin) {
      isCLI = true;
      log(`${chalk.yellow(logSymbols.info, `package is a CLI!`)}`);
    }

    step3();
  });
}

// -----------------------------------------------------------------------------
// 1. Read coverage report

function step1() {
  // log(
  //   `${chalk.white(
  //     "\nSTEP 1 - Attempt to read coverage/coverage-summary.json"
  //   )}`
  // );

  try {
    fs.statSync(path.resolve("coverage", "coverage-summary.json"));
    const content = fs.readFileSync(
      path.resolve("coverage", "coverage-summary.json"),
      "utf8"
    );
    if (content) {
      try {
        coverageValues = JSON.parse(content);
        // console.log(
        //   `received coverage:\n${JSON.stringify(coverageValues, null, 4)}`
        // );
        if (
          !isObj(coverageValues) ||
          !objectPath.get(coverageValues, "total.lines.pct")
        ) {
          console.log(
            `no coverage value found, setting showCoverageBadge = false`
          );
          showCoverageBadge = false;
          log(`${chalk.yellow(logSymbols.info, `skipping coverage`)}`);
        }
      } catch (e1) {
        showCoverageBadge = false;
        log(
          `${chalk.yellow(
            logSymbols.info,
            `did read coverage/coverage-summary.json but could not parse!\n${e1}`
          )}`
        );
      }
    } else {
      showCoverageBadge = false;
    }
  } catch (e) {
    showCoverageBadge = false;
  } finally {
    step2();
  }
}

// -----------------------------------------------------------------------------
// 0. Get the readme name and contents

// START:
// quickly read package.json and bail early if needed
try {
  const packContents = JSON.parse(fs.readFileSync("package.json", "utf8"));
  if (
    packContents.private &&
    !(packContents.lect && packContents.lect.special)
  ) {
    log(`${chalk.green(logSymbols.success, "private package, lect skipped")}`);
    process.exit();
  }
} catch (e) {
  console.log(`error reading package.json: ${e}`);
}

// start:
step1();
