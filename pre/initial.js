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
      function SparkMD5() {
        this.reset();
      }
      SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD5.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD5.prototype.end = function(raw) {
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
      SparkMD5.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice()
        };
      };
      SparkMD5.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD5.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD5.prototype._finish = function(tail, length) {
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
      SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };
      SparkMD5.hashBinary = function(content, raw) {
        var hash2 = md51(content), ret = hex(hash2);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD5.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.end = function(raw) {
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
      SparkMD5.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash2 = md51_array(new Uint8Array(arr)), ret = hex(hash2);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD5;
    });
  }
});

// src/csuite/model/ModelManager.ts
import { useMemo as useMemo3 } from "react";

// src/csuite/model/Model.ts
import { action, isObservable, makeAutoObservable as makeAutoObservable3, observable as observable4, toJS } from "mobx";
import { nanoid } from "nanoid";
import { createElement as createElement2 } from "react";

// src/panels/Panel_Gallery/FormAsDropdownConfigUI.tsx
import { observer as observer9 } from "mobx-react-lite";

// src/csuite/button/Button.tsx
import { makeAutoObservable, observable as observable2, runInAction } from "mobx";
import { observer as observer2 } from "mobx-react-lite";
import { useEffect, useMemo } from "react";

// src/csuite/frame/Frame.tsx
import { observer } from "mobx-react-lite";
import { forwardRef, useContext, useState } from "react";

// src/csuite/kolor/Kolor.tsx
import Color from "colorjs.io";

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
  if (a == null)
    return def;
  if (a instanceof NumberVar)
    return getNum(a.value);
  return a;
}

// src/csuite/utils/clamp.ts
var clamp = (v, min, max) => Math.min(Math.max(v, min), max);
var clampOpt = (v, min, max) => {
  if (v == null)
    return min ?? 0;
  if (min == null && max == null)
    return v;
  if (min == null)
    return Math.min(v, max);
  if (max == null)
    return Math.max(v, min);
  return Math.min(Math.max(v, min), max);
};

// src/csuite/kolor/Kolor.tsx
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
      if (this.isInRec2020Gamut)
        return this;
      const clamped = this.color.toGamut("rec2020");
      return new _Kolor(clamped.oklch[0], clamped.oklch[1], clamped.oklch[2]);
    };
    this.clampToP3 = () => {
      if (this.isInP3Gamut)
        return this;
      const clamped = this.color.toGamut("p3");
      return new _Kolor(clamped.oklch[0], clamped.oklch[1], clamped.oklch[2]);
    };
    this.clampToRGB = () => {
      if (this.isInRBGGamut)
        return this;
      const clamped = this.color.toGamut("srgb");
      return new _Kolor(clamped.oklch[0], clamped.oklch[1], clamped.oklch[2]);
    };
    this.ASSERT_VALID = () => {
      if (isNaN(this.lightness)) {
        this.lightness = 0;
      }
      if (isNaN(this.chroma))
        throw new Error("isNaN(this.chroma)");
      if (isNaN(this.hue))
        throw new Error("isNaN(this.hue)");
      if (this.lightness < 0)
        throw new Error(`this.lightness (${this.lightness}) < 0`);
      if (this.lightness > 1)
        throw new Error(`this.lightness (${this.lightness}) > 1`);
      if (this.chroma < 0)
        throw new Error(`this.chroma (${this.chroma}) < 0`);
      if (this.chroma > 1)
        throw new Error(`this.chroma (${this.chroma}) > 1`);
    };
    this.toOKLCH = () => {
      const l = clamp(this.lightness, 1e-4, 0.9999).toFixed(3);
      const c = this.chroma.toFixed(3);
      const h = this.hue.toFixed(3);
      return `oklch(${l} ${c} ${h})`;
    };
    /** true if strictly same values */
    this.isSame = (b) => {
      if (this.lightness !== b.lightness)
        return false;
      if (this.chroma !== b.chroma)
        return false;
      if (this.hue !== b.hue)
        return false;
      return true;
    };
    this.tintBg = (b, dir) => this.tint(b, "Bg", dir);
    this.tintFg = (b, dir) => this.tint(b, "Fg", dir);
    this.tint = (b, usage, dir_) => {
      if (b == null)
        return this;
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
      if (!next.isInRBGGamut)
        console.error(`[\u{1F534}] ${usage} out of gamut: ${next.toOKLCH()} - ${next.webLink}`);
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
        if (this.lightness + 0.01 * i * dir < 0 || this.lightness + 0.01 * i * dir > 1)
          continue;
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

// src/csuite/box/BoxNormalized.tsx
function normalizeBox(box) {
  const out = {};
  if (box.base != null)
    out.base = _normalizeTint(box.base);
  if (box.hover != null)
    out.hover = _normalizeTint(box.hover);
  if (box.shock != null)
    out.shock = _normalizeTint(box.shock);
  if (box.text != null)
    out.text = _normalizeTint(box.text);
  if (box.textShadow != null)
    out.textShadow = _normalizeTint(box.textShadow);
  if (box.shadow != null)
    out.shadow = _normalizeTint(box.shadow);
  if (box.border != null)
    out.border = _normalizeTint(box.border);
  return out;
}
function _normalizeTint(tint) {
  if (typeof tint === "boolean")
    return { contrast: tint ? (
      /* 0.2 */
      0.03
    ) : 0 };
  if (typeof tint === "number")
    return { contrast: clamp(tint / 100, 0, 1) };
  if (typeof tint === "string")
    return Kolor.fromString(tint);
  return tint;
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
      if (startingState === value)
        return;
      if (draggedElement != null)
        p.onClick?.(ev);
    }
  };
};

// src/csuite/icons/iconHelpers.tsx
import * as IconImport from "@mdi/react";

// src/csuite/icons/icons.ts
import * as icons from "@mdi/js";
var myCustomIcons = {
  // semantic stuff ----------------------------------------------------------------
  _missedCall: icons.mdiPhoneMissed,
  _transferredCall: icons.mdiPhoneInTalk,
  _close: icons.mdiClose,
  _clear: icons.mdiClose,
  _check: icons.mdiCheck,
  _edit: icons.mdiPencil,
  // grid
  _gridFilter: icons.mdiFilterOutline,
  _gridSortedAsc: icons.mdiArrowUp,
  _gridSortedDesc: icons.mdiArrowDown,
  _gridGroupBy: icons.mdiViewGrid,
  // features
  _webchat: icons.mdiChatProcessing,
  // cushy -------------------------------------------------------------------------
  cdiTest: "M 2.40,7.20 A 20,20 0,0,1 12.00,7.20 A 20,20 0,0,1 21.60,7.20 Q 21.60,14.40 12.00,21.60 Q 2.40,14.40 2.40,7.20 z",
  cdiDraft: icons.mdiPencil,
  cdiApp: icons.mdiAbacus,
  cdiStep: icons.mdiAccessPoint,
  cdiPreset: icons.mdiAccessPoint,
  // AI stuff goes there
  // ....
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
var allIcons = {
  ...icons,
  ...myCustomIcons
};

// src/utils/custom-jsx/jsx-runtime.js
import { jsx as jsx_, jsxs as jsxs_ } from "react/jsx-runtime";
import { Fragment } from "react/jsx-runtime";
var joinCls = (tw) => {
  if (typeof tw === "string")
    return tw;
  if (Array.isArray(tw)) {
    const out = [];
    for (const arg of tw) {
      if (arg == null)
        continue;
      if (typeof arg === "string")
        out.push(arg);
      if (typeof arg === "object") {
        for (const key of Object.keys(arg)) {
          if (arg[key])
            out.push(key);
        }
      }
    }
    return out.join(" ");
  }
  return "";
};
function jsx(type, props, key) {
  if (props.tw == null)
    return jsx_(type, props, key);
  const { tw, className, ...rest } = props;
  if (className)
    return jsx_(type, { ...rest, className: `${className} ${joinCls(tw)}` }, key);
  return jsx_(type, { ...rest, className: joinCls(tw) }, key);
}
function jsxs(type, props, key) {
  if (props.tw == null)
    return jsxs_(type, props, key);
  const { tw, className, ...rest } = props;
  if (className)
    return jsxs_(type, { ...rest, className: `${className} ${joinCls(tw)}` }, key);
  return jsxs_(type, { ...rest, className: joinCls(tw) }, key);
}

// src/csuite/icons/iconHelpers.tsx
var Icon2 = IconImport.Icon;
var Ikon = new Proxy({}, {
  get(target, key) {
    if (key in target)
      return target[key];
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
  if (a == null && b == null)
    return {};
  if (a == null)
    return b;
  if (b == null)
    return a;
  const out = {};
  if (b.lightness != null)
    out.lightness = b.lightness;
  else if (b.contrast != null)
    out.contrast = b.contrast;
  else if (a.lightness != null)
    out.lightness = a.lightness;
  else if (a.contrast != null)
    out.contrast = a.contrast;
  if (b.chroma != null)
    out.chroma = b.chroma;
  else if (b.chromaBlend != null)
    out.chromaBlend = b.chromaBlend;
  else if (a.chroma != null)
    out.chroma = a.chroma;
  else if (a.chromaBlend != null)
    out.chromaBlend = a.chromaBlend;
  if (b.hue != null)
    out.hue = b.hue;
  else if (b.hueShift != null)
    out.hueShift = b.hueShift;
  else if (a.hue != null)
    out.hue = a.hue;
  else if (a.hueShift != null)
    out.hueShift = a.hueShift;
  return out;
};

// src/csuite/kolor/overrideTintV2.tsx
function overrideTintV2(...tints) {
  const out = {};
  for (const tint of tints) {
    if (typeof tint === "boolean")
      continue;
    if (tint == null)
      continue;
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

// src/csuite/tinyCSS/quickClass.ts
var import_spark_md5 = __toESM(require_spark_md5(), 1);
import { customAlphabet } from "nanoid";

// src/csuite/tinyCSS/compileOrRetrieveClassName.tsx
var knownRules = /* @__PURE__ */ new Set();
function addRule(selector, block = "") {
  const styleSheet = getStyleElement().sheet;
  const rules = styleSheet.cssRules;
  if (rules == null)
    throw new Error("\u274C no rules");
  if (knownRules.size > 0 && knownRules.size % 100 === 0)
    console.log(`[\u{1F3DB}\uFE0F] ${knownRules.size}th rule added`, selector, knownRules.has(selector));
  knownRules.add(selector);
  const index = styleSheet.insertRule(`${selector} {${block}}`, styleSheet.cssRules.length);
  return styleSheet.cssRules[index];
}
var _styleElement = null;
function getStyleElement() {
  if (_styleElement != null)
    return _styleElement;
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
var mkClassName = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);
var cache = {};
var compileOrRetrieveClassName = (appearance) => {
  const vals = JSON.stringify(appearance);
  const uid = (0, import_spark_md5.hash)(vals);
  if (uid in cache)
    return cache[uid];
  const className = "box-" + mkClassName();
  const cssBlock = Object.entries(appearance).map(([key, val]) => {
    if (val == null)
      return "";
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

// src/csuite/frame/Frame.tsx
var frameMode = 1 - 1 === 1 ? "STYLE" : "CLASSNAME";
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
      // remaining properties
      ...rest
    } = p;
    const prevCtx = useContext(CurrentStyleCtx);
    const box = normalizeBox(p);
    const [hovered_, setHovered] = useState(false);
    const hovered = hovered__ ?? hovered_;
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
      if (template2.border)
        box.border = overrideTint(template2.border, box.border);
      if (template2.text)
        box.text = overrideTint(template2.text, box.text);
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
    if (nextDir !== prevCtx.dir)
      variables["--DIR"] = nextDir.toString();
    if (!prevCtx.base.isSame(KBase))
      variables["--KLR"] = KBase.toOKLCH();
    if (box.shock)
      variables.background = KBase.tintBg(box.shock, dir).toOKLCH();
    else
      variables.background = KBase.toOKLCH();
    const nextext = overrideTint(prevCtx.text, box.text);
    const boxText = box.text ?? prevCtx.text;
    if (boxText != null)
      variables.color = KBase.tintFg(boxText).toOKLCH();
    if (box.textShadow)
      variables.textShadow = `0px 0px 2px ${KBase.tintFg(box.textShadow).toOKLCH()}`;
    if (box.border)
      variables.border = `1px solid ${KBase.tintFg(box.border).toOKLCH()}`;
    let _onMouseOver = void 0;
    let _onMouseOut = void 0;
    if (p.hover != null) {
      _onMouseOver = () => setHovered(true);
      _onMouseOut = () => setHovered(false);
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        title: tooltip,
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

// src/csuite/button/Button.tsx
var Button = observer2(function Button_(p) {
  const uist = useMemo(() => new ButtonState(p), []);
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
      if (this.props.disabled)
        return;
      if (this.running)
        return;
      if (this.props.onClick) {
        const res = this.props.onClick(ev);
        if (res == null)
          return;
        if (res instanceof Promise) {
          runInAction(() => this.running = true);
          void res.finally(() => runInAction(() => this.running = false));
        } else {
        }
      }
    };
    this.press = (_ev) => {
      if (this.props.disabled)
        return;
      if (this.running)
        return;
      this.pressed = true;
      window.addEventListener("pointerup", this.release, true);
    };
    this.release = () => {
      this.pressed = false;
      window.removeEventListener("pointerup", this.release, true);
    };
    makeAutoObservable(this, { props: observable2.ref });
  }
  /** 2024-06-04 for now, "active" means "pressed or active" */
  get visuallyActive() {
    if (this.props.disabled)
      return false;
    return this.pressed ? !this.props.active : this.props.active;
  }
};

// src/csuite/form/FormUI.tsx
import { observer as observer6 } from "mobx-react-lite";

// src/csuite/messages/MessageErrorUI.tsx
import { observer as observer5 } from "mobx-react-lite";

// src/csuite/messages/MessageUI.tsx
import { observer as observer4, useLocalObservable } from "mobx-react-lite";

// src/csuite/markdown/MarkdownUI.tsx
import { marked } from "marked";
import { observer as observer3 } from "mobx-react-lite";
var MarkdownUI = observer3(function MarkdownUI_(p) {
  if (p.markdown == null)
    return null;
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
var MessageUI = observer4(function MessageInfoUI_(p) {
  const uist = useLocalObservable(() => ({ closed: false }));
  if (uist.closed)
    return null;
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
var MessageErrorUI = observer5(function MessageErrorUI_(p) {
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
var FormUI = observer6(function FormUI_(p) {
  const form = p.form;
  if (form == null)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: `form is not yet initialized` });
  if (form.error)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: form.error });
  if (form.root == null)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: "form.root is null" });
  const submitAction = p.submitAction;
  return /* @__PURE__ */ jsxs(Frame, { ...p.theme, className: p.className, style: p.style, children: [
    form.root.renderWithLabel(),
    p.submitButton ?? (submitAction == null ? null : submitAction === "confetti" ? /* @__PURE__ */ jsx("div", { tw: "flex", children: /* @__PURE__ */ jsx(
      Button,
      {
        look: "primary",
        tw: "ml-auto",
        onClick: async () => {
          const fire = (await import("https://cdn.skypack.dev/canvas-confetti")).default;
          fire({ zIndex: 1e5, particleCount: 100, spread: 70 });
        },
        children: p.submitLabel ?? "Submit"
      }
    ) }) : /* @__PURE__ */ jsx("div", { tw: "flex", children: /* @__PURE__ */ jsx(Button, { look: "primary", tw: "ml-auto", onClick: () => submitAction(form), children: p.submitLabel ?? "Submit" }) }))
  ] });
});

// src/csuite/reveal/RevealUI.tsx
import { observer as observer8 } from "mobx-react-lite";
import { createElement, useEffect as useEffect2, useMemo as useMemo2, useRef } from "react";
import { createPortal } from "react-dom";

// src/csuite/modal/ModalShell.tsx
import { observer as observer7 } from "mobx-react-lite";
var ModalShellUI = observer7(function ModalShellUI_(p) {
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
import { createContext as createContext2, useContext as useContext2 } from "react";
var RevealCtx = createContext2(null);
var useRevealOrNull = () => {
  const val = useContext2(RevealCtx);
  return val;
};

// src/csuite/reveal/RevealStack.ts
var global_RevealStack = [];

// src/csuite/reveal/RevealState.tsx
import { makeAutoObservable as makeAutoObservable2, observable as observable3 } from "mobx";

// src/csuite/reveal/RevealPlacement.tsx
var computePlacement = (placement, rect) => {
  if (placement === "popup-xs")
    return { top: 0, left: 0 };
  if (placement === "popup-sm")
    return { top: 0, left: 0 };
  if (placement === "popup-lg")
    return { top: 0, left: 0 };
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
  if (placement == "bottomStart")
    return { top: rect.bottom, left: rect.left };
  if (placement == "bottom")
    return { top: rect.bottom, left: rect.left + rect.width / 2, transform: "translate(-50%)" };
  if (placement == "bottomEnd")
    return { top: rect.bottom, left: rect.right, transform: "translate(-100%)" };
  if (placement == "topStart")
    return { top: rect.top, left: rect.left, transform: "translateY(-100%)" };
  if (placement == "top")
    return { top: rect.top, left: rect.left + rect.width / 2, transform: "translate(-50%, -100%)" };
  if (placement == "topEnd")
    return { top: rect.top, left: rect.right, transform: "translate(-100%, -100%)" };
  if (placement == "leftStart")
    return { top: rect.top, left: rect.left, transform: "translateX(-100%)" };
  if (placement == "left")
    return { top: rect.top + rect.height / 2, left: rect.left, transform: "translate(-100%, -50%)" };
  if (placement == "leftEnd")
    return { top: rect.bottom, left: rect.left, transform: "translate(-100%, -100%)" };
  if (placement == "rightStart")
    return { top: rect.top, left: rect.right };
  if (placement == "right")
    return { top: rect.top + rect.height / 2, left: rect.right, transform: "translateY(-50%)" };
  if (placement == "rightEnd")
    return { top: rect.bottom, left: rect.right, transform: "translateY(-100%)" };
  return { top: rect.bottom, left: rect.left };
};

// src/csuite/reveal/RevealState.tsx
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
      if (this.uistOrNull)
        return this.uistOrNull;
      if (DEBUG_REVEAL)
        console.log(`[\u{1F499}] init RevealUI`);
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
      if (!toc)
        return;
      ev.stopPropagation();
      if (this.visible)
        this.leaveAnchor();
      else
        this.enterAnchor();
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
      if (!this.triggerOnHover && !this.visible)
        return;
      if (_RevealState.shared.current)
        return this.enterAnchor();
      this._resetAllAnchorTimouts();
      this.enterAnchorTimeoutId = setTimeout(this.enterAnchor, this.showDelay);
    };
    this.onMouseLeaveAnchor = () => {
      if (this.placement.startsWith("popup"))
        return;
      this._resetAllAnchorTimouts();
      this.leaveAnchorTimeoutId = setTimeout(this.leaveAnchor, this.hideDelay);
    };
    // ---
    this.enterAnchor = () => {
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] ENTERING anchor ${this.ix}`);
      if (_RevealState.shared.current != this && !this.parents.includes(_RevealState.shared.current))
        _RevealState.shared.current?.close();
      _RevealState.shared.current = this;
      this._resetAllAnchorTimouts();
      this.inAnchor = true;
    };
    this.leaveAnchor = () => {
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] LEAVING anchor  ${this.ix}`);
      if (_RevealState.shared.current == this)
        _RevealState.shared.current = null;
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
      if (this.placement.startsWith("popup"))
        return;
      this._resetAllTooltipTimouts();
      this.leaveTooltipTimeoutId = setTimeout(this.leaveTooltip, this.hideDelay);
    };
    // ---
    this.enterTooltip = () => {
      this._resetAllTooltipTimouts();
      for (const [ix, p] of this.parents.entries())
        p.enterChildren(ix);
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] enter tooltip of ${this.ix}`);
      this.inTooltip = true;
    };
    this.leaveTooltip = () => {
      this._resetAllTooltipTimouts();
      for (const [ix, p] of this.parents.entries())
        p.leaveChildren(ix);
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] leaving tooltip of ${this.ix}`);
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
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] entering children (of ${this.ix}) ${depth}`);
      this.inChildren.add(depth);
    };
    this.leaveChildren = (depth) => {
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] leaving children (of ${this.ix}) ${depth}`);
      this.inChildren.delete(depth);
    };
    this.contentFn = () => p.content(this);
    makeAutoObservable2(this, { uid: false, p: false });
  }
  static {
    this.nextUID = 1;
  }
  static {
    this.shared = observable3({ current: null }, { current: observable3.ref });
  }
  /** how deep in the reveal stack we are */
  get ix() {
    return this.parents.length;
  }
  // prettier-ignore
  get debugColor() {
    return {
      borderLeft: this.inAnchor ? `3px solid red` : void 0,
      borderTop: this.inTooltip ? `3px solid cyan` : void 0,
      borderBottom: this.inChildren.size > 0 ? `3px solid orange` : void 0
    };
  }
  /** toolip is visible if either inAnchor or inTooltip */
  get visible() {
    if (this._lock)
      return true;
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
    if (!this.triggerOnHover)
      return "cursor-pointer";
    return "cursor-help";
  }
};

