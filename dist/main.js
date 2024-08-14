"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/battleshipFont/battleship.ttf */ "./src/images/battleshipFont/battleship.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/BebasNeue-Regular.ttf */ "./src/images/BebasNeue-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/lato-v24-latin-700.woff2 */ "./src/images/lato-v24-latin-700.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons8-crosshair-24.png */ "./src/images/icons8-crosshair-24.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background: linear-gradient(to bottom, #e0f7fa, #80deea);
  height: 100vh;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}

@font-face {
  font-family: "Battleship";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-style: normal;
}

@font-face {
  font-family: "Babas Neue";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-style: normal;
}

@font-face {
  font-family: "Lato";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
/* header */
.title {
  font-size: 3.9rem;
  margin: 0 auto;
  font-family: "Battleship";
  color: #002d72;
  text-decoration: underline;
}

header {
  height: 6rem;
  text-align: center;
}

.player-turn {
  width: 15%;
  font-family: "Babas Neue";
  color: #0d3c79;
  margin-left: -25px;
  text-align: left;
  border: #002d72 1px solid;
  background-color: #d4eaf5;
  margin-bottom: 1rem;
}

/* board and cell display */
.board {
  display: grid;
  height: 300px;
  width: 300px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 2px;
  padding: 2px;
  background-color: #87a6bc;
  border-radius: 3px;
}

#user-board {
  margin-right: 2rem;
}

.board-flex {
  display: flex;
  justify-content: center;
  /* gap: 3rem; */
}

main {
  display: none;
}

/* cell */
.cell {
  background-color: #d4eaf5;
  border-radius: 2px;
}

.ship {
  background-color: #0f3460;
}

.miss {
  background-color: rgb(56, 253, 132);
}

.hit {
  background-color: rgb(255, 97, 97);
}

.cell:hover {
  cursor: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) 14 14, auto;
  background-color: rgba(30, 144, 255, 0.6);
}

/* ship health */
.ship-container-title {
  font-size: 1rem;
}

.health {
  width: 0.7rem;
  height: 0.7rem;
}

.flex-ship {
  display: flex;
  gap: 0.2rem;
}

.ships-container-player {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.ships-container-computer {
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-end;
}

.destroyed {
  background-color: rgb(255, 97, 97);
}

.left {
  margin-right: 0.8rem;
}

.right {
  margin-left: 0.8rem;
}

#content {
  display: none;
  flex-direction: column;
  align-items: center;
}

.title,
.player-turn {
  text-align: center;
}

/* set ships */

.set-ships {
  gap: 2.5rem;
  margin-bottom: 1rem;
}

.ships-to-set {
  width: 15rem;
  text-align: center;
}

.select-ships {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
}

.container {
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: center;
  box-sizing: border-box;
}

.part {
  width: 27.59px;
  height: 27.59px;
  background-color: #0f3460;
  border-radius: 2px;
}

.container.horizontal {
  height: 2.3rem;
  flex-direction: row;
}

.container.vertical {
  width: 2.3rem;
  flex-direction: column;
}

.buttons {
  display: flex;
  justify-content: center;
  font-family: "Lato";
}

button {
  border: none;
  outline: none;
  background-color: #008cba;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 4px 0px 0px #006f94;
}

button:active {
  transform: translateY(4px);
  box-shadow: 0px 0px 0px 0px #a29bfe;
}

.reset-button {
  background-color: #ff4d4d;
  box-shadow: 0px 5px 0px 0px #cc3d3d;
}

.cell:active {
  transform: scale(0.95);
  background-color: transparent;
  transition: transform 0.1s ease-in-out, background-color 0.2s ease;
}

.cell.clicked {
  cursor: default;
}

.dragover {
  background-color: #0f3460;
}

h3 {
  font-family: "Babas Neue";
  letter-spacing: 0.06rem;
  text-decoration: underline;
  margin-bottom: 0.5rem;
  color: #333333;
}

h2 {
  font-family: "Babas Neue";
  text-decoration: underline;
  color: #333;
}

.winner-modal {
  width: 300px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
  border: 3px solid rgb(0, 45, 114);
  background-color: rgb(212, 234, 245);
  border-radius: 5px;
}

.modal-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}

.winner-modal button {
  max-width: 100px;
}

.hint {
  display: flex;
  justify-content: center;
  margin-bottom: 0.8rem;
}

.hint ul li {
  list-style-type: "\\1F4A1";
  font-family: "Babas Neue";
  vertical-align: bottom;
}

.hint ul {
  padding: 0;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  background: linear-gradient(to bottom, #e0f7fa, #80deea);\n  height: 100vh;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n@font-face {\n  font-family: \"Battleship\";\n  src: url(./images/battleshipFont/battleship.ttf);\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Babas Neue\";\n  src: url(./images/BebasNeue-Regular.ttf);\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Lato\";\n  src: url(./images/lato-v24-latin-700.woff2);\n}\n/* header */\n.title {\n  font-size: 3.9rem;\n  margin: 0 auto;\n  font-family: \"Battleship\";\n  color: #002d72;\n  text-decoration: underline;\n}\n\nheader {\n  height: 6rem;\n  text-align: center;\n}\n\n.player-turn {\n  width: 15%;\n  font-family: \"Babas Neue\";\n  color: #0d3c79;\n  margin-left: -25px;\n  text-align: left;\n  border: #002d72 1px solid;\n  background-color: #d4eaf5;\n  margin-bottom: 1rem;\n}\n\n/* board and cell display */\n.board {\n  display: grid;\n  height: 300px;\n  width: 300px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 2px;\n  padding: 2px;\n  background-color: #87a6bc;\n  border-radius: 3px;\n}\n\n#user-board {\n  margin-right: 2rem;\n}\n\n.board-flex {\n  display: flex;\n  justify-content: center;\n  /* gap: 3rem; */\n}\n\nmain {\n  display: none;\n}\n\n/* cell */\n.cell {\n  background-color: #d4eaf5;\n  border-radius: 2px;\n}\n\n.ship {\n  background-color: #0f3460;\n}\n\n.miss {\n  background-color: rgb(56, 253, 132);\n}\n\n.hit {\n  background-color: rgb(255, 97, 97);\n}\n\n.cell:hover {\n  cursor: url(./images/icons8-crosshair-24.png) 14 14, auto;\n  background-color: rgba(30, 144, 255, 0.6);\n}\n\n/* ship health */\n.ship-container-title {\n  font-size: 1rem;\n}\n\n.health {\n  width: 0.7rem;\n  height: 0.7rem;\n}\n\n.flex-ship {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.ships-container-player {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.ships-container-computer {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  align-items: flex-end;\n}\n\n.destroyed {\n  background-color: rgb(255, 97, 97);\n}\n\n.left {\n  margin-right: 0.8rem;\n}\n\n.right {\n  margin-left: 0.8rem;\n}\n\n#content {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title,\n.player-turn {\n  text-align: center;\n}\n\n/* set ships */\n\n.set-ships {\n  gap: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n.ships-to-set {\n  width: 15rem;\n  text-align: center;\n}\n\n.select-ships {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: flex-start;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  gap: 2px;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n.part {\n  width: 27.59px;\n  height: 27.59px;\n  background-color: #0f3460;\n  border-radius: 2px;\n}\n\n.container.horizontal {\n  height: 2.3rem;\n  flex-direction: row;\n}\n\n.container.vertical {\n  width: 2.3rem;\n  flex-direction: column;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  font-family: \"Lato\";\n}\n\nbutton {\n  border: none;\n  outline: none;\n  background-color: #008cba;\n  padding: 8px 16px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #000000;\n  border-radius: 5px;\n  transition: all ease 0.1s;\n  box-shadow: 0px 4px 0px 0px #006f94;\n}\n\nbutton:active {\n  transform: translateY(4px);\n  box-shadow: 0px 0px 0px 0px #a29bfe;\n}\n\n.reset-button {\n  background-color: #ff4d4d;\n  box-shadow: 0px 5px 0px 0px #cc3d3d;\n}\n\n.cell:active {\n  transform: scale(0.95);\n  background-color: transparent;\n  transition: transform 0.1s ease-in-out, background-color 0.2s ease;\n}\n\n.cell.clicked {\n  cursor: default;\n}\n\n.dragover {\n  background-color: #0f3460;\n}\n\nh3 {\n  font-family: \"Babas Neue\";\n  letter-spacing: 0.06rem;\n  text-decoration: underline;\n  margin-bottom: 0.5rem;\n  color: #333333;\n}\n\nh2 {\n  font-family: \"Babas Neue\";\n  text-decoration: underline;\n  color: #333;\n}\n\n.winner-modal {\n  width: 300px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -150px;\n  margin-top: -150px;\n  border: 3px solid rgb(0, 45, 114);\n  background-color: rgb(212, 234, 245);\n  border-radius: 5px;\n}\n\n.modal-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n}\n\n.winner-modal button {\n  max-width: 100px;\n}\n\n.hint {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 0.8rem;\n}\n\n.hint ul li {\n  list-style-type: \"\\1F4A1\";\n  font-family: \"Babas Neue\";\n  vertical-align: bottom;\n}\n\n.hint ul {\n  padding: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/battleship/ship.js":
/*!********************************!*\
  !*** ./src/battleship/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.coords = new Set();
    this.placed = false;
  }

  hit() {
    this.hits += 1;
    if (this.isSunk()) {
      return this.name;
    }
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true;
      return true;
    }
  }

  reset() {
    this.hits = 0;
    this.sunk = false;
    this.coords = new Set();
    this.placed = false;
  }

  getHits() {
    return this.hits;
  }

  resetCoords() {
    this.coords = new Set();
  }
}


/***/ }),

