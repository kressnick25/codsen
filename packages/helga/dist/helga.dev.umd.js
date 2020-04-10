/**
 * helga
 * Your next best friend when editing complex nested code
 * Version: 1.1.28
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/helga
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.helga = {}));
}(this, (function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
	if (!String.fromCodePoint) {
	  (function () {
	    var defineProperty = function () {
	      // IE 8 only supports `Object.defineProperty` on DOM elements
	      try {
	        var object = {};
	        var $defineProperty = Object.defineProperty;
	        var result = $defineProperty(object, object, object) && $defineProperty;
	      } catch (error) {}

	      return result;
	    }();

	    var stringFromCharCode = String.fromCharCode;
	    var floor = Math.floor;

	    var fromCodePoint = function (_) {
	      var MAX_SIZE = 0x4000;
	      var codeUnits = [];
	      var highSurrogate;
	      var lowSurrogate;
	      var index = -1;
	      var length = arguments.length;

	      if (!length) {
	        return '';
	      }

	      var result = '';

	      while (++index < length) {
	        var codePoint = Number(arguments[index]);

	        if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
	        codePoint < 0 || // not a valid Unicode code point
	        codePoint > 0x10FFFF || // not a valid Unicode code point
	        floor(codePoint) != codePoint // not an integer
	        ) {
	            throw RangeError('Invalid code point: ' + codePoint);
	          }

	        if (codePoint <= 0xFFFF) {
	          // BMP code point
	          codeUnits.push(codePoint);
	        } else {
	          // Astral code point; split in surrogate halves
	          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	          codePoint -= 0x10000;
	          highSurrogate = (codePoint >> 10) + 0xD800;
	          lowSurrogate = codePoint % 0x400 + 0xDC00;
	          codeUnits.push(highSurrogate, lowSurrogate);
	        }

	        if (index + 1 == length || codeUnits.length > MAX_SIZE) {
	          result += stringFromCharCode.apply(null, codeUnits);
	          codeUnits.length = 0;
	        }
	      }

	      return result;
	    };

	    if (defineProperty) {
	      defineProperty(String, 'fromCodePoint', {
	        'value': fromCodePoint,
	        'configurable': true,
	        'writable': true
	      });
	    } else {
	      String.fromCodePoint = fromCodePoint;
	    }
	  })();
	}

	var fromcodepoint = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	getCjsExportFromNamespace(fromcodepoint);

	var dist = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.default = void 0;
	  /**
	   * \\ - matches the backslash which indicates the beginning of an escape sequence
	   * (
	   *   u\{([0-9A-Fa-f]+)\} - first alternative; matches the variable-length hexadecimal escape sequence (\u{ABCD0})
	   * |
	   *   u([0-9A-Fa-f]{4}) - second alternative; matches the 4-digit hexadecimal escape sequence (\uABCD)
	   * |
	   *   x([0-9A-Fa-f]{2}) - third alternative; matches the 2-digit hexadecimal escape sequence (\xA5)
	   * |
	   *   ([1-7][0-7]{0,2}|[0-7]{2,3}) - fourth alternative; matches the up-to-3-digit octal escape sequence (\5 or \512)
	   * |
	   *   (['"tbrnfv0\\]) - fifth alternative; matches the special escape characters (\t, \n and so on)
	   * |
	   *   \U([0-9A-Fa-f]+) - sixth alternative; matches the 8-digit hexadecimal escape sequence used by python (\U0001F3B5)
	   * )
	   */

	  var jsEscapeRegex = /\\(u\{([0-9A-Fa-f]+)\}|u([0-9A-Fa-f]{4})|x([0-9A-Fa-f]{2})|([1-7][0-7]{0,2}|[0-7]{2,3})|(['"tbrnfv0\\]))|\\U([0-9A-Fa-f]{8})/g;
	  var usualEscapeSequences = {
	    '0': '\0',
	    'b': '\b',
	    'f': '\f',
	    'n': '\n',
	    'r': '\r',
	    't': '\t',
	    'v': '\v',
	    '\'': '\'',
	    '"': '"',
	    '\\': '\\'
	  };

	  var fromHex = function fromHex(str) {
	    return String.fromCodePoint(parseInt(str, 16));
	  };

	  var fromOct = function fromOct(str) {
	    return String.fromCodePoint(parseInt(str, 8));
	  };

	  var _default = function _default(string) {
	    return string.replace(jsEscapeRegex, function (_, __, varHex, longHex, shortHex, octal, specialCharacter, python) {
	      if (varHex !== undefined) {
	        return fromHex(varHex);
	      } else if (longHex !== undefined) {
	        return fromHex(longHex);
	      } else if (shortHex !== undefined) {
	        return fromHex(shortHex);
	      } else if (octal !== undefined) {
	        return fromOct(octal);
	      } else if (python !== undefined) {
	        return fromHex(python);
	      } else {
	        return usualEscapeSequences[specialCharacter];
	      }
	    });
	  };

	  exports.default = _default;
	  module.exports = exports.default;
	});
	var unescapeJs = unwrapExports(dist);

	var version = "1.1.28";

	var defaults = {
	  targetJSON: false
	};

	function helga(str, originalOpts) {
	  var opts = Object.assign({}, defaults, originalOpts); // console.log(
	  //   `011 using ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
	  //     opts,
	  //     null,
	  //     4
	  //   )}`
	  // );
	  // 1. beautification:
	  // ---------------------------------------------------------------------------

	  var beautified = unescapeJs(str); // 2. minification:
	  // ---------------------------------------------------------------------------

	  var minified = unescapeJs(str);

	  if (opts.targetJSON) {
	    // if target is JSON, replace all tabs with two spaces, then JSON stringify
	    minified = JSON.stringify(minified.replace(/\t/g, "  "), null, 0); // remove wrapper quotes

	    minified = minified.slice(1, minified.length - 1);
	  } // ---------------------------------------------------------------------------


	  return {
	    minified: minified,
	    beautified: beautified
	  };
	}

	exports.defaults = defaults;
	exports.helga = helga;
	exports.version = version;

	Object.defineProperty(exports, '__esModule', { value: true });

})));