// src/csuite/reveal/RevealUI.tsx
var RevealUI = observer8(function RevealUI_(p) {
  const ref = useRef(null);
  const parents = useRevealOrNull()?.tower ?? [];
  const SELF = useMemo2(() => new RevealStateLazy(p, parents.map((p2) => p2.getUist())), []);
  const { uistOrNull, getUist: uist2 } = SELF;
  const nextTower = useMemo2(() => ({ tower: [...parents, SELF] }), []);
  useEffect2(() => {
    const x = uistOrNull;
    if (x == null)
      return;
    if (p.content !== x.p.content)
      x.contentFn = () => p.content(x);
    if (p.trigger !== x.p.trigger)
      x.p.trigger = p.trigger;
    if (p.placement !== x.p.placement)
      x.p.placement = p.placement;
    if (p.showDelay !== x.p.showDelay)
      x.p.showDelay = p.showDelay;
    if (p.hideDelay !== x.p.hideDelay)
      x.p.hideDelay = p.hideDelay;
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
        if (ev.button === 1)
          return uist2().onMiddleClick(ev);
        if (ev.button === 2)
          return uist2().onRightClick(ev);
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
  if (uist == null)
    return null;
  if (!uist?.visible)
    return null;
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
          if (e == null)
            return global_RevealStack.filter((p2) => p2 !== uist);
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
            if (e == null)
              return global_RevealStack.filter((p2) => p2 !== uist);
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

// src/panels/Panel_Gallery/FormAsDropdownConfigUI.tsx
var FormAsDropdownConfigUI = observer9(function FormAsDropdownConfigUI_(p) {
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
            p.form && /* @__PURE__ */ jsx(FormUI, { form: p.form }),
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

// src/csuite/fields/WidgetUI.DI.ts
var WidgetDI = {};
var registerWidgetClass = (type, kls) => {
  WidgetDI[type] = kls;
};
var isWidgetOptional = (widget) => widget.type === "optional";
var isWidgetShared = (widget) => widget.type === "shared";
var isWidgetGroup = (widget) => widget.type === "group";

// src/csuite/utils/debounce.ts
function debounce(func, delay, maxWait) {
  let timeoutId = null;
  let lastInvokeTime = Date.now();
  return (...args) => {
    const now2 = Date.now();
    const needInvoke = maxWait !== void 0 && now2 - lastInvokeTime >= maxWait;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (needInvoke) {
      func(...args);
      lastInvokeTime = now2;
    } else {
      timeoutId = setTimeout(() => {
        func(...args);
        lastInvokeTime = Date.now();
      }, delay);
    }
  };
}

// src/csuite/model/Model.ts
var Model = class {
  constructor(manager, buildFn, config, context) {
    this.manager = manager;
    this.buildFn = buildFn;
    this.config = config;
    this.context = context;
    /** current form snapshot */
    this.snapshot = void 0;
    /** loading error  */
    this.error = null;
    /** shortcut to access the <FormUI /> component without having to import it first */
    this.FormUI = FormUI;
    /**
     * allow to quickly render the model as a react form
     * without having to import any component; usage:
     * | <div>{x.render()}</div>
     */
    this.render = (p = {}) => {
      return createElement2(FormUI, { form: this, ...p });
    };
    /**
     * allow to quickly render the form in a dropdown button
     * without having to import any component; usage:
     * | <div>{x.renderAsConfigBtn()}</div>
     */
    this.renderAsConfigBtn = (p) => createElement2(FormAsDropdownConfigUI, { form: this, ...p });
    /** Out of Tree unmounted serials  */
    this.shared = {};
    // Change tracking ------------------------------------
    /** timestamp at which form value was last updated, or 0 when form still pristine */
    this.valueLastUpdatedAt = 0;
    /** timestamp at which form serial was last updated, or 0 when form still pristine */
    this.serialLastUpdatedAt = 0;
    this._onSerialChange = this.config.onSerialChange ? debounce(this.config.onSerialChange, 200) : null;
    this._onValueChange = this.config.onValueChange ? debounce(this.config.onValueChange, 5) : null;
    /** every widget node must call this function once it's value change */
    this.valueChanged = (widget) => {
      this.valueLastUpdatedAt = Date.now();
      this.serialChanged(widget);
      this._onValueChange?.(this);
    };
    this._allFormWidgets = /* @__PURE__ */ new Map();
    this.knownShared = /* @__PURE__ */ new Map();
    this.getWidgetByID = (id) => {
      return this._allFormWidgets.get(id);
    };
    /** every widget node must call this function once it's serial changed */
    this.serialChanged = (_widget) => {
      this.serialLastUpdatedAt = Date.now();
      this._onSerialChange?.(this);
    };
    this.ready = false;
    this.init = () => {
      console.log(`[\u{1F950}] Building form ${this.config.name}`);
      const formBuilder = this.builder;
      try {
        let formSerial = this.config.initialSerial?.(this.context);
        this._uid = formSerial?.uid ?? nanoid();
        if (formSerial && !isObservable(formSerial))
          formSerial = observable4(formSerial);
        if (formSerial != null && Object.keys(formSerial).length === 0) {
          formSerial = null;
        }
        if (formSerial != null && //
        formSerial.type !== "FormSerial" && "values_" in formSerial) {
          console.log(`[\u{1F534}\u{1F534}\u{1F534}\u{1F534}\u{1F534}\u{1F534}\u{1F534}] `, toJS(formSerial));
          const oldSerial = formSerial;
          const oldsharedSerial = {};
          for (const [k, v] of Object.entries(oldSerial.values_)) {
            if (k.startsWith("__")) {
              oldsharedSerial[k.slice(2, -2)] = v;
              delete oldSerial.values_[k];
            }
          }
          formSerial = {
            name: this.config.name,
            uid: nanoid(),
            type: "FormSerial",
            root: formSerial,
            shared: oldsharedSerial,
            serialLastUpdatedAt: 0,
            valueLastUpdatedAt: 0
          };
          console.log(`[\u{1F534}] MIGRATED formSerial:`, JSON.stringify(formSerial, null, 3).slice(0, 800));
        }
        if (formSerial != null && formSerial.type !== "FormSerial") {
          throw new Error("\u274C INVALID form serial");
        }
        this.shared = formSerial?.shared || {};
        this.snapshot = formSerial?.snapshot;
        const spec = this.buildFn?.(formBuilder, this.context);
        const rootWidget = formBuilder._HYDRATE(null, spec, formSerial?.root);
        this.ready = true;
        this.error = null;
        return rootWidget;
      } catch (e) {
        console.error(`[\u{1F459}\u{1F534}] Building form ${this.config.name} FAILED`, this);
        console.error(e);
        this.error = "invalid form definition";
        const spec = this.buildFn?.(formBuilder, this.context);
        return formBuilder._HYDRATE(null, spec, null);
      }
    };
    this.builder = manager.getBuilder(this);
    makeAutoObservable3(this, {
      //
      // builder: false,
      root: false,
      init: action
    });
  }
  /**
   * update current model snapshot
   */
  saveSnapshot() {
    this.snapshot = JSON.parse(JSON.stringify(this.root.serial));
  }
  /**
   * rever to the last snapshot
   */
  revertToSnapshot() {
    throw new Error("\u274C not implemented");
  }
  /**
   * @since 2024-06-20
   * @status broken
   * shrot text summarizing changes from default
   */
  get diffSummaryFromDefault() {
    return this.root.diffSummaryFromDefault;
  }
  /**
   * @since 2024-06-20
   * @status broken
   * shrot text summarizing changes from default
   * */
  get diffSummaryFromSnapshot() {
    return this.root.diffSummaryFromDefault;
  }
  get value() {
    return this.root.value;
  }
  get serial() {
    return {
      type: "FormSerial",
      uid: this.uid,
      name: this.config.name,
      root: this.root.serial,
      snapshot: this.snapshot,
      shared: this.shared,
      serialLastUpdatedAt: this.serialLastUpdatedAt,
      valueLastUpdatedAt: this.valueLastUpdatedAt
    };
  }
  /** @deprecated ; only work when root is a Widget_group */
  get fields() {
    if (isWidgetGroup(this.root))
      return this.root.fields;
    throw new Error("\u{1F534} root is not a group");
  }
  // 🔴 👇 remove that
  get root() {
    const root = this.init();
    Object.defineProperty(this, "root", { value: root });
    return root;
  }
  get uid() {
    if (this._uid == null)
      throw new Error("\u{1F534} uid not available before form is initialized");
    return this._uid;
  }
};

// src/csuite/model/runWithGlobalForm.ts
import { nanoid as nanoid2 } from "nanoid";
var GlobalFormCtx = class {
  constructor() {
    this.id = nanoid2();
    this.currentForm = null;
  }
};
var globalCtx = new GlobalFormCtx();
globalThis.globalCtx = globalCtx;
var runWithGlobalForm = (form, f) => {
  if (globalCtx.currentForm === form)
    return f();
  const prev = globalCtx.currentForm;
  globalCtx.currentForm = form;
  const res = f();
  globalCtx.currentForm = prev;
  return res;
};
var getCurrentForm_IMPL = () => {
  if (globalCtx.currentForm == null) {
    console.log(`[\u{1F459}] `, globalCtx);
    debugger;
    throw new Error(`No form in context !`);
  }
  return globalCtx.currentForm;
};

// src/csuite/model/ModelManager.ts
var ModelManager = class {
  constructor(builderCtor) {
    this.builderCtor = builderCtor;
    //
    this._allForms = /* @__PURE__ */ new Map();
    this._allWidgets = /* @__PURE__ */ new Map();
    this._allWidgetsByType = /* @__PURE__ */ new Map();
    this.getFormByID = (uid) => {
      return this._allForms.get(uid);
    };
    this.getWidgetByID = (widgetUID) => {
      return this._allWidgets.get(widgetUID);
    };
    /**
     * return all currently instanciated widgets
     * field of a given input type
     */
    this.getWidgetsByType = (type) => {
      const typeStore = this._allWidgetsByType.get(type);
      if (!typeStore)
        return [];
      return Array.from(typeStore.values());
    };
    this._builders = /* @__PURE__ */ new WeakMap();
    this.getBuilder = (form) => {
      const prev = this._builders.get(form);
      if (prev)
        return prev;
      const builder = new this.builderCtor(form);
      this._builders.set(form, builder);
      return builder;
    };
    /** LEGACY API; TYPES ARE COMPLICATED DUE TO MAINTAINING BACKWARD COMPAT */
    this.fields = (buildFn, modelConfig = { name: "unnamed" }) => {
      const FN = (domain) => {
        return runWithGlobalForm(
          domain,
          () => domain.group({
            label: false,
            items: buildFn(domain),
            collapsed: false
          })
        );
      };
      const form = new Model(this, FN, modelConfig, null);
      return form;
    };
  }
  /** simple alias to create a new Form */
  form(buildFn, modelConfig = { name: "unnamed" }) {
    return new Model(this, buildFn, modelConfig, null);
  }
  /** simple way to defined forms and in react components */
  use(ui, formProperties = { name: "unnamed" }, deps = []) {
    return useMemo3(() => {
      return new Model(this, ui, formProperties, null);
    }, deps);
  }
  formWithContext(buildFn, context, modelConfig = { name: "unnamed" }) {
    return new Model(this, buildFn, modelConfig, context);
  }
  /** simple way to defined forms and in react components */
  useWithContext(buildFn, context, formProperties = { name: "unnamed" }, deps = []) {
    return useMemo3(() => {
      return new Model(this, buildFn, formProperties, context);
    }, deps);
  }
};

// src/csuite/simple/SimpleDomain.ts
import { makeAutoObservable as makeAutoObservable13, reaction as reaction2 } from "mobx";

// src/csuite/fields/bool/WidgetBool.tsx
import { computed as computed3, observable as observable8, runInAction as runInAction4 } from "mobx";
import { nanoid as nanoid6 } from "nanoid";

// src/csuite/model/BaseField.tsx
import { observer as observer38 } from "mobx-react-lite";

// src/panels/libraryUI/tree/nodes/TreeWidget.tsx
import { makeAutoObservable as makeAutoObservable4 } from "mobx";
var TreeWidget = class {
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
      return this.widget.subWidgetsWithKeys.map((w) => w.widget.asTreeElement(w.key));
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
    makeAutoObservable4(this);
  }
  get widget() {
    return this.widgetWithKey.widget;
  }
  /** config label, or parent key */
  get label() {
    if (this.widget.config.label)
      return this.widget.config.label;
    return this.widgetWithKey.key;
  }
  get name() {
    return `${this.label} = ${this.widget.id}`;
  }
  get isFolder() {
    return this.widget.subWidgets.length > 0;
  }
};

// src/utils/mobx-store-inheritance.ts
import { $mobx, isObservable as isObservable2, makeObservable as makeObservable2 } from "mobx";
var annotationsSymbol = Symbol();
var objectPrototype = Object.prototype;
var makeAutoObservableInheritance = (target, overrides, options) => {
  if (isObservable2(target)) {
    throw new Error("Target must not be observable");
  }
  let annotations = target[annotationsSymbol];
  if (!annotations) {
    annotations = {};
    let current = target;
    while (current && current !== objectPrototype) {
      Reflect.ownKeys(current).forEach((key) => {
        if (key === $mobx || key === "constructor")
          return;
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
  return makeObservable2(target, annotations, options);
};

// src/csuite/ctx/CSuiteOverride.tsx
import { observer as observer10 } from "mobx-react-lite";
import { useMemo as useMemo4 } from "react";

// src/csuite/ctx/CSuiteCtx.ts
import { createContext as createContext3 } from "react";

// src/csuite/ctx/CSuite_theme1.ts
var CSuite_theme1 = {
  clickAndSlideMultiplicator: 1,
  showWidgetUndo: true,
  showWidgetMenu: true,
  showWidgetDiff: true,
  showToggleButtonBox: false,
  inputBorder: new NumberVar("input-border", 8),
  base: new Kolor(0.987, 0.01, 286),
  baseStr: "oklch(0.987 0.01 286)",
  text: { contrast: 0.824 },
  labelText: { contrast: 0.48, chroma: 0.035 },
  shiftDirection: 1,
  inputHeight: 1.6,
  showWidgetExtra: true,
  truncateLabels: false
};

// src/csuite/ctx/CSuiteCtx.ts
var CSuiteCtx = createContext3(CSuite_theme1);

// src/csuite/ctx/useCSuite.ts
import { useContext as useContext3 } from "react";
var useCSuite = () => useContext3(CSuiteCtx);

// src/csuite/ctx/CSuiteOverride.tsx
var CSuiteOverride = observer10(function CSuiteOverride_(p) {
  const prev = useCSuite();
  const config = useMemo4(
    () => new Proxy(p.config, {
      get: (target, prop) => prop in target ? target[prop] : prev[prop]
    }),
    [p.config]
  );
  return /* @__PURE__ */ jsx(CSuiteCtx.Provider, { value: config, children: /* @__PURE__ */ jsx(
    Frame,
    {
      className: p.className,
      base: cushy.theme.value.base,
      text: cushy.themeText,
      style: {
        // @ts-expect-error 🔴
        "--KLR": config.baseStr,
        // '--KLRH': config.baseStr,
        // '--input-border': getNum(config.inputBorder) / 100,
        "--DIR": config.shiftDirection,
        "--roundness": "5px",
        "--input-height": `${config.inputHeight}rem`,
        "--input-icon-height": `${config.inputHeight / 1.8}rem`
      },
      children: p.children
    }
  ) });
});

// src/csuite/form/getActualWidgetToDisplay.tsx
function getActualWidgetToDisplay(originalWidget) {
  if (isWidgetOptional(originalWidget))
    return getActualWidgetToDisplay(originalWidget.child);
  if (isWidgetShared(originalWidget))
    return getActualWidgetToDisplay(originalWidget.shared);
  return originalWidget;
}

// src/csuite/form/Widget_ToggleUI.tsx
import { observer as observer15 } from "mobx-react-lite";

// src/csuite/checkbox/InputBoolUI.tsx
import { observer as observer14 } from "mobx-react-lite";
import { createElement as createElement3 } from "react";

// src/csuite/checkbox/InputBoolCheckboxUI.tsx
import { observer as observer11 } from "mobx-react-lite";

// src/csuite/checkbox/_InputBoolChroma.ts
var getInputBoolChroma = (isActive) => {
  return isActive ? 0.06 : 0.03;
};
var getInputBoolContrast = (isActive) => {
  return isActive ? 0.3 : 0.05;
};

// src/csuite/checkbox/InputBoolCheckboxUI.tsx
var InputBoolCheckboxUI = observer11(function InputBoolCheckboxUI_(p) {
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
      hover: true,
      triggerOnPress: { startingState: isActive },
      expand: p.expand,
      tw: ["flex flex-row !select-none cursor-pointer"],
      onClick: (ev) => {
        if (!p.onValueChange)
          return;
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

// src/csuite/checkbox/InputBoolToggleButtonUI.tsx
import { observer as observer13 } from "mobx-react-lite";

// src/csuite/checkbox/_InputBoolToggleButtonBoxUI.tsx
import { observer as observer12 } from "mobx-react-lite";
var InputBoolToggleButtonBoxUI = observer12(function InputBoolToggleButtonBoxUI_(p) {
  const { mode, isActive } = p;
  const chroma = isActive ? 0.08 : 0.02;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Frame, { tw: "text-lg mr-1", text: { contrast: 0.3, chroma: isActive ? 0.15 : chroma }, children: mode === "radio" ? isActive ? /* @__PURE__ */ jsx(Ikon.mdiCheckCircle, {}) : /* @__PURE__ */ jsx(Ikon.mdiCircleOutline, {}) : mode === "checkbox" ? isActive ? /* @__PURE__ */ jsx(Ikon.mdiCheckboxMarked, {}) : /* @__PURE__ */ jsx(Ikon.mdiCheckboxBlankOutline, {}) : null }) });
});

// src/csuite/checkbox/InputBoolToggleButtonUI.tsx
var InputBoolToggleButtonUI = observer13(function InputBoolToggleButtonUI_(p) {
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
      look: "default",
      base: { contrast: getInputBoolContrast(isActive), chroma },
      border: 10,
      iconSize: "1.5em",
      hover: !p.disabled,
      expand,
      style: p.style,
      hovered: p.hovered,
      icon: p.icon,
      ...p.box,
      onClick: (ev) => {
        ev.stopPropagation();
        p.onValueChange?.(!isActive);
        if (p.preventDefault)
          ev.preventDefault();
      },
      children: [
        (p.showToggleButtonBox ?? kit.showToggleButtonBox) && p.mode && /* @__PURE__ */ jsx(InputBoolToggleButtonBoxUI, { isActive, mode: p.mode }),
        p.children ?? /* @__PURE__ */ jsx("p", { tw: "w-full text-center", children: p.text })
      ]
    }
  );
});

// src/csuite/checkbox/InputBoolUI.tsx
var InputBoolUI = observer14(function InputBoolUI_(p) {
  const display = p.display ?? "check";
  if (display === "check")
    return createElement3(InputBoolCheckboxUI, p);
  return createElement3(InputBoolToggleButtonUI, p);
});

// src/csuite/form/Widget_ToggleUI.tsx
var Widget_ToggleUI = observer15(function Widget_ToggleUI_(p) {
  if (!isWidgetOptional(p.widget))
    return null;
  const widget = p.widget;
  return /* @__PURE__ */ jsx(
    InputBoolUI,
    {
      className: p.className,
      value: widget.serial.active,
      expand: false,
      onValueChange: (value) => widget.setActive(value)
    }
  );
});

// src/csuite/form/WidgetErrorsUI.tsx
import { observer as observer16 } from "mobx-react-lite";
var WidgetErrorsUI = observer16(function WidgerErrorsUI_(p) {
  const widget = p.widget;
  if (widget.hasErrors === false)
    return null;
  return /* @__PURE__ */ jsx(MessageErrorUI, { children: widget.errors.map((e, i) => /* @__PURE__ */ jsxs("div", { tw: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsx(Ikon.mdiAlert, {}),
    e.message
  ] }, i)) });
});

// src/csuite/form/WidgetHeaderContainerUI.tsx
import { observer as observer17 } from "mobx-react-lite";
var isDragging = false;
var wasEnabled = false;
var isDraggingListener2 = (ev) => {
  if (ev.button == 0) {
    isDragging = false;
    window.removeEventListener("mouseup", isDraggingListener2, true);
  }
};
var WidgetHeaderContainerUI = observer17(function WidgetHeaderContainerUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "WIDGET-HEADER COLLAPSE-PASSTHROUGH",
      tw: [
        "flex gap-0.5 select-none",
        // 2024-06-03 rvion, changing 'items-center' to 'items-start'
        // as well as adding some `h-input` class to <WidgetLabelContainerUI />
        "items-start"
      ],
      onMouseDown: (ev) => {
        if (ev.button != 0 || !widget.isCollapsible)
          return;
        const target = ev.target;
        if (!target.classList.contains("COLLAPSE-PASSTHROUGH"))
          return;
        isDragging = true;
        window.addEventListener("mouseup", isDraggingListener2, true);
        wasEnabled = !widget.serial.collapsed;
        widget.setCollapsed(wasEnabled);
      },
      onMouseMove: (ev) => {
        if (!isDragging || !widget.isCollapsible)
          return;
        widget.setCollapsed(wasEnabled);
      },
      children: p.children
    }
  );
});

// src/csuite/form/WidgetLabelCaretUI.tsx
import { observer as observer18 } from "mobx-react-lite";
var WidgetLabelCaretUI = observer18(function WidgetLabelCaretUI_(p) {
  if (!p.widget.isCollapsed && !p.widget.isCollapsible)
    return null;
  return /* @__PURE__ */ jsx(WidgetLabelCaretAlwaysUI, { isCollapsed: p.widget.isCollapsed });
});
var WidgetLabelCaretAlwaysUI = observer18(function WidgetLabelCaretAlways_({ isCollapsed }) {
  if (isCollapsed)
    return /* @__PURE__ */ jsx(Ikon.mdiChevronRight, { tw: "COLLAPSE-PASSTHROUGH" });
  return /* @__PURE__ */ jsx(Ikon.mdiChevronDown, { tw: "COLLAPSE-PASSTHROUGH" });
});

// src/csuite/form/WidgetLabelContainerUI.tsx
import { observer as observer19 } from "mobx-react-lite";
var WidgetLabelContainerUI = observer19(function WidgetLabelContainerUI_(p) {
  const csuite = useCSuite();
  return /* @__PURE__ */ jsx(
    Frame,
    {
      className: p.className,
      hover: true,
      tw: [
        "COLLAPSE-PASSTHROUGH",
        "minh-input",
        "flex",
        // gap-0.5
        "flex-none shrink-0",
        "items-center"
      ],
      style: p.justify ? justifiedStyle : void 0,
      text: csuite.labelText,
      children: p.children
    }
  );
});
var justifiedStyle = {
  textAlign: "right",
  minWidth: "8rem",
  // 🔴 move to theme options
  width: "35%",
  // 🔴 move to theme options
  marginRight: "0.25rem",
  // 🔴 move to theme options
  justifyContent: "flex-end"
};

// src/csuite/form/WidgetLabelIconUI.tsx
import { observer as observer20 } from "mobx-react-lite";
var WidgetLabelIconUI = observer20(function WidgetLabelIconUI_(p) {
  const iconName = p.widget.icon;
  if (iconName == null)
    return null;
  return /* @__PURE__ */ jsx(Frame, { tw: "mr-1", text: { chroma: 0.2, contrast: 0.9 }, children: /* @__PURE__ */ jsx(IkonOf, { name: iconName }) });
});

// src/csuite/form/WidgetWithLabelUI.tsx
import { observer as observer37 } from "mobx-react-lite";

// src/csuite/errors/ErrorBoundaryUI.tsx
import { observer as observer22 } from "mobx-react-lite";
import { ErrorBoundary } from "react-error-boundary";

// src/widgets/workspace/JsonViewUI.tsx
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

// src/csuite/smooth-size/AnimatedSizeUI.tsx
import { observer as observer23 } from "mobx-react-lite";

// src/csuite/smooth-size/useSizeOf.tsx
import { runInAction as runInAction2 } from "mobx";
import { useLocalObservable as useLocalObservable2 } from "mobx-react-lite";
import { useCallback } from "react";

// src/csuite/utils/bang.ts
var bang = (x, msg = "") => {
  if (x == null) {
    console.error(`[\u{1F534}] BANG FAILED`, msg);
    throw new Error("bang: " + (msg ?? "no message"));
  }
  return x;
};

// src/csuite/smooth-size/useSizeOf.tsx
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
      if (e == null)
        return size2.observer.disconnect();
      size2.observer.observe(e);
    },
    [size2]
  );
  return { ref: refFn, size: size2 };
};

// src/csuite/smooth-size/AnimatedSizeUI.tsx
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
  if (s == null)
    return "";
  if (s.length === 0)
    return s;
  s = s.replace(/([a-z])([A-Z])/g, "$1 $2");
  s = s.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  s = s.replace(/_/g, " ");
  s = s.replace(/([a-z])([A-Z])/g, "$1 $2");
  s = s.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  s = s.replace(/([0-9])([a-zA-Z])/g, "$1 $2");
  s = s.replace(/([a-zA-Z])([0-9])/g, "$1 $2");
  return s[0].toUpperCase() + s.slice(1);
}

