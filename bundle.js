/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factory/webfactory.ts":
/*!***********************************!*\
  !*** ./src/factory/webfactory.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebFactory: () => (/* binding */ WebFactory)\n/* harmony export */ });\n/* harmony import */ var _views_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/store */ \"./src/views/store.ts\");\n/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/session */ \"./src/models/session.ts\");\n/* harmony import */ var _libs_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/socket */ \"./src/libs/socket.ts\");\n/* harmony import */ var _views_hondetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/hondetail */ \"./src/views/hondetail.ts\");\n/* harmony import */ var _views_hons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/hons */ \"./src/views/hons.ts\");\n/* harmony import */ var _views_hon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/hon */ \"./src/views/hon.ts\");\n/* harmony import */ var _views_newhon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/newhon */ \"./src/views/newhon.ts\");\n/* harmony import */ var _views_signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/signup */ \"./src/views/signup.ts\");\n/* harmony import */ var _views_signin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/signin */ \"./src/views/signin.ts\");\n\n\n\n\n\n\n\n\n\nclass WebFactory {\n  constructor() {\n    this.blockStore = new _views_store__WEBPACK_IMPORTED_MODULE_0__.BlockStore();\n    this.socket = new _libs_socket__WEBPACK_IMPORTED_MODULE_2__.Socket();\n    this.session = new _models_session__WEBPACK_IMPORTED_MODULE_1__.Session();\n    this.signIn = new _views_signin__WEBPACK_IMPORTED_MODULE_8__.Signin(this.blockStore, this.session);\n    this.signUp = new _views_signup__WEBPACK_IMPORTED_MODULE_7__.Signup(this.blockStore, this.session);\n    this.hon = new _views_hon__WEBPACK_IMPORTED_MODULE_5__.Hon(this.blockStore, this.session);\n    this.hons = new _views_hons__WEBPACK_IMPORTED_MODULE_4__.Hons(this.blockStore, this.session);\n    this.hondetail = new _views_hondetail__WEBPACK_IMPORTED_MODULE_3__.HonDetail(this.blockStore, this.session);\n    this.newHon = new _views_newhon__WEBPACK_IMPORTED_MODULE_6__.NewHon(this.blockStore, this.session);\n  }\n  Build() {\n    const funcMap = {\n      \"signin\": new _views_signin__WEBPACK_IMPORTED_MODULE_8__.Signin(this.blockStore, this.session),\n      \"signup\": new _views_signup__WEBPACK_IMPORTED_MODULE_7__.Signup(this.blockStore, this.session),\n      \"hon\": new _views_hon__WEBPACK_IMPORTED_MODULE_5__.Hon(this.blockStore, this.session),\n      \"hons\": this.hons,\n      \"main\": this.hons,\n      \"hondetail\": new _views_hondetail__WEBPACK_IMPORTED_MODULE_3__.HonDetail(this.blockStore, this.session),\n      \"newhon\": new _views_newhon__WEBPACK_IMPORTED_MODULE_6__.NewHon(this.blockStore, this.session)\n    };\n    return funcMap;\n  }\n  GetBlockStore() {\n    return this.blockStore;\n  }\n  GetSession() {\n    return this.session;\n  }\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/factory/webfactory.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factory_webfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/webfactory */ \"./src/factory/webfactory.ts\");\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/base */ \"./src/views/base.ts\");\n/* harmony import */ var _models_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/config */ \"./src/models/config.ts\");\n\n\n\nconst factory = new _factory_webfactory__WEBPACK_IMPORTED_MODULE_0__.WebFactory();\nconst blockStore = factory.GetBlockStore();\nconst session = factory.GetSession();\nconst funcMap = factory.Build();\nconst base = new _views_base__WEBPACK_IMPORTED_MODULE_1__.Base(\"./\", funcMap, blockStore, session);\nwindow.ClickLoadPage = (key, fromEvent, ...args) => {\n  base.ClickLoadPage(key, fromEvent, ...args);\n};\nwindow.onpopstate = event => {\n  //window.ClickLoadPage(event.state['key'], event.state['fromEvent'], event.state['args'])\n  base.includeContentHTML(window.MasterAddr);\n};\nconst parseResponse = nodes => {\n  return base.parseResponse(nodes);\n};\nconst loadNodeHtml = node => {\n  return base.loadNodesHtml(node);\n};\nbase.InitIncludeHTML();\naddEventListener(\"load\", () => {\n  fetch(_models_config__WEBPACK_IMPORTED_MODULE_2__.RootAddress + \"/nodes\").then(response => response.json()).then(parseResponse).then(loadNodeHtml).then(url => base.includeContentHTML(url));\n});\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/index.ts?");

/***/ }),