/***/ "./src/gameboard/gameboard.js":
/*!************************************!*\
  !*** ./src/gameboard/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _battleship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../battleship/ship */ "./src/battleship/ship.js");


function Cell() {
  let value = "~";
  let hit = false;

  return {
    value,
    hit,
  };
}

class GameBoard {
  constructor() {
    this.board = [];

    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i].push(Cell());
      }
    }

    this.ships = {
      carrier: new _battleship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship("carrier", 5),
      battleship: new _battleship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship("battleship", 4),
      destroyer: new _battleship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship("destroyer", 3),
      submarine: new _battleship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship("submarine", 3),
      "patrol-boat": new _battleship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship("patrol-boat", 2),
    };
  }

  markBufferZone(name, rowStart, colStart, orientation) {
    const startRow = rowStart - 1 < 0 ? 0 : rowStart - 1;
    const endRow = Math.min(
      9,
      orientation === "horizontal"
        ? rowStart + 1
        : rowStart + this.ships[name].length
    );
    const startCol = colStart - 1 < 0 ? 0 : colStart - 1;
    const endCol = Math.min(
      9,
      orientation === "vertical"
        ? colStart + 1
        : colStart + this.ships[name].length
    );

    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        if (this.board[i][j].value === "~") {
          this.board[i][j].value = "*";
        }
      }
    }
  }

  placeShip(name, rowStart, colStart, orientation) {
    if (rowStart <= -1 || colStart <= -1 || rowStart >= 10 || colStart >= 10) {
      return "Out of bounds";
    }

    if (orientation === "horizontal") {
      for (let i = 0; i < this.ships[name].length; i++) {
        if (
          colStart + i >= 10 ||
          this.board[rowStart][colStart + i].value !== "~"
        ) {
          console.log(this.board[rowStart][colStart].value);
          console.log(false);
          return false;
        }
      }
      for (let i = 0; i < this.ships[name].length; i++) {
        this.ships[name].coords.add(`${rowStart},${colStart + i}`);
        this.board[rowStart][colStart + i].value = name[0];
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < this.ships[name].length; i++) {
        if (
          rowStart + i >= 10 ||
          this.board[rowStart + i][colStart].value !== "~"
        ) {
          return false;
        }
      }
      for (let i = 0; i < this.ships[name].length; i++) {
        this.ships[name].coords.add(`${rowStart + i},${colStart}`);
        this.board[rowStart + i][colStart].value = name[0];
      }
    }
    this.markBufferZone(name, rowStart, colStart, orientation);
    this.ships[name].placed = true;
    return true;
  }

  autoPlaceShips() {
    const ships = this.ships;

    const randomOrientation = () => {
      let orientation;
      const random = Math.floor(Math.random() * 2);
      if (random === 0) {
        orientation = "horizontal";
      } else {
        orientation = "vertical";
      }
      return orientation;
    };

    const randomNumber = () => {
      const coord = Math.floor(Math.random() * 10);
      return coord;
    };

    Object.keys(ships).forEach((key) => {
      let ship = ships[key];

      while (!ship.placed) {
        this.placeShip(
          ship.name,
          randomNumber(),
          randomNumber(),
          randomOrientation()
        );
      }
    });
    return "placed";
  }

  receiveAttack(x, y) {
    if (this.board[x][y].hit) {
      console.log(`row:${x}, col: ${y}`);
      console.log(this.board[x][y].hit);
      console.log(this.ships);
      console.log(this.board);
      return "Try again";
    } else {
      this.board[x][y].hit = true;
      for (const shipName in this.ships) {
        const ship = this.ships[shipName];
        if (ship.coords.has(`${x},${y}`)) {
          ship.hit();
          return "Hit!";
        }
      }
      return "Miss!";
    }
  }

  checkForAvailableSquares() {
    const freeSpaces = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.board[i][j].hit === false) {
          freeSpaces.push([i, j]);
        }
      }
    }
    return freeSpaces;
  }

  checkIfAllShipsSunk() {
    const sunkShips = [];
    for (const shipName in this.ships) {
      const ship = this.ships[shipName];
      if (ship.sunk) {
        sunkShips.push(shipName);
      }
    }
    if (sunkShips.length >= 5) {
      return true;
    } else {
      return false;
    }
  }

  resetGame() {
    const ships = this.ships;
    this.board = [];
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i].push(Cell());
      }
    }
    Object.keys(ships).forEach((key) => {
      let ship = ships[key];
      ship.reset();
    });
  }

  shipsHits() {
    const ships = this.ships;
    let shipHitsArr = [];
    Object.keys(ships).forEach((key) => {
      let ship = ships[key];
      shipHitsArr.push([ship.name, ship.getHits(), ship.length]);
    });
    return shipHitsArr;
  }

  printBoard() {
    const boardWithCellValues = this.board.map((row) =>
      row.map((cell) => cell.hit)
    );
    console.log(boardWithCellValues);
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameController: () => (/* binding */ GameController),
/* harmony export */   ScreenController: () => (/* binding */ ScreenController)
/* harmony export */ });
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



function GameController(
  playerOneName = "User",
  playerTwoName = "Computer"
) {
  let userPlayer = new _player_player__WEBPACK_IMPORTED_MODULE_0__.Player(playerOneName);
  let computerPlayer = new _player_player__WEBPACK_IMPORTED_MODULE_0__.Player(playerTwoName);

  const players = [userPlayer, computerPlayer];

  const placeShips = (arr) => {
    arr.forEach((player) => {
      player.board.autoPlaceShips();
    });
  };

  const placeComputerShips = () => {
    players[1].board.autoPlaceShips();
  };

  const placeAShip = (name, rowStart, colStart, orientation) => {
    userPlayer.board.placeShip(name, rowStart, colStart, orientation);
  };

  let activePlayer = userPlayer;

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === userPlayer ? computerPlayer : userPlayer;
  };

  const getActivePlayer = () => {
    return activePlayer;
  };

  const setActivePlayer = (player) => {
    activePlayer = player;
  };

  const printNewRound = () => {
    if (activePlayer === userPlayer) {
      computerPlayer.board.printBoard();
    } else if (activePlayer === computerPlayer) {
      userPlayer.board.printBoard();
    }
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const randomNumber = () => {
    const coord = Math.floor(Math.random() * 10);
    return coord;
  };

  const availableComputerMove = () => {
    const movesAvailable = computerPlayer.board.checkForAvailableSquares();
    const [row, col] =
      movesAvailable[Math.floor(Math.random() * movesAvailable.length)];

    return [row, col];
  };

  const playRound = (row, col) => {
    let attackBoard;
    let result;
    if (activePlayer === userPlayer) {
      attackBoard = computerPlayer.board;
      result = attackBoard.receiveAttack(row, col);
      if (result === "Miss!") {
        printNewRound();
        switchPlayerTurn();
        return "You missed!";
      } else if (result === "Hit!") {
        printNewRound();
        switchPlayerTurn();
        return "You hit a ship!";
      } else {
        return "Try again";
      }
    } else {
      attackBoard = userPlayer.board;
      result = attackBoard.receiveAttack(row, col);
      if (result === "Miss!") {
        printNewRound();
        switchPlayerTurn();
        return "The enemy missed!";
      } else if (result === "Hit!") {
        printNewRound();
        switchPlayerTurn();
        return "They hit your ship!";
      } else {
        const moves = attackBoard.checkForAvailableSquares();
        const [row, col] = moves[Math.floor(Math.random() * moves.length)];
        switchPlayerTurn();
        result = attackBoard.receiveAttack(row, col);
        return "Trying again";
      }
    }
  };

  const checkForWin = () => {
    if (
      userPlayer.board.checkIfAllShipsSunk() ||
      computerPlayer.board.checkIfAllShipsSunk()
    ) {
      return true;
    }
    return false;
  };

  const reset = () => {
    players.forEach((player) => {
      player.board.resetGame();
    });
    placeShips(players);
  };

  return {
    getActivePlayer,
    setActivePlayer,
    switchPlayerTurn,
    printNewRound,
    placeShips,
    playRound,
    players,
    randomNumber,
    availableComputerMove,
    checkForWin,
    reset,
    placeAShip,
    placeComputerShips,
  };
}