// src/csuite/form/getIfWidgetNeedAlignedLabel.tsx
var getIfWidgetNeedJustifiedLabel = (widget) => {
  if (widget.config.justifyLabel != null)
    return widget.config.justifyLabel;
  if (widget.DefaultBodyUI)
    return false;
  return true;
};

// src/csuite/form/WidgetDebugIDUI.tsx
import { observer as observer24 } from "mobx-react-lite";
var WidgetDebugIDUI = observer24(function WidgetDebugIDUI_(p) {
  return /* @__PURE__ */ jsxs("span", { tw: "COLLAPSE-PASSTHROUGH opacity-50 italic text-sm", children: [
    "#",
    p.widget.id.slice(0, 3)
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
        "widget-header-container-ui",
        "COLLAPSE-PASSTHROUGH",
        "flex flex-1 items-center gap-0.5"
      ],
      children: p.children
    }
  );
});

// src/csuite/form/WidgetLabelUI.tsx
import { observer as observer26 } from "mobx-react-lite";
var WidgetLabelUI = observer26(function WidgetLabelUI_(p) {
  const csuite = useCSuite();
  return /* @__PURE__ */ jsx(
    "span",
    {
      tw: [
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

// src/csuite/form/WidgetMenu.tsx
import { observer as observer34 } from "mobx-react-lite";

// src/csuite/dropdown/MenuDividerUI.tsx
function MenuDividerUI_() {
  return /* @__PURE__ */ jsx("div", { tw: "divider my-0" });
}

// src/csuite/menu/Menu.ts
import { nanoid as nanoid3 } from "nanoid";
import { createElement as createElement5, useMemo as useMemo5 } from "react";

// src/csuite/activity/ActivityManager.ts
import { makeAutoObservable as makeAutoObservable5 } from "mobx";
var ActivityManager = class {
  constructor() {
    /** currently active activities */
    this._stack = [];
    this.startActivity = (activity) => {
      this._stack.push(activity);
      activity.onStart?.();
      return "SUCCESS" /* Success */;
    };
    this.stopCurrentActivity = () => {
      const activity = this._stack.pop();
      activity?.onStop?.();
    };
    this.current = () => this._stack[this._stack.length - 1];
    makeAutoObservable5(this);
  }
  stopActivity(activity) {
    const ix = this._stack.indexOf(activity);
    if (ix === -1)
      return;
    this._stack.splice(ix, 1);
    activity.onStop?.();
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

// src/csuite/commands/CommandManager.ts
import { computed as computed2, makeObservable as makeObservable4, observable as observable6 } from "mobx";

// src/csuite/environment/getOS.ts
var _os;
function getOS() {
  if (_os)
    return _os;
  _os = getOS_();
  return _os;
}
function getOS_() {
  try {
    const userAgent = window.navigator.userAgent;
    const platform2 = window.navigator.platform;
    if (["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(platform2) !== -1)
      return "Mac";
    else if (["iPhone", "iPad", "iPod"].indexOf(platform2) !== -1)
      return "iOS";
    else if (["Win32", "Win64", "Windows", "WinCE"].indexOf(platform2) !== -1)
      return "Windows";
    else if (/Android/.test(userAgent))
      return "Android";
    else if (/Linux/.test(platform2))
      return "Linux";
    return "unknown";
  } catch (e) {
    return "unknown";
  }
}

// src/csuite/accelerators/META_NAME.ts
var platform = getOS();
var MOD_KEY = platform === "Mac" ? "cmd" : "ctrl";
var META_NAME = platform === "Mac" ? "cmd" : "win";

// src/csuite/utils/ManualPromise.ts
import { action as action2, makeObservable as makeObservable3, observable as observable5, runInAction as runInAction3 } from "mobx";
var isPromise = (p) => {
  return p != null && typeof p.then === "function";
};

// src/csuite/commands/CommandManager.ts
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
      if (ev.ctrlKey)
        inputAccum.push("ctrl");
      if (ev.shiftKey)
        inputAccum.push("shift");
      if (ev.altKey)
        inputAccum.push("alt");
      if (ev.metaKey)
        inputAccum.push(META_NAME);
      const key = ev.key;
      if (key) {
        if (key === " ")
          inputAccum.push("space");
        else
          inputAccum.push(key.toLowerCase());
      }
      const input = inputAccum.sort(sortKeyNamesFn).join("+").toLowerCase();
      return input;
    };
    this.processKeyDownEvent = (ev) => {
      const input = this.inputToken(ev);
      if (this.conf.log)
        this.log(input);
      if (this.inputHistory.length > 3)
        this.inputHistory.shift();
      this.inputHistory.push(input);
      const inInput = this.evInInput(ev);
      const lastX = this.inputHistory.slice(-5);
      for (let x = 0; x < lastX.length; x++) {
        const shortcut = lastX.slice(x).join(" ");
        const matches = this.commandByShortcut.get(shortcut);
        for (const s of matches || []) {
          if (inInput && !s.validInInput)
            continue;
          if (this.conf.log || s.action == null)
            this.log(shortcut, `triggered (${s.label})`);
          const done = this.tryToRun(s, ev);
          if (done)
            return "SUCCESS" /* Success */;
        }
      }
      if (this.conf.log)
        this.log("nothing found");
      return "UNMATCHED" /* UNMATCHED */;
    };
    this.tryToRun = (s, ev) => {
      if (s.action == null)
        return false;
      const res = s.execute();
      if (isPromise(res)) {
        return true;
      }
      if (this.conf.log) {
        if (res === "SUCCESS" /* Success */)
          this.log("          -> executed");
      }
      if (res === "UNMATCHED" /* UNMATCHED */)
        return false;
      if (res === "DONE" /* FAILED */)
        return false;
      if (res === "SUCCESS" /* Success */ && s.continueAfterSuccess)
        return false;
      if (res === "SUCCESS" /* Success */) {
        ev.stopPropagation();
        ev.preventDefault();
        return true;
      }
      exhaust(res);
      throw new Error(`INVALID CASE`);
    };
    makeObservable4(this, {
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
  if (input.includes(" "))
    throw new Error(`invalid raw input token: "${input}"`);
  return input.split("+").map(normalizeKey).sort(sortKeyNamesFn).join("+").toLowerCase();
}
function normalizeKey(key) {
  if (key === "up")
    return "ArrowUp";
  if (key === "down")
    return "ArrowDown";
  if (key === "left")
    return "ArrowLeft";
  if (key === "right")
    return "ArrowRight";
  if (key === "mod")
    return MOD_KEY;
  if (key === "meta")
    return META_NAME;
  return key;
}
var keyPriorityWhenSorting = (key) => {
  if (key === "ctrl")
    return "__1ctrl";
  if (key === "win")
    return "__1win";
  if (key === "cmd")
    return "__1cmd";
  if (key === "shift")
    return "__2shift";
  if (key === "alt")
    return "__3alt";
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
  /** bind a command to a static context, bypassing its context provider */
  bind(ctx) {
    return new BoundCommand(this, ctx);
  }
};
var BoundCommand = class {
  constructor(command, ctx, ui) {
    this.command = command;
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
  get label() {
    return this.ui?.label ?? this.command.label;
  }
};

// src/csuite/introspect/_isBoundMenu.tsx
var BoundMenuSym = Symbol("BoundMenu");
var isBoundMenu = (x) => x != null && //
typeof x === "object" && "$SYM" in x && x.$SYM === BoundMenuSym;

// src/csuite/menu/MenuUI.tsx
import { observer as observer29 } from "mobx-react-lite";
import { createElement as createElement4 } from "react";
import { Fragment as Fragment3 } from "react/jsx-runtime";

// src/csuite/dropdown/MenuItem.tsx
import { observer as observer28 } from "mobx-react-lite";

// src/csuite/accelerators/ComboUI.tsx
import { observer as observer27 } from "mobx-react-lite";
import { Fragment as Fragment2 } from "react";
var ComboUI = observer27(function ComboUI_(p) {
  if (p.combo == null)
    return null;
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
  if (keyName === "arrowup")
    return "\u2191";
  if (keyName === "arrowdown")
    return "\u2193";
  if (keyName === "arrowleft")
    return "\u2190";
  if (keyName === "arrowright")
    return "\u2192";
  if (keyName === "alt")
    return "\u2325";
  if (keyName === "shift")
    return "\u21E7";
  if (keyName === "cmd")
    return "\u2318";
  if (keyName === "ctrl")
    return "\u2303";
  if (keyName === "win")
    return "win";
  return keyName.toUpperCase();
};

// src/csuite/dropdown/MenuItem.tsx
var MenuItem = observer28(function DropdownItem_(p) {
  const { size: size2, label, disabled, icon, children, active, onClick, ...rest } = p;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      text: { contrast: disabled ? 0.5 : 1 },
      base: {
        contrast: active ? 0.1 : 0,
        chroma: active ? 0.1 : void 0
      },
      hover: 15,
      onClick: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        p.onClick?.(ev);
      },
      style: { lineHeight: "1.6rem" },
      tw: ["_MenuItem", "px-2 py-0.5 flex items-center gap-2 whitespace-nowrap cursor-pointer"],
      ...rest,
      children: [
        icon,
        label,
        children,
        p.shortcut ? /* @__PURE__ */ jsx("div", { tw: "ml-auto pl-2 text-xs italic", children: p.shortcut && /* @__PURE__ */ jsx(ComboUI, { combo: p.shortcut }) }) : null
      ]
    }
  );
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
var MenuRootUI = observer29(function MenuRootUI_(p) {
  return /* @__PURE__ */ jsx(RevealUI, { className: "dropdown", placement: "bottomStart", content: () => /* @__PURE__ */ jsx(p.menu.UI, {}), children: /* @__PURE__ */ jsx("label", { tabIndex: 0, tw: [`flex-nowrap btn btn-ghost btn-sm py-0 px-1.5`], children: p.menu.menu.title }) });
});
var MenuUI = observer29(function MenuUI_(p) {
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
            if (entry.entry instanceof SimpleMenuAction)
              entry.entry.opts.onPick();
            else if (isBoundCommand(entry.entry))
              void entry.entry.execute();
            else if (isCommand(entry.entry))
              void entry.entry.execute();
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
              shortcut: char,
              label: entry.opts.label,
              icon: entry.opts.icon ? /* @__PURE__ */ jsx(IkonOf, { name: entry.opts.icon }) : void 0,
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
              shortcut: char,
              label: entry.p.label,
              onClick: (event) => {
                activityManager.startActivity({
                  event,
                  uid: "createPreset\u2753",
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
              shortcut: char,
              onClick: () => {
                void entry.execute();
                p.menu.onStop();
              },
              label: charIx != null ? /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { children: label.slice(0, charIx) }),
                /* @__PURE__ */ jsx("span", { tw: "underline text-red", children: label[charIx] }),
                /* @__PURE__ */ jsx("span", { children: label.slice(charIx + 1) })
              ] }) : label
            },
            ix
          );
        } else if (isBoundMenu(entry)) {
          const label = entry.title;
          return /* @__PURE__ */ jsx(
            RevealUI,
            {
              trigger: "hover",
              tw: "min-w-60",
              placement: "rightStart",
              content: () => /* @__PURE__ */ jsx(MenuUI, { menu: entry.init(p.menu.allocatedKeys) }),
              children: /* @__PURE__ */ jsx(
                MenuItem,
                {
                  shortcut: char,
                  label: /* @__PURE__ */ jsxs(Fragment3, { children: [
                    charIx != null ? /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { children: label.slice(0, charIx) }),
                      /* @__PURE__ */ jsx("span", { tw: "underline text-red", children: label[charIx] }),
                      /* @__PURE__ */ jsx("span", { children: label.slice(charIx + 1) })
                    ] }) : label,
                    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "keyboard_arrow_right" })
                  ] })
                },
                ix
              )
            }
          );
        } else if (isWidget(entry)) {
          return entry.renderWithLabel();
        } else {
          return /* @__PURE__ */ jsx(Fragment3, { children: createElement4(entry) }, ix);
        }
      })
    }
  );
});

// src/csuite/menu/Menu.ts
var MenuManager = class {
  constructor() {
    this.operators = [];
    this.registerMenu = (menu2) => this.operators.push(menu2);
    this.getMenuById = (id) => this.operators.find((op) => op.def.id === id);
  }
};
var menuManager = new MenuManager();
var Menu = class {
  // prettier-ignore
  constructor(def) {
    this.def = def;
    this.UI = (p) => createElement5(MenuUI, { menu: useMemo5(() => new MenuInstance(this, p.props), []) });
    this.DropDownUI = (p) => createElement5(MenuRootUI, { menu: useMemo5(() => new MenuInstance(this, p.props), []) });
    // prettier-ignore
    /** bind a menu to give props */
    this.bind = (props, ui) => new BoundMenu(this, props, ui);
    this.id = def.id ?? nanoid3();
    menuManager.registerMenu(this);
  }
  get title() {
    return this.def.title;
  }
  /** push the menu to current activity */
  open(props) {
    const instance = new MenuInstance(this, props);
    return activityManager.startActivity(instance);
  }
};
var MenuInstance = class {
  constructor(menu2, props, keysTaken = /* @__PURE__ */ new Set()) {
    this.menu = menu2;
    this.props = props;
    this.keysTaken = keysTaken;
    this.onStart = () => {
    };
    this.UI = () => createElement5(MenuUI, { menu: this });
    this.onEvent = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
      return null;
    };
    this.onStop = () => {
    };
    this.uid = nanoid3();
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
  get entries() {
    return this.menu.def.entries(this.props);
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
        if (res == null)
          continue;
        out.push({ entry, char: res.char, charIx: res.pos });
      } else if (entry instanceof Command) {
        const res = this.findSuitableKeys(entry.label, allocatedKeys);
        if (res == null)
          continue;
        out.push({ entry, char: res.char, charIx: res.pos });
      } else if (entry instanceof BoundMenu) {
        const res = this.findSuitableKeys(entry.menu.title, allocatedKeys);
        if (res == null)
          continue;
        out.push({ entry, char: res.char, charIx: res.pos });
      } else {
        out.push({ entry });
      }
    }
    return { out, allocatedKeys };
  }
};
var menu = (def) => new Menu(def);
var BoundMenu = class {
  constructor(menu2, props, ui) {
    this.menu = menu2;
    this.props = props;
    this.ui = ui;
    this.$SYM = BoundMenuSym;
    this.open = () => this.menu.open(this.props);
    this.init = (keysTaken) => new MenuInstance(this.menu, this.props, keysTaken);
  }
  get title() {
    return this.ui?.title ?? this.menu.title;
  }
};

// src/csuite/tree/Tree.ts
import { makeAutoObservable as makeAutoObservable7, observable as observable7 } from "mobx";
import { nanoid as nanoid4 } from "nanoid";

// src/db/SQLITE_boolean.ts
var SQLITE_true = 1;
var SQLITE_false = 0;

// src/csuite/tree/TreeNode.ts
import { makeAutoObservable as makeAutoObservable6 } from "mobx";

// src/csuite/tree/utils.ts
import { customAlphabet as customAlphabet2 } from "nanoid";
var genUID = customAlphabet2("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 5);
var FAIL = (msg, data) => {
  throw new Error(`\u{1F534} ${msg}`, data);
};

// src/csuite/tree/TreeNode.ts
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
    makeAutoObservable6(this, { _children_: false });
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
    if (this.isOpen)
      this.close();
    else
      this.open();
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
    if (this.parent == null)
      return 0;
    return 1 + this.parent.depth;
  }
  get siblingsIncludingSelf() {
    if (this.parent == null)
      return this.tree.topLevelNodes;
    return this.parent.children;
  }
  get siblingsExcludingSelf() {
    return this.siblingsIncludingSelf.filter((i) => i !== this);
  }
  get nextSibling() {
    let siblings = this.siblingsIncludingSelf;
    if (siblings.length === 0)
      FAIL("IMPOSSIBLE 1");
    if (siblings[siblings.length - 1] === this)
      return;
    for (let i = 0; i < siblings.length - 1; i++) {
      if (siblings[i] === this)
        return siblings[i + 1];
    }
    return;
  }
  get prevSibling() {
    let siblings = this.siblingsIncludingSelf;
    let SELF = this;
    if (siblings.length === 0)
      FAIL("IMPOSSIBLE 2");
    if (siblings[0] === SELF)
      return;
    for (let i = siblings.length - 1; i > 0; i--) {
      if (siblings[i] === SELF)
        return siblings[i - 1];
    }
    return;
  }
  /** return the first child of a given node
   * or undefined if node has no child */
  get firstChild() {
    const children = this.children;
    if (children.length === 0)
      return;
    return children[0];
  }
  get_descendant_and_self(mode) {
    const stack = [this];
    let ix = 0;
    let at;
    while (at = stack[ix++]) {
      if (mode === "bfs")
        stack.push(...at.children);
      else
        stack.splice(ix, 0, ...at.children);
    }
    return stack;
  }
  get lastChild() {
    if (this.children.length === 0)
      return;
    return this.children[this.children.length - 1];
  }
  /** return the last descendant
   * [a[b,c],x[y,z]] => z */
  get lastDescendant() {
    let at = this;
    let out;
    while (at = at.lastChild)
      out = at;
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
    if (!at.isOpen)
      return;
    while (at = at.lastChild) {
      out = at;
      if (!at.isOpen)
        break;
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
    if (this.isOpen && this.firstChild)
      return this.firstChild;
    if (this.nextSibling)
      return this.nextSibling;
    let at = this;
    while (at = at.parent)
      if (at.nextSibling)
        return at.nextSibling;
  }
};

// src/csuite/tree/Tree.ts
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
    this.KeyboardNavigableDomNodeID = nanoid4();
    for (let uid of rootNodes) {
      const node = new TreeNode(this, uid, void 0);
      this.topLevelNodes.push(node);
    }
    makeAutoObservable7(this, {
      // indexNode: action
    });
  }
};

// src/csuite/tree/TreeUI.tsx
import { observer as observer33 } from "mobx-react-lite";

// src/app/shortcuts/shorcutKeys.ts
var KEYS = {
  search: "mod+f",
  // misc
  closeCurrentTab: "mod+w",
  closeDialogOrPopupsOrFullScreenPanel: "escape",
  // tree navigation -------------------------------------------------------------------------------
  // navigation -------------------------------------------------------------------------------------
  openFull_Library: "mod+p",
  openPage_Config: "mod+,",
  openPage_Hosts: "mod+shift+,",
  openPage_Shortcuts: "mod+k mod+s",
  //
  openPage_Civitai: "mod+k 1",
  openPage_Squoosh: "mod+k 2",
  openPage_Posemy: "mod+k 3",
  openPage_Paint: "mod+k 4",
  openPage_Unsplash: "mod+k 5",
  openPage_ComfyUI: "mod+4",
  openPage_Gallery: "mod+5",
  openPage_Models: "mod+6",
  openPage_Marketplace: "mod+7",
  // draft actions
  duplicateCurrentDraft: "mod+shift+d",
  resizeWindowForVideoCapture: "mod+u mod+2",
  resizeWindowForLaptop: "mod+u mod+3",
  resetLayout: "mod+u mod+1",
  // tree actions
  // global
  focusAppAndDraftTree: ["mod+1", "mod+shift+e", "mod+b"],
  focusFileExplorerTree: "mod+2",
  collapseAllTree: "mod+shift+k",
  // in-tree stuff
  // tree_focusFilter:                 '/',
  tree_moveUp: "ArrowUp",
  tree_moveDown: "ArrowDown",
  tree_moveRight: "ArrowRight",
  tree_moveLeft: "ArrowLeft",
  tree_deleteNodeAndFocusNodeAbove: "Backspace",
  tree_deleteNodeAndFocusNodeBelow: "Delete",
  tree_onPrimaryAction: "Enter",
  tree_movePageUp: "PageUp",
  tree_movePageDown: "PageDown"
};

// src/csuite/tree/TreeCtx.ts
import { createContext as createContext4, useContext as useContext4 } from "react";
var TreeViewCtx = createContext4(null);
var useTreeView = () => {
  const val = useContext4(TreeViewCtx);
  if (val == null)
    throw new Error("missing editor in current widget react contexts");
  return val;
};

// src/csuite/tree/TreeEntryUI.tsx
import { observer as observer32 } from "mobx-react-lite";
import { Fragment as Fragment4 } from "react";

// src/csuite/tree/RenderItemTitleUI.tsx
import { observer as observer31 } from "mobx-react-lite";

// src/csuite/tree/RenderTreeIcon1.tsx
import { observer as observer30 } from "mobx-react-lite";
var TreeIcon1UI = observer30(function TreeIcon1UI_(p) {
  const action3 = p;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: p.className,
      tw: "btn btn-xs btn-square btn-ghost",
      onClick: (e) => {
        e.stopPropagation();
        action3.onClick?.(p.node);
      },
      children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: action3.icon })
    },
    action3.name
  );
});

// src/csuite/tree/RenderItemTitleUI.tsx
var RenderItemTitleUI = observer31(function RenderItemTitleUI_(p) {
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
      item.actions?.map((action3, ix) => {
        return /* @__PURE__ */ jsx(TreeIcon1UI, { node, ...action3 }, ix);
      })
    ] })
  ] });
});