/***/ "./src/libs/sha256.ts":
/*!****************************!*\
  !*** ./src/libs/sha256.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SHA256: () => (/* binding */ SHA256)\n/* harmony export */ });\nfunction SHA256(s) {\n  var chrsz = 8;\n  var hexcase = 0;\n  function safe_add(x, y) {\n    var lsw = (x & 0xFFFF) + (y & 0xFFFF);\n    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n    return msw << 16 | lsw & 0xFFFF;\n  }\n  function S(X, n) {\n    return X >>> n | X << 32 - n;\n  }\n  function R(X, n) {\n    return X >>> n;\n  }\n  function Ch(x, y, z) {\n    return x & y ^ ~x & z;\n  }\n  function Maj(x, y, z) {\n    return x & y ^ x & z ^ y & z;\n  }\n  function Sigma0256(x) {\n    return S(x, 2) ^ S(x, 13) ^ S(x, 22);\n  }\n  function Sigma1256(x) {\n    return S(x, 6) ^ S(x, 11) ^ S(x, 25);\n  }\n  function Gamma0256(x) {\n    return S(x, 7) ^ S(x, 18) ^ R(x, 3);\n  }\n  function Gamma1256(x) {\n    return S(x, 17) ^ S(x, 19) ^ R(x, 10);\n  }\n  function core_sha256(m, l) {\n    var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);\n    var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);\n    var W = new Array(64);\n    var a, b, c, d, e, f, g, h, i, j;\n    var T1, T2;\n    m[l >> 5] |= 0x80 << 24 - l % 32;\n    m[(l + 64 >> 9 << 4) + 15] = l;\n    for (var i = 0; i < m.length; i += 16) {\n      a = HASH[0];\n      b = HASH[1];\n      c = HASH[2];\n      d = HASH[3];\n      e = HASH[4];\n      f = HASH[5];\n      g = HASH[6];\n      h = HASH[7];\n      for (var j = 0; j < 64; j++) {\n        if (j < 16) W[j] = m[j + i];else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);\n        T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);\n        T2 = safe_add(Sigma0256(a), Maj(a, b, c));\n        h = g;\n        g = f;\n        f = e;\n        e = safe_add(d, T1);\n        d = c;\n        c = b;\n        b = a;\n        a = safe_add(T1, T2);\n      }\n      HASH[0] = safe_add(a, HASH[0]);\n      HASH[1] = safe_add(b, HASH[1]);\n      HASH[2] = safe_add(c, HASH[2]);\n      HASH[3] = safe_add(d, HASH[3]);\n      HASH[4] = safe_add(e, HASH[4]);\n      HASH[5] = safe_add(f, HASH[5]);\n      HASH[6] = safe_add(g, HASH[6]);\n      HASH[7] = safe_add(h, HASH[7]);\n    }\n    return HASH;\n  }\n  function str2binb(str) {\n    var bin = Array();\n    var mask = (1 << chrsz) - 1;\n    for (var i = 0; i < str.length * chrsz; i += chrsz) {\n      bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << 24 - i % 32;\n    }\n    return bin;\n  }\n  function Utf8Encode(string) {\n    string = string.replace(/\\r\\n/g, \"\\n\");\n    var utftext = \"\";\n    for (var n = 0; n < string.length; n++) {\n      var c = string.charCodeAt(n);\n      if (c < 128) {\n        utftext += String.fromCharCode(c);\n      } else if (c > 127 && c < 2048) {\n        utftext += String.fromCharCode(c >> 6 | 192);\n        utftext += String.fromCharCode(c & 63 | 128);\n      } else {\n        utftext += String.fromCharCode(c >> 12 | 224);\n        utftext += String.fromCharCode(c >> 6 & 63 | 128);\n        utftext += String.fromCharCode(c & 63 | 128);\n      }\n    }\n    return utftext;\n  }\n  function binb2hex(binarray) {\n    var hex_tab = hexcase ? \"0123456789ABCDEF\" : \"0123456789abcdef\";\n    var str = \"\";\n    for (var i = 0; i < binarray.length * 4; i++) {\n      str += hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 & 0xF);\n    }\n    return str;\n  }\n  s = Utf8Encode(s);\n  return binb2hex(core_sha256(str2binb(s), s.length * chrsz));\n}\n\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/libs/sha256.ts?");

/***/ }),

/***/ "./src/libs/socket.ts":
/*!****************************!*\
  !*** ./src/libs/socket.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Socket: () => (/* binding */ Socket)\n/* harmony export */ });\nclass Socket {\n  constructor() {\n    this.m_opend = false;\n    this.m_handler = {};\n  }\n  OpenChannel(url) {\n    const ws = new WebSocket(url);\n    console.log(ws);\n    ws.onopen = () => {\n      this.m_opend = true;\n      ws.onmessage = evt => {\n        const msg = JSON.parse(evt.data);\n        switch (msg.types) {\n          case \"gwserr\":\n          case \"gwsout\":\n            break;\n          default:\n            console.log(evt.data);\n            break;\n        }\n        this.m_handler[msg.types](msg.params);\n      };\n    };\n    ws.onclose = () => {\n      this.m_opend = false;\n      this.m_handler[\"close\"]();\n    };\n    this.m_ws = ws;\n  }\n  IsOpen() {\n    return this.m_opend;\n  }\n  RegisterMsgHandler(eventName, callback) {\n    this.m_handler[eventName] = params => {\n      callback(params);\n    };\n  }\n  SendMsg(eventName, ...params) {\n    var _a;\n    const msg = {\n      types: eventName,\n      params: [...params]\n    };\n    (_a = this.m_ws) === null || _a === void 0 ? void 0 : _a.send(JSON.stringify(msg));\n  }\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/libs/socket.ts?");

/***/ }),

/***/ "./src/models/config.ts":
/*!******************************!*\
  !*** ./src/models/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RootAddress: () => (/* binding */ RootAddress)\n/* harmony export */ });\nconst RootAddress = \"http://lb.ghostnetroot.com:58083\";\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/models/config.ts?");

/***/ }),