function ScreenController(player) {
  const userBoardDiv = document.querySelector("#user-board");
  const computerBoardDiv = document.querySelector("#attack-board");
  const playerTurnDiv = document.querySelector("#player-turn");
  const modal = document.querySelector(".winner-modal");
  const winner = document.querySelector(".winner");
  const playAgain = document.querySelector(".play-again");
  const selectShips = document.querySelector(".select-ships");
  const randomShips = document.querySelector(".random-button");
  const hint = document.querySelector(".hintLi");

  const game = GameController(player);
  playerTurnDiv.textContent = game.getActivePlayer().name;

  const boardToSetShips = () => {
    const userBoard = game.players[0].board.board;
    const setShipsBoardDiv = document.querySelector("#set-user-ships");
    setShipsBoardDiv.textContent = "";

    userBoard.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        const cellButton = document.createElement("div");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;
        if (column.value !== "~" && column.value !== "*") {
          cellButton.classList.add("ship");
        }

        setShipsBoardDiv.appendChild(cellButton);
      });
    });
    attachBoardCellListeners();
  };

  const updateUserBoard = () => {
    const userBoard = game.players[0].board.board;
    userBoardDiv.textContent = "";
    playerTurnDiv.textContent = `${game.getActivePlayer().name}'s turn`;

    userBoard.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        const cellButton = document.createElement("div");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;
        if (column.value !== "~" && column.value !== "*") {
          cellButton.classList.add("ship");
        }
        if (column.hit) {
          cellButton.classList.add("miss");
          if (
            (column.value === "c" ||
              column.value === "b" ||
              column.value === "d" ||
              column.value === "p" ||
              column.value === "s") &&
            column.hit
          ) {
            cellButton.classList.remove("miss");
            cellButton.classList.add("hit");
          }
        }
        userBoardDiv.appendChild(cellButton);
      });
    });
  };

  const updateComputerBoard = () => {
    const computerBoard = game.players[1].board.board;

    computerBoardDiv.textContent = "";
    playerTurnDiv.textContent = `${game.getActivePlayer().name}'s turn`;

    computerBoard.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        const cellButton = document.createElement("div");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;

        if (column.hit) {
          cellButton.classList.add("miss");
          cellButton.classList.add("clicked");
          if (
            (column.value === "c" ||
              column.value === "b" ||
              column.value === "d" ||
              column.value === "p" ||
              column.value === "s") &&
            column.hit
          ) {
            cellButton.classList.remove("miss");
            cellButton.classList.add("hit");
            cellButton.classList.add("clicked");
          }
        }
        computerBoardDiv.appendChild(cellButton);
      });
    });
  };

  function computerTurn() {
    const [row, col] = game.availableComputerMove();
    game.playRound(row, col);
    updateUserBoard();
    updateShipHealth(game.players[0], ".ships-container-player");
    updateShipHealth(game.players[1], ".ships-container-computer");

    if (checkForWinner()) return;
    computerBoardDiv.addEventListener("click", clickHandlerBoard);
  }

  function clickHandlerBoard(e) {
    const selectedRow = e.target.dataset.row;
    const selectedColumn = e.target.dataset.column;

    if (!selectedColumn) return;
    if (!selectedRow) return;

    game.playRound(selectedRow, selectedColumn);

    // game.playRound(selectedRow, selectedColumn);
    computerBoardDiv.removeEventListener("click", clickHandlerBoard);
    updateUserBoard();
    updateComputerBoard();
    updateShipHealth(game.players[0], ".ships-container-player");
    updateShipHealth(game.players[1], ".ships-container-computer");
    if (checkForWinner()) return;

    if (game.getActivePlayer() === game.players[1]) {
      setTimeout(computerTurn, 1000);
    } else {
      computerBoardDiv.addEventListener("click", clickHandlerBoard);
    }

    console.log(selectedRow, selectedColumn);
  }

  function checkForWinner() {
    if (game.checkForWin()) {
      if (game.getActivePlayer() === game.players[1]) {
        displayWinModal(game.players[0].name);
        return true;
      } else {
        displayWinModal(game.players[1].name);
        return true;
      }
    }
    return false;
  }

  function displayWinModal(winnerName) {
    winner.textContent = `${winnerName} wins!`;
    modal.showModal();
    console.log("dodue");

    playAgain.addEventListener("click", resetGame);
  }

  function resetGame() {
    const setShips = document.querySelector(".set-ships");
    const buttons = document.querySelector(".buttons");
    const mainContent = document.querySelector("#content");
    game.reset();
    game.setActivePlayer(game.players[0]);
    updateUserBoard();
    updateComputerBoard();
    updateShipHealth(game.players[0], ".ships-container-player");
    updateShipHealth(game.players[1], ".ships-container-computer");
    setShips.style.display = "";
    buttons.style.display = "flex";
    mainContent.style.display = "none";
    hint.innerHTML = `Drag Ships onto board. Click ships to rotate before dragging.<br />
            Ships cannot move once placed.`;
    shipState.resetShips();
    modal.close();
    computerBoardDiv.addEventListener("click", clickHandlerBoard);
  }

  function updateShipHealth(player, container) {
    const shipContainer = document.querySelector(container);
    shipContainer.innerHTML = "";
    const shipsHealth = player.board.shipsHits();

    shipsHealth.forEach((ship) => {
      const shipBars = document.createElement("div");
      shipBars.classList.add("flex-ship");
      shipBars.id = ship[0].toLowerCase().replace(" ", "-");

      for (let i = 0; i < ship[2]; i++) {
        const shipPart = document.createElement("div");
        shipPart.classList.add("ship", "health");
        if (i < ship[1]) {
          shipPart.classList.add("destroyed");
        }
        shipBars.append(shipPart);
      }
      shipContainer.append(shipBars);
    });
  }

  boardToSetShips();
  computerBoardDiv.addEventListener("click", clickHandlerBoard);
  updateUserBoard();
  updateComputerBoard();

  let shipState = saveShipsToSet();

  function saveShipsToSet() {
    const board = document.querySelector(".board");
    const resetButton = document.querySelector(".reset-button");

    const initialShipState = [...selectShips.children].map((container) => {
      return {
        element: container,
        parent: container.parentNode,
        nextSibling: container.nextElementSibling,
      };
    });
    console.log(initialShipState);
    console.log(board);

    function resetShips() {
      initialShipState.forEach(({ element, parent, nextSibling }) => {
        if (nextSibling) {
          parent.append(element);
        } else {
          parent.append(element);
        }
      });
      clearBoard();
    }

    function clearBoard() {
      const cells = board.querySelectorAll(".cell");
      game.players[0].board.resetGame();
      game.players[0].board.board.forEach((cell) => {
        cell.value = "~";
      });
      cells.forEach((cell) => {
        cell.classList.remove("hit", "miss", "ship", "clicked");
        cell.style.backgroundColor = "";
      });
      updateUserBoard();
    }
    resetButton.addEventListener("click", resetShips);
    return {
      initialShipState,
      resetShips,
      clearBoard,
    };
  }

  document.addEventListener("DOMContentLoaded", shipState);

  let draggedShip = null;
  let currentOrientation = "horizontal";
  // eslint-disable-next-line no-unused-vars
  let isDragging = false;

  const optionShips = Array.from(selectShips.children);
  optionShips.forEach((ship) => {
    ship.addEventListener("dragstart", dragStart);
    ship.addEventListener("dragend", dragEnd);
    ship.addEventListener("click", changeOrientation);
  });

  function dragStart(e) {
    draggedShip = e.target;
    currentOrientation = draggedShip.dataset.orient;
    isDragging = true;

    console.log(
      `Drag started: ${draggedShip.dataset.id}, Orientation: ${currentOrientation}`
    );
  }

  function dragEnd() {
    isDragging = false;
    draggedShip = null;

    console.log("Drag ended");
  }

  function changeOrientation(e) {
    const shipContainer = e.currentTarget;
    console.log(shipContainer);
    const currentOrientation = shipContainer.dataset.orient;
    const newOrientation =
      currentOrientation === "horizontal" ? "vertical" : "horizontal";
    shipContainer.dataset.orient = newOrientation;

    shipContainer.classList.toggle(
      "horizontal",
      newOrientation === "horizontal"
    );
    shipContainer.classList.toggle("vertical", newOrientation === "vertical");
  }

  function attachBoardCellListeners() {
    const allPlayerSquares = document.querySelectorAll("#set-user-ships div");
    allPlayerSquares.forEach((playerSquare) => {
      playerSquare.addEventListener("dragover", dragOver);
      playerSquare.addEventListener("drop", dropShip);
      playerSquare.addEventListener("dragenter", dragEnter);
      playerSquare.addEventListener("dragleave", dragLeave);
    });
  }

  function dragEnter(e) {
    if (e.target.classList.contains("cell")) {
      e.target.classList.add("dragover");
    }
  }

  function dragLeave(e) {
    if (e.target.classList.contains("cell")) {
      e.target.classList.remove("dragover");
    }
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dropShip(e) {
    if (draggedShip === null) return;
    const startId = [e.target.dataset.row, e.target.dataset.column];
    const ship = game.players[0].board.ships[draggedShip.dataset.id];
    const orientation = draggedShip.dataset.orient;
    game.placeAShip(
      ship.name,
      parseInt(startId[0]),
      parseInt(startId[1]),
      orientation
    );

    if (ship.placed) {
      draggedShip.remove();
    }
    boardToSetShips();
  }

  function randomPlacement() {
    resetGame();
    game.placeShips(game.players);
    selectShips.textContent = "";
    boardToSetShips();
  }

  function justComputerRandomShips() {
    game.placeComputerShips();
    updateComputerBoard();
  }

  randomShips.addEventListener("click", randomPlacement);
  updateShipHealth(game.players[0], ".ships-container-player");
  updateShipHealth(game.players[1], ".ships-container-computer");

  return {
    updateUserBoard,
    updateComputerBoard,
    justComputerRandomShips,
  };
}