// src/csuite/tree/TreeEntryUI.tsx
var TreeEntryUI = observer32(function TreeEntryUI_(p) {
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
          // selected ? 'virtualBorder' : null,
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

// src/csuite/tree/TreeUI.tsx
var TreeUI = observer33(function TreeEditorUI_(p) {
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
            /* @__PURE__ */ jsx(ComboUI, { combo: KEYS.collapseAllTree })
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

// src/csuite/tree/TreeView.ts
import { makeAutoObservable as makeAutoObservable8 } from "mobx";
import { nanoid as nanoid5 } from "nanoid";
import { createRef } from "react";

// src/csuite/tree/TreeShortcuts.ts
var onKeyDownHandlers = (ev, view) => {
  if (ev.key === KEYS.tree_deleteNodeAndFocusNodeAbove)
    return view.deleteNodeAndFocusNodeAbove;
  if (ev.key === KEYS.tree_deleteNodeAndFocusNodeBelow)
    return view.deleteNodeAndFocusNodeBelow;
  if (ev.key === KEYS.tree_onPrimaryAction)
    return view.at?.onPrimaryAction;
  if (ev.key === KEYS.tree_movePageUp)
    return view.movePageUp;
  if (ev.key === KEYS.tree_movePageDown)
    return view.movePageDown;
  if (ev.key === KEYS.tree_moveUp)
    return view.moveUp;
  if (ev.key === KEYS.tree_moveDown)
    return view.moveDown;
  if (ev.key === KEYS.tree_moveRight)
    return view.moveRight;
  if (ev.key === KEYS.tree_moveLeft)
    return view.moveLeft;
};

// src/csuite/tree/TreeView.ts
var TreeView = class {
  constructor(tree, conf = {}) {
    this.tree = tree;
    this.conf = conf;
    /** treeview id; only for debugging purpose */
    this.id = nanoid5(4);
    this.filterRef = createRef();
    this.updateFilter = (xPath) => this.filter = xPath;
    this.focusFilter = () => {
      const curr = this.filterRef.current;
      if (!(curr instanceof HTMLElement))
        return;
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
      if (this.at == null)
        return this.resetCaretPos();
      const parent = this.at.nodeAboveInView;
      this.at.delete();
      this.setFocusAt(parent);
    };
    this.deleteNodeAndFocusNodeBelow = () => {
      if (this.at == null)
        return this.resetCaretPos();
      let parent = this.at.nodeAboveInView;
      this.at.delete();
      this.setFocusAt(parent?.nodeBelowInView ?? parent);
    };
    this.resetCaretPos = () => {
      this.setFocusAt(this.tree.topLevelNodes[0]);
    };
    this.moveUp = () => {
      if (this.at == null)
        return this.resetCaretPos();
      const nextAt = this.at.nodeAboveInView;
      if (nextAt)
        this.setFocusAt(nextAt);
    };
    this.movePageUp = () => {
      return this.resetCaretPos();
    };
    this.movePageDown = () => {
      if (this.at == null)
        return this.resetCaretPos();
      let ptr = this.at;
      let max = 100;
      let final = this.at;
      while ((ptr = ptr.nodeBelowInView) && max-- > 0) {
        final = ptr;
      }
      this.setFocusAt(final);
    };
    this.moveDown = () => {
      if (this.at == null)
        return this.resetCaretPos();
      const nextAt = this.at.nodeBelowInView;
      if (nextAt)
        this.setFocusAt(nextAt);
    };
    this.moveRight = () => {
      if (this.at == null)
        return this.resetCaretPos();
      const children = this.at.children;
      if (children.length > 0) {
        if (this.at.isOpen)
          return this.setFocusAt(children[0]);
        else
          return this.at.open();
      }
      return this.moveDown();
    };
    this.moveLeft = () => {
      if (this.at == null)
        return this.resetCaretPos();
      if (this.at.isOpen)
        return this.at.close();
      if (this.at.parent)
        return this.at = this.at.parent;
    };
    this.resetCaretPos();
    makeAutoObservable8(this, { filterRef: false, id: false });
  }
  get nodes() {
    return this.tree.topLevelNodes;
  }
  get cursorInfos() {
    const at = this.at;
    if (at == null)
      return null;
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
var toastInfo = (msg) => void toast(msg, { type: "info", position });
var toastError = (msg) => void toast(msg, { type: "error", position });

// src/csuite/form/WidgetMenu.tsx
var WidgetMenuUI = observer34(function WidgetMenuUI_(p) {
  return /* @__PURE__ */ jsx(RevealUI, { className: p.className, content: () => /* @__PURE__ */ jsx(menu_widgetActions.UI, { props: p.widget }), children: /* @__PURE__ */ jsx(Button, { subtle: true, icon: "mdiDotsVertical", look: "ghost", square: true, size: "input" }) });
});
var menu_widgetActions = menu({
  title: "widget actions",
  entries: (field) => {
    const out = [];
    out.push(
      new SimpleMenuAction({
        label: "Reset",
        icon: "mdiUndoVariant",
        disabled: () => !field.hasChanges,
        onPick: () => field.reset()
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
        submit: () => {
          console.log(`[\u{1F920}] values`);
        },
        UI: (w) => /* @__PURE__ */ jsx(CreatePresetUI, { widget: field })
      })
    );
    const presets = field.config.presets ?? [];
    if (presets.length > 0) {
      out.push(MenuDividerUI_);
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
var CreatePresetUI = observer34(function CreatePresetUI_(p) {
  const tree = new Tree([p.widget.asTreeElement("root")]);
  const treeView = new TreeView(tree, { selectable: true });
  return /* @__PURE__ */ jsx(
    TreeUI,
    {
      title: "Select values to include in preset",
      treeView
    }
  );
});

// src/csuite/form/WidgetTooltipUI.tsx
import { observer as observer35 } from "mobx-react-lite";
var WidgetTooltipUI = observer35(function WidgetTooltipUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(RevealUI, { content: () => /* @__PURE__ */ jsx("div", { children: widget.config.tooltip }), children: /* @__PURE__ */ jsx(Frame, { square: true, icon: "mdiInformationOutline" }) });
});

// src/csuite/form/WidgetUndoChangesButtonUI.tsx
import { observer as observer36 } from "mobx-react-lite";
var WidgetUndoChangesButtonUI = observer36(function WidgetUndoChangesButtonUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(
    Button,
    {
      subtle: true,
      className: p.className,
      onClick: () => widget?.reset(),
      disabled: !(widget?.hasChanges ?? false),
      icon: "mdiUndoVariant",
      look: "ghost",
      size: "input",
      square: true
    }
  );
});

// src/csuite/form/WidgetWithLabelUI.tsx
var WidgetWithLabelUI = observer37(function WidgetWithLabelUI_(p) {
  if (p.widget.isHidden)
    return null;
  const originalWidget = p.widget;
  const widget = getActualWidgetToDisplay(originalWidget);
  const HeaderUI = widget.header();
  const BodyUI = widget.body();
  const justify = p.justifyLabel ?? getIfWidgetNeedJustifiedLabel(widget);
  const extraClass = originalWidget.isDisabled ? "pointer-events-none opacity-30 bg-[#00000005]" : void 0;
  const csuite = useCSuite();
  const labelText = p.label ?? widget.config.label ?? makeLabelFromFieldName(p.fieldName);
  const WUI = /* @__PURE__ */ jsxs(
    Frame,
    {
      className: p.className,
      tw: "WidgetWithLabelUI flex flex-col gap-1",
      base: widget.background,
      border: widget.border,
      ...p.widget.config.box,
      children: [
        !p.noHeader && /* @__PURE__ */ jsxs(WidgetHeaderContainerUI, { widget, children: [
          /* @__PURE__ */ jsxs(WidgetLabelContainerUI, { justify, children: [
            /* @__PURE__ */ jsx(WidgetLabelCaretUI, { widget }),
            /* @__PURE__ */ jsx(WidgetLabelIconUI, { widget }),
            !justify && /* @__PURE__ */ jsx(Widget_ToggleUI, { tw: "mr-1", widget: originalWidget }),
            widget.config.tooltip && /* @__PURE__ */ jsx(WidgetTooltipUI, { widget }),
            /* @__PURE__ */ jsx(WidgetLabelUI, { widget, children: labelText }),
            widget.config.showID && /* @__PURE__ */ jsx(WidgetDebugIDUI, { widget }),
            justify && /* @__PURE__ */ jsx(Widget_ToggleUI, { tw: "ml-1", widget: originalWidget })
          ] }),
          HeaderUI && /* @__PURE__ */ jsx(WidgetHeaderControlsContainerUI, { className: extraClass, children: /* @__PURE__ */ jsx(ErrorBoundaryUI, { children: HeaderUI }) }),
          (p.showWidgetExtra ?? csuite.showWidgetExtra) && widget.spec.LabelExtraUI && /* @__PURE__ */ jsx(widget.spec.LabelExtraUI, { widget }),
          (p.showWidgetUndo ?? csuite.showWidgetUndo) && /* @__PURE__ */ jsx(WidgetUndoChangesButtonUI, { widget: originalWidget }),
          (p.showWidgetMenu ?? csuite.showWidgetMenu) && /* @__PURE__ */ jsx(WidgetMenuUI, { widget })
        ] }),
        !p.noBody && BodyUI && !widget.isCollapsed && /* @__PURE__ */ jsx(ErrorBoundaryUI, { children: /* @__PURE__ */ jsx("div", { className: extraClass, tw: [widget.isCollapsible && "WIDGET-BLOCK"], children: BodyUI }) }),
        !p.noErrors && /* @__PURE__ */ jsx(WidgetErrorsUI, { widget })
      ]
    }
  );
  if (widget.animateResize && !p.noBody && BodyUI)
    return /* @__PURE__ */ jsx(AnimatedSizeUI, { children: WUI });
  return WUI;
});

// src/csuite/model/Validation.ts
var normalizeProblem = (problem) => {
  if (problem === true)
    return [];
  if (problem === false)
    return [{ message: "Error" }];
  if (problem == null)
    return [];
  if (typeof problem === "string")
    return [{ message: problem }];
  if (Array.isArray(problem))
    return problem.flatMap((p) => normalizeProblem(p));
  return [problem];
};

// src/csuite/model/BaseField.tsx
var ensureObserver = (fn) => {
  if (fn == null)
    return null;
  const isObserver = "$$typeof" in fn && fn.$$typeof === Symbol.for("react.memo");
  const FmtUI = isObserver ? fn : observer38(fn);
  return FmtUI;
};
var BaseField = class {
  constructor() {
    this.UIToggle = (p) => /* @__PURE__ */ jsx(Widget_ToggleUI, { widget: this, ...p });
    this.UIErrors = () => /* @__PURE__ */ jsx(WidgetErrorsUI, { widget: this });
    this.UILabelCaret = () => /* @__PURE__ */ jsx(WidgetLabelCaretUI, { widget: this });
    this.UILabelIcon = () => /* @__PURE__ */ jsx(WidgetLabelIconUI, { widget: this });
    this.UILabelContainer = (p) => /* @__PURE__ */ jsx(WidgetLabelContainerUI, { ...p });
    this.UIHeaderContainer = (p) => /* @__PURE__ */ jsx(WidgetHeaderContainerUI, { widget: this, children: p.children });
    /**
     * 2024-05-24 rvion: do we want some abstract defaultValue() too ?
     * feels like it's going to be PITA to use for higher level objects 🤔
     * but also... why not...
     * 🔶 some widget like `WidgetPrompt` would not work with such logic
     * 🔶 some widget like `Optional` have no simple way to retrieve the default value
     */
    // abstract readonly defaultValue: this['spec']['$Value'] |
    this.$FieldSym = $FieldSym;
    /**
     * when this widget or one of its descendant publishes a value,
     * it will be stored here and possibly consumed by other descendants
     */
    this._advertisedValues = {};
  }
  // abstract readonly id: string
  asTreeElement(key) {
    return {
      key: this.id,
      ctor: TreeWidget,
      props: { key, widget: this }
    };
  }
  /** shorthand access to spec.config */
  get config() {
    return this.spec.config;
  }
  get animateResize() {
    return true;
  }
  /**
   * return true when widget has no child
   * return flase when widget has one or more child
   * */
  get hasNoChild() {
    return this.subWidgets.length === 0;
  }
  get diffSummaryFromSnapshot() {
    throw new Error("\u274C not implemented");
  }
  get diffSummaryFromDefault() {
    return [
      this.hasChanges ? `${this.path}(${this.value?.toString?.() ?? "."})` : null,
      ...this.subWidgets.map((w) => w.diffSummaryFromDefault)
    ].filter(Boolean).join("\n");
  }
  /** path within the model */
  get path() {
    const p = this.parent;
    if (p == null)
      return "$";
    return p.path + "." + this.mountKey;
  }
  get mountKey() {
    if (this.parent == null)
      return "$";
    return this.parent.subWidgetsWithKeys.find(({ widget }) => widget === this)?.key ?? "<error>";
  }
  /** collapse all children that can be collapsed */
  collapseAllChildren() {
    for (const _item of this.subWidgets) {
      const item = getActualWidgetToDisplay(_item);
      if (item.serial.collapsed)
        continue;
      const isCollapsible = item.isCollapsible;
      if (isCollapsible)
        item.setCollapsed(true);
    }
  }
  /** expand all children that can are collapsed */
  expandAllChildren() {
    for (const _item of this.subWidgets) {
      const item = getActualWidgetToDisplay(_item);
      item.setCollapsed(void 0);
    }
  }
  /**
   * when consuming an advertised value, walk upward the parent chain, and look for
   * a value stored in the advsertised values
   */
  // 🚴🏠 -> consume / pull / receive / fetch / ... ?
  consume(chan) {
    const channelId = typeof chan === "string" ? chan : chan.id;
    let at = this;
    while (at != null) {
      if (channelId in at._advertisedValues)
        return at._advertisedValues[channelId];
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
   * return a short string summary
   * expected to be overriden in child classes
   */
  get summary() {
    return JSON.stringify(this.value);
  }
  /** all errors: base (built-in widget) + custom (user-defined in config) */
  get errors() {
    const SELF = this;
    const baseErrors = normalizeProblem(SELF.baseErrors);
    return [...baseErrors, ...this.customErrors];
  }
  get customErrors() {
    const SELF = this;
    if (SELF.config.check == null)
      return [
        /* { message: 'No check function provided' } */
      ];
    const res = SELF.config.check(this);
    return normalizeProblem(res);
  }
  // BUMP ----------------------------------------------------
  bumpSerial() {
    this.form.serialChanged(this);
  }
  // 💬 2024-03-15 rvion: use this regexp to quickly review manual serial set patterns
  // | `serial\.[a-zA-Z_]+(\[[a-zA-Z_]+\])? = `
  bumpValue() {
    this.serial.lastUpdatedAt = Date.now();
    this.form.valueChanged(this);
    this.config.onValueChange?.(this.value, this);
    this.publishValue();
  }
  /**
   * this method can be heavilly optimized
   * todo:
   *  - by storing the published value locally
   *  - by defining a getter on the _advertisedValues object of all parents
   *  - by only setting this getter up once.
   * */
  publishValue() {
    const producers = this.spec.producers;
    if (producers.length === 0)
      return;
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
    if (this.config.hidden != null)
      return this.config.hidden;
    if (isWidgetGroup(this) && Object.keys(this.fields).length === 0)
      return true;
    return false;
  }
  /** whether the widget should be considered inactive */
  get isDisabled() {
    return isWidgetOptional(this) && !this.serial.active;
  }
  get isCollapsed() {
    if (!this.isCollapsible)
      return false;
    if (this.serial.collapsed != null)
      return this.serial.collapsed;
    if (this.parent?.isDisabled)
      return true;
    return false;
  }
  /** if specified, override the default algorithm to decide if the widget should have borders */
  get isCollapsible() {
    if (this.config.collapsed != null)
      return this.config.collapsed;
    if (!this.DefaultBodyUI)
      return false;
    if (this.config.label === false)
      return false;
    return true;
  }
  get background() {
    return this.config.background;
  }
  /** if provided, override the default logic to decide if the widget need to be bordered */
  get border() {
    if (this.parent == null)
      return false;
    if (this.config.border != null)
      return this.config.border;
    if (this.DefaultBodyUI == null)
      return false;
    return 5;
  }
  // FOLD ----------------------------------------------------
  setCollapsed(val) {
    if (this.serial.collapsed === val)
      return;
    this.serial.collapsed = val;
    this.form.serialChanged(this);
  }
  toggleCollapsed() {
    this.serial.collapsed = !this.serial.collapsed;
    this.form.serialChanged(this);
  }
  // UI ----------------------------------------------------
  renderSimple(p) {
    return /* @__PURE__ */ jsx(
      WidgetWithLabelUI,
      {
        widget: this,
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
        children: /* @__PURE__ */ jsx(WidgetWithLabelUI, { widget: this, fieldName: "_", ...p }, this.id)
      }
    );
  }
  renderWithLabel(p) {
    return /* @__PURE__ */ jsx(
      WidgetWithLabelUI,
      {
        widget: this,
        fieldName: "_",
        ...p
      },
      this.id
    );
  }
  defaultHeader() {
    if (this.DefaultHeaderUI == null)
      return;
    return /* @__PURE__ */ jsx(this.DefaultHeaderUI, { widget: this });
  }
  defaultBody() {
    if (this.DefaultBodyUI == null)
      return;
    return /* @__PURE__ */ jsx(this.DefaultBodyUI, { widget: this });
  }
  header() {
    const HeaderUI = "header" in this.config ? ensureObserver(this.config.header) : this.DefaultHeaderUI;
    if (HeaderUI == null)
      return;
    return /* @__PURE__ */ jsx(HeaderUI, { widget: this });
  }
  body() {
    const BodyUI = "body" in this.config ? ensureObserver(this.config.body) : this.DefaultBodyUI;
    if (BodyUI == null)
      return;
    return /* @__PURE__ */ jsx(BodyUI, { widget: this });
  }
  /** list of all subwidgets, without named keys */
  get subWidgets() {
    return [];
  }
  /** list of all subwidgets, without named keys */
  get subWidgetsWithKeys() {
    return [];
  }
  // --------------------------------------------------------------------------------
  // 🔶 the 5 getters bellow are temporary hacks to make shared keep working
  // until every shared usage has been migrated
  /** getter that resolve to `this.spec.producers` */
  get producers() {
    return this.spec.producers;
  }
  /** getter that resolve to `this.spec.publish` */
  get publish() {
    return this.spec.publish;
  }
  /** getter that resolve to `this.spec.subscribe` */
  get subscribe() {
    return this.spec.subscribe;
  }
  /** getter that resolve to `this.spec.reactions` */
  get reactions() {
    return this.spec.reactions;
  }
  /** getter that resolve to `this.spec.addReaction` */
  get addReaction() {
    return this.spec.addReaction;
  }
  get icon() {
    const x = this.spec.config.icon;
    if (x == null)
      return null;
    if (typeof x === "string")
      return x;
    return x(this);
  }
  /** this function MUST be called at the end of every widget constructor */
  init(mobxOverrides) {
    makeAutoObservableInheritance(this, mobxOverrides);
    const self2 = this;
    const config = self2.config;
    const serial = self2.serial;
    if (config.onCreate) {
      const oldKey = serial._creationKey;
      const newKey = config.onCreate.evaluationKey ?? "default";
      if (oldKey !== newKey) {
        config.onCreate(this);
        serial._creationKey = newKey;
      }
    }
    if (config.onInit) {
      config.onInit(this);
    }
    this.form._allFormWidgets.set(this.id, this);
    this.form.manager._allWidgets.set(this.id, this);
    const prev = this.form.manager._allWidgetsByType.get(this.type);
    if (prev == null) {
      this.form.manager._allWidgetsByType.set(this.type, /* @__PURE__ */ new Map([[this.id, this]]));
    } else {
      prev.set(this.id, this);
    }
  }
};

// src/csuite/fields/bool/WidgetBoolUI.tsx
import { observer as observer40 } from "mobx-react-lite";

// src/csuite/fields/spacer/SpacerUI.tsx
import { observer as observer39 } from "mobx-react-lite";
var SpacerUI = observer39(function SpacerUI_(p) {
  return /* @__PURE__ */ jsx("div", { tw: ["ml-auto"] });
});

// src/csuite/fields/bool/WidgetBoolUI.tsx
var WidgetBoolUI = observer40(function WidgetBoolUI_(p) {
  const widget = p.widget;
  if (widget.config.label2) {
    console.warn("label2 is deprecated, please use the text option instead. label2 will be removed in the future");
  }
  return /* @__PURE__ */ jsxs("div", { tw: "flex w-full h-full ", children: [
    /* @__PURE__ */ jsx(
      InputBoolUI,
      {
        display: widget.config.display,
        expand: widget.config.display === "button" ? widget.config.expand : true,
        icon: widget.icon,
        text: widget.config.text ?? widget.config.label2,
        value: widget.value,
        onValueChange: (value) => widget.value = value
      }
    ),
    /* @__PURE__ */ jsx(SpacerUI, {})
  ] });
});

// src/csuite/fields/bool/WidgetBool.tsx
var Widget_bool = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetBoolUI;
    this.DefaultBodyUI = void 0;
    this.type = "bool";
    this.setOn = () => this.value = true;
    this.setOff = () => this.value = false;
    this.toggle = () => this.value = !this.value;
    this.defaultValue = this.config.default ?? false;
    // prettier-ignore
    this.reset = () => this.value = this.defaultValue;
    this.id = serial?.id ?? nanoid6();
    this.serial = serial ?? {
      id: this.id,
      type: "bool",
      active: this.spec.config.default ?? false,
      collapsed: this.spec.config.startCollapsed
    };
    this.init({
      serial: observable8,
      value: computed3,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    return this.value !== this.defaultValue;
  }
  get value() {
    return this.serial.active ?? false;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.active === next)
      return;
    runInAction4(() => {
      this.serial.active = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("bool", Widget_bool);

// src/csuite/fields/button/WidgetButton.ts
import { runInAction as runInAction6 } from "mobx";
import { nanoid as nanoid7 } from "nanoid";

// src/csuite/fields/button/WidgetButtonUI.tsx
import { runInAction as runInAction5 } from "mobx";
import { observer as observer41 } from "mobx-react-lite";
var WidgetInlineRunUI = observer41(function WidgetInlineRunUI_(p) {
  const extra = p.widget.config.useContext?.();
  const context = { widget: p.widget, context: extra };
  return /* @__PURE__ */ jsx(
    Button,
    {
      look: p.widget.config.look,
      className: "self-start",
      icon: p.widget.icon,
      expand: p.widget.config.expand,
      onClick: () => runInAction5(() => p.widget.config.onClick?.(context)),
      children: p.widget.config.text ?? `Run`
    }
  );
});

// src/csuite/fields/button/WidgetButton.ts
var Widget_button = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetInlineRunUI;
    this.DefaultBodyUI = void 0;
    this.type = "button";
    // prettier-ignore
    this.reset = () => this.value = this.defaultValue;
    this.id = serial?.id ?? nanoid7();
    const config = spec.config;
    if (config.text) {
      config.label = config.label ?? ` `;
    }
    this.serial = serial ?? {
      type: "button",
      collapsed: config.startCollapsed,
      id: this.id,
      val: config.default ?? false
    };
    this.init({
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get defaultValue() {
    return this.config.default ?? false;
  }
  // prettier-ignore
  get hasChanges() {
    return this.serial.val !== this.defaultValue;
  }
  get value() {
    return this.serial.val;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction6(() => {
      this.serial.val = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("button", Widget_button);

// src/csuite/fields/choices/WidgetChoices.tsx
import { nanoid as nanoid8 } from "nanoid";

// src/csuite/fields/choices/WidgetChoicesUI.tsx
import { observer as observer46 } from "mobx-react-lite";

// src/csuite/form/WidgetsContainerUI.tsx
import { observer as observer42 } from "mobx-react-lite";
var WidgetsContainerUI = observer42(function WidgetsContainerUI_(p) {
  const isHorizontal = p.layout === "H";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: p.className,
      tw: [
        //
        isHorizontal ? `flex gap-1 flex-wrap` : `flex gap-1 flex-col`,
        "w-full overflow-auto",
        p.className
      ],
      children: p.children
    }
  );
});

// src/csuite/select/SelectUI.tsx
import { observer as observer45 } from "mobx-react-lite";
import { useMemo as useMemo6 } from "react";

// src/csuite/select/SelectPopupUI.tsx
import { observer as observer43 } from "mobx-react-lite";
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
var SelectPopupUI = observer43(function SelectPopupUI_(p) {
  const s = p.s;
  return createPortal2(
    /* @__PURE__ */ jsx(
      Frame,
      {
        ref: s.popupRef,
        tw: [
          "MENU-ROOT _SelectPopupUI flex",
          "overflow-auto",
          s.tooltipPosition.bottom != null ? "rounded-t border-t" : "rounded-b border-b"
        ],
        style: {
          minWidth: s.anchorRef.current?.clientWidth ?? "100%",
          maxWidth: window.innerWidth - (s.tooltipPosition.left != null ? s.tooltipPosition.left : s.tooltipPosition.right ?? 0),
          pointerEvents: "initial",
          position: "absolute",
          zIndex: 99999999,
          top: s.tooltipPosition.top != null ? `${s.tooltipPosition.top}px` : "unset",
          bottom: s.tooltipPosition.bottom != null ? `${s.tooltipPosition.bottom}px` : "unset",
          left: s.tooltipPosition.left != null ? `${s.tooltipPosition.left}px` : "unset",
          right: s.tooltipPosition.right != null ? `${s.tooltipPosition.right}px` : "unset",
          maxHeight: `${s.tooltipMaxHeight}px`
          // Adjust positioning as needed
        },
        onMouseDown: (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
        },
        onMouseEnter: (ev) => {
          if (s.isOpen)
            s.hasMouseEntered = true;
        },
        children: /* @__PURE__ */ jsxs("ul", { className: "max-h-96", tw: "flex-col w-full", children: [
          (p.showValues ?? true) && /* @__PURE__ */ jsx(
            "div",
            {
              tw: [
                //
                "overflow-au flex flex-wrap gap-0.5",
                "max-w-sm"
              ],
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
        ] })
      }
    ),
    document.getElementById("tooltip-root")
  );
});
var SelectOptionUI = observer43(function FooUI_({
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
      hovered: s.selectedIndex === index,
      value: isSelected,
      onValueChange: (value) => {
        if (value != isSelected)
          s.selectOption(index);
      },
      children: /* @__PURE__ */ jsx("div", { tw: "w-full", children: s.p.getLabelUI ? s.p.getLabelUI(option) : s.p.getLabelText(option) })
    }
  );
});

// src/csuite/select/SelectState.tsx
import { makeAutoObservable as makeAutoObservable9 } from "mobx";
import React from "react";

// src/csuite/badge/BadgeUI.tsx
import { observer as observer44 } from "mobx-react-lite";

// src/csuite/hashUtils/hash.ts
var hashStringToNumber = (s) => {
  let hash2 = 0, i, chr;
  for (i = 0; i < s.length; i++) {
    chr = s.charCodeAt(i);
    hash2 = (hash2 << 5) - hash2 + chr;
    hash2 |= 0;
  }
  return hash2;
};

// src/csuite/badge/BadgeUI.tsx
var BadgeUI = observer44(function BadgeUI_({
  hue,
  autoHue,
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsx(
    Frame,
    {
      tw: "rounded px-2 whitespace-nowrap",
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
      if (this.p.equalityCheck)
        return this.p.equalityCheck(a, b);
      return a === b;
    };
    this.anchorRef = React.createRef();
    this.inputRef = React.createRef();
    this.popupRef = React.createRef();
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
      if (rect == null)
        return;
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
    // click means focus change => means need to refocus the input
    this.onMenuEntryClick = (ev, index) => {
      ev.preventDefault();
      ev.stopPropagation();
      this.selectOption(index);
      this.inputRef.current?.focus();
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
    this.onBlur = (_ev) => {
      this.closeMenu();
    };
    this.handleTooltipKeyDown = (ev) => {
      if (ev.key === "ArrowDown")
        this.navigateSelection("down");
      else if (ev.key === "ArrowUp")
        this.navigateSelection("up");
      else if (ev.key === "Enter" && !ev.metaKey && !ev.ctrlKey)
        this.selectOption(this.selectedIndex);
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
    makeAutoObservable9(this, {
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
    if (this.p.setSearchQuery)
      this.p.setSearchQuery(value);
    else
      this._searchQuery = value;
  }
  get filteredOptions() {
    if (this.searchQuery === "")
      return this.options;
    if (this.p.disableLocalFiltering)
      return this.options;
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
    if (firstSelection == null)
      return null;
    return this.options.findIndex((o) => this.isEqual(o, firstSelection));
  }
  /** return the first selected value */
  get firstValue() {
    const v = this.value;
    if (v == null)
      return null;
    if (Array.isArray(v)) {
      if (v.length === 0)
        return null;
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
    if (v == null)
      return [];
    return Array.isArray(v) ? v : [v];
  }
  get displayValue() {
    if (this.p.hideValue)
      return this.p.placeholder ?? "";
    let value = this.value;
    const placeHolderStr = this.p.placeholder ?? "Select...";
    if (value == null)
      return placeHolderStr;
    value = Array.isArray(value) ? value : [value];
    const str = value.length === 0 ? placeHolderStr : value.map((i) => {
      const label = this.p.getLabelText(i);
      if (!this.p.multiple)
        return label;
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
  selectOption(index) {
    const selectedOption = this.filteredOptions[index];
    if (selectedOption != null) {
      this.p.onChange?.(selectedOption, this);
      const shouldResetQuery = this.p.resetQueryOnPick ?? false;
      const shouldCloseMenu = this.p.closeOnPick ?? !this.isMultiSelect;
      if (shouldResetQuery)
        this.searchQuery = "";
      if (shouldCloseMenu)
        this.closeMenu();
    }
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
};

// src/csuite/select/SelectUI.tsx
var SelectUI = observer45(function SelectUI_(p) {
  const s = useMemo6(() => new AutoCompleteSelectState(
    /* st, */
    p
  ), []);
  const csuite = useCSuite();
  const border = csuite.inputBorder;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      base: { contrast: 0.05 },
      hover: true,
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
      onBlur: s.onBlur,
      children: /* @__PURE__ */ jsxs("div", { className: "flex-1 h-full ", children: [
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
            tw: ["cushy-basic-input", "w-full h-full !outline-none"],
            type: "text",
            value: s.searchQuery
          }
        ) }),
        s.isOpen && /* @__PURE__ */ jsx(SelectPopupUI, { showValues: !p.wrap, s })
      ] })
    }
  );
});

// src/csuite/fields/choices/WidgetChoicesUI.tsx
var WidgetChoices_HeaderUI = observer46(function WidgetChoices_LineUI_(p) {
  if (p.widget.config.appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetChoices_TabHeaderUI, { widget: p.widget });
  else
    return /* @__PURE__ */ jsx(WidgetChoices_SelectHeaderUI, { widget: p.widget });
});
var WidgetChoices_BodyUI = observer46(function WidgetChoices_BodyUI_(p) {
  const widget = p.widget;
  const activeSubwidgets = Object.entries(widget.children).map(([branch, subWidget]) => ({ branch, subWidget }));
  return /* @__PURE__ */ jsx(
    WidgetsContainerUI,
    {
      layout: widget.config.layout,
      tw: [widget.config.className, p.className],
      children: activeSubwidgets.map((val) => {
        const subWidget = val.subWidget;
        if (subWidget == null)
          return /* @__PURE__ */ jsx(Fragment, { children: "\u274C error" });
        return /* @__PURE__ */ jsx(
          WidgetWithLabelUI,
          {
            justifyLabel: p.justify,
            fieldName: val.branch,
            widget: subWidget,
            label: widget.isSingle ? false : void 0
          },
          val.branch
        );
      })
    }
  );
});
var WidgetChoices_TabHeaderUI = observer46(function WidgetChoicesTab_LineUI_(p) {
  const widget = p.widget;
  const choices = widget.choicesWithLabels;
  const csuite = useCSuite();
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: "rounded select-none flex flex-1 flex-wrap gap-x-0.5 gap-y-0.5",
      style: {
        justifyContent: widget.config.tabPosition === "start" ? "flex-start" : widget.config.tabPosition === "center" ? "center" : widget.config.tabPosition === "end" ? "flex-end" : "flex-end"
      },
      children: choices.map((c) => {
        const isSelected = widget.serial.branches[c.key];
        return /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            value: isSelected,
            display: "button",
            mode: p.widget.isMulti ? "checkbox" : "radio",
            text: c.label,
            box: isSelected ? void 0 : { text: csuite.labelText },
            onValueChange: (value) => {
              if (value != isSelected) {
                widget.toggleBranch(c.key);
              }
            }
          },
          c.key
        );
      })
    }
  );
});
var WidgetChoices_SelectHeaderUI = observer46(function WidgetChoices_SelectLineUI_(p) {
  const widget = p.widget;
  const choices = widget.choicesWithLabels;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: [
        //
        "relative",
        p.widget.expand || p.widget.config.justifyLabel ? "w-full" : "w-64"
      ],
      onMouseDown: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      },
      children: /* @__PURE__ */ jsx(
        SelectUI,
        {
          tw: "flex-grow",
          placeholder: p.widget.config.placeholder,
          value: () => Object.entries(widget.serial.branches).filter(([_, value]) => value).map(([key, _]) => ({ key, label: choices.find((v) => v.key === key)?.label ?? key })),
          options: () => choices,
          getLabelText: (v) => v.label,
          getLabelUI: (v) => /* @__PURE__ */ jsx("div", { tw: "flex flex-1 justify-between", children: /* @__PURE__ */ jsx("div", { tw: "flex-1", children: v.label }) }),
          equalityCheck: (a, b) => a.key === b.key,
          multiple: widget.config.multi ?? false,
          closeOnPick: false,
          resetQueryOnPick: false,
          onChange: (v) => widget.toggleBranch(v.key)
        }
      )
    }
  );
});

// src/csuite/fields/choices/WidgetChoices.tsx
var Widget_choices = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.UITab = () => /* @__PURE__ */ jsx(WidgetChoices_TabHeaderUI, { widget: this });
    this.UISelect = () => /* @__PURE__ */ jsx(WidgetChoices_HeaderUI, { widget: this });
    this.UIChildren = () => /* @__PURE__ */ jsx(WidgetChoices_BodyUI, { widget: this, justify: false });
    this.DefaultHeaderUI = WidgetChoices_HeaderUI;
    this.DefaultBodyUI = WidgetChoices_BodyUI;
    this.type = "choices";
    this.expand = this.config.expand ?? false;
    this.children = {};
    this.isBranchDisabled = (branch) => !this.serial.branches[branch];
    this.id = serial?.id ?? nanoid8();
    const config = spec.config;
    if (typeof config.items === "function") {
      toastError('\u{1F534} ChoicesWidget "items" property should now be an object, not a function');
      debugger;
    }
    this.serial = serial ?? {
      type: "choices",
      id: this.id,
      active: true,
      values_: {},
      branches: {}
    };
    const allBranches = Object.keys(config.items);
    const def = this.config.default;
    const isMulti = this.config.multi;
    if (isMulti) {
      for (const branch of allBranches) {
        const isActive = this.serial.branches[branch] ?? (typeof def === "string" ? branch === def : typeof def === "object" ? def?.[branch] ?? false : null);
        if (isActive)
          this.enableBranch(branch, { skipBump: true });
      }
    } else {
      const allBranches2 = Object.keys(this.config.items);
      const activeBranch = allBranches2.find((x) => this.serial.branches[x]) ?? (def == null ? allBranches2[0] : typeof def === "string" ? def : typeof def === "object" ? Object.entries(def).find(([, v]) => v)?.[0] ?? allBranches2[0] : allBranches2[0]);
      if (activeBranch == null)
        toastError(`\u274C No active branch found for single choice widget "${this.config.label}"`);
      else
        this.enableBranch(activeBranch, { skipBump: true });
    }
    this.init({
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get isMulti() {
    return this.config.multi;
  }
  get isSingle() {
    return !this.config.multi;
  }
  get firstChoice() {
    return this.choices[0];
  }
  get choices() {
    return Object.keys(this.config.items);
  }
  get choicesWithLabels() {
    return Object.entries(this.config.items).map(([key, spec]) => ({
      key,
      // note:
      // if child.config.label === false => makeLabelFromFieldName(key)
      // if child.config.label === '' => makeLabelFromFieldName(key)
      label: spec.config.label || makeLabelFromFieldName(key)
    }));
  }
  /** array of all active branch keys */
  get activeBranches() {
    return Object.keys(this.serial.branches).filter((x) => this.serial.branches[x]);
  }
  get firstActiveBranchName() {
    return this.activeBranches[0];
  }
  get firstActiveBranchWidget() {
    if (this.firstActiveBranchName == null)
      return void 0;
    return this.children[this.firstActiveBranchName];
  }
  get hasChanges() {
    const def = this.config.default;
    for (const branchName of this.choices) {
      const shouldBeActive = def == null ? false : typeof def === "string" ? branchName === def : def[branchName];
      const child = this.children[branchName];
      if (child && !shouldBeActive)
        return true;
      if (!child && shouldBeActive)
        return true;
      if (child && shouldBeActive && child.hasChanges)
        return true;
    }
    return false;
  }
  reset() {
    const def = this.config.default;
    for (const branchName of this.choices) {
      const shouldBeActive = def == null ? false : typeof def === "string" ? branchName === def : def[branchName];
      const child = this.children[branchName];
      if (child && !shouldBeActive)
        this.disableBranch(branchName, { skipBump: true });
      if (!child && shouldBeActive)
        this.enableBranch(branchName, { skipBump: true });
      const childAfter = this.children[branchName];
      if (childAfter && childAfter.hasChanges)
        childAfter.reset();
    }
    this.bumpValue();
  }
  get subWidgets() {
    return Object.values(this.children);
  }
  get subWidgetsWithKeys() {
    return Object.entries(this.children).map(([key, widget]) => ({ key, widget }));
  }
  toggleBranch(branch) {
    if (this.children[branch]) {
      if (this.isMulti)
        this.disableBranch(branch);
    } else
      this.enableBranch(branch);
  }
  disableBranch(branch, p) {
    if (!this.children[branch])
      throw new Error(`\u274C Branch "${branch}" not enabled`);
    delete this.children[branch];
    this.serial.branches[branch] = false;
    if (!p?.skipBump)
      this.bumpValue();
  }
  enableBranch(branch, p) {
    if (!this.config.multi) {
      for (const key in this.children) {
        this.disableBranch(key);
      }
    }
    if (this.children[branch])
      throw new Error(`\u274C Branch "${branch}" already enabled`);
    let schema = this.config.items[branch];
    if (typeof schema === "function")
      schema = schema();
    if (schema == null)
      throw new Error(`\u274C Branch "${branch}" has no initializer function`);
    const prevBranchSerial = this.serial.values_?.[branch];
    if (prevBranchSerial && schema.type === prevBranchSerial.type) {
      this.children[branch] = this.form.builder._HYDRATE(this, schema, prevBranchSerial);
    } else {
      this.children[branch] = this.form.builder._HYDRATE(this, schema, null);
      this.serial.values_[branch] = this.children[branch]?.serial;
    }
    this.serial.branches[branch] = true;
    if (!p?.skipBump)
      this.bumpValue();
  }
  setValue(val) {
    for (const branch of this.choices) {
      if (val[branch] == null) {
        if (!this.isBranchDisabled(branch)) {
          this.disableBranch(branch);
        }
      } else {
        if (this.isBranchDisabled(branch)) {
          this.enableBranch(branch);
        }
        this.children[branch].setValue(val[branch]);
      }
    }
    this.bumpValue();
  }
  /** results, but only for active branches */
  get value() {
    const out = {};
    for (const branch in this.children) {
      out[branch] = this.children[branch].value;
    }
    return out;
  }
};
registerWidgetClass("choices", Widget_choices);

// src/csuite/fields/color/WidgetColor.tsx
import { runInAction as runInAction7 } from "mobx";
import { nanoid as nanoid9 } from "nanoid";

// src/csuite/fields/color/WidgetColorUI.tsx
import { observer as observer47 } from "mobx-react-lite";
var WidgetColorUI = observer47(function WidgetColorUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(
    "input",
    {
      value: widget.serial.value,
      type: "color",
      onChange: (ev) => widget.value = ev.target.value
    }
  );
});

// src/csuite/fields/color/WidgetColor.tsx
var Widget_color = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetColorUI;
    this.DefaultBodyUI = void 0;
    this.type = "color";
    this.defaultValue = this.config.default ?? "#000000";
    // prettier-ignore
    this.reset = () => this.value = this.defaultValue;
    this.id = serial?.id ?? nanoid9();
    const config = spec.config;
    this.serial = serial ?? {
      type: "color",
      collapsed: config.startCollapsed,
      id: this.id,
      value: config.default ?? "#000000"
    };
    this.init({
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    return this.value !== this.defaultValue;
  }
  get value() {
    return this.serial.value;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.value === next)
      return;
    runInAction7(() => {
      this.serial.value = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("color", Widget_color);

// src/csuite/fields/group/WidgetGroup.tsx
import { runInAction as runInAction8 } from "mobx";
import { nanoid as nanoid10 } from "nanoid";

// src/csuite/fields/group/WidgetGroupUI.tsx
import { observer as observer50 } from "mobx-react-lite";

// src/csuite/form/WidgetSingleLineSummaryUI.tsx
import { observer as observer49 } from "mobx-react-lite";

// src/csuite/wrappers/FrameSubtle.tsx
import { observer as observer48 } from "mobx-react-lite";
var FrameSubtle = observer48(function BoxSubtle_({ children, ...rest }) {
  return /* @__PURE__ */ jsx(Frame, { ...rest, text: { contrast: 0.3, chromaBlend: 1, hueShift: 0 }, children });
});

// src/csuite/form/WidgetSingleLineSummaryUI.tsx
var WidgetSingleLineSummaryUI = observer49(function WidgetSingleLineSummaryUI_(p) {
  return /* @__PURE__ */ jsx(FrameSubtle, { className: "COLLAPSE-PASSTHROUGH ml-1 lh-input line-clamp-1 italic", children: p.children });
});

// src/csuite/fields/group/WidgetGroupUI.tsx
var WidgetGroup_LineUI = observer50(function WidgetGroup_LineUI_(p) {
  if (!p.widget.serial.collapsed) {
    return /* @__PURE__ */ jsxs("div", { tw: "ml-auto flex gap-0.5", children: [
      /* @__PURE__ */ jsx(Button, { square: true, onClick: () => p.widget.expandAllChildren(), subtle: true, icon: "mdiUnfoldMoreHorizontal" }),
      /* @__PURE__ */ jsx(Button, { square: true, onClick: () => p.widget.collapseAllChildren(), subtle: true, icon: "mdiUnfoldLessHorizontal" })
    ] });
  }
  return /* @__PURE__ */ jsx(WidgetSingleLineSummaryUI, { children: p.widget.summary });
});
var WidgetGroup_BlockUI = observer50(function WidgetGroup_BlockUI_(p) {
  const widget = p.widget;
  const groupFields = Object.entries(widget.fields);
  const isHorizontal = widget.config.layout === "H";
  return /* @__PURE__ */ jsx(WidgetsContainerUI, { layout: p.widget.config.layout, tw: [widget.config.className, p.className], children: groupFields.map(([rootKey, sub], ix) => /* @__PURE__ */ jsx(
    WidgetWithLabelUI,
    {
      fieldName: rootKey,
      justifyLabel: isHorizontal ? false : widget.config.justifyLabel,
      widget: bang(sub)
    },
    rootKey
  )) });
});

// src/csuite/fields/group/WidgetGroup.tsx
var Widget_group = class extends BaseField {
  constructor(form, parent, spec, serial, preHydrate) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetGroup_LineUI;
    this.reset = () => {
      for (const sub of this.subWidgets)
        sub.reset();
    };
    this.type = "group";
    this.at = (key) => this.fields[key];
    this.get = (key) => this.fields[key].value;
    /** the dict of all child widgets */
    this.fields = {};
    // will be filled during constructor
    this.serial = {};
    this._defaultSerial = () => {
      return {
        type: "group",
        id: this.id,
        collapsed: this.config.startCollapsed,
        values_: {}
      };
    };
    // @internal
    this.__value = new Proxy({}, {
      ownKeys: (target) => {
        return Object.keys(this.fields);
      },
      get: (target, prop) => {
        if (typeof prop !== "string")
          return;
        const subWidget = this.fields[prop];
        if (subWidget == null)
          return;
        return subWidget.value;
      },
      getOwnPropertyDescriptor: (target, prop) => {
        if (typeof prop !== "string")
          return;
        const subWidget = this.fields[prop];
        if (subWidget == null)
          return;
        return {
          enumerable: true,
          configurable: true,
          get() {
            return subWidget.value;
          }
        };
      }
    });
    this.id = serial?.id ?? nanoid10();
    this.serial = serial && serial.type === "group" ? serial : this._defaultSerial();
    if (this.serial.values_ == null)
      this.serial.values_ = {};
    preHydrate?.(this);
    const prevFieldSerials = this.serial.values_;
    const itemsDef = this.config.items;
    const _newValues = typeof itemsDef === "function" ? runWithGlobalForm(this.form.builder, itemsDef) ?? {} : itemsDef ?? {};
    const childKeys = Object.keys(_newValues);
    for (const key of childKeys) {
      const unmounted = bang(_newValues[key]);
      const prevFieldSerial = prevFieldSerials[key];
      if (prevFieldSerial && unmounted.type === prevFieldSerial.type) {
        this.fields[key] = this.form.builder._HYDRATE(this, unmounted, prevFieldSerial);
      } else {
        if (prevFieldSerial != null)
          console.log(
            `[\u{1F536}] invalid serial for "${key}": (${unmounted.type} != ${prevFieldSerial?.type}) => using fresh one instead`,
            prevFieldSerials
          );
        this.fields[key] = this.form.builder._HYDRATE(this, unmounted, null);
        this.serial.values_[key] = this.fields[key].serial;
      }
    }
    this.init({
      value: false,
      __value: false,
      DefaultHeaderUI: false
    });
  }
  get DefaultBodyUI() {
    if (Object.keys(this.fields).length === 0)
      return;
    return WidgetGroup_BlockUI;
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    return Object.values(this.fields).some((f) => f.hasChanges);
  }
  get summary() {
    return this.config.summary?.(this.value) ?? "";
  }
  /** all [key,value] pairs */
  get entries() {
    return Object.entries(this.fields);
  }
  setValue(val) {
    this.value = val;
  }
  setPartialValue(val) {
    runInAction8(() => {
      for (const key in val)
        this.fields[key].setValue(val[key]);
      this.bumpValue();
    });
  }
  get subWidgets() {
    return Object.values(this.fields);
  }
  get subWidgetsWithKeys() {
    return Object.entries(this.fields).map(([key, widget]) => ({ key, widget }));
  }
  set value(val) {
    runInAction8(() => {
      for (const key in val)
        this.fields[key].setValue(val[key]);
      this.bumpValue();
    });
  }
  get value() {
    return this.__value;
  }
  // 💬 2024-03-13 rvion: no setter for groups; groups can not be set; only their child can
};
registerWidgetClass("group", Widget_group);

// src/csuite/fields/list/WidgetList.ts
import { observable as observable9, reaction } from "mobx";
import { nanoid as nanoid11 } from "nanoid";

// src/csuite/fields/list/WidgetListUI.tsx
import { observer as observer52 } from "mobx-react-lite";
import { forwardRef as forwardRef2 } from "react";

// src/csuite/fields/list/ListControlsUI.tsx
import { observer as observer51 } from "mobx-react-lite";
var ListControlsUI = observer51(function ListControlsUI_(p) {
  const widget = p.widget;
  const max = widget.config.max;
  const min = widget.config.min;
  const canAdd = max ? widget.items.length < max : true;
  const canClear = min ? widget.items.length > min : true;
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
            subtle: true,
            disabled: !canAdd,
            square: true,
            icon: "mdiPlus",
            onClick: (ev) => {
              if (!canAdd)
                return;
              ev.stopPropagation();
              widget.addItem();
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "input",
            subtle: true,
            disabled: !canClear,
            square: true,
            icon: "mdiDeleteOutline",
            onClick: (ev) => {
              if (!canClear)
                return;
              ev.stopPropagation();
              widget.removeAllItems();
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "input",
            subtle: true,
            square: true,
            icon: "mdiUnfoldMoreHorizontal",
            onClick: (ev) => {
              ev.stopPropagation();
              widget.expandAllItems();
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "input",
            subtle: true,
            square: true,
            icon: "mdiUnfoldLessHorizontal",
            onClick: (ev) => {
              ev.stopPropagation();
              widget.collapseAllItems();
            }
          }
        )
      ]
    }
  );
});

// src/csuite/fields/list/WidgetListUI.tsx
var { default: SortableList, SortableItem, SortableKnob } = await import("react-easy-sort");
var WidgetList_LineUI = observer52(function WidgetList_LineUI_(p) {
  return /* @__PURE__ */ jsxs("div", { tw: "flex flex-1 items-center COLLAPSE-PASSTHROUGH", children: [
    /* @__PURE__ */ jsxs("div", { tw: "text-sm text-gray-500 italic", children: [
      p.widget.length,
      " items"
    ] }),
    p.widget.isAuto ? null : /* @__PURE__ */ jsx("div", { tw: "ml-auto", children: /* @__PURE__ */ jsx(ListControlsUI, { widget: p.widget }) })
  ] });
});
var WidgetList_BodyUI = observer52(function WidgetList_BodyUI_(p) {
  const widget = p.widget;
  const subWidgets = widget.items;
  const min = widget.config.min;
  return /* @__PURE__ */ jsx("div", { className: "_WidgetListUI", tw: "flex-grow w-full", children: /* @__PURE__ */ jsx(SortableList, { onSortEnd: p.widget.moveItem, className: "list", draggedItemClassName: "dragged", children: /* @__PURE__ */ jsx("div", { tw: "flex flex-col gap-0.5", children: subWidgets.map((subWidget, ix) => {
    const widgetHeader = subWidget.header();
    const widgetBody = subWidget.body();
    const collapsed = subWidget.serial.collapsed ?? false;
    const showBorder = subWidget.border;
    const isCollapsible = subWidget.isCollapsible;
    const boxBorder = showBorder ? 20 : 0;
    const boxBase = subWidget.background && (isCollapsible || showBorder) ? { contrast: 0.03 } : void 0;
    return /* @__PURE__ */ jsx(SortableItem, { children: /* @__PURE__ */ jsxs(Frame, { border: boxBorder, tw: "flex flex-col", base: boxBase, children: [
      /* @__PURE__ */ jsxs("div", { tw: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            subtle: true,
            square: true,
            size: "input",
            icon: "mdiChevronRight",
            onClick: () => subWidget.toggleCollapsed()
          }
        ),
        /* @__PURE__ */ jsx(SpacerUI, {}),
        subWidget.config.showID ? /* @__PURE__ */ jsx("div", { className: "divider flex-1 border-top", children: /* @__PURE__ */ jsxs("div", { id: subWidget.id, tw: "opacity-20 italic", children: [
          "#",
          ix,
          ":",
          subWidget.id
        ] }) }) : null,
        widgetHeader && /* @__PURE__ */ jsx(ErrorBoundaryUI, { children: widgetHeader }),
        p.widget.isAuto ? null : /* @__PURE__ */ jsx(
          Button,
          {
            disabled: min != null && widget.items.length <= min,
            square: true,
            size: "input",
            subtle: true,
            icon: "mdiDeleteOutline",
            onClick: () => widget.removeItem(subWidget)
          }
        ),
        /* @__PURE__ */ jsx(SortableKnob, { children: /* @__PURE__ */ jsx(ListDragHandleUI, { widget: subWidget, ix }) }),
        /* @__PURE__ */ jsx(RevealUI, { content: () => /* @__PURE__ */ jsx(menu_widgetActions.UI, { props: subWidget }), children: /* @__PURE__ */ jsx(Button, { icon: "mdiDotsVertical", subtle: true, square: true, size: "input" }) })
      ] }),
      widgetBody && !collapsed && subWidget != null && /* @__PURE__ */ jsx(ErrorBoundaryUI, { children: /* @__PURE__ */ jsx("div", { tw: "ml-2 pl-2", children: widgetBody }) })
    ] }) }, subWidget.id);
  }) }) }) });
});
var ListDragHandleUI = forwardRef2((p, ref) => {
  return (
    //TODO (bird_d): FIX UI - Needs to be Button when ref is implemented.
    /* @__PURE__ */ jsx("div", { ref, onClick: () => p.widget.toggleCollapsed(), children: /* @__PURE__ */ jsx(Button, { size: "input", subtle: true, square: true, icon: "mdiDragHorizontalVariant" }) })
  );
});

// src/csuite/fields/list/WidgetList.ts
var Widget_list = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetList_LineUI;
    this.DefaultBodyUI = WidgetList_BodyUI;
    this.type = "list";
    this.reset = () => {
      if (!this.config.auto) {
        const defaultLength = clampOpt(this.config.defaultLength, this.config.min, this.config.max);
        for (let i = this.items.length; i > defaultLength; i--)
          this.removeItem(this.items[i - 1]);
        for (let i = this.items.length; i < defaultLength; i++)
          this.addItem({ skipBump: true });
      }
      for (const i of this.items)
        i.reset();
    };
    this.findItemIndexContaining = (widget) => {
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
    };
    this.schemaAt = (ix) => {
      const _schema = this.config.element;
      const schema = typeof _schema === "function" ? runWithGlobalForm(this.form.builder, () => _schema(ix)) : _schema;
      return schema;
    };
    // probably slow and clunky; TODO: rewrite this piece of crap
    this.startAutoBehaviour = () => {
      const auto = this.config.auto;
      if (auto == null)
        return;
      reaction(
        () => auto.keys(this),
        (keys) => {
          const currentKeys = this.items.map((i, ix2) => auto.getKey(i, ix2));
          const missingKeys = keys.filter((k) => !currentKeys.includes(k));
          let needBump = false;
          for (const k of missingKeys) {
            this.addItem({ value: auto.init(k), skipBump: true });
            needBump = true;
          }
          let ix = 0;
          for (const item of this.items.slice()) {
            const isExtra = !keys.includes(auto.getKey(item, ix++));
            if (!isExtra)
              continue;
            this.removeItem(item);
            needBump = true;
          }
          if (needBump)
            this.bumpValue();
        },
        { fireImmediately: true }
      );
    };
    // HELPERS =======================================================
    // FOLDING -------------------------------------------------------
    this.collapseAllItems = () => {
      for (const i of this.items)
        i.setCollapsed(true);
    };
    this.expandAllItems = () => {
      for (const i of this.items)
        i.setCollapsed(false);
    };
    // REMOVING ITEMS ------------------------------------------------
    this.removeAllItems = () => {
      if (this.length === 0)
        return console.log(`[\u{1F536}] list.removeAllItems: list is already empty`);
      const minLen = this.config.min ?? 0;
      if (this.length <= minLen)
        return console.log(`[\u{1F536}] list.removeAllItems: list is already at min lenght`);
      this.serial.items_ = this.serial.items_.slice(0, minLen);
      this.items = this.items.slice(0, minLen);
      this.bumpValue();
    };
    this.removeItem = (item) => {
      const i = this.items.indexOf(item);
      if (i === -1)
        return console.log(`[\u{1F536}] list.removeItem: item not found`);
      this.serial.items_.splice(i, 1);
      this.items.splice(i, 1);
      this.bumpValue();
    };
    // MOVING ITEMS ---------------------------------------------------
    this.moveItem = (oldIndex, newIndex) => {
      if (oldIndex === newIndex)
        return console.log(`[\u{1F536}] list.moveItem: oldIndex === newIndex`);
      if (oldIndex < 0 || oldIndex >= this.length)
        return console.log(`[\u{1F536}] list.moveItem: oldIndex out of bounds`);
      if (newIndex < 0 || newIndex >= this.length)
        return console.log(`[\u{1F536}] list.moveItem: newIndex out of bounds`);
      const serials = this.serial.items_;
      serials.splice(newIndex, 0, bang(serials.splice(oldIndex, 1)[0]));
      const instances = this.items;
      instances.splice(newIndex, 0, bang(instances.splice(oldIndex, 1)[0]));
      this.bumpValue();
    };
    this.id = serial?.id ?? nanoid11();
    this.serial = serial ?? observable9({ type: "list", id: this.id, active: true, items_: [] });
    if (this.serial.items_ == null)
      this.serial.items_ = [];
    this.items = [];
    if (serial == null && this.config.defaultLength != null) {
      for (let i = 0; i < this.config.defaultLength; i++)
        this.addItem({ skipBump: true });
    } else {
      const unmounted = this.schemaAt(0);
      for (const subSerial of this.serial.items_) {
        if (subSerial == null || // ⁉️ when can this happen ?
        subSerial.type !== unmounted.type) {
          console.log(`[\u274C] SKIPPING form item because it has an incompatible entry from a previous app definition`);
          continue;
        }
        const subWidget = form.builder._HYDRATE(this, unmounted, subSerial);
        this.items.push(subWidget);
      }
    }
    const missingItems = (this.config.min ?? 0) - this.items.length;
    for (let i = 0; i < missingItems; i++)
      this.addItem({ skipBump: true });
    this.init({
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
    this.startAutoBehaviour();
  }
  get length() {
    return this.items.length;
  }
  get hasChanges() {
    if (!this.config.auto) {
      const defaultLength = clampOpt(this.config.defaultLength, this.config.min, this.config.max);
      if (this.items.length !== defaultLength)
        return true;
    }
    return this.items.some((i) => i.hasChanges);
  }
  get subWidgets() {
    return this.items;
  }
  get subWidgetsWithKeys() {
    return this.items.map((widget, ix) => ({ key: ix.toString(), widget }));
  }
  get isAuto() {
    return this.config.auto != null;
  }
  setValue(val) {
    for (let i = 0; i < val.length; i++) {
      if (i < this.items.length) {
        this.items[i].setValue(val[i]);
      } else {
        this.addItem({ skipBump: true });
        this.items[i].setValue(val[i]);
      }
    }
    this.serial.items_.splice(val.length);
    this.items.splice(val.length);
    this.bumpValue();
  }
  get value() {
    return this.items.map((i) => i.value);
  }
  // ERRORS --------------------------------------------------------
  get baseErrors() {
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
  addItem(p = {}) {
    if (this.config.max != null && this.items.length >= this.config.max)
      return console.log(`[\u{1F536}] list.addItem: list is already at max length`);
    if (p.at != null && p.at < 0)
      return console.log(`[\u{1F536}] list.addItem: at is negative`);
    if (p.at != null && p.at > this.items.length)
      return console.log(`[\u{1F536}] list.addItem: at is out of bounds`);
    const schema = this.schemaAt(p.at ?? this.serial.items_.length);
    const element = this.form.builder._HYDRATE(this, schema, null);
    if (p.value) {
      element.setValue(p.value);
    }
    if (p.at == null) {
      this.items.push(element);
      this.serial.items_.push(element.serial);
    } else {
      this.items.splice(p.at, 0, element);
      this.serial.items_.splice(p.at, 0, element.serial);
    }
    if (!p?.skipBump)
      this.bumpValue();
  }
};
registerWidgetClass("list", Widget_list);

// src/csuite/fields/markdown/WidgetMarkdown.ts
import { nanoid as nanoid12 } from "nanoid";

// src/csuite/fields/markdown/WidgetMarkdownUI.tsx
import { observer as observer53 } from "mobx-react-lite";
var WidgetMardownUI = observer53(function WidgetMardownUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(MarkdownUI, { tw: "_WidgetMardownUI w-full", markdown: widget.markdown });
});

// src/csuite/fields/markdown/WidgetMarkdown.ts
var Widget_markdown = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.type = "markdown";
    /** always return false */
    this.hasChanges = false;
    /** do nothing */
    this.reset = () => {
    };
    this.id = serial?.id ?? nanoid12();
    const config = spec.config;
    this.serial = serial ?? { type: "markdown", collapsed: config.startCollapsed, active: true, id: this.id };
    makeAutoObservableInheritance(this);
  }
  get DefaultHeaderUI() {
    if (this.config.inHeader)
      return WidgetMardownUI;
    return void 0;
  }
  get DefaultBodyUI() {
    if (this.config.inHeader)
      return void 0;
    return WidgetMardownUI;
  }
  get baseErrors() {
    return null;
  }
  get markdown() {
    const md = this.config.markdown;
    if (typeof md === "string")
      return md;
    return md(this.form);
  }
  setValue(val) {
    this.value = val;
  }
  set value(val) {
  }
  get value() {
    return this.serial;
  }
};
registerWidgetClass("markdown", Widget_markdown);

// src/csuite/fields/matrix/WidgetMatrix.ts
import { runInAction as runInAction9 } from "mobx";
import { nanoid as nanoid13 } from "nanoid";

// src/csuite/fields/matrix/WidgetMatrixUI.tsx
import { observer as observer54 } from "mobx-react-lite";
var WidgetMatrixUI = observer54(function WidgetStrUI_(p) {
  const widget = p.widget;
  const cols = widget.cols;
  const rows = widget.rows;
  if (cols.length === 0)
    return /* @__PURE__ */ jsx("div", { children: "\u274C no cols" });
  if (rows.length === 0)
    return /* @__PURE__ */ jsx("div", { children: "\u274C no rows" });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("table", { cellSpacing: 0, cellPadding: 0, children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx(
        "th",
        {
          className: "cursor-pointer hover:text-red-600 virtualBorder",
          onClick: () => widget.setAll(!widget.firstValue),
          children: "all"
        }
      ),
      cols.map((col, ix) => /* @__PURE__ */ jsx(
        "th",
        {
          className: "virtualBorder",
          onClick: () => widget.setCol(col, !widget.getCell(rows[0], col).value),
          children: col
        },
        ix
      ))
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: rows.map((row, rowIx) => /* @__PURE__ */ jsxs("tr", { className: "p-0 m-0", children: [
      /* @__PURE__ */ jsx(
        "td",
        {
          onClick: () => widget.setRow(row, !widget.getCell(row, cols[0]).value),
          className: "virtualBorder cursor-pointer",
          children: row
        }
      ),
      cols.map((col, colIx) => {
        const checked = widget.getCell(row, col).value;
        return /* @__PURE__ */ jsx(
          "td",
          {
            className: "hover:bg-gray-400 cursor-pointer virtualBorder",
            onClick: () => widget.setCell(row, col, !checked),
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

// src/csuite/fields/matrix/WidgetMatrix.ts
var Widget_matrix = class extends BaseField {
  // justifyLabel = false
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetMatrixUI;
    this.DefaultBodyUI = void 0;
    this.type = "matrix";
    this.sep = " &&& ";
    this.store = /* @__PURE__ */ new Map();
    this.key = (row, col) => `${row}${this.sep}${col}`;
    // prettier-ignore
    this.UPDATE = () => {
      this.serial.selected = this.RESULT;
      this.bumpValue();
    };
    this.setAll = (value) => {
      for (const v of this.allCells)
        v.value = value;
      this.UPDATE();
    };
    this.setRow = (row, val) => {
      for (const v of this.cols) {
        const cell = this.getCell(row, v);
        cell.value = val;
      }
      this.UPDATE();
    };
    this.setCol = (col, val) => {
      for (const r of this.rows) {
        const cell = this.getCell(r, col);
        cell.value = val;
      }
      this.UPDATE();
    };
    /** get cell at {rol x col} */
    this.getCell = (row, col) => {
      return bang(this.store.get(this.key(row, col)));
    };
    /** set cell at {rol x col} to given value */
    this.setCell = (row, col, value) => {
      const cell = this.getCell(row, col);
      cell.value = value;
      this.UPDATE();
    };
    this.id = serial?.id ?? nanoid13();
    const config = spec.config;
    this.serial = serial ?? { type: "matrix", collapsed: config.startCollapsed, id: this.id, active: true, selected: [] };
    const rows = config.rows;
    const cols = config.cols;
    for (const [rowIx, row] of rows.entries()) {
      for (const [colIx, col] of cols.entries()) {
        this.store.set(this.key(row, col), { x: rowIx, y: colIx, col, row, value: false });
      }
    }
    const values = this.serial.selected;
    if (values)
      for (const v of values) {
        this.store.set(this.key(rows[v.x], cols[v.y]), v);
      }
    this.rows = config.rows;
    this.cols = config.cols;
    makeAutoObservableInheritance(this);
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    const def = this.config.default;
    if (def == null)
      return this.value.length != 0;
    else {
      if (def.length != this.value.length)
        return true;
      for (const v of this.value) {
        if (!def.find((d) => d.row == v.row && d.col == v.col))
          return true;
      }
      return false;
    }
  }
  reset() {
    this.setAll(false);
    for (const i of this.config.default ?? []) {
      this.setCell(i.row, i.col, true);
    }
  }
  setValue(val) {
    this.value = val;
  }
  /** 🔶 this is inneficient */
  set value(val) {
    runInAction9(() => {
      for (const c of this.allCells) {
        c.value = false;
      }
      for (const v of val) {
        this.store.set(this.key(v.row, v.col), v);
      }
      this.UPDATE();
    });
  }
  get value() {
    return this.serial.selected;
  }
  get allCells() {
    return Array.from(this.store.values());
  }
  /** list of all cells that are ON */
  get RESULT() {
    return this.allCells.filter((v) => v.value);
  }
  /** whether the first grid cell is ON */
  get firstValue() {
    return this.allCells[0]?.value ?? false;
  }
};
registerWidgetClass("matrix", Widget_matrix);

// src/csuite/fields/number/WidgetNumber.tsx
import { computed as computed4, observable as observable10, runInAction as runInAction11 } from "mobx";
import { nanoid as nanoid14 } from "nanoid";

// src/csuite/fields/number/WidgetNumberUI.tsx
import { observer as observer56 } from "mobx-react-lite";

// src/csuite/input-number/InputNumberUI.tsx
import { makeAutoObservable as makeAutoObservable10, runInAction as runInAction10 } from "mobx";
import { observer as observer55 } from "mobx-react-lite";
import React2, { useEffect as useEffect3, useMemo as useMemo7 } from "react";

// src/csuite/utils/parseFloatNoRoundingErr.ts
var parseFloatNoRoundingErr = (str, maxDigitsAfterDot = 3) => {
  const result = typeof str === "number" ? str : parseFloat(str);
  if (isNaN(result))
    return 0;
  const out = Number(result.toFixed(maxDigitsAfterDot));
  return out;
};

// src/csuite/input-number/InputNumberUI.tsx
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
    this.inputRef = React2.createRef();
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
      if (this.mode === "int")
        num = Math.round(num);
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
var InputNumberUI = observer55(function InputNumberUI_(p) {
  const kit = useCSuite();
  const uist = useMemo7(() => new InputNumberStableState(p, kit), []);
  runInAction10(() => Object.assign(uist.props, p));
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
      base: 5,
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
            base: { contrast: p.hideSlider ? 0 : 0.1, chroma: 0.02 },
            tw: ["z-10 absolute left-0 h-input"],
            style: { width: `${(val - uist.rangeMin) / (uist.rangeMax - uist.rangeMin) * 100}%` }
          }
        ),
        /* @__PURE__ */ jsxs("div", { tw: "grid w-full h-full items-center z-20", style: { gridTemplateColumns: "16px 1fr 16px" }, children: [
          /* @__PURE__ */ jsx(
            Frame,
            {
              className: "control",
              border: true,
              tw: ["h-full flex rounded-none text-center justify-center items-center z-20", `opacity-0`],
              tabIndex: -1,
              onClick: uist.decrement,
              children: /* @__PURE__ */ jsx(Ikon.mdiChevronLeft, {})
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
                if (isEditing || ev.button != 0)
                  return;
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
            Frame,
            {
              className: "control",
              border: true,
              tw: ["h-full flex rounded-none text-center justify-center items-center z-20", `opacity-0`],
              tabIndex: -1,
              onClick: uist.increment,
              children: /* @__PURE__ */ jsx(Ikon.mdiChevronRight, {})
            }
          )
        ] })
      ]
    }
  );
});

// src/csuite/fields/number/WidgetNumberUI.tsx
var WidgetNumberUI = observer56(function WidgetNumberUI_(p) {
  const widget = p.widget;
  const value = widget.serial.val;
  const mode = widget.config.mode;
  const step = widget.config.step ?? (mode === "int" ? 1 : 0.1);
  return /* @__PURE__ */ jsx(
    InputNumberUI,
    {
      mode,
      value,
      hideSlider: widget.config.hideSlider,
      max: widget.config.max,
      min: widget.config.min,
      softMin: widget.config.softMin,
      softMax: widget.config.softMax,
      step,
      suffix: widget.config.suffix,
      text: widget.config.text,
      onValueChange: (next) => widget.value = next,
      forceSnap: widget.config.forceSnap
    }
  );
});

// src/csuite/fields/number/WidgetNumber.tsx
var Widget_number = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetNumberUI;
    this.DefaultBodyUI = void 0;
    this.type = "number";
    this.forceSnap = false;
    this.defaultValue = this.config.default ?? 0;
    // prettier-ignore
    this.reset = () => {
      if (this.serial.val === this.defaultValue)
        return;
      this.value = this.defaultValue;
    };
    this.id = serial?.id ?? nanoid14();
    const config = spec.config;
    this.serial = serial ?? {
      type: "number",
      collapsed: config.startCollapsed,
      id: this.id,
      val: config.default ?? 0
    };
    this.init({
      serial: observable10,
      value: computed4,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get hasChanges() {
    return this.serial.val !== this.defaultValue;
  }
  get baseErrors() {
    if (this.config.min !== void 0 && this.value < this.config.min)
      return `Value is less than ${this.config.min}`;
    if (this.config.max !== void 0 && this.value > this.config.max)
      return `Value is greater than ${this.config.max}`;
    return null;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction11(() => {
      this.serial.val = next;
      this.bumpValue();
    });
  }
  get value() {
    return this.serial.val;
  }
};
registerWidgetClass("number", Widget_number);

// src/csuite/fields/optional/WidgetOptional.tsx
import { computed as computed5, observable as observable11 } from "mobx";
import { nanoid as nanoid15 } from "nanoid";
var Widget_optional = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = void 0;
    this.DefaultBodyUI = void 0;
    this.reset = () => {
      if (this.config.startActive) {
        if (!this.serial.active)
          this.setActive(true);
        if (this.child.hasChanges)
          this.child.reset();
        return;
      } else {
        if (this.serial.active)
          this.setActive(false);
        return;
      }
    };
    this.type = "optional";
    this.setActive = (value) => {
      if (this.serial.active === value)
        return;
      this.serial.active = value;
      this.bumpValue();
      if (value)
        this.child.setCollapsed(false);
      else
        this.child.setCollapsed(true);
    };
    /**
     * as of 2024-03-14, this is only called in the constructor
     * TODO: inline ?
     */
    this._ensureChildIsHydrated = () => {
      if (this.child)
        return;
      const spec = this.config.widget;
      const prevSerial = this.serial.child;
      if (prevSerial && spec.type === prevSerial.type) {
        this.child = this.form.builder._HYDRATE(this, spec, prevSerial);
      } else {
        this.child = this.form.builder._HYDRATE(this, spec, null);
        this.serial.child = this.child.serial;
      }
    };
    this.id = serial?.id ?? nanoid15();
    const config = spec.config;
    const defaultActive = config.startActive;
    this.serial = serial ?? {
      id: this.id,
      type: "optional",
      active: defaultActive ?? false,
      collapsed: config.startCollapsed
    };
    const isActive = serial?.active ?? defaultActive;
    if (isActive)
      this.serial.active = true;
    this._ensureChildIsHydrated();
    this.init({
      serial: observable11,
      value: computed5,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get hasChanges() {
    if (this.config.startActive) {
      if (!this.serial.active)
        return true;
      return this.child.hasChanges;
    } else {
      if (!this.serial.active)
        return false;
      return true;
    }
  }
  get baseErrors() {
    return null;
  }
  get childOrThrow() {
    if (this.child == null)
      throw new Error("\u274C optional active but child is null");
    return this.child;
  }
  setValue(val) {
    this.value = val;
  }
  get subWidgets() {
    return this.serial.active ? [this.child] : [];
  }
  get subWidgetsWithKeys() {
    return this.serial.active ? [{ key: "child", widget: this.child }] : [];
  }
  set value(next) {
    if (next == null) {
      this.setActive(false);
      return;
    } else {
      this.setActive(true);
      this.child.setValue(next);
    }
  }
  get value() {
    if (!this.serial.active)
      return null;
    return this.childOrThrow.value;
  }
};
registerWidgetClass("optional", Widget_optional);

// src/csuite/fields/seed/WidgetSeed.ts
import { nanoid as nanoid16 } from "nanoid";

// src/csuite/fields/seed/WidgetSeedUI.tsx
import { observer as observer57 } from "mobx-react-lite";
var WidgetSeedUI = observer57(function WidgetSeedUI_(p) {
  const widget = p.widget;
  const val = widget.serial.val;
  const csuite = useCSuite();
  const border = csuite.inputBorder;
  return /* @__PURE__ */ jsxs(Frame, { border: { contrast: border }, tw: ["h-input", "flex-1 flex items-center"], children: [
    /* @__PURE__ */ jsx(
      InputBoolToggleButtonUI,
      {
        icon: "mdiAutoFix",
        value: widget.serial.mode === "randomize",
        onValueChange: () => widget.setToRandomize()
      }
    ),
    /* @__PURE__ */ jsx(
      InputBoolToggleButtonUI,
      {
        icon: "mdiNumeric1CircleOutline",
        value: widget.serial.mode === "fixed",
        onValueChange: () => widget.setToFixed()
      }
    ),
    /* @__PURE__ */ jsx(
      InputNumberUI,
      {
        disabled: widget.serial.mode === "randomize",
        tw: ["!border-none flex-1"],
        min: widget.config.min,
        max: widget.config.max,
        step: 1,
        value: val,
        mode: "int",
        onValueChange: (value) => widget.setValue(value)
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        size: "input",
        tw: "!border-l !border-r-0",
        onClick: () => widget.setToFixed(Math.floor(Math.random() * 1e8)),
        icon: "mdiAutorenew",
        square: true
      }
    )
  ] });
});

// src/csuite/fields/seed/WidgetSeed.ts
var Widget_seed = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetSeedUI;
    this.DefaultBodyUI = void 0;
    this.reset = () => {
      this.setMode(this.defaultMode);
      if (this.serial.mode !== "randomize")
        this.setValue(this.defaultValue);
    };
    this.type = "seed";
    this.setMode = (mode) => {
      if (this.serial.mode === mode)
        return;
      this.serial.mode = mode;
      this.bumpValue();
    };
    this.setToFixed = (val) => {
      this.serial.mode = "fixed";
      if (val)
        this.serial.val = val;
      this.bumpValue();
    };
    this.setToRandomize = () => {
      if (this.serial.mode === "randomize")
        return;
      this.serial.mode = "randomize";
      this.bumpValue();
    };
    this.setValue = (val) => {
      this.serial.val = val;
      this.bumpValue();
    };
    this.id = serial?.id ?? nanoid16();
    const config = spec.config;
    this.serial = serial ?? {
      type: "seed",
      id: this.id,
      val: this.defaultValue,
      mode: this.defaultMode
    };
    makeAutoObservableInheritance(this, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    if (this.serial.mode !== this.defaultMode)
      return true;
    if (this.serial.mode === "fixed")
      return this.value !== this.defaultValue;
    return false;
  }
  get defaultMode() {
    return this.config.defaultMode ?? "randomize";
  }
  get defaultValue() {
    return this.config.default ?? 0;
  }
  set value(val) {
    this.serial.val = val;
    this.bumpValue();
  }
  get value() {
    const count = this.form.builder._cache.count;
    return this.serial.mode === "randomize" ? Math.floor(Math.random() * 9999999) : this.serial.val;
  }
};
registerWidgetClass("seed", Widget_seed);

// src/csuite/fields/selectMany/WidgetSelectMany.tsx
import { runInAction as runInAction12 } from "mobx";
import { nanoid as nanoid17 } from "nanoid";

// src/csuite/fields/selectMany/WidgetSelectMany_ListUI.tsx
import { observer as observer60 } from "mobx-react-lite";

// src/csuite/resizableFrame/resizableFrameUI.tsx
import { makeAutoObservable as makeAutoObservable11 } from "mobx";
import { observer as observer59 } from "mobx-react-lite";
import { useMemo as useMemo8 } from "react";

// src/panels/PanelHeader.tsx
import { observer as observer58 } from "mobx-react-lite";
var PanelHeaderUI = observer58(function PanelHeaderUI_(p) {
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
    makeAutoObservable11(this);
  }
};
var ResizableFrame = observer59(function ResizableFrame_(p) {
  const uist = useMemo8(() => new ResizableFrameStableState(p), []);
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      tw: "flex flex-col !p-0",
      style: { gap: "0px", ...p.style },
      ...p,
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
var WidgetSelectMany_ListUI = observer60(function WidgetSelectMany_TabUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(
    ResizableFrame,
    {
      header: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
        "input",
        {
          tw: "w-full h-full !outline-none cushy-basic-input",
          type: "text"
        }
      ) }),
      tw: "w-full",
      children: widget.choices.slice(0, 100).map((c) => {
        const isSelected = Boolean(widget.serial.values.find((item) => item.id === c.id));
        return /* @__PURE__ */ jsx(
          InputBoolToggleButtonUI,
          {
            value: isSelected,
            mode: "checkbox",
            showToggleButtonBox: true,
            tw: "w-full",
            text: c.label,
            onValueChange: (value) => {
              if (value != isSelected)
                widget.toggleItem(c);
            }
          }
        );
      })
    }
  );
});

// src/csuite/fields/selectMany/WidgetSelectManyUI.tsx
import { observer as observer63 } from "mobx-react-lite";

// src/csuite/utils/exhaust.ts
var exhaust2 = (x) => x;

// src/csuite/fields/selectMany/WidgetSelectMany_SelectUI.tsx
import { observer as observer61 } from "mobx-react-lite";
var WidgetSelectMany_SelectUI = observer61(function WidgetSelectMany_SelectUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsxs("div", { tw: "flex flex-1 gap-1", children: [
    /* @__PURE__ */ jsx(
      SelectUI,
      {
        multiple: true,
        wrap: widget.wrap,
        tw: [widget.baseErrors && "rsx-field-error"],
        getLabelText: (t) => t.label ?? t.id,
        getLabelUI: widget.config.getLabelUI,
        getSearchQuery: () => widget.serial.query ?? "",
        setSearchQuery: (query) => widget.serial.query = query,
        disableLocalFiltering: widget.config.disableLocalFiltering,
        options: () => widget.choices,
        value: () => widget.serial.values,
        equalityCheck: (a, b) => a.id === b.id,
        onChange: (selectOption) => widget.toggleItem(selectOption)
      }
    ),
    /* @__PURE__ */ jsx(
      InputBoolCheckboxUI,
      {
        tw: "self-start",
        icon: p.widget.wrap ? "mdiWrapDisabled" : "mdiWrap",
        value: p.widget.wrap,
        onValueChange: (next) => p.widget.wrap = next
      }
    )
  ] });
});

// src/csuite/fields/selectMany/WidgetSelectMany_TabUI.tsx
import { observer as observer62 } from "mobx-react-lite";
var WidgetSelectMany_TabUI = observer62(function WidgetSelectMany_TabUI_2(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { tw: "rounded select-none flex flex-wrap gap-x-0.5 gap-y-0", children: [
    widget.choices.map((c) => {
      const isSelected = Boolean(widget.serial.values.find((item) => item.id === c.id));
      return /* @__PURE__ */ jsx(
        InputBoolUI,
        {
          value: isSelected,
          display: "button",
          text: c.label,
          onValueChange: (value) => {
            if (value != isSelected)
              widget.toggleItem(c);
          }
        }
      );
    }),
    widget.serial.values.filter((v) => widget.choices.find((i) => i.id === v.id) == null).map((item) => /* @__PURE__ */ jsx(
      InputBoolUI,
      {
        value: true,
        style: { border: "1px solid oklch(var(--er))" },
        display: "button",
        text: item.label ?? "no label",
        onValueChange: (value) => widget.toggleItem(item)
      }
    ))
  ] }) });
});

// src/csuite/fields/selectMany/WidgetSelectManyUI.tsx
var WidgetSelectManyUI = observer63(function WidgetSelectManyUI_(p) {
  const widget = p.widget;
  const appearance = widget.config.appearance ?? "tab";
  if (appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetSelectMany_TabUI, { widget });
  if (appearance === "select")
    return /* @__PURE__ */ jsx(WidgetSelectMany_SelectUI, { widget });
  if (appearance === "list")
    return /* @__PURE__ */ jsx(WidgetSelectMany_ListUI, { widget });
  exhaust2(appearance);
});

// src/csuite/fields/selectMany/WidgetSelectMany.tsx
var Widget_selectMany = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetSelectManyUI;
    this.DefaultBodyUI = WidgetSelectMany_ListUI;
    this.type = "selectMany";
    this.reset = () => {
      this.value = this.defaultValue;
    };
    this.wrap = this.config.wrap ?? false;
    /** un-select given item */
    this.removeItem = (item) => {
      const indexOf = this.serial.values.findIndex((i) => i.id === item.id);
      if (indexOf < 0)
        return console.log(`[\u{1F536}] WidgetSelectMany.removeItem: item not found`);
      this.serial.values = this.serial.values.filter((v) => v.id !== item.id);
      this.bumpValue();
    };
    /** select given item */
    this.addItem = (item) => {
      const i = this.serial.values.indexOf(item);
      if (i >= 0)
        return console.log(`[\u{1F536}] WidgetSelectMany.addItem: item already in list`);
      this.serial.values.push(item);
      this.bumpValue();
    };
    /** select item if item was not selected, un-select if item was selected */
    this.toggleItem = (item) => {
      const i = this.serial.values.findIndex((i2) => i2.id === item.id);
      if (i < 0) {
        this.serial.values.push(item);
        this.bumpValue();
      } else {
        this.serial.values = this.serial.values.filter((v) => v.id !== item.id);
        this.bumpValue();
      }
    };
    this.id = serial?.id ?? nanoid17();
    const config = spec.config;
    this.serial = serial ?? {
      type: "selectMany",
      collapsed: config.startCollapsed,
      id: this.id,
      query: "",
      values: config.default ?? []
    };
    if (this.serial.values == null)
      this.serial.values = [];
    makeAutoObservableInheritance(this, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get defaultValue() {
    return this.config.default ?? [];
  }
  get hasChanges() {
    if (this.serial.values.length !== this.defaultValue.length)
      return true;
    for (const item of this.serial.values) {
      if (!this.defaultValue.find((i) => i.id === item.id))
        return true;
    }
    return false;
  }
  get choices() {
    const _choices = this.config.choices;
    return typeof _choices === "function" ? _choices(this) : _choices;
  }
  get baseErrors() {
    if (this.serial.values == null)
      return null;
    const errors = [];
    for (const value of this.serial.values) {
      if (!this.choices.find((choice) => choice.id === value.id)) {
        errors.push(`value ${value.id} (label: ${value.label}) not in choices`);
      }
    }
    if (errors.length > 0)
      return errors;
    return null;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.values === next)
      return;
    runInAction12(() => {
      this.serial.values = next;
      this.bumpValue();
    });
  }
  get value() {
    return this.serial.values;
  }
};
registerWidgetClass("selectMany", Widget_selectMany);

// src/csuite/fields/selectOne/WidgetSelectOne.ts
import { runInAction as runInAction13 } from "mobx";
import { nanoid as nanoid18 } from "nanoid";

// src/csuite/fields/selectOne/WidgetSelectOneUI.tsx
import { observer as observer67 } from "mobx-react-lite";

// src/csuite/fields/selectOne/WidgetSelectOne_RollUI.tsx
import { observer as observer64 } from "mobx-react-lite";
var WidgetSelectOne_RollUI = observer64(function WidgetSelectOne_RollUI_(p) {
  const widget = p.widget;
  const selected = widget.serial.val;
  const idx = widget.choices.findIndex((c) => c.id === selected?.id);
  const curr = widget.value;
  const next = widget.choices[(idx + 1) % widget.choices.length];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Button,
    {
      subtle: true,
      icon: curr.icon,
      disabled: next == null,
      onClick: () => widget.value = next,
      children: curr.label
    }
  ) });
});

// src/csuite/fields/selectOne/WidgetSelectOne_SelectUI.tsx
import { observer as observer65 } from "mobx-react-lite";
var WidgetSelectOne_SelectUI = observer65(function WidgetSelectOne_SelectUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx("div", { tw: "flex-1", children: /* @__PURE__ */ jsx(
    SelectUI,
    {
      tw: [widget.baseErrors && "rsx-field-error"],
      getLabelText: (t) => t.label ?? makeLabelFromFieldName(t.id),
      getLabelUI: widget.config.getLabelUI,
      getSearchQuery: () => widget.serial.query ?? "",
      setSearchQuery: (query) => widget.serial.query = query,
      disableLocalFiltering: widget.config.disableLocalFiltering,
      options: () => widget.choices,
      equalityCheck: (a, b) => a.id === b.id,
      value: () => widget.serial.val,
      onChange: (selectOption) => {
        if (selectOption == null) {
          return;
        }
        const next = widget.choices.find((c) => c.id === selectOption.id);
        if (next == null) {
          console.log(`\u274C WidgetSelectOneUI: could not find choice for ${JSON.stringify(selectOption)}`);
          return;
        }
        widget.value = next;
      }
    },
    widget.id
  ) });
});

// src/csuite/fields/selectOne/WidgetSelectOne_TabUI.tsx
import { observer as observer66 } from "mobx-react-lite";
var WidgetSelectOne_TabUI = observer66(function WidgetSelectOne_TabUI_(p) {
  const widget = p.widget;
  const selected = widget.serial.val;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: [
        //
        "flex",
        (widget.config.wrap ?? true) && "flex-wrap",
        "rounded ml-auto justify-end",
        "select-none",
        "gap-x-0.5 gap-y-0"
      ],
      children: widget.choices.map((c) => {
        const isSelected = selected?.id === c.id;
        return /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            icon: c.icon,
            value: isSelected,
            display: "button",
            text: c.label ?? c.id,
            onValueChange: (value) => {
              if (value === isSelected)
                return;
              widget.value = c;
            }
          },
          c.id
        );
      })
    }
  );
});

// src/csuite/fields/selectOne/WidgetSelectOneUI.tsx
var WidgetSelectOneUI = observer67(function WidgetSelectOneUI_(p) {
  const widget = p.widget;
  const skin = widget.config.appearance ?? "select";
  if (skin === "tab")
    return /* @__PURE__ */ jsx(WidgetSelectOne_TabUI, { widget });
  if (skin === "select")
    return /* @__PURE__ */ jsx(WidgetSelectOne_SelectUI, { widget });
  if (skin === "roll")
    return /* @__PURE__ */ jsx(WidgetSelectOne_RollUI, { widget });
  exhaust2(skin);
  return /* @__PURE__ */ jsx(Fragment, { children: "\u274C error" });
});

// src/csuite/fields/selectOne/WidgetSelectOne.ts
var FAILOVER_VALUE = Object.freeze({ id: "\u274C", label: "\u274C" });
var Widget_selectOne = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetSelectOneUI;
    this.DefaultBodyUI = void 0;
    this.type = "selectOne";
    this.reset = () => {
      this.value = this.defaultValue;
    };
    this.id = serial?.id ?? nanoid18();
    const config = spec.config;
    const choices = this.choices;
    this.serial = serial ?? {
      type: "selectOne",
      collapsed: config.startCollapsed,
      id: this.id,
      query: "",
      val: config.default ?? choices[0] ?? FAILOVER_VALUE
    };
    if (this.serial.val == null && Array.isArray(this.config.choices))
      this.serial.val = choices[0] ?? FAILOVER_VALUE;
    makeAutoObservableInheritance(this);
  }
  get baseErrors() {
    if (this.serial.val == null)
      return "no value selected";
    const selected = this.choices.find((c) => c.id === this.serial.val.id);
    if (selected == null)
      return "selected value not in choices";
    return;
  }
  get defaultValue() {
    return this.config.default ?? this.choices[0] ?? FAILOVER_VALUE;
  }
  get hasChanges() {
    return this.serial.val.id !== this.defaultValue.id;
  }
  get choices() {
    const _choices = this.config.choices;
    if (typeof _choices === "function") {
      if (!this.form.ready)
        return [];
      if (this.form._ROOT == null)
        throw new Error("\u274C IMPOSSIBLE: this.form._ROOT is null");
      return _choices(this);
    }
    return _choices;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    const nextHasSameID = this.serial.val.id === next.id;
    runInAction13(() => {
      this.serial.val = next;
      if (!nextHasSameID)
        this.bumpValue();
      else
        this.bumpSerial();
    });
  }
  get value() {
    return this.serial.val;
  }
};
registerWidgetClass("selectOne", Widget_selectOne);

// src/csuite/fields/shared/WidgetShared.tsx
import { nanoid as nanoid19 } from "nanoid";
var Widget_shared = class _Widget_shared extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    // prettier-ignore
    this.type = "shared";
    this.DefaultHeaderUI = void 0;
    this.DefaultBodyUI = void 0;
    // 🔴
    this.hidden = () => {
      const ctor = this.form.builder.SpecCtor;
      const config = { ...this.spec.config, hidden: true };
      const spec2 = new ctor("shared", config);
      new _Widget_shared(this.form, null, spec2, this.serial);
    };
    this.id = serial?.id ?? nanoid19();
    const config = spec.config;
    this.serial = serial ?? { id: this.id, type: "shared", collapsed: config.startCollapsed };
    makeAutoObservableInheritance(this);
  }
  get config() {
    return this.spec.config;
  }
  get hasChanges() {
    return this.config.widget.hasChanges;
  }
  reset() {
    return this.config.widget.reset();
  }
  get shared() {
    return this.config.widget;
  }
  get baseErrors() {
    return null;
  }
  setValue(val) {
    this.value = val;
  }
  set value(val) {
    this.config.widget.setValue(val);
  }
  get value() {
    return this.config.widget.value;
  }
};
registerWidgetClass("shared", Widget_shared);