/***/ "./src/models/honview.ts":
/*!*******************************!*\
  !*** ./src/models/honview.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DrawHtmlHonItem: () => (/* binding */ DrawHtmlHonItem)\n/* harmony export */ });\n/* harmony import */ var _views_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/utils */ \"./src/views/utils.ts\");\n\nconst DrawHtmlHonItem = (uniqId, nickname, email, content, time) => {\n  return `\n<div class=\"container p-2 border-top\">\n    <div class=\"row\">\n        <div class=\"col-auto text-center\">\n                    <span id=\"${uniqId}\" class=\"m-1\"></span>\n        </div>\n        <div class=\"col\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <a href=\"javascript:void(0)\" onclick=\"ClickLoadPage('hondetail', false, '&email=${email}')\">\n                    <strong class=\"me-auto\">${nickname}</strong>\n                    </a>\n                    <small>@${email} · ${(0,_views_utils__WEBPACK_IMPORTED_MODULE_0__.elapsedTime)(Number(time))}</small>\n                </div>\n                <div class=\"row\">\n                    <pre style=\"white-space:pre-wrap;\">${content}</pre>\n                </div>\n        </div>\n    </div>\n</div>\n        `;\n};\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/models/honview.ts?");

/***/ }),

/***/ "./src/models/session.ts":
/*!*******************************!*\
  !*** ./src/models/session.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Session: () => (/* binding */ Session)\n/* harmony export */ });\n/* harmony import */ var _tx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tx */ \"./src/models/tx.ts\");\n\nconst emptyUser = {\n  Email: \"\",\n  Nickname: \"\",\n  Password: \"\"\n};\nconst jsSessionKey = \"HonUser\";\nclass Session {\n  constructor() {\n    this.m_user = {\n      Email: \"\",\n      Nickname: \"\",\n      Password: \"\"\n    };\n    this.m_signinFlag = false;\n  }\n  GetHonUser() {\n    return this.m_user;\n  }\n  RequestSignIn(email, password, callback) {\n    const addr = window.MasterAddr + \"/glambda?txid=\" + encodeURIComponent(_tx__WEBPACK_IMPORTED_MODULE_0__.SigninTxId);\n    const formData = new FormData();\n    formData.append(\"key\", email);\n    formData.append(\"email\", email);\n    formData.append(\"password\", password);\n    console.log(JSON.stringify({\n      key: email,\n      Email: email,\n      password: password\n    }));\n    fetch(addr, {\n      method: \"POST\",\n      cache: \"no-cache\",\n      headers: {},\n      body: formData\n    }).then(response => response.json()).then(result => callback(result));\n  }\n  drawHtmlLoginUi() {\n    if (this.m_signinFlag) {\n      const seInfo = document.getElementById(\"sessioninfo\");\n      seInfo.innerHTML = `\n                <li class=\"nav-item \">\n                <a href=\"javascript:void(0)\" onclick=\"ClickLoadPage('hondetail', true, '&email=${this.m_user.Email}')\"> ${this.m_user.Nickname} &nbsp; </a>  \n                </li>\n                <li class=\"nav-item \">\n                <a href=\"javascript:void(0)\" id=\"logout\"> Logout </a> \n                </li>\n            `;\n      const logout = document.getElementById(\"logout\");\n      logout.onclick = () => {\n        this.SignOut();\n        // window.ClickLoadPage(\"hons\", true)\n        location.reload();\n      };\n    }\n  }\n  DrawHtmlSessionInfo() {\n    const str = sessionStorage.getItem(jsSessionKey);\n    if (str != null && this.m_signinFlag == false) {\n      const user = JSON.parse(str);\n      this.RequestSignIn(user.Email, user.Password, ret => {\n        if (\"email\" in ret) {\n          this.SignIn({\n            Email: ret.email,\n            Nickname: ret.id,\n            Password: ret.password\n          });\n          this.drawHtmlLoginUi();\n        }\n      });\n      return;\n    }\n    this.drawHtmlLoginUi();\n  }\n  SignIn(user) {\n    this.m_user = user;\n    this.m_signinFlag = true;\n    sessionStorage.setItem(jsSessionKey, JSON.stringify(user));\n  }\n  SignOut() {\n    this.m_user = emptyUser;\n    this.m_signinFlag = false;\n    sessionStorage.removeItem(jsSessionKey);\n  }\n  CheckLogin() {\n    return this.m_signinFlag;\n  }\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/models/session.ts?");

/***/ }),

/***/ "./src/models/tx.ts":
/*!**************************!*\
  !*** ./src/models/tx.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonDetailTxId: () => (/* binding */ HonDetailTxId),\n/* harmony export */   HonTxId: () => (/* binding */ HonTxId),\n/* harmony export */   HonsTxId: () => (/* binding */ HonsTxId),\n/* harmony export */   MyHonsTxId: () => (/* binding */ MyHonsTxId),\n/* harmony export */   NewHonTxId: () => (/* binding */ NewHonTxId),\n/* harmony export */   NewProfileTxId: () => (/* binding */ NewProfileTxId),\n/* harmony export */   SigninTxId: () => (/* binding */ SigninTxId),\n/* harmony export */   SignupTxId: () => (/* binding */ SignupTxId),\n/* harmony export */   UploadTxId: () => (/* binding */ UploadTxId)\n/* harmony export */ });\nconst SigninTxId = \"KCBoRyyBdDdf0OxR4NUsbYrZx9L5v0Ug5/2aC3usn/Q=\";\nconst SignupTxId = \"VE8q0YqdDkFzgJg4c7pihsVIN14qzHrwPXKWcgKTNKc=\";\nconst HonsTxId = \"GInp96yk5yW/RSY8c0dVH1+uaA/e8YlL4/WJXpTFWBQ=\";\nconst HonTxId = \"bzMGsbUxMD5yg5V3Z7FFLTUm/jHnAgOkNMA7kje/jQo=\";\nconst HonDetailTxId = HonTxId;\nconst NewHonTxId = \"m5SJO4K5RcGh/ZmkIXIqQaEtbknOp8atvRV6XcVepRA=\";\nconst UploadTxId = \"\";\nconst NewProfileTxId = \"4fhM/3+DLdGX6n116OjsNpzpAAe5mcg1U+4S/EZZJxU=\";\nconst MyHonsTxId = \"nPyKGx9M0eetb8pDFFF/q9ebTl3bLG7hloYhEb2gH7U=\";\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/models/tx.ts?");