function StartGame() {
  const startGame = document.querySelector(".start-button");
  const mainContent = document.querySelector("#content");
  const setShips = document.querySelector(".set-ships");
  const buttons = document.querySelector(".buttons");
  const selectShips = document.querySelector(".select-ships");
  const hint = document.querySelector(".hintLi");

  const game = ScreenController();
  function start() {
    if (selectShips.children.length > 0) return;
    game.updateUserBoard();
    game.justComputerRandomShips();
    mainContent.style.display = "flex";
    setShips.style.display = "none";
    buttons.style.display = "none";
    hint.innerHTML = `Click board to attack. <span class="hit">Red</span> is a hit, <span class="miss">Green</span> is a miss.`;
  }

  startGame.addEventListener("click", start);
}

StartGame();


/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard/gameboard */ "./src/gameboard/gameboard.js");


class Player {
  constructor(name) {
    this.name = name;
    this.board = new _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard();
  }
}


/***/ }),

/***/ "./src/images/BebasNeue-Regular.ttf":
/*!******************************************!*\
  !*** ./src/images/BebasNeue-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12e3683f9192436a7be8.ttf";

/***/ }),

/***/ "./src/images/battleshipFont/battleship.ttf":
/*!**************************************************!*\
  !*** ./src/images/battleshipFont/battleship.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b8aca8dedb4fb3b3098.ttf";

/***/ }),

/***/ "./src/images/icons8-crosshair-24.png":
/*!********************************************!*\
  !*** ./src/images/icons8-crosshair-24.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee444acf0edbbc1e0931.png";

/***/ }),

