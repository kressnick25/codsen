/**
 * codsen-tokenizer
 * HTML and CSS lexer aimed at code with fatal errors, accepts mixed coding languages
 * Version: 2.17.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/codsen-tokenizer
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.codsenTokenizer = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * arrayiffy-if-string
   * Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
   * Version: 3.11.33
   * Author: Roy Revelt, Codsen Ltd
   * License: MIT
   * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/arrayiffy-if-string
   */
  function arrayiffyString(something) {
    if (typeof something === "string") {
      if (something.length > 0) {
        return [something];
      }

      return [];
    }

    return something;
  }

  function isObj(something) {
    return something && _typeof(something) === "object" && !Array.isArray(something);
  }

  function isStr(something) {
    return typeof something === "string";
  }

  function march(str, fromIndexInclusive, whatToMatchVal, opts, special, getNextIdx) {
    var whatToMatchValVal = typeof whatToMatchVal === "function" ? whatToMatchVal() : whatToMatchVal;

    if (fromIndexInclusive < 0 && special && whatToMatchValVal === "EOL") {
      return whatToMatchValVal;
    }

    if (fromIndexInclusive >= str.length && !special) {
      return false;
    }

    var charsToCheckCount = special ? 1 : whatToMatchVal.length;
    var lastWasMismatched = false;
    var atLeastSomethingWasMatched = false;
    var patience = opts.maxMismatches;
    var i = fromIndexInclusive;
    var somethingFound = false;
    var firstCharacterMatched = false;
    var lastCharacterMatched = false;

    while (str[i]) {
      var nextIdx = getNextIdx(i);

      if (opts.trimBeforeMatching && str[i].trim() === "") {
        if (!str[nextIdx] && special && whatToMatchVal === "EOL") {
          return true;
        }

        i = getNextIdx(i);
        continue;
      }

      if (!opts.i && opts.trimCharsBeforeMatching.includes(str[i]) || opts.i && opts.trimCharsBeforeMatching.map(function (val) {
        return val.toLowerCase();
      }).includes(str[i].toLowerCase())) {
        if (special && whatToMatchVal === "EOL" && !str[nextIdx]) {
          return true;
        }

        i = getNextIdx(i);
        continue;
      }

      var charToCompareAgainst = nextIdx > i ? whatToMatchVal[whatToMatchVal.length - charsToCheckCount] : whatToMatchVal[charsToCheckCount - 1];

      if (!opts.i && str[i] === charToCompareAgainst || opts.i && str[i].toLowerCase() === charToCompareAgainst.toLowerCase()) {
        if (!somethingFound) {
          somethingFound = true;
        }

        if (!atLeastSomethingWasMatched) {
          atLeastSomethingWasMatched = true;
        }

        if (charsToCheckCount === whatToMatchVal.length) {
          firstCharacterMatched = true;
        } else if (charsToCheckCount === 1) {
          lastCharacterMatched = true;
        }

        charsToCheckCount -= 1;

        if (charsToCheckCount < 1) {
          return i;
        }
      } else {
        if (opts.maxMismatches && patience && i) {
          patience -= 1;

          for (var y = 0; y <= patience; y++) {
            var nextCharToCompareAgainst = nextIdx > i ? whatToMatchVal[whatToMatchVal.length - charsToCheckCount + 1 + y] : whatToMatchVal[charsToCheckCount - 2 - y];
            var nextCharInSource = str[getNextIdx(i)];

            if (nextCharToCompareAgainst && (!opts.i && str[i] === nextCharToCompareAgainst || opts.i && str[i].toLowerCase() === nextCharToCompareAgainst.toLowerCase()) && (!opts.firstMustMatch || charsToCheckCount !== whatToMatchVal.length)) {
              charsToCheckCount -= 2;
              somethingFound = true;
              break;
            } else if (nextCharInSource && nextCharToCompareAgainst && (!opts.i && nextCharInSource === nextCharToCompareAgainst || opts.i && nextCharInSource.toLowerCase() === nextCharToCompareAgainst.toLowerCase()) && (!opts.firstMustMatch || charsToCheckCount !== whatToMatchVal.length)) {
              charsToCheckCount -= 1;
              somethingFound = true;
              break;
            } else if (nextCharToCompareAgainst === undefined && patience >= 0 && somethingFound && (!opts.firstMustMatch || firstCharacterMatched) && (!opts.lastMustMatch || lastCharacterMatched)) {
              return i;
            }
          }

          if (!somethingFound) {
            lastWasMismatched = i;
          }
        } else if (i === 0 && charsToCheckCount === 1 && !opts.lastMustMatch && atLeastSomethingWasMatched) {
          return 0;
        } else {
          return false;
        }
      }

      if (lastWasMismatched !== false && lastWasMismatched !== i) {
        lastWasMismatched = false;
      }

      if (charsToCheckCount < 1) {
        return i;
      }

      i = getNextIdx(i);
    }

    if (charsToCheckCount > 0) {
      if (special && whatToMatchValVal === "EOL") {
        return true;
      }

      if (opts.maxMismatches >= charsToCheckCount && atLeastSomethingWasMatched) {
        return lastWasMismatched || 0;
      }

      return false;
    }
  }

  function main(mode, str, position, originalWhatToMatch, originalOpts) {
    var defaults = {
      i: false,
      trimBeforeMatching: false,
      trimCharsBeforeMatching: [],
      maxMismatches: 0,
      firstMustMatch: false,
      lastMustMatch: false
    };

    if (isObj(originalOpts) && Object.prototype.hasOwnProperty.call(originalOpts, "trimBeforeMatching") && typeof originalOpts.trimBeforeMatching !== "boolean") {
      throw new Error("string-match-left-right/".concat(mode, "(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(originalOpts.trimBeforeMatching) ? " Did you mean to use opts.trimCharsBeforeMatching?" : ""));
    }

    var opts = _objectSpread2(_objectSpread2({}, defaults), originalOpts);

    opts.trimCharsBeforeMatching = arrayiffyString(opts.trimCharsBeforeMatching);
    opts.trimCharsBeforeMatching = opts.trimCharsBeforeMatching.map(function (el) {
      return isStr(el) ? el : String(el);
    });

    if (!isStr(str)) {
      return false;
    }

    if (!str.length) {
      return false;
    }

    if (!Number.isInteger(position) || position < 0) {
      throw new Error("string-match-left-right/".concat(mode, "(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(_typeof(position), ", equal to:\n").concat(JSON.stringify(position, null, 4)));
    }

    var whatToMatch;
    var special;

    if (isStr(originalWhatToMatch)) {
      whatToMatch = [originalWhatToMatch];
    } else if (Array.isArray(originalWhatToMatch)) {
      whatToMatch = originalWhatToMatch;
    } else if (!originalWhatToMatch) {
      whatToMatch = originalWhatToMatch;
    } else if (typeof originalWhatToMatch === "function") {
      whatToMatch = [];
      whatToMatch.push(originalWhatToMatch);
    } else {
      throw new Error("string-match-left-right/".concat(mode, "(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(_typeof(originalWhatToMatch), ", equal to:\n").concat(JSON.stringify(originalWhatToMatch, null, 4)));
    }

    if (originalOpts && !isObj(originalOpts)) {
      throw new Error("string-match-left-right/".concat(mode, "(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(_typeof(originalOpts), "\", and equal to:\n").concat(JSON.stringify(originalOpts, null, 4)));
    }

    var culpritsIndex;
    var culpritsVal;

    if (opts.trimCharsBeforeMatching.some(function (el, i) {
      if (el.length > 1) {
        culpritsIndex = i;
        culpritsVal = el;
        return true;
      }

      return false;
    })) {
      throw new Error("string-match-left-right/".concat(mode, "(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(culpritsIndex, " is longer than 1 character, ").concat(culpritsVal.length, " (equals to ").concat(culpritsVal, "). Please split it into separate characters and put into array as separate elements."));
    }

    if (!whatToMatch || !Array.isArray(whatToMatch) || Array.isArray(whatToMatch) && !whatToMatch.length || Array.isArray(whatToMatch) && whatToMatch.length === 1 && isStr(whatToMatch[0]) && !whatToMatch[0].trim()) {
      if (typeof opts.cb === "function") {
        var firstCharOutsideIndex;
        var startingPosition = position;

        if (mode === "matchLeftIncl" || mode === "matchRight") {
          startingPosition += 1;
        }

        if (mode[5] === "L") {
          for (var y = startingPosition; y--;) {
            var currentChar = str[y];

            if ((!opts.trimBeforeMatching || opts.trimBeforeMatching && currentChar !== undefined && currentChar.trim()) && (!opts.trimCharsBeforeMatching.length || currentChar !== undefined && !opts.trimCharsBeforeMatching.includes(currentChar))) {
              firstCharOutsideIndex = y;
              break;
            }
          }
        } else if (mode.startsWith("matchRight")) {
          for (var _y = startingPosition; _y < str.length; _y++) {
            var _currentChar = str[_y];

            if ((!opts.trimBeforeMatching || opts.trimBeforeMatching && _currentChar.trim()) && (!opts.trimCharsBeforeMatching.length || !opts.trimCharsBeforeMatching.includes(_currentChar))) {
              firstCharOutsideIndex = _y;
              break;
            }
          }
        }

        if (firstCharOutsideIndex === undefined) {
          return false;
        }

        var wholeCharacterOutside = str[firstCharOutsideIndex];
        var indexOfTheCharacterAfter = firstCharOutsideIndex + 1;
        var theRemainderOfTheString = "";

        if (indexOfTheCharacterAfter && indexOfTheCharacterAfter > 0) {
          theRemainderOfTheString = str.slice(0, indexOfTheCharacterAfter);
        }

        if (mode[5] === "L") {
          return opts.cb(wholeCharacterOutside, theRemainderOfTheString, firstCharOutsideIndex);
        }

        if (firstCharOutsideIndex && firstCharOutsideIndex > 0) {
          theRemainderOfTheString = str.slice(firstCharOutsideIndex);
        }

        return opts.cb(wholeCharacterOutside, theRemainderOfTheString, firstCharOutsideIndex);
      }

      var extraNote = "";

      if (!originalOpts) {
        extraNote = " More so, the whole options object, the fourth input argument, is missing!";
      }

      throw new Error("string-match-left-right/".concat(mode, "(): [THROW_ID_08] the third argument, \"whatToMatch\", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key \"cb\" is not set!").concat(extraNote));
    }

    for (var i = 0, len = whatToMatch.length; i < len; i++) {
      special = typeof whatToMatch[i] === "function";
      var whatToMatchVal = whatToMatch[i];
      var fullCharacterInFront = void 0;
      var indexOfTheCharacterInFront = void 0;
      var restOfStringInFront = "";
      var _startingPosition = position;

      if (mode === "matchRight") {
        _startingPosition += 1;
      } else if (mode === "matchLeft") {
        _startingPosition -= 1;
      }

      var found = march(str, _startingPosition, whatToMatchVal, opts, special, function (i2) {
        return mode[5] === "L" ? i2 - 1 : i2 + 1;
      });

      if (found && special && typeof whatToMatchVal === "function" && whatToMatchVal() === "EOL") {
        return whatToMatchVal() && (opts.cb ? opts.cb(fullCharacterInFront, restOfStringInFront, indexOfTheCharacterInFront) : true) ? whatToMatchVal() : false;
      }

      if (Number.isInteger(found)) {
        indexOfTheCharacterInFront = mode.startsWith("matchLeft") ? found - 1 : found + 1;

        if (mode[5] === "L") {
          restOfStringInFront = str.slice(0, found);
        } else {
          restOfStringInFront = str.slice(indexOfTheCharacterInFront);
        }
      }

      if (indexOfTheCharacterInFront < 0) {
        indexOfTheCharacterInFront = undefined;
      }

      if (str[indexOfTheCharacterInFront]) {
        fullCharacterInFront = str[indexOfTheCharacterInFront];
      }

      if (Number.isInteger(found) && (opts.cb ? opts.cb(fullCharacterInFront, restOfStringInFront, indexOfTheCharacterInFront) : true)) {
        return whatToMatchVal;
      }
    }

    return false;
  }

  function matchLeftIncl(str, position, whatToMatch, opts) {
    return main("matchLeftIncl", str, position, whatToMatch, opts);
  }

  function matchLeft(str, position, whatToMatch, opts) {
    return main("matchLeft", str, position, whatToMatch, opts);
  }

  function matchRightIncl(str, position, whatToMatch, opts) {
    return main("matchRightIncl", str, position, whatToMatch, opts);
  }

  function matchRight(str, position, whatToMatch, opts) {
    return main("matchRight", str, position, whatToMatch, opts);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var lodash_clonedeep = createCommonjsModule(function (module, exports) {
    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;
    /** Used to stand-in for `undefined` hash values. */

    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /** Used as references for various `Number` constants. */

    var MAX_SAFE_INTEGER = 9007199254740991;
    /** `Object#toString` result references. */

    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]',
        weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';
    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */

    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    /** Used to match `RegExp` flags from their coerced string values. */

    var reFlags = /\w*$/;
    /** Used to detect host constructors (Safari). */

    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    /** Used to detect unsigned integer values. */

    var reIsUint = /^(?:0|[1-9]\d*)$/;
    /** Used to identify `toStringTag` values supported by `_.clone`. */

    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    /** Detect free variable `global` from Node.js. */

    var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    /** Detect free variable `self`. */

    var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */

    var root = freeGlobal || freeSelf || Function('return this')();
    /** Detect free variable `exports`. */

    var freeExports =  exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /**
     * Adds the key-value `pair` to `map`.
     *
     * @private
     * @param {Object} map The map to modify.
     * @param {Array} pair The key-value pair to add.
     * @returns {Object} Returns `map`.
     */

    function addMapEntry(map, pair) {
      // Don't return `map.set` because it's not chainable in IE 11.
      map.set(pair[0], pair[1]);
      return map;
    }
    /**
     * Adds `value` to `set`.
     *
     * @private
     * @param {Object} set The set to modify.
     * @param {*} value The value to add.
     * @returns {Object} Returns `set`.
     */


    function addSetEntry(set, value) {
      // Don't return `set.add` because it's not chainable in IE 11.
      set.add(value);
      return set;
    }
    /**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */


    function arrayEach(array, iteratee) {
      var index = -1,
          length = array ? array.length : 0;

      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }

      return array;
    }
    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */


    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }

      return array;
    }
    /**
     * A specialized version of `_.reduce` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the first element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */


    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1,
          length = array ? array.length : 0;

      if (initAccum && length) {
        accumulator = array[++index];
      }

      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }

      return accumulator;
    }
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */


    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }

      return result;
    }
    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */


    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }
    /**
     * Checks if `value` is a host object in IE < 9.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
     */


    function isHostObject(value) {
      // Many host objects are `Object` objects that can coerce to strings
      // despite having improperly defined `toString` methods.
      var result = false;

      if (value != null && typeof value.toString != 'function') {
        try {
          result = !!(value + '');
        } catch (e) {}
      }

      return result;
    }
    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */


    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);
      map.forEach(function (value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */


    function overArg(func, transform) {
      return function (arg) {
        return func(transform(arg));
      };
    }
    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */


    function setToArray(set) {
      var index = -1,
          result = Array(set.size);
      set.forEach(function (value) {
        result[++index] = value;
      });
      return result;
    }
    /** Used for built-in method references. */


    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;
    /** Used to detect overreaching core-js shims. */

    var coreJsData = root['__core-js_shared__'];
    /** Used to detect methods masquerading as native. */

    var maskSrcKey = function () {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? 'Symbol(src)_1.' + uid : '';
    }();
    /** Used to resolve the decompiled source of functions. */


    var funcToString = funcProto.toString;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var objectToString = objectProto.toString;
    /** Used to detect if a method is native. */

    var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    /** Built-in value references. */

    var Buffer = moduleExports ? root.Buffer : undefined,
        _Symbol = root.Symbol,
        Uint8Array = root.Uint8Array,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeKeys = overArg(Object.keys, Object);
    /* Built-in method references that are verified to be native. */

    var DataView = getNative(root, 'DataView'),
        Map = getNative(root, 'Map'),
        Promise = getNative(root, 'Promise'),
        Set = getNative(root, 'Set'),
        WeakMap = getNative(root, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');
    /** Used to detect maps, sets, and weakmaps. */

    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);
    /** Used to convert symbols to primitives and strings. */

    var symbolProto = _Symbol ? _Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function Hash(entries) {
      var index = -1,
          length = entries ? entries.length : 0;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */


    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function hashGet(key) {
      var data = this.__data__;

      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }

      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }
    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }
    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */


    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
      return this;
    } // Add methods to `Hash`.


    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function ListCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */


    function listCacheClear() {
      this.__data__ = [];
    }
    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }

      var lastIndex = data.length - 1;

      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }

      return true;
    }
    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);
      return index < 0 ? undefined : data[index][1];
    }
    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */


    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }

      return this;
    } // Add methods to `ListCache`.


    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function MapCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */


    function mapCacheClear() {
      this.__data__ = {
        'hash': new Hash(),
        'map': new (Map || ListCache)(),
        'string': new Hash()
      };
    }
    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function mapCacheDelete(key) {
      return getMapData(this, key)['delete'](key);
    }
    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */


    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    } // Add methods to `MapCache`.


    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */


    function stackClear() {
      this.__data__ = new ListCache();
    }
    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function stackDelete(key) {
      return this.__data__['delete'](key);
    }
    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function stackGet(key) {
      return this.__data__.get(key);
    }
    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function stackHas(key) {
      return this.__data__.has(key);
    }
    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */


    function stackSet(key, value) {
      var cache = this.__data__;

      if (cache instanceof ListCache) {
        var pairs = cache.__data__;

        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          return this;
        }

        cache = this.__data__ = new MapCache(pairs);
      }

      cache.set(key, value);
      return this;
    } // Add methods to `Stack`.


    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */

    function arrayLikeKeys(value, inherited) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      // Safari 9 makes `arguments.length` enumerable in strict mode.
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length,
          skipIndexes = !!length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
          result.push(key);
        }
      }

      return result;
    }
    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */


    function assignValue(object, key, value) {
      var objValue = object[key];

      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
        object[key] = value;
      }
    }
    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */


    function assocIndexOf(array, key) {
      var length = array.length;

      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }

      return -1;
    }
    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */


    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {boolean} [isFull] Specify a clone including symbols.
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */


    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }

      if (result !== undefined) {
        return result;
      }

      if (!isObject(value)) {
        return value;
      }

      var isArr = isArray(value);

      if (isArr) {
        result = initCloneArray(value);

        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }

        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          if (isHostObject(value)) {
            return object ? value : {};
          }

          result = initCloneObject(isFunc ? {} : value);

          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }

          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      } // Check for circular references and return its corresponding clone.


      stack || (stack = new Stack());
      var stacked = stack.get(value);

      if (stacked) {
        return stacked;
      }

      stack.set(value, result);

      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }

      arrayEach(props || value, function (subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        } // Recursively populate clone (susceptible to call stack limits).


        assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
      });
      return result;
    }
    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */


    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }
    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    /**
     * The base implementation of `getTag`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */


    function baseGetTag(value) {
      return objectToString.call(value);
    }
    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */


    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }

      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */


    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }

      var result = [];

      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }

      return result;
    }
    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */


    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }

      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }
    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */


    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */


    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */


    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor());
    }
    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */


    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */


    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor());
    }
    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */


    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */


    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */


    function copyArray(source, array) {
      var index = -1,
          length = source.length;
      array || (array = Array(length));

      while (++index < length) {
        array[index] = source[index];
      }

      return array;
    }
    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */


    function copyObject(source, props, object, customizer) {
      object || (object = {});
      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        assignValue(object, key, newValue === undefined ? source[key] : newValue);
      }

      return object;
    }
    /**
     * Copies own symbol properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */


    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */


    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
    }
    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */


    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }
    /**
     * Creates an array of the own enumerable symbol properties of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */


    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */

    var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11,
    // for data views in Edge < 14, and promises in Node.js.

    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function getTag(value) {
        var result = objectToString.call(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : undefined;

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;

            case mapCtorString:
              return mapTag;

            case promiseCtorString:
              return promiseTag;

            case setCtorString:
              return setTag;

            case weakMapCtorString:
              return weakMapTag;
          }
        }

        return result;
      };
    }
    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */


    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length); // Add properties assigned by `RegExp#exec`.

      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }

      return result;
    }
    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */


    function initCloneObject(object) {
      return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */


    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;

      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }
    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */


    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */


    function isKeyable(value) {
      var type = _typeof(value);

      return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
    }
    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */


    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */


    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
      return value === proto;
    }
    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to process.
     * @returns {string} Returns the source code.
     */


    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}

        try {
          return func + '';
        } catch (e) {}
      }

      return '';
    }
    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */


    function cloneDeep(value) {
      return baseClone(value, true, true);
    }
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */


    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */


    function isArguments(value) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
    }
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */


    var isArray = Array.isArray;
    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */

    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */


    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */


    var isBuffer = nativeIsBuffer || stubFalse;
    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */

    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8-9 which returns 'object' for typed array and other constructors.
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }
    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */


    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */


    function isObject(value) {
      var type = _typeof(value);

      return !!value && (type == 'object' || type == 'function');
    }
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */


    function isObjectLike(value) {
      return !!value && _typeof(value) == 'object';
    }
    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */


    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */


    function stubArray() {
      return [];
    }
    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */


    function stubFalse() {
      return false;
    }

    module.exports = cloneDeep;
  });

  /** Used for built-in method references. */


  var funcProto = Function.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString = funcProto.toString;
  /** Used to infer the `Object` constructor. */

  var objectCtorString = funcToString.call(Object);

  function rightMain(str, idx, stopAtNewlines) {
    if (typeof str !== "string" || !str.length) {
      return null;
    }

    if (!idx || typeof idx !== "number") {
      idx = 0;
    }

    if (!str[idx + 1]) {
      return null;
    }

    if (str[idx + 1] && (!stopAtNewlines && str[idx + 1].trim() || stopAtNewlines && (str[idx + 1].trim() || "\n\r".includes(str[idx + 1])))) {
      return idx + 1;
    }

    if (str[idx + 2] && (!stopAtNewlines && str[idx + 2].trim() || stopAtNewlines && (str[idx + 2].trim() || "\n\r".includes(str[idx + 2])))) {
      return idx + 2;
    }

    for (var i = idx + 1, len = str.length; i < len; i++) {
      if (str[i] && (!stopAtNewlines && str[i].trim() || stopAtNewlines && (str[i].trim() || "\n\r".includes(str[i])))) {
        return i;
      }
    }

    return null;
  }

  function right(str, idx) {
    return rightMain(str, idx, false);
  }

  function leftMain(str, idx, stopAtNewlines) {
    if (typeof str !== "string" || !str.length) {
      return null;
    }

    if (!idx || typeof idx !== "number") {
      idx = 0;
    }

    if (idx < 1) {
      return null;
    }

    if (str[~-idx] && (!stopAtNewlines && str[~-idx].trim() || stopAtNewlines && (str[~-idx].trim() || "\n\r".includes(str[~-idx])))) {
      return ~-idx;
    }

    if (str[idx - 2] && (!stopAtNewlines && str[idx - 2].trim() || stopAtNewlines && (str[idx - 2].trim() || "\n\r".includes(str[idx - 2])))) {
      return idx - 2;
    }

    for (var i = idx; i--;) {
      if (str[i] && (!stopAtNewlines && str[i].trim() || stopAtNewlines && (str[i].trim() || "\n\r".includes(str[i])))) {
        return i;
      }
    }

    return null;
  }

  function left(str, idx) {
    return leftMain(str, idx, false);
  }

  /**
   * html-all-known-attributes
   * All HTML attributes known to the Humanity
   * Version: 2.0.4
   * Author: Roy Revelt, Codsen Ltd
   * License: MIT
   * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/all-named-html-entities
   */
  var allHtmlAttribs = new Set(["abbr", "accept", "accept-charset", "accesskey", "action", "align", "alink", "allow", "alt", "archive", "async", "autocapitalize", "autocomplete", "autofocus", "autoplay", "axis", "background", "background-attachment", "background-color", "background-image", "background-position", "background-position-x", "background-position-y", "background-repeat", "bgcolor", "border", "border-bottom", "border-bottom-color", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-style", "border-top", "border-top-color", "border-top-style", "border-top-width", "border-width", "buffered", "capture", "cellpadding", "cellspacing", "challenge", "char", "charoff", "charset", "checked", "cite", "class", "classid", "clear", "clip", "code", "codebase", "codetype", "color", "cols", "colspan", "column-span", "compact", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "csp", "cursor", "data", "data-*", "datetime", "declare", "decoding", "default", "defer", "dir", "direction", "dirname", "disabled", "display", "download", "draggable", "dropzone", "enctype", "enterkeyhint", "face", "filter", "float", "font", "font-color", "font-emphasize", "font-emphasize-position", "font-emphasize-style", "font-family", "font-size", "font-style", "font-variant", "font-weight", "for", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "frame", "frameborder", "frontuid", "headers", "height", "hidden", "high", "horiz-align", "href", "hreflang", "hspace", "http-equiv", "icon", "id", "importance", "inputmode", "integrity", "intrinsicsize", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "layout-flow", "layout-grid", "layout-grid-char", "layout-grid-line", "layout-grid-mode", "layout-grid-type", "left", "letter-spacing", "line-break", "line-height", "link", "list", "list-image-1", "list-image-2", "list-image-3", "list-style", "list-style-image", "list-style-position", "list-style-type", "loading", "longdesc", "loop", "low", "manifest", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marginheight", "marginwidth", "max", "maxlength", "media", "method", "min", "minlength", "mso-ansi-font-size", "mso-ansi-font-style", "mso-ansi-font-weight", "mso-ansi-language", "mso-ascii-font-family", "mso-background", "mso-background-source", "mso-baseline-position", "mso-bidi-flag", "mso-bidi-font-family", "mso-bidi-font-size", "mso-bidi-font-style", "mso-bidi-font-weight", "mso-bidi-language", "mso-bookmark", "mso-border-alt", "mso-border-between", "mso-border-between-color", "mso-border-between-style", "mso-border-between-width", "mso-border-bottom-alt", "mso-border-bottom-color-alt", "mso-border-bottom-source", "mso-border-bottom-style-alt", "mso-border-bottom-width-alt", "mso-border-color-alt", "mso-border-effect", "mso-border-left-alt", "mso-border-left-color-alt", "mso-border-left-source", "mso-border-left-style-alt", "mso-border-left-width-alt", "mso-border-right-alt", "mso-border-right-color-alt", "mso-border-right-source", "mso-border-right-style-alt", "mso-border-right-width-alt", "mso-border-shadow", "mso-border-source", "mso-border-style-alt", "mso-border-top-alt", "mso-border-top-color-alt", "mso-border-top-source", "mso-border-top-style-alt", "mso-border-top-width-alt", "mso-border-width-alt", "mso-break-type", "mso-build", "mso-build-after-action", "mso-build-after-color", "mso-build-auto-secs", "mso-build-avi", "mso-build-dual-id", "mso-build-order", "mso-build-sound-name", "mso-bullet-image", "mso-cell-special", "mso-cellspacing", "mso-char-indent", "mso-char-indent-count", "mso-char-indent-size", "mso-char-type", "mso-char-wrap", "mso-color-alt", "mso-color-index", "mso-color-source", "mso-column-break-before", "mso-column-separator", "mso-columns", "mso-comment-author", "mso-comment-continuation", "mso-comment-id", "mso-comment-reference", "mso-data-placement", "mso-default-height", "mso-default-width", "mso-diagonal-down", "mso-diagonal-down-color", "mso-diagonal-down-source", "mso-diagonal-down-style", "mso-diagonal-down-width", "mso-diagonal-up", "mso-diagonal-up-color", "mso-diagonal-up-source", "mso-diagonal-up-style", "mso-diagonal-up-width", "mso-displayed-decimal-separator", "mso-displayed-thousand-separator", "mso-element", "mso-element-anchor-horizontal", "mso-element-anchor-lock", "mso-element-anchor-vertical", "mso-element-frame-height", "mso-element-frame-hspace", "mso-element-frame-vspace", "mso-element-frame-width", "mso-element-left", "mso-element-linespan", "mso-element-top", "mso-element-wrap", "mso-endnote-continuation-notice", "mso-endnote-continuation-notice-id", "mso-endnote-continuation-notice-src", "mso-endnote-continuation-separator", "mso-endnote-continuation-separator-id", "mso-endnote-continuation-separator-src", "mso-endnote-display", "mso-endnote-id", "mso-endnote-numbering", "mso-endnote-numbering-restart", "mso-endnote-numbering-start", "mso-endnote-numbering-style", "mso-endnote-position", "mso-endnote-separator", "mso-endnote-separator-id", "mso-endnote-separator-src", "mso-even-footer", "mso-even-footer-id", "mso-even-footer-src", "mso-even-header", "mso-even-header-id", "mso-even-header-src", "mso-facing-pages", "mso-fareast-font-family", "mso-fareast-hint", "mso-fareast-language", "mso-field-change", "mso-field-change-author", "mso-field-change-time", "mso-field-change-value", "mso-field-code", "mso-field-lock", "mso-fills-color", "mso-first-footer", "mso-first-footer-id", "mso-first-footer-src", "mso-first-header", "mso-first-header-id", "mso-first-header-src", "mso-font-alt", "mso-font-charset", "mso-font-format", "mso-font-info", "mso-font-info-charset", "mso-font-info-type", "mso-font-kerning", "mso-font-pitch", "mso-font-signature", "mso-font-signature-csb-one", "mso-font-signature-csb-two", "mso-font-signature-usb-four", "mso-font-signature-usb-one", "mso-font-signature-usb-three", "mso-font-signature-usb-two", "mso-font-src", "mso-font-width", "mso-footer", "mso-footer-data", "mso-footer-id", "mso-footer-margin", "mso-footer-src", "mso-footnote-continuation-notice", "mso-footnote-continuation-notice-id", "mso-footnote-continuation-notice-src", "mso-footnote-continuation-separator", "mso-footnote-continuation-separator-id", "mso-footnote-continuation-separator-src", "mso-footnote-id", "mso-footnote-numbering", "mso-footnote-numbering-restart", "mso-footnote-numbering-start", "mso-footnote-numbering-style", "mso-footnote-position", "mso-footnote-separator", "mso-footnote-separator-id", "mso-footnote-separator-src", "mso-foreground", "mso-forms-protection", "mso-generic-font-family", "mso-grid-bottom", "mso-grid-bottom-count", "mso-grid-left", "mso-grid-left-count", "mso-grid-right", "mso-grid-right-count", "mso-grid-top", "mso-grid-top-count", "mso-gutter-direction", "mso-gutter-margin", "mso-gutter-position", "mso-hansi-font-family", "mso-header", "mso-header-data", "mso-header-id", "mso-header-margin", "mso-header-src", "mso-height-alt", "mso-height-rule", "mso-height-source", "mso-hide", "mso-highlight", "mso-horizontal-page-align", "mso-hyphenate", "mso-ignore", "mso-kinsoku-overflow", "mso-layout-grid-align", "mso-layout-grid-char-alt", "mso-layout-grid-origin", "mso-level-inherit", "mso-level-legacy", "mso-level-legacy-indent", "mso-level-legacy-space", "mso-level-legal-format", "mso-level-number-format", "mso-level-number-position", "mso-level-numbering", "mso-level-reset-level", "mso-level-start-at", "mso-level-style-link", "mso-level-suffix", "mso-level-tab-stop", "mso-level-text", "mso-line-break-override", "mso-line-grid", "mso-line-height-alt", "mso-line-height-rule", "mso-line-numbers-count-by", "mso-line-numbers-distance", "mso-line-numbers-restart", "mso-line-numbers-start", "mso-line-spacing", "mso-linked-frame", "mso-list", "mso-list-change", "mso-list-change-author", "mso-list-change-time", "mso-list-change-values", "mso-list-id", "mso-list-ins", "mso-list-ins-author", "mso-list-ins-time", "mso-list-name", "mso-list-template-ids", "mso-list-type", "mso-margin-bottom-alt", "mso-margin-left-alt", "mso-margin-top-alt", "mso-mirror-margins", "mso-negative-indent-tab", "mso-number-format", "mso-outline-level", "mso-outline-parent", "mso-outline-parent-col", "mso-outline-parent-row", "mso-outline-parent-visibility", "mso-outline-style", "mso-padding-alt", "mso-padding-between", "mso-padding-bottom-alt", "mso-padding-left-alt", "mso-padding-right-alt", "mso-padding-top-alt", "mso-page-border-aligned", "mso-page-border-art", "mso-page-border-bottom-art", "mso-page-border-display", "mso-page-border-left-art", "mso-page-border-offset-from", "mso-page-border-right-art", "mso-page-border-surround-footer", "mso-page-border-surround-header", "mso-page-border-top-art", "mso-page-border-z-order", "mso-page-numbers", "mso-page-numbers-chapter-separator", "mso-page-numbers-chapter-style", "mso-page-numbers-start", "mso-page-numbers-style", "mso-page-orientation", "mso-page-scale", "mso-pagination", "mso-panose-arm-style", "mso-panose-contrast", "mso-panose-family-type", "mso-panose-letterform", "mso-panose-midline", "mso-panose-proportion", "mso-panose-serif-style", "mso-panose-stroke-variation", "mso-panose-weight", "mso-panose-x-height", "mso-paper-source", "mso-paper-source-first-page", "mso-paper-source-other-pages", "mso-pattern", "mso-pattern-color", "mso-pattern-style", "mso-print-area", "mso-print-color", "mso-print-gridlines", "mso-print-headings", "mso-print-resolution", "mso-print-sheet-order", "mso-print-title-column", "mso-print-title-row", "mso-prop-change", "mso-prop-change-author", "mso-prop-change-time", "mso-protection", "mso-rotate", "mso-row-margin-left", "mso-row-margin-right", "mso-ruby-merge", "mso-ruby-visibility", "mso-scheme-fill-color", "mso-scheme-shadow-color", "mso-shading", "mso-shadow-color", "mso-space-above", "mso-space-below", "mso-spacerun", "mso-special-character", "mso-special-format", "mso-style-id", "mso-style-name", "mso-style-next", "mso-style-parent", "mso-style-type", "mso-style-update", "mso-subdocument", "mso-symbol-font-family", "mso-tab-count", "mso-table-anchor-horizontal", "mso-table-anchor-vertical", "mso-table-bspace", "mso-table-del-author", "mso-table-del-time", "mso-table-deleted", "mso-table-dir", "mso-table-ins-author", "mso-table-ins-time", "mso-table-inserted", "mso-table-layout-alt", "mso-table-left", "mso-table-lspace", "mso-table-overlap", "mso-table-prop-author", "mso-table-prop-change", "mso-table-prop-time", "mso-table-rspace", "mso-table-top", "mso-table-tspace", "mso-table-wrap", "mso-text-animation", "mso-text-combine-brackets", "mso-text-combine-id", "mso-text-control", "mso-text-fit-id", "mso-text-indent-alt", "mso-text-orientation", "mso-text-raise", "mso-title-page", "mso-tny-compress", "mso-unsynced", "mso-vertical-align-alt", "mso-vertical-align-special", "mso-vertical-page-align", "mso-width-alt", "mso-width-source", "mso-word-wrap", "mso-xlrowspan", "mso-zero-height", "multiple", "muted", "name", "nav-banner-image", "navbutton_background_color", "navbutton_home_hovered", "navbutton_home_normal", "navbutton_home_pushed", "navbutton_horiz_hovered", "navbutton_horiz_normal", "navbutton_horiz_pushed", "navbutton_next_hovered", "navbutton_next_normal", "navbutton_next_pushed", "navbutton_prev_hovered", "navbutton_prev_normal", "navbutton_prev_pushed", "navbutton_up_hovered", "navbutton_up_normal", "navbutton_up_pushed", "navbutton_vert_hovered", "navbutton_vert_normal", "navbutton_vert_pushed", "nohref", "noresize", "noshade", "novalidate", "nowrap", "object", "onblur", "onchange", "onclick", "ondblclick", "onfocus", "onkeydown", "onkeypress", "onkeyup", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onreset", "onselect", "onsubmit", "onunload", "open", "optimum", "overflow", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "panose-1", "pattern", "ping", "placeholder", "position", "poster", "preload", "profile", "prompt", "punctuation-trim", "punctuation-wrap", "radiogroup", "readonly", "referrerpolicy", "rel", "required", "rev", "reversed", "right", "row-span", "rows", "rowspan", "ruby-align", "ruby-overhang", "ruby-position", "rules", "sandbox", "scheme", "scope", "scoped", "scrolling", "selected", "separator-image", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "standby", "start", "step", "style", "summary", "tab-interval", "tab-stops", "tabindex", "table-border-color-dark", "table-border-color-light", "table-layout", "target", "text", "text-align", "text-autospace", "text-combine", "text-decoration", "text-effect", "text-fit", "text-indent", "text-justify", "text-justify-trim", "text-kashida", "text-line-through", "text-shadow", "text-transform", "text-underline", "text-underline-color", "text-underline-style", "title", "top", "top-bar-button", "translate", "type", "unicode-bidi", "urlId", "usemap", "valign", "value", "valuetype", "version", "vert-align", "vertical-align", "visibility", "vlink", "vnd.ms-excel.numberformat", "vspace", "white-space", "width", "word-break", "word-spacing", "wrap", "xmlns", "z-index"]);

  /**
   * is-char-suitable-for-html-attr-name
   * Is given character suitable to be in an HTML attribute's name?
   * Version: 1.1.5
   * Author: Roy Revelt, Codsen Ltd
   * License: MIT
   * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-char-suitable-for-html-attr-name
   */
  function charSuitableForHTMLAttrName(char) {
    return typeof char === "string" && (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123 || char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91 || char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58 || char === ":" || char === "-");
  }

  function ensureXIsNotPresentBeforeOneOfY(str, startingIdx, x) {
    var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    var _loop = function _loop(i, len) {
      if (y.some(function (oneOfStr) {
        return str.startsWith(oneOfStr, i);
      })) {
        return {
          v: true
        };
      }

      if (str[i] === x) {
        return {
          v: false
        };
      }
    };

    for (var i = startingIdx, len = str.length; i < len; i++) {
      var _ret = _loop(i);

      if (_typeof(_ret) === "object") return _ret.v;
    }

    return true;
  }

  function xBeforeYOnTheRight(str, startingIdx, x, y) {
    for (var i = startingIdx, len = str.length; i < len; i++) {
      if (str.startsWith(x, i)) {
        return true;
      }

      if (str.startsWith(y, i)) {
        return false;
      }
    }

    return false;
  }

  function plausibleAttrStartsAtX(str, start) {
    if (!charSuitableForHTMLAttrName(str[start]) || !start) {
      return false;
    }

    var regex = /^[a-zA-Z0-9:-]*(\s*[=]?\s*((?:'[^']*')|(?:"[^"]*")))|( [^/>'"=]*['"])/;
    return regex.test(str.slice(start));
  }

  function guaranteedAttrStartsAtX(str, start) {
    if (!charSuitableForHTMLAttrName(str[start]) || !start) {
      return false;
    }

    var regex = /^[a-zA-Z0-9:-]*=(((?:'[^']*')|(?:"[^"]*"))|((?:['"][^'"]*['"]\s*\/?>)))/;
    return regex.test(str.slice(start));
  }

  function findAttrNameCharsChunkOnTheLeft(str, i) {
    if (!charSuitableForHTMLAttrName(str[left(str, i)])) {
      return;
    }

    for (var y = i; y--;) {
      if (str[y].trim().length && !charSuitableForHTMLAttrName(str[y])) {
        return str.slice(y + 1, i);
      }
    }
  }

  function makeTheQuoteOpposite(quoteChar) {
    return quoteChar === "'" ? "\"" : "'";
  }

  function isAttrClosing(str, idxOfAttrOpening, isThisClosingIdx) {
    if (typeof str !== "string" || !str.trim() || !Number.isInteger(idxOfAttrOpening) || !Number.isInteger(isThisClosingIdx) || !str[idxOfAttrOpening] || !str[isThisClosingIdx] || idxOfAttrOpening >= isThisClosingIdx) {
      return false;
    }

    var openingQuote = "'\"".includes(str[idxOfAttrOpening]) ? str[idxOfAttrOpening] : null;
    var oppositeToOpeningQuote = null;

    if (openingQuote) {
      oppositeToOpeningQuote = makeTheQuoteOpposite(openingQuote);
    }

    var chunkStartsAt;
    var quotesCount = new Map().set("'", 0).set("\"", 0).set("matchedPairs", 0);
    var lastQuoteAt = null;
    var totalQuotesCount = 0;
    var lastQuoteWasMatched = false;
    var lastMatchedQuotesPairsStartIsAt = false;
    var lastMatchedQuotesPairsEndIsAt = false;
    var lastCapturedChunk;
    var lastChunkWasCapturedAfterSuspectedClosing = false;
    var closingBracketMet = false;
    var openingBracketMet = false;

    for (var i = idxOfAttrOpening, len = str.length; i < len; i++) {
      if ("'\"".includes(str[i]) && lastQuoteWasMatched && lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening && lastMatchedQuotesPairsEndIsAt < i && i >= isThisClosingIdx) {
        var E1 = i !== isThisClosingIdx || guaranteedAttrStartsAtX(str, right(str, isThisClosingIdx)) || "/>".includes(str[right(str, i)]);
        var E2 = !(i > isThisClosingIdx && str[idxOfAttrOpening] === str[isThisClosingIdx] && str[idxOfAttrOpening] === str[i] && plausibleAttrStartsAtX(str, i + 1));
        var E31 = i === isThisClosingIdx && plausibleAttrStartsAtX(str, isThisClosingIdx + 1);
        var E32 = chunkStartsAt && chunkStartsAt < i && allHtmlAttribs.has(str.slice(chunkStartsAt, i).trim());
        var E33 = chunkStartsAt && chunkStartsAt < i && str[chunkStartsAt - 1] && !str[chunkStartsAt - 1].trim() && Array.from(str.slice(chunkStartsAt, i).trim()).every(function (char) {
          return charSuitableForHTMLAttrName(char);
        }) && str[idxOfAttrOpening] === str[isThisClosingIdx];
        var attrNameCharsChunkOnTheLeft = void 0;

        if (i === isThisClosingIdx) {
          attrNameCharsChunkOnTheLeft = findAttrNameCharsChunkOnTheLeft(str, i);
        }

        var E34 = i === isThisClosingIdx && (!charSuitableForHTMLAttrName(str[left(str, i)]) || attrNameCharsChunkOnTheLeft && !allHtmlAttribs.has(attrNameCharsChunkOnTheLeft)) && str[left(str, i)] !== "=";
        var E41 = "/>".includes(str[right(str, i)]) && i === isThisClosingIdx;
        var E42 = charSuitableForHTMLAttrName(str[right(str, i)]);
        var E43 = lastQuoteWasMatched && i !== isThisClosingIdx;
        return E1 && E2 && (E31 || E32 || E33 || E34) && (E41 || E42 || E43);
      }

      if ("'\"".includes(str[i])) {
        if (str[i] === "'" && str[i - 1] === "\"" && str[i + 1] === "\"" || str[i] === "\"" && str[i - 1] === "'" && str[i + 1] === "'") {
          continue;
        }

        if (lastQuoteAt && str[i] === str[lastQuoteAt]) {
          quotesCount.set("matchedPairs", quotesCount.get("matchedPairs") + 1);
          lastMatchedQuotesPairsStartIsAt = lastQuoteAt;
          lastMatchedQuotesPairsEndIsAt = i;
          lastQuoteAt = null;
          lastQuoteWasMatched = true;
        } else {
          lastQuoteWasMatched = false;
        }

        quotesCount.set(str[i], quotesCount.get(str[i]) + 1);
        totalQuotesCount = quotesCount.get("\"") + quotesCount.get("'");
      }

      if (str[i] === ">" && !closingBracketMet) {
        closingBracketMet = true;

        if (totalQuotesCount && quotesCount.get("matchedPairs") && totalQuotesCount === quotesCount.get("matchedPairs") * 2 && i < isThisClosingIdx) {
          return false;
        }
      }

      if (str[i] === "<" && closingBracketMet && !openingBracketMet) {
        openingBracketMet = true;
        return false;
      }

      if (str[i].trim() && !chunkStartsAt) {
        if (charSuitableForHTMLAttrName(str[i])) {
          chunkStartsAt = i;
        }
      } else if (chunkStartsAt && !charSuitableForHTMLAttrName(str[i])) {
        lastCapturedChunk = str.slice(chunkStartsAt, i);
        lastChunkWasCapturedAfterSuspectedClosing = chunkStartsAt >= isThisClosingIdx;

        if ("'\"".includes(str[i]) && quotesCount.get("matchedPairs") === 0 && totalQuotesCount === 3 && str[idxOfAttrOpening] === str[i] && allHtmlAttribs.has(lastCapturedChunk)) {
          var A1 = i > isThisClosingIdx;
          var A21 = !lastQuoteAt;
          var A22 = lastQuoteAt + 1 >= i;
          var A23 = str.slice(lastQuoteAt + 1, i).trim().split(/\s+/).every(function (chunk) {
            return allHtmlAttribs.has(chunk);
          });
          var B1 = i === isThisClosingIdx;
          var B21 = totalQuotesCount < 3;
          var B22 = !!lastQuoteWasMatched;
          var B23 = !lastQuoteAt;
          var B24 = lastQuoteAt + 1 >= i;
          var B25 = !str.slice(lastQuoteAt + 1, i).trim().split(/\s+/).every(function (chunk) {
            return allHtmlAttribs.has(chunk);
          });
          return A1 && (A21 || A22 || A23) || B1 && (B21 || B22 || B23 || B24 || B25);
        }

        if (lastCapturedChunk && allHtmlAttribs.has(lastCapturedChunk) && lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening && lastMatchedQuotesPairsEndIsAt === isThisClosingIdx) {
          return true;
        }
      }

      if ("'\"".includes(str[i]) && (!(quotesCount.get("\"") % 2) || !(quotesCount.get("'") % 2)) && (quotesCount.get("\"") + quotesCount.get("'")) % 2 && (lastCapturedChunk && allHtmlAttribs.has(lastCapturedChunk) || i > isThisClosingIdx + 1 && allHtmlAttribs.has(str.slice(isThisClosingIdx + 1, i).trim()))) {
        var R0 = i > isThisClosingIdx;
        var R1 = !!openingQuote;
        var R2 = str[idxOfAttrOpening] !== str[isThisClosingIdx];
        var R3 = allHtmlAttribs.has(str.slice(idxOfAttrOpening + 1, isThisClosingIdx).trim());
        var R4 = !xBeforeYOnTheRight(str, i + 1, str[isThisClosingIdx], makeTheQuoteOpposite(str[isThisClosingIdx]));
        return R0 && !(R1 && R2 && R3 && R4);
      }

      if ((str[i] === "=" || !str[i].length && str[right(str, i)] === "=") && lastCapturedChunk && allHtmlAttribs.has(lastCapturedChunk)) {
        var W1 = i > isThisClosingIdx;
        var W2 = !(!(lastQuoteWasMatched && lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening && lastMatchedQuotesPairsEndIsAt === isThisClosingIdx || guaranteedAttrStartsAtX(str, chunkStartsAt)) && lastQuoteWasMatched && lastMatchedQuotesPairsStartIsAt && lastMatchedQuotesPairsStartIsAt <= isThisClosingIdx);
        return W1 && W2;
      }

      if (i > isThisClosingIdx) {
        if (openingQuote && str[i] === openingQuote) {
          var Y1 = !!lastQuoteAt;
          var Y2 = lastQuoteAt === isThisClosingIdx;
          var Y3 = lastQuoteAt + 1 < i && str.slice(lastQuoteAt + 1, i).trim();
          var Y4 = str.slice(lastQuoteAt + 1, i).trim().split(/\s+/).every(function (chunk) {
            return allHtmlAttribs.has(chunk);
          });
          var Y5 = i >= isThisClosingIdx;
          return Y1 && Y2 && Y3 && Y4 && Y5;
        }

        if (openingQuote && str[isThisClosingIdx] === oppositeToOpeningQuote && str[i] === oppositeToOpeningQuote) {
          return false;
        }

        if (str[i] === "/" || str[i] === ">" || str[i] === "<") {
          var _R = str[idxOfAttrOpening] === str[isThisClosingIdx] && lastQuoteAt === isThisClosingIdx && !str.slice(idxOfAttrOpening + 1, isThisClosingIdx).includes(str[idxOfAttrOpening]);

          var R11 = quotesCount.get("matchedPairs") < 2;

          var _attrNameCharsChunkOnTheLeft = findAttrNameCharsChunkOnTheLeft(str, i);

          var R12 = (!_attrNameCharsChunkOnTheLeft || !allHtmlAttribs.has(_attrNameCharsChunkOnTheLeft)) && (!(i > isThisClosingIdx && quotesCount.get("'") && quotesCount.get("\"") && quotesCount.get("matchedPairs") > 1) || "/>".includes(str[right(str, i)]));

          var _R2 = totalQuotesCount < 3 || quotesCount.get("\"") + quotesCount.get("'") - quotesCount.get("matchedPairs") * 2 !== 2;

          var R31 = !lastQuoteWasMatched || lastQuoteWasMatched && !(lastMatchedQuotesPairsStartIsAt && Array.from(str.slice(idxOfAttrOpening + 1, lastMatchedQuotesPairsStartIsAt).trim()).every(function (char) {
            return charSuitableForHTMLAttrName(char);
          }) && allHtmlAttribs.has(str.slice(idxOfAttrOpening + 1, lastMatchedQuotesPairsStartIsAt).trim()));
          var R32 = !right(str, i) && totalQuotesCount % 2 === 0;
          var R33 = str[idxOfAttrOpening - 2] && str[idxOfAttrOpening - 1] === "=" && charSuitableForHTMLAttrName(str[idxOfAttrOpening - 2]);
          var R34 = !ensureXIsNotPresentBeforeOneOfY(str, i + 1, "<", ["='", "=\""]);
          return _R || (R11 || R12) && _R2 && (R31 || R32 || R33 || R34);
        }

        if (str[i] === "=" && matchRight(str, i, ["'", "\""], {
          trimBeforeMatching: true,
          trimCharsBeforeMatching: ["="]
        })) {
          return true;
        }
      } else {
        var firstNonWhitespaceCharOnTheLeft = void 0;

        if (str[i - 1] && str[i - 1].trim() && str[i - 1] !== "=") {
          firstNonWhitespaceCharOnTheLeft = i - 1;
        } else {
          for (var y = i; y--;) {
            if (str[y].trim() && str[y] !== "=") {
              firstNonWhitespaceCharOnTheLeft = y;
              break;
            }
          }
        }

        if (str[i] === "=" && matchRight(str, i, ["'", "\""], {
          cb: function cb(char) {
            return !"/>".includes(char);
          },
          trimBeforeMatching: true,
          trimCharsBeforeMatching: ["="]
        }) && charSuitableForHTMLAttrName(str[firstNonWhitespaceCharOnTheLeft])) {
          return false;
        }

        if (i === isThisClosingIdx && guaranteedAttrStartsAtX(str, i + 1)) {
          return true;
        }

        if (i < isThisClosingIdx && "'\"".includes(str[i]) && lastCapturedChunk && str[left(str, idxOfAttrOpening)] && str[left(str, idxOfAttrOpening)] !== "=" && lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening && allHtmlAttribs.has(lastCapturedChunk)) {
          return false;
        }
      }

      if ("'\"".includes(str[i]) && i > isThisClosingIdx) {
        if (!lastChunkWasCapturedAfterSuspectedClosing || !lastCapturedChunk || !allHtmlAttribs.has(lastCapturedChunk)) {
          return false;
        }

        return true;
      }

      if ("'\"".includes(str[i])) {
        lastQuoteAt = i;
      }

      if (chunkStartsAt && !charSuitableForHTMLAttrName(str[i])) {
        chunkStartsAt = null;
      }
    }

    return false;
  }

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  var allHTMLTagsKnownToHumanity = new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]); // contains all common templating language head/tail marker characters:

  var espChars = "{}%-$_()*|#";
  var veryEspChars = "{}()|#";
  var notVeryEspChars = "%$_*#";
  var espLumpBlacklist = [")|(", "|(", ")(", "()", "}{", "{}", "%)", "*)"];
  var punctuationChars = ".,;!?";

  function isStr$1(something) {
    return typeof something === "string";
  }

  function isLatinLetter(char) {
    // we mean Latin letters A-Z, a-z
    return isStr$1(char) && char.length === 1 && (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91 || char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123);
  } // Considering custom element name character requirements:
  // https://html.spec.whatwg.org/multipage/custom-elements.html
  // Example of Unicode character in a regex:
  // \u0041
  // "-" | "." | [0-9] | "_" | [a-z] | #xB7 | [#xC0-#xEFFFF]


  function charSuitableForTagName(char) {
    return /[.\-_a-z0-9\u00B7\u00C0-\uFFFD]/i.test(char);
  } // it flips all brackets backwards and puts characters in the opposite order


  function flipEspTag(str) {
    var res = "";

    for (var i = 0, len = str.length; i < len; i++) {
      if (str[i] === "[") {
        res = "]".concat(res);
      } else if (str[i] === "]") {
        res = "[".concat(res);
      } else if (str[i] === "{") {
        res = "}".concat(res);
      } else if (str[i] === "}") {
        res = "{".concat(res);
      } else if (str[i] === "(") {
        res = ")".concat(res);
      } else if (str[i] === ")") {
        res = "(".concat(res);
      } else if (str[i] === "<") {
        res = ">".concat(res);
      } else if (str[i] === ">") {
        res = "<".concat(res);
      } else {
        res = "".concat(str[i]).concat(res);
      }
    }

    return res;
  }

  function isTagNameRecognised(tagName) {
    return allHTMLTagsKnownToHumanity.has(tagName.toLowerCase()) || ["doctype", "cdata", "xml"].includes(tagName.toLowerCase());
  } // Tells, if substring x goes before substring y on the right
  // side of "str", starting at index "startingIdx".
  // Used to troubleshoot dirty broken code.


  function xBeforeYOnTheRight$1(str, startingIdx, x, y) {
    for (var i = startingIdx, len = str.length; i < len; i++) {
      if (str.startsWith(x, i)) {
        // if x was first, Bob's your uncle, that's truthy result
        return true;
      }

      if (str.startsWith(y, i)) {
        // since we're in this clause, x failed, so if y matched,
        // this means y precedes x
        return false;
      }
    } // default result


    return false;
  }

  function getWholeEspTagLumpOnTheRight(str, i, layers) {
    var wholeEspTagLumpOnTheRight = str[i];
    var len = str.length;

    for (var y = i + 1; y < len; y++) {
      if ( // consider:
      // ${(y/4)?int}
      //   ^
      //   we're here - is this opening bracket part of heads?!?
      // if lump already is two chars long
      wholeEspTagLumpOnTheRight.length > 1 && ( // contains one of opening-polarity characters
      wholeEspTagLumpOnTheRight.includes("{") || wholeEspTagLumpOnTheRight.includes("[") || wholeEspTagLumpOnTheRight.includes("(")) && // bail if it's a bracket
      str[y] === "(") {
        break;
      }

      if (espChars.includes(str[y]) || str[i] === "<" && str[y] === "/" || // accept closing bracket if it's RPL comment, tails of: <#-- z -->
      str[y] === ">" && wholeEspTagLumpOnTheRight === "--" && Array.isArray(layers) && layers.length && layers[layers.length - 1].type === "esp" && layers[layers.length - 1].openingLump[0] === "<" && layers[layers.length - 1].openingLump[2] === "-" && layers[layers.length - 1].openingLump[3] === "-") {
        wholeEspTagLumpOnTheRight += str[y];
      } else {
        break;
      }
    } // if lump is tails+heads, report the length of tails only:
    // {%- a -%}{%- b -%}
    //        ^
    //      we're talking about this lump of tails and heads


    if (wholeEspTagLumpOnTheRight && Array.isArray(layers) && layers.length && layers[layers.length - 1].type === "esp" && layers[layers.length - 1].guessedClosingLump && wholeEspTagLumpOnTheRight.length > layers[layers.length - 1].guessedClosingLump.length) {
      //
      // case I.
      //
      if (wholeEspTagLumpOnTheRight.endsWith(layers[layers.length - 1].openingLump)) {
        // no need to extract tails, heads "{%-" were confirmed in example:
        // {%- a -%}{%- b -%}
        //          ^
        //         here
        // return string, extracted ESP tails
        return wholeEspTagLumpOnTheRight.slice(0, wholeEspTagLumpOnTheRight.length - layers[layers.length - 1].openingLump.length);
      } // ELSE
      // imagine a case like:
      // {%- aa %}{% bb %}
      // opening heads were {%-, flipped were -%}. Now when we take lump %}{%
      // and match, the dash will be missing.
      // What we're going to do is we'll split the lump where last matched
      // continuous chunk ends (%} in example above) with condition that
      // at least one character from ESP-list follows, which is not part of
      // guessed closing lump.


      var uniqueCharsListFromGuessedClosingLumpArr = new Set(layers[layers.length - 1].guessedClosingLump);
      var found = 0;

      var _loop = function _loop(len2, _y) {
        if (!uniqueCharsListFromGuessedClosingLumpArr.has(wholeEspTagLumpOnTheRight[_y]) && found > 1) {
          return {
            v: wholeEspTagLumpOnTheRight.slice(0, _y)
          };
        }

        if (uniqueCharsListFromGuessedClosingLumpArr.has(wholeEspTagLumpOnTheRight[_y])) {
          found += 1;
          uniqueCharsListFromGuessedClosingLumpArr = new Set(_toConsumableArray(uniqueCharsListFromGuessedClosingLumpArr).filter(function (el) {
            return el !== wholeEspTagLumpOnTheRight[_y];
          }));
        }
      };

      for (var _y = 0, len2 = wholeEspTagLumpOnTheRight.length; _y < len2; _y++) {
        var _ret = _loop(len2, _y);

        if (_typeof(_ret) === "object") return _ret.v;
      }
    }

    return wholeEspTagLumpOnTheRight;
  }

  // We record ESP tag head and tails as we traverse code because we need to know
  // the arrangement of all pieces: start, end, nesting etc.
  //
  // Now, we keep records of each "layer" - new opening of some sorts: quotes,
  // heads of ESP tags and so on.
  //
  // This function is a helper to check, does something match as a counterpart
  // to the last/first layer.
  //
  // Quotes could be checked here but are not at the moment, here currently
  // we deal with ESP tokens only
  // RETURNS: undefined or integer, length of a matched ESP lump.
  function matchLayerLast(wholeEspTagLump, layers, matchFirstInstead) {
    if (!layers.length) {
      return;
    }

    var whichLayerToMatch = matchFirstInstead ? layers[0] : layers[layers.length - 1]; // console.log(
    //   `023 matchLayer(): ${`\u001b[${33}m${`whichLayerToMatch`}\u001b[${39}m`} = ${JSON.stringify(
    //     whichLayerToMatch,
    //     null,
    //     4
    //   )}`
    // );

    if (whichLayerToMatch.type !== "esp") {
      // we aim to match ESP tag layers, so instantly it's falsey result
      // because layer we match against is not ESP tag layer
      // console.log(`033 matchLayer(): early return undefined`);
      return;
    }

    if ( // imagine case of Nunjucks: heads "{%" are normal but tails "-%}" (notice dash)
    wholeEspTagLump.includes(whichLayerToMatch.guessedClosingLump) || // match every character from the last "layers" complex-type entry must be
    // present in the extracted lump
    Array.from(wholeEspTagLump).every(function (char) {
      return whichLayerToMatch.guessedClosingLump.includes(char);
    })) {
      // console.log(
      //   `047 matchLayer(): ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`} ${
      //     wholeEspTagLump.length
      //   }`
      // );
      return wholeEspTagLump.length;
    } // console.log(`054 matchLayer(): finally, return undefined`);

  }

  // starts. Previously it sat within if() clauses but became unwieldy and
  // so we extracted into a function.

  function startsComment(str, i, token, layers) {
    // console.log(
    //   `R1: ${!!matchRight(str, i, ["!--"], {
    //     maxMismatches: 1,
    //     firstMustMatch: true, // <--- FUZZY MATCH, BUT EXCL. MARK IS OBLIGATORY
    //     trimBeforeMatching: true
    //   }) ||
    //     matchRight(str, i, ["![endif]"], {
    //       i: true,
    //       maxMismatches: 2,
    //       trimBeforeMatching: true
    //     })}`
    // );
    // console.log(
    //   `R2: ${!matchRight(str, i, ["![cdata", "<"], {
    //     i: true,
    //     maxMismatches: 1,
    //     trimBeforeMatching: true
    //   })}`
    // );
    // console.log(`R3: ${!!(token.type !== "comment" || token.kind !== "not")}`);
    // console.log(
    //   `R3*: ${`\u001b[${33}m${`token.kind`}\u001b[${39}m`} = ${JSON.stringify(
    //     token.kind,
    //     null,
    //     4
    //   )}`
    // );
    return (// the opening is deliberately loose, with one dash missing, "!-" instead of "!--"
      str[i] === "<" && (matchRight(str, i, ["!--"], {
        maxMismatches: 1,
        firstMustMatch: true,
        // <--- FUZZY MATCH, BUT EXCL. MARK IS OBLIGATORY
        trimBeforeMatching: true
      }) || matchRight(str, i, ["![endif]"], {
        i: true,
        maxMismatches: 2,
        trimBeforeMatching: true
      })) && !matchRight(str, i, ["![cdata", "<"], {
        i: true,
        maxMismatches: 1,
        trimBeforeMatching: true
      }) && (token.type !== "comment" || token.kind !== "not") || str[i] === "-" && matchRight(str, i, ["->"], {
        trimBeforeMatching: true
      }) && (token.type !== "comment" || !token.closing && token.kind !== "not") && !matchLeft(str, i, "<", {
        trimBeforeMatching: true,
        trimCharsBeforeMatching: ["-", "!"]
      }) && ( // insurance against ESP tag, RPL comments: <#-- z -->
      !Array.isArray(layers) || !layers.length || layers[layers.length - 1].type !== "esp" || !(layers[layers.length - 1].openingLump[0] === "<" && layers[layers.length - 1].openingLump[2] === "-" && layers[layers.length - 1].openingLump[3] === "-"))
    );
  }

  var BACKSLASH = "\\";
  var knownHtmlTags = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "doctype", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h1 - h6", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xml"];

  function isStr$2(something) {
    return typeof something === "string";
  }

  function isNotLetter(char) {
    return char === undefined || char.toUpperCase() === char.toLowerCase() && !"0123456789".includes(char) && char !== "=";
  }

  function isOpening(str) {
    var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var originalOpts = arguments.length > 2 ? arguments[2] : undefined;
    var defaults = {
      allowCustomTagNames: false,
      skipOpeningBracket: false
    };

    var opts = _objectSpread2(_objectSpread2({}, defaults), originalOpts);

    var whitespaceChunk = "[\\\\ \\t\\r\\n/]*";
    var generalChar = "._a-z0-9\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\uFFFF";
    var r1 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<").concat(whitespaceChunk, "\\w+").concat(whitespaceChunk, ">"), "g");
    var r5 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<").concat(whitespaceChunk, "[").concat(generalChar, "]+[-").concat(generalChar, "]*").concat(whitespaceChunk, ">"), "g");
    var r2 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<", "\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['\"\\w]"), "g");
    var r6 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<", "\\s*\\w+\\s+[").concat(generalChar, "]+[-").concat(generalChar, "]*(?:-\\w+)?\\s*=\\s*['\"\\w]"));
    var r3 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<", "\\s*\\/?\\s*\\w+\\s*\\/?\\s*>"), "g");
    var r7 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<", "\\s*\\/?\\s*[").concat(generalChar, "]+[-").concat(generalChar, "]*\\s*\\/?\\s*>"), "g");
    var r4 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<").concat(whitespaceChunk, "\\w+(?:\\s*\\w+)*\\s*\\w+=['\"]"), "g");
    var r8 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<").concat(whitespaceChunk, "[").concat(generalChar, "]+[-").concat(generalChar, "]*(?:\\s*\\w+)*\\s*\\w+=['\"]"), "g");
    var whatToTest = idx ? str.slice(idx) : str;
    var passed = false;
    var matchingOptions = {
      cb: isNotLetter,
      i: true,
      trimCharsBeforeMatching: ["/", BACKSLASH, "!", " ", "\t", "\n", "\r"]
    };

    if (opts.allowCustomTagNames) {
      if (r5.test(whatToTest)) {
        passed = true;
      } else if (r6.test(whatToTest)) {
        passed = true;
      } else if (r7.test(whatToTest)) {
        passed = true;
      } else if (r8.test(whatToTest)) {
        passed = true;
      }
    } else if (matchRightIncl(str, idx, knownHtmlTags, {
      cb: isNotLetter,
      i: true,
      trimCharsBeforeMatching: ["<", "/", BACKSLASH, "!", " ", "\t", "\n", "\r"]
    })) {
      if (r1.test(whatToTest)) {
        passed = true;
      } else if (r2.test(whatToTest)) {
        passed = true;
      } else if (r3.test(whatToTest)) {
        passed = true;
      } else if (r4.test(whatToTest)) {
        passed = true;
      }
    }

    if (!passed && !opts.skipOpeningBracket && str[idx] === "<" && str[idx + 1].trim() && matchRight(str, idx, knownHtmlTags, matchingOptions)) {
      passed = true;
    }

    var res = isStr$2(str) && idx < str.length && passed;
    return res;
  }

  var BACKSLASH$1 = "\\"; // This is an extracted logic which detects where token of a particular kind
  // starts. Previously it sat within if() clauses but became unwieldy and
  // so we extracted into a function.

  function startsTag(str, i, token, layers) {
    // console.log(
    //   `013 ██ startsTag() isTagOpening1: ${isTagOpening(str, i, {
    //     allowCustomTagNames: true
    //   })}`
    // );
    // console.log(
    //   `018 ██ startsTag() isTagOpening2: ${isTagOpening(str, i, {
    //     allowCustomTagNames: false,
    //     skipOpeningBracket: true
    //   })}`
    // );
    return str[i] && str[i].trim().length && (!layers.length || token.type === "text") && !["doctype", "xml"].includes(token.kind) && (str[i] === "<" && (isOpening(str, i, {
      allowCustomTagNames: true
    }) || str[right(str, i)] === ">" || matchRight(str, i, ["doctype", "xml", "cdata"], {
      i: true,
      trimBeforeMatching: true,
      trimCharsBeforeMatching: ["?", "!", "[", " ", "-"]
    })) || isLatinLetter(str[i]) && (!str[i - 1] || !isLatinLetter(str[i - 1]) && !["<", "/", "!", BACKSLASH$1].includes(str[left(str, i)])) && isOpening(str, i, {
      allowCustomTagNames: false,
      // <-- stricter requirements for missing opening bracket tags
      skipOpeningBracket: true
    })) && ( // (
    //   (str[i] === "<" &&
    //   (
    //     str[right(str, i)] === ">" ||
    //     isTagOpening(str, i, {
    //       allowCustomTagNames: true
    //     }) ||
    //     matchRight(str, i, ["doctype", "xml", "cdata"], {
    //       i: true,
    //       trimBeforeMatching: true,
    //       trimCharsBeforeMatching: ["?", "!", "[", " ", "-"]
    //     })
    //   ))
    // ) &&
    token.type !== "esp" || token.tail && token.tail.includes(str[i]));
  }

  // starts. Previously it sat within if() clauses but became unwieldy and
  // so we extracted into a function.

  function startsEsp(str, i, token, layers, styleStarts) {
    var res = // 1. two consecutive esp characters - Liquid, Mailchimp etc.
    // {{ or |* and so on
    espChars.includes(str[i]) && str[i + 1] && espChars.includes(str[i + 1]) && // ensure our suspected lump doesn't comprise only
    // of "notVeryEspChars" - real ESP tag |**| can
    // contain asterisk (*) but only asterisks can't
    // comprise an ESP tag. But curly braces can -
    // {{ and }} are valid Nunjucks heads/tails.
    // So not all ESP tag characters are equal.
    !(notVeryEspChars.includes(str[i]) && notVeryEspChars.includes(str[i + 1])) && ( // only "veryEspChars" group characters can
    // be repeated, like {{ and }} - other's can't
    // for example, ** is not real ESP heads
    str[i] !== str[i + 1] || veryEspChars.includes(str[i])) && token.type !== "rule" && token.type !== "at" && !(str[i] === "-" && "-{(".includes(str[i + 1])) && !("})".includes(str[i]) && "-".includes(str[i + 1])) && !( // insurance against repeated percentages
    //
    // imagine: "99%%."
    //             ^
    //      we're here
    str[i] === "%" && str[i + 1] === "%" && "0123456789".includes(str[i - 1]) && (!str[i + 2] || punctuationChars.includes(str[i + 2]) || !str[i + 2].trim().length)) && !(styleStarts && ("{}".includes(str[i]) || "{}".includes(str[right(str, i)]))) || //
    // 2. html-like syntax - Responsys RPL and similar
    // <#if z> or </#if> and so on
    // normal opening tag
    str[i] === "<" && ( // and
    // either it's closing tag and what follows is ESP-char
    str[i + 1] === "/" && espChars.includes(str[i + 2]) || // or
    // it's not closing and esp char follows right away
    espChars.includes(str[i + 1]) && // but no cheating, character must not be second-grade
    !["-"].includes(str[i + 1])) || //
    // 3. single character tails, for example RPL's closing curlies: ${zzz}
    // it's specifically a closing-kind character
    ">})".includes(str[i]) && // heads include the opposite of it
    Array.isArray(layers) && layers.length && layers[layers.length - 1].type === "esp" && layers[layers.length - 1].openingLump.includes(flipEspTag(str[i])) && ( // insurance against "greater than", as in:
    // <#if product.weight > 100>
    str[i] !== ">" || !xBeforeYOnTheRight$1(str, i + 1, ">", "<")) || //
    // 4. comment closing in RPL-like templating languages, for example:
    // <#-- z -->
    str[i] === "-" && str[i + 1] === "-" && str[i + 2] === ">" && Array.isArray(layers) && layers.length && layers[layers.length - 1].type === "esp" && layers[layers.length - 1].openingLump[0] === "<" && layers[layers.length - 1].openingLump[2] === "-" && layers[layers.length - 1].openingLump[3] === "-";
    return res;
  }

  function isObj$1(something) {
    return something && _typeof(something) === "object" && !Array.isArray(something);
  } // https://html.spec.whatwg.org/multipage/syntax.html#elements-2


  var voidTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]; // Rules which might wrap the media queries, for example:
  // @supports (display: grid) {...
  // const atRulesWhichMightWrapStyles = ["media", "supports", "document"];

  var charsThatEndCSSChunks = ["{", "}", ","];
  var BACKTICK = "\x60"; // TODO remove:
  // same as used in string-extract-class-names
  // const badChars = `.# ~\\!@$%^&*()+=,/';:"?><[]{}|\`\t\n`;

  function tokenizer(str, originalOpts) {
    var start = Date.now(); //
    //
    //
    //
    //
    //
    //
    // INSURANCE
    // ---------------------------------------------------------------------------

    if (!isStr$1(str)) {
      if (str === undefined) {
        throw new Error("codsen-tokenizer: [THROW_ID_01] the first input argument is completely missing! It should be given as string.");
      } else {
        throw new Error("codsen-tokenizer: [THROW_ID_02] the first input argument must be string! It was given as \"".concat(_typeof(str), "\", equal to:\n").concat(JSON.stringify(str, null, 4)));
      }
    }

    if (originalOpts && !isObj$1(originalOpts)) {
      throw new Error("codsen-tokenizer: [THROW_ID_03] the second input argument, an options object, should be a plain object but it was given as type ".concat(_typeof(originalOpts), ", equal to ").concat(JSON.stringify(originalOpts, null, 4)));
    }

    if (isObj$1(originalOpts) && originalOpts.tagCb && typeof originalOpts.tagCb !== "function") {
      throw new Error("codsen-tokenizer: [THROW_ID_04] the opts.tagCb, callback function, should be a function but it was given as type ".concat(_typeof(originalOpts.tagCb), ", equal to ").concat(JSON.stringify(originalOpts.tagCb, null, 4)));
    }

    if (isObj$1(originalOpts) && originalOpts.charCb && typeof originalOpts.charCb !== "function") {
      throw new Error("codsen-tokenizer: [THROW_ID_05] the opts.charCb, callback function, should be a function but it was given as type ".concat(_typeof(originalOpts.charCb), ", equal to ").concat(JSON.stringify(originalOpts.charCb, null, 4)));
    }

    if (isObj$1(originalOpts) && originalOpts.reportProgressFunc && typeof originalOpts.reportProgressFunc !== "function") {
      throw new Error("codsen-tokenizer: [THROW_ID_06] the opts.reportProgressFunc, callback function, should be a function but it was given as type ".concat(_typeof(originalOpts.reportProgressFunc), ", equal to ").concat(JSON.stringify(originalOpts.reportProgressFunc, null, 4)));
    } //
    //
    //
    //
    //
    //
    //
    // OPTS
    // ---------------------------------------------------------------------------


    var defaults = {
      tagCb: null,
      tagCbLookahead: 0,
      charCb: null,
      charCbLookahead: 0,
      reportProgressFunc: null,
      reportProgressFuncFrom: 0,
      reportProgressFuncTo: 100
    };

    var opts = _objectSpread2(_objectSpread2({}, defaults), originalOpts); //
    //
    //
    //
    //
    //
    //
    // VARS
    // ---------------------------------------------------------------------------


    var currentPercentageDone;
    var lastPercentage = 0;
    var len = str.length;
    var midLen = Math.floor(len / 2);
    var doNothing; // normally set to a number, index until where to do nothing

    var withinStyle = false; // flag used to instruct content after <style> to toggle type="css"
    // opts.*CbLookahead allows to request "x"-many tokens "from the future"
    // to be reported upon each token. You can check what's coming next.
    // To implement this, we need to stash "x"-many tokens and only when enough
    // have been gathered, array.shift() the first one and ping the callback
    // with it, along with "x"-many following tokens. Later, in the end,
    // we clean up stashes and report only as many as we have.
    // The stashes will be LIFO (last in first out) style arrays:

    var tagStash = [];
    var charStash = []; // when we compile the token, we fill this object:

    var token = {};
    var tokenDefault = {
      type: null,
      start: null,
      end: null,
      value: null
    };

    function tokenReset() {
      // object-assign is basically cloning - objects are passed by reference,
      // we can't risk mutating the default object:
      token = lodash_clonedeep(tokenDefault);
      attribReset();
      return token;
    } // same for attributes:


    var attrib = {};
    var attribDefault = {
      attribName: null,
      attribNameRecognised: null,
      attribNameStartsAt: null,
      attribNameEndsAt: null,
      attribOpeningQuoteAt: null,
      attribClosingQuoteAt: null,
      attribValueRaw: null,
      attribValue: [],
      attribValueStartsAt: null,
      attribValueEndsAt: null,
      attribStart: null,
      attribEnd: null,
      attribLeft: null
    };

    function attribReset() {
      // object-assign is basically cloning - objects are passed by reference,
      // we can't risk mutating the default object:
      attrib = lodash_clonedeep(attribDefault);
    } // PS. we need this contraption in order to keep a single source of truth
    // of the token format - we'll improve and change the format of the default
    // object throughout the releases - it's best when its format comes from single
    // place, in this case, "tokenDefault".
    // Initial resets:


    tokenReset(); // ---------------------------------------------------------------------------

    var selectorChunkStartedAt; // For example:
    //
    //       <style type="text/css">
    //         .unused1[z].unused2, .used[z] {a:1;}
    //         |                 |
    //         <-selector chunk ->
    //
    //
    // ---------------------------------------------------------------------------

    var parentTokenToBackup; // We use it for nested ESP tags - for example, <td{% z %}>
    // The esp tag {% z %} is nested among the tag's attributes:
    // {
    //   type: "tag",
    //   start: 0,
    //   end: 11,
    //   value: `<td{% z %}>`,
    //   attribs: [
    //     {
    //       type: "esp",
    //       start: 3,
    //       end: 10,
    //       value: "{% z %}",
    //       head: "{%",
    //       tail: "%}",
    //       kind: null,
    //     },
    //   ],
    // }
    //
    // to allow this, we have to save the current, parent token, in case above,
    // <td...> and then initiate the ESP token, which later will get nested

    var attribToBackup; // We use it when ESP tag is inside the attribute:
    // <a b="{{ c }}d">
    //
    // we need to back up both tag and attrib objects, assemble esp tag, then
    // restore both and stick it inside the "attrib"'s array "attribValue":
    //
    // attribValue: [
    //   {
    //     type: "esp",
    //     start: 6,
    //     end: 13,
    //     value: "{{ c }}",
    //     head: "{{",
    //     tail: "}}",
    //   },
    //   {
    //     type: "text",
    //     start: 13,
    //     end: 14,
    //     value: "d",
    //   },
    // ],

    var lastNonWhitespaceCharAt; // ---------------------------------------------------------------------------
    //
    //
    //
    //
    //
    //
    //
    // INNER FUNCTIONS
    // ---------------------------------------------------------------------------
    // When we enter the double quotes or any other kind of "layer", we need to
    // ignore all findings until the "layer" is exited. Here we keep note of the
    // closing strings which exit the current "layer". There can be many of them,
    // nested and escaped and so on.

    var layers = []; // example of contents:
    // [
    //     {
    //         type: "simple",
    //         value: "'",
    //     },
    //     {
    //         type: "esp",
    //         guessedClosingLump: "%}"
    //     }
    // ]
    // there can be two types of layer values: simple strings to match html/css
    // token types and complex, to match esp tokens heuristically, where we don't
    // know exact ESP tails but we know set of characters that suspected "tail"
    // should match.
    //
    // used by both tag and character callbacks:

    function reportFirstFromStash(stash, cb, lookaheadLength) {
      // start to assemble node we're report to the callback cb1()
      var currentElem = stash.shift(); // ^ shift removes it from stash
      // now we need the "future" nodes, as many as "lookahead" of them
      // that's the container where they'll sit:

      var next = [];

      for (var i = 0; i < lookaheadLength; i++) {
        // we want as many as "lookaheadLength" from stash but there might be
        // not enough there
        if (stash[i]) {
          next.push(lodash_clonedeep(stash[i]));
        } else {
          break;
        }
      } // finally, ping the callback with assembled element:


      cb(currentElem, next);
    }

    function pingCharCb(incomingToken) {
      // no cloning, no reset
      if (opts.charCb) {
        // if there were no stashes, we'd call the callback like this:
        // opts.charCb(incomingToken);
        // 1. push to stash
        charStash.push(incomingToken); // 2. is there are enough tokens in the stash, ping the first-one

        if (charStash.length > opts.charCbLookahead) {
          reportFirstFromStash(charStash, opts.charCb, opts.charCbLookahead);
        }
      }
    }

    function pingTagCb(incomingToken) {
      if (opts.tagCb) {
        // console.log(
        //   `419 ${`\u001b[${32}m${`PING`}\u001b[${39}m`} tagCb() with ${JSON.stringify(
        //     incomingToken,
        //     null,
        //     4
        //   )}`
        // );
        // opts.tagCb(clone(incomingToken));
        // 1. push to stash
        tagStash.push(incomingToken); // 2. is there are enough tokens in the stash, ping the first-one

        if (tagStash.length > opts.tagCbLookahead) {
          reportFirstFromStash(tagStash, opts.tagCb, opts.tagCbLookahead);
        }
      }
    }

    function dumpCurrentToken(incomingToken, i) {
      // Let's ensure it was not a token with trailing whitespace, because now is
      // the time to separate it and report it as a standalone token.
      // Also, the following clause will catch the unclosed tags like
      // <a href="z" click here</a>
      if (!["text", "esp"].includes(incomingToken.type) && incomingToken.start !== null && incomingToken.start < i && (str[~-i] && !str[~-i].trim() || str[i] === "<")) {
        // this ending is definitely a token ending. Now the question is,
        // maybe we need to split all gathered token contents into two:
        // maybe it's a tag and a whitespace? or an unclosed tag?
        // in some cases, this token.end will be only end of a second token,
        // we'll need to find where this last chunk started and terminate the
        // previous token (one which started at the current token.start) there.
        incomingToken.end = left(str, i) + 1;
        incomingToken.value = str.slice(incomingToken.start, incomingToken.end);

        if (incomingToken.type === "tag" && !"/>".includes(str[~-incomingToken.end])) {
          // we need to potentially shift the incomingToken.end left, imagine:
          // <a href="z" click here</a>
          //                       ^
          //               we are here ("i" value), that's incomingToken.end currently
          //
          // <a href="z" click here</a>
          //            ^
          //        incomingToken.end should be here
          //
          // PLAN: take current token, if there are attributes, validate
          // each one of them, terminate at the point of the first smell.
          // If there are no attributes, terminate at the end of a tag name
          var cutOffIndex = incomingToken.tagNameEndsAt || i;

          if (Array.isArray(incomingToken.attribs) && incomingToken.attribs.length) {
            // initial cut-off point is token.tagNameEndsAt
            // with each validated attribute, push the cutOffIndex forward:
            for (var i2 = 0, len2 = incomingToken.attribs.length; i2 < len2; i2++) {
              if (incomingToken.attribs[i2].attribNameRecognised) {
                cutOffIndex = incomingToken.attribs[i2].attribEnd; // small tweak - consider this:
                // <a href="z" click here</a>
                //            ^
                //         this space in particular
                // that space above should belong to the tag's index range,
                // unless the whitespace is bigger than 1:
                // <a href="z"   click here</a>

                if (str[cutOffIndex + 1] && !str[cutOffIndex].trim() && str[cutOffIndex + 1].trim()) {
                  cutOffIndex += 1;
                }
              } else {
                // delete false attributes from incomingToken.attribs
                if (i2 === 0) {
                  // if it's the first attribute and it's already
                  // not suitable, for example:
                  // <a click here</a>
                  // all attributes ("click", "here") are removed:
                  incomingToken.attribs.length = 0;
                } else {
                  // leave only attributes up to i2-th
                  incomingToken.attribs = incomingToken.attribs.splice(0, i2);
                } // in the end stop the loop:


                break;
              }
            }
          }

          incomingToken.end = cutOffIndex;
          incomingToken.value = str.slice(incomingToken.start, incomingToken.end);

          if (!incomingToken.tagNameEndsAt) {
            incomingToken.tagNameEndsAt = cutOffIndex;
          }

          if (incomingToken.tagNameStartsAt && incomingToken.tagNameEndsAt && !incomingToken.tagName) {
            incomingToken.tagName = str.slice(incomingToken.tagNameStartsAt, cutOffIndex);
            incomingToken.recognised = isTagNameRecognised(incomingToken.tagName);
          }

          pingTagCb(incomingToken);
          initToken("text", cutOffIndex);
        } else {
          pingTagCb(incomingToken);
          tokenReset(); // if there was whitespace after token's end:

          if (str[~-i] && !str[~-i].trim()) {
            initToken("text", left(str, i) + 1);
          }
        }
      } // if a token is already being recorded, end it


      if (token.start !== null) {
        if (token.end === null && token.start !== i) {
          // (esp tags will have it set already)
          token.end = i;
          token.value = str.slice(token.start, token.end);
        } // normally we'd ping the token but let's not forget we have token stashes
        // in "attribToBackup" and "parentTokenToBackup"


        if (token.start !== null && token.end) {
          // if it's a text token inside "at" rule, nest it, push into that
          // "at" rule pending in layers - otherwise, ping as standalone
          if (Array.isArray(layers) && layers.length && layers[layers.length - 1].type === "at") {
            layers[layers.length - 1].token.rules.push(token);
          } else {
            pingTagCb(token);
          }
        }

        tokenReset();
      }
    }

    function atRuleWaitingForClosingCurlie() {
      return layers.length && layers[~-layers.length].type === "at" && isObj$1(layers[~-layers.length].token) && layers[~-layers.length].token.openingCurlyAt && !layers[~-layers.length].token.closingCurlyAt;
    }

    function getNewToken(type) {
      var startVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (type === "tag") {
        return {
          type: type,
          start: startVal,
          end: null,
          value: null,
          tagNameStartsAt: null,
          tagNameEndsAt: null,
          tagName: null,
          recognised: null,
          closing: false,
          void: false,
          pureHTML: true,
          // meaning there are no esp bits
          kind: null,
          attribs: []
        };
      }

      if (type === "comment") {
        return {
          type: type,
          start: startVal,
          end: null,
          value: null,
          closing: false,
          kind: "simple" // or "only" or "not"

        };
      }

      if (type === "rule") {
        return {
          type: type,
          start: startVal,
          end: null,
          value: null,
          left: null,
          nested: false,
          openingCurlyAt: null,
          closingCurlyAt: null,
          selectorsStart: null,
          selectorsEnd: null,
          selectors: []
        };
      }

      if (type === "at") {
        return {
          type: type,
          start: startVal,
          end: null,
          value: null,
          left: null,
          nested: false,
          openingCurlyAt: null,
          closingCurlyAt: null,
          identifier: null,
          identifierStartsAt: null,
          identifierEndsAt: null,
          query: null,
          queryStartsAt: null,
          queryEndsAt: null,
          rules: []
        };
      }

      if (type === "text") {
        return {
          type: type,
          start: startVal,
          end: null,
          value: null
        };
      }

      if (type === "esp") {
        return {
          type: type,
          start: startVal,
          end: null,
          value: null,
          head: null,
          headStartsAt: null,
          headEndsAt: null,
          tail: null,
          tailStartsAt: null,
          tailEndsAt: null
        };
      }
    }

    function initToken(type, startVal) {
      // we mutate the object on the parent scope, so no Object.assign here
      attribReset();
      token = getNewToken(type, startVal);
    } //
    //
    //
    //
    //
    //
    //
    // THE MAIN LOOP
    // ---------------------------------------------------------------------------
    // We deliberately step 1 character outside of str length
    // to simplify the algorithm. Thusly, it's i <= len not i < len:


    var _loop = function _loop(_i) {
      //
      //
      //
      //
      //                                THE TOP
      //                                ███████
      //
      //
      //
      //
      // Logging:
      // -------------------------------------------------------------------------
      // Progress:
      // -------------------------------------------------------------------------
      if (!doNothing && str[_i] && opts.reportProgressFunc) {
        if (len > 1000 && len < 2000) {
          if (_i === midLen) {
            opts.reportProgressFunc(Math.floor((opts.reportProgressFuncTo - opts.reportProgressFuncFrom) / 2));
          }
        } else if (len >= 2000) {
          // defaults:
          // opts.reportProgressFuncFrom = 0
          // opts.reportProgressFuncTo = 100
          currentPercentageDone = opts.reportProgressFuncFrom + Math.floor(_i / len * (opts.reportProgressFuncTo - opts.reportProgressFuncFrom));

          if (currentPercentageDone !== lastPercentage) {
            lastPercentage = currentPercentageDone;
            opts.reportProgressFunc(currentPercentageDone);
          }
        }
      } // Turn off doNothing if marker passed
      // -------------------------------------------------------------------------


      if (withinStyle && token.type && !["rule", "at", "text"].includes(token.type)) {
        withinStyle = false;
      }

      if (doNothing && _i >= doNothing) {
        doNothing = false;
      } // skip chain of the same-type characters
      // -------------------------------------------------------------------------


      if (isLatinLetter(str[_i]) && isLatinLetter(str[~-_i]) && isLatinLetter(str[_i + 1])) {
        i = _i;
        return "continue";
      }

      if (" \t\r\n".includes(str[_i]) && // ~- means subtract 1
      str[_i] === str[~-_i] && str[_i] === str[_i + 1]) {
        i = _i;
        return "continue";
      } // catch the curly tails of at-rules
      // -------------------------------------------------------------------------


      if (!doNothing && atRuleWaitingForClosingCurlie()) {
        // if (token.type === null && str[i] === "}") {
        // if (str[i] === "}") {
        if (str[_i] === "}") {
          if (token.type === null || token.type === "text" || token.type === "rule" && token.openingCurlyAt === null) {
            // rule token must end earlier
            if (token.type === "rule") {
              token.end = left(str, _i) + 1;
              token.value = str.slice(token.start, token.end);
              pingTagCb(token); // if it's a text token inside "at" rule, nest it, push into that
              // "at" rule pending in layers - otherwise, ping as standalone

              if (Array.isArray(layers) && layers.length && layers[layers.length - 1].type === "at") {
                layers[layers.length - 1].token.rules.push(token);
              }

              tokenReset(); // if there was trailing whitespace, initiate it

              if (left(str, _i) < ~-_i) {
                initToken("text", left(str, _i) + 1);
              }
            }

            dumpCurrentToken(token, _i);
            var poppedToken = layers.pop();
            token = poppedToken.token; // then, continue on "at" rule's token...

            token.closingCurlyAt = _i;
            token.end = _i + 1;
            token.value = str.slice(token.start, token.end);
            pingTagCb(token); // if it's a "rule" token and a parent "at" rule is pending in layers,
            // also put this "rule" into that parent in layers

            if (Array.isArray(layers) && layers.length && layers[layers.length - 1].type === "at") {
              layers[layers.length - 1].token.rules.push(token);
            }

            tokenReset();
            doNothing = _i + 1;
          }
        } else if (token.type === "text" && str[_i] && str[_i].trim()) {
          // terminate the text token, all the non-whitespace characters comprise
          // rules because we're inside the at-token, it's CSS!
          token.end = _i;
          token.value = str.slice(token.start, token.end); // if it's a text token inside "at" rule, nest it, push into that
          // "at" rule pending in layers - otherwise, ping as standalone

          if (Array.isArray(layers) && layers.length && layers[layers.length - 1].type === "at") {
            layers[layers.length - 1].token.rules.push(token);
          } else {
            pingTagCb(token);
          }

          tokenReset();
        }
      }

      if (token.end && token.end === _i) {
        if (token.tagName === "style" && !token.closing) {
          withinStyle = true;
        } // we need to retain the information after tag was dumped to tagCb() and wiped


        if (attribToBackup) {
          // 1. restore
          attrib = attribToBackup; // 2. push current token into attrib.attribValue

          attrib.attribValue.push(token); // 3. restore real token

          token = lodash_clonedeep(parentTokenToBackup); // 4. reset

          attribToBackup = undefined;
          parentTokenToBackup = undefined;
        } else {
          dumpCurrentToken(token, _i);
          layers.length = 0;
        }
      } //
      //
      //
      //
      //                               MIDDLE
      //                               ██████
      //
      //
      //
      //
      // record "layers" like entering double quotes
      // -------------------------------------------------------------------------


      if (!doNothing) {
        if (["tag", "rule", "at"].includes(token.type) && token.kind !== "cdata") {
          if (["\"", "'", "(", ")"].includes(str[_i]) && !( // below, we have insurance against single quotes, wrapped with quotes:
          // "'" or '"' - templating languages might put single quote as a sttring
          // character, not meaning wrapped-something.
          ["\"", "'", "`"].includes(str[left(str, _i)]) && str[left(str, _i)] === str[right(str, _i)])) {
            if ( // maybe it's the closing counterpart?
            Array.isArray(layers) && layers.length && layers[~-layers.length].type === "simple" && layers[~-layers.length].value === flipEspTag(str[_i])) {
              layers.pop();
            } else {
              // it's opening then
              layers.push({
                type: "simple",
                value: str[_i],
                position: _i
              });
            }
          }
        } else if (token.type === "comment" && ["only", "not"].includes(token.kind)) {
          if (["[", "]"].includes(str[_i])) {
            if ( // maybe it's the closing counterpart?
            Array.isArray(layers) && layers.length && layers[~-layers.length].type === "simple" && layers[~-layers.length].value === flipEspTag(str[_i])) {
              // maybe it's the closing counterpart?
              layers.pop();
            } else {
              // it's opening then
              layers.push({
                type: "simple",
                value: str[_i],
                position: _i
              });
            }
          }
        } else if (token.type === "esp" && "'\"".concat(BACKTICK, "()").includes(str[_i]) && !( // below, we have insurance against single quotes, wrapped with quotes:
        // "'" or '"' - templating languages might put single quote as a sttring
        // character, not meaning wrapped-something.
        ["\"", "'", "`"].includes(str[left(str, _i)]) && str[left(str, _i)] === str[right(str, _i)])) {
          if ( // maybe it's the closing counterpart?
          Array.isArray(layers) && layers.length && layers[~-layers.length].type === "simple" && layers[~-layers.length].value === flipEspTag(str[_i])) {
            // maybe it's the closing counterpart?
            layers.pop();
            doNothing = _i + 1;
          } else if (!"]})>".includes(str[_i])) {
            // it's opening then
            layers.push({
              type: "simple",
              value: str[_i],
              position: _i
            });
          }
        } // console.log(
        //   `1094 FIY, currently ${`\u001b[${33}m${`layers`}\u001b[${39}m`} = ${JSON.stringify(
        //     layers,
        //     null,
        //     4
        //   )}`
        // );

      } // catch the start of at rule's identifierStartsAt
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "at" && token.start != null && _i >= token.start && !token.identifierStartsAt && str[_i] && str[_i].trim() && str[_i] !== "@") {
        // the media identifier's "entry" requirements are deliberately loose
        // because we want to catch errors there, imagine somebody mistakenly
        // adds a comma, @,media
        // or adds a space, @ media
        token.identifierStartsAt = _i;
      } // catch the end of the "at" rule token
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "at" && token.queryStartsAt != null && !token.queryEndsAt && "{;".includes(str[_i])) {
        if (str[_i] === "{") {
          if (str[~-_i] && str[~-_i].trim()) {
            token.queryEndsAt = _i;
          } else {
            // trim the trailing whitespace:
            // @media (max-width: 600px) {
            //                          ^
            //                        this
            //
            token.queryEndsAt = left(str, _i) + 1; // left() stops "to the left" of a character, if you used that index
            // for slicing, that character would be included, in our case,
            // @media (max-width: 600px) {
            //                         ^
            //            that would be index of this bracket
          }
        } else {
          // ; closing, for example, illegal:
          // @charset "UTF-8";
          //                 ^
          //          we're here
          //
          token.queryEndsAt = left(str, _i + 1);
        }

        token.query = str.slice(token.queryStartsAt, token.queryEndsAt);
        token.end = str[_i] === ";" ? _i + 1 : _i;
        token.value = str.slice(token.start, token.end);

        if (str[_i] === ";") {
          // if code is clean, that would be @charset for example, no curlies
          pingTagCb(token);
        } else {
          // then it's opening curlie
          token.openingCurlyAt = _i; // push so far gathered token into layers

          layers.push({
            type: "at",
            token: token
          });
        }

        tokenReset();
        doNothing = _i + 1;
      } // catch the start of the query
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "at" && token.identifier && str[_i] && str[_i].trim() && !token.queryStartsAt) {
        token.queryStartsAt = _i;
      } // catch the end of at rule's identifierStartsAt
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "at" && token.identifierStartsAt != null && _i >= token.start && str[_i] && (!str[_i].trim() || "()".includes(str[_i])) && !token.identifierEndsAt) {
        token.identifierEndsAt = _i;
        token.identifier = str.slice(token.identifierStartsAt, _i);
      } // catch the end of a CSS chunk
      // -------------------------------------------------------------------------
      // charsThatEndCSSChunks:  } , {


      if (token.type === "rule" && selectorChunkStartedAt && (charsThatEndCSSChunks.includes(str[_i]) || str[_i] && !str[_i].trim() && charsThatEndCSSChunks.includes(str[right(str, _i)]))) {
        token.selectors.push({
          value: str.slice(selectorChunkStartedAt, _i),
          selectorStarts: selectorChunkStartedAt,
          selectorEnds: _i
        });
        selectorChunkStartedAt = undefined;
        token.selectorsEnd = _i;
      } // catch the beginning of a token
      // -------------------------------------------------------------------------


      if (!doNothing && str[_i]) {
        // console.log(
        //   `1260 ███████████████████████████████████████ IS TAG STARTING? ${startsTag(
        //     str,
        //     i,
        //     token,
        //     layers,
        //     withinStyle
        //   )}`
        // );
        // console.log(
        //   `1276 ███████████████████████████████████████ IS COMMENT STARTING? ${startsComment(
        //     str,
        //     i,
        //     token,
        //     layers,
        //     withinStyle
        //   )}`
        // );
        // console.log(
        //   `1533 ███████████████████████████████████████ IS ESP TAG STARTING? ${startsEsp(
        //     str,
        //     i,
        //     token,
        //     layers,
        //     withinStyle
        //   )}`
        // );
        if (startsTag(str, _i, token, layers)) {
          //
          //
          //
          // TAG STARTING
          //
          //
          //
          if (token.type && token.start !== null) {
            dumpCurrentToken(token, _i);
            tokenReset();
          } // add other HTML-specific keys onto the object
          // second arg is "start" key:


          initToken("tag", _i);

          if (withinStyle) {
            withinStyle = false;
          } // set the kind:


          if (matchRight(str, _i, "doctype", {
            i: true,
            trimCharsBeforeMatching: ["?", "!", "[", " ", "-"]
          })) {
            token.kind = "doctype";
          } else if (matchRight(str, _i, "cdata", {
            i: true,
            trimCharsBeforeMatching: ["?", "!", "[", " ", "-"]
          })) {
            token.kind = "cdata";
          } else if (matchRight(str, _i, "xml", {
            i: true,
            trimCharsBeforeMatching: ["?", "!", "[", " ", "-"]
          })) {
            token.kind = "xml";
          }
        } else if (startsComment(str, _i, token, layers)) {
          //
          //
          //
          // COMMENT STARTING
          //
          //
          //
          if (token.start != null) {
            dumpCurrentToken(token, _i);
          } // add other HTML-specific keys onto the object
          // second arg is "start" key:


          initToken("comment", _i); // set "closing"

          if (str[_i] === "-") {
            token.closing = true;
          } else if (matchRightIncl(str, _i, ["<![endif]-->"], {
            i: true,
            trimBeforeMatching: true,
            maxMismatches: 2
          })) {
            token.closing = true;
            token.kind = "only";
          }

          if (withinStyle) {
            withinStyle = false;
          }
        } else if (startsEsp(str, _i, token, layers, withinStyle) && ( // ensure we're not inside quotes, so it's not an expression within a value
        // ${"${name}${name}${name}${name}"}
        //    ^
        //   we could be here - notice quotes wrapping all around
        //
        !Array.isArray(layers) || !layers.length || // last layer is not quotes
        layers[~-layers.length].type !== "simple" || !["'", "\""].includes(layers[~-layers.length].value) || // or we're within an attribute (so quotes are HTML tag's not esp tag's)
        attrib && attrib.attribStart && !attrib.attribEnd)) {
          //
          //
          //
          // ESP TAG STARTING
          //
          //
          //
          // ESP tags can't be entered from after CSS at-rule tokens or
          // normal CSS rule tokens
          //
          //
          //
          // FIRST, extract the tag opening and guess the closing judging from it
          var wholeEspTagLumpOnTheRight = getWholeEspTagLumpOnTheRight(str, _i, layers); // lump can't end with attribute's ending, that is, something like:
          // <frameset cols="**">
          // that's a false positive

          if (!espLumpBlacklist.includes(wholeEspTagLumpOnTheRight)) {
            // check the "layers" records - maybe it's a closing part of a set?
            var lengthOfClosingEspChunk;
            var disposableVar;

            if (layers.length && ( //
            // if layer match result is truthy, we take it, otherwise, move on
            // but don't calculate twice!
            // eslint-disable-next-line no-cond-assign
            lengthOfClosingEspChunk = matchLayerLast(wholeEspTagLumpOnTheRight, layers))) {
              // if this was closing of a standalone esp tag, terminate it and ping
              // it to the cb()
              if (token.type === "esp") {
                if (!token.end) {
                  token.end = _i + lengthOfClosingEspChunk;
                  token.value = str.slice(token.start, token.end);
                  token.tail = str.slice(_i, _i + lengthOfClosingEspChunk);
                  token.tailStartsAt = _i;
                  token.tailEndsAt = token.end;
                } // activate doNothing until the end of tails because otherwise,
                // mid-tail characters will initiate new tail start clauses
                // and we'll have overlap/false result


                doNothing = token.tailEndsAt; // it depends will we ping it as a standalone token or will we
                // nest inside the parent tag among attributes

                if (parentTokenToBackup) {
                  // push token to parent, to be among its attributes
                  // 1. ensure key "attribs" exist (thinking about comment tokens etc)
                  if (!Array.isArray(parentTokenToBackup.attribs)) {
                    parentTokenToBackup.attribs.length = 0;
                  } // 2. push somewhere


                  if (attribToBackup) {
                    // 1. restore
                    attrib = attribToBackup; // 2. push to attribValue

                    attrib.attribValue.push(lodash_clonedeep(token)); // 3. attribToBackup is reset in all cases, below
                  } else {
                    // push to attribs
                    parentTokenToBackup.attribs.push(lodash_clonedeep(token));
                  } // 3. parentTokenToBackup becomes token


                  token = lodash_clonedeep(parentTokenToBackup); // 4. resets

                  parentTokenToBackup = undefined;
                  attribToBackup = undefined; // 5. pop layers, remove the opening ESP tag record

                  layers.pop(); // 6. finally, continue, bypassing the rest of the code in this loop

                  i = _i;
                  return "continue";
                } else {
                  dumpCurrentToken(token, _i);
                }

                tokenReset();
              } // pop the recorded layers, at this moment record of ESP chunk
              // will be lost:


              layers.pop();
            } else if (layers.length && ( // eslint-disable-next-line no-cond-assign
            lengthOfClosingEspChunk = matchLayerLast(wholeEspTagLumpOnTheRight, layers, "matchFirst"))) {
              // if this was closing of a standalone esp tag, terminate it and ping
              // it to the cb()
              if (token.type === "esp") {
                if (!token.end) {
                  token.end = _i + lengthOfClosingEspChunk;
                  token.value = str.slice(token.start, token.end);
                }

                dumpCurrentToken(token, _i);
                tokenReset();
              } // pop the recorded layers, at this moment record of ESP chunk
              // will be lost:


              layers.length = 0;
            } else if ( // insurance against stray tails inside attributes:
            // <a b="{ x %}">
            //       ^   ^
            //       |   |
            //       |   we're here
            //       |
            //       |
            //     this opening bracket is incomplete
            //     and therefore not recognised as an opening
            //
            //
            // if ESP character lump we extracted, for example,
            // %} contains a closing character, in this case, a }
            attrib && attrib.attribValue && attrib.attribValue.length && Array.from(str.slice(attrib.attribValue[~-attrib.attribValue.length].start, _i)).some(function (char, idx) {
              return wholeEspTagLumpOnTheRight.includes(flipEspTag(char)) && ( // ensure it's not a false alarm, "notVeryEspChars"
              // bunch, for example, % or $ can be legit characters
              //
              // either it's from "veryEspChars" list so
              // it can be anywhere, not necessarily at the
              // beginning, for example, broken mailchimp:
              // <a b="some text | x *|">
              //                 ^
              //               this is
              //
              veryEspChars.includes(char) || // or that character must be the first character
              // of the attribute's value, for example:
              // <a b="% x %}">
              //       ^
              //     this
              //
              // because imagine false positive, legit %:
              // <a b="Real 5% discount! x %}">
              //             ^
              //    definitely not a part of broken opening {%
              //
              // it's zero'th index:
              !idx) && (disposableVar = {
                char: char,
                idx: idx
              });
            }) && // we're inside attribute
            token.type === "tag" && attrib && attrib.attribValueStartsAt && !attrib.attribValueEndsAt && // last attribute's value element is text-type
            // imagine, the { x from <a b="{ x %}"> would be
            // such unrecognised text:
            attrib.attribValue[~-attrib.attribValue.length] && attrib.attribValue[~-attrib.attribValue.length].type === "text") {
              // token does contain ESP tags, so it's not pure HTML
              token.pureHTML = false;
              var lastAttrValueObj = attrib.attribValue[~-attrib.attribValue.length]; // getNewToken() just creates a new token according
              // the latest (DRY) reference, it doesn't reset
              // the "token" unlike initToken()

              var newTokenToPutInstead = getNewToken("esp", lastAttrValueObj.start); // for remaining values, we need to consider, is there
              // text in front:
              //
              // <a b="{ x %}">
              // vs.
              // <a b="something { x %}">

              if (!disposableVar || !disposableVar.idx) {
                newTokenToPutInstead.head = disposableVar.char;
                newTokenToPutInstead.headStartsAt = lastAttrValueObj.start;
                newTokenToPutInstead.headEndsAt = newTokenToPutInstead.headStartsAt + 1;
                newTokenToPutInstead.tailStartsAt = _i;
                newTokenToPutInstead.tailEndsAt = _i + wholeEspTagLumpOnTheRight.length;
                newTokenToPutInstead.tail = wholeEspTagLumpOnTheRight;
                attrib.attribValue[~-attrib.attribValue.length] = newTokenToPutInstead;
              }
            } else {
              // If we've got an unclosed heads and here new heads are starting,
              // pop the last heads in layers - they will never be matched anyway.
              // Let parser/linter deal with it
              if (Array.isArray(layers) && layers.length && layers[~-layers.length].type === "esp") {
                layers.pop();
              } // if we're within a tag attribute, push the last esp token there


              if (attribToBackup) {
                if (!Array.isArray(attribToBackup.attribValue)) {
                  attribToBackup.attribValue.length = 0;
                }

                attribToBackup.attribValue.push(token);
              }

              layers.push({
                type: "esp",
                openingLump: wholeEspTagLumpOnTheRight,
                guessedClosingLump: flipEspTag(wholeEspTagLumpOnTheRight),
                position: _i
              }); // also, if it's a standalone ESP token, terminate the previous token
              // and start recording a new-one

              if (token.start !== null) {
                // it means token has already being recorded, we need to tackle it -
                // the new, ESP token is incoming!
                // we nest ESP tokens inside "tag" type attributes
                if (token.type === "tag") {
                  // instead of dumping the tag token and starting a new-one,
                  // save the parent token, then nest all ESP tags among attributes
                  if (!token.tagName || !token.tagNameEndsAt) {
                    token.tagNameEndsAt = _i;
                    token.tagName = str.slice(token.tagNameStartsAt, _i);
                    token.recognised = isTagNameRecognised(token.tagName);
                  }

                  parentTokenToBackup = lodash_clonedeep(token);

                  if (attrib.attribStart && !attrib.attribEnd) {
                    attribToBackup = lodash_clonedeep(attrib);
                  }
                } else if (!attribToBackup) {
                  dumpCurrentToken(token, _i);
                } else if (attribToBackup && Array.isArray(attribToBackup.attribValue) && attribToBackup.attribValue.length && attribToBackup.attribValue[~-attribToBackup.attribValue.length].type === "esp" && !attribToBackup.attribValue[~-attribToBackup.attribValue.length].end) {
                  attribToBackup.attribValue[~-attribToBackup.attribValue.length].end = _i;
                  attribToBackup.attribValue[~-attribToBackup.attribValue.length].value = str.slice(attribToBackup.attribValue[~-attribToBackup.attribValue.length].start, _i);
                }
              } // now, either way, if parent tag was stashed in "parentTokenToBackup"
              // or if this is a new ESP token and there's nothing to nest,
              // let's initiate it:


              initToken("esp", _i);
              token.head = wholeEspTagLumpOnTheRight;
              token.headStartsAt = _i;
              token.headEndsAt = _i + wholeEspTagLumpOnTheRight.length; // toggle parentTokenToBackup.pureHTML

              if (parentTokenToBackup && parentTokenToBackup.pureHTML) {
                parentTokenToBackup.pureHTML = false;
              } // if text token has been initiated, imagine:
              //  "attribValue": [
              //     {
              //         "type": "text",
              //         "start": 6, <-------- after the initiation of this, we started ESP token at 6
              //         "end": null,
              //         "value": null
              //     },
              //     {
              //         "type": "esp",
              //         "start": 6, <-------- same start on real ESP token
              //           ...
              //  ],


              if (attribToBackup && Array.isArray(attribToBackup.attribValue) && attribToBackup.attribValue.length) {
                if (attribToBackup.attribValue[~-attribToBackup.attribValue.length].start === token.start) {
                  // erase it from stash
                  attribToBackup.attribValue.pop();
                } else if ( // if the "text" type object is the last in "attribValue" and
                // it's not closed, let's close it and calculate its value:
                attribToBackup.attribValue[~-attribToBackup.attribValue.length].type === "text" && !attribToBackup.attribValue[~-attribToBackup.attribValue.length].end) {
                  attribToBackup.attribValue[~-attribToBackup.attribValue.length].end = _i;
                  attribToBackup.attribValue[~-attribToBackup.attribValue.length].value = str.slice(attribToBackup.attribValue[~-attribToBackup.attribValue.length].start, _i);
                }
              }
            } // do nothing for the second and following characters from the lump


            doNothing = _i + (lengthOfClosingEspChunk || wholeEspTagLumpOnTheRight.length);
          }
        } else if (withinStyle && str[_i] && str[_i].trim() && ( // if at rule starts right after <style>, if we're on "@"
        // for example:
        // <style>@media a {.b{c}}</style>
        // first the <style> tag token will be pushed and then tag object
        // reset and then, still at "@"
        !token.type || // or, there was whitespace and we started recording a text token
        // <style>  @media a {.b{c}}</style>
        //          ^
        //        we're here - look at the whitespace on the left.
        //
        ["text"].includes(token.type)) //
        // TODO: remove below
        // &&
        // !"{},".includes(str[i])
        ) {
            // Text token inside styles can be either whitespace chunk
            // or rogue characters. In either case, inside styles, when
            // "withinStyle" is on, non-whitespace character terminates
            // this text token and "rule" token starts
            if (token.type) {
              dumpCurrentToken(token, _i);
            }

            initToken(str[_i] === "@" ? "at" : "rule", _i);
            token.left = lastNonWhitespaceCharAt;
            token.nested = layers.some(function (o) {
              return o.type === "at";
            });
          } else if (!token.type) {
          initToken("text", _i);
        } // END OF if (!doNothing)

      } // catch the start of a css chunk
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "rule" && str[_i] && str[_i].trim() && !"{}".includes(str[_i]) && !selectorChunkStartedAt && !token.openingCurlyAt) {
        if (!",".includes(str[_i])) {
          selectorChunkStartedAt = _i;

          if (token.selectorsStart === null) {
            token.selectorsStart = _i;
          }
        } else {
          // this contraption is needed to catch commas and assign
          // correctly broken chunk range, [selectorsStart, selectorsEnd]
          token.selectorsEnd = _i + 1;
        }
      } // in comment type, "only" kind tokens, submit square brackets to layers
      // -------------------------------------------------------------------------
      // ps. it's so that we can rule out greater-than signs


      if (token.type === "comment" && ["only", "not"].includes(token.kind)) {
        if (str[_i] === "[") ;
      } // catch the ending of a token
      // -------------------------------------------------------------------------


      if (!doNothing) {
        if (token.type === "tag" && !layers.length && str[_i] === ">") {
          token.end = _i + 1;
          token.value = str.slice(token.start, token.end); // at this point other attributes might be still not submitted yet,
          // we can't reset it here
        } else if (token.type === "comment" && !layers.length && token.kind === "simple" && (str[token.start] === "<" && str[_i] === "-" && (matchLeft(str, _i, "!-", {
          trimBeforeMatching: true
        }) || matchLeftIncl(str, _i, "!-", {
          trimBeforeMatching: true
        }) && str[_i + 1] !== "-") || str[token.start] === "-" && str[_i] === ">" && matchLeft(str, _i, "--", {
          trimBeforeMatching: true,
          maxMismatches: 1
        }))) {
          if (str[_i] === "-" && (matchRight(str, _i, ["[if", "(if", "{if"], {
            i: true,
            trimBeforeMatching: true
          }) || matchRight(str, _i, ["if"], {
            i: true,
            trimBeforeMatching: true
          }) && ( // the following case will assume closing sq. bracket is present
          xBeforeYOnTheRight$1(str, _i, "]", ">") || // in case there are no brackets leading up to "mso" (which must exist)
          str.includes("mso", _i) && !str.slice(_i, str.indexOf("mso")).includes("<") && !str.slice(_i, str.indexOf("mso")).includes(">")))) {
            // don't set the token's end, leave it open until the
            // closing bracket, for example, it might be:
            // <!--[if gte mso 9]>
            //     ^
            //    we're here
            //
            token.kind = "only";
          } else if ( // ensure it's not starting with closing counterpart,
          // --><![endif]-->
          // but with
          // <!--<![endif]-->
          str[token.start] !== "-" && matchRightIncl(str, _i, ["-<![endif"], {
            i: true,
            trimBeforeMatching: true,
            maxMismatches: 2
          })) {
            // don't set the token's end, leave it open until the
            // closing bracket, for example, it might be:
            // <!--<![endif]-->
            //     ^
            //    we're here
            //
            token.kind = "not";
            token.closing = true;
          } else if (token.kind === "simple" && !token.closing && str[right(str, _i)] === ">") {
            token.end = right(str, _i) + 1;
            token.kind = "simplet";
            token.closing = null;
          } else {
            // if it's a simple HTML comment, <!--, end it right here
            token.end = _i + 1; // tokenizer will catch <!- as opening, so we need to extend
            // for correct cases with two dashes <!--

            if (str[left(str, _i)] === "!" && str[right(str, _i)] === "-") {
              token.end = right(str, _i) + 1;
            }

            token.value = str.slice(token.start, token.end);
          } // at this point other attributes might be still not submitted yet,
          // we can't reset it here

        } else if (token.type === "comment" && str[_i] === ">" && (!layers.length || str[right(str, _i)] === "<")) {
          // if last layer was for square bracket, this means closing
          // counterpart is missing so we need to remove it now
          // because it's the ending of the tag ("only" kind) or
          // at least the first part of it ("not" kind)
          if (Array.isArray(layers) && layers.length && layers[~-layers.length].value === "[") {
            layers.pop();
          } // the difference between opening Outlook conditional comment "only"
          // and conditional "only not" is that <!--> follows


          if (!["simplet", "not"].includes(token.kind) && matchRight(str, _i, ["<!-->", "<!---->"], {
            trimBeforeMatching: true,
            maxMismatches: 1,
            lastMustMatch: true
          })) {
            token.kind = "not";
          } else {
            token.end = _i + 1;
            token.value = str.slice(token.start, token.end);
          }
        } else if (token.type === "esp" && token.end === null && isStr$1(token.tail) && token.tail.includes(str[_i])) {
          // extract the whole lump of ESP tag characters:
          var wholeEspTagClosing = "";

          for (var y = _i; y < len; y++) {
            if (espChars.includes(str[y])) {
              wholeEspTagClosing += str[y];
            } else {
              break;
            }
          } // now, imagine the new heads start, for example,
          // {%- z -%}{%-
          //       ^
          //   we're here
          // find the breaking point where tails end


          if (wholeEspTagClosing.length > token.head.length) {
            // in order for this to be tails + new heads, the total length should be
            // at least bigger than heads.
            //
            // For example: Responsys heads: $( - 2 chars. Tails = ) - 1 char.
            // Responsys total of closing tail + head - )$( - 3 chars.
            // That's more than head, 2 chars.
            //
            // For example, eDialog heads: _ - 1 char. Tails: __ - 2 chars.
            // eDialog total of closing tail +  head = 3 chars.
            // That's more than head, 1 char.
            //
            // And same applies to Nujnucks, even considering mix of diferent
            // heads.
            //
            // Another important point - first character in ESP literals.
            // Even if there are different types of literals, more often than not
            // first character is constant. Variations are often inside of
            // the literals pair - for example Nunjucks {{ and {% and {%-
            // the first character is always the same.
            //
            var headsFirstChar = token.head[0];

            if (wholeEspTagClosing.endsWith(token.head)) {
              // we have a situation like
              // zzz *|aaaa|**|bbb|*
              //           ^
              //         we're here and we extracted a chunk |**| and we're
              //         trying to split it into two.
              //
              // by the way, that's very lucky because node.heads (opening *| above)
              // is confirmed - we passed those heads and we know they are exact.
              // Now, our chunk ends with exactly the same new heads.
              // The only consideration is error scenario, heads intead of tails.
              // That's why we'll check, tags excluded, that's the length left:
              // |**| minus heads *| equals |* -- length 2 -- happy days.
              // Bad scenario:
              // *|aaaa*|bbb|*
              //       ^
              //      we're here
              //
              // *| minus heads *| -- length 0 -- raise an error!
              token.end = _i + wholeEspTagClosing.length - token.head.length;
              token.value = str.slice(token.start, token.end);
              doNothing = token.end;
            } else if (wholeEspTagClosing.startsWith(token.tail)) {
              token.end = _i + token.tail.length;
              token.value = str.slice(token.start, token.end);
              doNothing = token.end;
            } else if (!token.tail.includes(headsFirstChar) && wholeEspTagClosing.includes(headsFirstChar) || wholeEspTagClosing.endsWith(token.head) || wholeEspTagClosing.startsWith(token.tail)) {
              // We're very lucky because heads and tails are using different
              // characters, possibly opposite brackets of some kind.
              // That's Nunjucks, Responsys (but no eDialog) patterns.
              var firstPartOfWholeEspTagClosing = wholeEspTagClosing.slice(0, wholeEspTagClosing.indexOf(headsFirstChar));
              var secondPartOfWholeEspTagClosing = wholeEspTagClosing.slice(wholeEspTagClosing.indexOf(headsFirstChar)); // imagine we cliced off (Nunjucks): -%}{%-
              // if every character from anticipated tails (-%}) is present in the front
              // chunk, Bob's your uncle, that's tails with new heads following.

              if (firstPartOfWholeEspTagClosing.length && secondPartOfWholeEspTagClosing.length && token.tail.split("").every(function (char) {
                return firstPartOfWholeEspTagClosing.includes(char);
              })) {
                token.end = _i + firstPartOfWholeEspTagClosing.length;
                token.value = str.slice(token.start, token.end);
                doNothing = token.end;
              }
            } else {
              // so heads and tails don't contain unique character, and more so,
              // starting-one, PLUS, second set is different.
              // For example, ESP heads/tails can be *|zzz|*
              // Imaginery example, following heads would be variation of those
              // above, ^|zzz|^
              // TODO
              // for now, return defaults, from else scenario below:
              // we consider this whole chunk is tails.
              token.end = _i + wholeEspTagClosing.length;
              token.value = str.slice(token.start, token.end);
              doNothing = token.end;
            }
          } else {
            // we consider this whole chunk is tails.
            token.end = _i + wholeEspTagClosing.length;
            token.value = str.slice(token.start, token.end); // if last layer is ESP tag and we've got its closing, pop the layer

            if (Array.isArray(layers) && layers.length && layers[~-layers.length].type === "esp") {
              layers.pop();
            }

            doNothing = token.end;
          }
        } // END OF if (!doNothing)

      } // Catch the end of a tag name
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "tag" && token.tagNameStartsAt && !token.tagNameEndsAt) {
        // tag names can be with numbers, h1
        if (!str[_i] || !charSuitableForTagName(str[_i])) {
          token.tagNameEndsAt = _i;
          token.tagName = str.slice(token.tagNameStartsAt, _i).toLowerCase();

          if (token.tagName === "xml" && token.closing && !token.kind) {
            token.kind = "xml";
          } // We evaluate self-closing tags not by presence of slash but evaluating
          // is the tag name among known self-closing tags. This way, we can later
          // catch and fix missing closing slashes.


          if (voidTags.includes(token.tagName)) {
            token.void = true;
          }

          token.recognised = isTagNameRecognised(token.tagName);
        }
      } // Catch the start of a tag name:
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "tag" && !token.tagNameStartsAt && token.start != null && (token.start < _i || str[token.start] !== "<")) {
        // MULTIPLE ENTRY!
        // Consider closing tag's slashes and tag name itself.
        if (str[_i] === "/") {
          token.closing = true;
        } else if (isLatinLetter(str[_i])) {
          token.tagNameStartsAt = _i; // if by now closing marker is still null, set it to false - there
          // won't be any closing slashes between opening bracket and tag name

          if (!token.closing) {
            token.closing = false;
          }
        }
      } // catch the end of a tag attribute's name
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "tag" && token.kind !== "cdata" && attrib.attribNameStartsAt && _i > attrib.attribNameStartsAt && attrib.attribNameEndsAt === null && !charSuitableForHTMLAttrName(str[_i])) {
        attrib.attribNameEndsAt = _i;
        attrib.attribName = str.slice(attrib.attribNameStartsAt, _i);
        attrib.attribNameRecognised = allHtmlAttribs.has(attrib.attribName); // maybe there's a space in front of equal, <div class= "">

        if (str[_i] && !str[_i].trim() && str[right(str, _i)] === "=") ; else if (str[_i] && !str[_i].trim() || str[_i] === ">" || str[_i] === "/" && str[right(str, _i)] === ">") {
          if ("'\"".includes(str[right(str, _i)])) ; else {
            attrib.attribEnd = _i; // push and wipe

            token.attribs.push(lodash_clonedeep(attrib));
            attribReset();
          }
        }
      } // catch the start of a tag attribute's name
      // -------------------------------------------------------------------------


      if (!doNothing && str[_i] && token.type === "tag" && token.kind !== "cdata" && token.tagNameEndsAt && _i > token.tagNameEndsAt && attrib.attribStart === null && charSuitableForHTMLAttrName(str[_i])) {
        attrib.attribStart = _i;
        attrib.attribLeft = lastNonWhitespaceCharAt;
        attrib.attribNameStartsAt = _i;
      } // catch the curlies inside CSS rule
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "rule") {
        if (str[_i] === "{" && !token.openingCurlyAt) {
          token.openingCurlyAt = _i;
        } else if (str[_i] === "}" && token.openingCurlyAt && !token.closingCurlyAt) {
          token.closingCurlyAt = _i;
          token.end = _i + 1;
          token.value = str.slice(token.start, token.end);
          pingTagCb(token); // if it's a "rule" token and a parent "at" rule is pending in layers,
          // also put this "rule" into that parent in layers

          if (Array.isArray(layers) && layers.length && layers[layers.length - 1].type === "at") {
            layers[layers.length - 1].token.rules.push(token);
          }

          tokenReset();
        }
      } // Catch the end of a tag attribute's value:
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "tag" && attrib.attribValueStartsAt && _i >= attrib.attribValueStartsAt && attrib.attribValueEndsAt === null) {
        if ("'\"".includes(str[_i])) {
          var R1 = !layers.some(function (layerObj) {
            return layerObj.type === "esp";
          });
          var R2 = isAttrClosing(str, attrib.attribOpeningQuoteAt || attrib.attribValueStartsAt, _i); //

          if (str[left(str, _i)] === str[_i] && // str[i + 1].trim() &&
          !"/>".concat(espChars).includes(str[right(str, _i)]) && !xBeforeYOnTheRight$1(str, _i, "=", "\"") && !xBeforeYOnTheRight$1(str, _i, "=", "'") && (xBeforeYOnTheRight$1(str, _i, "\"", ">") || xBeforeYOnTheRight$1(str, _i, "'", ">")) && ( // and either "<" doesn't follow:
          !str.slice(_i + 1).includes("<") || // or there's no equal leading up to it:
          !str.slice(0, str.indexOf("<")).includes("="))) {
            // 1. offset the opening quote marker to this index because
            // we extract the value of an attribute by slicing between
            // "from" and "to" markers; if "from" was one character too early
            // and included quotes, those quotes would end up in the reported value
            attrib.attribOpeningQuoteAt = _i;
            attrib.attribValueStartsAt = _i + 1; // 2. make correction to last start index on last attrib.attribValue

            if (Array.isArray(attrib.attribValue) && attrib.attribValue.length && // start is present
            attrib.attribValue[~-attrib.attribValue.length].start && // but not closing
            !attrib.attribValue[~-attrib.attribValue.length].end && // and it starts too early,
            attrib.attribValueStartsAt > attrib.attribValue[~-attrib.attribValue.length].start) {
              attrib.attribValue[~-attrib.attribValue.length].start = attrib.attribValueStartsAt;
            } // 3. restore layers, push this opening quote again, because
            // it has been just popped


            layers.push({
              type: "simple",
              value: str[_i],
              position: _i
            });
          } else if ( // so we're on a single/double quote,
          // (str[i], the current character is a quote)
          // and...
          // we're not inside some ESP tag - ESP layers are not pending:
          !layers.some(function (layerObj) {
            return layerObj.type === "esp";
          }) && // and the current character passed the
          // attribute closing quote validation by
          // "is-html-attribute-closing"
          //
          // the attributeEnds() api is the following:
          // 1. str, 2. opening quotes index, 3. suspected
          // character for attribute closing (quotes typically,
          // but can be mismatching)...
          // see the package "is-html-attribute-closing" on npm:
          isAttrClosing(str, attrib.attribOpeningQuoteAt || attrib.attribValueStartsAt, _i)) {
            attrib.attribClosingQuoteAt = _i;
            attrib.attribValueEndsAt = _i;

            if (attrib.attribValueStartsAt) {
              attrib.attribValueRaw = str.slice(attrib.attribValueStartsAt, _i);
            }

            attrib.attribEnd = _i + 1;

            if (Array.isArray(attrib.attribValue) && attrib.attribValue.length && !attrib.attribValue[~-attrib.attribValue.length].end) {
              attrib.attribValue[~-attrib.attribValue.length].end = _i;
              attrib.attribValue[~-attrib.attribValue.length].value = str.slice(attrib.attribValue[~-attrib.attribValue.length].start, _i);
            } // 2. if the pair was mismatching, wipe layers' last element


            if (str[attrib.attribOpeningQuoteAt] !== str[_i]) {
              layers.pop();
              layers.pop();
            } // 3. push and wipe


            token.attribs.push(lodash_clonedeep(attrib));
            attribReset();
          }
        } else if (attrib.attribOpeningQuoteAt === null && (str[_i] && !str[_i].trim() || ["/", ">"].includes(str[_i]) || espChars.includes(str[_i]) && espChars.includes(str[_i + 1]))) {
          // ^ either whitespace or tag's closing or ESP literal's start ends
          // the attribute's value if there are no quotes
          attrib.attribValueEndsAt = _i;
          attrib.attribValueRaw = str.slice(attrib.attribValueStartsAt, _i);

          if (Array.isArray(attrib.attribValue) && attrib.attribValue.length && !attrib.attribValue[~-attrib.attribValue.length].end) {
            attrib.attribValue[~-attrib.attribValue.length].end = _i;
            attrib.attribValue[~-attrib.attribValue.length].value = str.slice(attrib.attribValue[~-attrib.attribValue.length].start, attrib.attribValue[~-attrib.attribValue.length].end);
          }

          attrib.attribEnd = _i; // 2. push and wipe

          token.attribs.push(lodash_clonedeep(attrib));
          attribReset(); // 3. pop layers

          layers.pop(); // 4. tackle the tag ending

          if (str[_i] === ">") {
            token.end = _i + 1;
            token.value = str.slice(token.start, token.end);
          }
        } else if (str[_i] === "=" && ("'\"".includes(str[right(str, _i)]) || str[~-_i] && isLatinLetter(str[~-_i]))) {
          // all depends, are there whitespace characters:
          // imagine
          // <a href="border="0">
          // vs
          // <a href="xyz border="0">
          // that's two different cases - there's nothing to salvage in former!
          var whitespaceFound;
          var attribClosingQuoteAt;

          for (var _y = left(str, _i); _y >= attrib.attribValueStartsAt; _y--) {
            // catch where whitespace starts
            if (!whitespaceFound && str[_y] && !str[_y].trim()) {
              whitespaceFound = true;

              if (attribClosingQuoteAt) {
                // slice the captured chunk
                var extractedChunksVal = str.slice(_y, attribClosingQuoteAt);
              }
            } // where that caught whitespace ends, that's the default location
            // of double quotes.
            // <a href="xyz border="0">
            //            ^        ^
            //            |        |
            //            |   we go from here
            //         to here


            if (whitespaceFound && str[_y] && str[_y].trim()) {
              whitespaceFound = false;

              if (!attribClosingQuoteAt) {
                // that's the first, default location
                attribClosingQuoteAt = _y + 1;
              }
            }
          }

          if (attribClosingQuoteAt) {
            attrib.attribValueEndsAt = attribClosingQuoteAt;

            if (attrib.attribValueStartsAt) {
              attrib.attribValueRaw = str.slice(attrib.attribValueStartsAt, attribClosingQuoteAt);

              if (Array.isArray(attrib.attribValue) && attrib.attribValue.length && !attrib.attribValue[~-attrib.attribValue.length].end) {
                attrib.attribValue[~-attrib.attribValue.length].end = attrib.attribValueEndsAt;
                attrib.attribValue[~-attrib.attribValue.length].value = str.slice(attrib.attribValue[~-attrib.attribValue.length].start, attrib.attribValueEndsAt);
              }
            }

            attrib.attribEnd = attribClosingQuoteAt; // 2. if the pair was mismatching, wipe layers' last element

            if (str[attrib.attribOpeningQuoteAt] !== str[_i]) {
              layers.pop();
            } // 3. push and wipe


            token.attribs.push(lodash_clonedeep(attrib));
            attribReset(); // 4. pull the i back to the position where the attribute ends

            _i = ~-attribClosingQuoteAt;
            i = _i;
            return "continue";
          } else if (attrib.attribOpeningQuoteAt && ("'\"".includes(str[right(str, _i)]) || allHtmlAttribs.has(str.slice(attrib.attribOpeningQuoteAt + 1, _i).trim()))) {
            // worst case scenario:
            // <span width="height="100">
            //
            // traversing back from second "=" we hit only the beginning of an
            // attribute, there was nothing to salvage.
            // In this case, reset the attribute's calculation, go backwards to "h".
            // 1. pull back the index, go backwards, read this new attribute again
            _i = attrib.attribOpeningQuoteAt; // 2. end the attribute

            attrib.attribEnd = attrib.attribOpeningQuoteAt + 1; // 3. value doesn't start, this needs correction

            attrib.attribValueStartsAt = null; // 4. pop the opening quotes layer

            layers.pop(); // 5. push and wipe

            token.attribs.push(lodash_clonedeep(attrib));
            attribReset(); // 6. continue

            i = _i;
            return "continue";
          }
        } else if (attrib && attrib.attribStart && !attrib.attribEnd && ( //
        // AND,
        //
        // either there are no attributes recorded under attrib.attribValue:
        !Array.isArray(attrib.attribValue) || // or it's array but empty:
        !attrib.attribValue.length || // or is it not empty but its last attrib has ended by now
        attrib.attribValue[~-attrib.attribValue.length].end && attrib.attribValue[~-attrib.attribValue.length].end <= _i)) {
          attrib.attribValue.push({
            type: "text",
            start: _i,
            end: null,
            value: null
          });
        }
      } else if (token.type === "esp" && attribToBackup && parentTokenToBackup && attribToBackup.attribOpeningQuoteAt && "'\"".includes(str[_i]) && str[attribToBackup.attribOpeningQuoteAt] === str[_i] && isAttrClosing(str, attribToBackup.attribOpeningQuoteAt, _i)) {
        // imagine unclosed ESP tag inside attr value:
        // <tr class="{% x">
        //                ^
        //             we're here
        // we need to still proactively look for closing attribute quotes,
        // even inside ESP tags, if we're inside tag attributes
        // 1. patch up missing token (which is type="esp" currently) values
        token.end = _i;
        token.value = str.slice(token.start, _i); // 2. push token into attribToBackup.attribValue

        if (attribToBackup && !Array.isArray(attribToBackup.attribValue)) {
          attribToBackup.attribValue.length = 0;
        }

        attribToBackup.attribValue.push(token); // 3. patch up missing values in attribToBackup

        attribToBackup.attribValueEndsAt = _i;
        attribToBackup.attribValueRaw = str.slice(attribToBackup.attribValueStartsAt, _i);
        attribToBackup.attribClosingQuoteAt = _i;
        attribToBackup.attribEnd = _i + 1; // 4. restore parent token

        token = lodash_clonedeep(parentTokenToBackup);
        token.attribs.push(attribToBackup); // 5. reset all

        attribToBackup = undefined;
        parentTokenToBackup = undefined; // 6. pop the last 3 layers
        // currently layers array should be like:
        // [
        //   {
        //     "type": "simple",
        //     "value": '"',
        //     "position": 10
        //   },
        //   {
        //     "type": "esp",
        //     "openingLump": "{%",
        //     "guessedClosingLump": "%}",
        //     "position": 11
        //   }
        //   {
        //     "type": "simple",
        //     "value": '"',
        //     "position": 15
        //   },
        // ]

        layers.pop();
        layers.pop();
        layers.pop();
      } // Catch the start of a tag attribute's value:
      // -------------------------------------------------------------------------


      if (!doNothing && token.type === "tag" && !attrib.attribValueStartsAt && attrib.attribNameEndsAt && attrib.attribNameEndsAt <= _i && str[_i] && str[_i].trim()) {
        if (str[_i] === "=" && !"'\"=".includes(str[right(str, _i)]) && !espChars.includes(str[right(str, _i)]) // it might be an ESP literal
        ) {
            var firstCharOnTheRight = right(str, _i); // find the index of the next quote, single or double

            var firstQuoteOnTheRightIdx = [str.indexOf("'", firstCharOnTheRight), str.indexOf("\"", firstCharOnTheRight)].filter(function (val) {
              return val > 0;
            }).length ? Math.min.apply(Math, _toConsumableArray([str.indexOf("'", firstCharOnTheRight), str.indexOf("\"", firstCharOnTheRight)].filter(function (val) {
              return val > 0;
            }))) : undefined; // catch attribute name - equal - attribute name - equal
            // <span width=height=100>

            if ( // there is a character on the right (otherwise value would be null)
            firstCharOnTheRight && // there is equal character in the remaining chunk
            str.slice(firstCharOnTheRight).includes("=") && // characters upto first equals form a known attribute value
            allHtmlAttribs.has(str.slice(firstCharOnTheRight, firstCharOnTheRight + str.slice(firstCharOnTheRight).indexOf("=")).trim().toLowerCase())) {
              // we have something like:
              // <span width=height=100>
              // 1. end the attribute
              attrib.attribEnd = _i + 1; // 2. push and wipe

              token.attribs.push(_objectSpread2({}, attrib));
              attribReset();
            } else if ( // try to stop this clause:
            //
            // if there are no quote in the remaining string
            !firstQuoteOnTheRightIdx || // there is one but there are equal character between here and its location
            str.slice(firstCharOnTheRight, firstQuoteOnTheRightIdx).includes("=") || // if there is no second quote of that type in the remaining string
            !str.includes(str[firstQuoteOnTheRightIdx], firstQuoteOnTheRightIdx + 1) || // if string slice from quote to quote includes equal or brackets
            Array.from(str.slice(firstQuoteOnTheRightIdx + 1, str.indexOf(str[firstQuoteOnTheRightIdx], firstQuoteOnTheRightIdx + 1))).some(function (char) {
              return "<>=".includes(char);
            })) {
              // case of missing opening quotes
              attrib.attribValueStartsAt = firstCharOnTheRight; // push missing entry into layers

              layers.push({
                type: "simple",
                value: null,
                position: attrib.attribValueStartsAt
              });
            }
          } else if ("'\"".includes(str[_i])) {
          // maybe it's <span width='"100"> and it's a false opening quote, '
          var nextCharIdx = right(str, _i);

          if ( // a non-whitespace character exists on the right of index i
          nextCharIdx && // if it is a quote character
          "'\"".includes(str[nextCharIdx]) && // but opposite kind,
          str[_i] !== str[nextCharIdx] && // and string is long enough
          str.length > nextCharIdx + 2 && // and remaining string contains that quote like the one on the right
          str.slice(nextCharIdx + 1).includes(str[nextCharIdx]) && ( // and to the right of it we don't have str[i] quote,
          // case: <span width="'100'">
          !str.indexOf(str[nextCharIdx], nextCharIdx + 1) || !right(str, str.indexOf(str[nextCharIdx], nextCharIdx + 1)) || str[_i] !== str[right(str, str.indexOf(str[nextCharIdx], nextCharIdx + 1))]) && // and that slice does not contain equal or brackets or quote of other kind
          !Array.from(str.slice(nextCharIdx + 1, str.indexOf(str[nextCharIdx]))).some(function (char) {
            return "<>=".concat(str[_i]).includes(char);
          })) {
            // pop the layers
            layers.pop();
          } else {
            attrib.attribOpeningQuoteAt = _i;

            if (str[_i + 1]) {
              attrib.attribValueStartsAt = _i + 1;
            }

            if ( // if attribValue array is empty, no object has been placed yet,
            Array.isArray(attrib.attribValue) && (!attrib.attribValue.length || // of there is one but it's got ending (prevention from submitting
            // another text type object on top, before previous has been closed)
            attrib.attribValue[~-attrib.attribValue.length].end)) {
              attrib.attribValue.push({
                type: "text",
                start: attrib.attribValueStartsAt,
                end: null,
                value: null
              });
            }
          }
        } // else - value we assume does not start

      } //
      //
      //
      //
      //
      //                       "PARSING" ERROR CLAUSES
      //                       ███████████████████████
      //
      //
      //
      //
      //
      // Catch raw closing brackets inside attribute's contents, maybe they
      // mean the tag ending and maybe the closing quotes are missing?


      if (str[_i] === ">" && token.type === "tag" && attrib.attribStart && !attrib.attribEnd) {
        // Idea is simple: we have to situations:
        // 1. this closing bracket is real, closing bracket
        // 2. this closing bracket is unencoded raw text
        // Now, we need to distinguish these two cases.
        // It's easiest done traversing right until the next closing bracket.
        // If it's case #1, we'll likely encounter a new tag opening (or nothing).
        // If it's case #2, we'll likely encounter a tag closing or attribute
        // combo's equal+quote
        var thisIsRealEnding = false;

        if (str[_i + 1]) {
          // Traverse then
          for (var _y2 = _i + 1; _y2 < len; _y2++) {
            // if we reach the closing counterpart of the quotes, terminate
            if (attrib.attribOpeningQuoteAt && str[_y2] === str[attrib.attribOpeningQuoteAt]) {
              if (_y2 !== _i + 1 && str[~-_y2] !== "=") {
                thisIsRealEnding = true;
              }

              break;
            } else if (str[_y2] === ">") {
              // must be real tag closing, we just tackle missing quotes
              // TODO - missing closing quotes
              break;
            } else if (str[_y2] === "<") {
              thisIsRealEnding = true; // TODO - pop only if type === "simple" and it's the same opening
              // quotes of this attribute

              layers.pop();
              break;
            } else if (!str[_y2 + 1]) {
              // if end was reached and nothing caught, that's also positive sign
              thisIsRealEnding = true;
              break;
            }
          }
        } else {
          thisIsRealEnding = true;
        } //
        //
        //
        // FINALLY,
        //
        //
        //
        // if "thisIsRealEnding" was set to "true", terminate the tag here.


        if (thisIsRealEnding) {
          token.end = _i + 1;
          token.value = str.slice(token.start, token.end); // set and push the attribute's records, just closing quote will be
          // null and possibly value too

          if (attrib.attribValueStartsAt && _i && attrib.attribValueStartsAt < _i && str.slice(attrib.attribValueStartsAt, _i).trim()) {
            attrib.attribValueEndsAt = _i;
            attrib.attribValueRaw = str.slice(attrib.attribValueStartsAt, _i);

            if (Array.isArray(attrib.attribValue) && attrib.attribValue.length && !attrib.attribValue[~-attrib.attribValue.length].end) {
              attrib.attribValue[~-attrib.attribValue.length].end = _i;
              attrib.attribValue[~-attrib.attribValue.length].value = str.slice(attrib.attribValue[~-attrib.attribValue.length].start, _i);
            } // otherwise, nulls stay

          } else {
            attrib.attribValueStartsAt = null;
          }

          attrib.attribEnd = _i; // 2. push and wipe

          token.attribs.push(lodash_clonedeep(attrib));
          attribReset();
        }
      } //
      //
      //
      //
      //                               BOTTOM
      //                               ██████
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      // ping charCb
      // -------------------------------------------------------------------------


      if (str[_i] && opts.charCb) {
        pingCharCb({
          type: token.type,
          chr: str[_i],
          i: _i
        });
      } //
      //
      //
      //
      //
      //
      //
      // catch end of the string
      // -------------------------------------------------------------------------
      // notice there's no "doNothing"


      if (!str[_i] && token.start !== null) {
        token.end = _i;
        token.value = str.slice(token.start, token.end);
        pingTagCb(token);
      } //
      //
      //
      //
      //
      //
      //
      // Record last non-whitespace character
      // -------------------------------------------------------------------------


      if (str[_i] && str[_i].trim()) {
        lastNonWhitespaceCharAt = _i;
      } //
      //
      //
      //
      //
      //
      //
      // logging:
      // -------------------------------------------------------------------------


      i = _i;
    };

    for (var i = 0; i <= len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    } //
    // finally, clear stashes
    //


    if (charStash.length) {
      for (var _i2 = 0, len2 = charStash.length; _i2 < len2; _i2++) {
        reportFirstFromStash(charStash, opts.charCb, opts.charCbLookahead);
      }
    }

    if (tagStash.length) {
      for (var _i3 = 0, _len = tagStash.length; _i3 < _len; _i3++) {
        reportFirstFromStash(tagStash, opts.tagCb, opts.tagCbLookahead);
      }
    } // return stats


    var timeTakenInMilliseconds = Date.now() - start;
    return {
      timeTakenInMilliseconds: timeTakenInMilliseconds
    };
  } // -----------------------------------------------------------------------------

  return tokenizer;

})));