/***/ }),

/***/ "./src/views/base.ts":
/*!***************************!*\
  !*** ./src/views/base.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Base: () => (/* binding */ Base)\n/* harmony export */ });\nclass Base {\n  constructor(basePath, funcMap, blockStore, session) {\n    this.m_basePath = basePath;\n    this.urlToFileMap = {\n      \"signin\": basePath + \"layout/signin.html\",\n      \"signup\": basePath + \"layout/signup.html\",\n      \"main\": basePath + \"layout/hons.html\",\n      \"hons\": basePath + \"layout/hons.html\",\n      \"hon\": basePath + \"layout/hon.html\",\n      \"hondetail\": basePath + \"layout/hondetail.html\",\n      \"newhon\": basePath + \"layout/newhon.html\",\n      \"uploadhon\": basePath + \"layout/uploadhon.html\",\n      \"profile\": basePath + \"layout/profile.html\"\n    };\n    this.beforPage = \"\";\n    this.funcMap = funcMap;\n    this.m_blockStore = blockStore;\n    this.m_session = session;\n  }\n  getPageIdParam() {\n    const urlParams = new URLSearchParams(window.location.search);\n    const pageid = urlParams.get(\"pageid\");\n    const key = pageid == null ? \"main\" : pageid;\n    if (this.beforPage == \"\") this.beforPage = key;\n    return key;\n  }\n  ClickLoadPage(key, fromEvent, ...args) {\n    //if (getPageIdParam() == key) return;\n    const url = this.urlToFileMap[key];\n    const state = {\n      'url': window.location.href,\n      'key': key,\n      'fromEvent': fromEvent,\n      'args': args\n    };\n    console.log(`page change : ${this.beforPage} ==> ${key}`);\n    const backUpBeforPage = this.beforPage;\n    this.beforPage = key;\n    history.pushState(state, \"login\", \"./?pageid=\" + key + args);\n    fetch(url).then(response => {\n      return response.text();\n    }).then(data => {\n      document.querySelector(\"contents\").innerHTML = data;\n    }).then(() => {\n      const beforePageObj = this.funcMap[backUpBeforPage];\n      if (beforePageObj != undefined) {\n        beforePageObj.Release();\n      }\n      const pageObj = this.funcMap[key];\n      if (pageObj != undefined) {\n        pageObj.Run(window.MasterAddr);\n      }\n    });\n  }\n  parseResponse(nodes) {\n    let randIdx = Math.floor(Math.random() * nodes.length);\n    this.m_blockStore.AddMasters(nodes);\n    window.NodeCount = nodes.length;\n    console.log(nodes);\n    return nodes[randIdx];\n  }\n  loadNodesHtml(node) {\n    window.MasterNode = node;\n    window.MasterAddr = `http://${node.User.ip.Ip}:${node.User.ip.Port}`;\n    this.m_blockStore.MasterAddr = window.MasterAddr;\n    return window.MasterAddr;\n  }\n  includeHTML(id, filename) {\n    window.addEventListener('load', () => fetch(filename).then(response => {\n      return response.text();\n    }).then(data => {\n      document.querySelector(id).innerHTML = data;\n    }));\n  }\n  includeContentHTML(master) {\n    const key = this.getPageIdParam();\n    const filename = this.urlToFileMap[key];\n    const backUpBeforPage = this.beforPage;\n    this.beforPage = key;\n    fetch(filename).then(response => {\n      return response.text();\n    }).then(data => {\n      document.querySelector(\"contents\").innerHTML = data;\n    }).then(() => {\n      const beforePageObj = this.funcMap[backUpBeforPage];\n      if (beforePageObj != undefined) {\n        beforePageObj.Release();\n      }\n      const pageObj = this.funcMap[key];\n      if (pageObj != undefined) {\n        pageObj.Run(master);\n      }\n    });\n  }\n  InitIncludeHTML() {\n    this.includeHTML(\"header\", \"navbar.html\");\n    this.includeHTML(\"footer\", \"foot.html\");\n  }\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/views/base.ts?");

/***/ }),

/***/ "./src/views/hon.ts":
/*!**************************!*\
  !*** ./src/views/hon.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hon: () => (/* binding */ Hon)\n/* harmony export */ });\nclass Hon {\n  constructor(blockStore, session) {\n    this.blockStore = blockStore;\n    this.session = session;\n    this.m_session = session;\n  }\n  Run(masterAddr) {\n    return true;\n  }\n  Release() {}\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/views/hon.ts?");

/***/ }),