/***/ "./src/images/lato-v24-latin-700.woff2":
/*!*********************************************!*\
  !*** ./src/images/lato-v24-latin-700.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f28e0e1fdb195149f1c.woff2";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLCtJQUFvRDtBQUNoRyw0Q0FBNEMsNklBQW1EO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtRkFBbUYsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLFNBQVMsVUFBVSxVQUFVLE1BQU0sUUFBUSxVQUFVLEtBQUssV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0QkFBNEI7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyw0QkFBNEI7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLDhCQUE4QjtBQUNoRTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsdUJBQXVCLGlCQUFpQixtQkFBbUI7QUFDbEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNnQm1EOztBQUU1QztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVM7QUFDOUI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZXNoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhdHRsZXNoaXBGb250L2JhdHRsZXNoaXAudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvQmViYXNOZXVlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbGF0by12MjQtbGF0aW4tNzAwLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaWNvbnM4LWNyb3NzaGFpci0yNC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZTBmN2ZhLCAjODBkZWVhKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbmltZyxcbnBpY3R1cmUsXG52aWRlbyxcbmNhbnZhcyxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cbnAsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuI3Jvb3QsXG4jX19uZXh0IHtcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQmF0dGxlc2hpcFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFiYXMgTmV1ZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cbi8qIGhlYWRlciAqL1xuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzLjlyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LWZhbWlseTogXCJCYXR0bGVzaGlwXCI7XG4gIGNvbG9yOiAjMDAyZDcyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaGVhZGVyIHtcbiAgaGVpZ2h0OiA2cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXItdHVybiB7XG4gIHdpZHRoOiAxNSU7XG4gIGZvbnQtZmFtaWx5OiBcIkJhYmFzIE5ldWVcIjtcbiAgY29sb3I6ICMwZDNjNzk7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAjMDAyZDcyIDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWFmNTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLyogYm9hcmQgYW5kIGNlbGwgZGlzcGxheSAqL1xuLmJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdhcDogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4N2E2YmM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuI3VzZXItYm9hcmQge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi5ib2FyZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGdhcDogM3JlbTsgKi9cbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIGNlbGwgKi9cbi5jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWFmNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjM0NjA7XG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCAyNTMsIDEzMik7XG59XG5cbi5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5NywgOTcpO1xufVxuXG4uY2VsbDpob3ZlciB7XG4gIGN1cnNvcjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIDE0IDE0LCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAxNDQsIDI1NSwgMC42KTtcbn1cblxuLyogc2hpcCBoZWFsdGggKi9cbi5zaGlwLWNvbnRhaW5lci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmhlYWx0aCB7XG4gIHdpZHRoOiAwLjdyZW07XG4gIGhlaWdodDogMC43cmVtO1xufVxuXG4uZmxleC1zaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjJyZW07XG59XG5cbi5zaGlwcy1jb250YWluZXItcGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcHg7XG59XG5cbi5zaGlwcy1jb250YWluZXItY29tcHV0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDNweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uZGVzdHJveWVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTcsIDk3KTtcbn1cblxuLmxlZnQge1xuICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcbn1cblxuLnJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcbn1cblxuI2NvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUsXG4ucGxheWVyLXR1cm4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHNldCBzaGlwcyAqL1xuXG4uc2V0LXNoaXBzIHtcbiAgZ2FwOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zaGlwcy10by1zZXQge1xuICB3aWR0aDogMTVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlbGVjdC1zaGlwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnBhcnQge1xuICB3aWR0aDogMjcuNTlweDtcbiAgaGVpZ2h0OiAyNy41OXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYzNDYwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5jb250YWluZXIuaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogMi4zcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29udGFpbmVyLnZlcnRpY2FsIHtcbiAgd2lkdGg6IDIuM3JlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhjYmE7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMXM7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMHB4IDBweCAjMDA2Zjk0O1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjYTI5YmZlO1xufVxuXG4ucmVzZXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGQ0ZDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICNjYzNkM2Q7XG59XG5cbi5jZWxsOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi5jZWxsLmNsaWNrZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5kcmFnb3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjM0NjA7XG59XG5cbmgzIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFiYXMgTmV1ZVwiO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNnJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFiYXMgTmV1ZVwiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi53aW5uZXItbW9kYWwge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgbWFyZ2luLXRvcDogLTE1MHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgNDUsIDExNCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIzNCwgMjQ1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubW9kYWwtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi53aW5uZXItbW9kYWwgYnV0dG9uIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmhpbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuXG4uaGludCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogXCJcXFxcMUY0QTFcIjtcbiAgZm9udC1mYW1pbHk6IFwiQmFiYXMgTmV1ZVwiO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uaGludCB1bCB7XG4gIHBhZGRpbmc6IDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyx3REFBd0Q7RUFDeEQsYUFBYTtBQUNmO0FBQ0E7Ozs7O0VBS0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTs7OztFQUlFLGFBQWE7QUFDZjtBQUNBOzs7Ozs7O0VBT0UseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUFnRDtFQUNoRCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNENBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBMkM7QUFDN0M7QUFDQSxXQUFXO0FBQ1g7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxRQUFRO0VBQ1IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsU0FBUztBQUNUO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDJEQUF5RDtFQUN6RCx5Q0FBeUM7QUFDM0M7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGtFQUFrRTtBQUNwRTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2UwZjdmYSwgIzgwZGVlYSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXR0bGVzaGlwXFxcIjtcXG4gIHNyYzogdXJsKC4vaW1hZ2VzL2JhdHRsZXNoaXBGb250L2JhdHRsZXNoaXAudHRmKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJhYmFzIE5ldWVcXFwiO1xcbiAgc3JjOiB1cmwoLi9pbWFnZXMvQmViYXNOZXVlLVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbiAgc3JjOiB1cmwoLi9pbWFnZXMvbGF0by12MjQtbGF0aW4tNzAwLndvZmYyKTtcXG59XFxuLyogaGVhZGVyICovXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMy45cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmb250LWZhbWlseTogXFxcIkJhdHRsZXNoaXBcXFwiO1xcbiAgY29sb3I6ICMwMDJkNzI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogNnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci10dXJuIHtcXG4gIHdpZHRoOiAxNSU7XFxuICBmb250LWZhbWlseTogXFxcIkJhYmFzIE5ldWVcXFwiO1xcbiAgY29sb3I6ICMwZDNjNzk7XFxuICBtYXJnaW4tbGVmdDogLTI1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyOiAjMDAyZDcyIDFweCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGVhZjU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4vKiBib2FyZCBhbmQgY2VsbCBkaXNwbGF5ICovXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMnB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3YTZiYztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI3VzZXItYm9hcmQge1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4uYm9hcmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBnYXA6IDNyZW07ICovXFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogY2VsbCAqL1xcbi5jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGVhZjU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjM0NjA7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgMjUzLCAxMzIpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk3LCA5Nyk7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogdXJsKC4vaW1hZ2VzL2ljb25zOC1jcm9zc2hhaXItMjQucG5nKSAxNCAxNCwgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDE0NCwgMjU1LCAwLjYpO1xcbn1cXG5cXG4vKiBzaGlwIGhlYWx0aCAqL1xcbi5zaGlwLWNvbnRhaW5lci10aXRsZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5oZWFsdGgge1xcbiAgd2lkdGg6IDAuN3JlbTtcXG4gIGhlaWdodDogMC43cmVtO1xcbn1cXG5cXG4uZmxleC1zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnNoaXBzLWNvbnRhaW5lci1wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNweDtcXG59XFxuXFxuLnNoaXBzLWNvbnRhaW5lci1jb21wdXRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3B4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZGVzdHJveWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk3LCA5Nyk7XFxufVxcblxcbi5sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogMC44cmVtO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUsXFxuLnBsYXllci10dXJuIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogc2V0IHNoaXBzICovXFxuXFxuLnNldC1zaGlwcyB7XFxuICBnYXA6IDIuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5zaGlwcy10by1zZXQge1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2VsZWN0LXNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucGFydCB7XFxuICB3aWR0aDogMjcuNTlweDtcXG4gIGhlaWdodDogMjcuNTlweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjM0NjA7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5jb250YWluZXIuaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDIuM3JlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5jb250YWluZXIudmVydGljYWwge1xcbiAgd2lkdGg6IDIuM3JlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGNiYTtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4xcztcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMHB4IDBweCAjMDA2Zjk0O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICNhMjliZmU7XFxufVxcblxcbi5yZXNldC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGQ0ZDtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjY2MzZDNkO1xcbn1cXG5cXG4uY2VsbDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbn1cXG5cXG4uY2VsbC5jbGlja2VkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmRyYWdvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjM0NjA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFiYXMgTmV1ZVxcXCI7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFiYXMgTmV1ZVxcXCI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ud2lubmVyLW1vZGFsIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XFxuICBtYXJnaW4tdG9wOiAtMTUwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgNDUsIDExNCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMzQsIDI0NSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tb2RhbC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud2lubmVyLW1vZGFsIGJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uaGludCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxufVxcblxcbi5oaW50IHVsIGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogXFxcIlxcXFwxRjRBMVxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkJhYmFzIE5ldWVcXFwiO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuLmhpbnQgdWwge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLmNvb3JkcyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnBsYWNlZCA9IGZhbHNlO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIGlmICh0aGlzLmlzU3VuaygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLmNvb3JkcyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnBsYWNlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0SGl0cygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzO1xuICB9XG5cbiAgcmVzZXRDb29yZHMoKSB7XG4gICAgdGhpcy5jb29yZHMgPSBuZXcgU2V0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi4vYmF0dGxlc2hpcC9zaGlwXCI7XG5cbmZ1bmN0aW9uIENlbGwoKSB7XG4gIGxldCB2YWx1ZSA9IFwiflwiO1xuICBsZXQgaGl0ID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICBoaXQsXG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldLnB1c2goQ2VsbCgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNoaXBzID0ge1xuICAgICAgY2FycmllcjogbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuICAgICAgYmF0dGxlc2hpcDogbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLFxuICAgICAgZGVzdHJveWVyOiBuZXcgU2hpcChcImRlc3Ryb3llclwiLCAzKSxcbiAgICAgIHN1Ym1hcmluZTogbmV3IFNoaXAoXCJzdWJtYXJpbmVcIiwgMyksXG4gICAgICBcInBhdHJvbC1ib2F0XCI6IG5ldyBTaGlwKFwicGF0cm9sLWJvYXRcIiwgMiksXG4gICAgfTtcbiAgfVxuXG4gIG1hcmtCdWZmZXJab25lKG5hbWUsIHJvd1N0YXJ0LCBjb2xTdGFydCwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBzdGFydFJvdyA9IHJvd1N0YXJ0IC0gMSA8IDAgPyAwIDogcm93U3RhcnQgLSAxO1xuICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWluKFxuICAgICAgOSxcbiAgICAgIG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICAgICA/IHJvd1N0YXJ0ICsgMVxuICAgICAgICA6IHJvd1N0YXJ0ICsgdGhpcy5zaGlwc1tuYW1lXS5sZW5ndGhcbiAgICApO1xuICAgIGNvbnN0IHN0YXJ0Q29sID0gY29sU3RhcnQgLSAxIDwgMCA/IDAgOiBjb2xTdGFydCAtIDE7XG4gICAgY29uc3QgZW5kQ29sID0gTWF0aC5taW4oXG4gICAgICA5LFxuICAgICAgb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIlxuICAgICAgICA/IGNvbFN0YXJ0ICsgMVxuICAgICAgICA6IGNvbFN0YXJ0ICsgdGhpcy5zaGlwc1tuYW1lXS5sZW5ndGhcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gc3RhcnRDb2w7IGogPD0gZW5kQ29sOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0udmFsdWUgPT09IFwiflwiKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXS52YWx1ZSA9IFwiKlwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwKG5hbWUsIHJvd1N0YXJ0LCBjb2xTdGFydCwgb3JpZW50YXRpb24pIHtcbiAgICBpZiAocm93U3RhcnQgPD0gLTEgfHwgY29sU3RhcnQgPD0gLTEgfHwgcm93U3RhcnQgPj0gMTAgfHwgY29sU3RhcnQgPj0gMTApIHtcbiAgICAgIHJldHVybiBcIk91dCBvZiBib3VuZHNcIjtcbiAgICB9XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHNbbmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbFN0YXJ0ICsgaSA+PSAxMCB8fFxuICAgICAgICAgIHRoaXMuYm9hcmRbcm93U3RhcnRdW2NvbFN0YXJ0ICsgaV0udmFsdWUgIT09IFwiflwiXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYm9hcmRbcm93U3RhcnRdW2NvbFN0YXJ0XS52YWx1ZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzW25hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2hpcHNbbmFtZV0uY29vcmRzLmFkZChgJHtyb3dTdGFydH0sJHtjb2xTdGFydCArIGl9YCk7XG4gICAgICAgIHRoaXMuYm9hcmRbcm93U3RhcnRdW2NvbFN0YXJ0ICsgaV0udmFsdWUgPSBuYW1lWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzW25hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICByb3dTdGFydCArIGkgPj0gMTAgfHxcbiAgICAgICAgICB0aGlzLmJvYXJkW3Jvd1N0YXJ0ICsgaV1bY29sU3RhcnRdLnZhbHVlICE9PSBcIn5cIlxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwc1tuYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNoaXBzW25hbWVdLmNvb3Jkcy5hZGQoYCR7cm93U3RhcnQgKyBpfSwke2NvbFN0YXJ0fWApO1xuICAgICAgICB0aGlzLmJvYXJkW3Jvd1N0YXJ0ICsgaV1bY29sU3RhcnRdLnZhbHVlID0gbmFtZVswXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXJrQnVmZmVyWm9uZShuYW1lLCByb3dTdGFydCwgY29sU3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICB0aGlzLnNoaXBzW25hbWVdLnBsYWNlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhdXRvUGxhY2VTaGlwcygpIHtcbiAgICBjb25zdCBzaGlwcyA9IHRoaXMuc2hpcHM7XG5cbiAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgaWYgKHJhbmRvbSA9PT0gMCkge1xuICAgICAgICBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3JpZW50YXRpb247XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgcmV0dXJuIGNvb3JkO1xuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyhzaGlwcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgc2hpcCA9IHNoaXBzW2tleV07XG5cbiAgICAgIHdoaWxlICghc2hpcC5wbGFjZWQpIHtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoXG4gICAgICAgICAgc2hpcC5uYW1lLFxuICAgICAgICAgIHJhbmRvbU51bWJlcigpLFxuICAgICAgICAgIHJhbmRvbU51bWJlcigpLFxuICAgICAgICAgIHJhbmRvbU9yaWVudGF0aW9uKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gXCJwbGFjZWRcIjtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldLmhpdCkge1xuICAgICAgY29uc29sZS5sb2coYHJvdzoke3h9LCBjb2w6ICR7eX1gKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYm9hcmRbeF1beV0uaGl0KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hpcHMpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5ib2FyZCk7XG4gICAgICByZXR1cm4gXCJUcnkgYWdhaW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQgPSB0cnVlO1xuICAgICAgZm9yIChjb25zdCBzaGlwTmFtZSBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW3NoaXBOYW1lXTtcbiAgICAgICAgaWYgKHNoaXAuY29vcmRzLmhhcyhgJHt4fSwke3l9YCkpIHtcbiAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgIHJldHVybiBcIkhpdCFcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFwiTWlzcyFcIjtcbiAgICB9XG4gIH1cblxuICBjaGVja0ZvckF2YWlsYWJsZVNxdWFyZXMoKSB7XG4gICAgY29uc3QgZnJlZVNwYWNlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBmcmVlU3BhY2VzLnB1c2goW2ksIGpdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnJlZVNwYWNlcztcbiAgfVxuXG4gIGNoZWNrSWZBbGxTaGlwc1N1bmsoKSB7XG4gICAgY29uc3Qgc3Vua1NoaXBzID0gW107XG4gICAgZm9yIChjb25zdCBzaGlwTmFtZSBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBpZiAoc2hpcC5zdW5rKSB7XG4gICAgICAgIHN1bmtTaGlwcy5wdXNoKHNoaXBOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN1bmtTaGlwcy5sZW5ndGggPj0gNSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXNldEdhbWUoKSB7XG4gICAgY29uc3Qgc2hpcHMgPSB0aGlzLnNoaXBzO1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldLnB1c2goQ2VsbCgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IHNoaXAgPSBzaGlwc1trZXldO1xuICAgICAgc2hpcC5yZXNldCgpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hpcHNIaXRzKCkge1xuICAgIGNvbnN0IHNoaXBzID0gdGhpcy5zaGlwcztcbiAgICBsZXQgc2hpcEhpdHNBcnIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhzaGlwcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgc2hpcCA9IHNoaXBzW2tleV07XG4gICAgICBzaGlwSGl0c0Fyci5wdXNoKFtzaGlwLm5hbWUsIHNoaXAuZ2V0SGl0cygpLCBzaGlwLmxlbmd0aF0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzaGlwSGl0c0FycjtcbiAgfVxuXG4gIHByaW50Qm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmRXaXRoQ2VsbFZhbHVlcyA9IHRoaXMuYm9hcmQubWFwKChyb3cpID0+XG4gICAgICByb3cubWFwKChjZWxsKSA9PiBjZWxsLmhpdClcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGJvYXJkV2l0aENlbGxWYWx1ZXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVDb250cm9sbGVyKFxuICBwbGF5ZXJPbmVOYW1lID0gXCJVc2VyXCIsXG4gIHBsYXllclR3b05hbWUgPSBcIkNvbXB1dGVyXCJcbikge1xuICBsZXQgdXNlclBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyT25lTmFtZSk7XG4gIGxldCBjb21wdXRlclBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyVHdvTmFtZSk7XG5cbiAgY29uc3QgcGxheWVycyA9IFt1c2VyUGxheWVyLCBjb21wdXRlclBsYXllcl07XG5cbiAgY29uc3QgcGxhY2VTaGlwcyA9IChhcnIpID0+IHtcbiAgICBhcnIuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICBwbGF5ZXIuYm9hcmQuYXV0b1BsYWNlU2hpcHMoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwbGFjZUNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgcGxheWVyc1sxXS5ib2FyZC5hdXRvUGxhY2VTaGlwcygpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQVNoaXAgPSAobmFtZSwgcm93U3RhcnQsIGNvbFN0YXJ0LCBvcmllbnRhdGlvbikgPT4ge1xuICAgIHVzZXJQbGF5ZXIuYm9hcmQucGxhY2VTaGlwKG5hbWUsIHJvd1N0YXJ0LCBjb2xTdGFydCwgb3JpZW50YXRpb24pO1xuICB9O1xuXG4gIGxldCBhY3RpdmVQbGF5ZXIgPSB1c2VyUGxheWVyO1xuXG4gIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSB1c2VyUGxheWVyID8gY29tcHV0ZXJQbGF5ZXIgOiB1c2VyUGxheWVyO1xuICB9O1xuXG4gIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IHtcbiAgICByZXR1cm4gYWN0aXZlUGxheWVyO1xuICB9O1xuXG4gIGNvbnN0IHNldEFjdGl2ZVBsYXllciA9IChwbGF5ZXIpID0+IHtcbiAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXI7XG4gIH07XG5cbiAgY29uc3QgcHJpbnROZXdSb3VuZCA9ICgpID0+IHtcbiAgICBpZiAoYWN0aXZlUGxheWVyID09PSB1c2VyUGxheWVyKSB7XG4gICAgICBjb21wdXRlclBsYXllci5ib2FyZC5wcmludEJvYXJkKCk7XG4gICAgfSBlbHNlIGlmIChhY3RpdmVQbGF5ZXIgPT09IGNvbXB1dGVyUGxheWVyKSB7XG4gICAgICB1c2VyUGxheWVyLmJvYXJkLnByaW50Qm9hcmQoKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7Z2V0QWN0aXZlUGxheWVyKCkubmFtZX0ncyB0dXJuLmApO1xuICB9O1xuXG4gIGNvbnN0IHJhbmRvbU51bWJlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICByZXR1cm4gY29vcmQ7XG4gIH07XG5cbiAgY29uc3QgYXZhaWxhYmxlQ29tcHV0ZXJNb3ZlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vdmVzQXZhaWxhYmxlID0gY29tcHV0ZXJQbGF5ZXIuYm9hcmQuY2hlY2tGb3JBdmFpbGFibGVTcXVhcmVzKCk7XG4gICAgY29uc3QgW3JvdywgY29sXSA9XG4gICAgICBtb3Zlc0F2YWlsYWJsZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb3Zlc0F2YWlsYWJsZS5sZW5ndGgpXTtcblxuICAgIHJldHVybiBbcm93LCBjb2xdO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChyb3csIGNvbCkgPT4ge1xuICAgIGxldCBhdHRhY2tCb2FyZDtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IHVzZXJQbGF5ZXIpIHtcbiAgICAgIGF0dGFja0JvYXJkID0gY29tcHV0ZXJQbGF5ZXIuYm9hcmQ7XG4gICAgICByZXN1bHQgPSBhdHRhY2tCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiTWlzcyFcIikge1xuICAgICAgICBwcmludE5ld1JvdW5kKCk7XG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcbiAgICAgICAgcmV0dXJuIFwiWW91IG1pc3NlZCFcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIkhpdCFcIikge1xuICAgICAgICBwcmludE5ld1JvdW5kKCk7XG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcbiAgICAgICAgcmV0dXJuIFwiWW91IGhpdCBhIHNoaXAhXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJUcnkgYWdhaW5cIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXR0YWNrQm9hcmQgPSB1c2VyUGxheWVyLmJvYXJkO1xuICAgICAgcmVzdWx0ID0gYXR0YWNrQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICBpZiAocmVzdWx0ID09PSBcIk1pc3MhXCIpIHtcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgICAgIHJldHVybiBcIlRoZSBlbmVteSBtaXNzZWQhXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJIaXQhXCIpIHtcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgICAgIHJldHVybiBcIlRoZXkgaGl0IHlvdXIgc2hpcCFcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gYXR0YWNrQm9hcmQuY2hlY2tGb3JBdmFpbGFibGVTcXVhcmVzKCk7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBtb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb3Zlcy5sZW5ndGgpXTtcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybigpO1xuICAgICAgICByZXN1bHQgPSBhdHRhY2tCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgICAgcmV0dXJuIFwiVHJ5aW5nIGFnYWluXCI7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrRm9yV2luID0gKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHVzZXJQbGF5ZXIuYm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpIHx8XG4gICAgICBjb21wdXRlclBsYXllci5ib2FyZC5jaGVja0lmQWxsU2hpcHNTdW5rKClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci5ib2FyZC5yZXNldEdhbWUoKTtcbiAgICB9KTtcbiAgICBwbGFjZVNoaXBzKHBsYXllcnMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0QWN0aXZlUGxheWVyLFxuICAgIHNldEFjdGl2ZVBsYXllcixcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuLFxuICAgIHByaW50TmV3Um91bmQsXG4gICAgcGxhY2VTaGlwcyxcbiAgICBwbGF5Um91bmQsXG4gICAgcGxheWVycyxcbiAgICByYW5kb21OdW1iZXIsXG4gICAgYXZhaWxhYmxlQ29tcHV0ZXJNb3ZlLFxuICAgIGNoZWNrRm9yV2luLFxuICAgIHJlc2V0LFxuICAgIHBsYWNlQVNoaXAsXG4gICAgcGxhY2VDb21wdXRlclNoaXBzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2NyZWVuQ29udHJvbGxlcihwbGF5ZXIpIHtcbiAgY29uc3QgdXNlckJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyLWJvYXJkXCIpO1xuICBjb25zdCBjb21wdXRlckJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdHRhY2stYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllclR1cm5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllci10dXJuXCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLW1vZGFsXCIpO1xuICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lclwiKTtcbiAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWFnYWluXCIpO1xuICBjb25zdCBzZWxlY3RTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LXNoaXBzXCIpO1xuICBjb25zdCByYW5kb21TaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9tLWJ1dHRvblwiKTtcbiAgY29uc3QgaGludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGludExpXCIpO1xuXG4gIGNvbnN0IGdhbWUgPSBHYW1lQ29udHJvbGxlcihwbGF5ZXIpO1xuICBwbGF5ZXJUdXJuRGl2LnRleHRDb250ZW50ID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lO1xuXG4gIGNvbnN0IGJvYXJkVG9TZXRTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyQm9hcmQgPSBnYW1lLnBsYXllcnNbMF0uYm9hcmQuYm9hcmQ7XG4gICAgY29uc3Qgc2V0U2hpcHNCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0LXVzZXItc2hpcHNcIik7XG4gICAgc2V0U2hpcHNCb2FyZERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICB1c2VyQm9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbHVtbiwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSByb3dJbmRleDtcbiAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LmNvbHVtbiA9IGNvbEluZGV4O1xuICAgICAgICBpZiAoY29sdW1uLnZhbHVlICE9PSBcIn5cIiAmJiBjb2x1bW4udmFsdWUgIT09IFwiKlwiKSB7XG4gICAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFNoaXBzQm9hcmREaXYuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBhdHRhY2hCb2FyZENlbGxMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVVc2VyQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlckJvYXJkID0gZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLmJvYXJkO1xuICAgIHVzZXJCb2FyZERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcGxheWVyVHVybkRpdi50ZXh0Q29udGVudCA9IGAke2dhbWUuZ2V0QWN0aXZlUGxheWVyKCkubmFtZX0ncyB0dXJuYDtcblxuICAgIHVzZXJCb2FyZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sdW1uLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LnJvdyA9IHJvd0luZGV4O1xuICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gY29sSW5kZXg7XG4gICAgICAgIGlmIChjb2x1bW4udmFsdWUgIT09IFwiflwiICYmIGNvbHVtbi52YWx1ZSAhPT0gXCIqXCIpIHtcbiAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4uaGl0KSB7XG4gICAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoY29sdW1uLnZhbHVlID09PSBcImNcIiB8fFxuICAgICAgICAgICAgICBjb2x1bW4udmFsdWUgPT09IFwiYlwiIHx8XG4gICAgICAgICAgICAgIGNvbHVtbi52YWx1ZSA9PT0gXCJkXCIgfHxcbiAgICAgICAgICAgICAgY29sdW1uLnZhbHVlID09PSBcInBcIiB8fFxuICAgICAgICAgICAgICBjb2x1bW4udmFsdWUgPT09IFwic1wiKSAmJlxuICAgICAgICAgICAgY29sdW1uLmhpdFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKTtcbiAgICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXNlckJvYXJkRGl2LmFwcGVuZENoaWxkKGNlbGxCdXR0b24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQ29tcHV0ZXJCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZ2FtZS5wbGF5ZXJzWzFdLmJvYXJkLmJvYXJkO1xuXG4gICAgY29tcHV0ZXJCb2FyZERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcGxheWVyVHVybkRpdi50ZXh0Q29udGVudCA9IGAke2dhbWUuZ2V0QWN0aXZlUGxheWVyKCkubmFtZX0ncyB0dXJuYDtcblxuICAgIGNvbXB1dGVyQm9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbHVtbiwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSByb3dJbmRleDtcbiAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LmNvbHVtbiA9IGNvbEluZGV4O1xuXG4gICAgICAgIGlmIChjb2x1bW4uaGl0KSB7XG4gICAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChjb2x1bW4udmFsdWUgPT09IFwiY1wiIHx8XG4gICAgICAgICAgICAgIGNvbHVtbi52YWx1ZSA9PT0gXCJiXCIgfHxcbiAgICAgICAgICAgICAgY29sdW1uLnZhbHVlID09PSBcImRcIiB8fFxuICAgICAgICAgICAgICBjb2x1bW4udmFsdWUgPT09IFwicFwiIHx8XG4gICAgICAgICAgICAgIGNvbHVtbi52YWx1ZSA9PT0gXCJzXCIpICYmXG4gICAgICAgICAgICBjb2x1bW4uaGl0XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXNzXCIpO1xuICAgICAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZXJCb2FyZERpdi5hcHBlbmRDaGlsZChjZWxsQnV0dG9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNvbXB1dGVyVHVybigpIHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gZ2FtZS5hdmFpbGFibGVDb21wdXRlck1vdmUoKTtcbiAgICBnYW1lLnBsYXlSb3VuZChyb3csIGNvbCk7XG4gICAgdXBkYXRlVXNlckJvYXJkKCk7XG4gICAgdXBkYXRlU2hpcEhlYWx0aChnYW1lLnBsYXllcnNbMF0sIFwiLnNoaXBzLWNvbnRhaW5lci1wbGF5ZXJcIik7XG4gICAgdXBkYXRlU2hpcEhlYWx0aChnYW1lLnBsYXllcnNbMV0sIFwiLnNoaXBzLWNvbnRhaW5lci1jb21wdXRlclwiKTtcblxuICAgIGlmIChjaGVja0Zvcldpbm5lcigpKSByZXR1cm47XG4gICAgY29tcHV0ZXJCb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyQm9hcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyQm9hcmQoZSkge1xuICAgIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3c7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtbjtcblxuICAgIGlmICghc2VsZWN0ZWRDb2x1bW4pIHJldHVybjtcbiAgICBpZiAoIXNlbGVjdGVkUm93KSByZXR1cm47XG5cbiAgICBnYW1lLnBsYXlSb3VuZChzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW4pO1xuXG4gICAgLy8gZ2FtZS5wbGF5Um91bmQoc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uKTtcbiAgICBjb21wdXRlckJvYXJkRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXJCb2FyZCk7XG4gICAgdXBkYXRlVXNlckJvYXJkKCk7XG4gICAgdXBkYXRlQ29tcHV0ZXJCb2FyZCgpO1xuICAgIHVwZGF0ZVNoaXBIZWFsdGgoZ2FtZS5wbGF5ZXJzWzBdLCBcIi5zaGlwcy1jb250YWluZXItcGxheWVyXCIpO1xuICAgIHVwZGF0ZVNoaXBIZWFsdGgoZ2FtZS5wbGF5ZXJzWzFdLCBcIi5zaGlwcy1jb250YWluZXItY29tcHV0ZXJcIik7XG4gICAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHJldHVybjtcblxuICAgIGlmIChnYW1lLmdldEFjdGl2ZVBsYXllcigpID09PSBnYW1lLnBsYXllcnNbMV0pIHtcbiAgICAgIHNldFRpbWVvdXQoY29tcHV0ZXJUdXJuLCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcHV0ZXJCb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyQm9hcmQpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbik7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0Zvcldpbm5lcigpIHtcbiAgICBpZiAoZ2FtZS5jaGVja0ZvcldpbigpKSB7XG4gICAgICBpZiAoZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKSA9PT0gZ2FtZS5wbGF5ZXJzWzFdKSB7XG4gICAgICAgIGRpc3BsYXlXaW5Nb2RhbChnYW1lLnBsYXllcnNbMF0ubmFtZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheVdpbk1vZGFsKGdhbWUucGxheWVyc1sxXS5uYW1lKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlXaW5Nb2RhbCh3aW5uZXJOYW1lKSB7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID0gYCR7d2lubmVyTmFtZX0gd2lucyFgO1xuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgIGNvbnNvbGUubG9nKFwiZG9kdWVcIik7XG5cbiAgICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0R2FtZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gICAgY29uc3Qgc2V0U2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldC1zaGlwc1wiKTtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25zXCIpO1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGdhbWUucmVzZXQoKTtcbiAgICBnYW1lLnNldEFjdGl2ZVBsYXllcihnYW1lLnBsYXllcnNbMF0pO1xuICAgIHVwZGF0ZVVzZXJCb2FyZCgpO1xuICAgIHVwZGF0ZUNvbXB1dGVyQm9hcmQoKTtcbiAgICB1cGRhdGVTaGlwSGVhbHRoKGdhbWUucGxheWVyc1swXSwgXCIuc2hpcHMtY29udGFpbmVyLXBsYXllclwiKTtcbiAgICB1cGRhdGVTaGlwSGVhbHRoKGdhbWUucGxheWVyc1sxXSwgXCIuc2hpcHMtY29udGFpbmVyLWNvbXB1dGVyXCIpO1xuICAgIHNldFNoaXBzLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIGJ1dHRvbnMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBoaW50LmlubmVySFRNTCA9IGBEcmFnIFNoaXBzIG9udG8gYm9hcmQuIENsaWNrIHNoaXBzIHRvIHJvdGF0ZSBiZWZvcmUgZHJhZ2dpbmcuPGJyIC8+XG4gICAgICAgICAgICBTaGlwcyBjYW5ub3QgbW92ZSBvbmNlIHBsYWNlZC5gO1xuICAgIHNoaXBTdGF0ZS5yZXNldFNoaXBzKCk7XG4gICAgbW9kYWwuY2xvc2UoKTtcbiAgICBjb21wdXRlckJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXJCb2FyZCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTaGlwSGVhbHRoKHBsYXllciwgY29udGFpbmVyKSB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKTtcbiAgICBzaGlwQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3Qgc2hpcHNIZWFsdGggPSBwbGF5ZXIuYm9hcmQuc2hpcHNIaXRzKCk7XG5cbiAgICBzaGlwc0hlYWx0aC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQmFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwQmFycy5jbGFzc0xpc3QuYWRkKFwiZmxleC1zaGlwXCIpO1xuICAgICAgc2hpcEJhcnMuaWQgPSBzaGlwWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIiBcIiwgXCItXCIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBbMl07IGkrKykge1xuICAgICAgICBjb25zdCBzaGlwUGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNoaXBQYXJ0LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIsIFwiaGVhbHRoXCIpO1xuICAgICAgICBpZiAoaSA8IHNoaXBbMV0pIHtcbiAgICAgICAgICBzaGlwUGFydC5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBCYXJzLmFwcGVuZChzaGlwUGFydCk7XG4gICAgICB9XG4gICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZChzaGlwQmFycyk7XG4gICAgfSk7XG4gIH1cblxuICBib2FyZFRvU2V0U2hpcHMoKTtcbiAgY29tcHV0ZXJCb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyQm9hcmQpO1xuICB1cGRhdGVVc2VyQm9hcmQoKTtcbiAgdXBkYXRlQ29tcHV0ZXJCb2FyZCgpO1xuXG4gIGxldCBzaGlwU3RhdGUgPSBzYXZlU2hpcHNUb1NldCgpO1xuXG4gIGZ1bmN0aW9uIHNhdmVTaGlwc1RvU2V0KCkge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXQtYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgaW5pdGlhbFNoaXBTdGF0ZSA9IFsuLi5zZWxlY3RTaGlwcy5jaGlsZHJlbl0ubWFwKChjb250YWluZXIpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnQ6IGNvbnRhaW5lcixcbiAgICAgICAgcGFyZW50OiBjb250YWluZXIucGFyZW50Tm9kZSxcbiAgICAgICAgbmV4dFNpYmxpbmc6IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGluaXRpYWxTaGlwU3RhdGUpO1xuICAgIGNvbnNvbGUubG9nKGJvYXJkKTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0U2hpcHMoKSB7XG4gICAgICBpbml0aWFsU2hpcFN0YXRlLmZvckVhY2goKHsgZWxlbWVudCwgcGFyZW50LCBuZXh0U2libGluZyB9KSA9PiB7XG4gICAgICAgIGlmIChuZXh0U2libGluZykge1xuICAgICAgICAgIHBhcmVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjbGVhckJvYXJkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJCb2FyZCgpIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xuICAgICAgZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLnJlc2V0R2FtZSgpO1xuICAgICAgZ2FtZS5wbGF5ZXJzWzBdLmJvYXJkLmJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC52YWx1ZSA9IFwiflwiO1xuICAgICAgfSk7XG4gICAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiLCBcIm1pc3NcIiwgXCJzaGlwXCIsIFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgfSk7XG4gICAgICB1cGRhdGVVc2VyQm9hcmQoKTtcbiAgICB9XG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0U2hpcHMpO1xuICAgIHJldHVybiB7XG4gICAgICBpbml0aWFsU2hpcFN0YXRlLFxuICAgICAgcmVzZXRTaGlwcyxcbiAgICAgIGNsZWFyQm9hcmQsXG4gICAgfTtcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNoaXBTdGF0ZSk7XG5cbiAgbGV0IGRyYWdnZWRTaGlwID0gbnVsbDtcbiAgbGV0IGN1cnJlbnRPcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuICBjb25zdCBvcHRpb25TaGlwcyA9IEFycmF5LmZyb20oc2VsZWN0U2hpcHMuY2hpbGRyZW4pO1xuICBvcHRpb25TaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTdGFydCk7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBkcmFnRW5kKTtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VPcmllbnRhdGlvbik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gICAgZHJhZ2dlZFNoaXAgPSBlLnRhcmdldDtcbiAgICBjdXJyZW50T3JpZW50YXRpb24gPSBkcmFnZ2VkU2hpcC5kYXRhc2V0Lm9yaWVudDtcbiAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYERyYWcgc3RhcnRlZDogJHtkcmFnZ2VkU2hpcC5kYXRhc2V0LmlkfSwgT3JpZW50YXRpb246ICR7Y3VycmVudE9yaWVudGF0aW9ufWBcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhZ0VuZCgpIHtcbiAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgZHJhZ2dlZFNoaXAgPSBudWxsO1xuXG4gICAgY29uc29sZS5sb2coXCJEcmFnIGVuZGVkXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlT3JpZW50YXRpb24oZSkge1xuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc29sZS5sb2coc2hpcENvbnRhaW5lcik7XG4gICAgY29uc3QgY3VycmVudE9yaWVudGF0aW9uID0gc2hpcENvbnRhaW5lci5kYXRhc2V0Lm9yaWVudDtcbiAgICBjb25zdCBuZXdPcmllbnRhdGlvbiA9XG4gICAgICBjdXJyZW50T3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgc2hpcENvbnRhaW5lci5kYXRhc2V0Lm9yaWVudCA9IG5ld09yaWVudGF0aW9uO1xuXG4gICAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCJob3Jpem9udGFsXCIsXG4gICAgICBuZXdPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCJcbiAgICApO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIsIG5ld09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNoQm9hcmRDZWxsTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGFsbFBsYXllclNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NldC11c2VyLXNoaXBzIGRpdlwiKTtcbiAgICBhbGxQbGF5ZXJTcXVhcmVzLmZvckVhY2goKHBsYXllclNxdWFyZSkgPT4ge1xuICAgICAgcGxheWVyU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnT3Zlcik7XG4gICAgICBwbGF5ZXJTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcFNoaXApO1xuICAgICAgcGxheWVyU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgZHJhZ0VudGVyKTtcbiAgICAgIHBsYXllclNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIGRyYWdMZWF2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmFnRW50ZXIoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZHJhZ292ZXJcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhZ0xlYXZlKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdvdmVyXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wU2hpcChlKSB7XG4gICAgaWYgKGRyYWdnZWRTaGlwID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3Qgc3RhcnRJZCA9IFtlLnRhcmdldC5kYXRhc2V0LnJvdywgZS50YXJnZXQuZGF0YXNldC5jb2x1bW5dO1xuICAgIGNvbnN0IHNoaXAgPSBnYW1lLnBsYXllcnNbMF0uYm9hcmQuc2hpcHNbZHJhZ2dlZFNoaXAuZGF0YXNldC5pZF07XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBkcmFnZ2VkU2hpcC5kYXRhc2V0Lm9yaWVudDtcbiAgICBnYW1lLnBsYWNlQVNoaXAoXG4gICAgICBzaGlwLm5hbWUsXG4gICAgICBwYXJzZUludChzdGFydElkWzBdKSxcbiAgICAgIHBhcnNlSW50KHN0YXJ0SWRbMV0pLFxuICAgICAgb3JpZW50YXRpb25cbiAgICApO1xuXG4gICAgaWYgKHNoaXAucGxhY2VkKSB7XG4gICAgICBkcmFnZ2VkU2hpcC5yZW1vdmUoKTtcbiAgICB9XG4gICAgYm9hcmRUb1NldFNoaXBzKCk7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21QbGFjZW1lbnQoKSB7XG4gICAgcmVzZXRHYW1lKCk7XG4gICAgZ2FtZS5wbGFjZVNoaXBzKGdhbWUucGxheWVycyk7XG4gICAgc2VsZWN0U2hpcHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGJvYXJkVG9TZXRTaGlwcygpO1xuICB9XG5cbiAgZnVuY3Rpb24ganVzdENvbXB1dGVyUmFuZG9tU2hpcHMoKSB7XG4gICAgZ2FtZS5wbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICB1cGRhdGVDb21wdXRlckJvYXJkKCk7XG4gIH1cblxuICByYW5kb21TaGlwcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmFuZG9tUGxhY2VtZW50KTtcbiAgdXBkYXRlU2hpcEhlYWx0aChnYW1lLnBsYXllcnNbMF0sIFwiLnNoaXBzLWNvbnRhaW5lci1wbGF5ZXJcIik7XG4gIHVwZGF0ZVNoaXBIZWFsdGgoZ2FtZS5wbGF5ZXJzWzFdLCBcIi5zaGlwcy1jb250YWluZXItY29tcHV0ZXJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVVc2VyQm9hcmQsXG4gICAgdXBkYXRlQ29tcHV0ZXJCb2FyZCxcbiAgICBqdXN0Q29tcHV0ZXJSYW5kb21TaGlwcyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gU3RhcnRHYW1lKCkge1xuICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IHNldFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXQtc2hpcHNcIik7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbnNcIik7XG4gIGNvbnN0IHNlbGVjdFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3Qtc2hpcHNcIik7XG4gIGNvbnN0IGhpbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpbnRMaVwiKTtcblxuICBjb25zdCBnYW1lID0gU2NyZWVuQ29udHJvbGxlcigpO1xuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoc2VsZWN0U2hpcHMuY2hpbGRyZW4ubGVuZ3RoID4gMCkgcmV0dXJuO1xuICAgIGdhbWUudXBkYXRlVXNlckJvYXJkKCk7XG4gICAgZ2FtZS5qdXN0Q29tcHV0ZXJSYW5kb21TaGlwcygpO1xuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBzZXRTaGlwcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYnV0dG9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaGludC5pbm5lckhUTUwgPSBgQ2xpY2sgYm9hcmQgdG8gYXR0YWNrLiA8c3BhbiBjbGFzcz1cImhpdFwiPlJlZDwvc3Bhbj4gaXMgYSBoaXQsIDxzcGFuIGNsYXNzPVwibWlzc1wiPkdyZWVuPC9zcGFuPiBpcyBhIG1pc3MuYDtcbiAgfVxuXG4gIHN0YXJ0R2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnQpO1xufVxuXG5TdGFydEdhbWUoKTtcbiIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuLi9nYW1lYm9hcmQvZ2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=