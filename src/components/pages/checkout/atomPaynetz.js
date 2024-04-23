let div = document.createElement("div");
function showLoader() {
  let e = document.createElement("div");
  let t = document.createElement("img");

  e.style.width = "100vw";
  e.style.height = "100vh";
  e.style.position = "fixed";
  e.style.top = "0";
  e.style.left = "0";
  e.style.zIndex = 1e3;
  e.style.display = "flex";
  e.style.justifyContent = "center";
  e.style.alignItems = "center";
  e.style.backgroundColor = "rgba(0,0,0,0.5)";
  e.id = "iFrameAtomLoader";
  t.style.width = "70px";
  t.style.height = "70px";
  t.src =
    "https://pgtest.atomtech.in/AtomInstaPay/assets/images/filter-loader.gif";
  document.body.appendChild(e);
  e.appendChild(t);
}
function handleCustomError(e, t) {
  var n = document.getElementById("aipayErrorModal"),
    r = document.getElementsByClassName("close")[0];
  document.getElementById("custom-aipay-error-msg").innerHTML = t;
  n.style.display = "block";
  "mobile_webView" === e.userAgent
    ? submitMobileUserBack(e, t)
    : (r.onclick = function () {
        n.style.display = "none";
      });
  window.onclick = function (e) {
    e.target == n && (n.style.display = "none");
  };
}