/***/ "./src/views/hondetail.ts":
/*!********************************!*\
  !*** ./src/views/hondetail.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonDetail: () => (/* binding */ HonDetail)\n/* harmony export */ });\n/* harmony import */ var _models_tx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/tx */ \"./src/models/tx.ts\");\n/* harmony import */ var _models_honview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/honview */ \"./src/models/honview.ts\");\n\n\nclass HonDetail {\n  constructor(blockStore, session) {\n    this.blockStore = blockStore;\n    this.session = session;\n    this.m_masterAddr = \"\";\n    this.m_session = session;\n  }\n  drawHtml(ret) {\n    const honUser = {\n      Email: ret.email,\n      Nickname: ret.id,\n      Password: \"\"\n    };\n    const nicknameTag = document.getElementById('nickname');\n    if (nicknameTag == null) return;\n    nicknameTag.innerHTML = honUser.Nickname;\n    const emailTag = document.getElementById('email');\n    if (emailTag == null) return;\n    emailTag.innerHTML = honUser.Email;\n    const addrProfile = window.MasterAddr + \"/glambda?txid=\" + encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_0__.HonTxId) + \"&table=profile&key=\";\n    fetch(addrProfile + ret.email).then(response => response.json()).then(result => {\n      if (\"file\" in result) {\n        fetch(\"data:image/jpg;base64,\" + result.file).then(res => res.blob()).then(img => {\n          const imageUrl = URL.createObjectURL(img);\n          const imageElement = new Image();\n          imageElement.src = imageUrl;\n          imageElement.className = 'twPc-avatarImg';\n          const container = document.getElementById(\"bg-profile\");\n          if (container == null) return;\n          container.innerHTML = \"\";\n          container.appendChild(imageElement);\n        });\n      }\n    });\n  }\n  requestUserInfo(email) {\n    const masterAddr = this.m_masterAddr;\n    const addr = masterAddr + \"/glambda?txid=\" + encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_0__.HonDetailTxId);\n    fetch(addr + \"&table=member&key=\" + email).then(response => response.json()).then(result => this.drawHtml(result)).catch(() => {\n      console.log(\"Server에 문제가 생긴듯 합니다;;\");\n    });\n  }\n  getParam() {\n    var _a;\n    const urlParams = new URLSearchParams(window.location.search);\n    const email = encodeURIComponent((_a = urlParams.get(\"email\")) !== null && _a !== void 0 ? _a : \"\");\n    if (email == null) return null;\n    return email;\n  }\n  drawHtmlHon(ret) {\n    const uniqId = ret.id + ret.time.toString();\n    const feeds = document.getElementById(\"feeds\");\n    if (feeds == null) return;\n    feeds.innerHTML += (0,_models_honview__WEBPACK_IMPORTED_MODULE_1__.DrawHtmlHonItem)(uniqId, ret.id, ret.email, ret.content, ret.time);\n    const addrProfile = window.MasterAddr + \"/glambda?txid=\" + encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_0__.HonTxId) + \"&table=profile&key=\";\n    fetch(addrProfile + ret.email).then(response => response.json()).then(result => {\n      if (\"file\" in result) {\n        fetch(\"data:image/jpg;base64,\" + result.file).then(res => res.blob()).then(img => {\n          const imageUrl = URL.createObjectURL(img);\n          const imageElement = new Image();\n          imageElement.src = imageUrl;\n          imageElement.className = 'profile-sm';\n          const container = document.getElementById(uniqId);\n          container.appendChild(imageElement);\n        });\n      }\n    });\n  }\n  honsResult(ret) {\n    const keys = ret.result;\n    if (keys.length == 0) return [];\n    return keys;\n  }\n  RequestHon(keys, callback) {\n    const addr = this.m_masterAddr + \"/glambda?txid=\" + encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_0__.HonTxId) + \"&table=feeds&key=\";\n    keys.forEach(key => {\n      fetch(addr + key).then(response => response.json()).then(result => callback(result));\n    });\n  }\n  RequestHons(email) {\n    this.m_masterAddr = window.MasterAddr;\n    const masterAddr = this.m_masterAddr;\n    const addr = `\n        ${masterAddr}/glambda?txid=${encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_0__.MyHonsTxId)}&table=feedlink&key=${email}`;\n    fetch(addr).then(response => response.json()).then(result => this.honsResult(result)).then(feedlist => this.RequestHon(feedlist, this.drawHtmlHon));\n  }\n  Run(masterAddr) {\n    this.m_masterAddr = masterAddr;\n    const email = this.getParam();\n    if (email == null) return false;\n    this.requestUserInfo(email);\n    this.RequestHons(email);\n    return true;\n  }\n  Release() {}\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/views/hondetail.ts?");

/***/ }),