// src/csuite/fields/size/WidgetSize.ts
import { runInAction as runInAction14 } from "mobx";
import { nanoid as nanoid20 } from "nanoid";

// src/csuite/fields/size/ResolutionState.tsx
import { makeAutoObservable as makeAutoObservable12 } from "mobx";
var ResolutionState = class {
  constructor(req) {
    this.req = req;
    this.idealSizeforModelType = (model) => {
      if (model === "xl")
        return { width: 1024, height: 1024 };
      if (model === "2.0")
        return { width: 768, height: 768 };
      if (model === "2.1")
        return { width: 768, height: 768 };
      if (model === "1.5")
        return { width: 512, height: 512 };
      if (model === "1.4")
        return { width: 512, height: 512 };
      return { width: this.width, height: this.height };
    };
    this.flip = () => {
      const prevWidth = this.width;
      this.req.width = this.height;
      this.req.height = prevWidth;
    };
    // prettier-ignore
    this.desiredModelType = "1.5";
    this.desiredAspectRatio = "1:1";
    this.isAspectRatioLocked = false;
    this.wasHeightAdjustedLast = true;
    this.desiredAspectRatio = (() => {
      const ratio = parseFloatNoRoundingErr(this.realAspectRatio, 2);
      if (ratio === parseFloatNoRoundingErr(1 / 1, 2))
        return "1:1";
      if (ratio === parseFloatNoRoundingErr(16 / 9, 2))
        return "16:9";
      if (ratio === parseFloatNoRoundingErr(4 / 3, 2))
        return "4:3";
      if (ratio === parseFloatNoRoundingErr(3 / 2, 2))
        return "3:2";
      return "1:1";
    })();
    makeAutoObservable12(this);
  }
  get width() {
    return this.req.width;
  }
  // prettier-ignore
  get height() {
    return this.req.height;
  }
  // prettier-ignore
  set width(next) {
    this.req.width = next;
  }
  // prettier-ignore
  set height(next) {
    this.req.height = next;
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
    if (this.wasHeightAdjustedLast) {
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

// src/csuite/fields/size/WidgetSizeUI.tsx
import { observer as observer68 } from "mobx-react-lite";
var WigetSize_LineUI = observer68(function WigetSize_LineUI_(p) {
  return /* @__PURE__ */ jsx(WidgetSizeX_LineUI, { sizeHelper: p.widget.sizeHelper, bounds: p.widget.config });
});
var WigetSize_BlockUI = observer68(function WigetSize_BlockUI_(p) {
  return /* @__PURE__ */ jsx(WigetSizeXUI, { sizeHelper: p.widget.sizeHelper, bounds: p.widget.config });
});
var WidgetSizeX_LineUI = observer68(function WidgetSize_LineUI_(p) {
  const uist = p.sizeHelper;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-1", children: /* @__PURE__ */ jsxs(
    Frame,
    {
      border: { contrast: 0.05 },
      tw: ["h-input w-full h-full flex gap-2 items-center overflow-clip"],
      style: { padding: "0px" },
      children: [
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
var AspectLockButtonUI = observer68(function AspectLockButtonUI_(p) {
  const uist = p.sizeHelper;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      active: uist.isAspectRatioLocked,
      style: { border: "unset", borderRadius: "0px" },
      icon: uist.isAspectRatioLocked ? "mdiLink" : "mdiLinkOff",
      onMouseDown: (ev) => {
        uist.isAspectRatioLocked = !uist.isAspectRatioLocked;
        if (!uist.isAspectRatioLocked) {
          return;
        }
        if (uist.wasHeightAdjustedLast) {
          uist.setHeight(uist.height);
        } else {
          uist.setWidth(uist.width);
        }
      }
    }
  );
});
var AspectRatioSquareUI = observer68(function AspectRatioSquareUI_(p) {
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
      onClick: uist.flip,
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
var WigetSizeXUI = observer68(function WigetSizeXUI_(p) {
  const uist = p.sizeHelper;
  const resoBtn = (ar) => /* @__PURE__ */ jsx(
    InputBoolUI,
    {
      display: "button",
      value: uist.desiredAspectRatio == ar,
      onValueChange: () => uist.setAspectRatio(ar),
      text: ar
    }
  );
  const modelBtn = (model) => /* @__PURE__ */ jsx(
    InputBoolUI,
    {
      display: "button",
      value: uist.desiredModelType == model,
      onValueChange: () => uist.setModelType(model),
      text: model
    }
  );
  const portrait = uist.height / uist.width > 1;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      children: /* @__PURE__ */ jsxs("div", { tw: "flex", children: [
        /* @__PURE__ */ jsxs("div", { tw: "join", children: [
          modelBtn("1.5"),
          modelBtn("xl")
        ] }),
        /* @__PURE__ */ jsxs("div", { tw: "ml-auto flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("div", { tw: "join", children: resoBtn("1:1") }),
          /* @__PURE__ */ jsxs("div", { tw: "join", children: [
            resoBtn("16:9"),
            resoBtn("9:16")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join", children: [
            resoBtn("4:3"),
            resoBtn("3:4")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join", children: [
            resoBtn("3:2"),
            resoBtn("2:3")
          ] })
        ] })
      ] })
    }
  );
});

// src/csuite/fields/size/WidgetSize.ts
var Widget_size = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WigetSize_LineUI;
    this.DefaultBodyUI = WigetSize_BlockUI;
    this.type = "size";
    this.id = serial?.id ?? nanoid20();
    const config = spec.config;
    if (serial) {
      this.serial = serial;
    } else {
      const aspectRatio = config.default?.aspectRatio ?? "1:1";
      const modelType = config.default?.modelType ?? "SD1.5 512";
      const width = config.default?.width ?? parseInt(modelType.split(" ")[1]);
      const height = config.default?.height ?? parseInt(modelType.split(" ")[1]);
      this.serial = {
        type: "size",
        id: this.id,
        aspectRatio,
        modelType,
        height,
        width
      };
    }
    this.init({
      sizeHelper: false,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get defaultValue() {
    const config = this.spec.config;
    const aspectRatio = config.default?.aspectRatio ?? "1:1";
    const modelType = config.default?.modelType ?? "SD1.5 512";
    const width = config.default?.width ?? parseInt(modelType.split(" ")[1]);
    const height = config.default?.height ?? parseInt(modelType.split(" ")[1]);
    return { type: "size", aspectRatio, modelType, height, width };
  }
  get hasChanges() {
    const def = this.defaultValue;
    if (this.serial.width !== def.width)
      return true;
    if (this.serial.height !== def.height)
      return true;
    if (this.serial.aspectRatio !== def.aspectRatio)
      return true;
    return false;
  }
  reset() {
    this.value = this.defaultValue;
  }
  get width() {
    return this.serial.width;
  }
  // prettier-ignore
  get height() {
    return this.serial.height;
  }
  // prettier-ignore
  set width(next) {
    if (next === this.serial.width)
      return;
    runInAction14(() => {
      this.serial.width = next;
      this.bumpValue();
    });
  }
  set height(next) {
    if (next === this.serial.height)
      return;
    runInAction14(() => {
      this.serial.height = next;
      this.bumpValue();
    });
  }
  get sizeHelper() {
    const state = new ResolutionState(this);
    Object.defineProperty(this, "sizeHelper", { value: state });
    return state;
  }
  setValue(val) {
    this.value = val;
  }
  set value(val) {
    if (val.width === this.serial.width && //
    val.height === this.serial.height && val.aspectRatio === this.serial.aspectRatio) {
      return;
    }
    runInAction14(() => {
      Object.assign(this.serial, val);
      this.bumpValue();
    });
  }
  get value() {
    return this.serial;
  }
};
registerWidgetClass("size", Widget_size);

// src/csuite/fields/spacer/WidgetSpacer.tsx
import { observable as observable12 } from "mobx";
import { nanoid as nanoid21 } from "nanoid";

// src/csuite/fields/spacer/WidgetSpacerUI.tsx
import { observer as observer69 } from "mobx-react-lite";
var WidgetSpacerUI = observer69(function WidgetSpacerUI_(p) {
  return /* @__PURE__ */ jsx(SpacerUI, {});
});

// src/csuite/fields/spacer/WidgetSpacer.tsx
var Widget_spacer = class extends BaseField {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetSpacerUI;
    this.DefaultBodyUI = void 0;
    this.type = "spacer";
    this.hasChanges = false;
    this.reset = () => {
    };
    this.id = serial?.id ?? nanoid21();
    this.serial = serial ?? {
      id: this.id,
      type: "spacer",
      collapsed: false
    };
    this.init({
      serial: observable12,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get value() {
    return false;
  }
  setValue(val) {
  }
  set value(val) {
  }
};
registerWidgetClass("spacer", Widget_spacer);

// src/csuite/fields/string/WidgetString.tsx
import { runInAction as runInAction15 } from "mobx";
import { nanoid as nanoid22 } from "nanoid";

// src/csuite/fields/string/WidgetStringUI.tsx
import { observer as observer71 } from "mobx-react-lite";

// src/csuite/input-string/InputStringUI.tsx
import { observer as observer70 } from "mobx-react-lite";
import { useState as useState2 } from "react";

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
var InputStringUI = observer70(function WidgetStringUI_(p) {
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
      base: 5,
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
              if (p.buffered)
                p.buffered.setTemporaryValue(ev.target.value);
              else
                p.setValue(ev.currentTarget.value);
            },
            onDragStart: (ev) => ev.preventDefault(),
            onFocus: (ev) => {
              p.buffered?.setTemporaryValue(p.getValue() ?? "");
              ev.currentTarget.select();
            },
            onBlur: () => {
              const tempValue = p.buffered?.getTemporaryValue?.();
              if (tempValue != null)
                p.setValue(tempValue);
            },
            onKeyDown: (ev) => {
              if (ev.key === "Enter") {
                ev.currentTarget.blur();
              } else if (ev.key === "Escape") {
                if (!p.buffered && temporaryValue)
                  p.setValue(temporaryValue);
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
var WidgetString_TextareaHeaderUI = observer71(function WidgetString_TextareaHeaderUI_(p) {
  const widget = p.widget;
  if (!widget.config.textarea)
    return null;
  if (!p.widget.serial.collapsed)
    return null;
  return /* @__PURE__ */ jsx("div", { tw: "line-clamp-1 italic opacity-50", children: p.widget.value });
});
var WidgetString_TextareaBodyUI = observer71(function WidgetString_TextareaBodyUI_(p) {
  const widget = p.widget;
  if (!widget.config.textarea)
    return null;
  const val = widget.value;
  return /* @__PURE__ */ jsx(Frame, { base: 5, children: /* @__PURE__ */ jsx(
    "textarea",
    {
      style: {
        /* ...p.widget.config.style, */
        lineHeight: "1.3rem",
        resize: p.widget.config.resize ?? "both"
      },
      tw: "cushy-basic-input w-full p-2",
      placeholder: widget.config.placeHolder,
      rows: 3,
      value: val,
      onChange: (ev) => {
        widget.value = ev.target.value;
      }
    }
  ) });
});
var WidgetString_HeaderUI = observer71(function WidgetStringUI_2(p) {
  const widget = p.widget;
  const config = widget.config;
  return /* @__PURE__ */ jsx(
    InputStringUI,
    {
      icon: p.widget.config.innerIcon,
      type: config.inputType,
      pattern: config.pattern,
      className: config.className,
      getValue: () => widget.value,
      setValue: (value) => widget.value = value,
      buffered: widget.config.buffered ? {
        getTemporaryValue: () => widget.temporaryValue,
        setTemporaryValue: (value) => widget.temporaryValue = value
      } : void 0
    }
  );
});

// src/csuite/fields/string/WidgetString.tsx
var Widget_string = class extends BaseField {
  // prettier-ignore
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.type = "str";
    // --------------
    this.temporaryValue = null;
    this.setTemporaryValue = (next) => this.temporaryValue = next;
    this.defaultValue = this.config.default ?? "";
    // prettier-ignore
    this.reset = () => {
      this.value = this.defaultValue;
    };
    this.id = serial?.id ?? nanoid22();
    const config = spec.config;
    this.serial = serial ?? {
      type: "str",
      val: this.config.default,
      collapsed: config.startCollapsed,
      id: this.id
    };
    makeAutoObservableInheritance(this);
  }
  get DefaultHeaderUI() {
    if (this.config.textarea)
      return WidgetString_TextareaHeaderUI;
    else
      return WidgetString_HeaderUI;
  }
  get DefaultBodyUI() {
    if (this.config.textarea)
      return WidgetString_TextareaBodyUI;
    return void 0;
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    return this.serial.val !== this.defaultValue;
  }
  get animateResize() {
    if (this.config.textarea)
      return false;
    return true;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction15(() => {
      this.serial.val = next;
      this.bumpValue();
    });
  }
  get value() {
    return this.serial.val ?? this.config.default ?? "";
  }
};
registerWidgetClass("str", Widget_string);

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

// src/csuite/simple/SimpleBlueprint.ts
import { makeObservable as makeObservable5 } from "mobx";
var SimpleBlueprint = class _SimpleBlueprint {
  constructor(type, config) {
    this.type = type;
    this.config = config;
    this.LabelExtraUI = (p) => null;
    // PubSub -----------------------------------------------------
    this.producers = [];
    this.reactions = [];
    // -----------------------------------------------------
    this.Make = (type, config) => new _SimpleBlueprint(type, config);
    /** wrap widget spec to list stuff */
    this.list = (config = {}) => new _SimpleBlueprint("list", {
      ...config,
      element: this
    });
    this.optional = (startActive = false) => new _SimpleBlueprint("optional", {
      widget: this,
      startActive,
      label: this.config.label,
      // requirements: this.config.requirements,
      startCollapsed: this.config.startCollapsed,
      collapsed: this.config.collapsed,
      border: this.config.border
    });
    this.shared = (key) => getCurrentForm_IMPL().shared(key, this);
    /** clone the spec, and patch the cloned config */
    this.withConfig = (config) => {
      const mergedConfig = { ...this.config, ...config };
      const cloned = new _SimpleBlueprint(this.type, mergedConfig);
      cloned.producers = this.producers;
      cloned.reactions = this.reactions;
      return cloned;
    };
    this.hidden = () => this.withConfig({ hidden: true });
    makeObservable5(this, { config: true });
  }
  publish(chan, produce) {
    this.producers.push({ chan, produce });
    return this;
  }
  subscribe(chan, effect) {
    return this.addReaction(
      (self2) => self2.consume(chan),
      (arg, self2) => {
        if (arg == null)
          return;
        effect(arg, self2);
      }
    );
  }
  addReaction(expr, effect) {
    this.reactions.push({ expr, effect });
    return this;
  }
};

// src/csuite/simple/SimpleDomain.ts
var SimpleDomain = class {
  /** (@internal) don't call this yourself */
  constructor(form) {
    this.form = form;
    /** (@internal) DO NOT USE YOURSELF */
    this.SpecCtor = SimpleBlueprint;
    this.time = (config = {}) => {
      return new SimpleBlueprint("str", { inputType: "time", ...config });
    };
    this.date = (config = {}) => {
      return new SimpleBlueprint("str", { inputType: "date", ...config });
    };
    this.datetime = (config = {}) => {
      return new SimpleBlueprint("str", { inputType: "datetime-local", ...config });
    };
    this.password = (config = {}) => {
      return new SimpleBlueprint("str", { inputType: "password", ...config });
    };
    this.email = (config = {}) => {
      return new SimpleBlueprint("str", { inputType: "email", ...config });
    };
    this.url = (config = {}) => {
      return new SimpleBlueprint("str", { inputType: "url", ...config });
    };
    this.string = (config = {}) => {
      return new SimpleBlueprint("str", config);
    };
    this.text = (config = {}) => {
      return new SimpleBlueprint("str", config);
    };
    this.textarea = (config = {}) => {
      return new SimpleBlueprint("str", { textarea: true, ...config });
    };
    this.boolean = (config = {}) => {
      return new SimpleBlueprint("bool", config);
    };
    this.bool = (config = {}) => {
      return new SimpleBlueprint("bool", config);
    };
    this.size = (config = {}) => {
      return new SimpleBlueprint("size", config);
    };
    this.seed = (config = {}) => {
      return new SimpleBlueprint("seed", config);
    };
    this.color = (config = {}) => {
      return new SimpleBlueprint("color", config);
    };
    this.colorV2 = (config = {}) => {
      return new SimpleBlueprint("str", { inputType: "color", ...config });
    };
    this.matrix = (config) => {
      return new SimpleBlueprint("matrix", config);
    };
    this.button = (config) => {
      return new SimpleBlueprint("button", config);
    };
    /** variants: `header` */
    this.markdown = (config) => new SimpleBlueprint("markdown", typeof config === "string" ? { markdown: config } : config);
    /** [markdown variant]: inline=true, label=false */
    this.header = (config) => new SimpleBlueprint(
      "markdown",
      typeof config === "string" ? { markdown: config, inHeader: true, label: false } : { inHeader: true, label: false, justifyLabel: false, ...config }
    );
    this.int = (config = {}) => {
      return new SimpleBlueprint("number", { mode: "int", ...config });
    };
    /** [number variant] precent = mode=int, default=100, step=10, min=1, max=100, suffix='%', */
    this.percent = (config = {}) => {
      return new SimpleBlueprint("number", {
        mode: "int",
        default: 100,
        step: 10,
        min: 1,
        max: 100,
        suffix: "%",
        ...config
      });
    };
    this.float = (config = {}) => {
      return new SimpleBlueprint("number", { mode: "float", ...config });
    };
    this.number = (config = {}) => {
      return new SimpleBlueprint("number", { mode: "float", ...config });
    };
    this.list = (config) => {
      return new SimpleBlueprint("list", config);
    };
    this.selectOne = (config) => {
      return new SimpleBlueprint("selectOne", config);
    };
    this.selectOneV2 = (p) => {
      return new SimpleBlueprint("selectOne", {
        choices: p.map((id) => ({ id, label: id })),
        appearance: "tab"
      });
    };
    this.selectOneV3 = (p, config = {}) => {
      return new SimpleBlueprint("selectOne", { choices: p.map((id) => ({ id, label: id })), appearance: "tab", ...config });
    };
    this.selectMany = (config) => {
      return new SimpleBlueprint("selectMany", config);
    };
    /** see also: `fields` for a more practical api */
    this.group = (config = {}) => {
      return new SimpleBlueprint("group", config);
    };
    this.fields = (fields, config = {}) => {
      return new SimpleBlueprint("group", { items: fields, ...config });
    };
    this.choice = (config) => {
      return new SimpleBlueprint("choices", { multi: false, ...config });
    };
    this.choices = (config) => {
      return new SimpleBlueprint("choices", { multi: true, ...config });
    };
    this.ok = (config = {}) => new SimpleBlueprint("group", config);
    /** simple choice alternative api */
    this.tabs = (items, config = {}) => new SimpleBlueprint("choices", { items, multi: false, ...config, appearance: "tab" });
    // optional wrappers
    this.optional = (p) => {
      return new SimpleBlueprint("optional", p);
    };
    this.llmModel = (p = {}) => {
      const choices = Object.entries(openRouterInfos).map(([id, info]) => ({ id, label: info.name }));
      const def = p.default ? choices.find((c) => c.id === p.default) : void 0;
      return this.selectOne({ default: def, choices });
    };
    /**
     * Calling this function will mount and instanciate the subform right away
     * Subform will be register in the root form `group`, using `__${key}__` as the key
     * This is a core abstraction that enables features like
     *  - mountting a widget at several places in the form
     *  - recursive forms
     *  - dynamic widgets depending on other widgets values
     * */
    this.shared = (key, spec) => {
      const prevSerial = this.form.shared[key];
      let widget;
      if (prevSerial && prevSerial.type === spec.type) {
        widget = this._HYDRATE(null, spec, prevSerial);
      } else {
        widget = this._HYDRATE(null, spec, null);
      }
      this.form.shared[key] = widget.serial;
      this.form.knownShared.set(key, widget);
      const sharedSpec = new SimpleBlueprint("shared", { rootKey: key, widget });
      return new Widget_shared(this.form, null, sharedSpec);
    };
    this._HYDRATE = (parent, spec, serial) => {
      const w = this.__HYDRATE(parent, spec, serial);
      w.publishValue();
      for (const { expr, effect } of spec.reactions) {
        reaction2(
          () => expr(w),
          (arg) => effect(arg, w),
          { fireImmediately: true }
        );
      }
      return w;
    };
    /** (@internal); */
    this._cache = { count: 0 };
    /** (@internal) advanced way to restore form state. used internally */
    this.__HYDRATE = (parent, spec, serial) => {
      if (serial != null && serial.type !== spec.type) {
        console.log(`[\u{1F536}] INVALID SERIAL (expected: ${spec.type}, got: ${serial.type})`);
        serial = null;
      }
      if (spec instanceof Widget_shared)
        return spec;
      if (!(spec instanceof SimpleBlueprint))
        console.log(`[\u274C] _HYDRATE received an invalid unmounted widget. This is probably a bug.`);
      const type = spec.type;
      const config = spec.config;
      const spec2 = spec;
      if (type === "group")
        return new Widget_group(
          this.form,
          parent,
          spec2,
          serial,
          this.form._ROOT ? void 0 : (x) => {
            this.form._ROOT = x;
          }
        );
      if (type === "shared") {
        throw new Error(`[\u274C] For now, Shared_Widget have been design to bypass spec hydratation completely.`);
      }
      if (type === "optional")
        return new Widget_optional(this.form, parent, spec2, serial);
      if (type === "bool")
        return new Widget_bool(this.form, parent, spec2, serial);
      if (type === "str")
        return new Widget_string(this.form, parent, spec2, serial);
      if (type === "choices")
        return new Widget_choices(this.form, parent, spec2, serial);
      if (type === "number")
        return new Widget_number(this.form, parent, spec2, serial);
      if (type === "color")
        return new Widget_color(this.form, parent, spec2, serial);
      if (type === "list")
        return new Widget_list(this.form, parent, spec2, serial);
      if (type === "button")
        return new Widget_button(this.form, parent, spec2, serial);
      if (type === "seed")
        return new Widget_seed(this.form, parent, spec2, serial);
      if (type === "matrix")
        return new Widget_matrix(this.form, parent, spec2, serial);
      if (type === "selectOne")
        return new Widget_selectOne(this.form, parent, spec2, serial);
      if (type === "selectMany")
        return new Widget_selectMany(this.form, parent, spec2, serial);
      if (type === "size")
        return new Widget_size(this.form, parent, spec2, serial);
      if (type === "spacer")
        return new Widget_spacer(this.form, parent, spec2, serial);
      if (type === "markdown")
        return new Widget_markdown(this.form, parent, spec2, serial);
      console.log(`\u{1F534} unknown widget "${type}" in serial.`);
      return new Widget_markdown(
        this.form,
        parent,
        new SimpleBlueprint("markdown", { markdown: `\u{1F534} unknown widget "${type}" in serial.` })
      );
    };
    makeAutoObservable13(this, {
      SpecCtor: false
    });
  }
};

// src/csuite/ctx/CSuiteProvider.tsx
import { observer as observer72 } from "mobx-react-lite";
var CSuiteProvider = observer72(function CSuiteProvider_(p) {
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
    this.showWidgetUndo = true;
    this.showWidgetMenu = true;
    this.showWidgetDiff = true;
    this.showToggleButtonBox = false;
    // theme
    this.base = new Kolor(0.9999, 0, 240);
    this.text = { contrast: 0.824 };
    this.inputBorder = 0.08;
    this.labelText = { contrast: 0.48, chroma: 0.035 };
    this.inputHeight = 1.6;
    this.showWidgetExtra = true;
    this.truncateLabels = false;
    makeAutoObservable14(this);
  }
  get baseStr() {
    return this.base.toOKLCH();
  }
  get shiftDirection() {
    return this.base.lightness > 0.5 ? -1 : 1;
  }
};

// src/csuite/model/Channel.ts
import { makeAutoObservable as makeAutoObservable15 } from "mobx";
import { nanoid as nanoid23 } from "nanoid";
var Channel = class {
  constructor(id = nanoid23()) {
    this.id = id;
    makeAutoObservable15(this);
  }
};

// src/csuite/activity/ActivityUI.tsx
import { observer as observer73 } from "mobx-react-lite";
import { Fragment as Fragment5 } from "react/jsx-runtime";
var ActivityStackUI = observer73(function ActivityStackUI_(p) {
  return /* @__PURE__ */ jsx(Fragment5, { children: activityManager._stack.map((activity, ix) => /* @__PURE__ */ jsx(
    ActivityContainerUI,
    {
      stop: () => {
        activity.onStop?.();
        activityManager.stopCurrentActivity();
      },
      activity,
      ix,
      children: /* @__PURE__ */ jsx(
        activity.UI,
        {
          activity,
          stop: () => activityManager.stopActivity(activity)
        }
      )
    },
    activity.uid
  )) });
});
var ActivityContainerUI = observer73(function ActivityContainerUI_(p) {
  const backdropzIndex = 1e3 + 100 * (p.ix ?? 1);
  const activityZIndex = backdropzIndex + 1;
  let pos = void 0;
  if (p.activity.event) {
    const target = p.activity.event.target;
    if (target instanceof HTMLElement) {
      pos = computePlacement(p.activity.placement ?? "popup-lg", target.getBoundingClientRect());
    }
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      tabIndex: -1,
      className: "_InputBlockerUI",
      tw: "absolute inset-0 h-full w-full pointer-events-auto",
      onKeyUp: (ev) => {
        if (ev.key === "Escape") {
          console.log("Escape key pressed");
          p.stop?.();
        }
      },
      children: /* @__PURE__ */ jsxs("div", { tw: "relative w-full h-full", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "_InputBlockerUI-backdrop",
            tw: "absolute inset-0 bg-[#000000db]",
            style: { zIndex: backdropzIndex },
            children: /* @__PURE__ */ jsx("div", { style: { zIndex: -1 }, tw: "absolute inset-0 z" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: "absolute inset-0",
            style: { zIndex: activityZIndex, ...pos },
            className: "_InputBlockerUI-activity-container flex justify-center",
            onMouseDown: (ev) => {
              console.log("activity backref clicked");
              if (ev.target === ev.currentTarget)
                p.stop?.();
            },
            children: p.activity.shell === "popup-lg" ? /* @__PURE__ */ jsx(ModalShellUI, { tw: "max-w-lg w-fit h-fit m-8", close: () => p.stop(), title: p.activity.title, children: p.children }) : p.activity.shell === "popup-sm" ? /* @__PURE__ */ jsx(ModalShellUI, { tw: "max-w-sm w-fit h-fit m-8", close: () => p.stop(), title: p.activity.title, children: p.children }) : p.activity.shell === "popup-full" ? /* @__PURE__ */ jsx(ModalShellUI, { tw: "m-8", close: () => p.stop(), title: p.activity.title, children: p.children }) : p.children
          }
        )
      ] })
    }
  );
});

// src/csuite/index.ts
var SimpleModelManager = new ModelManager(SimpleDomain);
export {
  ActivityContainerUI,
  ActivityStackUI,
  CSuiteProvider,
  CSuite_ThemeLoco,
  Channel,
  SimpleModelManager
};