function authUserFunc(e) {
  var t = function (e, t) {
      this.keySize = e / 32;
      this.iterationCount = t;
    },
    n = "never give up on encryption logic";
  t.prototype.generateKey = function (e, t) {
    return o.PBKDF2(t, o.enc.Hex.parse(e), {
      keySize: this.keySize,
      iterations: this.iterationCount,
    });
  };
  t.prototype.encrypt = function (e, t, n, r) {
    var i = this.generateKey(e, n);
    return o.AES.encrypt(r, i, {
      iv: o.enc.Hex.parse(t),
    }).ciphertext.toString(o.enc.Base64);
  };
  t.prototype.decrypt = function (e, t, n, r) {
    var i = this.generateKey(e, n),
      a = o.lib.CipherParams.create({ ciphertext: o.enc.Base64.parse(r) });
    return o.AES.decrypt(a, i, { iv: o.enc.Hex.parse(t) }).toString(o.enc.Utf8);
  };
  var r,
    i,
    o =
      o ||
      (function (e, t) {
        var n = {},
          r = (n.lib = {}),
          i = (r.Base = (function () {
            function e() {}
            return {
              extend: function (t) {
                e.prototype = this;
                var n = new e();
                return t && n.mixIn(t), (n.$super = this), n;
              },
              create: function () {
                var e = this.extend();
                return e.init.apply(e, arguments), e;
              },
              init: function () {},
              mixIn: function (e) {
                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString);
              },
              clone: function () {
                return this.$super.extend(this);
              },
            };
          })()),
          o = (r.WordArray = i.extend({
            init: function (e, t) {
              e = this.words = e || [];
              this.sigBytes = null != t ? t : 4 * e.length;
            },
            toString: function (e) {
              return (e || s).stringify(this);
            },
            concat: function (e) {
              var t = this.words,
                n = e.words,
                r = this.sigBytes;
              if (((e = e.sigBytes), this.clamp(), r % 4))
                for (var i = 0; i < e; i++)
                  t[(r + i) >>> 2] |=
                    ((n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                    (24 - ((r + i) % 4) * 8);
              else if (65535 < n.length)
                for (i = 0; i < e; i += 4) t[(r + i) >>> 2] = n[i >>> 2];
              else t.push.apply(t, n);
              return (this.sigBytes += e), this;
            },
            clamp: function () {
              var t = this.words,
                n = this.sigBytes;
              t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8);
              t.length = e.ceil(n / 4);
            },
            clone: function () {
              var e = i.clone.call(this);
              return (e.words = this.words.slice(0)), e;
            },
            random: function (t) {
              for (var n = [], r = 0; r < t; r += 4)
                n.push((4294967296 * e.random()) | 0);
              return o.create(n, t);
            },
          })),
          a = (n.enc = {}),
          s = (a.Hex = {
            stringify: function (e) {
              for (
                var t = e.words, n = ((e = e.sigBytes), []), r = 0;
                r < e;
                r++
              ) {
                var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                n.push(i >>> 4).toString(16);
                n.push(15 & i).toString(16);
              }
              return n.join("");
            },
            parse: function (e) {
              for (var t = e.length, n = [], r = 0; r < t; r += 2)
                n[r >>> 3] |=
                  parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
              return o.create(n, t / 2);
            },
          }),
          c = (a.Latin1 = {
            stringify: function (e) {
              for (
                var t = e.words, n = ((e = e.sigBytes), []), r = 0;
                r < e;
                r++
              )
                n.push(
                  String.fromCharCode((t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255)
                );
              return n.join("");
            },
            parse: function (e) {
              for (var t = e.length, n = [], r = 0; r < t; r++)
                n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
              return o.create(n, t);
            },
          }),
          d = (a.Utf8 = {
            stringify: function (e) {
              try {
                return decodeURIComponent(escape(c.stringify(e)));
              } catch (e) {
                throw Error("Malformed UTF-8 data");
              }
            },
            parse: function (e) {
              return c.parse(unescape(encodeURIComponent(e)));
            },
          }),
          u = (r.BufferedBlockAlgorithm = i.extend({
            reset: function () {
              this._data = o.create();
              this._nDataBytes = 0;
            },
            _append: function (e) {
              "string" == typeof e && (e = d.parse(e));
              this._data = this._data.concat(e);
              this._nDataBytes += e.sigBytes;
            },

            _process: function (t) {
              var n = this._data,
                r = n.words,
                i = n.sigBytes,
                a = this.blockSize,
                s = i / (4 * a);
              if (
                ((t =
                  (s = t
                    ? e.ceil(s)
                    : e.max((0 | s) - this._minBufferSize, 0)) * a),
                (i = e.min(4 * t, i)),
                t)
              ) {
                for (var c = 0; c < t; c += a) this._doProcessBlock(r, c);
                c = r.splice(0, t);
                n.sigBytes -= i;
              }
              return o.create(c, i);
            },
            clone: function () {
              var e = i.clone.call(this);
              return (e._data = this._data.clone()), e;
            },
            _minBufferSize: 0,
          }));
        r.Hasher = u.extend({
          init: function () {
            this.reset();
          },
          reset: function () {
            u.reset.call(this);
            this._doReset();
          },
          update: function (e) {
            return this._append(e), this._process(), this;
          },
          finalize: function (e) {
            return e && this._append(e), this._doFinalize(), this._hash;
          },
          clone: function () {
            var e = u.clone.call(this);
            return (e._hash = this._hash.clone()), e;
          },
          blockSize: 16,
          _createHelper: function (e) {
            return function (t, n) {
              return e.create(n).finalize(t);
            };
          },
          _createHmacHelper: function (e) {
            return function (t, n) {
              return l.HMAC.create(e, n).finalize(t);
            };
          },
        });
        var l = (n.algo = {});
        return n;
      })(Math);
  i = (r = o).lib.WordArray;
  r.enc.Base64 = {
    stringify: function (e) {
      var t = e.words,
        n = e.sigBytes,
        r = this._map;
      e.clamp();
      e = [];
      for (var i = 0; i < n; i += 3)
        for (
          var o =
              (((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
              (((t[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255) << 8) |
              ((t[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255),
            a = 0;
          4 > a && i + 0.75 * a < n;
          a++
        )
          e.push(r.charAt((o >>> (6 * (3 - a))) & 63));
      if ((t = r.charAt(64))) for (; e.length % 4; ) e.push(t);
      return e.join("");
    },
    parse: function (e) {
      var t = (e = e.replace(/\s/g, "")).length,
        n = this._map;
      (r = n.charAt(64)) && -1 != (r = e.indexOf(r)) && (t = r);
      for (var r = [], o = 0, a = 0; a < t; a++)
        if (a % 4) {
          var s = n.indexOf(e.charAt(a - 1)) << ((a % 4) * 2),
            c = n.indexOf(e.charAt(a)) >>> (6 - (a % 4) * 2);
          r[o >>> 2] |= (s | c) << (24 - (o % 4) * 8);
          o++;
        }
      return i.create(r, o);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  };
  (function (e) {
    function t(e, t, n, r, i, o, a) {
      return (
        (((e = e + ((t & n) | (~t & r)) + i + a) << o) | (e >>> (32 - o))) + t
      );
    }
    function n(e, t, n, r, i, o, a) {
      return (
        (((e = e + ((t & r) | (n & ~r)) + i + a) << o) | (e >>> (32 - o))) + t
      );
    }
    function r(e, t, n, r, i, o, a) {
      return (((e = e + (t ^ n ^ r) + i + a) << o) | (e >>> (32 - o))) + t;
    }
    function i(e, t, n, r, i, o, a) {
      return (((e = e + (n ^ (t | ~r)) + i + a) << o) | (e >>> (32 - o))) + t;
    }
    var a = o,
      s = (c = a.lib).WordArray,
      c = c.Hasher,
      d = a.algo,
      u = [];

    (function () {
      for (var t = 0; 64 > t; t++) {
        u[t] = (4294967296 * e.abs(e.sin(t + 1))) | 0;
      }
    })();

    d = d.MD5 = c.extend({
      _doReset: function () {
        this._hash = s.create([1732584193, 4023233417, 2562383102, 271733878]);
      },
      _doProcessBlock: function (e, o) {
        for (var a = 0; 16 > a; a++) {
          var s = e[(c = o + a)];
          e[c] =
            (16711935 & ((s << 8) | (s >>> 24))) |
            (4278255360 & ((s << 24) | (s >>> 8)));
        }
        s = (c = this._hash.words)[0];
        var c,
          d = c[1],
          l = c[2],
          h = c[3];
        for (a = 0; 64 > a; a += 4) {
          if (16 > a) {
            s = t(s, d, l, h, e[o + a], 7, u[a]);
            h = t(h, s, d, l, e[o + a + 1], 12, u[a + 1]);
            l = t(l, h, s, d, e[o + a + 2], 17, u[a + 2]);
            d = t(d, l, h, s, e[o + a + 3], 22, u[a + 3]);
          } else if (32 > a) {
            s = n(s, d, l, h, e[o + ((a + 1) % 16)], 5, u[a]);
            h = n(h, s, d, l, e[o + ((a + 6) % 16)], 9, u[a + 1]);
            l = n(l, h, s, d, e[o + ((a + 11) % 16)], 14, u[a + 2]);
            d = n(d, l, h, s, e[o + (a % 16)], 20, u[a + 3]);
          } else if (48 > a) {
            s = r(s, d, l, h, e[o + ((3 * a + 5) % 16)], 4, u[a]);
            h = r(h, s, d, l, e[o + ((3 * a + 8) % 16)], 11, u[a + 1]);
            l = r(l, h, s, d, e[o + ((3 * a + 11) % 16)], 16, u[a + 2]);
            d = r(d, l, h, s, e[o + ((3 * a + 14) % 16)], 23, u[a + 3]);
          } else {
            s = i(s, d, l, h, e[o + ((3 * a) % 16)], 6, u[a]);
            h = i(h, s, d, l, e[o + ((3 * a + 7) % 16)], 10, u[a + 1]);
            l = i(l, h, s, d, e[o + ((3 * a + 14) % 16)], 15, u[a + 2]);
            d = i(d, l, h, s, e[o + ((3 * a + 5) % 16)], 21, u[a + 3]);
          }
        }

        c[0] = (c[0] + s) | 0;
        c[1] = (c[1] + d) | 0;
        c[2] = (c[2] + l) | 0;
        c[3] = (c[3] + h) | 0;
      },
      _doFinalize: function () {
        var e = this._data,
          t = e.words,
          n = 8 * this._nDataBytes,
          r = 8 * e.sigBytes;
        for (
          t[r >>> 5] |= 128 << (24 - (r % 32)),
            t[14 + (((r + 64) >>> 9) << 4)] =
              (16711935 & ((n << 8) | (n >>> 24))) |
              (4278255360 & ((n << 24) | (n >>> 8))),
            e.sigBytes = 4 * (t.length + 1),
            this._process(),
            e = this._hash.words,
            t = 0;
          4 > t;
          t++
        )
          n = e[t];
        e[t] =
          (16711935 & ((n << 8) | (n >>> 24))) |
          (4278255360 & ((n << 24) | (n >>> 8)));
      },
    })((a.MD5 = c._createHelper(d)));
    a.HmacMD5 = c._createHmacHelper(d);
  })(Math);
  (function () {
    var e,
      t = o,
      n = (e = t.lib).Base,
      r = e.WordArray,
      i = ((e = t.algo).EvpKDF = n.extend({
        cfg: n.extend({ keySize: 4, hasher: e.MD5, iterations: 1 }),
        init: function (e) {
          this.cfg = this.cfg.extend(e);
        },
        compute: function (e, t) {
          for (
            var n = (s = this.cfg).hasher.create(),
              i = r.create(),
              o = i.words,
              a = s.keySize,
              s = s.iterations;
            o.length < a;

          ) {
            c && n.update(c);
            var c = n.update(e).finalize(t);
            n.reset();
            for (var d = 1; d < s; d++) c = n.finalize(c);
            n.reset();
            i.concat(c);
          }
          return (i.sigBytes = 4 * a), i;
        },
      }));
    t.EvpKDF = function (e, t, n) {
      return i.create(n).compute(e, t);
    };
  })();

  o.lib.Cipher ||
    (function (e) {
      var t = (p = o).lib,
        n = t.Base,
        r = t.WordArray,
        i = t.BufferedBlockAlgorithm,
        a = p.enc.Base64,
        s = p.algo.EvpKDF,
        c = (t.Cipher = i.extend({
          cfg: n.extend(),
          createEncryptor: function (e, t) {
            return this.create(this._ENC_XFORM_MODE, e, t);
          },
          createDecryptor: function (e, t) {
            return this.create(this._DEC_XFORM_MODE, e, t);
          },
          init: function (e, t, n) {
            this.cfg = this.cfg.extend(n);
            this._xformMode = e;
            this._key = t;
            this.reset();
          },
          reset: function () {
            i.reset.call(this);
            this._doReset();
          },
          process: function (e) {
            return this._append(e);
            this._process();
          },
          finalize: function (e) {
            return e && this._append(e);
            this._doFinalize();
          },
          keySize: 4,
          ivSize: 4,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: function (e) {
            return {
              encrypt: function (t, n, r) {
                return ("string" == typeof n ? m : f).encrypt(e, t, n, r);
              },
              decrypt: function (t, n, r) {
                return ("string" == typeof n ? m : f).decrypt(e, t, n, r);
              },
            };
          },
        }));
      t.StreamCipher = c.extend({
        _doFinalize: function () {
          return this._process(!0);
        },
        blockSize: 1,
      });
      var d = (p.mode = {}),
        u = (t.BlockCipherMode = n.extend({
          createEncryptor: function (e, t) {
            return this.Encryptor.create(e, t);
          },
          createDecryptor: function (e, t) {
            return this.Decryptor.create(e, t);
          },
          init: function (e, t) {
            this._cipher = e;
            this._iv = t;
          },
        })),
        l =
          ((d = d.CBC =
            (function () {
              function e(e, t, n) {
                var r = this._iv;
                r ? (this._iv = void 0) : (r = this._prevBlock);
                for (var i = 0; i < n; i++) e[t + i] ^= r[i];
              }
              var t = u.extend();
              return (
                (t.Encryptor = t.extend({
                  processBlock: function (t, n) {
                    var r = this._cipher,
                      i = r.blockSize;
                    e.call(this, t, n, i);
                    r.encryptBlock(t, n);
                    this._prevBlock = t.slice(n, n + i);
                  },
                })),
                (t.Decryptor = t.extend({
                  processBlock: function (t, n) {
                    var r = this._cipher,
                      i = r.blockSize,
                      o = t.slice(n, n + i);
                    r.decryptBlock(t, n);
                    e.call(this, t, n, i);
                    this._prevBlock = o;
                  },
                })),
                t
              );
            })()),
          ((p.pad = {}).Pkcs7 = {
            pad: function (e, t) {
              for (
                var n,
                  i =
                    ((n = (n = 4 * t) - (e.sigBytes % n)) << 24) |
                    (n << 16) |
                    (n << 8) |
                    n,
                  o = [],
                  a = 0;
                a < n;
                a += 4
              )
                o.push(i);
              n = r.create(o, n);
              e.concat(n);
            },
            unpad: function (e) {
              e.sigBytes -= 255 & e.words[(e.sigBytes - 1) >>> 2];
            },
          }));
      t.BlockCipher = c.extend({
        cfg: c.cfg.extend({ mode: d, padding: l }),
        reset: function () {
          c.reset.call(this);
          var e = (t = this.cfg).iv,
            t = t.mode;
          if (this._xformMode == this._ENC_XFORM_MODE)
            var n = t.createEncryptor;
          else n = t.createDecryptor;
          this._minBufferSize = 1;
          this._mode = n.call(t, this, e && e.words);
        },
        _doProcessBlock: function (e, t) {
          this._mode.processBlock(e, t);
        },
        _doFinalize: function () {
          var e = this.cfg.padding;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            e.pad(this._data, this.blockSize);
            var t = this._process(!0);
          } else t = this._process(!0);
          e.unpad(t);
          return t;
        },
        blockSize: 4,
      });
      var h = (t.CipherParams = n.extend({
          init: function (e) {
            this.mixIn(e);
          },
          toString: function (e) {
            return (e || this.formatter).stringify(this);
          },
        })),
        f =
          ((d = (p.format = {}).OpenSSL =
            {
              stringify: function (e) {
                var t = e.ciphertext;
                return (t = (
                  (e = e.salt)
                    ? r.create([1398893684, 1701076831]).concat(e).concat(t)
                    : t
                ).toString(a)).replace(/(.{64})/g, "$1\n");
              },
              parse: function (e) {
                var t = (e = a.parse(e)).words;
                if (1398893684 == t[0] && 1701076831 == t[1]) {
                  var n = r.create(t.slice(2, 4));
                  t.splice(0, 4);
                  e.sigBytes -= 16;
                }
                return h.create({ ciphertext: e, salt: n });
              },
            }),
          (t.SerializableCipher = n.extend({
            cfg: n.extend({ format: d }),
            encrypt: function (e, t, n, r) {
              r = this.cfg.extend(r);
              t = (i = e.createEncryptor(n, r)).finalize(t);
              var i = i.cfg;
              return h.create({
                ciphertext: t,
                key: n,
                iv: i.iv,
                algorithm: e,
                mode: i.mode,
                padding: i.padding,
                blockSize: e.blockSize,
                formatter: r.format,
              });
            },
            decrypt: function (e, t, n, r) {
              return (
                (r = this.cfg.extend(r)),
                (t = this._parse(t, r.format)),
                e.createDecryptor(n, r).finalize(t.ciphertext)
              );
            },
            _parse: function (e, t) {
              return "string" == typeof e ? t.parse(e) : e;
            },
          }))),
        p = ((p.kdf = {}).OpenSSL = {
          compute: function (e, t, n, i) {
            return (
              i || (i = r.random(8)),
              (e = s.create({ keySize: t + n }).compute(e, i)),
              (n = r.create(e.words.slice(t), 4 * n)),
              (e.sigBytes = 4 * t),
              h.create({ key: e, iv: n, salt: i })
            );
          },
        }),
        m = (t.PasswordBasedCipher = f.extend({
          cfg: f.cfg.extend({ kdf: p }),
          encrypt: function (e, t, n, r) {
            return (
              (n = (r = this.cfg.extend(r)).kdf.compute(
                n,
                e.keySize,
                e.ivSize
              )),
              (r.iv = n.iv),
              (e = f.encrypt.call(this, e, t, n.key, r)).mixIn(n),
              e
            );
          },
          decrypt: function (e, t, n, r) {
            return (
              (r = this.cfg.extend(r)),
              (t = this._parse(t, r.format)),
              (n = r.kdf.compute(n, e.keySize, e.ivSize, t.salt)),
              (r.iv = n.iv),
              f.decrypt.call(this, e, t, n.key, r)
            );
          },
        }));
    })();
  (function () {
    var e = o,
      t = e.lib.BlockCipher,
      n = e.algo,
      r = [],
      i = [],
      a = [],
      s = [],
      c = [],
      d = [],
      u = [],
      l = [],
      h = [],
      f = [];

    (function () {
      for (var e = [], t = 0; 256 > t; t++)
        e[t] = 128 > t ? t << 1 : (t << 1) ^ 283;
      var n = 0,
        o = 0;
      for (t = 0; 256 > t; t++) {
        var p =
          ((p = o ^ (o << 1) ^ (o << 2) ^ (o << 3) ^ (o << 4)) >>> 8) ^
          (255 & p) ^
          99;
        r[n] = p;
        i[p] = n;
        var m = e[n],
          y = e[m],
          g = e[y],
          v = (257 * e[p]) ^ (16843008 * p);
        a[n] = (v << 24) | (v >>> 8);
        s[n] = (v << 16) | (v >>> 16);
        c[n] = (v << 8) | (v >>> 24);
        d[n] = v;
        v = (16843009 * g) ^ (65537 * y) ^ (257 * m) ^ (16843008 * n);
        u[p] = (v << 24) | (v >>> 8);
        l[p] = (v << 16) | (v >>> 16);
        h[p] = (v << 8) | (v >>> 24);
        f[p] = v;
        n ? (n = m ^ e[e[e[g ^ m]]])((o ^= e[e[o]])) : (n = o = 1);
      }
    })();

    var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    n = n.AES = t.extend({
      _doReset: function () {
        for (
          var e = (n = this._key).words,
            t = n.sigBytes / 4,
            n = 4 * ((this._nRounds = t + 6) + 1),
            i = (this._keySchedule = []),
            o = 0;
          o < n;
          o++
        )
          if (o < t) {
            i[o] = e[o];
          } else {
            var a = i[o - 1];
            o % t
              ? 6 < t &&
                4 == o % t &&
                (a =
                  (r[a >>> 24] << 24) |
                  (r[(a >>> 16) & 255] << 16) |
                  (r[(a >>> 8) & 255] << 8) |
                  r[255 & a])
              : (a =
                  (r[(a = (a << 8) | (a >>> 24)) >>> 24] << 24) |
                  (r[(a >>> 16) & 255] << 16) |
                  (r[(a >>> 8) & 255] << 8) |
                  r[255 & a])((a ^= p[(o / t) | 0] << 24));
            i[o] = i[o - t] ^ a;
          }
        for (e = this._invKeySchedule = [], t = 0; t < n; t++) o = n - t;
        a = t % 4 ? i[o] : i[o - 4];
        e[t] =
          4 > t || 4 >= o
            ? a
            : u[r[a >>> 24]] ^
              l[r[(a >>> 16) & 255]] ^
              h[r[(a >>> 8) & 255]] ^
              f[r[255 & a]];
      },
      encryptBlock: function (e, t) {
        this._doCryptBlock(e, t, this._keySchedule, a, s, c, d, r);
      },
      decryptBlock: function (e, t) {
        var n = e[t + 1];
        e[t + 1] = e[t + 3];
        e[t + 3] = n;
        this._doCryptBlock(e, t, this._invKeySchedule, u, l, h, f, i);
        n = e[t + 1];
        e[t + 1] = e[t + 3];
        e[t + 3] = n;
      },
      _doCryptBlock: function (e, t, n, r, i, o, a, s) {
        for (
          var c = this._nRounds,
            d = e[t] ^ n[0],
            u = e[t + 1] ^ n[1],
            l = e[t + 2] ^ n[2],
            h = e[t + 3] ^ n[3],
            f = 4,
            p = 1;
          p < c;
          p++
        ) {
          var m =
              r[d >>> 24] ^
              i[(u >>> 16) & 255] ^
              o[(l >>> 8) & 255] ^
              a[255 & h] ^
              n[f++],
            y =
              r[u >>> 24] ^
              i[(l >>> 16) & 255] ^
              o[(h >>> 8) & 255] ^
              a[255 & d] ^
              n[f++],
            g =
              r[l >>> 24] ^
              i[(h >>> 16) & 255] ^
              o[(d >>> 8) & 255] ^
              a[255 & u] ^
              n[f++];
          h =
            r[h >>> 24] ^
            i[(d >>> 16) & 255] ^
            o[(u >>> 8) & 255] ^
            a[255 & l] ^
            n[f++];
          d = m;
          u = y;
          l = g;
        }
        m =
          ((s[d >>> 24] << 24) |
            (s[(u >>> 16) & 255] << 16) |
            (s[(l >>> 8) & 255] << 8) |
            s[255 & h]) ^
          n[f++];
        y =
          ((s[u >>> 24] << 24) |
            (s[(l >>> 16) & 255] << 16) |
            (s[(h >>> 8) & 255] << 8) |
            s[255 & d]) ^
          n[f++];
        g =
          ((s[l >>> 24] << 24) |
            (s[(h >>> 16) & 255] << 16) |
            (s[(d >>> 8) & 255] << 8) |
            s[255 & u]) ^
          n[f++];
        h =
          ((s[h >>> 24] << 24) |
            (s[(d >>> 16) & 255] << 16) |
            (s[(u >>> 8) & 255] << 8) |
            s[255 & l]) ^
          n[f++];
        e[t] = m;
        e[t + 1] = y;
        e[t + 2] = g;
        e[t + 3] = h;
      },
      keySize: 8,
    });
    e.AES = t._createHelper(n);
  })();

  o =
    o ||
    (function (e, t) {
      var n = {},
        r = (n.lib = {}),
        i = (r.Base = (function () {
          function e() {}
          return {
            extend: function (t) {
              e.prototype = this;
              var n = new e();
              return t && n.mixIn(t), (n.$super = this), n;
            },
            create: function () {
              var e = this.extend();
              return e.init.apply(e, arguments), e;
            },
            init: function () {},
            mixIn: function (e) {
              for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
              e.hasOwnProperty("toString") && (this.toString = e.toString);
            },
            clone: function () {
              return this.$super.extend(this);
            },
          };
        })()),
        o = (r.WordArray = i.extend({
          init: function (e, t) {
            e = this.words = e || [];
            this.sigBytes = null != t ? t : 4 * e.length;
          },
          toString: function (e) {
            return (e || s).stringify(this);
          },
          concat: function (e) {
            var t = this.words,
              n = e.words,
              r = this.sigBytes;
            if (((e = e.sigBytes), this.clamp(), r % 4))
              for (var i = 0; i < e; i++)
                t[(r + i) >>> 2] |=
                  ((n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                  (24 - ((r + i) % 4) * 8);
            else if (65535 < n.length)
              for (i = 0; i < e; i += 4) t[(r + i) >>> 2] = n[i >>> 2];
            else t.push.apply(t, n);
            return (this.sigBytes += e), this;
          },
          clamp: function () {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8);
            t.length = e.ceil(n / 4);
          },
          clone: function () {
            var e = i.clone.call(this);
            return (e.words = this.words.slice(0)), e;
          },
          random: function (t) {
            for (var n = [], r = 0; r < t; r += 4)
              n.push((4294967296 * e.random()) | 0);
            return o.create(n, t);
          },
        })),
        a = (n.enc = {}),
        s = (a.Hex = {
          stringify: function (e) {
            for (
              var t = e.words, n = ((e = e.sigBytes), []), r = 0;
              r < e;
              r++
            ) {
              var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
              n.push((i >>> 4).toString(16));
              n.push((15 & i).toString(16));
            }
            return n.join("");
          },
          parse: function (e) {
            for (var t = e.length, n = [], r = 0; r < t; r += 2)
              n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
            return o.create(n, t / 2);
          },
        }),
        c = (a.Latin1 = {
          stringify: function (e) {
            for (var t = e.words, n = ((e = e.sigBytes), []), r = 0; r < e; r++)
              n.push(
                String.fromCharCode((t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255)
              );
            return n.join("");
          },
          parse: function (e) {
            for (var t = e.length, n = [], r = 0; r < t; r++)
              n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
            return o.create(n, t);
          },
        }),
        d = (a.Utf8 = {
          stringify: function (e) {
            try {
              return decodeURIComponent(escape(c.stringify(e)));
            } catch (e) {
              throw Error("Malformed UTF-8 data");
            }
          },
          parse: function (e) {
            return c.parse(unescape(encodeURIComponent(e)));
          },
        }),
        u = (r.BufferedBlockAlgorithm = i.extend({
          reset: function () {
            this._data = o.create();
            this._nDataBytes = 0;
          },
          _append: function (e) {
            "string" == typeof e && (e = d.parse(e));
            this._data.concat(e);
            this._nDataBytes += e.sigBytes;
          },
          _process: function (t) {
            var n = this._data,
              r = n.words,
              i = n.sigBytes,
              a = this.blockSize,
              s = i / (4 * a);
            if (
              ((t =
                (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) *
                a),
              (i = e.min(4 * t, i)),
              t)
            ) {
              for (var c = 0; c < t; c += a) this._doProcessBlock(r, c);
              c = r.splice(0, t);
              n.sigBytes -= i;
            }
            return o.create(c, i);
          },
          clone: function () {
            var e = i.clone.call(this);
            return (e._data = this._data.clone()), e;
          },
          _minBufferSize: 0,
        }));
      r.Hasher = u.extend({
        init: function () {
          this.reset();
        },
        reset: function () {
          u.reset.call(this);
          this._doReset();
        },
        update: function (e) {
          return this._append(e), this._process(), this;
        },
        finalize: function (e) {
          return e && this._append(e), this._doFinalize(), this._hash;
        },
        clone: function () {
          var e = u.clone.call(this);
          return (e._hash = this._hash.clone()), e;
        },
        blockSize: 16,
        _createHelper: function (e) {
          return function (t, n) {
            return e.create(n).finalize(t);
          };
        },
        _createHmacHelper: function (e) {
          return function (t, n) {
            return l.HMAC.create(e, n).finalize(t);
          };
        },
      });
      var l = (n.algo = {});
      return n;
    })(Math);

  (function () {
    var e = o,
      t = (n = e.lib).WordArray,
      n = n.Hasher,
      r = [],
      i = (e.algo.SHA1 = n.extend({
        _doReset: function () {
          this._hash = t.create([
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]);
        },
        _doProcessBlock: function (e, t) {
          for (
            var n = this._hash.words,
              i = n[0],
              o = n[1],
              a = n[2],
              s = n[3],
              c = n[4],
              d = 0;
            80 > d;
            d++
          ) {
            if (16 > d) r[d] = 0 | e[t + d];
            else {
              var u = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16];
              r[d] = (u << 1) | (u >>> 31);
            }
            u = ((i << 5) | (i >>> 27)) + c + r[d];
            u =
              20 > d
                ? u + (1518500249 + ((o & a) | (~o & s)))
                : 40 > d
                ? u + (1859775393 + (o ^ a ^ s))
                : 60 > d
                ? u + (((o & a) | (o & s) | (a & s)) - 1894007588)
                : u + ((o ^ a ^ s) - 899497514);
            c = s;
            s = a;
            a = (o << 30) | (o >>> 2);
            o = i;
            i = u;
          }
          n[0] = (n[0] + i) | 0;
          n[1] = (n[1] + o) | 0;
          n[2] = (n[2] + a) | 0;
          n[3] = (n[3] + s) | 0;
          n[4] = (n[4] + c) | 0;
        },
        _doFinalize: function () {
          var e = this._data,
            t = e.words,
            n = 8 * this._nDataBytes,
            r = 8 * e.sigBytes;
          t[r >>> 5] |= 128 << (24 - (r % 32));
          t[15 + (((r + 64) >>> 9) << 4)] = n;
          e.sigBytes = 4 * t.length;
          this._process();
        },
      }));
    e.SHA1 = n._createHelper(i);
    e.HmacSHA1 = n._createHmacHelper(i);
  })();
  (function () {
    var e = o,
      t = e.enc.Utf8;
    e.algo.HMAC = e.lib.Base.extend({
      init: function (e, n) {
        e = this._hasher = e.create();
        "string" == typeof n && (n = t.parse(n));
        var r = e.blockSize,
          i = 4 * r;
        n.sigBytes > i && (n = e.finalize(n));
        for (
          var o = (this._oKey = n.clone()),
            a = (this._iKey = n.clone()),
            s = o.words,
            c = a.words,
            d = 0;
          d < r;
          d++
        )
          s[d] ^= 1549556828;
        c[d] ^= 909522486;
        o.sigBytes = a.sigBytes = i;
        this.reset();
      },
      reset: function () {
        var e = this._hasher;
        e.reset();
        e.update(this._iKey);
      },
      update: function (e) {
        return this._hasher.update(e), this;
      },
      finalize: function (e) {
        var t = this._hasher;
        return (
          (e = t.finalize(e)),
          t.reset(),
          t.finalize(this._oKey.clone().concat(e))
        );
      },
    });
  })();
  (function () {
    var e,
      t = o,
      n = (e = t.lib).Base,
      r = e.WordArray,
      i = (e = t.algo).HMAC,
      a = (e.PBKDF2 = n.extend({
        cfg: n.extend({ keySize: 4, hasher: e.SHA1, iterations: 1 }),
        init: function (e) {
          this.cfg = this.cfg.extend(e);
        },
        compute: function (e, t) {
          var n = this.cfg,
            o = i.create(n.hasher, e),
            a = r.create(),
            s = r.create([1]),
            c = a.words,
            d = s.words,
            u = n.keySize;
          for (n = n.iterations; c.length < u; ) {
            var l = o.update(t).finalize(s);
            o.reset();
            for (var h = l.words, f = h.length, p = l, m = 1; m < n; m++) {
              p = o.finalize(p);
              o.reset();
              for (var y = p.words, g = 0; g < f; g++) h[g] ^= y[g];
            }
            a.concat(l);
            d[0]++;
          }
          return (a.sigBytes = 4 * u), a;
        },
      }));
    t.PBKDF2 = function (e, t, n) {
      return a.create(n).compute(e, t);
    };
  })();
  var a = o.lib.WordArray.random(16).toString(o.enc.Hex),
    s = o.lib.WordArray.random(16).toString(o.enc.Hex);
  let c = {
    atomTokenId: sanitizeHTML(e.atomTokenId),
    custDetails: {
      custEmail: sanitizeHTML(e.custEmail),
      custMobile: sanitizeHTML(e.custMobile),
    },
  };
  var d = new t(128, 1e3).encrypt(s, a, n, JSON.stringify(c)),
    u = new XMLHttpRequest();
  u.timeout = 3e4;
  u.onreadystatechange = function () {
    if (4 == this.readyState)
      if (200 == this.status) {
        var r = u.responseText,
          i = parse_query_string(r),
          o = new t(128, 1e3);
        if (i.encData) {
          var c = o.decrypt(s, a, n, i.encData);
          let t = JSON.parse(c);
          if ("OTS0000" === t.responseDetails.txnStatusCode) {
            let t = document.getElementById("atom_jiffy_pay");
            var d = document.createElement("form"),
              l = document.createElement("input"),
              h = document.createElement("input"),
              f = document.createElement("input"),
              p = document.createElement("input"),
              m = document.createElement("input"),
              y = document.createElement("input"),
              g = document.createElement("input"),
              v = document.createElement("input"),
              _ = document.createElement("input"),
              B = document.createElement("input");
            d.method = "POST";
            d.action =
              "https://pgtest.atomtech.in/AtomInstaPay/checkout-frame.jsp";
            l.value = s;
            l.name = "info1";
            l.type = "hidden";
            d.appendChild(l);
            h.value = a;
            h.name = "info2";
            h.type = "hidden";
            d.appendChild(h);
            f.value = sanitizeHTML(e.custEmail);
            f.name = "customer_email";
            f.type = "hidden";
            d.appendChild(f);
            p.value = sanitizeHTML(e.custMobile);
            p.name = "customer_phone";
            p.type = "hidden";
            d.appendChild(p);
            m.value = sanitizeHTML(e.returnUrl);
            m.name = "ru";
            m.type = "hidden";
            d.appendChild(m);
            y.value = sanitizeHTML(i.encData);
            y.name = "encData";
            y.type = "hidden";
            d.appendChild(y);
            g.value = sanitizeHTML(i.merchId);
            g.name = "merchId";
            g.type = "hidden";
            d.appendChild(g);
            v.value = sanitizeHTML(e.bgColor);
            v.name = "bgColor";
            v.type = "hidden";
            d.appendChild(v);
            _.value = sanitizeHTML(e.merchantLogo);
            _.name = "merchantLogo";
            _.type = "hidden";
            d.appendChild(_);
            if ("mobile_webView" === e.userAgent) {
              B.value = sanitizeHTML("mobile_webView");
              B.name = "user_identity";
              B.type = "hidden";
              d.appendChild(B);
              document.body.appendChild(d);
            } else {
              d.target = "atom_insta_pay";
            }

            document.body.appendChild(d);
            d.submit();
            t.style.display = "block";

            receiveMessage();
          } else hideLoader();
          handleCustomError(
            e,
            "error occured in mConfig API <br/> " +
              t.responseDetails.txnDescription
          );
        } else hideLoader();
        handleCustomError(e, r);
      } else hideLoader();
    handleCustomError(
      e,
      "Technical problem has been occured with the status code " +
        this.status +
        " <br> Please try again."
    );
  };
  u.addEventListener("timeout", function (t) {
    handleCustomError(e, "Connection timeout.. Please try again.");
  });
  var l =
    "https://caller.atomtech.in/ots/aipay/mconfig?encData=" +
    d +
    "&merchId=" +
    e.merchId +
    "&info1=" +
    s +
    "&info2=" +
    a;
  u.open("POST", l);
  u.send();
}
function submitMobileUserBack(e, t) {
  var n = document.getElementById("aipayErrorModal"),
    r = document.getElementsByClassName("close")[0];
  document.getElementById("custom-aipay-error-msg").innerHTML = t;
  var i = e.returnUrl;
  r.onclick = function () {
    createMobileSDKReturn(i);
  };
  window.onclick = function (e) {
    e.target == n && createMobileSDKReturn(i);
  };
}

export var AtomPaynetz = function (e) {
  console.log(" AtomPaynetz - create Mobile SDK", e);
  console.log(
    " AtomPaynetz - document.getElementById",
    document.getElementById("atom_jiffy_pay")
  );
  document.body.appendChild(div);
  document.getElementById("custom-aipay-error-msg").innerHTML = "";
  validateFields(e) &&
    (showLoader(),
    document.getElementById("atom_jiffy_pay") ||
      (this.iframe = document.createElement("iframe")));
  this.iframe.style.display = "none";
  this.iframe.style.width = "100vw";
  this.iframe.style.height = "100vh";
  this.iframe.style.zIndex = 1000;
  this.iframe.style.position = "fixed";
  this.iframe.style.top = "0";
  this.iframe.style.left = "0";
  this.iframe.id = "atom_jiffy_pay";
  this.iframe.name = "atom_insta_pay";
  this.iframe.setAttribute("frameBorder", "0");
  this.iframe.src = "about:blank";
  document.body.appendChild(this.iframe);
  authUserFunc(e);
};

function parse_query_string(e) {
  for (var t = e.split("&"), n = {}, r = 0; r < t.length; r++) {
    var i = t[r].split("="),
      o = decodeURIComponent(i[0]),
      a = decodeURIComponent(i[1]);
    if (void 0 === n[o]) n[o] = decodeURIComponent(a);
    else if ("string" == typeof n[o]) {
      var s = [n[o], decodeURIComponent(a)];
      n[o] = s;
    } else n[o].push(decodeURIComponent(a));
  }
  return n;
}
function receiveMessage() {
  window.addEventListener(
    "message",
    function (e) {
      if ("cancelTransaction" === e.data || "sessionTimeout" === e.data) {
        hideLoader();
        let e = document.getElementById("atom_jiffy_pay");
        e && e.remove();
      } else if ("badRequest" == e.data) {
        alert("Login Id and Enc Data Required");
        let e = document.getElementById("atom_jiffy_pay");
        e && e.remove();
      } else "hide" == e.data && hideLoader();
    },
    !1
  );
}
var sanitizeHTML = function (e) {
  var t = document.createElement("div");
  return (t.textContent = e), t.innerHTML;
};
function validateFields(e) {
  return e.atomTokenId
    ? e.merchId
      ? e.custMobile
        ? e.custEmail
          ? !!e.returnUrl ||
            (handleCustomError(
              e,
              "The return URL was not found in this transaction. Please try again."
            ),
            !1)
          : (handleCustomError(e, "Please enter a valid email address."), !1)
        : (handleCustomError(e, "Please enter a valid mobile number."), !1)
      : (handleCustomError(
          e,
          "The merchant ID was not found in this transaction. Please try again."
        ),
        !1)
    : (handleCustomError(
        e,
        "Atom Token ID was not found in this transaction. Please try again."
      ),
      !1);
}
function hideLoader() {
  let e = document.getElementById("iFrameAtomLoader");
  e && e.remove();
}
function createMobileSDKReturn(e) {
  var t = document.createElement("form"),
    n = document.createElement("input"),
    r = document.createElement("input");
  t.method = "POST";
  t.action = e;
  n.value = "cancelTransaction";
  n.type = "hidden";
  n.name = "merchIdres";
  t.appendChild(n);
  r.value = "cancelTransaction";
  r.name = "encDatares";
  r.type = "hidden";
  t.appendChild(r);
  document.body.appendChild(t);
  t.submit();
}