/***/ "./src/views/hons.ts":
/*!***************************!*\
  !*** ./src/views/hons.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hons: () => (/* binding */ Hons)\n/* harmony export */ });\n/* harmony import */ var _models_tx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/tx */ \"./src/models/tx.ts\");\n/* harmony import */ var _models_honview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/honview */ \"./src/models/honview.ts\");\n\n\nclass Hons {\n  constructor(blockStore, session) {\n    this.blockStore = blockStore;\n    this.session = session;\n    this.m_masterAddr = \"\";\n    this.m_session = session;\n    this.m_blockStore = blockStore;\n  }\n  warningMsg(msg) {\n    console.log(msg);\n    const info = document.getElementById(\"information\");\n    if (info == null) return;\n    info.innerHTML = msg;\n  }\n  honsResult(ret) {\n    if (\"json\" in ret) {\n      const keys = JSON.parse(ret.json);\n      return keys;\n    } else {\n      this.warningMsg(\"Loading 실패\");\n    }\n    return [];\n  }\n  drawHtmlConnectMaster() {\n    const bodyTag = document.getElementById('connect');\n    if (bodyTag == null) return;\n    console.log(window.MasterNode);\n    bodyTag.innerHTML = `<b>Connected Master</b> - \n        ${window.MasterNode.User.Nickname}`;\n  }\n  drawHtmlHon(ret) {\n    const uniqId = ret.id + ret.time.toString();\n    const feeds = document.getElementById(\"feeds\");\n    if (feeds == null) return;\n    feeds.innerHTML += (0,_models_honview__WEBPACK_IMPORTED_MODULE_1__.DrawHtmlHonItem)(uniqId, ret.id, ret.email, ret.content, ret.time);\n    const addrProfile = window.MasterAddr + \"/glambda?txid=\" + encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_0__.HonTxId) + \"&table=profile&key=\";\n    fetch(addrProfile + ret.email).then(response => response.json()).then(result => {\n      if (\"file\" in result) {\n        fetch(\"data:image/jpg;base64,\" + result.file).then(res => res.blob()).then(img => {\n          const imageUrl = URL.createObjectURL(img);\n          const imageElement = new Image();\n          imageElement.src = imageUrl;\n          imageElement.className = 'profile-sm';\n          const container = document.getElementById(uniqId);\n          container.appendChild(imageElement);\n        });\n      }\n    });\n  }\n  RequestHon(keys, callback) {\n    const addr = this.m_masterAddr + \"/glambda?txid=\" + encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_0__.HonTxId) + \"&table=feeds&key=\";\n    keys.forEach(key => {\n      fetch(addr + atob(key)).then(response => response.json()).then(result => callback(result));\n    });\n  }\n  RequestHons(n, callback) {\n    this.m_masterAddr = window.MasterAddr;\n    const masterAddr = this.m_masterAddr;\n    const user = this.m_session.GetHonUser();\n    const addr = `\n        ${masterAddr}/glambda?txid=${encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_0__.HonsTxId)}&table=feeds&start=0&count=${n}`;\n    fetch(addr).then(response => response.json()).then(result => this.honsResult(result)).then(keys => this.RequestHon(keys, callback)).catch(() => {\n      this.warningMsg(\"Server에 문제가 생긴듯 합니다;;\");\n    });\n  }\n  GetHons(n, callback) {\n    this.RequestHons(n, callback);\n  }\n  Run(masterAddr) {\n    this.m_masterAddr = masterAddr;\n    this.drawHtmlConnectMaster();\n    //this.RequestHons(10, this.drawHtmlHon);\n    return true;\n  }\n  Release() {\n    /*\n    const feeds = document.getElementById(\"feeds\");\n    if (feeds == null) return;\n    feeds.innerHTML = ``;\n    */\n  }\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/views/hons.ts?");

/***/ }),

/***/ "./src/views/newhon.ts":
/*!*****************************!*\
  !*** ./src/views/newhon.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NewHon: () => (/* binding */ NewHon)\n/* harmony export */ });\n/* harmony import */ var _models_tx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/tx */ \"./src/models/tx.ts\");\n\nclass NewHon {\n  constructor(blockStore, session) {\n    this.blockStore = blockStore;\n    this.session = session;\n    this.m_masterAddr = \"\";\n    this.m_session = session;\n  }\n  warningMsg(msg) {\n    const info = document.getElementById(\"information\");\n    if (info == null) return;\n    info.innerHTML = msg;\n  }\n  newHonResult(ret) {\n    console.log(ret);\n    if (ret.result == \"null\") {\n      this.warningMsg(\"등록 실패\");\n    } else {\n      window.ClickLoadPage(\"hons\", false);\n    }\n  }\n  RequestNewHon() {\n    const masterAddr = this.m_masterAddr;\n    const user = this.m_session.GetHonUser();\n    const inputContent = document.getElementById(\"inputContent\");\n    const addr = masterAddr + \"/glambda?txid=\" + encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_0__.NewHonTxId);\n    const formData = new FormData();\n    formData.append(\"key\", user.Email);\n    formData.append(\"email\", user.Email);\n    formData.append(\"password\", user.Password);\n    formData.append(\"id\", user.Nickname);\n    formData.append(\"time\", new Date().getTime().toString());\n    formData.append(\"table\", \"feeds\");\n    formData.append(\"content\", inputContent === null || inputContent === void 0 ? void 0 : inputContent.value);\n    fetch(addr, {\n      method: \"POST\",\n      cache: \"no-cache\",\n      headers: {},\n      body: formData\n    }).then(response => response.json()).then(result => this.newHonResult(result)).catch(() => {\n      this.warningMsg(\"Server에 문제가 생긴듯 합니다;;\");\n    });\n  }\n  Run(masterAddr) {\n    this.m_masterAddr = masterAddr;\n    const txLink = document.getElementById(\"txLink\");\n    txLink.innerHTML = `\n            <a target=\"_blank\" class=\"handcursor\" href=\"http://ghostwebservice.com/?pageid=txdetail&txid=${encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_0__.NewHonTxId)}\">\n                ${_models_tx__WEBPACK_IMPORTED_MODULE_0__.NewHonTxId}\n            </a> `;\n    const cont = document.getElementById(\"inputContent\");\n    cont.onfocus = () => {\n      if (cont.value == \"Enter text\") cont.value = '';\n    };\n    if (!this.m_session.CheckLogin()) {\n      return false;\n    }\n    const btn = document.getElementById(\"feedBtn\");\n    btn.onclick = () => this.RequestNewHon();\n    return true;\n  }\n  Release() {}\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/views/newhon.ts?");

