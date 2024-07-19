var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/spark-md5/spark-md5.js
var require_spark_md5 = __commonJS({
  "node_modules/spark-md5/spark-md5.js"(exports, module) {
    (function(factory) {
      if (typeof exports === "object") {
        module.exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define(factory);
      } else {
        var glob;
        try {
          glob = window;
        } catch (e) {
          glob = self;
        }
        glob.SparkMD5 = factory();
      }
    })(function(undefined2) {
      "use strict";
      var add32 = function(a, b) {
        return a + b & 4294967295;
      }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b);
      }
      function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
          var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return msw << 16 | lsw & 65535;
        };
      }
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
          function clamp3(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp3(from, length), end = length, num, target, targetArray, sourceArray;
            if (to !== undefined2) {
              end = clamp3(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex2) {
        var bytes = [], length = hex2.length, x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex2.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD52() {
        this.reset();
      }
      SparkMD52.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD52.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD52.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD52.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD52.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice()
        };
      };
      SparkMD52.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD52.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD52.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD52.hash = function(str, raw) {
        return SparkMD52.hashBinary(toUtf8(str), raw);
      };
      SparkMD52.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD52.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD52.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD52.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD52.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD52.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD52.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD52.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD52.prototype.setState.call(this, state);
      };
      SparkMD52.ArrayBuffer.prototype.destroy = SparkMD52.prototype.destroy;
      SparkMD52.ArrayBuffer.prototype._finish = SparkMD52.prototype._finish;
      SparkMD52.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD52;
    });
  }
});

// src/csuite/utils/bang.ts
var bang = (x, msg = "") => {
  if (x == null) {
    console.error(`[\u{1F534}] BANG FAILED`, msg);
    throw new Error("bang: " + (msg ?? "no message"));
  }
  return x;
};
function ASSERT_ARRAY(a) {
  if (!Array.isArray(a)) throw new Error("\u274C not an array");
  return true;
}
function ASSERT_EQUAL(a, b) {
  if (a !== b) throw new Error("\u274C not equal");
  return true;
}
function ASSERT_STRING(a) {
  if (typeof a !== "string") throw new Error("\u274C not a string");
  return true;
}
function asSTRING_orCrash(a, errMsg = "\u274C not a string") {
  if (typeof a !== "string") throw new Error(errMsg);
  return a;
}

// src/csuite/model/Transaction.ts
var Transaction = class {
  constructor(repo) {
    this.repo = repo;
    /** fields that have been created during the transaction */
    this.bump = {
      create: 0,
      serial: 0,
      value: 0
    };
    this.touchedFields = /* @__PURE__ */ new Map();
  }
  track(field, mode) {
    const prev = this.touchedFields.get(field);
    if (prev === mode) return;
    if (prev == null) {
      this.touchedFields.set(field, mode);
      this.bump[mode]++;
    } else if (prev === "serial" && mode === "value") {
      this.bump.serial--;
      this.bump.value++;
      this.touchedFields.set(field, "value");
    } else if (prev === "value" && mode === "create") {
      this.bump.value--;
      this.bump.create++;
      this.touchedFields.set(field, "create");
    }
    if (field.parent) {
      const parentMode = mode === "create" ? "value" : mode;
      this.track(field.parent, parentMode);
    }
  }
  commit() {
    this.repo.transactionCount++;
    this.repo.totalValueTouched += this.bump.value;
    this.repo.totalSerialTouched += this.bump.serial;
    this.repo.totalCreations += this.bump.create;
    const entries = Array.from(this.touchedFields.entries()).map(([field, mode]) => ({ field, mode, depth: field.trueDepth })).sort((a, b) => b.depth - a.depth);
    for (const { field, mode } of entries) {
      if (mode !== "create") continue;
      this.repo.debugLog(`\u{1F7E2} ${`onInit`.padEnd(10)} ${field.path}`);
      field.config.onInit?.(field);
    }
    for (const { field, mode } of entries) {
      if (mode !== "value") continue;
      this.repo.debugLog(`\u{1F536} ${`onValue`.padEnd(10)} ${field.path}`);
      field.applyValueUpdateEffects();
    }
    for (const { mode, field } of entries) {
      if (mode === "serial" || mode === "value") {
        this.repo.debugLog(`\u274C ${`onSerial`.padEnd(10)} ${field.path}`);
        field.applySerialUpdateEffects();
      }
    }
    for (const { field, mode } of entries) {
      if (mode !== "value") continue;
      this.repo.debugLog(`\u{1F499} ${`publish`.padEnd(10)} ${field.path}`);
      field.publishValue();
    }
  }
};

// src/csuite/model/Repository.ts
var Repository = class {
  constructor() {
    /* STORE ------------------------------------------------------------ */
    /** all root fields (previously called entities) */
    this.allRoots = /* @__PURE__ */ new Map();
    /** all fiels, root or not */
    this.allFields = /* @__PURE__ */ new Map();
    /** all fields by given type */
    this.allFieldsByType = /* @__PURE__ */ new Map();
    /* 📌 STATS --------------------------------------------------------- */
    /** how many transactions have been executed on that repo */
    this.transactionCount = 0;
    this.totalValueTouched = 0;
    this.totalSerialTouched = 0;
    this.totalCreations = 0;
    /* 📌 TEMP ---------------------------------------------------------- */
    this.logs = [];
    /* ------------------------------------------------------------------ */
    /**
     * return all currently instanciated widgets
     * field of a given input type
     */
    this.getWidgetsByType = (type) => {
      const typeStore = this.allFieldsByType.get(type);
      if (!typeStore) return [];
      return Array.from(typeStore.values());
    };
    this.tct = null;
    /**
     * last known transactions;
     * added to help with testing
     */
    this.lastTransaction = null;
  }
  get allRootSize() {
    return this.allRoots.size;
  }
  get allFieldSize() {
    return this.allFields.size;
  }
  getEntityByID(entityId) {
    return this.allRoots.get(entityId);
  }
  getFieldByID(fieldId) {
    return this.allFields.get(fieldId);
  }
  /* 📌 FULL-CLEAR ---------------------------------------------------- */
  /**
   * fully clear the entity-map + reset stats
   * @since 2024-07-08
   * @stability unstable
   */
  reset() {
    this.resetStats();
    this.resetEntities();
  }
  resetEntities() {
    for (const root of this.allRoots.values()) {
      root.disposeTree();
    }
    if (this.allFields.size !== 0) {
      throw new Error(
        `[\u274C] INVARIANT VIOLATION: allFields should be empty but it's ${this.allFields.size} (${[...this.allFields.values()].map((i) => [i.type, i.summary])})`
      );
    }
    if (this.allRoots.size !== 0)
      throw new Error(
        `[\u274C] INVARIANT VIOLATION: allRoots should be empty but it's ${this.allRoots.size} (${[...this.allRoots.values()].map((i) => [i.type, i.summary])})`
      );
  }
  resetStats() {
    this.transactionCount = 0;
    this.totalValueTouched = 0;
    this.totalSerialTouched = 0;
    this.totalCreations = 0;
  }
  startRecording() {
    this.logs.splice(0, this.logs.length);
  }
  debugLog(msg) {
    this.logs.push(msg);
  }
  endRecording() {
    return this.logs.slice();
  }
  endRecordingAndLog() {
    console.log(this.logs.join("\n"));
    return this.logs.slice();
  }
  /**
   * un-register field
   * should ONLY be called by `field.dispose()`
   */
  _unregisterField(field) {
    this.allFields.delete(field.id);
    this.allRoots.delete(field.id);
    const typeStore = this.allFieldsByType.get(field.type);
    if (typeStore) typeStore.delete(field.id);
  }
  _registerField(field) {
    if (this.allFields.has(field.id)) {
      throw new Error(`[\u{1F534}] INVARIANT VIOLATION: field already registered: ${field.id}`);
    }
    if (this.tct) {
      this.tct.track(field, "create");
    }
    if (field.root == field) {
      this.allRoots.set(field.id, field);
    }
    this.allFields.set(field.id, field);
    const prev = this.allFieldsByType.get(field.type);
    if (prev == null) {
      this.allFieldsByType.set(field.type, /* @__PURE__ */ new Map([[field.id, field]]));
    } else {
      prev.set(field.id, field);
    }
  }
  TRANSACT(fn, field, touchMode, _tctMode) {
    let isRoot = this.tct == null;
    let OUT;
    this.tct ??= new Transaction(
      this
      /* tctMode */
    );
    if (touchMode === "auto") {
      const prevValue = this.tct.bump.create + this.tct.bump.value;
      const prevSerial = prevValue + this.tct.bump.serial;
      OUT = fn(this.tct);
      const nextValue = this.tct.bump.create + this.tct.bump.value;
      const nextSerial = nextValue + this.tct.bump.serial;
      if (prevValue !== nextValue) this.tct.track(field, "value");
      else if (prevSerial !== nextSerial) this.tct.track(field, "serial");
    } else {
      OUT = fn(this.tct);
      this.tct.track(field, touchMode);
    }
    if (isRoot) {
      const tct = this.tct;
      this.tct = null;
      tct.commit();
      this.lastTransaction = tct;
    }
    return OUT;
  }
  get tracked() {
    return {
      transactionCount: this.transactionCount,
      allRootSize: this.allRootSize,
      allFieldSize: this.allFieldSize,
      totalValueTouched: this.totalValueTouched,
      totalSerialTouched: this.totalSerialTouched,
      totalCreations: this.totalCreations
    };
  }
};
var globalRepository = null;
function getGlobalRepository() {
  globalRepository = globalRepository ||= new Repository();
  return bang(globalRepository);
}

// src/csuite/model/Factory.ts
import { useMemo } from "react";
var Factory = class {
  constructor(builder, repository) {
    this.repository = repository ?? getGlobalRepository();
    this.builder = builder;
  }
  /** LEGACY API; TYPES ARE COMPLICATED DUE TO MAINTAINING BACKWARD COMPAT */
  fields(schemaExt, entityConfig = { name: "unnamed" }) {
    const schema = this.builder.group({
      label: false,
      items: schemaExt(this.builder),
      collapsed: false,
      onSerialChange: entityConfig.onSerialChange,
      onValueChange: entityConfig.onValueChange
    });
    return schema.instanciate(
      //
      this.repository,
      null,
      null,
      entityConfig.serial?.()
    );
  }
  /** simple alias to create a new Form */
  define(schemaFn) {
    return schemaFn(this.builder);
  }
  /** simple alias to create a new Form */
  entity(schemaExt, entityConfig = {}) {
    let schema = this.evalSchema(schemaExt);
    if (entityConfig.onSerialChange || entityConfig.onValueChange)
      schema = schema.withConfig({
        onSerialChange: entityConfig.onSerialChange,
        onValueChange: entityConfig.onValueChange
      });
    return schema.instanciate(
      //
      this.repository,
      null,
      null,
      entityConfig.serial?.()
    );
  }
  /** simple way to defined forms and in react components */
  use(schemaExt, entityConfig = {}, deps = []) {
    const schema = this.evalSchema(schemaExt);
    return useMemo(() => this.entity(schema, entityConfig), deps);
  }
  /** eval schema if it's a function */
  evalSchema(buildFn) {
    if (typeof buildFn === "function") return buildFn(this.builder);
    return buildFn;
  }
};

// src/csuite/utils/clamp.ts
var clamp = (v, min, max) => Math.min(Math.max(v, min), max);
var clampOpt = (v, min, max) => {
  if (v == null) return min ?? 0;
  if (min == null && max == null) return v;
  if (min == null) return Math.min(v, max);
  if (max == null) return Math.max(v, min);
  return Math.min(Math.max(v, min), max);
};

// src/csuite/tinyCSS/CSSVar.tsx
import { computed, makeObservable, observable } from "mobx";
var NumberVar = class {
  constructor(name, value_) {
    this.name = name;
    this.value_ = value_;
    makeObservable(this, { value_: observable, value: computed });
  }
  get value() {
    return this.value_ instanceof Function ? this.value_() : this.value_;
  }
  toString() {
    return `var(--${this.name})`;
  }
};
function getNum(a, def) {
  if (a == null) return def;
  if (a instanceof NumberVar) return getNum(a.value);
  return a;
}

// src/csuite/kolor/Kolor.tsx
import Color from "colorjs.io";
var white = new Color("oklch", [1, 0, 0]);
var black = new Color("oklch", [0, 0, 0]);
var Kolor = class _Kolor {
  constructor(lightness, chroma, hue, opacity = 1) {
    this.lightness = lightness;
    this.chroma = chroma;
    this.hue = hue;
    this.opacity = opacity;
    // prettier-ignore
    this.clampToRec2020 = () => {
      if (this.isInRec2020Gamut) return this;
      const clamped = this.color.toGamut("rec2020");
      return new _Kolor(clamped.oklch[0], clamped.oklch[1], clamped.oklch[2]);
    };
    this.clampToP3 = () => {
      if (this.isInP3Gamut) return this;
      const clamped = this.color.toGamut("p3");
      return new _Kolor(clamped.oklch[0], clamped.oklch[1], clamped.oklch[2]);
    };
    this.clampToRGB = () => {
      if (this.isInRBGGamut) return this;
      const clamped = this.color.toGamut("srgb");
      return new _Kolor(clamped.oklch[0], clamped.oklch[1], clamped.oklch[2]);
    };
    this.ASSERT_VALID = () => {
      if (isNaN(this.lightness)) {
        this.lightness = 0;
      }
      if (isNaN(this.chroma)) throw new Error("isNaN(this.chroma)");
      if (isNaN(this.hue)) throw new Error("isNaN(this.hue)");
      if (this.lightness < 0) throw new Error(`this.lightness (${this.lightness}) < 0`);
      if (this.lightness > 1) throw new Error(`this.lightness (${this.lightness}) > 1`);
      if (this.chroma < 0) throw new Error(`this.chroma (${this.chroma}) < 0`);
      if (this.chroma > 1) throw new Error(`this.chroma (${this.chroma}) > 1`);
    };
    this.toOKLCH = () => {
      const l = clamp(this.lightness, 1e-4, 0.9999).toFixed(3);
      const c = this.chroma.toFixed(3);
      const h = this.hue.toFixed(3);
      return `oklch(${l} ${c} ${h})`;
    };
    /** true if strictly same values */
    this.isSame = (b) => {
      if (this.lightness !== b.lightness) return false;
      if (this.chroma !== b.chroma) return false;
      if (this.hue !== b.hue) return false;
      return true;
    };
    this.tintBg = (b, dir) => this.tint(b, "Bg", dir);
    this.tintFg = (b, dir) => this.tint(b, "Fg", dir);
    this.tintBorder = (b, dir) => this.tint(b, "Bg", dir);
    this.tint = (b, usage, dir_) => {
      if (b == null) return this;
      const chroma = getNum(b.chroma) ?? this.chroma * getNum(b.chromaBlend, 1);
      const hue = getNum(b.hue) ?? this.hue + getNum(b.hueShift, 0);
      let lightness = this.lightness;
      if (b.lightness != null) {
        lightness = getNum(b.lightness, 0);
      } else if (b.contrast == null || b.contrast == 0) {
        lightness = this.lightness;
      } else {
        const cr = getNum(b.contrast);
        const x1 = this.color.clone().set({ "hct.t": (v) => v += cr * 100 }).toGamut("srgb");
        const x2 = this.color.clone().set({ "hct.t": (v) => v -= cr * 100 }).toGamut("srgb");
        const apcaWx1 = Math.abs(this.color.contrastAPCA(x1));
        const apcaWx2 = Math.abs(this.color.contrastAPCA(x2));
        const x = dir_ == null ? apcaWx1 > apcaWx2 ? x1 : x2 : dir_ === 1 ? x1 : x2;
        lightness = x.l;
      }
      const clamped = new Color("oklch", [lightness, chroma, hue]).toGamut("srgb");
      const next = new _Kolor(clamped.oklch[0], clamped.oklch[1], or0(clamped.oklch[2]));
      if (!next.isInRBGGamut) console.error(`[\u{1F534}] ${usage} out of gamut: ${next.toOKLCH()} - ${next.webLink}`);
      return next;
    };
    /** super dumb */
    this._autoContrast_v2 = (contrast, usage) => {
      const col = this.color;
      let candidate = this.color.clone();
      const distToBlack = this.color.distance(black);
      const distToWhite = this.color.distance(white);
      const desired = Math.abs(contrast);
      let bestContrastDiff = Infinity;
      let bestContrast = -Infinity;
      let bestCandidate = candidate;
      let min = -100, max = 100, step = 1;
      if (desired < 0.1) {
        min = -20;
        max = 20;
        step = 0.02;
      }
      const dir = distToBlack < distToWhite ? 1 : -1;
      for (let i = min; i < max; i += step) {
        if (this.lightness + 0.01 * i * dir < 0 || this.lightness + 0.01 * i * dir > 1) continue;
        candidate = col.clone().set({ l: (l) => l + 0.01 * i * dir }).toGamut("srgb");
        const obtained = usage === "Fg" ? Math.abs(col.contrastAPCA(candidate) / 108) : col.contrastWCAG21(candidate) / 21;
        const contrastDiff = Math.abs(Math.abs(desired) - Math.abs(obtained));
        if (contrastDiff < bestContrastDiff) {
          bestContrastDiff = contrastDiff;
          bestContrast = obtained;
          bestCandidate = candidate.clone();
        }
      }
      console.log(`[\u{1F920}] best:`, { desired, obtained: bestContrast, diff: bestContrastDiff });
      return bestCandidate.oklch[0];
    };
    this.ASSERT_VALID();
  }
  static {
    this.fromString = (str) => {
      try {
        const color = new Color(str);
        const [l, c, h] = color.oklch;
        return new _Kolor(l, c, isNaN(h) ? 0 : h);
      } catch (e) {
        console.error(`[\u{1F534}] getLCHFromString FAILURE (string is: "${str}")`);
        return new _Kolor(0.5, 0.1, 0);
      }
    };
  }
  get color() {
    return new Color("oklch", [this.lightness, this.chroma, this.hue]);
  }
  get isInRec2020Gamut() {
    return this.color.inGamut("rec2020");
  }
  // prettier-ignore
  get isInP3Gamut() {
    return this.color.inGamut("p3");
  }
  // prettier-ignore
  get isInRBGGamut() {
    return this.color.inGamut("srgb");
  }
  get webLink() {
    return `https://oklch.com/#${(this.lightness * 100).toFixed(2)},${this.chroma.toFixed(3)},${this.hue.toFixed(3)},100`;
  }
  /*
   * This slightly favors using the darker color by adding a small
   * float to ensure we always have -1/1 from Math.sign
   */
  _autoContrast_v1(lightness, contrast) {
    const start = lightness;
    const dir = Math.sign(0.5 - lightness - 1e-5);
    const final = start + dir * contrast;
    return clamp(final, 0, 1);
  }
};
var or0 = (n) => n == null ? 0 : isNaN(n) ? 0 : n;

// src/csuite/kolor/Tint.tsx
function normalizeTint(tint) {
  if (tint == null) return {};
  if (typeof tint === "boolean") return { contrast: tint ? (
    /* 0.2 */
    0.08
  ) : 0 };
  if (typeof tint === "number") return { contrast: clamp(tint / 100, 0, 1) };
  if (typeof tint === "string") return Kolor.fromString(tint);
  return tint;
}

// src/csuite/box/BoxNormalized.tsx
function normalizeBox(box) {
  const out = {};
  if (box.base != null) out.base = normalizeTint(box.base);
  if (box.hover != null) out.hover = normalizeTint(box.hover);
  if (box.shock != null) out.shock = normalizeTint(box.shock);
  if (box.text != null) out.text = normalizeTint(box.text);
  if (box.textShadow != null) out.textShadow = normalizeTint(box.textShadow);
  if (box.shadow != null) out.shadow = normalizeTint(box.shadow);
  if (box.border != null) out.border = normalizeTint(box.border);
  return out;
}

// src/csuite/box/CurrentStyleCtx.tsx
import { createContext } from "react";
var CurrentStyleCtx = createContext({
  base: new Kolor(0.1, 0.05, 0),
  text: { contrast: 1, chromaBlend: 0, hueShift: 0 },
  dir: 1
  /**
   * if we want to handle that though CSS, it HAS to always be present
   * so we can seamlessly switch to it, when any part of the tree becomes hovered;
   *
   * potential problems
   * 🔶 it may not handle properly Reveals:
   *       => 2024-06-03 rvion: I think we should be good to go to force override
   *          the revealed content context to the base non-hovered color in every
   *          situation; should be the safest option to assumem hover must be
   *          computed from the last DOM root only
   */
});

// src/csuite/button/usePressLogic.ts
var draggedElement = null;
var startingState = false;
var isDraggingListener = (ev) => {
  if (ev.button == 0) {
    draggedElement = null;
    window.removeEventListener("mouseup", isDraggingListener, true);
  }
};
var usePressLogic = (p, value) => {
  if (p.onClick == null)
    return {
      onMouseDown: p.onMouseDown,
      onMouseEnter: p.onMouseEnter
    };
  return {
    onMouseDown: (ev) => {
      if (ev.button == 0) {
        p.onMouseDown?.(ev);
        p.onClick?.(ev);
        draggedElement = ev.currentTarget;
        startingState = !value;
        window.addEventListener("mouseup", isDraggingListener, true);
      }
    },
    onMouseEnter: (ev) => {
      if (startingState === value) return;
      if (draggedElement != null) p.onClick?.(ev);
    }
  };
};

// src/csuite/icons/iconsCDI.ts
import * as icons from "@mdi/js";
var _CushyIcons = {
  /* Inherited Icons */
  cdiDraft: icons.mdiPencil,
  cdiApp: icons.mdiAbacus,
  cdiStep: icons.mdiAccessPoint,
  cdiPreset: icons.mdiAccessPoint,
  cdiExternalCivitai: icons.mdiCityVariant,
  cdiExternalSquoosh: icons.mdiCigar,
  /* Custom Icons */
  cdiTest: "M 2.40,7.20 A 20,20 0,0,1 12.00,7.20 A 20,20 0,0,1 21.60,7.20 Q 21.60,14.40 12.00,21.60 Q 2.40,14.40 2.40,7.20 z",
  cdiNodes: "M 16,5 C 16,3.89 15.1,3 14,3 H 8 C 6.8954305,3 6,3.8954305 6,5 v 3 c 0,1 1,2 2,2 V 7 6 h 6 V 8 H 8 v 2 h 6 c 1,0 2,-1 2,-2 V 5 h 1 c 1,0 1,1 1,1 h 2 c 1,0 1,1 1,1 v 10 c 0,0 0,1 -1,1 h -5 c 0,0 0,1 -1,1 v -3 h -1 v 3 c 0,0 0,2 -2,2 V 19 17 H 5 v 2 h 6 v 2 H 5 C 3,21 3,19 3,19 v -3 c 0,0 0,-2 2,-2 h 6 c 2,0 2,2 2,2 h 1 c 1,0 1,1 1,1 h 5 V 16 7 h -2 c 0,1 -1,1 -1,1 V 5 Z"
};

// src/csuite/icons/iconsLDI.ts
var _IconsLDI = {
  // locomotive ---------------------------------------------------------------------
  ldiRegularStar: "M11.049 2.92664C11.3483 2.00537 12.6517 2.00538 12.951 2.92664L14.4699 7.60055C14.6038 8.01254 14.9877 8.29148 15.4209 8.29149L20.3354 8.29168C21.3041 8.29172 21.7068 9.53127 20.9232 10.1007L16.9474 12.9895C16.5969 13.2441 16.4503 13.6955 16.5841 14.1075L18.1026 18.7815C18.4019 19.7028 17.3475 20.4689 16.5638 19.8995L12.5878 17.011C12.2373 16.7564 11.7627 16.7564 11.4122 17.011L7.43622 19.8995C6.65252 20.4689 5.5981 19.7028 5.8974 18.7815L7.41589 14.1075C7.54974 13.6955 7.40309 13.2441 7.05263 12.9895L3.07683 10.1007C2.29317 9.53127 2.69592 8.29172 3.66461 8.29168L8.57911 8.29149C9.01231 8.29148 9.39623 8.01254 9.53011 7.60055L11.049 2.92664Z",
  ldiRegularStatusOnline: "M5.63604 18.3646C2.12132 14.8499 2.12132 9.15144 5.63604 5.63672M18.364 5.63672C21.8787 9.15144 21.8787 14.8499 18.364 18.3646M8.46447 15.5362C6.51184 13.5836 6.51184 10.4178 8.46447 8.46515M15.5355 8.46515C17.4882 10.4178 17.4882 13.5836 15.5355 15.5362M13 12.0007C13 12.553 12.5523 13.0007 12 13.0007C11.4477 13.0007 11 12.553 11 12.0007C11 11.4484 11.4477 11.0007 12 11.0007C12.5523 11.0007 13 11.4484 13 12.0007Z",
  ldiRegularUser: "M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z",
  ldiSolidArchive: "M4 3C2.89543 3 2 3.89543 2 5C2 6.10457 2.89543 7 4 7H16C17.1046 7 18 6.10457 18 5C18 3.89543 17.1046 3 16 3H4Z M3 8H17V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V8ZM8 11C8 10.4477 8.44772 10 9 10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H9C8.44772 12 8 11.5523 8 11Z",
  ldiSolidArrowNarrowUp: "M5.29289 7.70711C4.90237 7.31658 4.90237 6.68342 5.29289 6.29289L9.2929 2.29289C9.68342 1.90237 10.3166 1.90237 10.7071 2.29289L14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711C14.3166 8.09763 13.6834 8.09763 13.2929 7.70711L11 5.41421L11 17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17L9 5.41421L6.70711 7.70711C6.31658 8.09763 5.68342 8.09763 5.29289 7.70711Z",
  ldiSolidArrowUp: "M3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289L9.29289 2.29289C9.68342 1.90237 10.3166 1.90237 10.7071 2.29289L16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711C16.3166 10.0976 15.6834 10.0976 15.2929 9.70711L11 5.41421L11 17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17L9 5.41421L4.70711 9.70711C4.31658 10.0976 3.68342 10.0976 3.29289 9.70711Z",
  ldiSolidChevronDown: "M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.7071 7.29289L9.99999 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68341 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z",
  ldiSolidChevronUp: "M14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L10 9.41421L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071Z",
  ldiSolidFilter: "M3 3C3 2.44772 3.44772 2 4 2H16C16.5523 2 17 2.44772 17 3V6C17 6.26522 16.8946 6.51957 16.7071 6.70711L12 11.4142V15C12 15.2652 11.8946 15.5196 11.7071 15.7071L9.70711 17.7071C9.42111 17.9931 8.99099 18.0787 8.61732 17.9239C8.24364 17.7691 8 17.4045 8 17V11.4142L3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6V3Z",
  ldiSolidFolder: "M2 6C2 4.89543 2.89543 4 4 4H9L11 6H16C17.1046 6 18 6.89543 18 8V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6Z",
  ldiSolidPencil: "M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z",
  ldiSolidPhone: "M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z",
  ldiSolidSearch: "M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z",
  ldiSolidStar: "M7.49288 0.76784C7.88896 0.0878043 8.87138 0.0878028 9.26747 0.767838L11.2236 4.12633C11.3687 4.37544 11.6118 4.55208 11.8936 4.6131L15.6922 5.43567C16.4613 5.60223 16.7649 6.53657 16.2406 7.12341L13.6509 10.0216C13.4589 10.2366 13.366 10.5224 13.395 10.8092L13.7865 14.6761C13.8658 15.4591 13.071 16.0365 12.3509 15.7192L8.79424 14.1519C8.53043 14.0357 8.22991 14.0357 7.9661 14.1519L4.40948 15.7192C3.68932 16.0365 2.89453 15.4591 2.9738 14.6761L3.36532 10.8092C3.39436 10.5224 3.30149 10.2366 3.10941 10.0216L0.51978 7.12341C-0.00457591 6.53657 0.299008 5.60223 1.06816 5.43567L4.86676 4.6131C5.14851 4.55208 5.39164 4.37544 5.53673 4.12633L7.49288 0.76784Z",
  ldiSolidX: "M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
};

// src/csuite/icons/iconsXDI.ts
import * as icons2 from "@mdi/js";
var _IconsXDI = {
  // semantic stuff ----------------------------------------------------------------
  _missedCall: icons2.mdiPhoneMissed,
  _transferredCall: icons2.mdiPhoneInTalk,
  _close: icons2.mdiClose,
  _clear: icons2.mdiClose,
  _check: icons2.mdiCheck,
  _edit: icons2.mdiPencil,
  // grid
  _gridFilter: icons2.mdiFilterOutline,
  _gridSortedAsc: icons2.mdiArrowUp,
  _gridSortedDesc: icons2.mdiArrowDown,
  _gridGroupBy: icons2.mdiViewGrid,
  // features
  _webchat: icons2.mdiChatProcessing
};

// src/csuite/icons/icons.ts
import * as icons3 from "@mdi/js";
var allIcons = {
  _: "M 0,0 z",
  // made by pictogrammers, for all
  ...icons3,
  // made by/for ???
  ..._IconsXDI,
  // made by/for locomotive
  ..._IconsLDI,
  // made by/for cushy
  ..._CushyIcons
};

// src/csuite/icons/iconHelpers.tsx
import * as IconImport from "@mdi/react";

// src/csuite/custom-jsx/jsx-runtime.js
import { jsx as jsx_, jsxs as jsxs_ } from "react/jsx-runtime";
import { Fragment } from "react/jsx-runtime";
var joinCls = (tw) => {
  if (typeof tw === "string") return tw;
  if (Array.isArray(tw)) {
    const out = [];
    for (const arg of tw) {
      if (arg == null) continue;
      if (typeof arg === "string") out.push(arg);
      if (typeof arg === "object") {
        for (const key of Object.keys(arg)) {
          if (arg[key]) out.push(key);
        }
      }
    }
    return out.join(" ");
  }
  return "";
};
function jsx(type, props, key) {
  if (props.tw == null) return jsx_(type, props, key);
  const { tw, className, ...rest } = props;
  if (className) return jsx_(type, { ...rest, className: `${className} ${joinCls(tw)}` }, key);
  return jsx_(type, { ...rest, className: joinCls(tw) }, key);
}
function jsxs(type, props, key) {
  if (props.tw == null) return jsxs_(type, props, key);
  const { tw, className, ...rest } = props;
  if (className) return jsxs_(type, { ...rest, className: `${className} ${joinCls(tw)}` }, key);
  return jsxs_(type, { ...rest, className: joinCls(tw) }, key);
}

// src/csuite/icons/iconHelpers.tsx
var Icon2 = IconImport.Icon;
var Ikon = new Proxy({}, {
  get(target, key) {
    if (key in target) return target[key];
    return target[key] = (p) => /* @__PURE__ */ jsx(Icon2, { path: allIcons[key], size: "1.1em", ...p });
  }
});
var IkonOf = function IkonOf_({ name, size: size2, ...p }) {
  return /* @__PURE__ */ jsx(
    Icon2,
    {
      path: allIcons[name],
      size: size2 ?? "1.1em",
      ...p
    }
  );
};

// src/csuite/kolor/overrideTint.tsx
var overrideTint = (a, b) => {
  if (a == null && b == null) return {};
  if (a == null) return b;
  if (b == null) return a;
  const out = {};
  if (b.lightness != null) out.lightness = b.lightness;
  else if (b.contrast != null) out.contrast = b.contrast;
  else if (a.lightness != null) out.lightness = a.lightness;
  else if (a.contrast != null) out.contrast = a.contrast;
  if (b.chroma != null) out.chroma = b.chroma;
  else if (b.chromaBlend != null) out.chromaBlend = b.chromaBlend;
  else if (a.chroma != null) out.chroma = a.chroma;
  else if (a.chromaBlend != null) out.chromaBlend = a.chromaBlend;
  if (b.hue != null) out.hue = b.hue;
  else if (b.hueShift != null) out.hueShift = b.hueShift;
  else if (a.hue != null) out.hue = a.hue;
  else if (a.hueShift != null) out.hueShift = a.hueShift;
  return out;
};

// src/csuite/kolor/overrideTintV2.tsx
function overrideTintV2(...tints) {
  const out = {};
  for (const tint of tints) {
    if (typeof tint === "boolean") continue;
    if (tint == null) continue;
    if (tint.lightness != null) {
      out.lightness = tint.lightness;
      delete out.contrast;
    } else if (tint.contrast != null) {
      out.contrast = tint.contrast;
      delete out.lightness;
    }
    if (tint.chroma != null) {
      out.chroma = tint.chroma;
      delete out.chromaBlend;
    } else if (tint.chromaBlend != null) {
      out.chromaBlend = tint.chromaBlend;
      delete out.chroma;
    }
    if (tint.hue != null) {
      out.hue = tint.hue;
      delete out.hueShift;
    } else if (tint.hueShift != null) {
      out.hueShift = tint.hueShift;
      delete out.hue;
    }
  }
  return out;
}

// src/csuite/tinyCSS/compileOrRetrieveClassName.tsx
var knownRules = /* @__PURE__ */ new Set();
var hasRule = (selector) => knownRules.has(selector);
function addRule(selector, block = "") {
  const styleSheet = getStyleElement().sheet;
  const rules = styleSheet.cssRules;
  if (rules == null) throw new Error("\u274C no rules");
  if (knownRules.size > 0 && knownRules.size % 100 === 0)
    console.log(`[\u{1F3DB}\uFE0F] ${knownRules.size}th rule added`, selector, knownRules.has(selector));
  knownRules.add(selector);
  const index = styleSheet.insertRule(`${selector} {${block}}`, styleSheet.cssRules.length);
  return styleSheet.cssRules[index];
}
var _styleElement = null;
function getStyleElement() {
  if (_styleElement != null) return _styleElement;
  if (_styleElement) {
    _styleElement = _styleElement;
  } else {
    _styleElement = _styleElement ?? document.createElement("style");
    _styleElement.title = "dynamic-theme-css";
    document.head.appendChild(_styleElement);
  }
  return _styleElement;
}

// src/csuite/tinyCSS/quickClass.ts
var import_spark_md5 = __toESM(require_spark_md5(), 1);
import { customAlphabet } from "nanoid";
var mkClassName = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);
var cache = {};
var compileOrRetrieveClassName = (appearance) => {
  const vals = JSON.stringify(appearance);
  const uid = import_spark_md5.default.hash(vals);
  if (uid in cache) return cache[uid];
  const className = "box-" + mkClassName();
  const cssBlock = Object.entries(appearance).map(([key, val]) => {
    if (val == null) return "";
    return `${key}: ${val};`;
  }).join("\n");
  addRule(`.${className}`, cssBlock);
  cache[uid] = className;
  return className;
};

// src/csuite/frame/FrameTemplates.ts
var frame_ghost = normalizeBox({
  textShadow: 100,
  border: 10,
  base: 0
});
var frame_subtle = normalizeBox({
  textShadow: 100,
  border: 0.05,
  base: 0
});
var frame_default = normalizeBox({
  textShadow: 100,
  border: 0.25,
  base: 0.2
});
var frame_link = normalizeBox({
  border: 0,
  text: { hue: 220, chroma: 0.3, contrast: 0.4 }
});
var frame_primary = normalizeBox({
  textShadow: 100,
  base: { contrast: 0.1, chroma: 0.1 },
  border: 0.1
});
var frame_primarySuccess = normalizeBox({
  textShadow: 100,
  base: { contrast: 1, chroma: 0.1, hue: 135 },
  border: 0.1
});
var frame_primaryWarning = normalizeBox({
  textShadow: 100,
  base: { contrast: 0.1, chroma: 0.1, hue: 60 },
  border: 0.1
});
var frame_primaryInfo = normalizeBox({
  textShadow: 100,
  base: { contrast: 0.1, chroma: 0.1, hue: 240 },
  border: 0.1
});
var frame_primaryError = normalizeBox({
  textShadow: 100,
  base: { contrast: 0.1, chroma: 0.1, hue: 0 },
  border: 0.1
});
var frame_secondary = normalizeBox({
  border: 0.3,
  base: { contrast: 0.3, chroma: 0.2, hueShift: 180 }
});
var frameTemplates = {
  link: frame_link,
  ghost: frame_ghost,
  subtle: frame_subtle,
  default: frame_default,
  primary: frame_primary,
  success: frame_primarySuccess,
  info: frame_primaryInfo,
  warning: frame_primaryWarning,
  error: frame_primaryError,
  secondary: frame_secondary
};
var frameTemplateNames = Object.keys(frameTemplates);

// src/csuite/frame/tooltip.tsx
import { observable as observable2 } from "mobx";
var tooltipStuff = observable2({
  tooltip: null
});

// src/csuite/frame/Frame.tsx
import { observer } from "mobx-react-lite";
import { forwardRef, useContext, useState } from "react";
var frameMode = 1 - 1 === 1 ? "STYLE" : "CLASSNAME";
var configureFrameEngine = (mode) => {
  frameMode = mode;
};
var Frame = observer(
  forwardRef(function Frame_(p, ref) {
    const {
      active,
      disabled,
      // built-in state & style modifiers
      icon,
      iconSize,
      suffixIcon,
      loading,
      // addons
      expand,
      square,
      size: size2,
      // size
      look,
      // style: 1/3: frame templates
      base,
      hover,
      border,
      text,
      textShadow,
      shadow,
      // style: 2/3: frame overrides
      style,
      className,
      // style: 3/3: css, className
      hovered: hovered__,
      // state
      onMouseDown,
      onMouseEnter,
      onClick,
      triggerOnPress,
      // interractions
      tooltip,
      tooltipPlacement,
      // remaining properties
      ...rest
    } = p;
    const prevCtx = useContext(CurrentStyleCtx);
    const box = normalizeBox(p);
    const [hovered_, setHovered] = useState(false);
    const hovered = hovered__ ? hovered__(hovered_) : hovered_;
    const variables = {};
    const dir = prevCtx.dir;
    const template = look != null ? frameTemplates[look] : void 0;
    const baseTint = overrideTintV2(template?.base, box.base, disabled && { lightness: prevCtx.base.lightness });
    let KBase = prevCtx.base.tintBg(baseTint, dir);
    if (hovered && !disabled && box.hover) {
      KBase = KBase.tintBg(
        /* { contrast: 0.06 } */
        box.hover,
        dir
      );
    }
    if (look != null) {
      const template2 = frameTemplates[look];
      if (template2.border) box.border = overrideTint(template2.border, box.border);
      if (template2.text) box.text = overrideTint(template2.text, box.text);
    }
    if (disabled) {
      box.text = { contrast: 0.1 };
    } else if (active) {
      box.border = { contrast: 0.5 };
      box.text = { contrast: 0.9 };
    }
    const _goingTooDark = prevCtx.dir === 1 && KBase.lightness > 0.7;
    const _goingTooLight = prevCtx.dir === -1 && KBase.lightness < 0.45;
    const nextDir = _goingTooDark ? -1 : _goingTooLight ? 1 : prevCtx.dir;
    if (nextDir !== prevCtx.dir) variables["--DIR"] = nextDir.toString();
    if (!prevCtx.base.isSame(KBase)) variables["--KLR"] = KBase.toOKLCH();
    if (box.shock) variables.background = KBase.tintBg(box.shock, dir).toOKLCH();
    else variables.background = KBase.toOKLCH();
    const nextext = overrideTint(prevCtx.text, box.text);
    const boxText = box.text ?? prevCtx.text;
    if (boxText != null) variables.color = KBase.tintFg(boxText).toOKLCH();
    if (box.textShadow) variables.textShadow = `0px 0px 2px ${KBase.tintFg(box.textShadow).toOKLCH()}`;
    if (box.border) variables.border = `1px solid ${KBase.tintBorder(box.border, dir).toOKLCH()}`;
    const _onMouseOver = (ev) => {
      if (p.hover != null) setHovered(true);
      if (p.tooltip != null)
        tooltipStuff.tooltip = {
          ref: ev.currentTarget,
          text: p.tooltip ?? "test",
          placement: tooltipPlacement ?? "bottom"
        };
    };
    const _onMouseOut = (ev) => {
      if (p.hover != null) setHovered(false);
      if (p.tooltip != null && //
      tooltipStuff.tooltip?.ref === ev.currentTarget) {
        tooltipStuff.tooltip = null;
      }
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        onMouseOver: _onMouseOver,
        onMouseOut: _onMouseOut,
        tw: [
          "box",
          frameMode === "CLASSNAME" ? compileOrRetrieveClassName(variables) : void 0,
          size2 && `box-${size2}`,
          square && `box-square`,
          loading && "relative",
          expand && "flex-1",
          className
        ],
        style: frameMode === "CLASSNAME" ? style : { ...style, ...variables },
        ...rest,
        ...triggerOnPress != null ? usePressLogic({ onMouseDown, onMouseEnter, onClick }, triggerOnPress.startingState) : { onMouseDown, onMouseEnter, onClick },
        children: /* @__PURE__ */ jsxs(
          CurrentStyleCtx.Provider,
          {
            value: {
              dir: nextDir,
              base: KBase,
              text: nextext
            },
            children: [
              icon && /* @__PURE__ */ jsx(IkonOf, { tw: "pointer-events-none flex-none", name: icon, size: iconSize }),
              p.children,
              suffixIcon && /* @__PURE__ */ jsx(IkonOf, { tw: "pointer-events-none", name: suffixIcon, size: iconSize }),
              loading && /* @__PURE__ */ jsx("div", { tw: "loading loading-spinner absolute loading-sm self-center justify-self-center" })
            ]
          }
        )
      }
    );
  })
);

// src/csuite/ctx/CSuite_ThemeSimple.ts
var CSuite_theme1 = {
  clickAndSlideMultiplicator: 1,
  showWidgetUndo: true,
  showWidgetMenu: true,
  showWidgetDiff: true,
  showToggleButtonBox: false,
  inputBorder: new NumberVar("input-border", 8),
  inputContrast: 0,
  labelBackground: 5,
  labellayout: "fixed-left",
  base: new Kolor(0.987, 0.01, 286),
  baseStr: "oklch(0.987 0.01 286)",
  text: { contrast: 0.824 },
  labelText: { contrast: 0.48, chroma: 0.035 },
  shiftDirection: 1,
  widgetHeight: 1.8,
  inputHeight: 1.6,
  showWidgetExtra: true,
  truncateLabels: false,
  fieldGroups: {}
};

// src/csuite/ctx/CSuiteCtx.ts
import { createContext as createContext2 } from "react";
var CSuiteCtx = createContext2(CSuite_theme1);

// src/csuite/ctx/useCSuite.ts
import { useContext as useContext2 } from "react";
var useCSuite = () => useContext2(CSuiteCtx);

// src/csuite/ctx/CSuiteOverride.tsx
import { observer as observer2 } from "mobx-react-lite";
import { useMemo as useMemo2 } from "react";
var CSuiteOverride = observer2(function CSuiteOverride_(p) {
  const prev = useCSuite();
  const config = useMemo2(
    () => new Proxy(p.config, {
      get: (target, prop) => prop in target ? target[prop] : prev[prop]
    }),
    [p.config]
  );
  return /* @__PURE__ */ jsx(CSuiteCtx.Provider, { value: config, children: /* @__PURE__ */ jsx(
    Frame,
    {
      className: p.className,
      style: {
        // @ts-expect-error 🔴
        "--KLR": config.baseStr,
        "--DIR": config.shiftDirection,
        "--roundness": "5px",
        "--input-height": `${config.inputHeight}rem`,
        "--input-icon-height": `${config.inputHeight / 1.8}rem`
        // '--input-border': getNum(config.inputBorder) / 100,
      },
      children: p.children
    }
  ) });
});

// src/csuite/fields/WidgetUI.DI.ts
var KNOWN_FIELDS = {};
var getFieldClass = (fieldType) => {
  return bang(KNOWN_FIELDS[fieldType]);
};
var getFieldOptionalClass = () => getFieldClass("optional");
var getFieldLinkClass = () => getFieldClass("link");
var getFieldSharedClass = () => getFieldClass("shared");
var getFieldGroupClass = () => getFieldClass("group");
var getFieldStringClass = () => getFieldClass("str");
var getFieldNumberClass = () => getFieldClass("number");
var getFieldListClass = () => getFieldClass("list");
var getFieldSelectOneClass = () => getFieldClass("selectOne");
var registerFieldClass = (type, kls) => {
  KNOWN_FIELDS[type] = kls;
};
var isFieldOptional = _checkIfIs("optional");
var isFieldLink = _checkIfIs("link");
var isFieldShared = _checkIfIs("shared");
var isFieldGroup = _checkIfIs("group");
var isFieldString = _checkIfIs("str");
var isFieldNumber = _checkIfIs("number");
var isFieldList = _checkIfIs("list");
var isFieldSelectOne = _checkIfIs("selectOne");
function _checkIfIs(type) {
  return (widget) => widget.type === type;
}

// src/csuite/button/Button.tsx
import { makeAutoObservable, observable as observable3, runInAction } from "mobx";
import { observer as observer3 } from "mobx-react-lite";
import { useEffect, useMemo as useMemo3 } from "react";
var Button = observer3(function Button_(p) {
  const uist = useMemo3(() => new ButtonState(p), []);
  runInAction(() => uist.props = p);
  useEffect(() => uist.release, []);
  const { size: size2, look, subtle, borderless, iconSize, onClick, ...rest } = p;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      size: size2 ?? "input",
      look,
      base: {
        contrast: subtle ? 0 : uist.visuallyActive || uist.running ? 0.3 : 0.2,
        hue: p.hue
      },
      border: borderless ? 0 : 10,
      hover: p.disabled ? false : 3,
      disabled: p.disabled,
      loading: p.loading ?? uist.running,
      tabIndex: p.tabIndex ?? -1,
      onMouseDown: uist.press,
      onClick: uist.onClick,
      iconSize: iconSize ?? "1.1rem",
      ...rest,
      tw: [
        "inline-flex",
        "select-none",
        p.square ? null : "px-2",
        "font-semibold",
        "ui-button",
        "rounded-sm gap-1 items-center",
        p.disabled ? null : "cursor-pointer",
        "whitespace-nowrap",
        "justify-center"
      ]
    }
  );
});
var ButtonState = class {
  constructor(props) {
    this.props = props;
    this.pressed = false;
    this.running = false;
    this.onClick = (ev) => {
      if (this.props.disabled) return;
      if (this.running) return;
      if (this.props.onClick) {
        const res = this.props.onClick(ev);
        if (res == null) return;
        if (res instanceof Promise) {
          runInAction(() => this.running = true);
          void res.finally(() => runInAction(() => this.running = false));
        } else {
        }
      }
    };
    this.press = (_ev) => {
      if (this.props.disabled) return;
      if (this.running) return;
      this.pressed = true;
      window.addEventListener("pointerup", this.release, true);
    };
    this.release = () => {
      this.pressed = false;
      window.removeEventListener("pointerup", this.release, true);
    };
    makeAutoObservable(this, { props: observable3.ref });
  }
  /** 2024-06-04 for now, "active" means "pressed or active" */
  get visuallyActive() {
    if (this.props.disabled) return false;
    return this.pressed ? !this.props.active : this.props.active;
  }
};

// src/csuite/modal/ModalShell.tsx
import { observer as observer4 } from "mobx-react-lite";
var ModalShellUI = observer4(function ModalShellUI_(p) {
  return /* @__PURE__ */ jsxs(Frame, { border: true, className: p.className, tw: ["animate-in fade-in", "p-4 shadow-xl"], onClick: (ev) => ev.stopPropagation(), children: [
    /* @__PURE__ */ jsxs("div", { tw: "flex", children: [
      /* @__PURE__ */ jsx("div", { tw: "text-xl", children: p.title }),
      /* @__PURE__ */ jsx("div", { tw: "flex-1" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          look: "subtle",
          square: true,
          icon: "mdiClose",
          onClick: (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            p.close();
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "divider my-0" }),
    /* @__PURE__ */ jsx("div", { tw: "_ModalBody", children: p.children }),
    /* @__PURE__ */ jsx("div", { tw: "_ModalFooter", children: p.footer })
  ] });
});

// src/csuite/reveal/RevealCtx.ts
import { createContext as createContext3, useContext as useContext3 } from "react";
var RevealCtx = createContext3(null);
var useRevealOrNull = () => {
  const val = useContext3(RevealCtx);
  return val;
};
var useReveal = () => {
  const val = useContext3(RevealCtx);
  if (val == null) throw new Error("missing editor in current widget react contexts");
  return val;
};

// src/csuite/reveal/RevealStack.ts
var global_RevealStack = [];

// src/csuite/reveal/RevealPlacement.tsx
var computePlacement = (placement, rect) => {
  if (placement === "popup-xs") return { top: 0, left: 0 };
  if (placement === "popup-sm") return { top: 0, left: 0 };
  if (placement === "popup-lg") return { top: 0, left: 0 };
  if (placement === "autoHorizontalStart") {
    placement = rect.left + rect.width / 2 < window.innerWidth / 2 ? "rightStart" : "leftStart";
  }
  if (placement === "autoHorizontalEnd") {
    placement = rect.left + rect.width / 2 < window.innerWidth / 2 ? "rightEnd" : "leftEnd";
  }
  if (placement === "autoVerticalStart") {
    placement = rect.top + rect.height / 2 < window.innerHeight / 2 ? "bottomStart" : "topStart";
  }
  if (placement === "autoVerticalEnd") {
    placement = rect.top + rect.height / 2 < window.innerHeight / 2 ? "bottomEnd" : "topEnd";
  }
  if (placement === "auto") {
    placement = (() => {
      const top = rect.top;
      const bottom = window.innerHeight - rect.bottom;
      const left = rect.left;
      const right = window.innerWidth - rect.right;
      const minX = Math.min(left, right);
      const minY = Math.min(top, bottom);
      return minY == top ? minX == left ? "bottomStart" : "bottomEnd" : minX == left ? "topStart" : "topEnd";
    })();
  }
  if (placement == "bottomStart") return { top: rect.bottom, left: rect.left };
  if (placement == "bottom") return { top: rect.bottom, left: rect.left + rect.width / 2, transform: "translate(-50%)" };
  if (placement == "bottomEnd") return { top: rect.bottom, left: rect.right, transform: "translate(-100%)" };
  if (placement == "topStart") return { top: rect.top, left: rect.left, transform: "translateY(-100%)" };
  if (placement == "top") return { top: rect.top, left: rect.left + rect.width / 2, transform: "translate(-50%, -100%)" };
  if (placement == "topEnd") return { top: rect.top, left: rect.right, transform: "translate(-100%, -100%)" };
  if (placement == "leftStart") return { top: rect.top, left: rect.left, transform: "translateX(-100%)" };
  if (placement == "left") return { top: rect.top + rect.height / 2, left: rect.left, transform: "translate(-100%, -50%)" };
  if (placement == "leftEnd") return { top: rect.bottom, left: rect.left, transform: "translate(-100%, -100%)" };
  if (placement == "rightStart") return { top: rect.top, left: rect.right };
  if (placement == "right") return { top: rect.top + rect.height / 2, left: rect.right, transform: "translateY(-50%)" };
  if (placement == "rightEnd") return { top: rect.bottom, left: rect.right, transform: "translateY(-100%)" };
  return { top: rect.bottom, left: rect.left };
};

// src/csuite/reveal/RevealState.tsx
import { makeAutoObservable as makeAutoObservable2, observable as observable4 } from "mobx";
var defaultShowDelay_whenRoot = 100;
var defaultHideDelay_whenRoot = 300;
var defaultShowDelay_whenNested = 0;
var defaultHideDelay_whenNested = 0;
var DEBUG_REVEAL = false;
var RevealStateLazy = class {
  constructor(p, parents) {
    this.p = p;
    this.parents = parents;
    this.uistOrNull = null;
    this.getUist = () => {
      if (this.uistOrNull) return this.uistOrNull;
      if (DEBUG_REVEAL) console.log(`[\u{1F499}] init RevealUI`);
      this.uistOrNull = new RevealState({ ...this.p }, this.parents);
      return this.uistOrNull;
    };
    makeAutoObservable2(this, { p: false });
  }
};
var RevealState = class _RevealState {
  constructor(p, parents) {
    this.p = p;
    this.parents = parents;
    this.uid = _RevealState.nextUID++;
    this.onMiddleClick = (ev) => {
    };
    this.onRightClick = (ev) => {
      this.onLeftClick(ev);
    };
    this.onLeftClick = (ev) => {
      const toc = this.triggerOnClick;
      if (!toc) return;
      ev.stopPropagation();
      if (this.visible) this.leaveAnchor();
      else this.enterAnchor();
    };
    // ------------------------------------------------
    this.inAnchor = false;
    this.inTooltip = false;
    this.inChildren = /* @__PURE__ */ new Set();
    // prettier-ignore
    // position --------------------------------------------
    this.tooltipPosition = { top: 0, left: 0 };
    this.setPosition = (rect) => {
      this.tooltipPosition = computePlacement(this.placement, rect);
    };
    // lock --------------------------------------------
    this._lock = false;
    this.toggleLock = () => {
      this._lock = !this._lock;
    };
    // anchor --------------------------------------------
    this.enterAnchorTimeoutId = null;
    this.leaveAnchorTimeoutId = null;
    this.onMouseEnterAnchor = () => {
      if (!this.triggerOnHover && !this.visible) return;
      if (_RevealState.shared.current) return this.enterAnchor();
      this._resetAllAnchorTimouts();
      this.enterAnchorTimeoutId = setTimeout(this.enterAnchor, this.showDelay);
    };
    this.onMouseLeaveAnchor = () => {
      if (this.placement.startsWith("popup")) return;
      this._resetAllAnchorTimouts();
      this.leaveAnchorTimeoutId = setTimeout(this.leaveAnchor, this.hideDelay);
    };
    // ---
    this.enterAnchor = () => {
      if (DEBUG_REVEAL) console.log(`[\u{1F920}] ENTERING anchor ${this.ix}`);
      if (_RevealState.shared.current != this && !this.parents.includes(_RevealState.shared.current))
        _RevealState.shared.current?.close();
      _RevealState.shared.current = this;
      this._resetAllAnchorTimouts();
      this.inAnchor = true;
    };
    this.leaveAnchor = () => {
      if (DEBUG_REVEAL) console.log(`[\u{1F920}] LEAVING anchor  ${this.ix}`);
      if (_RevealState.shared.current == this) _RevealState.shared.current = null;
      this._resetAllAnchorTimouts();
      this.inAnchor = false;
    };
    // ---
    this._resetAllAnchorTimouts = () => {
      this._resetAnchorEnterTimeout();
      this._resetAnchorLeaveTimeout();
    };
    this._resetAnchorEnterTimeout = () => {
      if (this.enterAnchorTimeoutId) {
        clearTimeout(this.enterAnchorTimeoutId);
        this.enterAnchorTimeoutId = null;
      }
    };
    this._resetAnchorLeaveTimeout = () => {
      if (this.leaveAnchorTimeoutId) {
        clearTimeout(this.leaveAnchorTimeoutId);
        this.leaveAnchorTimeoutId = null;
      }
    };
    // tooltip --------------------------------------------
    this.enterTooltipTimeoutId = null;
    this.leaveTooltipTimeoutId = null;
    this.onMouseEnterTooltip = () => {
      this._resetAllTooltipTimouts();
      this.enterTooltipTimeoutId = setTimeout(this.enterTooltip, this.showDelay);
    };
    this.onMouseLeaveTooltip = () => {
      if (this.placement.startsWith("popup")) return;
      this._resetAllTooltipTimouts();
      this.leaveTooltipTimeoutId = setTimeout(this.leaveTooltip, this.hideDelay);
    };
    // ---
    this.enterTooltip = () => {
      this._resetAllTooltipTimouts();
      for (const [ix, p] of this.parents.entries()) p.enterChildren(ix);
      if (DEBUG_REVEAL) console.log(`[\u{1F920}] enter tooltip of ${this.ix}`);
      this.inTooltip = true;
    };
    this.leaveTooltip = () => {
      this._resetAllTooltipTimouts();
      for (const [ix, p] of this.parents.entries()) p.leaveChildren(ix);
      if (DEBUG_REVEAL) console.log(`[\u{1F920}] leaving tooltip of ${this.ix}`);
      this.inTooltip = false;
    };
    // ---
    this._resetAllTooltipTimouts = () => {
      this._resetTooltipEnterTimeout();
      this._resetTooltipLeaveTimeout();
    };
    this._resetTooltipEnterTimeout = () => {
      if (this.enterTooltipTimeoutId) {
        clearTimeout(this.enterTooltipTimeoutId);
        this.enterTooltipTimeoutId = null;
      }
    };
    this._resetTooltipLeaveTimeout = () => {
      if (this.leaveTooltipTimeoutId) {
        clearTimeout(this.leaveTooltipTimeoutId);
        this.leaveTooltipTimeoutId = null;
      }
    };
    // --------------------
    this.enterChildren = (depth) => {
      if (DEBUG_REVEAL) console.log(`[\u{1F920}] entering children (of ${this.ix}) ${depth}`);
      this.inChildren.add(depth);
    };
    this.leaveChildren = (depth) => {
      if (DEBUG_REVEAL) console.log(`[\u{1F920}] leaving children (of ${this.ix}) ${depth}`);
      this.inChildren.delete(depth);
    };
    this.contentFn = () => p.content(this);
    makeAutoObservable2(this, { uid: false, p: false });
  }
  static {
    this.nextUID = 1;
  }
  static {
    this.shared = observable4({ current: null }, { current: observable4.ref });
  }
  /** how deep in the reveal stack we are */
  get ix() {
    return this.parents.length;
  }
  get debugColor() {
    return {
      borderLeft: this.inAnchor ? `3px solid red` : void 0,
      borderTop: this.inTooltip ? `3px solid cyan` : void 0,
      borderBottom: this.inChildren.size > 0 ? `3px solid orange` : void 0
    };
  }
  /** toolip is visible if either inAnchor or inTooltip */
  get visible() {
    if (this._lock) return true;
    return this.inAnchor || this.inTooltip || this.inChildren.size > 0;
  }
  close() {
    this._resetAllAnchorTimouts();
    this._resetAllTooltipTimouts();
    this.inAnchor = false;
    this.inTooltip = false;
    this.inChildren.clear();
  }
  get triggerOnClick() {
    return this.p.trigger == null || this.p.trigger == "click" || //
    this.p.trigger == "clickAndHover";
  }
  get triggerOnHover() {
    return this.p.trigger == "hover" || //
    this.p.trigger == "clickAndHover";
  }
  get showDelay() {
    return this.p.showDelay ?? (this.ix ? defaultShowDelay_whenNested : defaultShowDelay_whenRoot);
  }
  get hideDelay() {
    return this.p.hideDelay ?? (this.ix ? defaultHideDelay_whenNested : defaultHideDelay_whenRoot);
  }
  get placement() {
    return this.p.placement ?? "auto";
  }
  // UI --------------------------------------------
  get defaultCursor() {
    if (!this.triggerOnHover) return "cursor-pointer";
    return "cursor-help";
  }
};

// src/csuite/reveal/RevealUI.tsx
import { observer as observer5 } from "mobx-react-lite";
import { createElement, useEffect as useEffect2, useMemo as useMemo4, useRef } from "react";
import { createPortal } from "react-dom";
var RevealUI = observer5(function RevealUI_(p) {
  const ref = useRef(null);
  const parents = useRevealOrNull()?.tower ?? [];
  const SELF = useMemo4(() => new RevealStateLazy(p, parents.map((p2) => p2.getUist())), []);
  const { uistOrNull, getUist: uist2 } = SELF;
  const nextTower = useMemo4(() => ({ tower: [...parents, SELF] }), []);
  useEffect2(() => {
    const x = uistOrNull;
    if (x == null) return;
    if (p.content !== x.p.content) x.contentFn = () => p.content(x);
    if (p.trigger !== x.p.trigger) x.p.trigger = p.trigger;
    if (p.placement !== x.p.placement) x.p.placement = p.placement;
    if (p.showDelay !== x.p.showDelay) x.p.showDelay = p.showDelay;
    if (p.hideDelay !== x.p.hideDelay) x.p.hideDelay = p.hideDelay;
  }, [p.content, p.trigger, p.placement, p.showDelay, p.hideDelay]);
  useEffect2(() => {
    if (uistOrNull?.visible && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      uistOrNull.setPosition(rect);
    }
  }, [uistOrNull?.visible]);
  const anchor = p.children;
  const tooltip = mkTooltip(uistOrNull);
  return /* @__PURE__ */ jsx(RevealCtx.Provider, { value: nextTower, children: /* @__PURE__ */ jsxs(
    "div",
    {
      tw: ["inline-flex", uistOrNull?.defaultCursor ?? "cursor-pointer"],
      className: p.className,
      ref,
      style: p.style,
      onContextMenu: (ev) => {
        if (ev.shiftKey) {
          uist2().toggleLock();
          ev.preventDefault();
          ev.stopPropagation();
        }
      },
      onClick: (ev) => uist2().onLeftClick(ev),
      onAuxClick: (ev) => {
        if (ev.button === 1) return uist2().onMiddleClick(ev);
        if (ev.button === 2) return uist2().onRightClick(ev);
      },
      onMouseEnter: () => uist2().onMouseEnterAnchor(),
      onMouseLeave: () => uist2().onMouseLeaveAnchor(),
      children: [
        anchor,
        tooltip
      ]
    }
  ) });
});
var mkTooltip = (uist) => {
  if (uist == null) return null;
  if (!uist?.visible) return null;
  const element = document.getElementById(
    uist.p.placement?.startsWith("#") ? uist.p.placement.slice(1) : "tooltip-root"
  );
  const pos = uist.tooltipPosition;
  const p = uist.p;
  const hiddenContent = createElement(uist.contentFn);
  const revealedContent = (
    // VIA PORTAL --------------------------------------------------------------------------------
    uist.placement.startsWith("#") ? /* @__PURE__ */ jsx(
      "div",
      {
        ref: (e) => {
          if (e == null) return global_RevealStack.filter((p2) => p2 !== uist);
          global_RevealStack.push(uist);
        },
        onKeyUp: (ev) => {
          if (ev.key === "Escape") {
            uist.close();
            ev.stopPropagation();
            ev.preventDefault();
          }
        },
        onClick: (ev) => {
          p.onClick?.(ev);
          uist.close();
          ev.stopPropagation();
          ev.preventDefault();
        },
        style: { zIndex: 99999999, backgroundColor: "#0000003d" },
        tw: "pointer-events-auto w-full h-full flex items-center justify-center z-50",
        children: hiddenContent
      }
    ) : (
      // VIA POPUP --------------------------------------------------------------------------------
      uist.placement.startsWith("popup") ? /* @__PURE__ */ jsx(
        "div",
        {
          ref: (e) => {
            if (e == null) return global_RevealStack.filter((p2) => p2 !== uist);
            global_RevealStack.push(uist);
          },
          onKeyUp: (ev) => {
            if (ev.key === "Escape") {
              uist.close();
              ev.stopPropagation();
              ev.preventDefault();
            }
          },
          onClick: (ev) => {
            p.onClick?.(ev);
            uist.close();
            ev.stopPropagation();
          },
          style: { zIndex: 99999999, backgroundColor: "#0000003d" },
          tw: "pointer-events-auto absolute w-full h-full flex items-center justify-center z-50",
          children: /* @__PURE__ */ jsx(
            ModalShellUI,
            {
              close: () => {
                uist.close();
              },
              title: p.title,
              children: hiddenContent
            }
          )
        }
      ) : (
        // VIA POPOVER --------------------------------------------------------------------------------
        /* @__PURE__ */ jsxs(
          Frame,
          {
            shadow: true,
            className: p.tooltipWrapperClassName,
            tw: ["_RevealUI pointer-events-auto"],
            onClick: (ev) => ev.stopPropagation(),
            onMouseEnter: uist.onMouseEnterTooltip,
            onMouseLeave: uist.onMouseLeaveTooltip,
            onContextMenu: uist.enterAnchor,
            style: {
              position: "absolute",
              zIndex: 99999999,
              top: pos.top ? `${pos.top}px` : void 0,
              bottom: pos.bottom ? `${pos.bottom}px` : void 0,
              left: pos.left ? `${pos.left}px` : void 0,
              right: pos.right ? `${pos.right}px` : void 0,
              transform: pos.transform
            },
            children: [
              p.title != null && /* @__PURE__ */ jsxs("div", { tw: "px-2", children: [
                /* @__PURE__ */ jsx("div", { tw: "py-0.5", children: p.title }),
                /* @__PURE__ */ jsx(Frame, { tw: "w-full rounded", base: { contrast: 0.2 }, style: { height: "1px" } })
              ] }),
              hiddenContent,
              uist._lock ? /* @__PURE__ */ jsx(Frame, { icon: "mdiLock", text: { contrast: 0.3 }, tw: "italic text-sm flex gap-1 items-center justify-center", children: "shift+right-click to unlock" }) : null
            ]
          }
        )
      )
    )
  );
  return createPortal(revealedContent, element);
};

// src/csuite/markdown/MarkdownUI.tsx
import { marked } from "marked";
import { observer as observer6 } from "mobx-react-lite";
var MarkdownUI = observer6(function MarkdownUI_(p) {
  if (p.markdown == null) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: "_MD",
      className: p.className,
      dangerouslySetInnerHTML: { __html: marked(p.markdown) }
    }
  );
});

// src/csuite/tinyCSS/knownHues.ts
var knownOKLCHHues = {
  error: 0,
  info: 220,
  success: 135,
  warning: 90
};

// src/csuite/messages/MessageUI.tsx
import { observer as observer7, useLocalObservable } from "mobx-react-lite";
var MessageUI = observer7(function MessageInfoUI_(p) {
  const uist = useLocalObservable(() => ({ closed: false }));
  if (uist.closed) return null;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      base: { contrast: 0.05, hue: p.hue ?? knownOKLCHHues.info, chroma: 0.04 },
      border: 10,
      className: p.className,
      tw: "p-0.5 rounded flex items-start gap-1",
      children: [
        p.icon && /* @__PURE__ */ jsx(Frame, { text: { chroma: 0.1, contrast: 0.2 }, children: /* @__PURE__ */ jsx(IkonOf, { name: p.icon, tw: "flex-none text-lg h-input" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          p.title && /* @__PURE__ */ jsx("div", { tw: "w-full font-bold", children: p.title }),
          p.children,
          /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
        ] }),
        (p.closable ?? true) && /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => uist.closed = true,
            tw: "ml-auto",
            size: "input",
            text: { contrast: 0.3 },
            border: 0,
            subtle: true,
            square: true,
            icon: "mdiClose"
          }
        )
      ]
    }
  );
});

// src/csuite/messages/MessageErrorUI.tsx
import { observer as observer8 } from "mobx-react-lite";
var MessageErrorUI = observer8(function MessageErrorUI_(p) {
  return /* @__PURE__ */ jsx(
    MessageUI,
    {
      type: "error",
      icon: "mdiSkull",
      hue: 0,
      ...p
    }
  );
});

// src/csuite/form/FormUI.tsx
import { observer as observer9 } from "mobx-react-lite";
var Form = class {
  constructor(props) {
    this.props = props;
  }
  render(p) {
    return /* @__PURE__ */ jsx(FormUI, { ...this.props, ...p });
  }
  asModal(p) {
    return /* @__PURE__ */ jsx(
      RevealUI,
      {
        placement: "popup-lg",
        title: p?.title,
        content: ({ close }) => {
          return this.render({
            className: "min-w-[600px]",
            ...p,
            submitAction: async (x) => {
              if (this.props.submitAction == null) return;
              if (this.props.submitAction === "confetti") {
                const fire = (await import("https://cdn.skypack.dev/canvas-confetti")).default;
                fire({ zIndex: 1e5, particleCount: 100, spread: 70 });
              } else this.props.submitAction(x);
              if (p?.shouldClose !== false) close();
            }
          });
        },
        children: /* @__PURE__ */ jsx(Button, { look: p?.look, icon: p?.icon, children: p?.label ?? "Cliquez ici \u{1F536}" })
      }
    );
  }
};
var FormUI = observer9(function FormUI_(p) {
  const form = p.field;
  if (form == null) return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: `form is not yet initialized` });
  const submitAction = p.submitAction;
  const component = p.component ?? (() => form.renderWithLabel());
  const canSubmit = p.allowSubmitWhenErrors || //
  p.field == null || //
  p.field.allErrorsIncludingChildrenErros.length === 0;
  return /* @__PURE__ */ jsxs(Frame, { tw: "UI-Form", ...p.theme, className: p.className, style: p.style, children: [
    component({}),
    p.submitButton ?? (submitAction == null ? null : submitAction === "confetti" ? /* @__PURE__ */ jsx("div", { tw: "flex", children: /* @__PURE__ */ jsx(
      Button,
      {
        look: "primary",
        tw: "ml-auto",
        disabled: !canSubmit,
        onClick: async () => {
          if (!canSubmit) return;
          const fire = (await import("https://cdn.skypack.dev/canvas-confetti")).default;
          fire({ zIndex: 1e5, particleCount: 100, spread: 70 });
        },
        children: p.submitLabel ?? "Submit"
      }
    ) }) : /* @__PURE__ */ jsx("div", { tw: "flex", children: /* @__PURE__ */ jsx(Button, { look: "primary", tw: "ml-auto", disabled: !canSubmit, onClick: () => submitAction(form), children: p.submitLabel ?? "Submit" }) }))
  ] });
});

// src/csuite/form/FormAsDropdownConfigUI.tsx
import { observer as observer10 } from "mobx-react-lite";
var FormAsDropdownConfigUI = observer10(function FormAsDropdownConfigUI_(p) {
  return /* @__PURE__ */ jsx(
    RevealUI,
    {
      title: p.title,
      className: p.className,
      content: () => /* @__PURE__ */ jsxs(
        "div",
        {
          tw: "flex-none",
          style: {
            // maxWidth: p.maxWidth ?? '500px',
            maxWidth: p.maxWidth,
            minWidth: p.minWidth,
            width: p.width
          },
          children: [
            p.form && /* @__PURE__ */ jsx(FormUI, { field: p.form }),
            p.children
          ]
        }
      ),
      children: /* @__PURE__ */ jsxs(Button, { size: "input", tw: "!gap-0", children: [
        /* @__PURE__ */ jsx(Ikon.mdiCog, {}),
        /* @__PURE__ */ jsx(Ikon.mdiChevronDown, {})
      ] })
    }
  );
});

// src/csuite/form/WidgetErrorsUI.tsx
import { observer as observer11 } from "mobx-react-lite";
var WidgetErrorsUI = observer11(function WidgerErrorsUI_(p) {
  const field = p.field;
  if (field.hasErrors === false) return null;
  return /* @__PURE__ */ jsx(MessageErrorUI, { children: field.errors.map((e, i) => /* @__PURE__ */ jsxs("div", { tw: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsx(Ikon.mdiAlert, {}),
    e.message
  ] }, i)) });
});

// src/csuite/form/WidgetHeaderContainerUI.tsx
import { observer as observer12 } from "mobx-react-lite";
var isDragging = false;
var wasEnabled = false;
var isDraggingListener2 = (ev) => {
  if (ev.button == 0) {
    isDragging = false;
    window.removeEventListener("mouseup", isDraggingListener2, true);
  }
};
var WidgetHeaderContainerUI = observer12(function WidgetHeaderContainerUI_(p) {
  const field = p.field;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "UI-WidgetHeaderContainer COLLAPSE-PASSTHROUGH",
      tw: [
        "flex gap-0.5 select-none",
        // 2024-06-03 rvion, changing 'items-center' to 'items-start'
        // as well as adding some `h-input` class to <WidgetLabelContainerUI />
        "items-start"
      ],
      onMouseDown: (ev) => {
        if (ev.button != 0 || !field.isCollapsible) return;
        const target = ev.target;
        if (!target.classList.contains("COLLAPSE-PASSTHROUGH")) return;
        isDragging = true;
        window.addEventListener("mouseup", isDraggingListener2, true);
        wasEnabled = !field.serial.collapsed;
        field.setCollapsed(wasEnabled);
      },
      onMouseMove: (ev) => {
        if (!isDragging || !field.isCollapsible) return;
        field.setCollapsed(wasEnabled);
      },
      children: p.children
    }
  );
});

// src/csuite/form/WidgetLabelCaretUI.tsx
import { observer as observer13 } from "mobx-react-lite";
var LabelCaretWidth = "1rem";
var WidgetLabelCaretUI = observer13(function WidgetLabelCaretUI_(p) {
  if (!p.field.isCollapsed && !p.field.isCollapsible)
    return /* @__PURE__ */ jsx(
      Ikon._,
      {
        className: p.className,
        tw: [
          //
          "UI-WidgetLabelCaret self-start minh-widget ABDDE",
          "COLLAPSE-PASSTHROUGH shrink-0"
        ]
      }
    );
  return /* @__PURE__ */ jsx(
    WidgetLabelCaretAlwaysUI,
    {
      className: p.className,
      isCollapsed: p.field.isCollapsed
    }
  );
});
var WidgetLabelCaretAlwaysUI = observer13(function WidgetLabelCaretAlways_({
  isCollapsed,
  className
}) {
  if (isCollapsed)
    return /* @__PURE__ */ jsx(
      Ikon.mdiChevronRight,
      {
        className,
        tw: [
          //
          "UI-WidgetLabelCaret self-start minh-widget ABDDE",
          "COLLAPSE-PASSTHROUGH shrink-0"
        ]
      }
    );
  return /* @__PURE__ */ jsx(
    Ikon.mdiChevronDown,
    {
      className,
      tw: [
        //
        "UI-WidgetLabelCaret self-start minh-widget ABDDE",
        "COLLAPSE-PASSTHROUGH shrink-0 opacity-35"
      ]
    }
  );
});

// src/csuite/form/WidgetLabelContainerUI.tsx
import { observer as observer14 } from "mobx-react-lite";
var WidgetLabelContainerUI = observer14(function WidgetLabelContainerUI_(p) {
  const csuite = useCSuite();
  return /* @__PURE__ */ jsx(
    Frame,
    {
      base: csuite.labelBackground,
      tooltip: p.tooltip,
      tooltipPlacement: p.tooltipPlacement ?? "topStart",
      className: p.className,
      hover: true,
      expand: true,
      tw: [
        "UI-WidgetLabelContainer",
        //
        "COLLAPSE-PASSTHROUGH",
        "flex items-center self-stretch",
        "flex-none shrink-0"
      ],
      style: p.justify ? justifiedStyle : void 0,
      text: csuite.labelText,
      children: p.children
    }
  );
});
var justifiedStyle = {
  minWidth: "8rem",
  // 🔴 move to theme options
  // maxWidth: '20rem', // 🔴 move to theme options
  maxWidth: "15rem",
  // 🔴 move to theme options
  width: "35%",
  // 🔴 move to theme options
  justifyContent: "flex-start"
};

// src/csuite/form/WidgetLabelIconUI.tsx
import { observer as observer15 } from "mobx-react-lite";
var WidgetLabelIconUI = observer15(function WidgetLabelIconUI_(p) {
  const iconName = p.widget.icon;
  if (iconName == null) return null;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      tw: "UI-WidgetLabelIcon self-start minh-widget ABDDE flex items-center",
      className: p.className,
      text: { chroma: 0.2, contrast: 0.9 },
      children: /* @__PURE__ */ jsx(IkonOf, { name: iconName })
    }
  );
});

// src/csuite/checkbox/_InputBoolChroma.ts
var getInputBoolChroma = (isActive) => {
  return isActive ? 0.06 : 0.03;
};
var getInputBoolContrast = (isActive) => {
  return isActive ? 0.3 : 0.05;
};
var getBaseColor = (isActive) => {
  if (isActive) return { contrast: 0.1, chroma: 0.04 };
  return { contrast: 0.01, chroma: 0.01 };
};

// src/csuite/checkbox/InputBoolCheckboxUI.tsx
import { observer as observer16 } from "mobx-react-lite";
var InputBoolCheckboxUI = observer16(function InputBoolCheckboxUI_(p) {
  const isActive = p.value ?? false;
  const label = p.text;
  const mode = p.mode ?? false;
  const chroma = getInputBoolChroma(isActive);
  const contrast = getInputBoolContrast(isActive);
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      style: p.style,
      className: p.className,
      disabled: p.disabled,
      tooltip: p.tooltip,
      tooltipPlacement: p.tooltipPlacement,
      hover: true,
      triggerOnPress: { startingState: isActive },
      expand: p.expand,
      tw: ["flex flex-row !select-none cursor-pointer"],
      onClick: (ev) => {
        if (!p.onValueChange) return;
        ev.stopPropagation();
        p.onValueChange(!isActive);
      },
      children: [
        /* @__PURE__ */ jsx(
          Frame,
          {
            size: "input",
            square: true,
            icon: p.icon ?? (isActive ? "mdiCheckBold" : null),
            tw: ["!select-none", mode === "radio" ? "rounded-full" : "rounded-sm"],
            border: { contrast: 0.2, chroma },
            base: { contrast, chroma },
            iconSize: "var(--input-icon-height)",
            hover: true,
            ...p.box
          }
        ),
        p.children ?? (label ? /* @__PURE__ */ jsx("div", { tw: "ml-1", children: label }) : null)
      ]
    }
  );
});

// src/csuite/checkbox/_InputBoolToggleButtonBoxUI.tsx
import { observer as observer17 } from "mobx-react-lite";
var InputBoolToggleButtonBoxUI = observer17(function InputBoolToggleButtonBoxUI_(p) {
  const { mode, isActive } = p;
  const chroma = isActive ? 0.08 : 0.02;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Frame, { tw: "text-lg mr-1", text: { contrast: 0.3, chroma: isActive ? 0.15 : chroma }, children: mode === "radio" ? isActive ? /* @__PURE__ */ jsx(Ikon.mdiCheckCircle, {}) : /* @__PURE__ */ jsx(Ikon.mdiCircleOutline, {}) : mode === "checkbox" ? isActive ? /* @__PURE__ */ jsx(Ikon.mdiCheckboxMarked, {}) : /* @__PURE__ */ jsx(Ikon.mdiCheckboxBlankOutline, {}) : null }) });
});

// src/csuite/checkbox/InputBoolToggleButtonUI.tsx
import { observer as observer18 } from "mobx-react-lite";
var InputBoolToggleButtonUI = observer18(function InputBoolToggleButtonUI_(p) {
  const isActive = p.value ?? false;
  const expand = p.expand;
  const chroma = getInputBoolChroma(isActive);
  const kit = useCSuite();
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      tw: "InputBoolToggleButtonUI minh-input !select-none cursor-pointer justify-center px-1 text-sm flex items-center",
      className: p.className,
      triggerOnPress: { startingState: isActive },
      tooltip: p.tooltip,
      tooltipPlacement: p.tooltipPlacement,
      look: "default",
      base: { contrast: getInputBoolContrast(isActive), chroma },
      border: 10,
      iconSize: p.iconSize ?? "1.5em",
      hover: !p.disabled,
      expand,
      style: p.style,
      hovered: p.hovered,
      icon: p.icon,
      ...p.box,
      onClick: (ev) => {
        ev.stopPropagation();
        p.onValueChange?.(!isActive);
        if (p.preventDefault) ev.preventDefault();
      },
      children: [
        (p.showToggleButtonBox ?? kit.showToggleButtonBox) && p.mode && /* @__PURE__ */ jsx(InputBoolToggleButtonBoxUI, { isActive, mode: p.mode }),
        p.children ?? /* @__PURE__ */ jsx("p", { tw: "w-full text-center", children: p.text })
      ]
    }
  );
});

// src/csuite/checkbox/InputBoolUI.tsx
import { observer as observer19 } from "mobx-react-lite";
import { createElement as createElement2 } from "react";
var BoolButtonProps = class {
};
var InputBoolUI = observer19(function InputBoolUI_(p) {
  const display = p.display ?? "check";
  if (display === "check") return createElement2(InputBoolCheckboxUI, p);
  return createElement2(InputBoolToggleButtonUI, p);
});

// src/csuite/form/WidgetToggleUI.tsx
import { observer as observer20 } from "mobx-react-lite";
var WidgetToggleUI = observer20(function WidgetToggleUI_(p) {
  if (!isFieldOptional(p.field)) return null;
  const field = p.field;
  return /* @__PURE__ */ jsx(
    InputBoolUI,
    {
      tw: "UI-WidgetToggle self-stretch items-center",
      className: p.className,
      value: field.serial.active,
      expand: false,
      onValueChange: (value) => field.setActive(value)
    }
  );
});

// src/csuite/json/JsonViewUI.tsx
import JsonView from "@uiw/react-json-view";
import { observer as observer21 } from "mobx-react-lite";
var JsonViewUI = observer21(function JsonViewUI_(p) {
  JSON.stringify(p.value);
  return /* @__PURE__ */ jsx(
    JsonView,
    {
      shortenTextAfterLength: 100,
      style: _githubDarkTheme,
      value: p.value ?? {},
      enableClipboard: false
    }
  );
});
var _githubDarkTheme = {
  "--w-rjv-font-family": "monospace",
  "--w-rjv-color": "#79c0ff",
  "--w-rjv-key-string": "#79c0ff",
  "--w-rjv-background-color": "#0d1117",
  "--w-rjv-line-color": "#94949480",
  "--w-rjv-arrow-color": "#ccc",
  "--w-rjv-edit-color": "var(--w-rjv-color)",
  "--w-rjv-info-color": "#7b7b7b",
  "--w-rjv-update-color": "#ebcb8b",
  "--w-rjv-copied-color": "#79c0ff",
  "--w-rjv-copied-success-color": "#28a745",
  "--w-rjv-curlybraces-color": "#8b949e",
  "--w-rjv-colon-color": "#c9d1d9",
  "--w-rjv-brackets-color": "#8b949e",
  "--w-rjv-quotes-color": "var(--w-rjv-key-string)",
  "--w-rjv-quotes-string-color": "var(--w-rjv-type-string-color)",
  "--w-rjv-type-string-color": "#a5d6ff",
  "--w-rjv-type-int-color": "#79c0ff",
  "--w-rjv-type-float-color": "#79c0ff",
  "--w-rjv-type-bigint-color": "#79c0ff",
  "--w-rjv-type-boolean-color": "#ffab70",
  "--w-rjv-type-date-color": "#79c0ff",
  "--w-rjv-type-url-color": "#4facff",
  "--w-rjv-type-null-color": "#ff7b72",
  "--w-rjv-type-nan-color": "#859900",
  "--w-rjv-type-undefined-color": "#79c0ff"
};

// src/csuite/errors/ErrorBoundaryFallback.tsx
var ErrorBoundaryFallback = (p) => {
  return /* @__PURE__ */ jsxs("div", { role: "alert", children: [
    /* @__PURE__ */ jsxs("p", { tw: "flex gap-2 items-center", children: [
      /* @__PURE__ */ jsx("span", { onClick: () => p.resetErrorBoundary(), tw: "btn btn-square btn-sm btn-error rounded", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "refresh" }) }),
      "Something went wrong:"
    ] }),
    /* @__PURE__ */ jsx("pre", { style: { color: "red" }, children: p.error?.message }),
    p.error.extraJSON && /* @__PURE__ */ jsx(JsonViewUI, { value: p.error.extraJSON }),
    p.error?.stack && typeof p.error.stack === "string" && /* @__PURE__ */ jsx("pre", { tw: "text-sm", children: p.error.stack.split("\n").map((line, i) => /* @__PURE__ */ jsx("div", { children: line }, i)) })
  ] });
};

// src/csuite/errors/ErrorBoundaryUI.tsx
import { observer as observer22 } from "mobx-react-lite";
import { ErrorBoundary } from "react-error-boundary";
var ErrorBoundaryUI = observer22(function CushyErrorBoundarySimpleUI_(p) {
  return /* @__PURE__ */ jsx(
    ErrorBoundary,
    {
      FallbackComponent: ErrorBoundaryFallback,
      onReset: (details) => {
      },
      children: p.children
    }
  );
});

// src/csuite/smooth-size/useSizeOf.tsx
import { runInAction as runInAction2 } from "mobx";
import { useLocalObservable as useLocalObservable2 } from "mobx-react-lite";
import { useCallback } from "react";
var useSizeOf = () => {
  const size2 = useLocalObservable2(
    () => ({
      observer: new ResizeObserver((e, obs) => {
        const e0 = bang(e[0]);
        runInAction2(() => {
          const width = e0.contentRect.width;
          const height = e0.contentRect.height;
          size2.width = width;
          size2.height = height;
        });
      }),
      width: void 0,
      height: void 0
    })
  );
  const refFn = useCallback(
    (e) => {
      if (e == null) return size2.observer.disconnect();
      size2.observer.observe(e);
    },
    [size2]
  );
  return { ref: refFn, size: size2 };
};

// src/csuite/smooth-size/AnimatedSizeUI.tsx
import { observer as observer23 } from "mobx-react-lite";
var AnimatedSizeUI = observer23(function AnimatedSizeUI_(p) {
  const { ref: refFn, size: size2 } = useSizeOf();
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: p.className,
      tw: [
        //
        "smooth-resize-container animated",
        // 'overflow-hidden',
        "overflow-y-hidden"
      ],
      style: { height: `${size2.height}px` },
      children: /* @__PURE__ */ jsx("div", { className: "smooth-resize-content", ref: refFn, children: p.children })
    }
  );
});

// src/csuite/utils/makeLabelFromFieldName.tsx
function makeLabelFromFieldName(s) {
  if (typeof s !== "string") {
    console.log(`[\u274C] makeLabelFromFieldName: expected string, got ${typeof s} (${s})`);
  }
  if (s == null) return "";
  if (s.length === 0) return s;
  s = s.replace(/([a-z])([A-Z])/g, "$1 $2");
  s = s.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  s = s.replace(/_/g, " ");
  s = s.replace(/([a-z])([A-Z])/g, "$1 $2");
  s = s.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  s = s.replace(/([0-9])([a-zA-Z])/g, "$1 $2");
  s = s.replace(/([a-zA-Z])([0-9])/g, "$1 $2");
  return s[0].toUpperCase() + s.slice(1);
}

// src/csuite/form/WidgetDebugIDUI.tsx
import { observer as observer24 } from "mobx-react-lite";
var WidgetDebugIDUI = observer24(function WidgetDebugIDUI_(p) {
  return /* @__PURE__ */ jsxs("span", { tw: "COLLAPSE-PASSTHROUGH opacity-50 italic text-sm", children: [
    "#",
    p.field.id.slice(0, 3)
  ] });
});

// src/csuite/form/WidgetHeaderControlsContainerUI.tsx
import { observer as observer25 } from "mobx-react-lite";
var WidgetHeaderControlsContainerUI = observer25(function WidgetHeaderControlsContainerUI_(p) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: p.className,
      tw: [
        //
        "UI-WidgetHeaderControlsContainer",
        "COLLAPSE-PASSTHROUGH",
        "flex flex-1 items-center"
      ],
      children: p.children
    }
  );
});

// src/csuite/form/WidgetIndentUI.tsx
import { observer as observer26 } from "mobx-react-lite";
var WidgetIndentUI = observer26(function WidgetIndentUI_(p) {
  const depth = p.depth;
  if (depth - 1 <= 0) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "UI-WidgetIndent",
      style: {
        // background: 'linear-gradient(90deg, red 0%, blue 100%)',
        // marginLeft: '.5rem',
        // marginRight: '.2rem',
        display: "flex",
        alignSelf: "stretch",
        flexShrink: 0
      },
      children: new Array(depth - 1).fill(0).map((_, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "UI-WidgetIndent",
          style: {
            width: `${0.7}rem`,
            // marginRight: '.2rem',
            flexShrink: 0,
            alignSelf: "stretch",
            borderRight: "1px solid oklch(from var(--KLR) calc(l + 0.1 * var(--DIR)) c h)"
          }
        },
        i
      ))
    }
  );
});

// src/csuite/form/WidgetLabelTextUI.tsx
import { observer as observer27 } from "mobx-react-lite";
var WidgetLabelTextUI = observer27(function WidgetLabelTextUI_(p) {
  const csuite = useCSuite();
  return /* @__PURE__ */ jsx(
    "span",
    {
      tw: [
        "UI-WidgetLabel self-start minh-widget lh-widget ABDDE",
        // 1. indicate we can click on the label
        p.widget.isCollapsed || p.widget.isCollapsible ? "cursor-pointer COLLAPSE-PASSTHROUGH" : null,
        // 3. label wrappign strategy
        // 3.1  alt. 1: disable all wrapping
        // 'whitespace-nowrap',
        // 3.2. alt. 2:
        //  - limit to 2 lines, with ellipsis,
        //  - dense line height to force widget to remain within it's
        //  - original allocated height
        // 'line-clamp-2',
        // 3.3. alt. 3:
        //
        // '[lineHeight:1.3rem] overflow-auto',
        csuite.truncateLabels && "truncate",
        p.className
      ],
      children: p.children
    }
  );
});

// src/csuite/dropdown/MenuDividerUI.tsx
function MenuDividerUI_() {
  return /* @__PURE__ */ jsx("div", { tw: "divider my-0" });
}

// src/csuite/trigger/Trigger.ts
var Trigger = /* @__PURE__ */ ((Trigger2) => {
  Trigger2["UNMATCHED"] = "UNMATCHED";
  Trigger2["Success"] = "SUCCESS";
  Trigger2["FAILED"] = "DONE";
  return Trigger2;
})(Trigger || {});

// src/csuite/activity/Routine.ts
import { nanoid } from "nanoid";
var Routine = class {
  constructor(manager, activity) {
    this.manager = manager;
    this.activity = activity;
    this.uid = nanoid();
  }
  stop() {
    this.manager.stop(this);
  }
};

// src/csuite/activity/ActivityManager.ts
import { makeAutoObservable as makeAutoObservable3 } from "mobx";
var ActivityManager = class {
  constructor() {
    // ACCESSING ---------------------------------------------------------------
    /** currently active activities */
    this.routines = [];
    this.current = () => this.routines[this.routines.length - 1];
    // STARTING ---------------------------------------------------------------
    this.startFromClass = (ActivityKls, ctx) => {
      const activity = new ActivityKls(ctx);
      const routine = new Routine(this, activity);
      this.routines.push(routine);
      activity.onStart?.();
      return "SUCCESS" /* Success */;
    };
    /**
     * start an activity, return the created routine
     */
    this.start = (activity) => {
      const routine = new Routine(this, activity);
      this.routines.push(routine);
      activity.onStart?.();
      return routine;
    };
    /**
     * similar to `start`.
     * start an activity, return Trigger.Success */
    this.start_ = (activity) => {
      const routine = new Routine(this, activity);
      this.routines.push(routine);
      activity.onStart?.();
      return "SUCCESS" /* Success */;
    };
    this.stopLast = () => {
      const routine = this.routines.pop();
      if (routine == null) return "UNMATCHED" /* UNMATCHED */;
      routine.activity.onStop?.();
      return "SUCCESS" /* Success */;
    };
    makeAutoObservable3(this);
  }
  // STOPPING ---------------------------------------------------------------
  stop(routine) {
    const ix = this.routines.indexOf(routine);
    if (ix === -1) return "UNMATCHED" /* UNMATCHED */;
    this.routines.splice(ix, 1);
    routine.activity.onStop?.();
    return "SUCCESS" /* Success */;
  }
};
var activityManager = new ActivityManager();

// src/csuite/introspect/_isBoundCommand.tsx
var BoundCommandSym = Symbol("BoundCommand");
var isBoundCommand = (x) => x != null && //
typeof x === "object" && "$SYM" in x && x.$SYM === BoundCommandSym;

// src/csuite/introspect/_isCommand.tsx
var CommandSym = Symbol("Command");
var isCommand = (x) => x != null && //
typeof x === "object" && "$SYM" in x && x.$SYM === CommandSym;

// src/csuite/environment/getOS.ts
var _os;
function getOS() {
  if (_os) return _os;
  _os = getOS_();
  return _os;
}
function getOS_() {
  try {
    const userAgent = window.navigator.userAgent;
    const platform2 = window.navigator.platform;
    if (["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(platform2) !== -1) return "Mac";
    else if (["iPhone", "iPad", "iPod"].indexOf(platform2) !== -1) return "iOS";
    else if (["Win32", "Win64", "Windows", "WinCE"].indexOf(platform2) !== -1) return "Windows";
    else if (/Android/.test(userAgent)) return "Android";
    else if (/Linux/.test(platform2)) return "Linux";
    return "unknown";
  } catch (e) {
    return "unknown";
  }
}

// src/csuite/accelerators/META_NAME.ts
var platform = getOS();
var MOD_KEY = platform === "Mac" ? "cmd" : "ctrl";
var META_NAME = platform === "Mac" ? "cmd" : "win";
var hasMod = (ev) => {
  if (platform === "Mac") return ev.metaKey;
  return ev.ctrlKey;
};

// src/csuite/utils/ManualPromise.ts
import { action, makeObservable as makeObservable2, observable as observable5, runInAction as runInAction3 } from "mobx";
var ManualPromise = class {
  // prettier-ignore
  constructor() {
    this.done = false;
    this.value = null;
    this.isRunning = false;
    this.setValue = (t) => {
      this.value = t;
    };
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (t) => {
        runInAction3(() => {
          this.done = true;
          this.isRunning = false;
        });
        if (isPromise(t)) {
          void t.then((final) => this.setValue(final));
        } else {
          this.setValue(t);
        }
        resolve(t);
      };
      this.reject = (t) => {
        runInAction3(() => {
          this.done = true;
          this.isRunning = false;
        });
        reject(t);
      };
    });
    this.then = this.promise.then.bind(this.promise);
    void makeObservable2(this, {
      done: observable5,
      setValue: action,
      value: observable5
    });
  }
};
var isPromise = (p) => {
  return p != null && typeof p.then === "function";
};

// src/csuite/commands/CommandManager.ts
import { computed as computed2, makeObservable as makeObservable3, observable as observable6 } from "mobx";
var CommandManager = class {
  constructor(conf = {}) {
    this.conf = conf;
    this.commands = /* @__PURE__ */ new Map();
    this.commandByShortcut = /* @__PURE__ */ new Map();
    this.contextByName = /* @__PURE__ */ new Map();
    this.registerCommand = (op) => {
      this.contextByName.set(op.ctx.name, op.ctx);
      this.commands.set(op.id, op);
      const combos = op.combos == null ? [] : Array.isArray(op.combos) ? op.combos : [op.combos];
      for (const k of combos) {
        const key = normalizeCushyShortcut(k);
        const list = this.commandByShortcut.get(key) || [];
        const next = list.filter((o) => o.id !== op.id);
        next.push(op);
        this.commandByShortcut.set(key, next);
      }
    };
    this.getCommandById = (id) => this.commands.get(id);
    this.inputHistory = [];
    this.log = (...content) => console.log(`[Shortcut-Watcher #${this.name}`, ...content);
    this.evInInput = (ev) => {
      const element = ev.target;
      const inInput = element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA" || Boolean(element.contentEditable) && element.contentEditable === "true";
      return inInput;
    };
    this.inputToken = (ev) => {
      const inputAccum = [];
      if (ev.ctrlKey) inputAccum.push("ctrl");
      if (ev.shiftKey) inputAccum.push("shift");
      if (ev.altKey) inputAccum.push("alt");
      if (ev.metaKey) inputAccum.push(META_NAME);
      const key = ev.key;
      if (key) {
        if (key === " ") inputAccum.push("space");
        else inputAccum.push(key.toLowerCase());
      }
      const input = inputAccum.sort(sortKeyNamesFn).join("+").toLowerCase();
      return input;
    };
    this.processKeyDownEvent = (ev) => {
      const input = this.inputToken(ev);
      if (this.conf.log) this.log(input);
      if (this.inputHistory.length > 3) this.inputHistory.shift();
      this.inputHistory.push(input);
      const inInput = this.evInInput(ev);
      const lastX = this.inputHistory.slice(-5);
      for (let x = 0; x < lastX.length; x++) {
        const shortcut = lastX.slice(x).join(" ");
        const matches = this.commandByShortcut.get(shortcut);
        for (const s of matches || []) {
          if (inInput && !s.validInInput) continue;
          if (this.conf.log || s.action == null) this.log(shortcut, `triggered (${s.label})`);
          const done = this.tryToRun(s, ev);
          if (done) return "SUCCESS" /* Success */;
        }
      }
      if (this.conf.log) this.log("nothing found");
      return "UNMATCHED" /* UNMATCHED */;
    };
    this.tryToRun = (s, ev) => {
      if (s.action == null) return false;
      const res = s.execute();
      if (isPromise(res)) {
        return true;
      }
      if (this.conf.log) {
        if (res === "SUCCESS" /* Success */) this.log("          -> executed");
      }
      if (res === "UNMATCHED" /* UNMATCHED */) return false;
      if (res === "DONE" /* FAILED */) return false;
      if (res === "SUCCESS" /* Success */ && s.continueAfterSuccess) return false;
      if (res === "SUCCESS" /* Success */) {
        ev.stopPropagation();
        ev.preventDefault();
        return true;
      }
      exhaust(res);
      throw new Error(`INVALID CASE`);
    };
    makeObservable3(this, {
      inputHistory: true,
      contextByName: observable6.shallow,
      commandByShortcut: observable6.shallow,
      knownContexts: computed2
    });
    this.name = this.conf.name || "no-name";
  }
  get knownContexts() {
    return Array.from(this.contextByName.values());
  }
};
var exhaust = (_) => _;
function parseShortcutToInputSequence(combo) {
  return combo.split(" ").map(normalizeInputToken);
}
var normalizeCushyShortcut = (combo) => {
  return combo.split(" ").map(normalizeInputToken).join(" ");
};
function normalizeInputToken(input) {
  if (input.includes(" ")) throw new Error(`invalid raw input token: "${input}"`);
  return input.split("+").map(normalizeKey).sort(sortKeyNamesFn).join("+").toLowerCase();
}
function normalizeKey(key) {
  if (key === "up") return "ArrowUp";
  if (key === "down") return "ArrowDown";
  if (key === "left") return "ArrowLeft";
  if (key === "right") return "ArrowRight";
  if (key === "mod") return MOD_KEY;
  if (key === "meta") return META_NAME;
  return key;
}
var keyPriorityWhenSorting = (key) => {
  if (key === "ctrl") return "__1ctrl";
  if (key === "win") return "__1win";
  if (key === "cmd") return "__1cmd";
  if (key === "shift") return "__2shift";
  if (key === "alt") return "__3alt";
  return key;
};
var sortKeyNamesFn = (a, b) => {
  const a1 = keyPriorityWhenSorting(a);
  const b1 = keyPriorityWhenSorting(b);
  return a1.localeCompare(b1);
};
var commandManager = new CommandManager({});

// src/csuite/commands/Command.tsx
var Command = class {
  constructor(conf) {
    this.conf = conf;
    this.$SYM = CommandSym;
    /**
     * method to programmatically call a command,
     * using when to both extract context and check if command can run
     * */
    this.execute = () => {
      console.info(`[CMD] \u2623\uFE0F TRYING TO RUN... ${this.label}`);
      const context = this.conf.ctx.check();
      if (context === "UNMATCHED" /* UNMATCHED */) {
        console.warn(`[CMD] \u{1F534} FAILED TO RUN`);
        return "UNMATCHED" /* UNMATCHED */;
      }
      const res = this.conf.action?.(context);
      return res;
    };
    this.NavBarBtnUI = (p) => {
      return /* @__PURE__ */ jsx(Button, { border: false, onClick: () => this.execute(), children: p.label ?? this.label });
    };
    Object.assign(this, conf);
  }
  get firstCombo() {
    if (this.combos == null) return void 0;
    if (Array.isArray(this.combos)) {
      if (this.combos.length === 0) return void 0;
      else return this.combos[0];
    } else return this.combos;
  }
  /** bind a command to a static context, bypassing its context provider */
  bind(ctx) {
    return new BoundCommand(this, ctx);
  }
};
var CommandContext = class _CommandContext {
  constructor(name, check) {
    this.name = name;
    this.check = check;
  }
  derive(fn) {
    return new _CommandContext(this.name, () => {
      const ctx = this.check();
      if (ctx === "UNMATCHED" /* UNMATCHED */) return "UNMATCHED" /* UNMATCHED */;
      return fn(ctx);
    });
  }
};
function command(t) {
  const cmd = new Command(t);
  commandManager.registerCommand(cmd);
  return cmd;
}
var BoundCommand = class {
  constructor(command2, ctx, ui) {
    this.command = command2;
    this.ctx = ctx;
    this.ui = ui;
    this.$SYM = BoundCommandSym;
    this.execute = () => {
      return this.command.conf.action(this.ctx);
    };
    this.NavBarBtnUI = (p) => {
      return /* @__PURE__ */ jsx("div", { onClick: () => this.execute(), children: p.label ?? this.label });
    };
  }
  get icon() {
    return this.command.icon;
  }
  get label() {
    return this.ui?.label ?? this.command.label;
  }
};

// src/csuite/introspect/_isBoundMenu.tsx
var BoundMenuSym = Symbol("BoundMenu");
var isBoundMenu = (x) => x != null && //
typeof x === "object" && "$SYM" in x && x.$SYM === BoundMenuSym;

// src/csuite/menu/MenuBuilder.ts
var MenuBuilder = class {
  field(field) {
    return field;
  }
  Component(component) {
    return component;
  }
  // Command<T extends Command>(command: T): T {
  //     return new Command()
  // }
};
var menuBuilder = new MenuBuilder();

// src/csuite/accelerators/ComboUI.tsx
import { observer as observer28 } from "mobx-react-lite";
import { Fragment as Fragment2 } from "react";
var ComboUI = observer28(function ComboUI_(p) {
  if (p.combo == null) return null;
  const iss = parseShortcutToInputSequence(p.combo);
  return /* @__PURE__ */ jsx("div", { tw: "whitespace-nowrap flex gap-2", children: iss.map((token) => {
    const keys = token.split("+");
    return /* @__PURE__ */ jsx("div", { tw: "flex items-center text-xs", children: keys.map((keyName, ix) => /* @__PURE__ */ jsxs(Fragment2, { children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          tw: [
            //
            // 'kbd',
            // p.primary && 'kbd-primary',
            // p.size === 'xs' ? 'kbd-xs' : 'kbd-sm',
          ],
          children: formatKeyName(keyName)
        },
        keyName
      ),
      ix !== keys.length - 1 && /* @__PURE__ */ jsx("div", { tw: "opacity-50", children: "+" })
    ] }, ix)) }, token);
  }) });
});
var formatKeyName = (keyName) => {
  if (keyName === "arrowup") return "\u2191";
  if (keyName === "arrowdown") return "\u2193";
  if (keyName === "arrowleft") return "\u2190";
  if (keyName === "arrowright") return "\u2192";
  if (keyName === "alt") return "\u2325";
  if (keyName === "shift") return "\u21E7";
  if (keyName === "cmd") return "\u2318";
  if (keyName === "ctrl") return "\u2303";
  if (keyName === "win") return "win";
  return keyName.toUpperCase();
};

// src/csuite/dropdown/MenuItem.tsx
import { observer as observer29 } from "mobx-react-lite";
var MenuItem = observer29(function DropdownItem_(p) {
  const { size: size2, label, disabled, icon, children, active, onClick, ...rest } = p;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      loading: p.loading,
      text: { contrast: disabled ? 0.5 : 1 },
      base: {
        contrast: active ? 0.1 : 0,
        chroma: active ? 0.1 : void 0
      },
      hover: 15,
      onClick: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        return p.onClick?.(ev);
      },
      style: { lineHeight: "1.6rem" },
      tw: [
        //
        "_MenuItem ",
        "px-2 py-0.5 flex items-center gap-2 whitespace-nowrap cursor-pointer",
        // Grid this so we have a consistent icon width and every label lines up
        "grid grid-cols-[18px_1fr]"
      ],
      ...rest,
      children: [
        icon ? (
          //
          /* @__PURE__ */ jsx(IkonOf, { name: icon, className: p.iconClassName ?? void 0 })
        ) : /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsxs("div", { tw: "flex items-center", children: [
          label,
          children,
          p.beforeShortcut,
          p.localShortcut ? /* @__PURE__ */ jsx("div", { tw: "ml-auto pl-2 text-xs italic", children: p.localShortcut && /* @__PURE__ */ jsx(ComboUI, { combo: p.localShortcut }) }) : null,
          p.globalShortcut ? /* @__PURE__ */ jsx("div", { tw: "ml-auto pl-2 text-xs italic", children: p.globalShortcut && /* @__PURE__ */ jsx(ComboUI, { combo: p.globalShortcut }) }) : null,
          p.afterShortcut
        ] })
      ]
    }
  );
});
var MenuDivider = observer29(function Divider_(p) {
  return /* @__PURE__ */ jsx("div", { className: "divider px-2 !h-input my-2 text-sm", children: p.children ?? /* @__PURE__ */ jsx(Fragment, {}) });
});

// src/csuite/model/$FieldSym.ts
var $FieldSym = Symbol("Widget");
var isWidget = (x) => {
  return x != null && //
  typeof x === "object" && "$FieldSym" in x && x.$FieldSym === $FieldSym;
};

// src/csuite/menu/SimpleMenuAction.ts
var SimpleMenuAction = class {
  constructor(opts) {
    this.opts = opts;
  }
};

// src/csuite/menu/SimpleMenuModal.ts
var SimpleMenuModal = class {
  constructor(p) {
    this.p = p;
  }
};

// src/csuite/menu/MenuUI.tsx
import { observer as observer30 } from "mobx-react-lite";
import * as React from "react";
import { createElement as createElement3 } from "react";
var MenuRootUI = observer30(function MenuRootUI_(p) {
  return /* @__PURE__ */ jsx(RevealUI, { className: "dropdown", placement: "bottomStart", content: () => /* @__PURE__ */ jsx(p.menu.UI, {}), children: /* @__PURE__ */ jsx("label", { tabIndex: 0, tw: [`flex-nowrap btn btn-ghost btn-sm py-0 px-1.5`], children: p.menu.menu.title }) });
});
var MenuUI = observer30(function MenuUI_(p) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "_MenuUI",
      tabIndex: -1,
      autoFocus: true,
      tw: "w-fit",
      onKeyDown: (ev) => {
        const key = ev.key;
        for (const entry of p.menu.entriesWithKb) {
          if (entry.char === key) {
            if (entry.entry instanceof SimpleMenuAction) entry.entry.opts.onPick();
            else if (isBoundCommand(entry.entry)) void entry.entry.execute();
            else if (isCommand(entry.entry)) void entry.entry.execute();
            p.menu.onStop();
            ev.stopPropagation();
            ev.preventDefault();
            return;
          }
        }
      },
      children: p.menu.entriesWithKb.map(({ entry, char, charIx }, ix) => {
        if (entry instanceof SimpleMenuAction) {
          return /* @__PURE__ */ jsx(
            MenuItem,
            {
              tw: "_SimpleMenuAction min-w-60",
              localShortcut: char,
              label: entry.opts.label,
              icon: entry.opts.icon,
              onClick: () => {
                entry.opts.onPick();
                p.menu.onStop();
              }
            },
            ix
          );
        }
        if (entry instanceof SimpleMenuModal) {
          return /* @__PURE__ */ jsx(
            MenuItem,
            {
              tw: "_SimpleMenuModal min-w-60",
              icon: entry.p.icon,
              localShortcut: char,
              label: entry.p.label,
              onClick: (event) => {
                activityManager.start({
                  event,
                  placement: "auto",
                  shell: "popup-lg",
                  UI: (p2) => /* @__PURE__ */ jsx(
                    entry.p.UI,
                    {
                      close: () => p2.stop(),
                      submit: entry.p.submit,
                      submitLabel: entry.p.submitLabel
                    }
                  )
                });
              }
            },
            ix
          );
        }
        if (isBoundCommand(entry) || isCommand(entry)) {
          const label = entry.label;
          return /* @__PURE__ */ jsx(
            MenuItem,
            {
              tw: "min-w-60",
              globalShortcut: isCommand(entry) ? entry.firstCombo : char,
              icon: entry.icon,
              onClick: () => {
                void entry.execute();
                p.menu.onStop();
              },
              label: /* @__PURE__ */ jsx(Fragment, { children: charIx != null ? /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { children: label.slice(0, charIx) }),
                /* @__PURE__ */ jsx("span", { tw: "underline text-red", children: label[charIx] }),
                /* @__PURE__ */ jsx("span", { children: label.slice(charIx + 1) })
              ] }) : label })
            },
            ix
          );
        } else if (isBoundMenu(entry)) {
          const label = entry.title;
          return /* @__PURE__ */ jsx(
            RevealUI,
            {
              trigger: "hover",
              tw: "min-w-60 !block",
              placement: "rightStart",
              content: () => /* @__PURE__ */ jsx(MenuUI, { menu: entry.init(p.menu.allocatedKeys) }),
              children: /* @__PURE__ */ jsx(
                MenuItem,
                {
                  localShortcut: char,
                  icon: entry.icon,
                  afterShortcut: /* @__PURE__ */ jsx(IkonOf, { name: "mdiMenuRight" }),
                  label: /* @__PURE__ */ jsx(Fragment, { children: charIx != null ? /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { tw: "font-bold", children: label.slice(0, charIx) }),
                    /* @__PURE__ */ jsx("span", { tw: "underline text-red", children: label[charIx] }),
                    /* @__PURE__ */ jsx("span", { children: label.slice(charIx + 1) })
                  ] }) : label })
                },
                ix
              )
            }
          );
        } else if (isWidget(entry)) {
          return entry.renderWithLabel();
        } else {
          return /* @__PURE__ */ jsx(React.Fragment, { children: createElement3(entry) }, ix);
        }
      })
    }
  );
});

// src/csuite/menu/Menu.ts
import { nanoid as nanoid2 } from "nanoid";
import { createElement as createElement4, useMemo as useMemo5 } from "react";
var MenuManager = class {
  constructor() {
    this.operators = [];
    this.registerMenu = (menu) => this.operators.push(menu);
    this.getMenuById = (id) => this.operators.find((op) => op.def.id === id);
  }
};
var menuManager = new MenuManager();
var Menu = class {
  constructor(def) {
    this.def = def;
    this.UI = (p) => createElement4(MenuUI, { menu: useMemo5(() => new MenuInstance(this, p.props), []) });
    this.DropDownUI = (p) => createElement4(MenuRootUI, { menu: useMemo5(() => new MenuInstance(this, p.props), []) });
    // prettier-ignore
    /** bind a menu to give props */
    this.bind = (props, ui) => new BoundMenu(this, props, ui);
    this.id = def.id ?? nanoid2();
    menuManager.registerMenu(this);
  }
  get title() {
    return this.def.title;
  }
  /** push the menu to current activity */
  open(props) {
    const instance = new MenuInstance(this, props);
    activityManager.start(instance);
    return "SUCCESS" /* Success */;
  }
};
var MenuWithoutProps = class {
  constructor(def) {
    this.def = def;
    // 🔴
    this.UI = () => createElement4(MenuRootUI, { menu: useMemo5(() => new MenuInstance(this, {}), []) });
    this.DropDownUI = () => createElement4(MenuRootUI, { menu: useMemo5(() => new MenuInstance(this, {}), []) });
    /** bind a menu to give props */
    this.bind = (ui) => new BoundMenu(this, {}, ui);
    this.id = def.id ?? nanoid2();
    menuManager.registerMenu(this);
  }
  get title() {
    return this.def.title;
  }
  /** push the menu to current activity */
  open() {
    const instance = new MenuInstance(this, {});
    activityManager.start(instance);
    return "SUCCESS" /* Success */;
  }
};
var MenuInstance = class {
  constructor(menu, props, keysTaken = /* @__PURE__ */ new Set()) {
    this.menu = menu;
    this.props = props;
    this.keysTaken = keysTaken;
    this.UI = () => createElement4(MenuUI, { menu: this });
    this.uid = nanoid2();
    this.onEvent = (event) => {
      event.stopPropagation();
      event.preventDefault();
      return null;
    };
    this.findSuitableKeys = (label, allocatedKeys) => {
      let ix = 0;
      for (const char of [...label]) {
        const key = char.toLowerCase();
        if (!allocatedKeys.has(key)) {
          allocatedKeys.add(key);
          return { char: key, pos: ix };
        }
        ix++;
      }
    };
  }
  onStart() {
  }
  onStop() {
  }
  get entries() {
    return this.menu.def.entries(this.props, menuBuilder);
  }
  get entriesWithKb() {
    return this.acceleratedEntries.out;
  }
  get allocatedKeys() {
    return this.acceleratedEntries.allocatedKeys;
  }
  get acceleratedEntries() {
    const allocatedKeys = /* @__PURE__ */ new Set([...this.keysTaken]);
    const out = [];
    for (const entry of this.entries) {
      if (entry instanceof SimpleMenuAction) {
        const res = this.findSuitableKeys(entry.opts.label, allocatedKeys);
        out.push({ entry, char: res?.char, charIx: res?.pos });
      } else if (entry instanceof Command) {
        const res = this.findSuitableKeys(entry.label, allocatedKeys);
        out.push({ entry, char: res?.char, charIx: res?.pos });
      } else if (entry instanceof BoundMenu) {
        const res = this.findSuitableKeys(entry.menu.title, allocatedKeys);
        out.push({ entry, char: res?.char, charIx: res?.pos });
      } else {
        out.push({ entry });
      }
    }
    return { out, allocatedKeys };
  }
};
var menuWithProps = (def) => new Menu(def);
var menuWithoutProps = (def) => new MenuWithoutProps(def);
var BoundMenu = class {
  constructor(menu, props, ui) {
    this.menu = menu;
    this.props = props;
    this.ui = ui;
    this.$SYM = BoundMenuSym;
    this.open = () => this.menu.open(this.props);
    this.init = (keysTaken) => new MenuInstance(this.menu, this.props, keysTaken);
  }
  get title() {
    return this.ui?.title ?? this.menu.title;
  }
  get icon() {
    return this.menu.def.icon;
  }
};

// src/csuite/types/SQLITE_boolean.ts
var SQLITE_true = 1;
var SQLITE_false = 0;

// src/csuite/tree/utils.ts
import { customAlphabet as customAlphabet2 } from "nanoid";
var genUID = customAlphabet2("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 5);
var FAIL = (msg, data) => {
  throw new Error(`\u{1F534} ${msg}`, data);
};
var VIOLATION = (msg, data) => {
  throw new Error(`\u{1F534} INVARIANT VIOLATION: ${msg}`, data);
};

// src/csuite/tree/TreeNode.ts
import { makeAutoObservable as makeAutoObservable4 } from "mobx";
var getId = (node) => {
  if (typeof node === "string") return node;
  return node.id;
};
var TreeNode = class _TreeNode {
  constructor(tree, elem, parent) {
    this.tree = tree;
    this.elem = elem;
    this.parent = parent;
    this.onPrimaryAction = () => this.data.onPrimaryAction?.(this);
    this.onFocusItem = () => this.data.onFocusItem?.(this);
    this._children_ = {};
    /** remove node from module */
    this.delete = () => {
      return this.data.delete?.(this) ?? false;
    };
    const key = elem.key;
    this.id = (parent?.id ?? "") + "/" + key;
    this.entryL = tree.config.getNodeState(this);
    const ctor = elem.ctor;
    const isRealClass = Boolean(Object.getOwnPropertyDescriptors(ctor).prototype);
    this.data = isRealClass ? (
      // @ts-ignore
      new ctor(elem.props)
    ) : (
      // @ts-ignore
      ctor(elem.props)
    );
    makeAutoObservable4(this, { _children_: false });
  }
  scrollIntoView(p) {
    document.getElementById(this.id)?.scrollIntoView({
      behavior: p?.behavior ?? "instant",
      block: p?.block ?? "nearest"
    });
  }
  get isOpen() {
    return this.entryL.data.isExpanded ?? false;
  }
  open() {
    console.log(`[\u{1F920}] opening`);
    this.data.onExpand?.(this);
    this.entryL.update({ isExpanded: SQLITE_true });
  }
  close() {
    console.log(`[\u{1F920}] closing`);
    this.entryL.update({ isExpanded: SQLITE_false });
  }
  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }
  get valid() {
    return true;
  }
  // intermediary representation
  get childElements() {
    return this.data.children?.() ?? [];
  }
  get childKeys() {
    return this.childElements.map((i) => i.key);
  }
  get children() {
    const childElements = this.childElements;
    const out = [];
    for (const childElem of childElements) {
      const childKey = childElem.key;
      const child = this._children_[childKey];
      if (child) {
        out.push(child);
      } else {
        const node = new _TreeNode(this.tree, childElem, this);
        this._children_[childKey] = node;
        out.push(node);
      }
    }
    return out;
  }
  get depth() {
    if (this.parent == null) return 0;
    return 1 + this.parent.depth;
  }
  get siblingsIncludingSelf() {
    if (this.parent == null) return this.tree.topLevelNodes;
    return this.parent.children;
  }
  get siblingsExcludingSelf() {
    return this.siblingsIncludingSelf.filter((i) => i !== this);
  }
  get nextSibling() {
    let siblings = this.siblingsIncludingSelf;
    if (siblings.length === 0) FAIL("IMPOSSIBLE 1");
    if (siblings[siblings.length - 1] === this) return;
    for (let i = 0; i < siblings.length - 1; i++) {
      if (siblings[i] === this) return siblings[i + 1];
    }
    return;
  }
  get prevSibling() {
    let siblings = this.siblingsIncludingSelf;
    let SELF = this;
    if (siblings.length === 0) FAIL("IMPOSSIBLE 2");
    if (siblings[0] === SELF) return;
    for (let i = siblings.length - 1; i > 0; i--) {
      if (siblings[i] === SELF) return siblings[i - 1];
    }
    return;
  }
  /** return the first child of a given node
   * or undefined if node has no child */
  get firstChild() {
    const children = this.children;
    if (children.length === 0) return;
    return children[0];
  }
  get_descendant_and_self(mode) {
    const stack = [this];
    let ix = 0;
    let at;
    while (at = stack[ix++]) {
      if (mode === "bfs") stack.push(...at.children);
      else stack.splice(ix, 0, ...at.children);
    }
    return stack;
  }
  get lastChild() {
    if (this.children.length === 0) return;
    return this.children[this.children.length - 1];
  }
  /** return the last descendant
   * [a[b,c],x[y,z]] => z */
  get lastDescendant() {
    let at = this;
    let out;
    while (at = at.lastChild) out = at;
    return out;
  }
  get isRoot() {
    return this.parent == null;
  }
  get root() {
    let at = this;
    while (at.parent) {
      at = at.parent;
    }
    return at;
  }
  get rootOrSelf() {
    return this.root ?? this;
  }
  get path_v1() {
    return this.parent ? [this.elem.key, this.parent.path_v1] : [this.elem.key];
  }
  get path_v2() {
    return this.parent ? [...this.parent.path_v2, this.elem.key] : [this.elem.key];
  }
  get lastOpenedDescendant() {
    let at = this;
    let out;
    if (!at.isOpen) return;
    while (at = at.lastChild) {
      out = at;
      if (!at.isOpen) break;
    }
    return out;
  }
  get_descendant(mode) {
    return this.get_descendant_and_self(mode).slice(1);
  }
  get descendantBFS() {
    return this.get_descendant("bfs");
  }
  get descendantDFS() {
    return this.get_descendant("dfs");
  }
  get nodeAboveInView() {
    return this.prevSibling?.lastOpenedDescendant ?? this.prevSibling ?? this.parent;
  }
  get nodeBelowInView() {
    if (this.isOpen && this.firstChild) return this.firstChild;
    if (this.nextSibling) return this.nextSibling;
    let at = this;
    while (at = at.parent) if (at.nextSibling) return at.nextSibling;
  }
};

// src/csuite/tree/Tree.ts
import { makeAutoObservable as makeAutoObservable5, observable as observable7 } from "mobx";
import { nanoid as nanoid3 } from "nanoid";
var defaultTreeStorage = (node) => {
  const data = observable7({
    isExpanded: SQLITE_true,
    isSelected: SQLITE_true
  });
  return observable7({
    data,
    update: (next) => Object.assign(data, next)
  });
};
var Tree = class {
  constructor(rootNodes, config = { getNodeState: defaultTreeStorage }) {
    this.config = config;
    this.topLevelNodes = [];
    this.KeyboardNavigableDomNodeID = nanoid3();
    for (let uid of rootNodes) {
      const node = new TreeNode(this, uid, void 0);
      this.topLevelNodes.push(node);
    }
    makeAutoObservable5(this, {
      // indexNode: action
    });
  }
};

// src/csuite/tree/TreeCtx.ts
import { createContext as createContext4, useContext as useContext4 } from "react";
var TreeViewCtx = createContext4(null);
var useTreeView = () => {
  const val = useContext4(TreeViewCtx);
  if (val == null) throw new Error("missing editor in current widget react contexts");
  return val;
};

// src/csuite/tree/RenderTreeIcon1.tsx
import { observer as observer31 } from "mobx-react-lite";
var TreeIcon1UI = observer31(function TreeIcon1UI_(p) {
  const action2 = p;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: p.className,
      tw: "btn btn-xs btn-square btn-ghost",
      onClick: (e) => {
        e.stopPropagation();
        action2.onClick?.(p.node);
      },
      children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: action2.icon })
    },
    action2.name
  );
});

// src/csuite/tree/RenderItemTitleUI.tsx
import { observer as observer32 } from "mobx-react-lite";
var RenderItemTitleUI = observer32(function RenderItemTitleUI_(p) {
  const node = p.node;
  const item = node.data;
  let icon = node.isOpen ? item.iconExpanded ?? item.icon : item.icon ?? item.iconExpanded;
  if (typeof icon === "string") {
    icon = /* @__PURE__ */ jsx("img", { src: icon, style: { width: "1.3rem", height: "1.3rem" } });
  }
  return /* @__PURE__ */ jsxs("div", { tw: "flex flex-grow items-center gap-0.5 whitespace-nowrap overflow-ellipsis", children: [
    icon,
    /* @__PURE__ */ jsxs(
      "div",
      {
        tw: [
          //
          "_TreeItemTitle",
          "cursor-pointer",
          "flex-grow relative overflow-hidden overflow-ellipsis"
        ],
        onClick: () => {
          item.onPrimaryAction?.(node);
        },
        children: [
          "\xA0",
          /* @__PURE__ */ jsx("div", { tw: "absolute inset-0", children: item.name })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { tw: "ml-auto opacity-40 hover:opacity-100", children: [
      item.extra?.(),
      item.actions?.map((action2, ix) => {
        return /* @__PURE__ */ jsx(TreeIcon1UI, { node, ...action2 }, ix);
      })
    ] })
  ] });
});

// src/csuite/tree/TreeEntryUI.tsx
import { observer as observer33 } from "mobx-react-lite";
import { Fragment as Fragment4 } from "react";
var TreeEntryUI = observer33(function TreeEntryUI_(p) {
  const n = p.node;
  const children = n.childKeys;
  const hasChildren = children.length > 0;
  const tv = useTreeView();
  const selected = tv.at === n;
  return /* @__PURE__ */ jsxs(Fragment4, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        id: n.id,
        style: { paddingLeft: `${p.depth ?? 0}rem` },
        onClick: () => tv.setFocusAt(n),
        tw: [
          // 'py-1',
          {
            _line: true,
            _hasChildren: hasChildren,
            _selected: selected,
            _opened: n.isOpen,
            _closed: !n.isOpen
          }
        ],
        children: [
          hasChildren ? /* @__PURE__ */ jsx(
            "label",
            {
              onClick: (ev) => {
                console.log(`[\u{1F920}] ok`, n.isOpen);
                n.toggle();
                ev.stopPropagation();
              },
              className: "swap swap-rotate opacity-50",
              children: n.isOpen ? /* @__PURE__ */ jsx(Ikon.mdiChevronDown, {}) : /* @__PURE__ */ jsx(Ikon.mdiChevronRight, {})
            }
          ) : /* @__PURE__ */ jsx("div", { tw: "[width:1.3rem]", children: "\xA0" }),
          tv.conf.selectable && /* @__PURE__ */ jsx("input", { checked: true, type: "checkbox", tw: "checkbox" }),
          /* @__PURE__ */ jsx(RenderItemTitleUI, { node: n })
        ]
      }
    ),
    hasChildren && n.isOpen ? (
      //
      /* @__PURE__ */ jsx(
        "div",
        {
          tw: "cushy-borderLeft",
          style: {
            // marginLeft: '.5rem',
            marginLeft: ".5rem",
            paddingLeft: ".5rem"
          },
          children: n.children.map((c) => /* @__PURE__ */ jsx(TreeEntryUI, { node: c }, c.id))
        }
      )
    ) : null
  ] }, n.id);
});

// src/csuite/tree/TreeKeys.ts
var TreeKeys = {
  // tree_focusFilter:                 '/',
  tree_moveUp: "ArrowUp",
  tree_moveDown: "ArrowDown",
  tree_moveRight: "ArrowRight",
  tree_moveLeft: "ArrowLeft",
  tree_deleteNodeAndFocusNodeAbove: "Backspace",
  tree_deleteNodeAndFocusNodeBelow: "Delete",
  tree_onPrimaryAction: "Enter",
  tree_movePageUp: "PageUp",
  tree_movePageDown: "PageDown",
  collapseAllTree: "mod+shift+k"
};

// src/csuite/tree/TreeUI.tsx
import { observer as observer34 } from "mobx-react-lite";
var TreeUI = observer34(function TreeEditorUI_(p) {
  const tv = p.treeView;
  return /* @__PURE__ */ jsx(TreeViewCtx.Provider, { value: tv, children: /* @__PURE__ */ jsxs("div", { tw: "_TreeUI flex flex-col", className: p.className, children: [
    /* @__PURE__ */ jsxs("div", { tw: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-1 gap-1 items-center", children: p.title && /* @__PURE__ */ jsx("div", { tw: "text-sm", children: p.title }) }),
      p.shortcut && /* @__PURE__ */ jsx(ComboUI, { primary: true, size: "xs", combo: p.shortcut }),
      /* @__PURE__ */ jsx(
        RevealUI,
        {
          trigger: "hover",
          content: () => /* @__PURE__ */ jsxs("div", { tw: "flex gap-1 whitespace-nowrap p-2", children: [
            "collapse tree: ",
            /* @__PURE__ */ jsx(ComboUI, { combo: TreeKeys.collapseAllTree })
          ] }),
          children: tv.tree.config.updateAll && /* @__PURE__ */ jsx(
            "div",
            {
              tw: "btn btn-square btn-ghost btn-xs shrink-0",
              onClick: () => tv.tree.config.updateAll?.({ isExpanded: null }),
              children: /* @__PURE__ */ jsx(Ikon.mdiUnfoldLessHorizontal, {})
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: "flex-1 overflow-auto",
        id: tv.tree.KeyboardNavigableDomNodeID,
        onKeyDown: tv.onKeyDown,
        tabIndex: -1,
        autoFocus: p.autofocus,
        children: tv.nodes.map((n) => /* @__PURE__ */ jsx(TreeEntryUI, { node: n }, n.id))
      }
    )
  ] }) });
});

// src/csuite/tree/TreeShortcuts.ts
var onKeyDownHandlers = (ev, view) => {
  if (ev.key === TreeKeys.tree_deleteNodeAndFocusNodeAbove) return view.deleteNodeAndFocusNodeAbove;
  if (ev.key === TreeKeys.tree_deleteNodeAndFocusNodeBelow) return view.deleteNodeAndFocusNodeBelow;
  if (ev.key === TreeKeys.tree_onPrimaryAction) return view.at?.onPrimaryAction;
  if (ev.key === TreeKeys.tree_movePageUp) return view.movePageUp;
  if (ev.key === TreeKeys.tree_movePageDown) return view.movePageDown;
  if (ev.key === TreeKeys.tree_moveUp) return view.moveUp;
  if (ev.key === TreeKeys.tree_moveDown) return view.moveDown;
  if (ev.key === TreeKeys.tree_moveRight) return view.moveRight;
  if (ev.key === TreeKeys.tree_moveLeft) return view.moveLeft;
};

// src/csuite/tree/TreeView.ts
import { makeAutoObservable as makeAutoObservable6 } from "mobx";
import { nanoid as nanoid4 } from "nanoid";
import { createRef } from "react";
var TreeView = class {
  constructor(tree, conf = {}) {
    this.tree = tree;
    this.conf = conf;
    /** treeview id; only for debugging purpose */
    this.id = nanoid4(4);
    this.filterRef = createRef();
    this.updateFilter = (xPath) => this.filter = xPath;
    this.focusFilter = () => {
      const curr = this.filterRef.current;
      if (!(curr instanceof HTMLElement)) return;
      curr.focus();
    };
    this.revealAndFocusAtPath = (path_v2) => {
      const [k, ...rest] = path_v2;
      let at = this.tree.topLevelNodes.find((i) => i.elem.key === k);
      if (at == null) {
        console.log(`[\u274C] no top level node matching first key "${k}"`);
        return;
      }
      at.open();
      for (const x of rest) {
        const children = at.children;
        at = children.find((i) => i.elem.key === x);
        if (at == null) {
          console.log(`[\u274C] no child node matching key "${x}" (available: ${children.map((i) => i.elem.key).join(", ")})`);
          return;
        }
        at.open();
      }
      this.setFocusAt(at, { block: "nearest" });
      return at;
    };
    this.setFocusAt = (at, p) => {
      this.at = at;
      this.at?.scrollIntoView(p);
      this.conf.onFocusChange?.(at);
    };
    this.onKeyDown = (ev) => {
      const handler = this.onKeyDownHandlers(ev);
      if (handler) {
        ev.stopPropagation();
        ev.preventDefault();
        return handler();
      }
      console.log("key-pressed:", ev.key);
    };
    this.onKeyDownHandlers = (ev) => onKeyDownHandlers(ev, this);
    this.deleteNodeAndFocusNodeAbove = () => {
      if (this.at == null) return this.resetCaretPos();
      const parent = this.at.nodeAboveInView;
      this.at.delete();
      this.setFocusAt(parent);
    };
    this.deleteNodeAndFocusNodeBelow = () => {
      if (this.at == null) return this.resetCaretPos();
      let parent = this.at.nodeAboveInView;
      this.at.delete();
      this.setFocusAt(parent?.nodeBelowInView ?? parent);
    };
    this.resetCaretPos = () => {
      this.setFocusAt(this.tree.topLevelNodes[0]);
    };
    this.moveUp = () => {
      if (this.at == null) return this.resetCaretPos();
      const nextAt = this.at.nodeAboveInView;
      if (nextAt) this.setFocusAt(nextAt);
    };
    this.movePageUp = () => {
      return this.resetCaretPos();
    };
    this.movePageDown = () => {
      if (this.at == null) return this.resetCaretPos();
      let ptr = this.at;
      let max = 100;
      let final = this.at;
      while ((ptr = ptr.nodeBelowInView) && max-- > 0) {
        final = ptr;
      }
      this.setFocusAt(final);
    };
    this.moveDown = () => {
      if (this.at == null) return this.resetCaretPos();
      const nextAt = this.at.nodeBelowInView;
      if (nextAt) this.setFocusAt(nextAt);
    };
    this.moveRight = () => {
      if (this.at == null) return this.resetCaretPos();
      const children = this.at.children;
      if (children.length > 0) {
        if (this.at.isOpen) return this.setFocusAt(children[0]);
        else return this.at.open();
      }
      return this.moveDown();
    };
    this.moveLeft = () => {
      if (this.at == null) return this.resetCaretPos();
      if (this.at.isOpen) return this.at.close();
      if (this.at.parent) return this.at = this.at.parent;
    };
    this.resetCaretPos();
    makeAutoObservable6(this, { filterRef: false, id: false });
  }
  get nodes() {
    return this.tree.topLevelNodes;
  }
  get cursorInfos() {
    const at = this.at;
    if (at == null) return null;
    return {
      nodeAboveInTreeview: at.nodeAboveInView?.id,
      nodeBelowInTreeview: at.nodeBelowInView?.id,
      lastDescendant: at.lastDescendant?.id,
      lastChild: at.lastChild?.id,
      descendant_bfs: at.descendantBFS.map((i) => i.id),
      descendant_dfs: at.descendantDFS.map((i) => i.id),
      depth: at.depth,
      parent: at.parent?.id,
      pathStr: at.id,
      siblingsIncludingSelf: at.siblingsIncludingSelf.map((i) => i.id),
      siblingsExcludingSelf: at.siblingsExcludingSelf.map((i) => i.id),
      nextSibling: at.nextSibling?.id,
      prevSibling: at.prevSibling?.id,
      firstChild: at.firstChild?.id
    };
  }
};

// src/csuite/utils/toasts.tsx
import { toast } from "react-toastify";
var position = "bottom-right";
var toastSuccess = (msg) => {
  toast(msg, { type: "success", position });
  return "UNMATCHED" /* UNMATCHED */;
};
var toastInfo = (msg) => {
  toast(msg, { type: "info", position });
  return "UNMATCHED" /* UNMATCHED */;
};
var toastError = (msg) => {
  toast(msg, { type: "error", position });
  return "UNMATCHED" /* UNMATCHED */;
};
var toastImage = (imageSrc, message) => {
  const src = typeof imageSrc === "string" ? imageSrc : imageSrc.toString("base64");
  console.log(src);
  const CustomToast = () => /* @__PURE__ */ jsxs("div", { tw: "flex flex-col aspect-square", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        tw: "object-contain bg-black rounded",
        src: `${src}`,
        alt: "Toast Image",
        style: { width: "256px", height: "256px" }
      }
    ),
    /* @__PURE__ */ jsx("p", { children: message })
  ] });
  toast(/* @__PURE__ */ jsx(CustomToast, {}), {
    position: "bottom-right",
    pauseOnFocusLoss: false
  });
};

// src/csuite/utils/potatoClone.ts
var potatoSymbol = Symbol.for("\u{1F954}");
function potatoClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if ("potatoClone" in obj) return obj.potatoClone();
  if (potatoSymbol in obj) return obj[potatoSymbol]();
  if (obj.constructor === Object) {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = potatoClone(obj[key]);
    }
    return newObj;
  }
  if (obj instanceof Array) return obj.map(potatoClone);
  if (obj instanceof Set) return new Set([...obj.values()].map(potatoClone));
  if (obj instanceof Map) return new Map([...obj.entries()].map(([k, v]) => [k, potatoClone(v)]));
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Promise) return obj;
  if (obj instanceof Error) return obj;
  if (obj instanceof Function) return obj;
  if (obj instanceof WeakMap) return obj;
  if (obj instanceof WeakSet) return obj;
  if (obj instanceof ArrayBuffer) return obj.slice(0);
  if (obj instanceof DataView) return new DataView(obj.buffer.slice(0));
  if (obj instanceof Float32Array) return new Float32Array(obj);
  if (obj instanceof Float64Array) return new Float64Array(obj);
  if (obj instanceof Int8Array) return new Int8Array(obj);
  if (obj instanceof Int16Array) return new Int16Array(obj);
  if (obj instanceof Int32Array) return new Int32Array(obj);
  if (obj instanceof Uint8Array) return new Uint8Array(obj);
  if (obj instanceof Uint8ClampedArray) return new Uint8ClampedArray(obj);
  if (obj instanceof Uint16Array) return new Uint16Array(obj);
  if (obj instanceof Uint32Array) return new Uint32Array(obj);
  if (obj instanceof BigInt64Array) return new BigInt64Array(obj);
  if (obj instanceof BigUint64Array) return new BigUint64Array(obj);
  return obj;
}

// src/csuite/form/WidgetMenu.tsx
import { observer as observer35 } from "mobx-react-lite";
var WidgetMenuUI = observer35(function WidgetMenuUI_(p) {
  return /* @__PURE__ */ jsx(RevealUI, { className: p.className, content: () => /* @__PURE__ */ jsx(menu_fieldActions.UI, { props: p.widget }), children: /* @__PURE__ */ jsx(
    Button,
    {
      tooltip: "Open field menu",
      borderless: true,
      subtle: true,
      icon: "mdiDotsVertical",
      look: "ghost",
      square: true,
      size: "input"
    }
  ) });
});
var menu_fieldActions = menuWithProps({
  title: "widget actions",
  entries: (field) => {
    const out = [];
    out.push(
      new SimpleMenuAction({
        label: "Reset",
        icon: "mdiUndoVariant",
        disabled: () => !field.hasChanges,
        onPick: () => void field.reset()
      })
    );
    out.push(MenuDividerUI_);
    out.push(
      new SimpleMenuAction({
        label: "Save Snapshot",
        icon: "mdiArrowLeftBox",
        onPick: () => {
          const snap = field.saveSnapshot();
          console.log(JSON.stringify(potatoClone(snap), null, 4));
        }
      })
    );
    out.push(
      new SimpleMenuAction({
        label: "Restore Snapshot",
        icon: "mdiArrowRightBox",
        disabled: () => !field.hasSnapshot,
        onPick: () => void field.revertToSnapshot()
      })
    );
    out.push(MenuDividerUI_);
    out.push(
      new SimpleMenuAction({
        label: "Collapse All",
        icon: "mdiCollapseAll",
        onPick: () => field.collapseAllChildren()
      })
    );
    out.push(
      new SimpleMenuAction({
        label: "Expand All",
        icon: "mdiExpandAll",
        disabled: field.hasNoChild,
        onPick: () => field.expandAllChildren()
      })
    );
    out.push(MenuDividerUI_);
    out.push(
      new SimpleMenuModal({
        label: "Create Preset",
        icon: "mdiPlus",
        submit: () => {
          console.log(`[\u{1F920}] values`);
        },
        UI: (w) => /* @__PURE__ */ jsx(CreatePresetUI, { field })
      })
    );
    const presets = field.config.presets ?? [];
    if (presets.length > 0) {
      for (const entry of presets) {
        out.push(
          new SimpleMenuAction({
            label: entry.label,
            icon: entry.icon,
            onPick: () => entry.apply(field)
          })
        );
      }
    }
    out.push(MenuDividerUI_);
    out.push(
      new SimpleMenuAction({
        label: `copy path (${field.path})`,
        icon: "mdiContentCopy",
        onPick: () => {
          toastInfo(field.path);
          return navigator.clipboard.writeText(field.path);
        }
      })
    );
    return out;
  }
});
var CreatePresetUI = observer35(function CreatePresetUI_(p) {
  const tree = new Tree([p.field.asTreeElement("root")]);
  const treeView = new TreeView(tree, { selectable: true });
  return /* @__PURE__ */ jsx(
    TreeUI,
    {
      title: "Select values to include in preset",
      treeView
    }
  );
});

// src/csuite/form/WidgetUndoChangesButtonUI.tsx
import { observer as observer36 } from "mobx-react-lite";
var WidgetUndoChangesButtonUI = observer36(function WidgetUndoChangesButtonUI_(p) {
  const field = p.field;
  return /* @__PURE__ */ jsx(
    Button,
    {
      subtle: true,
      tooltip: "Reset to default values",
      borderless: true,
      className: p.className,
      onClick: () => field?.reset(),
      disabled: !(field?.hasChanges ?? false),
      icon: "mdiUndoVariant",
      look: "ghost",
      size: "input",
      square: true
    }
  );
});

// src/csuite/form/WidgetWithLabelUI.tsx
import { observer as observer37 } from "mobx-react-lite";
var WidgetWithLabelUI = observer37(function WidgetWithLabelUI_(p) {
  if (p.field.isHidden) return null;
  const originalField = p.field;
  const field = originalField.actualWidgetToDisplay;
  const HeaderUI = field.header();
  const BodyUI = field.body();
  const extraClass = originalField.isDisabled ? "pointer-events-none opacity-30 bg-[#00000005]" : void 0;
  const csuite = useCSuite();
  const labelText = p.label ?? field.config.label ?? makeLabelFromFieldName(p.fieldName);
  const justifyOld = p.justifyLabel ?? field.justifyLabel;
  const labellayout = justifyOld ? csuite.labellayout : "fixed-left";
  const justify = p.justifyLabel ?? (labellayout === "fluid" ? false : true);
  const WUI = /* @__PURE__ */ jsxs(
    Frame,
    {
      className: p.className,
      tw: "UI-WidgetWithLabel !border-l-0 !border-r-0 !border-b-0",
      base: field.background,
      border: field.border,
      ...p.field.config.box,
      children: [
        !p.noHeader && /* @__PURE__ */ jsxs(WidgetHeaderContainerUI, { field, children: [
          /* @__PURE__ */ jsxs(
            WidgetLabelContainerUI,
            {
              tooltip: field.config.tooltip,
              justify,
              children: [
                labellayout === "fixed-left" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(WidgetIndentUI, { depth: originalField.depth }),
                  p.slotDragKnob,
                  /* @__PURE__ */ jsx(WidgetLabelCaretUI, { field }),
                  /* @__PURE__ */ jsx(WidgetLabelIconUI, { tw: "mr-1", widget: field }),
                  /* @__PURE__ */ jsx(WidgetLabelTextUI, { widget: field, children: labelText }),
                  field.config.showID && /* @__PURE__ */ jsx(WidgetDebugIDUI, { field })
                ] }) : labellayout === "fixed-right" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(WidgetIndentUI, { depth: field.depth }),
                  p.slotDragKnob,
                  /* @__PURE__ */ jsx(WidgetLabelCaretUI, { tw: "mr-auto", field }),
                  !p.field.isCollapsed && !p.field.isCollapsible && /* @__PURE__ */ jsx("div", { tw: "mr-auto" }),
                  /* @__PURE__ */ jsx(WidgetLabelTextUI, { widget: field, children: labelText }),
                  field.config.showID && /* @__PURE__ */ jsx(WidgetDebugIDUI, { field }),
                  /* @__PURE__ */ jsx(WidgetLabelIconUI, { tw: "mx-1", widget: field })
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  p.slotDragKnob,
                  /* @__PURE__ */ jsx(WidgetLabelCaretUI, { field }),
                  /* @__PURE__ */ jsx(WidgetToggleUI, { tw: "mr-1", field: originalField }),
                  /* @__PURE__ */ jsx(WidgetLabelIconUI, { tw: "mr-1", widget: field }),
                  /* @__PURE__ */ jsx(WidgetLabelTextUI, { widget: field, children: labelText }),
                  field.config.showID && /* @__PURE__ */ jsx(WidgetDebugIDUI, { field })
                ] }),
                /* @__PURE__ */ jsx("div", { tw: "w-1" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { tw: "w-0.5" }),
          justify && /* @__PURE__ */ jsx(WidgetToggleUI, { field: originalField }),
          HeaderUI && /* @__PURE__ */ jsx(WidgetHeaderControlsContainerUI, { className: extraClass, children: /* @__PURE__ */ jsx(ErrorBoundaryUI, { children: HeaderUI }) }),
          p.slotDelete,
          (p.showWidgetExtra ?? csuite.showWidgetExtra) && field.schema.LabelExtraUI && /* @__PURE__ */ jsx(field.schema.LabelExtraUI, { field }),
          (p.showWidgetUndo ?? csuite.showWidgetUndo) && /* @__PURE__ */ jsx(WidgetUndoChangesButtonUI, { field: originalField }),
          (p.showWidgetMenu ?? csuite.showWidgetMenu) && /* @__PURE__ */ jsx(WidgetMenuUI, { widget: field })
        ] }),
        !p.noBody && BodyUI && !field.isCollapsed && /* @__PURE__ */ jsx(ErrorBoundaryUI, { children: /* @__PURE__ */ jsx("div", { className: extraClass, tw: [field.isCollapsible && "WIDGET-BLOCK"], children: BodyUI }) }),
        !p.noErrors && /* @__PURE__ */ jsx(WidgetErrorsUI, { field })
      ]
    }
  );
  if (field.animateResize && !p.noBody && BodyUI) return /* @__PURE__ */ jsx(AnimatedSizeUI, { children: WUI });
  return WUI;
});

// src/csuite/mobx/mobx-store-inheritance.ts
import { $mobx, isObservable, makeObservable as makeObservable4 } from "mobx";
var annotationsSymbol = Symbol();
var objectPrototype = Object.prototype;
var makeAutoObservableInheritance = (target, overrides, options) => {
  if (isObservable(target)) {
    throw new Error("Target must not be observable");
  }
  let annotations = target[annotationsSymbol];
  if (!annotations) {
    annotations = {};
    let current = target;
    while (current && current !== objectPrototype) {
      Reflect.ownKeys(current).forEach((key) => {
        if (key === $mobx || key === "constructor") return;
        annotations[key] = !overrides ? true : key in overrides ? overrides[key] : true;
      });
      current = Object.getPrototypeOf(current);
    }
    const proto = Object.getPrototypeOf(target);
    if (proto && proto !== objectPrototype) {
      Object.defineProperty(proto, annotationsSymbol, { value: annotations });
    }
  } else {
    const tmp = {};
    for (const key in target) {
      if (annotations[key]) {
        tmp[key] = annotations[key];
      }
    }
    annotations = tmp;
  }
  return makeObservable4(target, annotations, options);
};

// src/csuite/model/autofix/autofixSerial_20240703.ts
function autofixSerial_20240703(serial) {
  if (serial?.type === "FormSerial") {
    const prev = serial;
    const next = prev.root;
    return next;
  }
  return serial;
}

// src/csuite/model/autofix/autofixSerial_20240711.ts
function autofixSerial_20240711(serial) {
  if (
    // if serial is from pre-2024-07-11 format
    serial != null && typeof serial === "object" && "type" in serial && !("$" in serial)
  ) {
    serial["$"] = serial["type"];
    delete serial["type"];
  }
}

// src/csuite/model/BaseSchema.ts
import { reaction } from "mobx";
var BaseSchema = class {
  // ------------------------------------------------------------
  applyExts(field) {
    for (const ext of this.config.customFieldProperties ?? []) {
      const xxx = ext(field);
      Object.defineProperties(field, Object.getOwnPropertyDescriptors(xxx));
    }
  }
  extend(extensions) {
    const x = this.withConfig({
      customFieldProperties: [...this.config.customFieldProperties ?? [], extensions]
    });
    return x;
  }
  applySchemaExtensions() {
    for (const ext of this.config.customSchemaProperties ?? []) {
      const xxx = ext(this);
      Object.defineProperties(this, Object.getOwnPropertyDescriptors(xxx));
    }
  }
  /** clone the schema, and patch the cloned config to make it hidden */
  hidden() {
    return this.withConfig({ hidden: true });
  }
  // PubSub -----------------------------------------------------
  publish(chan, produce) {
    return this.withConfig({
      producers: [...this.config.producers ?? [], { chan, produce }]
    });
  }
  subscribe(chan, effect) {
    return this.addReaction(
      (self2) => self2.consume(chan),
      (arg, self2) => {
        if (arg == null) return;
        effect(arg, self2);
      }
    );
  }
  get reactions() {
    return this.config.reactions ?? [];
  }
  get producers() {
    return this.config.producers ?? [];
  }
  addReaction(expr, effect) {
    return this.withConfig({
      reactions: [...this.config.reactions ?? [], { expr, effect }]
    });
  }
  // ------------------------------------------------------------
  // Instanciation
  create(serial, repository) {
    return this.instanciate(repository ?? getGlobalRepository(), null, null, serial);
  }
  instanciate(repo, root, parent, serial) {
    serial = autofixSerial_20240703(serial);
    autofixSerial_20240711(serial);
    if (serial != null && serial.$ !== this.type) {
      if (this.type === "list") {
        const prev = serial;
        const next = { $: "list", items_: [prev] };
        serial = next;
      } else if (serial.$ === "list") {
        const prev = serial;
        const next = prev.items_[0] ?? null;
        serial = next;
      }
    }
    if (this.config.beforeInit) {
      const oldVersion = serial?._version ?? "default";
      const newVersion = this.config.version ?? "default";
      if (oldVersion !== newVersion) {
        serial = this.config.beforeInit(serial);
        serial._version = newVersion;
      }
    }
    if (serial != null && serial.$ !== this.type) {
      console.log(`[\u{1F536}] INVALID SERIAL (expected: ${this.type}, got: ${serial.$})`);
      console.log(`[\u{1F536}] INVALID SERIAL:`, serial);
      serial = null;
    }
    const field = new this.FieldClass_UNSAFE(repo, root, parent, this, serial);
    field.publishValue();
    for (const { expr, effect } of this.reactions) {
      reaction(
        () => expr(field),
        (arg) => effect(arg, field),
        { fireImmediately: true }
      );
    }
    return field;
  }
};

// src/csuite/utils/objectAssignTsEfficient.ts
var objectAssignTsEfficient_t_t = (target, source) => Object.assign(target, source);
var objectAssignTsEfficient_pt_t = (target, source) => Object.assign(target, source);
var objectAssignTsEfficient_t_pt = (target, source) => Object.assign(target, source);

// src/csuite/simple/SimpleSchema.ts
import { makeObservable as makeObservable5 } from "mobx";
var SimpleSchema = class _SimpleSchema extends BaseSchema {
  constructor(FieldClass, config) {
    super();
    this.config = config;
    this.FieldClass_UNSAFE = FieldClass;
    this.applySchemaExtensions();
    makeObservable5(this, {
      config: true,
      FieldClass_UNSAFE: false
    });
  }
  get type() {
    return this.FieldClass_UNSAFE.type;
  }
  /**
   * chain construction
   * @since 2024-06-30
   * TODO: WRITE MORE DOC
   */
  useIn(fn) {
    const FieldLinkClass = getFieldLinkClass();
    const linkConf = { share: this, children: fn };
    return new _SimpleSchema(FieldLinkClass, linkConf);
  }
  /** wrap field schema to list stuff */
  list(config = {}) {
    const FieldListClass = getFieldListClass();
    return new _SimpleSchema(FieldListClass, {
      ...config,
      element: this
    });
  }
  /** make field optional (A => Maybe<A>) */
  optional(startActive = false) {
    const FieldOptionalClass = getFieldOptionalClass();
    return new _SimpleSchema(FieldOptionalClass, {
      schema: this,
      startActive,
      label: this.config.label,
      startCollapsed: this.config.startCollapsed,
      collapsed: this.config.collapsed,
      border: this.config.border
    });
  }
  /** clone the schema, and patch the cloned config */
  withConfig(config) {
    const mergedConfig = objectAssignTsEfficient_t_pt(potatoClone(this.config), config);
    const cloned = new _SimpleSchema(this.FieldClass_UNSAFE, mergedConfig);
    return cloned;
  }
};

// src/csuite/model/FieldId.ts
import { nanoid as nanoid5 } from "nanoid";
function mkNewFieldId() {
  return nanoid5(8);
}

// src/csuite/model/TreeEntry_Field.tsx
import { makeAutoObservable as makeAutoObservable7 } from "mobx";
var TreeEntry_Field = class {
  constructor(widgetWithKey) {
    this.widgetWithKey = widgetWithKey;
    /** packed with a bunch of sane default for now; we'll see if this is ever */
    // get icon() {
    //     const w = this.widget
    //     if (w.type === 'choices') return <Ikon.mdiCheckboxMultipleMarked />
    //     if (w.type === 'choice') return <Ikon.mdiCheckboxMarked />
    //     if (isWidgetGroup(w)) {
    //         if (Object.keys(w.fields).length === 0) return <Ikon.mdiCircle />
    //         return <Ikon.mdiFolder />
    //     }
    //     if (w.type === 'optional') return <Ikon.mdiCheckboxBlankOutline />
    //     if (w.type === 'list') return <Ikon.mdiFormatListBulleted />
    //     if (w.type === 'enum') return <Ikon.mdiFormatListBulletedSquare />
    //     if (w.type === 'markdown') return <Ikon.mdiFormatListBulletedSquare />
    //     if (isWidgetString(w)) {
    //         const it = w.config.inputType
    //         if (it === 'color') return <Ikon.mdiPalette />
    //         if (it === 'date') return <Ikon.mdiCalendar />
    //         if (it === 'datetime-local') return <Ikon.mdiCalendarClock />
    //         if (it === 'email') return <Ikon.mdiEmailOutline />
    //         if (it === 'password') return <Ikon.mdiLockOutline />
    //         if (it === 'tel') return <Ikon.mdiPhoneOutline />
    //         if (it === 'text') return <Ikon.mdiTextBoxOutline />
    //         if (it === 'time') return <Ikon.mdiClockOutline />
    //         if (it === 'url') return <Ikon.mdiWeb />
    //         return <Ikon.mdiTextBoxOutline />
    //     }
    //     if (w.type === 'number') return <Ikon.mdiNumeric />
    //     if (w.type === 'boolean') return <Ikon.mdiCheckboxBlankOutline />
    //     //
    //     return <Ikon.mdiBatteryUnknown tw='text-red-400' />
    //     // return <span className='material-symbols-outlined'>Draft</span>
    // }
    this.onPrimaryAction = (n) => {
    };
    this.children = () => {
      return this.widget.subFieldsWithKeys.map((w) => w.field.asTreeElement(w.key));
    };
    // extra = () => (
    //     <>
    //         {this.app?.isLoadedInMemory ? <span className='material-symbols-outlined text-green-500'>memory</span> : null}
    //         <TreeApp_BtnFavUI entry={this} />
    //     </>
    // )
    this.actions = [
      // {
      //     name: 'add Draft',
      //     icon: 'add',
      //     mode: 'small',
      //     onClick: (node) => {
      //         if (this.app == null) return
      //         this.app.createDraft()
      //         node.open()
      //     },
      // },
    ];
    makeAutoObservable7(this);
  }
  get widget() {
    return this.widgetWithKey.widget;
  }
  /** config label, or parent key */
  get label() {
    if (this.widget.config.label) return this.widget.config.label;
    return this.widgetWithKey.key;
  }
  get name() {
    return `${this.label} = ${this.widget.id}`;
  }
  get isFolder() {
    return this.widget.subFields.length > 0;
  }
};

// src/csuite/model/Validation.ts
var normalizeProblem = (problem) => {
  if (problem === true) return [];
  if (problem === false) return [{ message: "Error" }];
  if (problem == null) return [];
  if (typeof problem === "string") return [{ message: problem }];
  if (Array.isArray(problem)) return problem.flatMap((p) => normalizeProblem(p));
  return [problem];
};
var Severity = /* @__PURE__ */ ((Severity2) => {
  Severity2["Error"] = "Error";
  Severity2["Warning"] = "Warning";
  Severity2["Info"] = "Info";
  Severity2["Success"] = "Success";
  return Severity2;
})(Severity || {});

// src/csuite/model/Field.tsx
import { observer as observer38 } from "mobx-react-lite";
import { createElement as createElement5 } from "react";
var ensureObserver = (fn) => {
  if (fn == null) return null;
  const isObserver = "$$typeof" in fn && fn.$$typeof === Symbol.for("react.memo");
  const FmtUI = isObserver ? fn : observer38(fn);
  return FmtUI;
};
var Field = class {
  constructor(repo, root, parent, schema, serial) {
    /**
     * list of all functions to run at dispose time
     * allow for instance to register mobx disposers from reactions
     * and other similar stuff that may need to be cleaned up to
     * avoid memory leak.
     */
    this.disposeFns = [];
    /**
     * will be set to true after the first initialization
     * TODO: also use that to wait for whole tree to be patched before applying effects
     * */
    this.ready = false;
    this.UIToggle = (p) => /* @__PURE__ */ jsx(WidgetToggleUI, { field: this, ...p });
    this.UIErrors = () => /* @__PURE__ */ jsx(WidgetErrorsUI, { field: this });
    this.UILabelCaret = () => /* @__PURE__ */ jsx(WidgetLabelCaretUI, { field: this });
    this.UILabelIcon = () => /* @__PURE__ */ jsx(WidgetLabelIconUI, { widget: this });
    this.UILabelContainer = (p) => /* @__PURE__ */ jsx(WidgetLabelContainerUI, { ...p });
    this.UIHeaderContainer = (p) => /* @__PURE__ */ jsx(WidgetHeaderContainerUI, { field: this, children: p.children });
    /**
     * 2024-05-24 rvion: do we want some abstract defaultValue() too ?
     * feels like it's going to be PITA to use for higher level objects 🤔
     * but also... why not...
     * 🔶 some widget like `WidgetPrompt` would not work with such logic
     * 🔶 some widget like `Optional` have no simple way to retrieve the default value
     */
    // abstract readonly defaultValue: this['schema']['$Value'] |
    this.$FieldSym = $FieldSym;
    /**
     * when this widget or one of its descendant publishes a value,
     * it will be stored here and possibly consumed by other descendants
     */
    this._advertisedValues = {};
    this._hasBeenInitialized = false;
    this.id = mkNewFieldId();
    this.repo = repo;
    this.root = root ?? this;
    this.parent = parent;
    this.schema = schema;
    this.serial = serial ?? { $: this.constructor.type };
  }
  // static get mobxOverrideds() {
  //     throw new Error('`mobxOverrideds` should be overridden in subclass')
  // }
  // static get type(): Field['$Type'] {
  //     throw new Error('This method should be overridden in subclass')
  // }
  get type() {
    return this.constructor.type;
  }
  /**
   * TODO later: make abstract to make sure we
   * have that on every single field + add field config option
   * to customize that. useful for tests.
   */
  randomize() {
  }
  /** field is already instanciated => probably used as a linked */
  instanciate(repo, root, parent, serial) {
    const FieldSharedClass = getFieldSharedClass();
    const schema = new SimpleSchema(FieldSharedClass, { field: this });
    return schema.instanciate(repo, root, parent, serial);
  }
  /**
   * lifecycle method, is called
   * TODO: 🔴
   * @since 2024-07-05
   */
  disposeTree() {
    this.disposeSelf();
    for (const sub of this.subFields) {
      sub.disposeTree();
    }
  }
  disposeSelf() {
    this.repo._unregisterField(this);
    for (const disposeFn of this.disposeFns) {
      disposeFn();
    }
  }
  /** YOU PROBABLY DO NOT WANT TO OVERRIDE THIS */
  setSerial(serial) {
    autofixSerial_20240711(serial);
    this.runInValueTransaction(() => {
      this.copyCommonSerialFiels(serial);
      this.setOwnSerial(serial);
    });
  }
  copyCommonSerialFiels(s) {
    if (s == null) return;
    if (s._version) this.serial._version = s._version;
    if (s.collapsed) this.serial.collapsed = s.collapsed;
    if (s.custom) this.serial.custom = s.custom;
    if (s.lastUpdatedAt != void 0) this.serial.lastUpdatedAt = s.lastUpdatedAt;
  }
  /** unified api to allow setting serial from value */
  setValue(val) {
    this.value = val;
  }
  RECONCILE(p) {
    let child = p.existingChild;
    if (child != null && child.type === p.correctChildSchema.type) {
      child.setSerial(p.targetChildSerial);
    } else {
      if (child) child.disposeTree();
      child = p.correctChildSchema.instanciate(
        //
        this.repo,
        this.root,
        this,
        p.targetChildSerial
      );
      p.attach(child);
    }
  }
  get actualWidgetToDisplay() {
    return this;
  }
  get indentChildren() {
    return 1;
  }
  get justifyLabel() {
    if (this.config.justifyLabel != null) return this.config.justifyLabel;
    if (this.DefaultBodyUI) return false;
    return true;
  }
  get depth() {
    if (this.parent == null) return 0;
    return this.parent.depth + this.parent.indentChildren;
  }
  /** DO NOT OVERRIDE; used internally to properly schedule events */
  get trueDepth() {
    if (this.parent == null) return 0;
    return this.parent.trueDepth + 1;
  }
  // abstract readonly id: string
  asTreeElement(key) {
    return {
      key: this.id,
      ctor: TreeEntry_Field,
      props: { key, widget: this }
    };
  }
  /** shorthand access to schema.config */
  get config() {
    return this.schema.config;
  }
  get animateResize() {
    return true;
  }
  /**
   * return true when widget has no child
   * return flase when widget has one or more child
   * */
  get hasNoChild() {
    return this.subFields.length === 0;
  }
  /**
   * @status NOT IMPLEMENTED
   * @deprecated
   * return a short summary of changes from last snapshot
   * */
  get diffSummaryFromSnapshot() {
    throw new Error("\u274C not implemented");
  }
  /**
   * @since 2024-06-20
   * @status broken
   * return a short summary of changes from default
   */
  get diffSummaryFromDefault() {
    return [
      this.hasChanges ? `${this.path}(${this.value?.toString?.() ?? "."})` : null,
      ...this.subFields.map((w) => w.diffSummaryFromDefault)
    ].filter(Boolean).join("\n");
  }
  /** path within the model */
  get path() {
    const p = this.parent;
    if (p == null) return "$";
    return p.path + "." + this.mountKey;
  }
  get mountKey() {
    if (this.parent == null) return "$";
    return this.parent.subFieldsWithKeys.find(({ field }) => field === this)?.key ?? "<error>";
  }
  /** collapse all children that can be collapsed */
  collapseAllChildren() {
    for (const _item of this.subFields) {
      const item = _item.actualWidgetToDisplay;
      if (item.serial.collapsed) continue;
      const isCollapsible = item.isCollapsible;
      if (isCollapsible) item.setCollapsed(true);
    }
  }
  /** expand all children that can are collapsed */
  expandAllChildren() {
    for (const _item of this.subFields) {
      const item = _item.actualWidgetToDisplay;
      item.setCollapsed(void 0);
    }
  }
  // change management ------------------------------------------------
  /**
   *
   * RULES:
   * - every component should be able to be restet and must implement
   *   the reset function
   * - Reset MUST NEVER be called fromt the constructor
   * - RESET WILL TRIGGER VALUE/SERIAL update events.
   *
   * 2024-05-24 rvion: we could have some generic reset function that
   * | simply do a this.setValue(this.defaultValue)
   * | but it feels like a wrong implementation 🤔
   * | it's simpler  though
   * 🔶 some widget like `WidgetPrompt` would not work with such logic
   * */
  reset() {
    this.setSerial(null);
  }
  /** return a cloned/detached value object you can use anywhere without care */
  toValueJSON() {
    return JSON.parse(JSON.stringify(this.value));
  }
  /** return a clone/detached serial object you can use anywhere without care */
  toSerialJSON() {
    return JSON.parse(JSON.stringify(this.serial));
  }
  /**
   * when consuming an advertised value,
   * walk upward the parent chain, and look for
   * a value stored in the advsertised values
   */
  consume(chan) {
    const channelId = typeof chan === "string" ? chan : chan.id;
    let at = this;
    while (at != null) {
      if (channelId in at._advertisedValues) return at._advertisedValues[channelId];
      at = at.parent;
    }
    return null;
  }
  /** true if errors.length > 0 */
  get hasErrors() {
    const errors = this.errors;
    return errors.length > 0;
  }
  /**
   * return a short string summary that display the value in a simple way.
   * This method is expected to be overriden in most child classes
   */
  get summary() {
    return JSON.stringify(this.value);
  }
  /**
   * Retrive the config custom data.
   * 🔶: NOT TO BE CONFUSED WITH `getFieldCustom`
   * Config custom data is NOT persisted anywhere,
   * You can set config.custom when defining your schema.
   * This data is completely unused internally by CSuite.
   * It is READONLY.
   */
  getConfigCustom() {
    return this.config.custom ?? {};
  }
  /**
   * Retrive the field custom data.
   * 🔶: NOT TO BE CONFUSED WITH `getConfigCustom`
   * Field custom data are persisted in the serial.custom.
   * This data is completely unused internally by CSuite.
   * You can use them however you want provided you keep them serializable.
   * It's just a quick/hacky place to store stuff
   */
  getFieldCustom() {
    return this.serial.custom;
  }
  /**
   * update
   * You can either return a new value, or patch the initial value
   * use `deleteFieldCustomData` instead to replace the value by null or undefined.
   */
  updateFieldCustom(fn) {
    const prev = this.value;
    const next = fn(prev) ?? prev;
    this.serial.custom = JSON.parse(JSON.stringify(next));
    this.applySerialUpdateEffects();
    return this;
  }
  /** delete field custom data (delete this.serial.custom)  */
  deleteFieldCustomData() {
    delete this.serial.custom;
    this.applySerialUpdateEffects();
    return this;
  }
  /**
   * all own errors:
   *  + base/default (built-in field, e.g. minLength for string)
   *  + custom       (user-defined in config) */
  get errors() {
    const ownProblems = normalizeProblem(this.ownProblems);
    return [...ownProblems, ...this.customOwnProblems];
  }
  get allErrorsIncludingChildrenErros() {
    return this.errors.concat(this.subFields.flatMap((f) => f.allErrorsIncludingChildrenErros));
  }
  /**
   * returns the list of all ancestors, NOT including self
   * @since 2024-07-08
   */
  get ancestors() {
    const result = [];
    let current = this.parent;
    while (current) {
      result.push(current);
      current = current.parent;
    }
    return result;
  }
  /**
   * returns the list of all ancestors, including self
   * @since 2024-07-08
   */
  get ancestorsIncludingSelf() {
    const result = [];
    let current = this;
    while (current) {
      result.push(current);
      current = current.parent;
    }
    return result;
  }
  get customOwnProblems() {
    if (this.config.check == null)
      return [
        /* { message: 'No check function provided' } */
      ];
    const res = this.config.check(this);
    return normalizeProblem(res);
  }
  // BUMP ----------------------------------------------------
  /**
   * everytime a field serial is udpated, we should call this function.
   * this function is called recursivelu upwards.
   * persistance will usually be done at the root field reacting to this event.
   */
  applySerialUpdateEffects() {
    this.config.onSerialChange?.(this);
  }
  // 💬 2024-03-15 rvion: use this regexp to quickly review manual serial set patterns
  // | `serial\.[a-zA-Z_]+(\[[a-zA-Z_]+\])? = `
  applyValueUpdateEffects() {
    this.config.onValueChange?.(this);
  }
  /** recursively walk upwards on any field change  */
  // private applyValueUpdateEffects_OF_CHILD(child: Field): void {
  //     this.serial.lastUpdatedAt = Date.now() as Timestamp
  //     this.parent?.applyValueUpdateEffects_OF_CHILD(child)
  //     this.config.onValueChange?.(this /* TODO: add extra param here:, child  */)
  //     this.publishValue() // 🔴  should probably be a reaction rather than this
  // }
  /**
   * this method can be heavilly optimized
   * ping @globi
   * todo:
   *  - by storing the published value locally
   *  - by defining a getter on the _advertisedValues object of all parents
   *  - by only setting this getter up once.
   * */
  publishValue() {
    const producers = this.schema.producers;
    if (producers.length === 0) return;
    const producedValues = {};
    for (const producer of producers) {
      const channelId = typeof producer.chan === "string" ? producer.chan : producer.chan.id;
      producedValues[channelId] = producer.produce(this);
    }
    let at = this;
    while (at != null) {
      Object.assign(at._advertisedValues, producedValues);
      at = at.parent;
    }
  }
  get isHidden() {
    if (this.config.hidden != null) return this.config.hidden;
    if (isFieldGroup(this) && Object.keys(this.fields).length === 0) return true;
    return false;
  }
  /** whether the widget should be considered inactive */
  get isDisabled() {
    return isFieldOptional(this) && !this.serial.active;
  }
  get isCollapsedByDefault() {
    return false;
  }
  get isCollapsed() {
    if (!this.isCollapsible) return false;
    if (this.serial.collapsed != null) return this.serial.collapsed;
    if (this.parent?.isDisabled) return true;
    return this.isCollapsedByDefault ?? false;
  }
  /** if specified, override the default algorithm to decide if the widget should have borders */
  get isCollapsible() {
    if (this.config.collapsed != null) return this.config.collapsed;
    if (!this.DefaultBodyUI) return false;
    if (this.config.label === false) return false;
    return true;
  }
  get background() {
    return this.config.background;
  }
  /** if provided, override the default logic to decide if the widget need to be bordered */
  get border() {
    if (this.parent == null) return false;
    if (this.config.border != null) return this.config.border;
    if (this.DefaultBodyUI == null) return false;
    return false;
  }
  // FOLD ----------------------------------------------------
  setCollapsed(val) {
    if (this.serial.collapsed === val) return;
    this.serial.collapsed = val;
    this.applySerialUpdateEffects();
  }
  toggleCollapsed() {
    this.serial.collapsed = !this.serial.collapsed;
    this.applySerialUpdateEffects();
  }
  // UI ----------------------------------------------------
  /**
   * allow to quickly render the model as a react form
   * without having to import any component; usage:
   * | <div>{x.render()}</div>
   */
  render(p = {}) {
    return createElement5(FormUI, { field: this, ...p });
  }
  /**
   * allow to quickly render the form in a dropdown button
   * without having to import any component; usage:
   * | <div>{x.renderAsConfigBtn()}</div>
   */
  renderAsConfigBtn(p) {
    return createElement5(FormAsDropdownConfigUI, { form: this, ...p });
  }
  renderSimple(p) {
    return /* @__PURE__ */ jsx(
      WidgetWithLabelUI,
      {
        field: this,
        showWidgetMenu: false,
        showWidgetExtra: false,
        showWidgetUndo: false,
        justifyLabel: false,
        fieldName: "_",
        ...p
      },
      this.id
    );
  }
  renderSimpleAll(p) {
    return /* @__PURE__ */ jsx(
      CSuiteOverride,
      {
        config: {
          showWidgetMenu: false,
          showWidgetExtra: false,
          showWidgetUndo: false
        },
        children: /* @__PURE__ */ jsx(WidgetWithLabelUI, { field: this, fieldName: "_", ...p }, this.id)
      }
    );
  }
  renderWithLabel(p) {
    return /* @__PURE__ */ jsx(
      WidgetWithLabelUI,
      {
        field: this,
        fieldName: p?.fieldName ?? "_",
        ...p
      },
      this.id
    );
  }
  defaultHeader() {
    if (this.DefaultHeaderUI == null) return;
    return /* @__PURE__ */ jsx(this.DefaultHeaderUI, { field: this });
  }
  defaultBody() {
    if (this.DefaultBodyUI == null) return;
    return /* @__PURE__ */ jsx(this.DefaultBodyUI, { field: this });
  }
  header() {
    const HeaderUI = "header" in this.config ? ensureObserver(this.config.header) : this.DefaultHeaderUI;
    if (HeaderUI == null) return;
    return /* @__PURE__ */ jsx(HeaderUI, { field: this });
  }
  body() {
    const BodyUI = "body" in this.config ? ensureObserver(this.config.body) : this.DefaultBodyUI;
    if (BodyUI == null) return;
    return /* @__PURE__ */ jsx(BodyUI, { field: this });
  }
  /** list of all subwidgets, without named keys */
  get subFields() {
    return [];
  }
  /** list of all subwidgets, without named keys */
  get subFieldsWithKeys() {
    return [];
  }
  /**
   * proxy this.repo.action
   * defined to shorted call and allow per-field override
   */
  runInValueTransaction(fn) {
    return this.repo.TRANSACT(fn, this, "value", "WITH_EFFECT");
  }
  runInAutoTransaction(fn) {
    return this.repo.TRANSACT(fn, this, "auto", "WITH_EFFECT");
  }
  runInSerialTransaction(fn) {
    return this.repo.TRANSACT(fn, this, "serial", "WITH_EFFECT");
  }
  runInCreateTransaction(fn) {
    return this.repo.TRANSACT(fn, this, "create", "NO_EFFECT");
  }
  // --------------------------------------------------------------------------------
  // 🔶 the 5 getters bellow are temporary hacks to make shared keep working
  // until every shared usage has been migrated
  /** getter that resolve to `this.schema.producers` */
  get producers() {
    return this.schema.producers;
  }
  /** getter that resolve to `this.schema.publish` */
  get publish() {
    return this.schema.publish;
  }
  /** getter that resolve to `this.schema.subscribe` */
  get subscribe() {
    return this.schema.subscribe;
  }
  /** getter that resolve to `this.schema.reactions` */
  get reactions() {
    return this.schema.reactions;
  }
  /** getter that resolve to `this.schema.addReaction` */
  get addReaction() {
    return this.schema.addReaction;
  }
  get icon() {
    const x = this.schema.config.icon;
    if (x == null) return null;
    if (typeof x === "string") return x;
    return x(this);
  }
  /** this function MUST be called at the end of every widget constructor */
  init(serial, mobxOverrides) {
    autofixSerial_20240711(serial);
    if (this._hasBeenInitialized) {
      console.error(`[\u{1F536}] Field.init has already been called => ABORTING`);
      return;
    }
    this._hasBeenInitialized = true;
    this.schema.applyExts(this);
    this.runInCreateTransaction(() => {
      this.copyCommonSerialFiels(serial);
      this.setOwnSerial(serial);
      makeAutoObservableInheritance(this, mobxOverrides);
      this.repo._registerField(this);
      this.ready = true;
    });
  }
  get hasSnapshot() {
    return this.serial.snapshot != null;
  }
  deleteSnapshot() {
    delete this.serial.snapshot;
    this.applySerialUpdateEffects();
  }
  /** update current field snapshot */
  saveSnapshot() {
    const snapshot = potatoClone(this.serial);
    delete snapshot.snapshot;
    this.serial.snapshot = snapshot;
    this.applySerialUpdateEffects();
    return snapshot;
  }
  /** rever to the last snapshot */
  revertToSnapshot() {
    if (this.serial.snapshot == null) {
      return this.reset();
    }
    this.setSerial(this.serial.snapshot);
  }
};

// src/csuite/components/SpacerUI.tsx
import { observer as observer39 } from "mobx-react-lite";
var SpacerUI = observer39(function SpacerUI_(p) {
  return /* @__PURE__ */ jsx("div", { tw: ["ml-auto"] });
});

// src/csuite/fields/bool/WidgetBoolUI.tsx
import { observer as observer40 } from "mobx-react-lite";
var WidgetBoolUI = observer40(function WidgetBoolUI_(p) {
  const field = p.field;
  if (field.config.label2) {
    console.warn("label2 is deprecated, please use the text option instead. label2 will be removed in the future");
  }
  return /* @__PURE__ */ jsxs("div", { tw: "flex w-full h-full ", children: [
    /* @__PURE__ */ jsx(
      InputBoolUI,
      {
        display: field.config.display,
        expand: field.config.display === "button" ? field.config.expand : true,
        icon: field.icon,
        text: field.config.text ?? field.config.label2,
        value: field.value,
        onValueChange: (value) => field.value = value
      }
    ),
    /* @__PURE__ */ jsx(SpacerUI, {})
  ] });
});

// src/csuite/fields/bool/FieldBool.tsx
import { computed as computed3 } from "mobx";
var Field_bool = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WidgetBoolUI;
    this.DefaultBodyUI = void 0;
    this.init(serial, {
      value: computed3,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "bool";
  }
  setOwnSerial(serial) {
    this.serial.value = serial?.active ?? // ⏱️ backward compat
    serial?.value ?? this.defaultValue;
  }
  get value() {
    return this.serial.value ?? this.defaultValue;
  }
  set value(next) {
    if (this.serial.value === next) return;
    this.runInValueTransaction(() => this.serial.value = next);
  }
  get ownProblems() {
    return null;
  }
  /** set the value to true */
  setOn() {
    this.value = true;
  }
  /** set the value to false */
  setOff() {
    this.value = false;
  }
  /**
   * set value to true if false, and to false if true
   * return new value
   */
  toggle() {
    this.value = !this.value;
  }
  get defaultValue() {
    return this.config.default ?? false;
  }
  get hasChanges() {
    return this.value !== this.defaultValue;
  }
};
registerFieldClass("bool", Field_bool);

// src/csuite/fields/button/WidgetButtonUI.tsx
import { runInAction as runInAction4 } from "mobx";
import { observer as observer41 } from "mobx-react-lite";
var WidgetButtonUI = observer41(function WidgetButtonUI_(p) {
  const extra = p.field.config.useContext?.();
  const context = { widget: p.field, context: extra };
  return /* @__PURE__ */ jsx(
    Button,
    {
      look: p.field.config.look,
      className: "self-start",
      icon: p.field.icon,
      expand: p.field.config.expand,
      onClick: () => runInAction4(() => p.field.config.onClick?.(context)),
      children: p.field.config.text ?? `Run`
    }
  );
});

// src/csuite/fields/button/FieldButton.ts
var Field_button = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WidgetButtonUI;
    this.DefaultBodyUI = void 0;
    const config = schema.config;
    if (config.text) config.label = config.label ?? ` `;
    this.init(serial, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "button";
  }
  setOwnSerial(serial) {
    this.serial.val = serial?.val ?? this.defaultValue;
  }
  get value() {
    return this.serial.val ?? this.defaultValue;
  }
  set value(next) {
    if (this.serial.val === next) return;
    this.runInValueTransaction(() => this.serial.val = next);
  }
  get ownProblems() {
    return null;
  }
  /** set the value to true */
  setOn() {
    return this.value = true;
  }
  /** set the value to false */
  setOff() {
    return this.value = false;
  }
  /** set value to true if false, and to false if true */
  toggle() {
    return this.value = !this.value;
  }
  get defaultValue() {
    return this.config.default ?? false;
  }
  get hasChanges() {
    return this.value !== this.defaultValue;
  }
};
registerFieldClass("button", Field_button);

// src/csuite/select/SelectPopupUI.tsx
import { observer as observer42 } from "mobx-react-lite";
import { createPortal as createPortal2 } from "react-dom";

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// node_modules/react-window/dist/index.esm.js
import { createElement as createElement6, PureComponent } from "react";
var hasNativePerformanceNow = typeof performance === "object" && typeof performance.now === "function";
var now = hasNativePerformanceNow ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();
  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }
  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}
var size = -1;
function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (size === -1 || recalculate) {
    var div = document.createElement("div");
    var style = div.style;
    style.width = "50px";
    style.height = "50px";
    style.overflow = "scroll";
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }
  return size;
}
var cachedRTLResult = null;
function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement("div");
    var outerStyle = outerDiv.style;
    outerStyle.width = "50px";
    outerStyle.height = "50px";
    outerStyle.overflow = "scroll";
    outerStyle.direction = "rtl";
    var innerDiv = document.createElement("div");
    var innerStyle = innerDiv.style;
    innerStyle.width = "100px";
    innerStyle.height = "100px";
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);
    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = "positive-descending";
    } else {
      outerDiv.scrollLeft = 1;
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = "negative";
      } else {
        cachedRTLResult = "positive-ascending";
      }
    }
    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }
  return cachedRTLResult;
}
if (false) {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsOverscanCount = /* @__PURE__ */ new WeakSet();
    devWarningsOverscanRowsColumnsCount = /* @__PURE__ */ new WeakSet();
    devWarningsTagName = /* @__PURE__ */ new WeakSet();
  }
}
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;
var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
};
if (false) {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsDirection = /* @__PURE__ */ new WeakSet();
    devWarningsTagName$1 = /* @__PURE__ */ new WeakSet();
  }
}
function createListComponent(_ref) {
  var _class;
  var getItemOffset2 = _ref.getItemOffset, getEstimatedTotalSize2 = _ref.getEstimatedTotalSize, getItemSize2 = _ref.getItemSize, getOffsetForIndexAndAlignment2 = _ref.getOffsetForIndexAndAlignment, getStartIndexForOffset2 = _ref.getStartIndexForOffset, getStopIndexForStartIndex2 = _ref.getStopIndexForStartIndex, initInstanceProps2 = _ref.initInstanceProps, shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange, validateProps2 = _ref.validateProps;
  return _class = /* @__PURE__ */ function(_PureComponent) {
    _inheritsLoose(List, _PureComponent);
    function List(props) {
      var _this;
      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps2(_this.props, _assertThisInitialized(_this));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_this),
        isScrolling: false,
        scrollDirection: "forward",
        scrollOffset: typeof _this.props.initialScrollOffset === "number" ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoize_one_esm_default(function(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex,
          overscanStopIndex,
          visibleStartIndex,
          visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoize_one_esm_default(function(scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection,
          scrollOffset,
          scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;
      _this._getItemStyle = function(index) {
        var _this$props = _this.props, direction = _this$props.direction, itemSize = _this$props.itemSize, layout = _this$props.layout;
        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);
        var style;
        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset2(_this.props, index, _this._instanceProps);
          var size2 = getItemSize2(_this.props, index, _this._instanceProps);
          var isHorizontal = direction === "horizontal" || layout === "horizontal";
          var isRtl = direction === "rtl";
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: "absolute",
            left: isRtl ? void 0 : offsetHorizontal,
            right: isRtl ? offsetHorizontal : void 0,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size2 : "100%",
            width: isHorizontal ? size2 : "100%"
          };
        }
        return style;
      };
      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoize_one_esm_default(function(_, __, ___) {
        return {};
      });
      _this._onScrollHorizontal = function(event) {
        var _event$currentTarget = event.currentTarget, clientWidth = _event$currentTarget.clientWidth, scrollLeft = _event$currentTarget.scrollLeft, scrollWidth = _event$currentTarget.scrollWidth;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            return null;
          }
          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                scrollOffset = -scrollLeft;
                break;
              case "positive-descending":
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          }
          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._onScrollVertical = function(event) {
        var _event$currentTarget2 = event.currentTarget, clientHeight = _event$currentTarget2.clientHeight, scrollHeight = _event$currentTarget2.scrollHeight, scrollTop = _event$currentTarget2.scrollTop;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollTop) {
            return null;
          }
          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._outerRefSetter = function(ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;
        if (typeof outerRef === "function") {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === "object" && outerRef.hasOwnProperty("current")) {
          outerRef.current = ref;
        }
      };
      _this._resetIsScrollingDebounced = function() {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }
        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };
      _this._resetIsScrolling = function() {
        _this._resetIsScrollingTimeoutId = null;
        _this.setState({
          isScrolling: false
        }, function() {
          _this._getItemStyleCache(-1, null);
        });
      };
      return _this;
    }
    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps2(nextProps);
      return null;
    };
    var _proto = List.prototype;
    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function(prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }
        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
          scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };
    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = "auto";
      }
      var _this$props2 = this.props, itemCount = _this$props2.itemCount, layout = _this$props2.layout;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      var scrollbarSize = 0;
      if (this._outerRef) {
        var outerRef = this._outerRef;
        if (layout === "vertical") {
          scrollbarSize = outerRef.scrollWidth > outerRef.clientWidth ? getScrollbarSize() : 0;
        } else {
          scrollbarSize = outerRef.scrollHeight > outerRef.clientHeight ? getScrollbarSize() : 0;
        }
      }
      this.scrollTo(getOffsetForIndexAndAlignment2(this.props, index, align, scrollOffset, this._instanceProps, scrollbarSize));
    };
    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props, direction = _this$props3.direction, initialScrollOffset = _this$props3.initialScrollOffset, layout = _this$props3.layout;
      if (typeof initialScrollOffset === "number" && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props4 = this.props, direction = _this$props4.direction, layout = _this$props4.layout;
      var _this$state = this.state, scrollOffset = _this$state.scrollOffset, scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;
      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                outerRef.scrollLeft = -scrollOffset;
                break;
              case "positive-ascending":
                outerRef.scrollLeft = scrollOffset;
                break;
              default:
                var clientWidth = outerRef.clientWidth, scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };
    _proto.render = function render() {
      var _this$props5 = this.props, children = _this$props5.children, className = _this$props5.className, direction = _this$props5.direction, height = _this$props5.height, innerRef = _this$props5.innerRef, innerElementType = _this$props5.innerElementType, innerTagName = _this$props5.innerTagName, itemCount = _this$props5.itemCount, itemData = _this$props5.itemData, _this$props5$itemKey = _this$props5.itemKey, itemKey = _this$props5$itemKey === void 0 ? defaultItemKey$1 : _this$props5$itemKey, layout = _this$props5.layout, outerElementType = _this$props5.outerElementType, outerTagName = _this$props5.outerTagName, style = _this$props5.style, useIsScrolling = _this$props5.useIsScrolling, width = _this$props5.width;
      var isScrolling = this.state.isScrolling;
      var isHorizontal = direction === "horizontal" || layout === "horizontal";
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;
      var _this$_getRangeToRend = this._getRangeToRender(), startIndex = _this$_getRangeToRend[0], stopIndex = _this$_getRangeToRend[1];
      var items = [];
      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(createElement6(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : void 0,
            style: this._getItemStyle(_index)
          }));
        }
      }
      var estimatedTotalSize = getEstimatedTotalSize2(this.props, this._instanceProps);
      return createElement6(outerElementType || outerTagName || "div", {
        className,
        onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: "relative",
          height,
          width,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction
        }, style)
      }, createElement6(innerElementType || innerTagName || "div", {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? "100%" : estimatedTotalSize,
          pointerEvents: isScrolling ? "none" : void 0,
          width: isHorizontal ? estimatedTotalSize : "100%"
        }
      }));
    };
    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === "function") {
        var itemCount = this.props.itemCount;
        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(), _overscanStartIndex = _this$_getRangeToRend2[0], _overscanStopIndex = _this$_getRangeToRend2[1], _visibleStartIndex = _this$_getRangeToRend2[2], _visibleStopIndex = _this$_getRangeToRend2[3];
          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }
      if (typeof this.props.onScroll === "function") {
        var _this$state2 = this.state, _scrollDirection = _this$state2.scrollDirection, _scrollOffset = _this$state2.scrollOffset, _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;
        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    };
    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props6 = this.props, itemCount = _this$props6.itemCount, overscanCount = _this$props6.overscanCount;
      var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollDirection = _this$state3.scrollDirection, scrollOffset = _this$state3.scrollOffset;
      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }
      var startIndex = getStartIndexForOffset2(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex2(this.props, startIndex, scrollOffset, this._instanceProps);
      var overscanBackward = !isScrolling || scrollDirection === "backward" ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === "forward" ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };
    return List;
  }(PureComponent), _class.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: false
  }, _class;
}
var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children, direction = _ref2.direction, height = _ref2.height, layout = _ref2.layout, innerTagName = _ref2.innerTagName, outerTagName = _ref2.outerTagName, width = _ref2.width;
  var instance = _ref3.instance;
  if (false) {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead.");
      }
    }
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    switch (direction) {
      case "horizontal":
      case "vertical":
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + direction + '" was specified.'));
    }
    switch (layout) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + layout + '" was specified.'));
    }
    if (children == null) {
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (children === null ? "null" : typeof children) + '" was specified.'));
    }
    if (isHorizontal && typeof width !== "number") {
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (width === null ? "null" : typeof width) + '" was specified.'));
    } else if (!isHorizontal && typeof height !== "number") {
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (height === null ? "null" : typeof height) + '" was specified.'));
    }
  }
};
var FixedSizeList = /* @__PURE__ */ createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount, itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset, instanceProps, scrollbarSize) {
    var direction = _ref4.direction, height = _ref4.height, itemCount = _ref4.itemCount, itemSize = _ref4.itemSize, layout = _ref4.layout, width = _ref4.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var size2 = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size2);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size2 + itemSize + scrollbarSize);
    if (align === "smart") {
      if (scrollOffset >= minOffset - size2 && scrollOffset <= maxOffset + size2) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center": {
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(size2 / 2)) {
          return 0;
        } else if (middleOffset > lastItemOffset + Math.floor(size2 / 2)) {
          return lastItemOffset;
        } else {
          return middleOffset;
        }
      }
      case "auto":
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset2) {
    var itemCount = _ref5.itemCount, itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset2 / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction, height = _ref6.height, itemCount = _ref6.itemCount, itemSize = _ref6.itemSize, layout = _ref6.layout, width = _ref6.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var offset2 = startIndex * itemSize;
    var size2 = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size2 + scrollOffset - offset2) / itemSize);
    return Math.max(0, Math.min(
      itemCount - 1,
      startIndex + numVisibleItems - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;
    if (false) {
      if (typeof itemSize !== "number") {
        throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (itemSize === null ? "null" : typeof itemSize) + '" was specified.'));
      }
    }
  }
});

// src/csuite/select/SelectPopupUI.tsx
var trueMinWidth = "40rem";
var SelectPopupUI = observer42(function SelectPopupUI_(p) {
  const s = p.s;
  return createPortal2(
    /* @__PURE__ */ jsxs(
      Frame,
      {
        ref: s.popupRef,
        tw: [
          "MENU-ROOT _SelectPopupUI flex",
          "overflow-auto flex-col",
          s.tooltipPosition.bottom != null ? "rounded-t border-t" : "rounded-b border-b"
        ],
        onMouseUp: () => s.closeIfShouldCloseAfterSelection(),
        style: {
          minWidth: s.anchorRef.current?.clientWidth ? `max(${s.anchorRef.current.clientWidth}px, ${trueMinWidth})` : trueMinWidth,
          maxWidth: window.innerWidth - (s.tooltipPosition.left != null ? s.tooltipPosition.left : s.tooltipPosition.right ?? 0),
          maxHeight: `${s.tooltipMaxHeight}px`,
          pointerEvents: "initial",
          position: "absolute",
          zIndex: 99999999,
          top: s.tooltipPosition.top != null ? `${s.tooltipPosition.top}px` : "unset",
          bottom: s.tooltipPosition.bottom != null ? `${s.tooltipPosition.bottom}px` : "unset",
          left: s.tooltipPosition.left != null ? `${s.tooltipPosition.left}px` : "unset",
          right: s.tooltipPosition.right != null ? `${s.tooltipPosition.right}px` : "unset"
          // Adjust positioning as needed
        },
        onMouseDown: (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
        },
        onMouseEnter: (ev) => {
          if (s.isOpen) s.hasMouseEntered = true;
        },
        children: [
          (p.showValues ?? true) && /* @__PURE__ */ jsx(
            "div",
            {
              tw: ["overflow-auto flex flex-wrap gap-0.5"],
              children: s.displayValue
            }
          ),
          s.filteredOptions.length === 0 ? /* @__PURE__ */ jsx("li", { className: "h-input text-base", children: "No results" }) : null,
          /* @__PURE__ */ jsx(
            FixedSizeList,
            {
              useIsScrolling: false,
              height: 400,
              itemCount: s.filteredOptions.length,
              itemSize: 30,
              width: "100%",
              children: SelectOptionUI,
              itemData: { s }
            }
          )
        ]
      }
    ),
    document.getElementById("tooltip-root")
  );
});
var SelectOptionUI = observer42(function FooUI_({
  data,
  index,
  style
}) {
  const s = data.s;
  const option = s.filteredOptions[index];
  const isSelected = s.values.find((v) => s.isEqual(v, option)) != null;
  const mode = s.isMultiSelect ? "checkbox" : "radio";
  return /* @__PURE__ */ jsx(
    InputBoolToggleButtonUI,
    {
      style,
      expand: true,
      mode,
      preventDefault: true,
      showToggleButtonBox: true,
      hovered: (b) => b || s.selectedIndex === index,
      value: isSelected,
      onValueChange: (value) => {
        if (value != isSelected) s.selectOption(index);
      },
      children: /* @__PURE__ */ jsx("div", { tw: "w-full", children: s.p.getLabelUI ? s.p.getLabelUI(option) : s.p.getLabelText(option) })
    }
  );
});

// src/csuite/hashUtils/hash.ts
var hashJSONObjectToNumber = (obj) => hashStringToNumber(stableStringify(obj));
var hashStringToNumber = (s) => {
  let hash = 0, i, chr;
  for (i = 0; i < s.length; i++) {
    chr = s.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
};
function stableStringify(obj) {
  const type = typeof obj;
  if (type === "string") return JSON.stringify(obj);
  if (Array.isArray(obj)) {
    let str = "[";
    const al = obj.length - 1;
    for (let i = 0; i < obj.length; i++) {
      str += stableStringify(obj[i]);
      if (i !== al) str += ",";
    }
    return `${str}]`;
  }
  if (type === "object" && obj !== null) {
    let str = "{";
    const keys = Object.keys(obj).filter((k) => obj[k] !== void 0).sort();
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = obj[key];
      if (val === void 0) continue;
      if (i !== 0) str += ",";
      str += `${JSON.stringify(key)}:${stableStringify(val)}`;
    }
    return `${str}}`;
  }
  if (type === "number" || type === "boolean" || obj == null) {
    return `${obj}`;
  }
  throw new TypeError(`Invalid JSON type of ${type}, value ${obj}. FJSH can only hash JSON objects.`);
}

// src/csuite/badge/BadgeUI.tsx
import { observer as observer43 } from "mobx-react-lite";
var BadgeUI = observer43(function BadgeUI_({
  hue,
  autoHue,
  children,
  ...rest
}) {
  const hasAction = Boolean(rest.onClick);
  return /* @__PURE__ */ jsx(
    Frame,
    {
      tw: ["rounded px-2 whitespace-nowrap", hasAction && "cursor-pointer"],
      hover: hasAction,
      base: {
        //
        hue: hue ?? (autoHue ? typeof autoHue === "boolean" ? typeof children === "string" ? hashStringToNumber(children) : void 0 : hashStringToNumber(autoHue) : void 0),
        contrast: 0.1,
        chroma: 0.05
      },
      ...rest,
      children
    }
  );
});

// src/csuite/utils/searchMatches.ts
function unaccent(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function normalizeText(text) {
  return unaccent(text.toLowerCase());
}
function searchMatches(haystack, needle) {
  return normalizeText(haystack).includes(normalizeText(needle));
}

// src/csuite/select/SelectState.tsx
import { makeAutoObservable as makeAutoObservable8 } from "mobx";
import React2 from "react";
var AutoCompleteSelectState = class {
  constructor(p) {
    this.p = p;
    this.isMultiSelect = this.p.multiple ?? false;
    this._searchQuery = "";
    /**
     * function to compare value or options,
     * using the provided equality check  if provided.
     *
     * '===' check if the object is exactly the same.
     * It work in some cases like those:
     * case 1: 🟢
     *   | const myvar = {a:1}
     *   | <SelectUI options={[myvar, {a:2}]}, value={myvar} />
     * case 2: 🟢
     *   | <SelectUI options={[1,2]}, value={1} />
     *   (because primitve type are always compared by value)
     *
     * but not here
     *
     * case 3: ❌
     *   | <SelectUI options={[{a:1}, {a:2}]}, value={{a:1}} />
     *                          👆   is NOT '===' to  👆 (not the same instance object)
     *                                but is "equal" according to human logic
     *
     */
    this.isEqual = (a, b) => {
      if (this.p.equalityCheck) return this.p.equalityCheck(a, b);
      return a === b;
    };
    this.anchorRef = React2.createRef();
    this.inputRef = React2.createRef();
    this.popupRef = React2.createRef();
    this.selectedIndex = 0;
    this.isOpen = false;
    this.isDragging = false;
    this.isFocused = false;
    this.wasEnabled = false;
    this.hasMouseEntered = false;
    this.tooltipPosition = { top: void 0, bottom: void 0, left: void 0, right: void 0 };
    this.tooltipMaxHeight = 100;
    this.updatePosition = () => {
      const rect = this.anchorRef.current?.getBoundingClientRect();
      if (rect == null) return;
      this.tooltipPosition = {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        right: void 0,
        bottom: void 0
      };
      const onBottom = window.innerHeight * 0.5 < (rect.top + rect.bottom) * 0.5;
      const onLeft = window.innerWidth * 0.5 < (rect.left + rect.right) * 0.5;
      this.tooltipMaxHeight = (window.innerHeight - rect.bottom) * 0.99;
      const inputHeight = parseInt(window.getComputedStyle(document.body).getPropertyValue("--input-height"));
      const desiredHeight = Math.min(this.options.length * inputHeight * 1.25);
      const bottomSpace = window.innerHeight - rect.bottom;
      if (onBottom && desiredHeight > bottomSpace) {
        this.tooltipMaxHeight = rect.top * 0.99;
        this.tooltipPosition.top = void 0;
        this.tooltipPosition.bottom = window.innerHeight - rect.top;
      }
      if (onLeft) {
        this.tooltipPosition.left = void 0;
        this.tooltipPosition.right = window.innerWidth - rect.right;
      }
    };
    this.onRealWidgetMouseDown = (ev) => {
      this.hasMouseEntered = true;
      this.openMenu();
    };
    this.openMenu = () => {
      this.isOpen = true;
      this.updatePosition();
      this.inputRef.current?.focus();
      window.addEventListener("mousemove", this.MouseMoveTooFar, true);
    };
    this.handleInputChange = (event) => {
      this.filterOptions(event.target.value);
      this.updatePosition();
    };
    // Close pop-up if too far outside
    // 💬 2024-02-29 rvion:
    // | this code was a good idea; but it's really
    // | not pleasant when working mostly with keyboard and using tab to open selects.
    // | as soon as the moouse move just one pixel, popup close.
    // |  =>  commenting it out until we find a solution confortable in all cases
    this.MouseMoveTooFar = (event) => {
      const popup = this.popupRef?.current;
      const anchor = this.anchorRef?.current;
      if (!popup || !anchor || !this.hasMouseEntered) {
        return;
      }
      const x = event.clientX;
      const y = event.clientY;
      const maxDistance = 75;
      if (
        // left
        popup.offsetLeft - x > maxDistance || // top
        popup.offsetTop - y > maxDistance || // right
        x - (popup.offsetLeft + popup.offsetWidth) > maxDistance || // bottom
        y - (popup.offsetTop + popup.offsetHeight) > maxDistance
      ) {
        this.closeMenu();
      }
    };
    this.handleTooltipKeyDown = (ev) => {
      if (ev.key === "ArrowDown") this.navigateSelection("down");
      else if (ev.key === "ArrowUp") this.navigateSelection("up");
      else if (ev.key === "Enter" && !ev.metaKey && !ev.ctrlKey) {
        this.selectOption(this.selectedIndex);
        this.closeIfShouldCloseAfterSelection();
      }
    };
    this.onRealInputKeyUp = (ev) => {
      if (ev.key === "Enter" && !this.isOpen) {
        this.openMenu();
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      if (ev.key === "Escape") {
        this.closeMenu();
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      if (!this.isOpen) {
        this.openMenu();
        this.setNavigationIndex(0);
        ev.preventDefault();
        ev.stopPropagation();
      }
    };
    makeAutoObservable8(this, {
      popupRef: false,
      anchorRef: false,
      inputRef: false
    });
  }
  get options() {
    return this.p.options?.(this.searchQuery) ?? [];
  }
  get searchQuery() {
    return this.p.getSearchQuery?.() ?? this._searchQuery;
  }
  set searchQuery(value) {
    if (this.p.setSearchQuery) this.p.setSearchQuery(value);
    else this._searchQuery = value;
  }
  get filteredOptions() {
    if (this.searchQuery === "") return this.options;
    if (this.p.disableLocalFiltering) return this.options;
    return this.options.filter((p) => {
      const label = this.p.getLabelText(p);
      return searchMatches(label, this.searchQuery);
    });
  }
  /**
   * return the index of the first selected Item amongst options;
   * just in case the name wasn't clear enough.
   * TODO: rename this funciton, and remove this comment about the function name.
   */
  get indexOfFirstSelectedItemAmongstOptions() {
    const firstSelection = this.firstValue;
    if (firstSelection == null) return null;
    return this.options.findIndex((o) => this.isEqual(o, firstSelection));
  }
  /** return the first selected value */
  get firstValue() {
    const v = this.value;
    if (v == null) return null;
    if (Array.isArray(v)) {
      if (v.length === 0) return null;
      return v[0];
    }
    return v;
  }
  /** currently selected value or values */
  get value() {
    return this.p.value?.();
  }
  /** list of all selected values */
  get values() {
    const v = this.value;
    if (v == null) return [];
    return Array.isArray(v) ? v : [v];
  }
  get displayValue() {
    if (this.p.hideValue) return this.p.placeholder ?? "";
    let value = this.value;
    const placeHolderStr = this.p.placeholder ?? "Select...";
    if (value == null) return placeHolderStr;
    value = Array.isArray(value) ? value : [value];
    const str = value.length === 0 ? placeHolderStr : value.map((i) => {
      const label = this.p.getLabelText(i);
      if (!this.p.multiple) return label;
      return /* @__PURE__ */ jsx(
        BadgeUI,
        {
          onClick: () => this.p.onChange?.(i, this),
          children: label
        },
        label
      );
    });
    if (this.p.label)
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        this.p.label,
        ": ",
        str
      ] });
    return /* @__PURE__ */ jsx(Fragment, { children: str });
  }
  closeMenu() {
    this.isOpen = false;
    this.isFocused = false;
    this.selectedIndex = 0;
    this.searchQuery = "";
    this.isDragging = false;
    this.hasMouseEntered = false;
    window.removeEventListener("mousemove", this.MouseMoveTooFar, true);
  }
  filterOptions(inputValue) {
    this.searchQuery = inputValue;
    this.isOpen = true;
    this.setNavigationIndex(0);
  }
  // click means focus change => means need to refocus the input
  // ⏸️ onMenuEntryClick = (ev: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
  // ⏸️     ev.preventDefault()
  // ⏸️     ev.stopPropagation()
  // ⏸️     this.selectOption(index)
  // ⏸️     this.inputRef.current?.focus()
  // ⏸️ }
  selectOption(index) {
    const selectedOption = this.filteredOptions[index];
    if (selectedOption != null) {
      this.p.onChange?.(selectedOption, this);
      const shouldResetQuery = this.p.resetQueryOnPick ?? false;
      if (shouldResetQuery) this.searchQuery = "";
    }
  }
  closeIfShouldCloseAfterSelection() {
    const shouldCloseMenu = this.p.closeOnPick ?? !this.isMultiSelect;
    if (shouldCloseMenu) this.closeMenu();
  }
  navigateSelection(direction) {
    this.updatePosition();
    if (direction === "up" && this.selectedIndex > 0) {
      this.selectedIndex--;
    } else if (direction === "down" && this.selectedIndex < this.filteredOptions.length - 1) {
      this.selectedIndex++;
    }
  }
  setNavigationIndex(value) {
    this.updatePosition();
    this.selectedIndex = value;
  }
  onBlur(_ev) {
    this.closeMenu();
  }
};

// src/csuite/select/SelectUI.tsx
import { observer as observer44 } from "mobx-react-lite";
import { useMemo as useMemo6 } from "react";
var SelectUI = observer44(function SelectUI_(p) {
  const s = useMemo6(() => new AutoCompleteSelectState(
    /* st, */
    p
  ), []);
  const csuite = useCSuite();
  const border = csuite.inputBorder;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      tabIndex: -1,
      tw: ["SelectUI minh-input", "flex flex-1 items-center relative"],
      border: { contrast: border },
      className: p.className,
      ref: s.anchorRef,
      onKeyUp: s.onRealInputKeyUp,
      onMouseDown: s.onRealWidgetMouseDown,
      onKeyDown: s.handleTooltipKeyDown,
      onFocus: (ev) => {
        s.isFocused = true;
        if (ev.relatedTarget != null && !(ev.relatedTarget instanceof Window)) {
          s.openMenu();
        }
      },
      onBlur: (ev) => s.onBlur(ev),
      children: [
        /* @__PURE__ */ jsxs(
          Frame,
          {
            base: { contrast: csuite.inputContrast ?? 0.05 },
            hover: true,
            className: "flex-1 h-full ",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  tabIndex: -1,
                  tw: [
                    //
                    "text-sm",
                    "flex gap-1",
                    "p-0 h-full bg-transparent",
                    "select-none overflow-clip"
                  ],
                  children: false ? null : (
                    /* Using grid here to make sure that inner text will truncate instead of pushing the right-most icon out of the container. */
                    /* @__PURE__ */ jsxs("div", { tw: ["w-full", "px-0.5", "grid"], style: { gridTemplateColumns: "24px 1fr 24px" }, children: [
                      /* @__PURE__ */ jsx(
                        Ikon.mdiTextBoxSearchOutline,
                        {
                          tw: "box-border m-[2px]",
                          size: "calc((var(--input-height) - 4px - 2px)"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          tw: [
                            "flex gap-0.5 flex-grow items-center lh-input-2 ",
                            p.wrap ? "flex-wrap" : "overflow-hidden line-clamp-1 text-ellipsis whitespace-nowrap"
                          ],
                          children: s.displayValue
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Ikon.mdiChevronDown,
                        {
                          tw: "box-border m-[2px]",
                          size: "calc((var(--input-height) - 4px - 2px)"
                        }
                      )
                    ] })
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { tw: "absolute top-0 left-0 right-0 z-50 h-full", children: /* @__PURE__ */ jsx(
                "input",
                {
                  placeholder: s.isOpen ? p.placeholder : void 0,
                  ref: s.inputRef,
                  onChange: s.handleInputChange,
                  style: { opacity: s.isOpen ? 1 : 0 },
                  tw: ["csuite-basic-input", "w-full h-full !outline-none"],
                  type: "text",
                  value: s.searchQuery
                }
              ) })
            ]
          }
        ),
        (s.isOpen || false) && /* @__PURE__ */ jsx(SelectPopupUI, { showValues: !p.wrap, s })
      ]
    }
  );
});

// src/csuite/fields/choices/WidgetChoices_SelectHeaderUI.tsx
import { observer as observer45 } from "mobx-react-lite";
var WidgetChoices_SelectHeaderUI = observer45(function WidgetChoices_SelectLineUI_(p) {
  const field = p.field;
  const choices = field.choicesWithLabels;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: [
        //
        "relative",
        p.field.expand || p.field.config.justifyLabel ? "w-full" : "w-64"
      ],
      onMouseDown: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      },
      children: /* @__PURE__ */ jsx(
        SelectUI,
        {
          tw: "flex-grow",
          placeholder: p.field.config.placeholder,
          value: () => Object.entries(field.serial.branches).filter(([_, value]) => value).map(([key, _]) => ({ key, label: choices.find((v) => v.key === key)?.label ?? key })),
          options: () => choices,
          getLabelText: (v) => v.label,
          getLabelUI: (v) => /* @__PURE__ */ jsx("div", { tw: "flex flex-1 justify-between", children: /* @__PURE__ */ jsx("div", { tw: "flex-1", children: v.label }) }),
          equalityCheck: (a, b) => a.key === b.key,
          multiple: field.config.multi ?? false,
          resetQueryOnPick: false,
          onChange: (v) => field.toggleBranch(v.key)
        }
      )
    }
  );
});

// src/csuite/fields/choices/TabPositionConfig.tsx
var getJustifyContent = (tabPosition) => {
  if (tabPosition === "start") return "flex-start";
  if (tabPosition === "center") return "center";
  if (tabPosition === "end") return "flex-end";
  return "flex-start";
};

// src/csuite/fields/choices/WidgetChoices_TabHeaderUI.tsx
import { observer as observer46 } from "mobx-react-lite";
var WidgetChoices_TabHeaderUI = observer46(function WidgetChoicesTab_LineUI_(p) {
  const field = p.field;
  const choices = field.choicesWithLabels;
  const csuite = useCSuite();
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: "rounded select-none flex flex-1 flex-wrap gap-x-0.5 gap-y-0.5",
      style: { justifyContent: getJustifyContent(field.config.tabPosition) },
      children: choices.map((c) => {
        const isSelected = field.serial.branches[c.key];
        return /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            icon: c.icon,
            value: isSelected,
            display: "button",
            mode: p.field.isMulti ? "checkbox" : "radio",
            text: c.label,
            box: isSelected ? void 0 : { text: csuite.labelText },
            onValueChange: (value) => {
              if (value != isSelected) {
                field.toggleBranch(c.key);
              }
            }
          },
          c.key
        );
      })
    }
  );
});

// src/csuite/form/WidgetsContainerUI.tsx
import { observer as observer47 } from "mobx-react-lite";
var ListOfFieldsContainerUI = observer47(function ListOfFieldsContainerUI_(p) {
  const isHorizontal = p.layout === "H";
  const theme = useCSuite();
  return /* @__PURE__ */ jsx(
    Frame,
    {
      base: theme.fieldGroups.contrast,
      border: theme.fieldGroups.border,
      className: p.className,
      tw: [isHorizontal ? `flex flex-wrap` : `flex flex-col`, "w-full", p.className],
      children: p.children
    }
  );
});

// src/csuite/fields/choices/WidgetChoicesUI.tsx
import { observer as observer48 } from "mobx-react-lite";
var WidgetChoices_HeaderUI = observer48(function WidgetChoices_LineUI_(p) {
  if (p.field.config.appearance === "tab") return /* @__PURE__ */ jsx(WidgetChoices_TabHeaderUI, { field: p.field });
  else return /* @__PURE__ */ jsx(WidgetChoices_SelectHeaderUI, { field: p.field });
});
var WidgetChoices_BodyUI = observer48(function WidgetChoices_BodyUI_(p) {
  const field = p.field;
  const activeSubwidgets = Object.entries(field.enabledBranches).map(([branch, subWidget]) => ({ branch, subWidget }));
  return /* @__PURE__ */ jsx(
    ListOfFieldsContainerUI,
    {
      layout: field.config.layout,
      tw: [field.config.className, p.className],
      children: activeSubwidgets.map((val) => {
        const subWidget = val.subWidget;
        if (subWidget == null) return /* @__PURE__ */ jsx(Fragment, { children: "\u274C error" });
        return /* @__PURE__ */ jsx(
          WidgetWithLabelUI,
          {
            justifyLabel: p.justify,
            fieldName: val.branch,
            field: subWidget
          },
          val.branch
        );
      })
    }
  );
});

// src/csuite/fields/choices/FieldChoices.tsx
var Field_choices = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema, {
      $: "choices",
      branches: {},
      values: {}
    });
    this.UITab = () => /* @__PURE__ */ jsx(WidgetChoices_TabHeaderUI, { field: this });
    this.UISelect = () => /* @__PURE__ */ jsx(WidgetChoices_SelectHeaderUI, { field: this });
    this.UIChildren = () => /* @__PURE__ */ jsx(WidgetChoices_BodyUI, { field: this, justify: false });
    this.DefaultHeaderUI = WidgetChoices_HeaderUI;
    this.DefaultBodyUI = WidgetChoices_BodyUI;
    this.expand = this.config.expand ?? false;
    /** dictionary of enabled children branches */
    this.enabledBranches = {};
    this.init(serial, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "choices";
  }
  get ownProblems() {
    return null;
  }
  /**
   * true if the choice widget multiple values (0+)
   */
  get isMulti() {
    return this.config.multi;
  }
  /**
   * true if the choice widget accept ONE and only ONE value
   * (not 0, not 2+)
   */
  get isSingle() {
    return !this.config.multi;
  }
  /** alias for enabledBranches */
  get branches() {
    return this.enabledBranches;
  }
  get firstPossibleChoice() {
    return this.allPossibleChoices[0];
  }
  get allPossibleChoices() {
    return Object.keys(this.config.items);
  }
  get isCollapsible() {
    if (this.activeBranchNames.length === 0) return false;
    return super.isCollapsible;
  }
  get choicesWithLabels() {
    return Object.entries(this.config.items).map(([key, schema]) => ({
      key,
      // note:
      // if child.config.label === false => makeLabelFromFieldName(key)
      // if child.config.label === '' => makeLabelFromFieldName(key)
      label: schema.config.label || makeLabelFromFieldName(key),
      icon: schema.config.icon
    }));
  }
  /** array of all active branch keys */
  get activeBranchNames() {
    return Object.keys(this.serial.branches).filter((x) => this.serial.branches[x]);
  }
  get firstActiveBranchName() {
    return this.activeBranchNames[0];
  }
  get firstActiveBranchField() {
    if (this.firstActiveBranchName == null) return void 0;
    return this.enabledBranches[this.firstActiveBranchName];
  }
  get hasChanges() {
    const def = this.config.default;
    for (const branchName of this.allPossibleChoices) {
      const shouldBeActive = this.isBranchActiveByDefault(branchName);
      const child = this.enabledBranches[branchName];
      if (child && !shouldBeActive) return true;
      if (!child && shouldBeActive) return true;
      if (child && shouldBeActive && child.hasChanges) return true;
    }
    return false;
  }
  isBranchActiveByDefault(branchName) {
    const def = this.config.default;
    if (def == null) {
      if (this.isMulti) return false;
      return this.allPossibleChoices[0] === branchName;
    }
    const shouldBeActive = typeof def === "string" ? branchName === def : Boolean(def[branchName]);
    return shouldBeActive;
  }
  get subFields() {
    return Object.values(this.enabledBranches);
  }
  get subFieldsWithKeys() {
    return Object.entries(this.enabledBranches).map(([key, field]) => ({ key, field }));
  }
  toggleBranch(branch) {
    if (this.enabledBranches[branch]) {
      if (this.isMulti) this.disableBranch(branch);
    } else this.enableBranch(branch);
  }
  isBranchDisabled(branch) {
    return !this.serial.branches[branch];
  }
  isBranchEnabled(branch) {
    return Boolean(this.serial.branches[branch]);
  }
  setOwnSerial(serial__) {
    const serial_ = serial__ == null ? null : (
      // 🔶 deep clone is required because serial for this field is handled deeply
      // here instead of children when branch is disabled but we have a value
      JSON.parse(
        JSON.stringify({
          $: "choices",
          //
          branches: serial__.branches,
          values: serial__.values ?? serial__.values_
        })
      )
    );
    const config = this.config;
    if (typeof config.items === "function") {
      toastError('\u{1F534} ChoicesWidget "items" property should now be an object, not a function');
    }
    if (this.isSingle) {
      const getActiveBranches = (x) => Object.entries(x).filter(([k, active]) => active && this.allPossibleChoices.includes(k)).map(([k]) => k);
      if (typeof config.default === "object" && getActiveBranches(config.default).length > 1) {
        toastError("\u{1F534} ChoicesWidget is single but default sets multiple branches");
      }
      const activeBranches = serial_?.branches && getActiveBranches(serial_?.branches);
      if (activeBranches && activeBranches?.length > 1) {
        toastError(
          "\u{1F534} ChoicesWidget is single but incoming serial sets multiple branches (recovering by picking the first one)"
        );
        serial_.branches = { [bang(activeBranches[0])]: true };
      }
    }
    this.runInValueTransaction(() => {
      for (const branch of this.allPossibleChoices) {
        const shouldBeActive = serial_?.branches[branch] ?? this.isBranchActiveByDefault(branch);
        let schema = this.config.items[branch];
        if (typeof schema === "function") schema = schema();
        if (schema == null) throw new Error(`\u274C Branch "${branch}" has no initializer function`);
        if (shouldBeActive) {
          this.RECONCILE({
            correctChildSchema: schema,
            existingChild: this.enabledBranches[branch],
            targetChildSerial: serial_?.values?.[branch],
            attach: (child) => {
              this.enabledBranches[branch] = child;
              this.serial.values[branch] = child.serial;
            }
          });
        } else {
          this.serial.values[branch] = serial_?.values?.[branch];
          const prevChild = this.enabledBranches[branch];
          if (prevChild) prevChild.disposeTree();
          delete this.enabledBranches[branch];
        }
        this.serial.branches[branch] = shouldBeActive;
      }
    });
  }
  disableBranch(branch) {
    if (!this.enabledBranches[branch]) {
      return;
    }
    this.runInValueTransaction(() => {
      const prevChild = this.enabledBranches[branch];
      if (prevChild) prevChild.disposeTree();
      delete this.enabledBranches[branch];
      this.serial.branches[branch] = false;
    });
  }
  enableBranch(branch, p = {}) {
    const existingChild = this.enabledBranches[branch];
    if (this.enabledBranches[branch]) {
      return void console.info(`\u274C Branch "${branch}" already enabled`);
    }
    this.runInValueTransaction(() => {
      if (!this.config.multi) {
        for (const key in this.enabledBranches) {
          this.disableBranch(key);
        }
      }
      let schema = this.config.items[branch];
      if (typeof schema === "function") schema = schema();
      if (schema == null) throw new Error(`\u274C Branch "${branch}" has no initializer function`);
      this.RECONCILE({
        correctChildSchema: schema,
        existingChild: this.enabledBranches[branch],
        targetChildSerial: this.serial.values?.[branch],
        attach: (child) => {
          this.enabledBranches[branch] = child;
          this.serial.values[branch] = child.serial;
        }
      });
      this.serial.branches[branch] = true;
    });
    return this.enabledBranches[branch];
  }
  /** results, but only for active branches */
  get value() {
    const out = {};
    for (const branch in this.enabledBranches) {
      out[branch] = this.enabledBranches[branch].value;
    }
    return out;
  }
  set value(val) {
    this.runInValueTransaction(() => {
      for (const branch of this.allPossibleChoices) {
        if (val[branch] == null) {
          if (this.isBranchEnabled(branch)) this.disableBranch(branch);
        } else {
          if (this.isBranchDisabled(branch)) this.enableBranch(branch);
          this.enabledBranches[branch].value = val[branch];
        }
      }
    });
  }
};
registerFieldClass("choices", Field_choices);

// src/csuite/fields/color/WidgetColorUI.tsx
import { observer as observer49 } from "mobx-react-lite";
var WidgetColorUI = observer49(function WidgetColorUI_(p) {
  const field = p.field;
  return /* @__PURE__ */ jsx(
    "input",
    {
      value: field.serial.value,
      type: "color",
      onChange: (ev) => field.value = ev.target.value
    }
  );
});

// src/csuite/fields/color/FieldColor.tsx
var Field_color = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WidgetColorUI;
    this.DefaultBodyUI = void 0;
    this.init(serial, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "color";
  }
  setOwnSerial(serial) {
    this.serial.value = serial?.value ?? this.defaultValue;
  }
  get value() {
    return this.serial.value ?? this.config.default ?? "";
  }
  set value(next) {
    if (this.serial.value === next) return;
    this.runInValueTransaction(() => this.serial.value = next);
  }
  get ownProblems() {
    return null;
  }
  get defaultValue() {
    return this.config.default ?? "#000000";
  }
  get hasChanges() {
    return this.value !== this.defaultValue;
  }
};
registerFieldClass("color", Field_color);

// src/csuite/collapsible/CollapsibleState.tsx
import { makeAutoObservable as makeAutoObservable9 } from "mobx";
var CollapsibleState = class {
  constructor(p) {
    this.p = p;
    this.isCollapsed = this.p.startCollapsed ?? true;
    makeAutoObservable9(this);
  }
  get isExpanded() {
    return !this.isCollapsed;
  }
  toggle() {
    if (this.p.onToggle) this.p.onToggle?.(this);
    else this.isCollapsed = !this.isCollapsed;
  }
  open() {
    this.isCollapsed = false;
  }
  close() {
    this.isCollapsed = true;
  }
};

// src/csuite/collapsible/CollapsibleUI.tsx
import { observer as observer50 } from "mobx-react-lite";
import { useMemo as useMemo7 } from "react";
var CollapsibleUI = observer50(function CollapsibleUI_(p) {
  const SELF = useMemo7(() => new CollapsibleState(p), []);
  return /* @__PURE__ */ jsxs("div", { tw: ["flex flex-col cursor-pointer"], className: p.className, style: p.style, children: [
    /* @__PURE__ */ jsx("div", { tw: "flex select-none", onClick: (ev) => SELF.toggle(), children: p.children ?? /* @__PURE__ */ jsx(Frame, { tw: "flex", look: "link", icon: SELF.isCollapsed ? "mdiChevronRight" : "mdiChevronDown", children: SELF.isCollapsed ? p.titleCollapsed ?? "Voir plus" : p.titleExpanded ?? "Voir moins" }) }),
    SELF.isExpanded && p.content(SELF)
  ] });
});

// src/csuite/utils/capitalize.ts
function capitalize(string) {
  if (string === "") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// src/csuite/wrappers/FrameSubtle.tsx
import { observer as observer51 } from "mobx-react-lite";
var FrameSubtle = observer51(function BoxSubtle_({ children, ...rest }) {
  return /* @__PURE__ */ jsx(Frame, { ...rest, text: { contrast: 0.3, chromaBlend: 1, hueShift: 0 }, children });
});

// src/csuite/form/WidgetSingleLineSummaryUI.tsx
import { observer as observer52 } from "mobx-react-lite";
var WidgetSingleLineSummaryUI = observer52(function WidgetSingleLineSummaryUI_(p) {
  return /* @__PURE__ */ jsx(FrameSubtle, { className: "COLLAPSE-PASSTHROUGH ml-1 lh-input line-clamp-1 italic", children: p.children });
});

// src/csuite/fields/group/WidgetGroupUI.tsx
import { observer as observer53 } from "mobx-react-lite";
var WidgetGroup_LineUI = observer53(function WidgetGroup_LineUI_(p) {
  if (!p.field.serial.collapsed) {
    return /* @__PURE__ */ jsxs("div", { tw: "ml-auto flex gap-0.5", children: [
      /* @__PURE__ */ jsx(Button, { square: true, subtle: true, borderless: true, icon: "mdiUnfoldMoreHorizontal", onClick: () => p.field.expandAllChildren() }),
      /* @__PURE__ */ jsx(Button, { square: true, subtle: true, borderless: true, icon: "mdiUnfoldLessHorizontal", onClick: () => p.field.collapseAllChildren() })
    ] });
  }
  return /* @__PURE__ */ jsx(WidgetSingleLineSummaryUI, { children: p.field.summary });
});
var WidgetGroup_BlockUI = observer53(function WidgetGroup_BlockUI_(p) {
  const field = p.field;
  const groupFields = Object.entries(field.fields);
  const isHorizontal = field.config.layout === "H";
  return /* @__PURE__ */ jsx(
    ListOfFieldsContainerUI,
    {
      layout: p.field.config.layout,
      tw: [field.config.className, p.className],
      children: groupFields.map(([rootKey, sub], ix) => /* @__PURE__ */ jsx(
        WidgetWithLabelUI,
        {
          fieldName: rootKey,
          justifyLabel: isHorizontal ? false : field.config.justifyLabel,
          field: bang(sub)
        },
        rootKey
      ))
    }
  );
});

// src/csuite/fields/group/FieldGroup.tsx
import { Fragment as Fragment5 } from "react";
var Field_group = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WidgetGroup_LineUI;
    /**
     * The dict of all child widgets
     * will be filled during constructor
     */
    this.fields = {};
    // @internal
    this.__value = new Proxy({}, {
      ownKeys: (_target) => {
        return Object.keys(this.fields);
      },
      set: (_target, prop, value) => {
        if (typeof prop !== "string") return false;
        const subWidget = this.fields[prop];
        if (subWidget == null) return false;
        subWidget.value = value;
        return true;
      },
      get: (_target, prop) => {
        if (typeof prop !== "string") return;
        const subWidget = this.fields[prop];
        if (subWidget == null) return;
        return subWidget.value;
      },
      getOwnPropertyDescriptor: (_target, prop) => {
        if (typeof prop !== "string") return;
        const subWidget = this.fields[prop];
        if (subWidget == null) return;
        return {
          enumerable: true,
          configurable: true,
          get() {
            return subWidget.value;
          }
        };
      }
    });
    for (const [fName, fSchema] of this._fieldSchemas) {
      Object.defineProperty(this, capitalize(fName), {
        get: () => this.fields[fName],
        configurable: true
      });
    }
    this.init(serial, {
      value: false,
      __value: false,
      DefaultHeaderUI: false
    });
  }
  formFields(fields, props) {
    const sm = props?.showMore;
    return () => /* @__PURE__ */ jsxs(Fragment5, { children: [
      fields.map((f) => {
        if (typeof f === "function") {
          const res = f(this);
          return res({});
        }
        return this.fields[f].renderWithLabel({ fieldName: f });
      }),
      sm !== false && /* @__PURE__ */ jsx(
        CollapsibleUI,
        {
          content: () => {
            const moreFields = sm == null ? Object.keys(this.fields).filter((k) => !fields.includes(k)) : sm;
            return moreFields.map((f) => this.fields[f].renderWithLabel({ fieldName: f }));
          }
        }
      )
    ] });
  }
  form(fields, props) {
    return new Form({
      ...props,
      field: this,
      component: this.formFields(fields, { showMore: props.showMore })
    });
  }
  get DefaultBodyUI() {
    if (Object.keys(this.fields).length === 0) return;
    return WidgetGroup_BlockUI;
  }
  get ownProblems() {
    return null;
  }
  get hasChanges() {
    return Object.values(this.fields).some((f) => f.hasChanges);
  }
  get summary() {
    return this.config.summary?.(this.value, this) ?? "";
  }
  static {
    this.type = "group";
  }
  /** all [key,value] pairs */
  get entries() {
    return Object.entries(this.fields);
  }
  get numFields() {
    return Object.keys(this.fields).length;
  }
  get justifyLabel() {
    if (this.numFields > 1) return false;
    return true;
  }
  /** return item at give key */
  at(key) {
    return this.fields[key];
  }
  /** return item.value at give key */
  get(key) {
    return this.fields[key].value;
  }
  /** just here to normalize fieldSchema definitions, since it used to be a lambda */
  get _fieldSchemas() {
    const itemsDef = this.config.items;
    const fieldSchemas = typeof itemsDef === "function" ? itemsDef() ?? {} : itemsDef ?? {};
    return Object.entries(fieldSchemas);
  }
  setOwnSerial(serial) {
    if (this.serial.values_ == null) this.serial.values_ = {};
    for (const [fName, fSchema] of this._fieldSchemas) {
      this.RECONCILE({
        existingChild: this.fields[fName],
        correctChildSchema: fSchema,
        targetChildSerial: serial?.values_?.[fName],
        attach: (child) => {
          this.fields[fName] = child;
          this.serial.values_[fName] = child.serial;
        }
      });
    }
  }
  setPartialValue(val) {
    this.runInValueTransaction(() => {
      for (const key in val) {
        this.fields[key].value = val[key];
      }
    });
    return this;
  }
  get subFields() {
    return Object.values(this.fields);
  }
  get subFieldsWithKeys() {
    return Object.entries(this.fields).map(([key, field]) => ({ key, field }));
  }
  get value() {
    return this.__value;
  }
  set value(val) {
    this.runInAutoTransaction(() => {
      for (const key in val) {
        this.fields[key].value = val[key];
      }
    });
  }
};
registerFieldClass("group", Field_group);

// src/csuite/fields/link/FieldLink.tsx
var Field_link = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = () => /* @__PURE__ */ jsx(Fragment, { children: "\u{1F7E2}" });
    this.DefaultBodyUI = () => this.bField.renderWithLabel();
    this.init(serial, {});
  }
  static {
    this.type = "link";
  }
  setOwnSerial(serial) {
    this.RECONCILE({
      existingChild: this.aField,
      correctChildSchema: this.config.share,
      targetChildSerial: serial?.a,
      attach: (child) => {
        this.aField = child;
        this.serial.a = child.serial;
      }
    });
    this.RECONCILE({
      existingChild: this.bField,
      correctChildSchema: this.config.children(this.aField),
      targetChildSerial: serial?.b,
      attach: (child) => {
        this.bField = child;
        this.serial.b = child.serial;
      }
    });
  }
  get actualWidgetToDisplay() {
    return this.bField.actualWidgetToDisplay;
  }
  get ownProblems() {
    return this.bField.hasErrors;
  }
  get hasChanges() {
    return this.bField.hasChanges;
  }
  reset() {
    this.bField.reset();
  }
  get indentChildren() {
    return 0;
  }
  get summary() {
    return this.bField.summary;
  }
  get subFields() {
    return [this.aField, this.bField];
  }
  get subFieldsWithKeys() {
    return [
      { key: "a", field: this.aField },
      { key: "b", field: this.bField }
    ];
  }
  get value() {
    return this.bField.value;
  }
  set value(val) {
    this.runInAutoTransaction(() => {
      this.bField.value = val;
    });
  }
};
registerFieldClass("link", Field_link);

// src/csuite/fields/list/ListControlsUI.tsx
import { observer as observer54 } from "mobx-react-lite";
var ListControlsUI = observer54(function ListControlsUI_(p) {
  const field = p.field;
  const max = field.config.max;
  const min = field.config.min;
  const canAdd = max ? field.items.length < max : true;
  const canClear = min ? field.items.length > min : true;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      tw: "sticky flex gap-0.5 top-0 flex z-[50] w-full",
      onMouseDown: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      },
      children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "input",
            borderless: true,
            subtle: true,
            disabled: !canAdd,
            square: true,
            icon: "mdiPlus",
            onClick: (ev) => {
              if (!canAdd) return;
              ev.stopPropagation();
              field.addItem();
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "input",
            borderless: true,
            subtle: true,
            disabled: !canClear,
            square: true,
            icon: "mdiDeleteOutline",
            onClick: (ev) => {
              if (!canClear) return;
              ev.stopPropagation();
              field.removeAllItems();
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "input",
            borderless: true,
            subtle: true,
            square: true,
            icon: "mdiUnfoldMoreHorizontal",
            onClick: (ev) => {
              ev.stopPropagation();
              field.expandAllChildren();
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "input",
            borderless: true,
            subtle: true,
            square: true,
            icon: "mdiUnfoldLessHorizontal",
            onClick: (ev) => {
              ev.stopPropagation();
              field.collapseAllChildren();
            }
          }
        )
      ]
    }
  );
});

// src/csuite/fields/list/WidgetListUI.tsx
import { observer as observer55 } from "mobx-react-lite";
import { forwardRef as forwardRef2 } from "react";
var { default: SortableList, SortableItem, SortableKnob } = await import("react-easy-sort");
var WidgetList_LineUI = observer55(function WidgetList_LineUI_(p) {
  return /* @__PURE__ */ jsxs("div", { tw: "flex flex-1 items-center COLLAPSE-PASSTHROUGH", children: [
    /* @__PURE__ */ jsxs("div", { tw: "text-sm text-gray-500 italic", children: [
      p.field.length,
      " items"
    ] }),
    p.field.isAuto ? null : /* @__PURE__ */ jsx("div", { tw: "ml-auto", children: /* @__PURE__ */ jsx(ListControlsUI, { field: p.field }) })
  ] });
});
var WidgetList_BodyUI = observer55(function WidgetList_BodyUI_(p) {
  const field = p.field;
  const subFields = field.items;
  const min = field.config.min;
  return (
    // <div className='_WidgetListUI' tw='flex-grow w-full'>
    /* @__PURE__ */ jsx(SortableList, { onSortEnd: (s, e) => p.field.moveItem(s, e), className: "list", draggedItemClassName: "dragged", children: /* @__PURE__ */ jsx("div", { tw: "flex flex-col gap-0.5", children: subFields.map((subField, ix) => {
      const widgetHeader = subField.header();
      const widgetBody = subField.body();
      const collapsed = subField.serial.collapsed ?? false;
      const showBorder = subField.border != null;
      const isCollapsible = subField.isCollapsible;
      const boxBorder = showBorder ? 20 : 0;
      const boxBase = subField.background != null && (isCollapsible || showBorder) ? { contrast: 0.03 } : void 0;
      return /* @__PURE__ */ jsx(SortableItem, { children: /* @__PURE__ */ jsx(
        WidgetWithLabelUI,
        {
          fieldName: ix.toString(),
          field: subField,
          slotDelete: field.isAuto ? null : /* @__PURE__ */ jsx(
            Button,
            {
              disabled: min != null && field.items.length <= min,
              square: true,
              size: "input",
              subtle: true,
              icon: "mdiDeleteOutline",
              onClick: () => field.removeItem(subField)
            }
          ),
          slotDragKnob: /* @__PURE__ */ jsx(SortableKnob, { children: /* @__PURE__ */ jsx(ListDragHandleUI, { field: subField, ix }) })
        }
      ) }, subField.id);
    }) }) })
  );
});
var ListDragHandleUI = forwardRef2((p, ref) => {
  return (
    //TODO (bird_d): FIX UI - Needs to be Button when ref is implemented.
    /* @__PURE__ */ jsx("div", { ref, onClick: () => p.field.toggleCollapsed(), children: /* @__PURE__ */ jsx(Button, { size: "input", subtle: true, square: true, icon: "mdiDragHorizontalVariant" }) })
  );
});

// src/csuite/fields/list/FieldList.ts
import { reaction as reaction2 } from "mobx";
var Field_list = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WidgetList_LineUI;
    this.DefaultBodyUI = WidgetList_BodyUI;
    this.init(serial, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
    this.startAutoBehaviour();
  }
  static {
    this.type = "list";
  }
  get length() {
    return this.items.length;
  }
  get hasChanges() {
    if (!this.config.auto) {
      const defaultLength = clampOpt(this.config.defaultLength, this.config.min, this.config.max);
      if (this.items.length !== defaultLength) return true;
    }
    return this.items.some((i) => i.hasChanges);
  }
  // resetSmart(): void {
  //     // fix size
  //     if (!this.config.auto) {
  //         const defaultLength = clampOpt(this.config.defaultLength, this.config.min, this.config.max)
  //         for (let i = this.items.length; i > defaultLength; i--) this.removeItem(this.items[i - 1]!)
  //         for (let i = this.items.length; i < defaultLength; i++) this.addItem({ skipBump: true })
  //     }
  //     // reset all remaining values
  //     for (const i of this.items) i.reset()
  // }
  findItemIndexContaining(widget) {
    let at = widget;
    let child = at;
    while (at != null) {
      at = at.parent;
      if (at === this) {
        return this.items.indexOf(child);
      }
      child = at;
    }
    return null;
  }
  get subFields() {
    return this.items;
  }
  get subFieldsWithKeys() {
    return this.items.map((field, ix) => ({ key: ix.toString(), field }));
  }
  schemaAt(ix) {
    const _schema = this.config.element;
    const schema = typeof _schema === "function" ? _schema(ix) : _schema;
    return schema;
  }
  get isAuto() {
    return this.config.auto != null;
  }
  // probably slow and clunky;
  // TODO: rewrite this piece of crap
  startAutoBehaviour() {
    const auto = this.config.auto;
    if (auto == null) return;
    const disposeFn = reaction2(
      () => auto.keys(this),
      (keys) => {
        this.runInAutoTransaction(() => {
          const currentKeys = this.items.map((i, ix2) => auto.getKey(i, ix2));
          const missingKeys = keys.filter((k) => !currentKeys.includes(k));
          for (const k of missingKeys) {
            this.addItem({
              value: auto.init(k)
            });
          }
          let ix = 0;
          for (const item of this.items.slice()) {
            const isExtra = !keys.includes(auto.getKey(item, ix++));
            if (!isExtra) continue;
            this.removeItem(item);
          }
        });
      },
      { fireImmediately: true }
    );
    this.disposeFns.push(disposeFn);
  }
  at(ix) {
    return this.items[ix];
  }
  get valueArr() {
    return this.items.map((i) => i.value);
  }
  setOwnSerial(serial) {
    if (this.serial.items_ == null) this.serial.items_ = [];
    if (this.items != null) for (const item of this.items) item.disposeTree();
    this.items = [];
    this.serial.items_ = [];
    if (serial == null) {
      if (!this.config.auto) {
        const defaultLength = clampOpt(this.config.defaultLength, this.config.min, this.config.max);
        for (let i = this.items.length; i < defaultLength; i++) {
          this.addItem();
        }
      }
      return;
    }
    for (const [ix, subSerial] of serial.items_.entries()) {
      const schema = this.schemaAt(ix);
      this.RECONCILE({
        correctChildSchema: schema,
        existingChild: null,
        targetChildSerial: subSerial,
        attach: (sub) => {
          this.items.push(sub);
          this.serial.items_.push(sub.serial);
        }
      });
    }
    const missingItems = (this.config.min ?? 0) - this.items.length;
    for (let i = 0; i < missingItems; i++) {
      this.addItem();
    }
  }
  /**
   * code below is very wtf, and surprisingly simple for what it achieve
   * see `src/csuite/model/TESTS/proxy.test.ts` if you're not scared
   */
  get value() {
    return new Proxy(this.items, {
      get: (target, prop) => {
        if (typeof prop === "symbol") return target[prop];
        if (prop === "toJSON") return () => this.valueArr;
        if (prop === "pop") return () => this.pop();
        if (prop === "shift") return () => this.shift();
        if (prop === "unshift") return (...args) => this.unshift(...args);
        if (prop === "push") return (...args) => this.push(...args);
        if (parseInt(prop, 10) === +prop) {
          return target[+prop]?.value;
        }
        return this.valueArr[prop];
      },
      set: (target, prop, value) => {
        if (typeof prop === "symbol") return false;
        if (parseInt(prop, 10) === +prop) {
          const index = +prop;
          if (index === this.items.length) {
            this.addItem({ value });
            return true;
          } else if (this.items[prop]) {
            this.items[prop].value = value;
            return true;
          }
        }
        return false;
      }
    });
  }
  set value(val) {
    this.runInAutoTransaction(() => {
      for (let i = 0; i < val.length; i++) {
        if (i < this.items.length) {
          this.items[i].value = val[i];
        } else {
          this.addItem();
          this.items[i].value = val[i];
        }
      }
      this.splice(val.length);
    });
  }
  // ERRORS --------------------------------------------------------
  get ownProblems() {
    const out = [];
    if (this.config.min != null && this.length < this.config.min) {
      out.push(`List is too short`);
    }
    if (this.config.max != null && this.length > this.config.max) {
      out.push(`List is too long`);
    }
    return out;
  }
  // ADDING ITEMS -------------------------------------------------
  duplicateItemAtIndex(ix) {
    const item = this.items[ix];
    this.addItem({ at: ix, value: item.value });
  }
  /**
   * Appends new elements to the end of an array,
   * and returns the new length of the array.
   */
  push(...values) {
    if (values.length === 0) return this.length;
    this.runInValueTransaction(() => {
      for (const v of values) {
        this.addItem({ value: v });
      }
    });
    return this.length;
  }
  /**
   * Inserts new elements at the start of an array,
   * and returns the new length of the array.
   */
  unshift(...values) {
    if (values.length === 0) return this.length;
    this.runInValueTransaction(() => {
      for (const v of values) {
        this.addItem({ value: v, at: 0 });
      }
    });
    return this.length;
  }
  addItem(p = {}) {
    if (this.config.max != null && this.items.length >= this.config.max)
      return void console.log(`[\u{1F536}] list.addItem: list is already at max length`);
    if (p.at != null && p.at < 0) return void console.log(`[\u{1F536}] list.addItem: at is negative`);
    if (p.at != null && p.at > this.items.length) return void console.log(`[\u{1F536}] list.addItem: at is out of bounds`);
    return this.runInValueTransaction(() => {
      const schema = this.schemaAt(p.at ?? this.serial.items_.length);
      const element = schema.instanciate(this.repo, this.root, this, p.serial ?? null);
      if (p.value) {
        element.value = p.value;
      }
      if (p.at == null) {
        this.items.push(element);
        this.serial.items_.push(element.serial);
      } else {
        this.items.splice(p.at, 0, element);
        this.serial.items_.splice(p.at, 0, element.serial);
      }
      return element;
    });
  }
  // MOVING ITEMS ---------------------------------------------------
  moveItem(oldIndex, newIndex) {
    if (oldIndex === newIndex) return console.log(`[\u{1F536}] list.moveItem: oldIndex === newIndex`);
    if (oldIndex < 0 || oldIndex >= this.length) return console.log(`[\u{1F536}] list.moveItem: oldIndex out of bounds`);
    if (newIndex < 0 || newIndex >= this.length) return console.log(`[\u{1F536}] list.moveItem: newIndex out of bounds`);
    this.runInValueTransaction(() => {
      const serials = this.serial.items_;
      serials.splice(newIndex, 0, bang(serials.splice(oldIndex, 1)[0]));
      const instances = this.items;
      instances.splice(newIndex, 0, bang(instances.splice(oldIndex, 1)[0]));
    });
  }
  // REMOVING ITEMS ------------------------------------------------
  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @returns An array containing the elements that were deleted.
   */
  splice(start, deleteCount = Infinity) {
    if (deleteCount === 0) return [];
    if (start >= this.length) return [];
    return this.runInValueTransaction(() => {
      this.serial.items_.splice(start, deleteCount);
      const deleted = this.items.splice(start, deleteCount);
      for (const x of deleted) x.disposeTree();
      return deleted;
    });
  }
  /**
   * Removes all elements from the array and
   * @returns An array containing the elements that were deleted.
   */
  removeAllItems() {
    if (this.length === 0) {
      console.log(`[\u{1F536}] list.removeAllItems: list is already empty`);
      return [];
    }
    const minLen = this.config.min ?? 0;
    if (this.length <= minLen) {
      console.log(`[\u{1F536}] list.removeAllItems: list is already at min lenght`);
      return [];
    }
    return this.splice(minLen);
  }
  removeItem(item) {
    const i = this.items.indexOf(item);
    if (i === -1) {
      return void console.log(`[\u{1F536}] list.removeItem: item not found`);
    }
    this.removeItemAt(i);
    return item;
  }
  pop() {
    this.removeItemAt(this.items.length - 1);
  }
  /**
   * Removes the first element from an array and returns it.
   * If the array is empty, undefined is returned and the array is not modified.
   */
  shift() {
    return this.removeItemAt(0);
  }
  removeItemAt(i) {
    if (this.length < i) return null;
    return this.splice(i, 1)[0];
  }
};
registerFieldClass("list", Field_list);

// src/csuite/fields/markdown/WidgetMarkdownUI.tsx
import { observer as observer56 } from "mobx-react-lite";
var WidgetMardownUI = observer56(function WidgetMardownUI_(p) {
  const field = p.field;
  return /* @__PURE__ */ jsx(MarkdownUI, { tw: "_WidgetMardownUI w-full", markdown: field.markdown });
});

// src/csuite/fields/markdown/FieldMarkdown.ts
var Field_markdown = class extends Field {
  static {
    this.type = "markdown";
  }
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.init(serial);
  }
  setOwnSerial(serial) {
  }
  get DefaultHeaderUI() {
    if (this.config.inHeader) return WidgetMardownUI;
    return void 0;
  }
  get DefaultBodyUI() {
    if (this.config.inHeader) return void 0;
    return WidgetMardownUI;
  }
  get ownProblems() {
    return null;
  }
  get markdown() {
    const md = this.config.markdown;
    if (typeof md === "string") return md;
    return md(this);
  }
  /**
   * always return false, because the text isn't part of the serial, it's part of the config
   * markdown fields have NO value
   */
  get hasChanges() {
    return false;
  }
  /** do nothing, see coment on the hasChange getter */
  // ⏸️ reset(): void {}
  /** do nothing, see coment on the hasChange getter */
  set value(_) {
  }
  get value() {
    return this.serial;
  }
};
registerFieldClass("markdown", Field_markdown);

// src/csuite/fields/matrix/WidgetMatrixUI.tsx
import { observer as observer57 } from "mobx-react-lite";
var WidgetMatrixUI = observer57(function WidgetStrUI_(p) {
  const field = p.field;
  const cols = field.cols;
  const rows = field.rows;
  if (cols.length === 0) return /* @__PURE__ */ jsx("div", { children: "\u274C no cols" });
  if (rows.length === 0) return /* @__PURE__ */ jsx("div", { children: "\u274C no rows" });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("table", { cellSpacing: 0, cellPadding: 0, children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx(
        "th",
        {
          className: "cursor-pointer hover:text-red-600",
          onClick: () => field.setAll(!field.firstValue),
          children: "all"
        }
      ),
      cols.map((col, ix) => /* @__PURE__ */ jsx(
        "th",
        {
          className: "",
          onClick: () => field.setCol(col, !field.getCell(rows[0], col).value),
          children: col
        },
        ix
      ))
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: rows.map((row, rowIx) => /* @__PURE__ */ jsxs("tr", { className: "p-0 m-0", children: [
      /* @__PURE__ */ jsx(
        "td",
        {
          onClick: () => field.setRow(row, !field.getCell(row, cols[0]).value),
          className: "cursor-pointer",
          children: row
        }
      ),
      cols.map((col, colIx) => {
        const checked = field.getCell(row, col).value;
        return /* @__PURE__ */ jsx(
          "td",
          {
            className: "hover:bg-gray-400 cursor-pointer",
            onClick: () => field.setCell(row, col, !checked),
            tw: [checked ? void 0 : ""],
            style: {
              background: checked ? "oklch(var(--p)/.5)" : void 0,
              height: "2rem",
              width: "2rem"
            }
          },
          colIx
        );
      })
    ] }, rowIx)) })
  ] }) });
});

// src/csuite/fields/matrix/FieldMatrix.ts
import { runInAction as runInAction5 } from "mobx";
var Field_matrix = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WidgetMatrixUI;
    this.DefaultBodyUI = void 0;
    /** store of all active cells */
    this.store = /* @__PURE__ */ new Map();
    this.init(serial, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "matrix";
  }
  /** this method must be idem-potent */
  setOwnSerial(serial) {
    const { rows, cols, default: defs } = this.config;
    let selectedCells;
    if (serial != null) selectedCells = new Set(serial.selected.map(({ row, col, value }) => this.getCellkey(row, col)));
    else if (defs != null) selectedCells = new Set(defs.map(({ row, col }) => this.getCellkey(row, col)));
    else selectedCells = /* @__PURE__ */ new Set();
    for (const [x, row] of rows.entries()) {
      for (const [y, col] of cols.entries()) {
        const cellKey = this.getCellkey(row, col);
        const value = selectedCells.has(cellKey);
        const prev = this.store.get(cellKey);
        if (prev == null) this.store.set(cellKey, { x, y, col, row, value });
        else prev.value = value;
      }
    }
    this.serial.selected = this.activeCells;
  }
  /** list of all active cells */
  get value() {
    return this.serial.selected;
  }
  /** 🔶 this is inneficient */
  set value(val) {
    runInAction5(() => {
      for (const c of this.allCells) {
        c.value = false;
      }
      for (const v of val) {
        this.store.set(this.getCellkey(v.row, v.col), v);
      }
      this.UPDATE();
    });
  }
  /** list of all possible row keys */
  get rows() {
    return this.config.rows;
  }
  /** list of all possible colum keys */
  get cols() {
    return this.config.cols;
  }
  get ownProblems() {
    return null;
  }
  get hasChanges() {
    const def = this.config.default;
    if (def == null) return this.value.length != 0;
    else {
      if (def.length != this.value.length) return true;
      for (const v of this.value) {
        if (!def.find((d) => d.row == v.row && d.col == v.col)) return true;
      }
      return false;
    }
  }
  /** return some unique string from a tupple [row: string, col: string] */
  getCellkey(row, col) {
    return `${row} &&& ${col}`;
  }
  /** return all cells, regardless of if they're on or off */
  get allCells() {
    return Array.from(this.store.values());
  }
  /**
   * Internal method to update serial from the live list of active cells
   * every setter should update this
   */
  UPDATE() {
    this.runInValueTransaction(() => this.serial.selected = this.activeCells);
  }
  /** list of all cells that are active/on */
  get activeCells() {
    return this.allCells.filter((v) => v.value);
  }
  /** whether the first grid cell is ON */
  get firstValue() {
    return this.allCells[0]?.value ?? false;
  }
  /** set every cell in the matrix field to the given value `<value>`  */
  setAll(value) {
    for (const v of this.allCells) v.value = value;
    this.UPDATE();
  }
  /** set all cells in given row `<row>` to value `<val>`  */
  setRow(row, val) {
    for (const v of this.cols) {
      const cell = this.getCell(row, v);
      cell.value = val;
    }
    this.UPDATE();
  }
  /** set all cells in given column `<col>` to value `<val>`  */
  setCol(col, val) {
    for (const r of this.rows) {
      const cell = this.getCell(r, col);
      cell.value = val;
    }
    this.UPDATE();
  }
  /** get cell at {rol x col} */
  getCell(row, col) {
    return bang(this.store.get(this.getCellkey(row, col)));
  }
  /** set cell at {rol x col} to given value */
  setCell(row, col, value) {
    const cell = this.getCell(row, col);
    cell.value = value;
    this.UPDATE();
  }
};
registerFieldClass("matrix", Field_matrix);

// src/csuite/utils/parseFloatNoRoundingErr.ts
var parseFloatNoRoundingErr = (str, maxDigitsAfterDot = 3) => {
  const result = typeof str === "number" ? str : parseFloat(str);
  if (isNaN(result)) return 0;
  const out = Number(result.toFixed(maxDigitsAfterDot));
  return out;
};

// src/csuite/input-number/InputNumberUI.tsx
import { makeAutoObservable as makeAutoObservable10, runInAction as runInAction6 } from "mobx";
import { observer as observer58 } from "mobx-react-lite";
import React3, { useEffect as useEffect3, useMemo as useMemo8 } from "react";
var clamp2 = (x, min, max) => Math.max(min, Math.min(max, x));
var startValue = 0;
var dragged = false;
var cumulativeOffset = 0;
var lastShiftState = false;
var lastControlState = false;
var lastValue = 0;
var activeSlider = null;
var cancelled = false;
var InputNumberStableState = class {
  constructor(props, kit) {
    this.props = props;
    this.kit = kit;
    /* Used for making sure you can type whatever you want in to the value, but it gets validated when pressing Enter. */
    this.inputValue = this.value.toString();
    /* When editing the number <input> this will make it display inputValue instead of val.*/
    this.isEditing = false;
    this.inputRef = React3.createRef();
    this.syncValues = (value, opts = {}) => {
      const soft = opts.soft ?? false;
      const roundingModifier = opts.roundingModifier ?? 1;
      const skipRounding = opts.skipRounding ?? false;
      let num = typeof value === "string" ? this.mode == "int" ? parseInt(value, 10) : parseFloat(value) : value;
      if (isNaN(num) || typeof num != "number") {
        console.log(`${JSON.stringify(value)} is not a number`);
        return startValue;
      }
      if (this.forceSnap) {
        num = this.mode == "int" ? Math.round(num / this.step) * this.step : num;
      }
      if (this.mode === "int") num = Math.round(num);
      if (soft && startValue <= this.rangeMax && startValue >= this.rangeMin) {
        num = clamp2(num, this.rangeMin, this.rangeMax);
      } else {
        num = clamp2(num, this.props.min ?? -Infinity, this.props.max ?? Infinity);
      }
      if (!skipRounding) {
        const roundingPrecise = Math.ceil(-Math.log10(this.step * 0.01 * roundingModifier));
        num = parseFloatNoRoundingErr(num, roundingPrecise);
      }
      this.props.onValueChange(num);
      this.inputValue = num.toString();
    };
    this.increment = () => {
      startValue = this.value;
      let num = this.value + (this.isInteger ? this.step : this.step * 0.1);
      this.syncValues(num, { soft: true });
    };
    this.decrement = () => {
      startValue = this.value;
      let num = this.value - (this.isInteger ? this.step : this.step * 0.1);
      this.syncValues(num, { soft: true });
    };
    this.mouseMoveListener = (e) => {
      if (dragged && (lastShiftState !== e.shiftKey || lastControlState !== e.ctrlKey)) {
        lastValue = this.value;
        cumulativeOffset = 0;
      }
      dragged = true;
      cumulativeOffset += e.movementX;
      let precision = (e.shiftKey ? 1e-3 : 0.01) * this.step;
      let offset2 = this.numberSliderSpeed * cumulativeOffset * precision;
      const next = lastValue + offset2;
      let num = typeof next === "string" ? this.mode == "int" ? parseInt(next, 10) : parseFloatNoRoundingErr(next, this.rounding) : next;
      if (e.ctrlKey) {
        const inverval = e.shiftKey ? 0.1 * this.step : this.step;
        num = Math.round(num / inverval) * inverval;
      }
      lastShiftState = e.shiftKey;
      lastControlState = e.ctrlKey;
      this.syncValues(num, { soft: true, roundingModifier: e.shiftKey ? 0.01 : 1 });
    };
    this.cancelListener = (e) => {
      if (e.button == 2) {
        activeSlider = null;
        document.exitPointerLock();
      }
    };
    this.onPointerUpListener = () => {
      if (activeSlider && !dragged) {
        this.inputRef.current?.focus();
      } else {
        activeSlider = null;
      }
      window.removeEventListener("pointerup", this.onPointerUpListener, true);
      window.removeEventListener("pointerlockchange", this.onPointerLockChange, true);
      window.removeEventListener("mousemove", this.mouseMoveListener, true);
      window.removeEventListener("mousedown", this.cancelListener, true);
      document.exitPointerLock();
    };
    this.onPointerLockChange = (e) => {
      const isPointerLocked = document.pointerLockElement === activeSlider;
      if (!(activeSlider && isPointerLocked)) {
        window.removeEventListener("mousemove", this.mouseMoveListener, true);
        window.removeEventListener("mousedown", this.cancelListener, true);
        this.syncValues(startValue);
      }
    };
    makeAutoObservable10(this);
  }
  get value() {
    return this.props.value ?? clamp2(1, this.props.min ?? -Infinity, this.props.max ?? Infinity);
  }
  get mode() {
    return this.props.mode;
  }
  get step() {
    return this.props.step ?? (this.mode === "int" ? 1 : 0.1);
  }
  get rounding() {
    return Math.ceil(-Math.log10(this.step * 0.01));
  }
  get forceSnap() {
    return this.props.forceSnap ?? false;
  }
  get rangeMin() {
    return this.props.softMin ?? this.props.min ?? -Infinity;
  }
  get rangeMax() {
    return this.props.softMax ?? this.props.max ?? Infinity;
  }
  get numberSliderSpeed() {
    return this.kit?.clickAndSlideMultiplicator ?? 1;
  }
  get isInteger() {
    return this.mode === "int";
  }
};
var InputNumberUI = observer58(function InputNumberUI_(p) {
  const kit = useCSuite();
  const uist = useMemo8(() => new InputNumberStableState(p, kit), []);
  runInAction6(() => Object.assign(uist.props, p));
  useEffect3(() => uist.onPointerUpListener, []);
  const val = uist.value;
  const step = uist.step;
  const rounding = uist.rounding;
  const isEditing = uist.isEditing;
  const csuite = useCSuite();
  const border = csuite.inputBorder;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      style: p.style,
      base: { contrast: csuite.inputContrast ?? 0.05 },
      border: { contrast: border },
      hover: { contrast: 0.03 },
      className: p.className,
      tw: [
        p.disabled && "pointer-events-none opacity-25",
        "h-input relative",
        "input-number-ui",
        "flex-1 select-none min-w-24 cursor-ew-resize overflow-clip"
        // !isEditing && 'hover:border-base-200 hover:border-b-base-300 hover:bg-primary/40',
      ],
      onWheel: (ev) => {
        if (ev.ctrlKey) {
          let num = uist.isInteger ? step * -Math.sign(ev.deltaY) : step * -Math.sign(ev.deltaY) * 0.1;
          num = val + num;
          num = uist.isInteger ? Math.round(num) : parseFloatNoRoundingErr(num, rounding);
          num = clamp2(num, p.min ?? -Infinity, p.max ?? Infinity);
          uist.syncValues(num, void 0);
          ev.preventDefault();
          ev.stopPropagation();
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          Frame,
          {
            className: "inui-foreground",
            base: { contrast: p.hideSlider ? 0 : 0.1, chromaBlend: 2 },
            tw: ["z-10 absolute left-0 h-input"],
            style: { width: `${(val - uist.rangeMin) / (uist.rangeMax - uist.rangeMin) * 100}%` }
          }
        ),
        /* @__PURE__ */ jsxs("div", { tw: "grid w-full h-full items-center z-20", style: { gridTemplateColumns: "16px 1fr 16px" }, children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              className: "control",
              borderless: true,
              tw: "rounded-none items-center z-20 opacity-0",
              tabIndex: -1,
              onClick: uist.decrement,
              icon: "mdiChevronLeft"
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              tw: [
                //
                "th-text",
                `flex px-1 items-center justify-center text-sm truncate z-20 h-full`
              ],
              onMouseDown: (ev) => {
                if (isEditing || ev.button != 0) return;
                activeSlider = ev.currentTarget;
                lastValue = startValue = val;
                cumulativeOffset = 0;
                dragged = false;
                window.addEventListener("mousemove", uist.mouseMoveListener, true);
                window.addEventListener("pointerup", uist.onPointerUpListener, true);
                window.addEventListener("pointerlockchange", uist.onPointerLockChange, true);
                window.addEventListener("mousedown", uist.cancelListener, true);
                activeSlider?.requestPointerLock({ unadjustedMovement: true }).catch((error) => {
                  console.log(
                    "[InputNumberUI] Obtaining raw mouse input is not supported on this platform. Using processed mouse input, you may need to adjust the number input drag multiplier."
                  );
                  activeSlider?.requestPointerLock();
                });
              },
              children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    draggable: "false",
                    ref: uist.inputRef,
                    onDragStart: (ev) => ev.preventDefault(),
                    tw: [
                      // 'text-shadow outline-0',
                      /* `absolute opacity-0` is a bit of a hack around not being able to figure out why the input kept taking up so much width.
                       * Can't use `hidden` here because it messes up focusing. */
                      !isEditing && "cursor-not-allowed pointer-events-none absolute opacity-0",
                      !isEditing && p.text ? "text-right" : "text-center"
                    ],
                    value: isEditing ? uist.inputValue : val,
                    placeholder: p.placeholder,
                    style: {
                      fontFamily: "monospace",
                      zIndex: 2,
                      background: "transparent",
                      MozWindowDragging: "no-drag"
                    },
                    min: p.min,
                    max: p.max,
                    step,
                    onChange: (ev) => {
                      uist.inputValue = ev?.target.value;
                    },
                    onFocus: (ev) => {
                      let textInput = ev.currentTarget;
                      activeSlider = textInput.parentElement;
                      textInput.select();
                      startValue = val;
                      uist.inputValue = val.toString();
                      uist.isEditing = true;
                    },
                    onBlur: (ev) => {
                      uist.isEditing = false;
                      const next = ev.currentTarget.value;
                      activeSlider = null;
                      if (cancelled) {
                        cancelled = false;
                        uist.syncValues(startValue, void 0);
                        return;
                      }
                      uist.syncValues(ev.currentTarget.value, { skipRounding: true });
                    },
                    onKeyDown: (ev) => {
                      if (ev.key === "Enter") {
                        ev.currentTarget.blur();
                      } else if (ev.key === "Escape") {
                        cancelled = true;
                        ev.currentTarget.blur();
                      }
                      if (uist.isEditing) {
                        if (ev.key === "ArrowUp") {
                          uist.increment();
                          ev.preventDefault();
                        } else if (ev.key === "ArrowDown") {
                          uist.decrement();
                          ev.preventDefault();
                        } else {
                          ev.stopPropagation();
                        }
                      }
                    }
                  }
                ),
                !isEditing && /* @__PURE__ */ jsxs(Fragment, { children: [
                  p.text && /* @__PURE__ */ jsx(
                    "div",
                    {
                      tw: ["w-full pr-1 outline-0 border-0 border-transparent z-10 text-left truncate"],
                      children: p.text
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { style: { fontFamily: "monospace" }, children: p.value }),
                  !isEditing && p.suffix ? /* @__PURE__ */ jsx("div", { tw: "pl-0.5", children: p.suffix }) : /* @__PURE__ */ jsx(Fragment, {})
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: "control",
              borderless: true,
              tw: "rounded-none items-center z-20 opacity-0",
              tabIndex: -1,
              onClick: uist.increment,
              icon: "mdiChevronRight"
            }
          )
        ] })
      ]
    }
  );
});

// src/csuite/fields/number/WidgetNumberUI.tsx
import { observer as observer59 } from "mobx-react-lite";
var WidgetNumberUI = observer59(function WidgetNumberUI_(p) {
  const field = p.field;
  const value = field.serial.value;
  const mode = field.config.mode;
  const step = field.config.step ?? (mode === "int" ? 1 : 0.1);
  return /* @__PURE__ */ jsx(
    InputNumberUI,
    {
      mode,
      value,
      hideSlider: field.config.hideSlider,
      max: field.config.max,
      min: field.config.min,
      softMin: field.config.softMin,
      softMax: field.config.softMax,
      step,
      suffix: field.config.suffix,
      text: field.config.text,
      onValueChange: (next) => field.value = next,
      forceSnap: field.config.forceSnap
    }
  );
});

// src/csuite/fields/number/FieldNumber.tsx
import { computed as computed4 } from "mobx";
var Field_number = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WidgetNumberUI;
    this.DefaultBodyUI = void 0;
    this.forceSnap = false;
    this.init(serial, {
      value: computed4,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "number";
  }
  get defaultValue() {
    return this.config.default ?? 0;
  }
  get hasChanges() {
    return this.serial.value !== this.defaultValue;
  }
  get ownProblems() {
    if (this.config.min != null && this.value < this.config.min) {
      return `Value is less than ${this.config.min}`;
    }
    if (this.config.max != null && this.value > this.config.max) {
      return `Value is greater than ${this.config.max}`;
    }
    return null;
  }
  setOwnSerial(serial) {
    this.serial.value = serial?.value ?? serial?.val ?? this.defaultValue;
  }
  /** randomize respect (soft)Min and (soft)max */
  randomize() {
    const min = this.config.softMin ?? this.config.min ?? 0;
    const max = this.config.softMax ?? this.config.max ?? 100;
    this.value = Math.floor(Math.random() * (max - min + 1));
  }
  get value() {
    return this.serial.value ?? this.config.default ?? 0;
  }
  set value(next) {
    if (this.serial.value === next) return;
    this.runInValueTransaction(() => this.serial.value = next);
  }
};
registerFieldClass("number", Field_number);

// src/csuite/fields/optional/FieldOptional.tsx
var Field_optional = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = void 0;
    this.DefaultBodyUI = void 0;
    this.init(serial, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  setOwnSerial(serial) {
    this.serial.active = serial?.active ?? this.config.startActive ?? false;
    this.RECONCILE({
      existingChild: this.child,
      correctChildSchema: this.config.schema,
      targetChildSerial: serial?.child,
      attach: (child) => {
        this.child = child;
        this.serial.child = child.serial;
      }
    });
  }
  setActive(value) {
    if (this.serial.active === value) return;
    this.runInValueTransaction(() => {
      this.serial.active = value;
      if (value) this.child.setCollapsed(false);
      else this.child.setCollapsed(true);
    });
  }
  /**
   * similar to reset,
   * except when unactive by default => only reset the active property
   * 👉 the base reset() will always reset the child
   * 👉 this resetFast will only reset the child is active.
   */
  resetFast() {
    if (this.config.startActive) {
      if (!this.serial.active) this.setActive(true);
      if (this.child.hasChanges) this.child.reset();
      return;
    } else {
      if (this.serial.active) this.setActive(false);
      return;
    }
  }
  get hasChanges() {
    if (this.config.startActive) {
      if (!this.serial.active) return true;
      return this.child.hasChanges;
    } else {
      if (!this.serial.active) return false;
      return true;
    }
  }
  static {
    this.type = "optional";
  }
  get ownProblems() {
    return null;
  }
  get childOrThrow() {
    if (this.child == null) throw new Error("\u274C optional active but child is null");
    return this.child;
  }
  get actualWidgetToDisplay() {
    return this.child.actualWidgetToDisplay;
  }
  /** so optional fields do not increase nesting twice */
  get indentChildren() {
    return 0;
  }
  get subFields() {
    return [this.child];
  }
  get subFieldsWithKeys() {
    return this.serial.active ? [{ key: "child", field: this.child }] : [];
  }
  get value() {
    if (!this.serial.active) return null;
    return this.childOrThrow.value;
  }
  set value(next) {
    if (next == null) {
      this.setActive(false);
      return;
    } else {
      this.setActive(true);
      this.child.value = next;
    }
  }
};
registerFieldClass("optional", Field_optional);

// src/csuite/fields/seed/Seeder.ts
import { makeAutoObservable as makeAutoObservable11 } from "mobx";
var Seeder = class {
  constructor() {
    this.count = 0;
    makeAutoObservable11(this);
  }
};
var globablSeeder = null;
function getGlobalSeeder() {
  globablSeeder ??= new Seeder();
  return globablSeeder;
}

// src/csuite/fields/seed/WidgetSeedUI.tsx
import { observer as observer60 } from "mobx-react-lite";
var WidgetSeedUI = observer60(function WidgetSeedUI_(p) {
  const field = p.field;
  const val = field.serial.val;
  const csuite = useCSuite();
  const border = csuite.inputBorder;
  return /* @__PURE__ */ jsxs(Frame, { border: { contrast: border }, tw: ["h-input", "flex-1 flex items-center"], children: [
    /* @__PURE__ */ jsx(
      InputBoolToggleButtonUI,
      {
        icon: "mdiAutoFix",
        value: field.serial.mode === "randomize",
        onValueChange: () => field.setToRandomize()
      }
    ),
    /* @__PURE__ */ jsx(
      InputBoolToggleButtonUI,
      {
        icon: "mdiNumeric1CircleOutline",
        value: field.serial.mode === "fixed",
        onValueChange: () => field.setToFixed()
      }
    ),
    /* @__PURE__ */ jsx(
      InputNumberUI,
      {
        disabled: field.serial.mode === "randomize",
        tw: ["!border-none flex-1"],
        min: field.config.min,
        max: field.config.max,
        step: 1,
        value: val,
        mode: "int",
        onValueChange: (value) => field.value = value
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        size: "input",
        tw: "!border-l !border-r-0",
        onClick: () => field.setToFixed(Math.floor(Math.random() * 1e8)),
        icon: "mdiAutorenew",
        square: true
      }
    )
  ] });
});

// src/csuite/fields/seed/FieldSeed.ts
var Field_seed_fromValue = (value) => ({
  $: "seed",
  mode: "fixed",
  val: value
});
var Field_seed = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WidgetSeedUI;
    this.DefaultBodyUI = void 0;
    this.setMode = (mode) => {
      if (this.serial.mode === mode) return;
      this.runInValueTransaction(() => this.serial.mode = mode);
    };
    this.setToFixed = (val) => {
      this.runInValueTransaction(() => {
        this.serial.mode = "fixed";
        if (val) this.serial.val = val;
      });
    };
    this.init(serial, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "seed";
  }
  get ownProblems() {
    return null;
  }
  get hasChanges() {
    if (this.serial.mode !== this.defaultMode) return true;
    if (this.serial.mode === "fixed") return this.value !== this.defaultValue;
    return false;
  }
  get defaultMode() {
    return this.config.defaultMode ?? "randomize";
  }
  get defaultValue() {
    return this.config.default ?? 0;
  }
  setToRandomize() {
    if (this.serial.mode === "randomize") return;
    this.runInValueTransaction(() => this.serial.mode = "randomize");
  }
  setOwnSerial(serial) {
    this.serial.val = serial?.val ?? this.defaultValue;
    this.serial.mode = serial?.mode ?? this.defaultMode;
  }
  get value() {
    const seeder = this.config.seeder ?? getGlobalSeeder();
    const count = seeder.count;
    const mode = this.serial.mode ?? this.config.defaultMode ?? "randomize";
    return mode === "randomize" ? Math.floor(Math.random() * 9999999) : this.serial.val ?? this.config.default ?? 0;
  }
  set value(val) {
    if (this.serial.mode === "fixed" && this.serial.val === val) return;
    this.runInValueTransaction(() => {
      this.serial.val = val;
    });
  }
};
registerFieldClass("seed", Field_seed);

// src/csuite/utils/exhaust.ts
function exhaust2(x) {
  return x;
}

// src/csuite/wrappers/PanelHeader.tsx
import { observer as observer61 } from "mobx-react-lite";
var PanelHeaderUI = observer61(function PanelHeaderUI_(p) {
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      className: p.className,
      base: 8,
      tw: ["CSHY-panel-header w-full", "flex gap-1 select-none", "items-center p-1"],
      onWheel: (event) => {
        event.currentTarget.scrollLeft += event.deltaY;
        event.stopPropagation();
      },
      children: [
        p.title && /* @__PURE__ */ jsx("div", { children: p.title }),
        p.children
      ]
    }
  );
});

// src/csuite/resizableFrame/resizableFrameUI.tsx
import { makeAutoObservable as makeAutoObservable12 } from "mobx";
import { observer as observer62 } from "mobx-react-lite";
import { useMemo as useMemo9 } from "react";
var startValue2 = 0;
var offset = 0;
var defaultSize = 200;
var ResizableFrameStableState = class {
  constructor(props) {
    this.props = props;
    this.start = () => {
      startValue2 = this.size;
      offset = 0;
      window.addEventListener("mousemove", this.resize, true);
      window.addEventListener("pointerup", this.stop, true);
    };
    this.stop = () => {
      window.removeEventListener("mousemove", this.resize, true);
      window.removeEventListener("pointerup", this.stop, true);
    };
    this.resize = (e) => {
      if (this.props.relative) {
        return this.props.onResize?.(e.movementY);
      }
      offset += e.movementY;
      let next = startValue2 + offset;
      if (this.props.snap) {
        next = Math.round(next / this.props.snap) * this.props.snap;
      }
      this.props.onResize?.(next);
      this.size = next;
    };
    this.size = props.currentSize ?? props.startSize ?? defaultSize;
    makeAutoObservable12(this);
  }
};
var ResizableFrame = observer62(function ResizableFrame_(p) {
  const uist = useMemo9(() => new ResizableFrameStableState(p), []);
  const { currentSize, ...props } = p;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      tw: "flex flex-col !p-0",
      style: { gap: "0px", ...p.style },
      ...props,
      children: [
        p.header && /* @__PURE__ */ jsx(PanelHeaderUI, { children: p.header }),
        /* @__PURE__ */ jsx(
          Frame,
          {
            tw: "w-full overflow-auto",
            style: {
              height: `${uist.size}px`,
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              padding: "0px !important"
            },
            children: p.children
          }
        ),
        /* @__PURE__ */ jsxs(
          Frame,
          {
            className: "h-input w-full relative",
            style: { borderTop: "1px solid oklch(from var(--KLR) calc(l + 0.1 * var(--DIR)) c h)" },
            children: [
              /* @__PURE__ */ jsx(
                Frame,
                {
                  hover: true,
                  tw: "!flex absolute inset-0 h-full items-center justify-center cursor-ns-resize",
                  onMouseDown: () => uist.start(),
                  children: /* @__PURE__ */ jsx(IkonOf, { name: "mdiDragHorizontalVariant" })
                }
              ),
              /* @__PURE__ */ jsx("div", { tw: "absolute lh-input items-center", children: p.footer })
            ]
          }
        )
      ]
    }
  );
});

// src/csuite/fields/selectMany/WidgetSelectMany_ListUI.tsx
import { observer as observer63 } from "mobx-react-lite";
var WidgetSelectMany_ListUI = observer63(function WidgetSelectMany_TabUI_(p) {
  const field = p.field;
  return /* @__PURE__ */ jsx(
    ResizableFrame,
    {
      border: true,
      tw: "w-full",
      children: field.choices.slice(0, 100).map((c) => {
        const isSelected = Boolean(field.serial.values.find((item) => item.id === c.id));
        return /* @__PURE__ */ jsx(
          InputBoolToggleButtonUI,
          {
            value: isSelected,
            mode: "checkbox",
            showToggleButtonBox: true,
            tw: "w-full",
            text: c.label,
            onValueChange: (value) => {
              if (value != isSelected) field.toggleItem(c);
            }
          },
          c.id
        );
      })
    }
  );
});

// src/csuite/checkbox/InputBoolFlipButtonUI.tsx
import { observer as observer64 } from "mobx-react-lite";
var InputBoolFlipButtonUI = observer64(function InputBoolFlipButtonUI_(p) {
  const isActive = p.value ?? false;
  const label = p.text;
  const mode = p.mode ?? false;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      style: p.style,
      className: p.className,
      disabled: p.disabled,
      tooltip: p.tooltip,
      tooltipPlacement: p.tooltipPlacement,
      hover: true,
      triggerOnPress: { startingState: isActive },
      expand: p.expand,
      tw: ["flex flex-row !select-none cursor-pointer"],
      onClick: (ev) => {
        if (!p.onValueChange) return;
        ev.stopPropagation();
        p.onValueChange(!isActive);
      },
      children: [
        /* @__PURE__ */ jsx(
          Frame,
          {
            size: "input",
            square: true,
            icon: p.icon ?? (isActive ? "mdiCheckBold" : null),
            tw: ["!select-none", mode === "radio" ? "rounded-full" : "rounded-sm"],
            iconSize: "var(--input-icon-height)",
            hover: true,
            ...p.box
          }
        ),
        p.children ?? (label ? /* @__PURE__ */ jsx("div", { tw: "ml-1", children: label }) : null)
      ]
    }
  );
});

// src/csuite/fields/selectMany/WidgetSelectMany_SelectUI.tsx
import { observer as observer65 } from "mobx-react-lite";
var WidgetSelectMany_SelectUI = observer65(function WidgetSelectMany_SelectUI_(p) {
  const field = p.field;
  return /* @__PURE__ */ jsxs("div", { tw: "flex flex-1 gap-1", children: [
    /* @__PURE__ */ jsx(
      SelectUI,
      {
        multiple: true,
        wrap: field.wrap,
        tw: [field.ownProblems && "rsx-field-error"],
        getLabelText: (t) => t.label ?? t.id,
        getLabelUI: field.config.getLabelUI,
        getSearchQuery: () => field.serial.query ?? "",
        setSearchQuery: (query) => field.serial.query = query,
        disableLocalFiltering: field.config.disableLocalFiltering,
        options: () => field.choices,
        value: () => field.serial.values,
        equalityCheck: (a, b) => a.id === b.id,
        onChange: (selectOption) => field.toggleItem(selectOption)
      }
    ),
    /* @__PURE__ */ jsx(
      InputBoolFlipButtonUI,
      {
        tooltip: "Wrap items",
        tw: "self-start",
        icon: p.field.wrap ? "mdiWrapDisabled" : "mdiWrap",
        value: p.field.wrap,
        onValueChange: (next) => p.field.wrap = next
      }
    )
  ] });
});

// src/csuite/fields/selectMany/WidgetSelectMany_TabUI.tsx
import { observer as observer66 } from "mobx-react-lite";
var WidgetSelectMany_TabUI = observer66(function WidgetSelectMany_TabUI_2(p) {
  const field = p.field;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
    "div",
    {
      tw: "rounded select-none flex flex-wrap gap-x-0.5 gap-y-0",
      style: { justifyContent: getJustifyContent(field.config.tabPosition) },
      children: [
        field.choices.map((c) => {
          const isSelected = Boolean(field.serial.values.find((item) => item.id === c.id));
          return /* @__PURE__ */ jsx(
            InputBoolUI,
            {
              value: isSelected,
              display: "button",
              text: c.label ?? c.id,
              onValueChange: (value) => {
                if (value != isSelected) field.toggleItem(c);
              }
            }
          );
        }),
        field.serial.values.filter((v) => field.choices.find((i) => i.id === v.id) == null).map((item) => /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            value: true,
            style: { border: "1px solid oklch(var(--er))" },
            display: "button",
            text: item.label ?? "no label",
            onValueChange: (value) => field.toggleItem(item)
          }
        ))
      ]
    }
  ) });
});

// src/csuite/fields/selectMany/WidgetSelectManyUI.tsx
import { observer as observer67 } from "mobx-react-lite";
var WidgetSelectManyUI = observer67(function WidgetSelectManyUI_(p) {
  const field = p.field;
  const appearance = field.config.appearance ?? "tab";
  if (appearance === "tab") return /* @__PURE__ */ jsx(WidgetSelectMany_TabUI, { field });
  if (appearance === "select") return /* @__PURE__ */ jsxs("div", { tw: "flex flex-col flex-1", children: [
    /* @__PURE__ */ jsx(WidgetSelectMany_SelectUI, { field }),
    !field.isCollapsed && /* @__PURE__ */ jsx(WidgetSelectMany_ListUI, { field })
  ] });
  if (appearance === "list") return /* @__PURE__ */ jsx(WidgetSelectMany_ListUI, { field });
  exhaust2(appearance);
});

// src/csuite/fields/selectMany/FieldSelectMany.tsx
var Field_selectMany_fromValue = (values) => ({
  $: "selectMany",
  query: "",
  values
});
var Field_selectMany = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WidgetSelectManyUI;
    // DefaultBodyUI = WidgetSelectMany_ListUI
    this.DefaultBodyUI = void 0;
    this.wrap = this.config.wrap ?? false;
    const config = schema.config;
    if (this.serial.values == null) this.serial.values = [];
    this.init(serial, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "selectMany";
  }
  get isCollapsedByDefault() {
    return true;
  }
  get isCollapsible() {
    return true;
  }
  get defaultValue() {
    return this.config.default ?? [];
  }
  get hasChanges() {
    if (this.serial.values.length !== this.defaultValue.length) return true;
    for (const item of this.serial.values) {
      if (!this.defaultValue.find((i) => i.id === item.id)) return true;
    }
    return false;
  }
  reset() {
    this.value = this.defaultValue;
  }
  get choices() {
    const _choices = this.config.choices;
    return typeof _choices === "function" ? _choices(this) : _choices;
  }
  get ownProblems() {
    if (this.serial.values == null) return null;
    const errors = [];
    for (const value of this.serial.values) {
      if (!this.choices.find((choice) => choice.id === value.id)) {
        errors.push(`value ${value.id} (label: ${value.label}) not in choices`);
      }
    }
    if (errors.length > 0) return errors;
    return null;
  }
  setOwnSerial(serial) {
    this.serial.query = serial?.query ?? "";
    const finalVal = serial?.values ?? this.defaultValue;
    this.serial.values = [...finalVal];
  }
  /** un-select given item */
  removeItem(item) {
    const indexOf = this.serial.values.findIndex((i) => i.id === item.id);
    if (indexOf < 0) return console.log(`[\u{1F536}] WidgetSelectMany.removeItem: item not found`);
    this.runInValueTransaction(() => {
      this.serial.values = this.serial.values.filter((v) => v.id !== item.id);
    });
  }
  /** select given item */
  addItem(item) {
    const i = this.serial.values.findIndex((i2) => i2.id === item.id);
    if (i >= 0) return console.log(`[\u{1F536}] WidgetSelectMany.addItem: item already in list`);
    this.runInValueTransaction(() => this.serial.values.push(item));
  }
  /** select item if item was not selected, un-select if item was selected */
  toggleItem(item) {
    this.runInValueTransaction(() => {
      const i = this.serial.values.findIndex((i2) => i2.id === item.id);
      if (i < 0) {
        this.serial.values.push(item);
      } else {
        this.serial.values = this.serial.values.filter((v) => v.id !== item.id);
      }
    });
  }
  get value() {
    const cloned = potatoClone(this.serial.values);
    return new Proxy(cloned, {
      get: (target, prop) => {
        if (typeof prop === "symbol") return target[prop];
        if (prop === "push") return this.addItem.bind(this);
        if (prop === "slice") throw new Error(`you can't manipulate the FieldSelectMany value directly, please use internal api instead`);
        if (prop === "splice") throw new Error(`you can't manipulate the FieldSelectMany value directly, please use internal api instead`);
        if (parseInt(prop, 10) === +prop) {
          return target[+prop];
        }
        return target[prop];
      },
      set: (target, prop, value) => {
        const msg = `[\u{1F536}] Field_selectMany.value: use .addItem() or .removeItem() instead`;
        throw new Error(msg);
      }
    });
  }
  set value(next) {
    if (this.serial.values === next) return;
    this.runInValueTransaction(() => this.serial.values = next);
  }
};
registerFieldClass("selectMany", Field_selectMany);

// src/csuite/fields/selectOne/WidgetSelectOne_CellUI.tsx
import { observer as observer68 } from "mobx-react-lite";
var stupidHueHash = (x) => Array.from(x).reduce((a, b) => a + b.charCodeAt(0), 0) % 360;
var WidgetSelectOne_CellUI = observer68(function WidgetSelectOne_TabUI_(p) {
  const val = p.field.value;
  const hue = val.hue ?? stupidHueHash(val.id);
  if (p.opts?.reveal)
    return /* @__PURE__ */ jsx(RevealUI, { content: () => val.label ?? val.id, trigger: "hover", placement: "right", children: /* @__PURE__ */ jsx(BadgeUI, { hue, children: val.id[0] }) });
  return /* @__PURE__ */ jsx(BadgeUI, { hue, children: val.id });
});

// src/csuite/fields/selectOne/WidgetSelectOne_RollUI.tsx
import { observer as observer69 } from "mobx-react-lite";
var WidgetSelectOne_RollUI = observer69(function WidgetSelectOne_RollUI_(p) {
  const field = p.field;
  const selected = field.serial.val;
  const idx = field.choices.findIndex((c) => c.id === selected?.id);
  const curr = field.value;
  const next = field.choices[(idx + 1) % field.choices.length];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Button,
    {
      subtle: true,
      icon: curr.icon,
      disabled: next == null,
      onClick: () => field.value = next,
      children: curr.label
    }
  ) });
});

// src/csuite/fields/selectOne/WidgetSelectOne_SelectUI.tsx
import { observer as observer70 } from "mobx-react-lite";
var WidgetSelectOne_SelectUI = observer70(function WidgetSelectOne_SelectUI_(p) {
  const field = p.field;
  return /* @__PURE__ */ jsx("div", { tw: "flex-1", children: /* @__PURE__ */ jsx(
    SelectUI,
    {
      tw: [field.ownProblems && "rsx-field-error"],
      getLabelText: (t) => t.label ?? makeLabelFromFieldName(t.id),
      getLabelUI: field.config.getLabelUI,
      getSearchQuery: () => field.serial.query ?? "",
      setSearchQuery: (query) => field.serial.query = query,
      disableLocalFiltering: field.config.disableLocalFiltering,
      options: () => field.choices,
      equalityCheck: (a, b) => a.id === b.id,
      value: () => field.serial.val,
      onChange: (selectOption) => {
        if (selectOption == null) {
          return;
        }
        const next = field.choices.find((c) => c.id === selectOption.id);
        if (next == null) {
          console.log(`\u274C WidgetSelectOneUI: could not find choice for ${JSON.stringify(selectOption)}`);
          return;
        }
        field.value = next;
      }
    },
    field.id
  ) });
});

// src/csuite/fields/selectOne/WidgetSelectOne_TabUI.tsx
import { observer as observer71 } from "mobx-react-lite";
var WidgetSelectOne_TabUI = observer71(function WidgetSelectOne_TabUI_2(p) {
  const field = p.field;
  const selected = field.serial.val;
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: { justifyContent: getJustifyContent(field.config.tabPosition) },
      tw: [
        //
        "flex flex-1",
        (field.config.wrap ?? true) && "flex-wrap",
        "rounded",
        "select-none",
        "gap-x-0.5 gap-y-0"
      ],
      children: field.choices.map((c) => {
        const isSelected = selected?.id === c.id;
        return /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            icon: c.icon,
            value: isSelected,
            display: "button",
            text: c.label ?? c.id,
            onValueChange: (value) => {
              if (value === isSelected) return;
              field.value = c;
            }
          },
          c.id
        );
      })
    }
  );
});

// src/csuite/fields/selectOne/WidgetSelectOneUI.tsx
import { observer as observer72 } from "mobx-react-lite";
var WidgetSelectOneUI = observer72(function WidgetSelectOneUI_(p) {
  const field = p.field;
  const skin = field.config.appearance ?? "select";
  if (skin === "tab") return /* @__PURE__ */ jsx(WidgetSelectOne_TabUI, { field });
  if (skin === "select") return /* @__PURE__ */ jsx(WidgetSelectOne_SelectUI, { field });
  if (skin === "roll") return /* @__PURE__ */ jsx(WidgetSelectOne_RollUI, { field });
  exhaust2(skin);
  return /* @__PURE__ */ jsx(Fragment, { children: "\u274C error" });
});

// src/csuite/fields/selectOne/FieldSelectOne.tsx
var Field_selectOne_fromValue = (val) => ({ $: "selectOne", val });
var FAILOVER_VALUE = Object.freeze({ id: "\u274C", label: "\u274C" });
var Field_selectOne = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WidgetSelectOneUI;
    this.DefaultBodyUI = void 0;
    this.DefaultCellUI = WidgetSelectOne_CellUI;
    this.init(serial, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "selectOne";
  }
  get ownProblems() {
    if (this.serial.val == null) return "no value selected";
    const selected = this.choices.find((c) => c.id === this.serial.val?.id);
    if (selected == null && !this.config.disableLocalFiltering) return "selected value not in choices";
    return;
  }
  get hasChanges() {
    return this.serial.val?.id !== this.defaultValue.id;
  }
  reset() {
    this.value = this.defaultValue;
  }
  get choices() {
    const _choices = this.config.choices;
    if (typeof _choices === "function") {
      if (!this.root.ready) return [];
      return _choices(this);
    }
    return _choices;
  }
  get defaultValue() {
    return this.config.default ?? //
    this.choices[0] ?? FAILOVER_VALUE;
  }
  setOwnSerial(serial) {
    this.serial.val = serial?.val ?? this.defaultValue;
    this.serial.query = serial?.query;
  }
  get value() {
    return this.serial.val ?? this.defaultValue;
  }
  set value(next) {
    if (this.serial.val === next) return;
    this.runInValueTransaction(() => {
      this.serial.val = next;
    });
  }
  renderAsCell(p) {
    return /* @__PURE__ */ jsx(this.DefaultCellUI, { field: this, opts: p, ...p });
  }
};
registerFieldClass("selectOne", Field_selectOne);

// src/csuite/fields/shared/FieldShared.tsx
var Field_shared_fromValue = (val) => ({
  $: "shared"
});
var Field_shared = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = void 0;
    this.DefaultBodyUI = void 0;
    this.init(serial, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "shared";
  }
  setOwnSerial(_serial) {
  }
  get hasChanges() {
    return this.shared.hasChanges ?? false;
  }
  get actualWidgetToDisplay() {
    return this.shared.actualWidgetToDisplay;
  }
  get shared() {
    return this.config.field;
  }
  get ownProblems() {
    return this.shared.ownProblems;
  }
  get value() {
    return this.shared.value;
  }
  set value(val) {
    this.shared.value = val;
  }
};
registerFieldClass("shared", Field_shared);

// src/csuite/fields/size/WidgetSizeTypes.ts
var aspectRatioMap = {
  "15:16": { width: 960, height: 1024 },
  "16:15": { width: 1024, height: 960 },
  "15:17": { width: 960, height: 1088 },
  "17:15": { width: 1088, height: 896 },
  "14:17": { width: 896, height: 1088 },
  "17:14": { width: 1088, height: 896 },
  "7:9": { width: 896, height: 1152 },
  "9:7": { width: 1152, height: 896 },
  "13:18": { width: 832, height: 1152 },
  "18:13": { width: 1152, height: 832 },
  "13:19": { width: 832, height: 1216 },
  "19:13": { width: 1216, height: 832 },
  "3:5": { width: 768, height: 1280 },
  "5:3": { width: 1280, height: 768 },
  "4:7": { width: 768, height: 1344 },
  "7:4": { width: 1344, height: 768 },
  "11:21": { width: 704, height: 1344 },
  "21:11": { width: 1344, height: 704 },
  "1:2": { width: 704, height: 1408 },
  "2:1": { width: 1408, height: 704 },
  "16:9": { width: 1024, height: 576 },
  "9:16": { width: 576, height: 1024 },
  "4:3": { width: 1024, height: 768 },
  "3:4": { width: 768, height: 1024 },
  "3:2": { width: 1024, height: 683 },
  "2:3": { width: 683, height: 1024 },
  "1:1": { width: 1024, height: 1024 }
};

// src/csuite/fields/size/WidgetSizeUI.tsx
import { observer as observer73 } from "mobx-react-lite";
var WigetSize_LineUI = observer73(function WigetSize_LineUI_(p) {
  return /* @__PURE__ */ jsx(WidgetSizeX_LineUI, { size: p.field, bounds: p.field.config });
});
var WigetSize_BlockUI = observer73(function WigetSize_BlockUI_(p) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(WigetSizeXUI, { size: p.field, bounds: p.field.config }) });
});
var WidgetSizeX_LineUI = observer73(function WidgetSize_LineUI_(p) {
  const uist = p.size;
  const modelBtn = (model) => /* @__PURE__ */ jsx(
    InputBoolToggleButtonUI,
    {
      tw: "w-input",
      value: uist.desiredModelType == model,
      onValueChange: () => uist.setModelType(model),
      text: model
    }
  );
  return /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-0.5", children: /* @__PURE__ */ jsxs(
    Frame,
    {
      border: { contrast: 0.05 },
      tw: ["h-input w-full h-full flex gap-2 items-center overflow-clip"],
      style: { padding: "0px" },
      children: [
        /* @__PURE__ */ jsxs("div", { tw: "flex", children: [
          modelBtn("1.5"),
          modelBtn("xl")
        ] }),
        /* @__PURE__ */ jsx(
          InputNumberUI,
          {
            min: p.bounds?.min ?? 128,
            max: p.bounds?.max ?? 4096,
            step: p.bounds?.step ?? 32,
            mode: "int",
            value: uist.width,
            hideSlider: true,
            onValueChange: (next) => uist.setWidth(next),
            forceSnap: true,
            text: "Width",
            suffix: "px"
          }
        ),
        /* @__PURE__ */ jsx("div", { tw: "h-full", style: { width: "1px" } }),
        /* @__PURE__ */ jsx(
          InputNumberUI,
          {
            min: p.bounds?.min ?? 128,
            max: p.bounds?.max ?? 4096,
            step: p.bounds?.step ?? 32,
            hideSlider: true,
            mode: "int",
            value: uist.height,
            onValueChange: (next) => uist.setHeight(next),
            forceSnap: true,
            text: "Height",
            suffix: "px"
          }
        ),
        /* @__PURE__ */ jsx("div", { tw: "h-full", style: { width: "1px" } }),
        /* @__PURE__ */ jsx(AspectRatioSquareUI, { sizeHelper: uist }),
        /* @__PURE__ */ jsx("div", { tw: "h-full", style: { width: "1px" } }),
        /* @__PURE__ */ jsx(AspectLockButtonUI, { sizeHelper: uist })
      ]
    }
  ) });
});
var AspectLockButtonUI = observer73(function AspectLockButtonUI_(p) {
  const uist = p.sizeHelper;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      active: uist.isAspectRatioLocked,
      style: { border: "unset", borderRadius: "0px" },
      icon: uist.isAspectRatioLocked ? "mdiLink" : "mdiLinkOff",
      onMouseDown: (ev) => {
        uist.isAspectRatioLocked = !uist.isAspectRatioLocked;
        if (!uist.isAspectRatioLocked) return;
        if (uist.wasHeightAdjustedLast) uist.setHeight(uist.height);
        else uist.setWidth(uist.width);
      }
    }
  );
});
var AspectRatioSquareUI = observer73(function AspectRatioSquareUI_(p) {
  const uist = p.sizeHelper;
  const ratioDisplaySize = 26;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      square: true,
      size: "xs",
      border: 10,
      tw: ["flex", "overflow-clip", "items-center justify-center", "cursor-pointer"],
      style: { borderRadius: "0px" },
      onClick: () => uist.flip(),
      hover: true,
      children: /* @__PURE__ */ jsx(
        Frame,
        {
          base: 10,
          tw: "!relative w-full h-full",
          style: {
            //
            width: "100%",
            height: "100%",
            borderRadius: "0px",
            // Use transform here because it works with floats and will not cause popping/mis-alignments.
            transform: `
                 scaleX(${uist.width < uist.height ? Math.round(uist.width / uist.height * ratioDisplaySize) / ratioDisplaySize : "1"})
                 scaleY(${uist.height < uist.width ? Math.round(uist.height / uist.width * ratioDisplaySize) / ratioDisplaySize : "1"})`
          },
          square: true
        }
      )
    }
  );
});
var WigetSizeXUI = observer73(function WigetSizeXUI_(p) {
  const uist = p.size;
  const resoBtn = (ar) => /* @__PURE__ */ jsx(
    InputBoolUI,
    {
      display: "button",
      value: uist.desiredAspectRatio == ar,
      onValueChange: () => uist.setAspectRatio(ar),
      text: ar
    }
  );
  const portrait = uist.height / uist.width > 1;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      children: /* @__PURE__ */ jsx("div", { tw: "flex", children: /* @__PURE__ */ jsxs("div", { tw: "ml-auto flex flex-wrap items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("div", { tw: "join", children: resoBtn("1:1") }),
        /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
          resoBtn("16:9"),
          resoBtn("9:16")
        ] }),
        /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
          resoBtn("4:3"),
          resoBtn("3:4")
        ] }),
        /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
          resoBtn("3:2"),
          resoBtn("2:3")
        ] }),
        p.size.desiredModelType === "xl" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
            resoBtn("16:15"),
            resoBtn("15:16")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
            resoBtn("17:15"),
            resoBtn("15:17")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
            resoBtn("9:7"),
            resoBtn("7:9")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
            resoBtn("18:13"),
            resoBtn("13:18")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
            resoBtn("19:13"),
            resoBtn("13:19")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
            resoBtn("7:4"),
            resoBtn("4:7")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
            resoBtn("21:11"),
            resoBtn("11:21")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join flex flex-col", children: [
            resoBtn("2:1"),
            resoBtn("1:2")
          ] })
        ] })
      ] }) })
    }
  );
});

// src/csuite/fields/size/FieldSize.tsx
var Field_size_fromValue = (val) => ({
  ...val
});
var Field_size = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.DefaultHeaderUI = WigetSize_LineUI;
    this.DefaultBodyUI = WigetSize_BlockUI;
    this.desiredModelType = "1.5";
    this.desiredAspectRatio = "1:1";
    this.isAspectRatioLocked = false;
    this.wasHeightAdjustedLast = true;
    this.init(serial, {
      sizeHelper: false,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  static {
    this.type = "size";
  }
  setOwnSerial(serial) {
    const config = this.config;
    this.serial.aspectRatio = serial?.aspectRatio ?? config.default?.aspectRatio ?? "1:1";
    this.serial.modelType = serial?.modelType ?? config.default?.modelType ?? "SD1.5 512";
    this.serial.width = serial?.width ?? config.default?.width ?? parseInt(this.serial.modelType.split(" ")[1]);
    this.serial.height = serial?.height ?? config.default?.height ?? parseInt(this.serial.modelType.split(" ")[1]);
  }
  get ownProblems() {
    return null;
  }
  get defaultValue() {
    const config = this.schema.config;
    const aspectRatio = config.default?.aspectRatio ?? "1:1";
    const modelType = config.default?.modelType ?? "SD1.5 512";
    const width = config.default?.width ?? parseInt(modelType.split(" ")[1]);
    const height = config.default?.height ?? parseInt(modelType.split(" ")[1]);
    return { $: "size", aspectRatio, modelType, height, width };
  }
  get hasChanges() {
    const def = this.defaultValue;
    if (this.serial.width !== def.width) return true;
    if (this.serial.height !== def.height) return true;
    if (this.serial.aspectRatio !== def.aspectRatio) return true;
    return false;
  }
  reset() {
    this.value = this.defaultValue;
  }
  get width() {
    return this.serial.width;
  }
  get height() {
    return this.serial.height;
  }
  set width(next) {
    if (next === this.serial.width) return;
    this.runInValueTransaction(() => this.serial.width = next);
  }
  set height(next) {
    if (next === this.serial.height) return;
    this.runInValueTransaction(() => this.serial.height = next);
  }
  setWidth(width) {
    this.width = width;
    this.wasHeightAdjustedLast = false;
    if (this.isAspectRatioLocked) {
      this.updateHeightBasedOnAspectRatio();
    }
  }
  setHeight(height) {
    this.height = height;
    this.wasHeightAdjustedLast = true;
    if (this.isAspectRatioLocked) {
      this.updateWidthBasedOnAspectRatio();
    }
  }
  get value() {
    return this.serial;
  }
  set value(val) {
    if (val.width === this.serial.width && //
    val.height === this.serial.height && val.aspectRatio === this.serial.aspectRatio) {
      return;
    }
    this.runInValueTransaction(() => {
      Object.assign(this.serial, val);
    });
  }
  idealSizeforModelType(model) {
    if (model === "xl") return { width: 1024, height: 1024 };
    if (model === "2.0") return { width: 768, height: 768 };
    if (model === "2.1") return { width: 768, height: 768 };
    if (model === "1.5") return { width: 512, height: 512 };
    if (model === "1.4") return { width: 512, height: 512 };
    return { width: this.width, height: this.height };
  }
  /** flip width and height */
  flip() {
    if (this.width === this.height) return;
    this.runInValueTransaction(() => {
      const prevWidth = this.width;
      this.width = this.height;
      this.height = prevWidth;
    });
  }
  toAspectRatio(realAspectRatio) {
    const ratio = parseFloatNoRoundingErr(realAspectRatio, 2);
    if (ratio === parseFloatNoRoundingErr(1 / 1, 2)) return "1:1";
    if (ratio === parseFloatNoRoundingErr(16 / 9, 2)) return "16:9";
    if (ratio === parseFloatNoRoundingErr(4 / 3, 2)) return "4:3";
    if (ratio === parseFloatNoRoundingErr(16 / 15, 2)) return "16:15";
    if (ratio === parseFloatNoRoundingErr(17 / 15, 2)) return "17:15";
    if (ratio === parseFloatNoRoundingErr(17 / 14, 2)) return "17:14";
    if (ratio === parseFloatNoRoundingErr(9 / 7, 2)) return "9:7";
    if (ratio === parseFloatNoRoundingErr(18 / 13, 2)) return "18:13";
    if (ratio === parseFloatNoRoundingErr(19 / 13, 2)) return "19:13";
    if (ratio === parseFloatNoRoundingErr(5 / 3, 2)) return "5:3";
    if (ratio === parseFloatNoRoundingErr(7 / 4, 2)) return "7:4";
    if (ratio === parseFloatNoRoundingErr(21 / 11, 2)) return "21:11";
    if (ratio === parseFloatNoRoundingErr(2 / 1, 2)) return "2:1";
    return "1:1";
  }
  get realAspectRatio() {
    return this.width / this.height;
  }
  setModelType(modelType) {
    this.desiredModelType = modelType;
    const itgt = this.idealSizeforModelType(modelType);
    const diagPrev = Math.sqrt(this.width ** 2 + this.height ** 2);
    const diagNext = Math.sqrt(itgt.width ** 2 + itgt.height ** 2);
    const factor = diagNext / diagPrev;
    console.log({ modelType, idealTarget: itgt, avg: diagPrev, avg2: diagNext, factor });
    this.width = Math.round(this.width * factor);
    this.height = Math.round(this.height * factor);
    console.log(`final is w=${this.width} x h=${this.height}`);
    console.log(`fixed avg is ${Math.sqrt(this.width ** 2 + this.height ** 2)}`);
  }
  setAspectRatio(aspectRatio) {
    this.desiredAspectRatio = aspectRatio;
    const definedHeight = aspectRatioMap[this.desiredAspectRatio]?.height;
    const definedWidth = aspectRatioMap[this.desiredAspectRatio]?.width;
    if (definedHeight && definedWidth) {
      this.height = definedHeight;
      this.width = definedWidth;
    } else if (this.wasHeightAdjustedLast) {
      this.updateWidthBasedOnAspectRatio();
    } else {
      this.updateHeightBasedOnAspectRatio();
    }
  }
  updateHeightBasedOnAspectRatio() {
    const [widthRatio, heightRatio] = this.desiredAspectRatio.split(":").map(Number);
    this.height = Math.round(this.width * (heightRatio / widthRatio));
  }
  updateWidthBasedOnAspectRatio() {
    const [widthRatio, heightRatio] = this.desiredAspectRatio.split(":").map(Number);
    this.width = Math.round(this.height * (widthRatio / heightRatio));
  }
};
registerFieldClass("size", Field_size);

// src/csuite/kolor/getLCHFromStringAsString.tsx
import Color2 from "colorjs.io";
function getLCHFromStringAsString(str) {
  try {
    const color = new Color2(str);
    const [l, c, h_] = color.oklch;
    const h = isNaN(h_) ? 0 : h_;
    return `lch(${fmtNum1(l * 100)}% ${fmtNum2(c)} ${fmtNum1(h)})`;
  } catch (e) {
    console.error(`[\u{1F534}] getLCHFromStringAsString FAILURE (string is: "${str}")`);
    return `lch(.5 1 0)`;
  }
}
var fmtNum2 = (n) => {
  const s = n.toFixed(2);
  return s.endsWith(".00") ? s.slice(0, -3) : s.endsWith("0") ? s.slice(0, -1) : s;
};
var fmtNum1 = (n) => {
  const s = n.toFixed(1);
  return s.endsWith(".0") ? s.slice(0, -2) : s;
};

// src/csuite/input-string/InputStringUI.tsx
import { observer as observer74 } from "mobx-react-lite";
import { useState as useState2 } from "react";
var InputStringUI = observer74(function WidgetStringUI_(p) {
  const value = p.getValue();
  const isBuffered = Boolean(p.buffered);
  const temporaryValue = p.buffered?.getTemporaryValue?.();
  const isDirty = isBuffered && temporaryValue != null && temporaryValue !== value;
  const [reveal, setReveal] = useState2(false);
  let inputTailwind;
  let visualHelper;
  switch (p.type) {
    case "color":
      inputTailwind = "absolute w-full h-full !bg-transparent opacity-0 !p-0";
      visualHelper = /* @__PURE__ */ jsx(
        Frame,
        {
          tw: "w-full h-full flex items-center font-mono whitespace-nowrap text-[0.6rem]",
          base: value ? value : void 0,
          text: { contrast: 1 },
          children: getLCHFromStringAsString(value)
        }
      );
      break;
    default:
      inputTailwind = "w-full h-full !outline-none bg-transparent";
      break;
  }
  const csuite = useCSuite();
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      base: { contrast: csuite.inputContrast ?? 0.05 },
      text: { contrast: 1, chromaBlend: 1 },
      hover: true,
      border: isDirty ? { contrast: 0.3, hue: knownOKLCHHues.warning, chroma: 0.2 } : { contrast: csuite.inputBorder },
      tw: ["h-input w-full flex flex-1 items-center relative text-sm rounded-sm"],
      onMouseDown: (ev) => {
        if (ev.button == 1) {
          const textInput = ev.currentTarget.querySelector('input[type="text"');
          textInput.focus();
        }
      },
      children: [
        visualHelper,
        p.icon != null && /* @__PURE__ */ jsx(
          IkonOf,
          {
            tw: "mx-1",
            size: "1.2rem",
            name: typeof p.icon === "string" ? p.icon : "mdiText"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            tw: ["px-2", inputTailwind],
            type: reveal ? "text" : p.type,
            pattern: p.pattern,
            placeholder: p.placeholder,
            autoFocus: p.autofocus,
            value: p.buffered ? temporaryValue ?? value : value,
            onChange: (ev) => {
              if (p.buffered) p.buffered.setTemporaryValue(ev.target.value);
              else p.setValue(ev.currentTarget.value);
            },
            onDragStart: (ev) => ev.preventDefault(),
            onFocus: (ev) => {
              p.buffered?.setTemporaryValue(p.getValue() ?? "");
              ev.currentTarget.select();
            },
            onBlur: () => {
              const tempValue = p.buffered?.getTemporaryValue?.();
              if (tempValue != null) p.setValue(tempValue);
            },
            onKeyDown: (ev) => {
              if (ev.key === "Enter") {
                ev.currentTarget.blur();
              } else if (ev.key === "Escape") {
                if (!p.buffered && temporaryValue) p.setValue(temporaryValue);
                p.buffered?.setTemporaryValue(null);
                ev.currentTarget.blur();
              }
            }
          }
        ),
        p.type === "password" && /* @__PURE__ */ jsx(
          Button,
          {
            subtle: true,
            borderless: true,
            icon: reveal ? "mdiEyeOff" : "mdiEye",
            onClick: () => setReveal(!reveal),
            tw: "mx-1 cursor-pointer",
            square: true
          }
        )
      ]
    }
  );
});

// src/csuite/fields/string/WidgetStringUI.tsx
import { observer as observer75 } from "mobx-react-lite";
var WidgetString_TextareaHeaderUI = observer75(function WidgetString_TextareaHeaderUI_(p) {
  const field = p.field;
  if (!field.config.textarea) return null;
  if (!p.field.serial.collapsed) return null;
  return /* @__PURE__ */ jsx("div", { tw: "line-clamp-1 italic opacity-50", children: JSON.stringify(p.field.value) });
});
var WidgetString_TextareaBodyUI = observer75(function WidgetString_TextareaBodyUI_(p) {
  const field = p.field;
  if (!field.config.textarea) return null;
  const val = field.value;
  const csuite = useCSuite();
  return /* @__PURE__ */ jsx(Frame, { base: { contrast: csuite.inputContrast ?? 0.05 }, expand: true, children: /* @__PURE__ */ jsx(
    "textarea",
    {
      style: {
        /* ...p.widget.config.style, */
        lineHeight: "1.3rem",
        resize: p.field.config.resize ?? "both"
      },
      tw: "csuite-input w-full p-2",
      placeholder: field.config.placeHolder,
      rows: 3,
      value: val,
      onChange: (ev) => {
        field.value = ev.target.value;
      }
    }
  ) });
});
var WidgetString_HeaderUI = observer75(function WidgetStringUI_2(p) {
  const field = p.field;
  const config = field.config;
  return /* @__PURE__ */ jsx(
    InputStringUI,
    {
      icon: p.field.config.innerIcon,
      type: config.inputType,
      pattern: config.pattern,
      className: config.className,
      getValue: () => field.value,
      setValue: (value) => field.value = value,
      buffered: field.config.buffered ? {
        getTemporaryValue: () => field.temporaryValue,
        setTemporaryValue: (value) => void (field.temporaryValue = value)
      } : void 0
    }
  );
});

// src/csuite/fields/string/FieldString.tsx
var Field_string_fromValue = (val) => ({
  $: "str",
  value: val
});
var Field_string = class extends Field {
  constructor(repo, root, parent, schema, serial) {
    super(repo, root, parent, schema);
    this.UITextarea = () => /* @__PURE__ */ jsx(WidgetString_TextareaBodyUI, { field: this });
    this.UIInputText = () => /* @__PURE__ */ jsx(WidgetString_HeaderUI, { field: this });
    this.DefaultBodyUI = void 0;
    this.temporaryValue = null;
    this.init(serial);
  }
  static {
    this.type = "str";
  }
  get DefaultHeaderUI() {
    if (this.config.textarea) {
      if (this.isCollapsed) return WidgetString_TextareaHeaderUI;
      return WidgetString_TextareaBodyUI;
    } else {
      return WidgetString_HeaderUI;
    }
  }
  get isCollapsible() {
    if (this.config.textarea) return true;
    return false;
  }
  get ownProblems() {
    const min = this.config.minLength;
    if (min != null && this.value.length < min) return `Value is too short (must be at least ${min} chars)`;
    const max = this.config.maxLength;
    if (max != null && this.value.length > max) return `Value is too long (must be at most ${max} chars)`;
    const pattern = this.config.pattern;
    if (pattern != null) {
      const reg = new RegExp(pattern).test(this.value);
      if (!reg) return `Value does not match pattern`;
    }
    return null;
  }
  setTemporaryValue(next) {
    this.temporaryValue = next;
  }
  get animateResize() {
    if (this.config.textarea) return false;
    return true;
  }
  setOwnSerial(serial) {
    this.serial.value = serial?.value ?? serial?.val ?? this.defaultValue;
  }
  evalDefaultValue() {
    const d = this.config.default;
    if (d == null) return "";
    if (typeof d === "function") return d();
    if (typeof d === "string") return d;
    return JSON.stringify(d);
  }
  get defaultValue() {
    return this.evalDefaultValue() ?? "";
  }
  get hasChanges() {
    return this.value !== this.defaultValue;
  }
  get value() {
    return this.serial.value ?? this.defaultValue;
  }
  set value(next) {
    const nextStrVal = typeof next === "string" ? next : JSON.stringify(next);
    if (this.serial.value === nextStrVal) return;
    this.runInValueTransaction(() => this.serial.value = nextStrVal);
  }
};
registerFieldClass("str", Field_string);

// src/csuite/openrouter/OpenRouter_infos.ts
var openRouterInfos = {
  "openrouter/auto": {
    id: "openrouter/auto",
    name: "Auto (best for prompt)",
    pricing: { prompt: "-1", completion: "-1" },
    context_length: 128e3,
    architecture: { tokenizer: "Router", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: null
  },
  "mistralai/mistral-7b-instruct": {
    id: "mistralai/mistral-7b-instruct",
    name: "Mistral 7B Instruct",
    pricing: { prompt: "0", completion: "0" },
    context_length: 8192,
    architecture: { tokenizer: "Mistral", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "mistralai/mixtral-8x7b-instruct": {
    id: "mistralai/mixtral-8x7b-instruct",
    name: "Mistral 8x7b",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32e3,
    architecture: { tokenizer: "Mistral", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "mistralai/mistral-large": {
    id: "mistralai/mistral-large",
    name: "Mistral Large",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32e3,
    architecture: { tokenizer: "Mistral", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "huggingfaceh4/zephyr-7b-beta": {
    id: "huggingfaceh4/zephyr-7b-beta",
    name: "Hugging Face: Zephyr 7B",
    pricing: { prompt: "0", completion: "0" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "zephyr" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "openchat/openchat-7b": {
    id: "openchat/openchat-7b",
    name: "OpenChat 3.5",
    pricing: { prompt: "0", completion: "0" },
    context_length: 8192,
    architecture: { tokenizer: "Mistral", instruct_type: "openchat" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "undi95/toppy-m-7b": {
    id: "undi95/toppy-m-7b",
    name: "Toppy M 7B",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32768,
    architecture: { tokenizer: "Mistral", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 2048 },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "gryphe/mythomist-7b": {
    id: "gryphe/mythomist-7b",
    name: "MythoMist 7B",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32768,
    architecture: { tokenizer: "Mistral", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 2048 },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "nousresearch/nous-capybara-34b": {
    id: "nousresearch/nous-capybara-34b",
    name: "Nous: Capybara 34B",
    pricing: { prompt: "0.000002", completion: "0.000002" },
    context_length: 32e3,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1569799", completion_tokens: "1569799" }
  },
  "jebcarter/psyfighter-13b": {
    id: "jebcarter/psyfighter-13b",
    name: "Psyfighter 13B",
    pricing: { prompt: "0.000001", completion: "0.000001" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "3139598" }
  },
  "nousresearch/nous-hermes-llama2-13b": {
    id: "nousresearch/nous-hermes-llama2-13b",
    name: "Nous: Hermes 13B",
    pricing: { prompt: "0.00000015", completion: "0.00000015" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "20930657", completion_tokens: "20930657" }
  },
  "phind/phind-codellama-34b": {
    id: "phind/phind-codellama-34b",
    name: "Phind: CodeLlama 34B v2",
    pricing: { prompt: "0.0000004", completion: "0.0000004" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "7848996", completion_tokens: "7848996" }
  },
  "intel/neural-chat-7b": {
    id: "intel/neural-chat-7b",
    name: "Neural Chat 7B v3.1",
    pricing: { prompt: "0.000005", completion: "0.000005" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "neural" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "627919", completion_tokens: "627919" }
  },
  "haotian-liu/llava-13b": {
    id: "haotian-liu/llava-13b",
    name: "Llava 13B",
    pricing: { prompt: "0.000005", completion: "0.000005" },
    context_length: 2048,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "627919", completion_tokens: "627919" }
  },
  "meta-llama/llama-2-13b-chat": {
    id: "meta-llama/llama-2-13b-chat",
    name: "Meta: Llama v2 13B Chat",
    pricing: { prompt: "0.0000002345", completion: "0.0000002345" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "13388480", completion_tokens: "13388480" }
  },
  "alpindale/goliath-120b": {
    id: "alpindale/goliath-120b",
    name: "Goliath 120B",
    pricing: { prompt: "0.00000703125", completion: "0.00000703125" },
    context_length: 6144,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "446520", completion_tokens: "446520" }
  },
  "lizpreciatior/lzlv-70b-fp16-hf": {
    id: "lizpreciatior/lzlv-70b-fp16-hf",
    name: "lzlv 70B",
    pricing: { prompt: "0.00000056", completion: "0.00000076" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "5606426", completion_tokens: "4131050" }
  },
  "openai/gpt-3.5-turbo": {
    id: "openai/gpt-3.5-turbo",
    name: "OpenAI: GPT-3.5 Turbo",
    pricing: { prompt: "0.000001", completion: "0.000002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "1569799" }
  },
  "openai/gpt-3.5-turbo-1106": {
    id: "openai/gpt-3.5-turbo-1106",
    name: "OpenAI: GPT-3.5 Turbo 16k (preview)",
    pricing: { prompt: "0.000001", completion: "0.000002" },
    context_length: 16385,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: 4096 },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "1569799" }
  },
  "openai/gpt-3.5-turbo-0301": {
    id: "openai/gpt-3.5-turbo-0301",
    name: "OpenAI: GPT-3.5 Turbo (older v0301)",
    pricing: { prompt: "0.000001", completion: "0.000002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "1569799" }
  },
  "openai/gpt-3.5-turbo-16k": {
    id: "openai/gpt-3.5-turbo-16k",
    name: "OpenAI: GPT-3.5 Turbo 16k",
    pricing: { prompt: "0.000003", completion: "0.000004" },
    context_length: 16385,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1046532", completion_tokens: "784899" }
  },
  "openai/gpt-4-1106-preview": {
    id: "openai/gpt-4-1106-preview",
    name: "OpenAI: GPT-4 Turbo (preview)",
    pricing: { prompt: "0.00001", completion: "0.00003" },
    context_length: 128e3,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: 4096 },
    per_request_limits: { prompt_tokens: "313959", completion_tokens: "104653" }
  },
  "openai/gpt-4": {
    id: "openai/gpt-4",
    name: "OpenAI: GPT-4",
    pricing: { prompt: "0.00003", completion: "0.00006" },
    context_length: 8191,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "104653", completion_tokens: "52326" }
  },
  "openai/gpt-4-0314": {
    id: "openai/gpt-4-0314",
    name: "OpenAI: GPT-4 (older v0314)",
    pricing: { prompt: "0.00003", completion: "0.00006" },
    context_length: 8191,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "104653", completion_tokens: "52326" }
  },
  "openai/gpt-4-32k": {
    id: "openai/gpt-4-32k",
    name: "OpenAI: GPT-4 32k",
    pricing: { prompt: "0.00006", completion: "0.00012" },
    context_length: 32767,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "52326", completion_tokens: "26163" }
  },
  "openai/gpt-4-32k-0314": {
    id: "openai/gpt-4-32k-0314",
    name: "OpenAI: GPT-4 32k (older v0314)",
    pricing: { prompt: "0.00006", completion: "0.00012" },
    context_length: 32767,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "52326", completion_tokens: "26163" }
  },
  "openai/gpt-4-vision-preview": {
    id: "openai/gpt-4-vision-preview",
    name: "OpenAI: GPT-4 Vision (preview)",
    pricing: { prompt: "0.00001", completion: "0.00003" },
    context_length: 128e3,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: 4096 },
    per_request_limits: { prompt_tokens: "313959", completion_tokens: "104653" }
  },
  "openai/text-davinci-002": {
    id: "openai/text-davinci-002",
    name: "OpenAI: Davinci 2",
    pricing: { prompt: "0.00002", completion: "0.00002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "156979", completion_tokens: "156979" }
  },
  "openai/gpt-3.5-turbo-instruct": {
    id: "openai/gpt-3.5-turbo-instruct",
    name: "OpenAI: GPT-3.5 Turbo Instruct",
    pricing: { prompt: "0.0000015", completion: "0.000002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "2093065", completion_tokens: "1569799" }
  },
  "google/palm-2-chat-bison": {
    id: "google/palm-2-chat-bison",
    name: "Google: PaLM 2 Chat",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 9216,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 1024 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "google/palm-2-codechat-bison": {
    id: "google/palm-2-codechat-bison",
    name: "Google: PaLM 2 Code Chat",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 7168,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 1024 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "google/palm-2-chat-bison-32k": {
    id: "google/palm-2-chat-bison-32k",
    name: "Google: PaLM 2 Chat 32k",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 32e3,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 8192 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "google/palm-2-codechat-bison-32k": {
    id: "google/palm-2-codechat-bison-32k",
    name: "Google: PaLM 2 Code Chat 32k",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 32e3,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 8192 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "perplexity/pplx-70b-online": {
    id: "perplexity/pplx-70b-online",
    name: "Perplexity: PPLX 70B Online",
    pricing: { prompt: "0", completion: "0.0000028" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "perplexity/pplx-7b-online": {
    id: "perplexity/pplx-7b-online",
    name: "Perplexity: PPLX 7B Online",
    pricing: { prompt: "0", completion: "0.00000028" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "perplexity/pplx-7b-chat": {
    id: "perplexity/pplx-7b-chat",
    name: "Perplexity: PPLX 7B Chat",
    pricing: { prompt: "0.00000007", completion: "0.00000028" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "44851408", completion_tokens: "11212852" }
  },
  "perplexity/pplx-70b-chat": {
    id: "perplexity/pplx-70b-chat",
    name: "Perplexity: PPLX 70B Chat",
    pricing: { prompt: "0.0000007", completion: "0.0000028" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "4485140", completion_tokens: "1121285" }
  },
  "meta-llama/llama-2-70b-chat": {
    id: "meta-llama/llama-2-70b-chat",
    name: "Meta: Llama v2 70B Chat",
    pricing: { prompt: "0.0000007", completion: "0.00000095" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "4485140", completion_tokens: "3304840" }
  },
  "nousresearch/nous-hermes-llama2-70b": {
    id: "nousresearch/nous-hermes-llama2-70b",
    name: "Nous: Hermes 70B",
    pricing: { prompt: "0.0000009", completion: "0.0000009" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3488442", completion_tokens: "3488442" }
  },
  "meta-llama/codellama-34b-instruct": {
    id: "meta-llama/codellama-34b-instruct",
    name: "Meta: CodeLlama 34B Instruct",
    pricing: { prompt: "0.00000035", completion: "0.0000014" },
    context_length: 16384,
    architecture: { tokenizer: "Llama2", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "8970281", completion_tokens: "2242570" }
  },
  "jondurbin/airoboros-l2-70b": {
    id: "jondurbin/airoboros-l2-70b",
    name: "Airoboros 70B",
    pricing: { prompt: "0.0000007", completion: "0.00000095" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "airoboros" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "4485140", completion_tokens: "3304840" }
  },
  "migtissera/synthia-70b": {
    id: "migtissera/synthia-70b",
    name: "Synthia 70B",
    pricing: { prompt: "0.0000065625", completion: "0.0000065625" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "478415", completion_tokens: "478415" }
  },
  "open-orca/mistral-7b-openorca": {
    id: "open-orca/mistral-7b-openorca",
    name: "Mistral OpenOrca 7B",
    pricing: { prompt: "0.0000002", completion: "0.0000002" },
    context_length: 8192,
    architecture: { tokenizer: "Mistral", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "15697993", completion_tokens: "15697993" }
  },
  "teknium/openhermes-2-mistral-7b": {
    id: "teknium/openhermes-2-mistral-7b",
    name: "OpenHermes 2 Mistral 7B",
    pricing: { prompt: "0.0000002", completion: "0.0000002" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "15697993", completion_tokens: "15697993" }
  },
  "teknium/openhermes-2.5-mistral-7b": {
    id: "teknium/openhermes-2.5-mistral-7b",
    name: "OpenHermes 2.5 Mistral 7B",
    pricing: { prompt: "0.0000002", completion: "0.0000002" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "15697993", completion_tokens: "15697993" }
  },
  "pygmalionai/mythalion-13b": {
    id: "pygmalionai/mythalion-13b",
    name: "Pygmalion: Mythalion 13B",
    pricing: { prompt: "0.000001125", completion: "0.000001125" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 250 },
    per_request_limits: { prompt_tokens: "2790754", completion_tokens: "2790754" }
  },
  "undi95/remm-slerp-l2-13b": {
    id: "undi95/remm-slerp-l2-13b",
    name: "ReMM SLERP 13B",
    pricing: { prompt: "0.000001125", completion: "0.000001125" },
    context_length: 6144,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 250 },
    per_request_limits: { prompt_tokens: "2790754", completion_tokens: "2790754" }
  },
  "xwin-lm/xwin-lm-70b": {
    id: "xwin-lm/xwin-lm-70b",
    name: "Xwin 70B",
    pricing: { prompt: "0.0000065625", completion: "0.0000065625" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "478415", completion_tokens: "478415" }
  },
  "gryphe/mythomax-l2-13b-8k": {
    id: "gryphe/mythomax-l2-13b-8k",
    name: "MythoMax 13B 8k",
    pricing: { prompt: "0.000001125", completion: "0.000001125" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 250 },
    per_request_limits: { prompt_tokens: "2790754", completion_tokens: "2790754" }
  },
  "neversleep/noromaid-20b": {
    id: "neversleep/noromaid-20b",
    name: "Noromaid 20B",
    pricing: { prompt: "0.00000225", completion: "0.00000225" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "1395377", completion_tokens: "1395377" }
  },
  "anthropic/claude-2": {
    id: "anthropic/claude-2",
    name: "Anthropic: Claude v2.1",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 2e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-2.0": {
    id: "anthropic/claude-2.0",
    name: "Anthropic: Claude v2.0",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-instant-v1": {
    id: "anthropic/claude-instant-v1",
    name: "Anthropic: Claude Instant v1",
    pricing: { prompt: "0.00000163", completion: "0.00000551" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1926134", completion_tokens: "569800" }
  },
  "anthropic/claude-v1": {
    id: "anthropic/claude-v1",
    name: "Anthropic: Claude v1",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 9e3,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-1.2": {
    id: "anthropic/claude-1.2",
    name: "Anthropic: Claude (older v1)",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 9e3,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-instant-v1-100k": {
    id: "anthropic/claude-instant-v1-100k",
    name: "Anthropic: Claude Instant 100k v1",
    pricing: { prompt: "0.00000163", completion: "0.00000551" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1926134", completion_tokens: "569800" }
  },
  "anthropic/claude-v1-100k": {
    id: "anthropic/claude-v1-100k",
    name: "Anthropic: Claude 100k v1",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-instant-1.0": {
    id: "anthropic/claude-instant-1.0",
    name: "Anthropic: Claude Instant (older v1)",
    pricing: { prompt: "0.00000163", completion: "0.00000551" },
    context_length: 9e3,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1926134", completion_tokens: "569800" }
  },
  "mancer/weaver": {
    id: "mancer/weaver",
    name: "Mancer: Weaver (alpha)",
    pricing: { prompt: "0.0000045", completion: "0.0000045" },
    context_length: 8e3,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 350 },
    per_request_limits: { prompt_tokens: "697688", completion_tokens: "697688" }
  },
  "gryphe/mythomax-l2-13b": {
    id: "gryphe/mythomax-l2-13b",
    name: "MythoMax 13B",
    pricing: { prompt: "0.0000006", completion: "0.0000006" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "5232664", completion_tokens: "5232664" }
  }
};

// src/csuite/simple/SimpleBuilder.ts
import { makeAutoObservable as makeAutoObservable13 } from "mobx";
var SimpleBuilder = class {
  constructor() {
    makeAutoObservable13(this, {});
  }
  time(config = {}) {
    return new SimpleSchema(Field_string, { inputType: "time", ...config });
  }
  date(config = {}) {
    return new SimpleSchema(Field_string, { inputType: "date", ...config });
  }
  datetime(config = {}) {
    return new SimpleSchema(Field_string, { inputType: "datetime-local", ...config });
  }
  password(config = {}) {
    return new SimpleSchema(Field_string, { inputType: "password", ...config });
  }
  email(config = {}) {
    return new SimpleSchema(Field_string, { inputType: "email", ...config });
  }
  url(config = {}) {
    return new SimpleSchema(Field_string, { inputType: "url", ...config });
  }
  string(config = {}) {
    return new SimpleSchema(Field_string, config);
  }
  text(config = {}) {
    return new SimpleSchema(Field_string, config);
  }
  textarea(config = {}) {
    return new SimpleSchema(Field_string, { textarea: true, ...config });
  }
  boolean(config = {}) {
    return new SimpleSchema(Field_bool, config);
  }
  bool(config = {}) {
    return new SimpleSchema(Field_bool, config);
  }
  size(config = {}) {
    return new SimpleSchema(Field_size, config);
  }
  seed(config = {}) {
    return new SimpleSchema(Field_seed, config);
  }
  color(config = {}) {
    return new SimpleSchema(Field_color, config);
  }
  colorV2(config = {}) {
    return new SimpleSchema(Field_string, { inputType: "color", ...config });
  }
  matrix(config) {
    return new SimpleSchema(Field_matrix, config);
  }
  button(config) {
    return new SimpleSchema(Field_button, config);
  }
  /** variants: `header` */
  markdown(config) {
    return new SimpleSchema(Field_markdown, typeof config === "string" ? { markdown: config } : config);
  }
  /** [markdown variant]: inline=true, label=false */
  header(config) {
    return new SimpleSchema(
      Field_markdown,
      typeof config === "string" ? { markdown: config, inHeader: true, label: false } : { inHeader: true, label: false, justifyLabel: false, ...config }
    );
  }
  int(config = {}) {
    return new SimpleSchema(Field_number, { mode: "int", ...config });
  }
  /** [number variant] precent = mode=int, default=100, step=10, min=1, max=100, suffix='%', */
  percent(config = {}) {
    return new SimpleSchema(Field_number, {
      mode: "int",
      default: 100,
      step: 10,
      min: 1,
      max: 100,
      suffix: "%",
      ...config
    });
  }
  float(config = {}) {
    return new SimpleSchema(Field_number, { mode: "float", ...config });
  }
  number(config = {}) {
    return new SimpleSchema(Field_number, { mode: "float", ...config });
  }
  list(config) {
    return new SimpleSchema(Field_list, config);
  }
  selectOne(config) {
    return new SimpleSchema(Field_selectOne, config);
  }
  selectOneV2(p) {
    return new SimpleSchema(Field_selectOne, {
      choices: p.map((id) => ({ id, label: id })),
      appearance: "tab"
    });
  }
  selectOneV3(p, config = {}) {
    return new SimpleSchema(Field_selectOne, {
      choices: p.map((id) => ({ id, label: id })),
      appearance: "tab",
      ...config
    });
  }
  selectMany(config) {
    return new SimpleSchema(Field_selectMany, config);
  }
  /**
   * Allow to instanciate a field early, so you can re-use it in multiple places
   * or access it's instance to dynamically change some other field schema.
   *
   * @since 2024-06-27
   * @stability unstable
   */
  with(injected, children) {
    return new SimpleSchema(Field_link, { share: injected, children });
  }
  linked(field) {
    return new SimpleSchema(Field_shared, { field });
  }
  /** see also: `fields` for a more practical api */
  group(config = {}) {
    return new SimpleSchema(Field_group, config);
  }
  fields(fields, config = {}) {
    return new SimpleSchema(Field_group, { items: fields, ...config });
  }
  choice_v0(config) {
    return new SimpleSchema(Field_choices, { multi: false, ...config });
  }
  choices_v0(config) {
    return new SimpleSchema(Field_choices, { multi: true, ...config });
  }
  choice(items, config = {}) {
    return new SimpleSchema(Field_choices, { multi: false, items, ...config });
  }
  choices(items, config = {}) {
    return new SimpleSchema(Field_choices, { multi: true, items, ...config });
  }
  empty(config = {}) {
    return new SimpleSchema(Field_group, config);
  }
  /** simple choice alternative api */
  tabs(items, config = {}) {
    return new SimpleSchema(Field_choices, {
      items,
      multi: false,
      ...config,
      appearance: "tab"
    });
  }
  // optional wrappers
  optional(p) {
    return new SimpleSchema(Field_optional, p);
  }
  llmModel(p = {}) {
    const choices = Object.entries(openRouterInfos).map(([id, info]) => ({ id, label: info.name }));
    const def = p.default ? choices.find((c) => c.id === p.default) : void 0;
    return this.selectOne({ default: def, choices });
  }
};

// src/csuite/ctx/CSuiteProvider.tsx
import { observer as observer76 } from "mobx-react-lite";
var CSuiteProvider = observer76(function CSuiteProvider_(p) {
  const config = p.config;
  return /* @__PURE__ */ jsx(CSuiteCtx.Provider, { value: config, children: /* @__PURE__ */ jsx(
    Frame,
    {
      className: p.className,
      tw: "w-full h-full flex-1",
      base: config.base,
      text: config.text,
      style: {
        // @ts-expect-error 🔴
        "--KLR": config.baseStr,
        // '--KLRH': config.baseStr,
        // '--input-border': getNum(config.inputBorder) / 100,
        "--DIR": config.shiftDirection,
        "--roundness": "5px",
        "--widget-height": `${config.widgetHeight}rem`,
        "--input-height": `${config.inputHeight}rem`,
        "--input-icon-height": `${config.inputHeight / 1.8}rem`
      },
      children: p.children
    }
  ) });
});

// src/csuite/ctx/CSuite_ThemeLoco.tsx
import { makeAutoObservable as makeAutoObservable14 } from "mobx";
var CSuite_ThemeLoco = class {
  constructor() {
    // form behaviour
    this.clickAndSlideMultiplicator = 1;
    this.showWidgetUndo = false;
    this.showWidgetMenu = false;
    this.showWidgetDiff = false;
    this.showToggleButtonBox = false;
    this.labellayout = "fixed-left";
    // theme
    this.base = new Kolor(0.9999, 0, 240);
    this.labelBackground = void 0;
    this.text = { contrast: 0.824 };
    this.inputBorder = 0.08;
    this.inputContrast = 0;
    this.labelText = { contrast: 0.48, chroma: 0.035 };
    this.widgetHeight = 1.8;
    this.inputHeight = 1.6;
    this.showWidgetExtra = true;
    this.truncateLabels = false;
    this.fieldGroups = {};
    makeAutoObservable14(this);
  }
  get baseStr() {
    return this.base.toOKLCH();
  }
  get shiftDirection() {
    return this.base.lightness > 0.5 ? -1 : 1;
  }
};

// src/csuite/model/pubsub/Channel.ts
import { makeAutoObservable as makeAutoObservable15 } from "mobx";
import { nanoid as nanoid6 } from "nanoid";
var Channel = class {
  constructor(id = nanoid6()) {
    this.id = id;
    makeAutoObservable15(this);
  }
  get() {
    return (field) => field.consume(this);
  }
  getOrThrow(field) {
    return bang(field.consume(this), "Empty channel");
  }
  // see src/csuite/utils/potatoClone.ts
  [Symbol.for("\u{1F954}")]() {
    return this;
  }
};

// src/csuite/activity/ActivityContainerUI.tsx
import { observer as observer77 } from "mobx-react-lite";
var ActivityContainerUI = observer77(function ActivityContainerUI_(p) {
  const routine = p.routine;
  const backdropzIndex = 1e3 + 100 * (p.ix ?? 1);
  const activityZIndex = backdropzIndex + 1;
  const activity = p.routine.activity;
  let pos = void 0;
  if (activity.event) {
    const target = activity.event.target;
    if (target instanceof HTMLElement) {
      pos = computePlacement(activity.placement ?? "popup-lg", target.getBoundingClientRect());
    }
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      tabIndex: -1,
      className: "$activity-root",
      tw: "absolute inset-0 h-full w-full pointer-events-auto",
      onAuxClick: (ev) => {
        activity.onAuxClick?.(ev, routine);
        activity.onEvent?.(ev, routine);
      },
      onClick: (ev) => {
        activity.onClick?.(ev, routine);
        activity.onEvent?.(ev, routine);
      },
      onMouseDown: (ev) => {
        activity.onMouseDown?.(ev, routine);
        activity.onEvent?.(ev, routine);
      },
      onMouseEnter: (ev) => {
        activity.onMouseEnter?.(ev, routine);
        activity.onEvent?.(ev, routine);
      },
      onMouseUp: (ev) => {
        activity.onMouseUp?.(ev, routine);
        activity.onEvent?.(ev, routine);
      },
      onMouseMove: (ev) => {
        activity.onMouseMove?.(ev, routine);
        activity.onEvent?.(ev, routine);
      },
      onMouseLeave: (ev) => {
        activity.onMouseLeave?.(ev, routine);
        activity.onEvent?.(ev, routine);
      },
      onKeyUp: (ev) => {
        const shouldStopOnEscapeKey = activity.stopOnEscapeKey ?? true;
        if (shouldStopOnEscapeKey && ev.key === "Escape") {
          console.log("Escape key pressed");
          p.stop?.();
        }
        activity.onKeyUp?.(ev, routine);
        activity.onEvent?.(ev, routine);
      },
      children: /* @__PURE__ */ jsxs("div", { tw: "relative w-full h-full", children: [
        activity.backdrop ? /* @__PURE__ */ jsx(
          "div",
          {
            className: "$activity-backdrop",
            tw: "absolute inset-0 bg-[#000000db]",
            style: { zIndex: backdropzIndex },
            children: /* @__PURE__ */ jsx("div", { style: { zIndex: -1 }, tw: "absolute inset-0" })
          }
        ) : null,
        /* @__PURE__ */ jsxs(
          "div",
          {
            tw: "absolute top-10 left-10 [z-index:99999]",
            children: [
              'activity "',
              activity.title,
              '"'
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            tabIndex: -1,
            autoFocus: true,
            tw: "absolute inset-0",
            style: { zIndex: activityZIndex, ...pos },
            className: "$activity-focus flex justify-center",
            onMouseDown: (ev) => {
              if (!activity.stopOnBackdropClick) return;
              console.log("activity backref clicked");
              if (ev.target === ev.currentTarget) p.stop();
            },
            children: activity.shell === "popup-lg" ? /* @__PURE__ */ jsx(ModalShellUI, { tw: "max-w-lg w-fit h-fit m-8", close: () => p.stop(), title: activity.title, children: p.children }) : activity.shell === "popup-sm" ? /* @__PURE__ */ jsx(ModalShellUI, { tw: "max-w-sm w-fit h-fit m-8", close: () => p.stop(), title: activity.title, children: p.children }) : activity.shell === "popup-full" ? /* @__PURE__ */ jsx(ModalShellUI, { tw: "m-8", close: () => p.stop(), title: activity.title, children: p.children }) : p.children
          }
        )
      ] })
    }
  );
});

// src/csuite/activity/ActivityStackUI.tsx
import { observer as observer78 } from "mobx-react-lite";
import { Fragment as Fragment6 } from "react/jsx-runtime";
var ActivityStackUI = observer78(function ActivityStackUI_(p) {
  return /* @__PURE__ */ jsx(Fragment6, { children: activityManager.routines.map((routine, ix) => {
    const activity = routine.activity;
    return /* @__PURE__ */ jsx(
      ActivityContainerUI,
      {
        stop: () => {
          activity.onStop?.();
          activityManager.stopLast();
        },
        routine,
        ix,
        children: activity.UI ? /* @__PURE__ */ jsx(
          activity.UI,
          {
            routine,
            activity,
            stop: () => activityManager.stop(routine)
          }
        ) : null
      },
      routine.uid
    );
  }) });
});

// src/csuite/index.ts
var simpleBuilder = new SimpleBuilder();
var simpleFactory = new Factory(simpleBuilder);
export {
  $FieldSym,
  ASSERT_ARRAY,
  ASSERT_EQUAL,
  ASSERT_STRING,
  ActivityContainerUI,
  ActivityManager,
  ActivityStackUI,
  AnimatedSizeUI,
  AspectLockButtonUI,
  AspectRatioSquareUI,
  AutoCompleteSelectState,
  BadgeUI,
  BaseSchema,
  BoolButtonProps,
  BoundCommand,
  BoundCommandSym,
  BoundMenu,
  BoundMenuSym,
  Button,
  CSuiteCtx,
  CSuiteOverride,
  CSuiteProvider,
  CSuite_ThemeLoco,
  CSuite_theme1,
  Channel,
  CollapsibleState,
  CollapsibleUI,
  ComboUI,
  Command,
  CommandContext,
  CommandManager,
  CommandSym,
  CreatePresetUI,
  CurrentStyleCtx,
  ErrorBoundaryFallback,
  ErrorBoundaryUI,
  FAIL,
  Factory,
  Field,
  Field_bool,
  Field_button,
  Field_choices,
  Field_color,
  Field_group,
  Field_link,
  Field_list,
  Field_markdown,
  Field_matrix,
  Field_number,
  Field_optional,
  Field_seed,
  Field_seed_fromValue,
  Field_selectMany,
  Field_selectMany_fromValue,
  Field_selectOne,
  Field_selectOne_fromValue,
  Field_shared,
  Field_shared_fromValue,
  Field_size,
  Field_size_fromValue,
  Field_string,
  Field_string_fromValue,
  Form,
  FormAsDropdownConfigUI,
  FormUI,
  Frame,
  FrameSubtle,
  Ikon,
  IkonOf,
  InputBoolCheckboxUI,
  InputBoolFlipButtonUI,
  InputBoolToggleButtonBoxUI,
  InputBoolToggleButtonUI,
  InputBoolUI,
  InputNumberUI,
  InputStringUI,
  JsonViewUI,
  Kolor,
  LabelCaretWidth,
  ListControlsUI,
  ListOfFieldsContainerUI,
  META_NAME,
  MOD_KEY,
  ManualPromise,
  MarkdownUI,
  Menu,
  MenuBuilder,
  MenuDivider,
  MenuDividerUI_,
  MenuInstance,
  MenuItem,
  MenuRootUI,
  MenuUI,
  MenuWithoutProps,
  MessageErrorUI,
  MessageUI,
  ModalShellUI,
  NumberVar,
  PanelHeaderUI,
  RenderItemTitleUI,
  Repository,
  ResizableFrame,
  RevealCtx,
  RevealState,
  RevealStateLazy,
  RevealUI,
  Routine,
  SQLITE_false,
  SQLITE_true,
  Seeder,
  SelectOptionUI,
  SelectPopupUI,
  SelectUI,
  Severity,
  SimpleBuilder,
  SimpleMenuAction,
  SimpleMenuModal,
  SimpleSchema,
  SpacerUI,
  Transaction,
  Tree,
  TreeEntryUI,
  TreeEntry_Field,
  TreeIcon1UI,
  TreeKeys,
  TreeNode,
  TreeUI,
  TreeView,
  TreeViewCtx,
  Trigger,
  VIOLATION,
  WidgetBoolUI,
  WidgetButtonUI,
  WidgetChoices_BodyUI,
  WidgetChoices_HeaderUI,
  WidgetChoices_SelectHeaderUI,
  WidgetChoices_TabHeaderUI,
  WidgetColorUI,
  WidgetDebugIDUI,
  WidgetErrorsUI,
  WidgetGroup_BlockUI,
  WidgetGroup_LineUI,
  WidgetHeaderContainerUI,
  WidgetHeaderControlsContainerUI,
  WidgetIndentUI,
  WidgetLabelCaretAlwaysUI,
  WidgetLabelCaretUI,
  WidgetLabelContainerUI,
  WidgetLabelIconUI,
  WidgetLabelTextUI,
  WidgetList_BodyUI,
  WidgetList_LineUI,
  WidgetMardownUI,
  WidgetMatrixUI,
  WidgetMenuUI,
  WidgetNumberUI,
  WidgetSeedUI,
  WidgetSelectManyUI,
  WidgetSelectMany_ListUI,
  WidgetSelectMany_SelectUI,
  WidgetSelectMany_TabUI,
  WidgetSelectOneUI,
  WidgetSelectOne_CellUI,
  WidgetSelectOne_RollUI,
  WidgetSelectOne_SelectUI,
  WidgetSelectOne_TabUI,
  WidgetSingleLineSummaryUI,
  WidgetSizeX_LineUI,
  WidgetString_HeaderUI,
  WidgetString_TextareaBodyUI,
  WidgetString_TextareaHeaderUI,
  WidgetToggleUI,
  WidgetUndoChangesButtonUI,
  WidgetWithLabelUI,
  WigetSizeXUI,
  WigetSize_BlockUI,
  WigetSize_LineUI,
  _CushyIcons,
  _IconsLDI,
  _IconsXDI,
  activityManager,
  addRule,
  allIcons,
  asSTRING_orCrash,
  aspectRatioMap,
  autofixSerial_20240703,
  autofixSerial_20240711,
  bang,
  capitalize,
  clamp,
  clampOpt,
  command,
  commandManager,
  compileOrRetrieveClassName,
  computePlacement,
  configureFrameEngine,
  defaultHideDelay_whenNested,
  defaultHideDelay_whenRoot,
  defaultShowDelay_whenNested,
  defaultShowDelay_whenRoot,
  defaultTreeStorage,
  exhaust2 as exhaust,
  frameTemplateNames,
  frameTemplates,
  genUID,
  getBaseColor,
  getFieldClass,
  getFieldGroupClass,
  getFieldLinkClass,
  getFieldListClass,
  getFieldNumberClass,
  getFieldOptionalClass,
  getFieldSelectOneClass,
  getFieldSharedClass,
  getFieldStringClass,
  getGlobalRepository,
  getGlobalSeeder,
  getId,
  getInputBoolChroma,
  getInputBoolContrast,
  getJustifyContent,
  getLCHFromStringAsString,
  getNum,
  getOS,
  global_RevealStack,
  hasMod,
  hasRule,
  hashJSONObjectToNumber,
  hashStringToNumber,
  isBoundCommand,
  isBoundMenu,
  isCommand,
  isFieldGroup,
  isFieldLink,
  isFieldList,
  isFieldNumber,
  isFieldOptional,
  isFieldSelectOne,
  isFieldShared,
  isFieldString,
  isPromise,
  isWidget,
  knownOKLCHHues,
  makeAutoObservableInheritance,
  makeLabelFromFieldName,
  menuBuilder,
  menuWithProps,
  menuWithoutProps,
  menu_fieldActions,
  mkNewFieldId,
  normalizeBox,
  normalizeCushyShortcut,
  normalizeProblem,
  normalizeText,
  normalizeTint,
  objectAssignTsEfficient_pt_t,
  objectAssignTsEfficient_t_pt,
  objectAssignTsEfficient_t_t,
  onKeyDownHandlers,
  openRouterInfos,
  overrideTint,
  overrideTintV2,
  parseFloatNoRoundingErr,
  parseShortcutToInputSequence,
  potatoClone,
  potatoSymbol,
  registerFieldClass,
  searchMatches,
  simpleBuilder,
  simpleFactory,
  stableStringify,
  toastError,
  toastImage,
  toastInfo,
  toastSuccess,
  tooltipStuff,
  unaccent,
  useCSuite,
  usePressLogic,
  useReveal,
  useRevealOrNull,
  useSizeOf,
  useTreeView
};
