import tap from "tap";
import ct from "../dist/codsen-tokenizer.esm";

// 01. simple
// -----------------------------------------------------------------------------

tap.test(
  `01 - ${`\u001b[${36}m${`rule`}\u001b[${39}m`} - one rule, no linebreaks`,
  (t) => {
    const gathered = [];
    ct(`<style>.a-b{c}</style>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 7,
        },
        {
          type: "rule",
          start: 7,
          end: 14,
          openingCurlyAt: 11,
          closingCurlyAt: 13,
          selectors: [
            {
              value: ".a-b",
              selectorStarts: 7,
              selectorEnds: 11,
            },
          ],
        },
        {
          type: "tag",
          start: 14,
          end: 22,
        },
      ],
      "01"
    );
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${36}m${`rule`}\u001b[${39}m`} - one rule, linebreaks`,
  (t) => {
    const gathered = [];
    ct(
      `<style>
.a-b{c}
</style>`,
      {
        tagCb: (obj) => {
          gathered.push(obj);
        },
      }
    );
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 7,
        },
        {
          type: "text",
          start: 7,
          end: 8,
        },
        {
          type: "rule",
          start: 8,
          end: 15,
          openingCurlyAt: 12,
          closingCurlyAt: 14,
          selectors: [
            {
              value: ".a-b",
              selectorStarts: 8,
              selectorEnds: 12,
            },
          ],
        },
        {
          type: "text",
          start: 15,
          end: 16,
        },
        {
          type: "tag",
          start: 16,
          end: 24,
        },
      ],
      "02"
    );
    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${36}m${`rule`}\u001b[${39}m`} - two selectors`,
  (t) => {
    const gathered = [];
    ct(`<style>.a,.b{c}</style>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 7,
        },
        {
          type: "rule",
          start: 7,
          end: 15,
          openingCurlyAt: 12,
          closingCurlyAt: 14,
          selectorsStart: 7,
          selectorsEnd: 12,
          selectors: [
            {
              value: ".a",
              selectorStarts: 7,
              selectorEnds: 9,
            },
            {
              value: ".b",
              selectorStarts: 10,
              selectorEnds: 12,
            },
          ],
        },
        {
          type: "tag",
          start: 15,
          end: 23,
        },
      ],
      "03"
    );
    t.end();
  }
);

tap.test(
  `04 - ${`\u001b[${36}m${`rule`}\u001b[${39}m`} - one rule, no linebreaks`,
  (t) => {
    const gathered = [];
    ct(
      `<style>

.a,  .b

{c}</style>`,
      {
        tagCb: (obj) => {
          gathered.push(obj);
        },
      }
    );
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 7,
        },
        {
          type: "text",
          start: 7,
          end: 9,
        },
        {
          type: "rule",
          start: 9,
          end: 21,
          openingCurlyAt: 18,
          closingCurlyAt: 20,
          selectorsStart: 9,
          selectorsEnd: 16,
          selectors: [
            {
              value: ".a",
              selectorStarts: 9,
              selectorEnds: 11,
            },
            {
              value: ".b",
              selectorStarts: 14,
              selectorEnds: 16,
            },
          ],
        },
        {
          type: "tag",
          start: 21,
          end: 29,
        },
      ],
      "04"
    );
    t.end();
  }
);

tap.test(
  `05 - ${`\u001b[${36}m${`rule`}\u001b[${39}m`} - dangling comma`,
  (t) => {
    const gathered = [];
    ct(`<style>.a,.b,{c}</style>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 7,
        },
        {
          type: "rule",
          start: 7,
          end: 16,
          openingCurlyAt: 13,
          closingCurlyAt: 15,
          selectorsStart: 7,
          selectorsEnd: 13,
          selectors: [
            {
              value: ".a",
              selectorStarts: 7,
              selectorEnds: 9,
            },
            {
              value: ".b",
              selectorStarts: 10,
              selectorEnds: 12,
            },
          ],
        },
        {
          type: "tag",
          start: 16,
          end: 24,
        },
      ],
      "05"
    );
    t.end();
  }
);

tap.test(
  `06 - ${`\u001b[${36}m${`rule`}\u001b[${39}m`} - double comma`,
  (t) => {
    const gathered = [];
    ct(`<style>.a,,.b{c}</style>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 7,
        },
        {
          type: "rule",
          start: 7,
          end: 16,
          openingCurlyAt: 13,
          closingCurlyAt: 15,
          selectorsStart: 7,
          selectorsEnd: 13,
          selectors: [
            {
              value: ".a",
              selectorStarts: 7,
              selectorEnds: 9,
            },
            {
              value: ".b",
              selectorStarts: 11,
              selectorEnds: 13,
            },
          ],
        },
        {
          type: "tag",
          start: 16,
          end: 24,
        },
      ],
      "06"
    );
    t.end();
  }
);

tap.test(
  `07 - ${`\u001b[${36}m${`rule`}\u001b[${39}m`} - esp tags can't have curlies`,
  (t) => {
    const gathered = [];
    ct(`<style>.b%{c}</style>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 7,
          tagNameStartsAt: 1,
          tagNameEndsAt: 6,
          tagName: "style",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: true,

          kind: null,
          attribs: [],
        },
        {
          type: "rule",
          start: 7,
          end: 13,
          openingCurlyAt: 10,
          closingCurlyAt: 12,
          selectorsStart: 7,
          selectorsEnd: 10,
          selectors: [
            {
              value: ".b%",
              selectorStarts: 7,
              selectorEnds: 10,
            },
          ],
        },
        {
          type: "tag",
          start: 13,
          end: 21,
          tagNameStartsAt: 15,
          tagNameEndsAt: 20,
          tagName: "style",
          recognised: true,
          closing: true,
          void: false,
          pureHTML: true,

          kind: null,
          attribs: [],
        },
      ],
      "07"
    );
    t.end();
  }
);

tap.test(
  `08 - ${`\u001b[${36}m${`rule`}\u001b[${39}m`} - esp tag false positives`,
  (t) => {
    const gathered = [];
    ct(
      `<style>
.a{x}}
.b{x}}
</style>`,
      {
        tagCb: (obj) => {
          gathered.push(obj);
        },
      }
    );
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 7,
          tagNameStartsAt: 1,
          tagNameEndsAt: 6,
          tagName: "style",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: true,

          kind: null,
          attribs: [],
        },
        {
          type: "text",
          start: 7,
          end: 8,
        },
        {
          type: "rule",
          start: 8,
          end: 13,
          openingCurlyAt: 10,
          closingCurlyAt: 12,
          selectorsStart: 8,
          selectorsEnd: 10,
          selectors: [
            {
              value: ".a",
              selectorStarts: 8,
              selectorEnds: 10,
            },
          ],
        },
        {
          type: "text",
          start: 13,
          end: 15,
        },
        {
          type: "rule",
          start: 15,
          end: 20,
          openingCurlyAt: 17,
          closingCurlyAt: 19,
          selectorsStart: 15,
          selectorsEnd: 17,
          selectors: [
            {
              value: ".b",
              selectorStarts: 15,
              selectorEnds: 17,
            },
          ],
        },
      ],
      "08"
    );
    t.end();
  }
);