/***/ }),

/***/ "./src/views/signin.ts":
/*!*****************************!*\
  !*** ./src/views/signin.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Signin: () => (/* binding */ Signin)\n/* harmony export */ });\n/* harmony import */ var _libs_sha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/sha256 */ \"./src/libs/sha256.ts\");\n/* harmony import */ var _models_tx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tx */ \"./src/models/tx.ts\");\n\n\nclass Signin {\n  constructor(blockStore, session) {\n    this.blockStore = blockStore;\n    this.session = session;\n    this.m_user = {\n      Email: \"\",\n      Nickname: \"\",\n      Password: \"\"\n    };\n    this.m_masterAddr = \"\";\n    this.m_session = session;\n  }\n  warningMsg(msg) {\n    const info = document.getElementById(\"information\");\n    if (info == null) return;\n    info.innerHTML = msg;\n  }\n  loginResult(ret) {\n    console.log(ret);\n    if (\"email\" in ret) {\n      this.m_session.SignIn({\n        Email: ret.email,\n        Nickname: ret.id,\n        Password: ret.password\n      });\n      window.ClickLoadPage(\"main\", false);\n    } else {\n      this.warningMsg(\"ID와 Password가 맞지 않습니다.\");\n    }\n  }\n  RequestSignin() {\n    const masterAddr = this.m_masterAddr;\n    const inputEmail = document.getElementById(\"inputEmail\");\n    const email = inputEmail === null || inputEmail === void 0 ? void 0 : inputEmail.value;\n    if (email == \"\") {\n      this.warningMsg(\"email is empty\");\n    }\n    const inputPW = document.getElementById(\"inputPassword\");\n    const password = (0,_libs_sha256__WEBPACK_IMPORTED_MODULE_0__.SHA256)(inputPW === null || inputPW === void 0 ? void 0 : inputPW.value);\n    const addr = masterAddr + \"/glambda?txid=\" + encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_1__.SigninTxId);\n    this.m_user.Email = email;\n    this.m_user.Password = password;\n    const formData = new FormData();\n    formData.append(\"key\", email);\n    formData.append(\"email\", email);\n    formData.append(\"password\", password);\n    console.log(JSON.stringify({\n      key: email,\n      Email: email,\n      password: password\n    }));\n    fetch(addr, {\n      method: \"POST\",\n      cache: \"no-cache\",\n      headers: {},\n      body: formData\n    }).then(response => response.json()).then(result => this.loginResult(result)).catch(() => {\n      this.warningMsg(\"Server에 문제가 생긴듯 합니다;;\");\n    });\n  }\n  Run(masterAddr) {\n    this.m_masterAddr = masterAddr;\n    const txLink = document.getElementById(\"txLink\");\n    txLink.innerHTML = `\n            <a class=\"handcursor\" href=\"http://ghostwebservice.com/?pageid=txdetail&txid=${encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_1__.SigninTxId)}\">\n                ${_models_tx__WEBPACK_IMPORTED_MODULE_1__.SigninTxId}\n            </a> `;\n    const btn = document.getElementById(\"signinBtn\");\n    btn.onclick = () => this.RequestSignin();\n    return true;\n  }\n  Release() {}\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/views/signin.ts?");

/***/ }),

/***/ "./src/views/signup.ts":
/*!*****************************!*\
  !*** ./src/views/signup.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Signup: () => (/* binding */ Signup)\n/* harmony export */ });\n/* harmony import */ var _libs_sha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/sha256 */ \"./src/libs/sha256.ts\");\n/* harmony import */ var _models_tx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tx */ \"./src/models/tx.ts\");\n\n\nclass Signup {\n  constructor(blockStore, session) {\n    this.blockStore = blockStore;\n    this.session = session;\n    this.m_masterAddr = \"\";\n    this.m_session = session;\n  }\n  warningMsg(msg) {\n    const info = document.getElementById(\"information\");\n    if (info == null) return;\n    info.innerHTML = msg;\n  }\n  signupResult(ret) {\n    console.log(ret);\n    if (ret.result == \"null\") {\n      this.warningMsg(\"Signup 실패\");\n    } else {\n      window.ClickLoadPage(\"main\", false);\n    }\n  }\n  RequestSignup() {\n    const masterAddr = this.m_masterAddr;\n    const inputEmail = document.getElementById(\"inputEmail\");\n    const email = inputEmail === null || inputEmail === void 0 ? void 0 : inputEmail.value;\n    if (email == \"\") {\n      this.warningMsg(\"email is empty\");\n    }\n    const inputPW = document.getElementById(\"inputPassword\");\n    const password = (0,_libs_sha256__WEBPACK_IMPORTED_MODULE_0__.SHA256)(inputPW === null || inputPW === void 0 ? void 0 : inputPW.value);\n    const inputId = document.getElementById(\"inputId\");\n    const id = inputId === null || inputId === void 0 ? void 0 : inputId.value;\n    const addr = masterAddr + \"/glambda?txid=\" + encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_1__.SignupTxId);\n    const formData = new FormData();\n    formData.append(\"key\", email);\n    formData.append(\"email\", email);\n    formData.append(\"password\", password);\n    formData.append(\"id\", id);\n    fetch(addr, {\n      method: \"POST\",\n      cache: \"no-cache\",\n      headers: {},\n      body: formData\n    }).then(response => response.json()).then(result => this.signupResult(result)).catch(() => {\n      this.warningMsg(\"Server에 문제가 생긴듯 합니다;;\");\n    });\n  }\n  Run(masterAddr) {\n    this.m_masterAddr = masterAddr;\n    const txLink = document.getElementById(\"txLink\");\n    txLink.innerHTML = `\n            <a class=\"handcursor\" onclick='ClickLoadPage(\"txdetail\", false, \"&txid=${encodeURIComponent(_models_tx__WEBPACK_IMPORTED_MODULE_1__.SignupTxId)}\")'>\n                ${_models_tx__WEBPACK_IMPORTED_MODULE_1__.SignupTxId}\n            </a> `;\n    const btn = document.getElementById(\"signupBtn\");\n    btn.onclick = () => this.RequestSignup();\n    return true;\n  }\n  Release() {}\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/views/signup.ts?");

/***/ }),

/***/ "./src/views/store.ts":
/*!****************************!*\
  !*** ./src/views/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BlockStore: () => (/* binding */ BlockStore)\n/* harmony export */ });\nconst MaxUnsignedInt = 1 << 31 >>> 0; // unsigned int max\nclass BlockStore {\n  constructor() {\n    this.m_minBlockId = MaxUnsignedInt;\n    this.m_accountMap = new Map();\n    this.m_masterNodes = new Array();\n    this.m_os = this.m_ip = this.m_gwsFilename = \"\";\n    this.m_masterAddr = window.MasterAddr;\n  }\n  SetDeviceInfo(ip, os) {\n    this.m_ip = ip;\n    this.m_os = os;\n  }\n  GetDeviceOs() {\n    return this.m_os;\n  }\n  GetDeviceIp() {\n    return this.m_ip;\n  }\n  SetGWSPath(filename) {\n    this.m_gwsFilename = filename;\n  }\n  GetGWSPath() {\n    return this.m_gwsFilename;\n  }\n  AddMasters(nodes) {\n    this.m_masterNodes = nodes;\n  }\n  GetMasters() {\n    return this.m_masterNodes;\n  }\n  set MasterAddr(addr) {\n    this.m_masterAddr = addr;\n  }\n  get MasterAddr() {\n    return this.m_masterAddr;\n  }\n  GetAccount(nick) {\n    return this.m_accountMap.get(nick);\n  }\n  RequestAccount(addr) {\n    const encodeAddr = encodeURIComponent(addr);\n    if (encodeAddr == null) return Promise.reject();\n    const account = this.m_accountMap.get(encodeAddr);\n    if (account != undefined) {\n      return new Promise(account => account);\n    }\n    return fetch(this.m_masterAddr + `/account?addr=${encodeAddr}`).then(response => response.json()).then(account => {\n      this.m_accountMap.set(account.Nickname, account);\n      return account;\n    });\n  }\n  RequestAccountbyNick(nickname) {\n    return fetch(this.m_masterAddr + `/getpubkey?nickname=${nickname}`).then(response => {\n      console.log(response);\n      return response.json();\n    });\n  }\n  RequestAccountList(start, count) {\n    if (count == null) return Promise.reject();\n    return fetch(this.m_masterAddr + `/accountlist?start=${start}&cnt=${count}`).then(response => {\n      return response.json();\n    });\n  }\n  RequestScript(txId) {\n    if (txId == null) return Promise.reject();\n    return fetch(this.m_masterAddr + `/script?txid=${txId}`).then(response => response.json());\n  }\n}\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/views/store.ts?");

/***/ }),

/***/ "./src/views/utils.ts":
/*!****************************!*\
  !*** ./src/views/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcGCoin: () => (/* binding */ calcGCoin),\n/* harmony export */   elapsedTime: () => (/* binding */ elapsedTime)\n/* harmony export */ });\nfunction elapsedTime(date) {\n  const start = new Date(date);\n  const end = new Date();\n  const diff = (end.getTime() - start.getTime()) / 1000;\n  if (isNaN(diff)) return \"\";\n  const times = [{\n    name: 'years',\n    milliSeconds: 60 * 60 * 24 * 365\n  }, {\n    name: 'months',\n    milliSeconds: 60 * 60 * 24 * 30\n  }, {\n    name: 'days',\n    milliSeconds: 60 * 60 * 24\n  }, {\n    name: 'hrs',\n    milliSeconds: 60 * 60\n  }, {\n    name: 'mins',\n    milliSeconds: 60\n  }];\n  for (const value of times) {\n    const betweenTime = Math.floor(diff / value.milliSeconds);\n    if (betweenTime > 0) {\n      return `${betweenTime} ${value.name} ago`;\n    }\n  }\n  return \"now\";\n}\nfunction calcGCoin(coin) {\n  const gcoin = coin / 1000000.0;\n  return gcoin.toFixed(3);\n}\n\n\n//# sourceURL=webpack://ghost-web-games.github.io/./src/views/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;