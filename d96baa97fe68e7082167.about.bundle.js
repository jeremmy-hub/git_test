/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css_files/about.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css_files/about.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/mainhotel.jpg */ "./src/images/mainhotel.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/manager.svg */ "./src/images/manager.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/board.svg */ "./src/images/board.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/receptionist.svg */ "./src/images/receptionist.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/chefs.svg */ "./src/images/chefs.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/invst.svg */ "./src/images/invst.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/51840c4d9c8568a0c03f165c21c0c78d_XL.svg */ "./src/images/51840c4d9c8568a0c03f165c21c0c78d_XL.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --max-width: 100vw;
    --max-height: 200vh;
      --primary-color: #0e7364;
    --primary-bg-color: #87deac;
    --footer-bg: hsl(256, 76%, 5%);
    --primary-txt-color: #edd832;
}

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0%;
    font-size: 12px;
}

body{
    display: grid;
    width: var(--max-width);
    align-items: center;
    justify-content: center;
    height: var(--max-height);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    overflow-x: hidden;

}


.about-main-container{
    display: grid;
    width: var(--max-width);
    grid-template-rows: .5fr 25fr .5fr;

}


.about-header-container{
    display: grid;
    position: sticky;
    width: var(--max-width);
    top: 0;
    z-index: 10;
    grid-template-columns: 1fr 10fr 1fr;
    background-color: rgba(8,24,24, 0.9);
}

.menu{
    position: relative;
}



.header-links{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 2vw;
}

.header-links a{
    text-decoration: none;
    color: var(--primary-txt-color);
    text-transform: uppercase;
    font-family: 'Croissant One', serif;  
}

.header-links a:hover:not(.special){
    font-family: 'Josefin Sans', sans-serif;
    color: hsl(120, 71%, 81%);
    box-shadow: 1px 1px 10px #fff;
    padding: 1vw;
    border-radius: 1vw;
}


.header-btn-container{
    text-align: center;
    display: grid;

}

.marketing-pik-container{
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 2vh;
    
}


.about-content-container{
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 10vh;
}

.content{
    display: grid;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-right-radius: 30%;
    padding: 3vw;
  
}

.content-item-text{
    display: grid;
    font-family: 'Tilt Neon', sans-serif;
    color: #0ae418;
}

.text-content{
    display: grid;
    width: 50vw;
    text-transform: capitalize;
    color: black;
    background-image: linear-gradient(to left, var(--primary-txt-color), rgba(8,24,24, 0.9));
    border-radius: 2vw;
    padding: 2vw;
    
    
}

.text-content > div{
    font-size: .8em;
    
}


.text-content:hover{
    background-color: var(--primary-txt-color);
    box-shadow: 1px 1px 50px var(--primary-txt-color), 1px 1px 50px #fff;
    transform: scale(1.02);
    
    /* animation: bg-changer 10s ease-in-out forwards; */
    
}

.manager{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    
}


.board{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.receptionist{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    
}

.chiefchef{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

.investors{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) ;
 
}

.staff{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}

.manager-txt{
    justify-self: flex-end;
    align-self: flex-end;
}

.board-txt{
    align-self: flex-end;
}

.receptionist-txt{
    justify-self: flex-end;
}

.chef-txt{
    justify-self: center;
    align-self: flex-end;
}

.staff-txt{
    justify-self: center;
    align-self: flex-end;
}

.investors-txt{
    align-self: flex-end;
}


.about-footer-container{
    background-color: var(--footer-bg);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: baseline;
    justify-content: center;
    font-family: 'Croissant One', serif;
}

.footer-item{
    color: white;
    padding: 2vw;
}


.social-link{
    border: 1px solid transparent;
    outline: 1px solid white;
    outline-offset: 2px;
    display: grid;
    align-items: center;
    justify-content: center;
    padding: .5vw;
    border-radius: 5px;
    background-color: #fff;
}

#social-links{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2vw;
    align-items: end;
    justify-content: center;
}

#contact-info{
    font-size: .7em;
    text-transform: uppercase;
}

.social-link a{
    text-decoration: none;
    color: #505ec7;
    font-family: 'Croissant One', serif;
    font-size: .2em;
}

@keyframes bg-changer {
    0%{background-image: linear-gradient(to left, rgba(8,24,24, 0.9), var(--primary-txt-color));}


    30%{background-image: linear-gradient(to left, var(--primary-txt-color), rgba(8,24,24, 0.9));}


    60%{background-image: linear-gradient(to left, rgba(8,24,24, 0.9),var(--primary-txt-color));}


    90%{background-image: linear-gradient(to left, var(--primary-txt-color), rgba(8,24,24, 0.9));}
    
    100%{background-image: linear-gradient(to left, rgba(8,24,24, 0.9),var(--primary-txt-color));}
}`, "",{"version":3,"sources":["webpack://./src/css_files/about.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mBAAmB;MACjB,wBAAwB;IAC1B,2BAA2B;IAC3B,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,yDAAgD;IAChD,sBAAsB;IACtB,kBAAkB;;AAEtB;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,kCAAkC;;AAEtC;;;AAGA;IACI,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,MAAM;IACN,WAAW;IACX,mCAAmC;IACnC,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;AACtB;;;;AAIA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,+BAA+B;IAC/B,yBAAyB;IACzB,mCAAmC;AACvC;;AAEA;IACI,uCAAuC;IACvC,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;AACtB;;;AAGA;IACI,kBAAkB;IAClB,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,kCAAkC;IAClC,aAAa;;AAEjB;;;AAGA;IACI,aAAa;IACb,kCAAkC;IAClC,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;IAC5B,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,0BAA0B;IAC1B,YAAY;IACZ,wFAAwF;IACxF,kBAAkB;IAClB,YAAY;;;AAGhB;;AAEA;IACI,eAAe;;AAEnB;;;AAGA;IACI,0CAA0C;IAC1C,oEAAoE;IACpE,sBAAsB;;IAEtB,oDAAoD;;AAExD;;AAEA;IACI,yDAA8C;;AAElD;;;AAGA;IACI,yDAA4C;AAChD;;AAEA;IACI,yDAAmD;;AAEvD;;AAEA;IACI,yDAA4C;AAChD;;AAEA;IACI,0DAA6C;;AAEjD;;AAEA;IACI,yDAA0E;AAC9E;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;;AAGA;IACI,kCAAkC;IAClC,aAAa;IACb,qCAAqC;IACrC,qBAAqB;IACrB,uBAAuB;IACvB,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;;AAGA;IACI,6BAA6B;IAC7B,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,aAAa;IACb,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,GAAG,wFAAwF,CAAC;;;IAG5F,IAAI,wFAAwF,CAAC;;;IAG7F,IAAI,uFAAuF,CAAC;;;IAG5F,IAAI,wFAAwF,CAAC;;IAE7F,KAAK,uFAAuF,CAAC;AACjG","sourcesContent":[":root{\n    --max-width: 100vw;\n    --max-height: 200vh;\n      --primary-color: #0e7364;\n    --primary-bg-color: #87deac;\n    --footer-bg: hsl(256, 76%, 5%);\n    --primary-txt-color: #edd832;\n}\n\n*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0%;\n    font-size: 12px;\n}\n\nbody{\n    display: grid;\n    width: var(--max-width);\n    align-items: center;\n    justify-content: center;\n    height: var(--max-height);\n    background-image: url('../images/mainhotel.jpg');\n    background-size: cover;\n    overflow-x: hidden;\n\n}\n\n\n.about-main-container{\n    display: grid;\n    width: var(--max-width);\n    grid-template-rows: .5fr 25fr .5fr;\n\n}\n\n\n.about-header-container{\n    display: grid;\n    position: sticky;\n    width: var(--max-width);\n    top: 0;\n    z-index: 10;\n    grid-template-columns: 1fr 10fr 1fr;\n    background-color: rgba(8,24,24, 0.9);\n}\n\n.menu{\n    position: relative;\n}\n\n\n\n.header-links{\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    align-items: center;\n    justify-content: center;\n    grid-gap: 2vw;\n}\n\n.header-links a{\n    text-decoration: none;\n    color: var(--primary-txt-color);\n    text-transform: uppercase;\n    font-family: 'Croissant One', serif;  \n}\n\n.header-links a:hover:not(.special){\n    font-family: 'Josefin Sans', sans-serif;\n    color: hsl(120, 71%, 81%);\n    box-shadow: 1px 1px 10px #fff;\n    padding: 1vw;\n    border-radius: 1vw;\n}\n\n\n.header-btn-container{\n    text-align: center;\n    display: grid;\n\n}\n\n.marketing-pik-container{\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    grid-template-rows: repeat(3, 1fr);\n    grid-gap: 2vh;\n    \n}\n\n\n.about-content-container{\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 10vh;\n}\n\n.content{\n    display: grid;\n    align-items: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    border-top-right-radius: 30%;\n    padding: 3vw;\n  \n}\n\n.content-item-text{\n    display: grid;\n    font-family: 'Tilt Neon', sans-serif;\n    color: #0ae418;\n}\n\n.text-content{\n    display: grid;\n    width: 50vw;\n    text-transform: capitalize;\n    color: black;\n    background-image: linear-gradient(to left, var(--primary-txt-color), rgba(8,24,24, 0.9));\n    border-radius: 2vw;\n    padding: 2vw;\n    \n    \n}\n\n.text-content > div{\n    font-size: .8em;\n    \n}\n\n\n.text-content:hover{\n    background-color: var(--primary-txt-color);\n    box-shadow: 1px 1px 50px var(--primary-txt-color), 1px 1px 50px #fff;\n    transform: scale(1.02);\n    \n    /* animation: bg-changer 10s ease-in-out forwards; */\n    \n}\n\n.manager{\n    background-image: url('../images/manager.svg');\n    \n}\n\n\n.board{\n    background-image: url('../images/board.svg');\n}\n\n.receptionist{\n    background-image: url('../images/receptionist.svg');\n    \n}\n\n.chiefchef{\n    background-image: url('../images/chefs.svg');\n}\n\n.investors{\n    background-image: url('../images/invst.svg') ;\n \n}\n\n.staff{\n    background-image: url('../images/51840c4d9c8568a0c03f165c21c0c78d_XL.svg');\n}\n\n.manager-txt{\n    justify-self: flex-end;\n    align-self: flex-end;\n}\n\n.board-txt{\n    align-self: flex-end;\n}\n\n.receptionist-txt{\n    justify-self: flex-end;\n}\n\n.chef-txt{\n    justify-self: center;\n    align-self: flex-end;\n}\n\n.staff-txt{\n    justify-self: center;\n    align-self: flex-end;\n}\n\n.investors-txt{\n    align-self: flex-end;\n}\n\n\n.about-footer-container{\n    background-color: var(--footer-bg);\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: baseline;\n    justify-content: center;\n    font-family: 'Croissant One', serif;\n}\n\n.footer-item{\n    color: white;\n    padding: 2vw;\n}\n\n\n.social-link{\n    border: 1px solid transparent;\n    outline: 1px solid white;\n    outline-offset: 2px;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    padding: .5vw;\n    border-radius: 5px;\n    background-color: #fff;\n}\n\n#social-links{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2vw;\n    align-items: end;\n    justify-content: center;\n}\n\n#contact-info{\n    font-size: .7em;\n    text-transform: uppercase;\n}\n\n.social-link a{\n    text-decoration: none;\n    color: #505ec7;\n    font-family: 'Croissant One', serif;\n    font-size: .2em;\n}\n\n@keyframes bg-changer {\n    0%{background-image: linear-gradient(to left, rgba(8,24,24, 0.9), var(--primary-txt-color));}\n\n\n    30%{background-image: linear-gradient(to left, var(--primary-txt-color), rgba(8,24,24, 0.9));}\n\n\n    60%{background-image: linear-gradient(to left, rgba(8,24,24, 0.9),var(--primary-txt-color));}\n\n\n    90%{background-image: linear-gradient(to left, var(--primary-txt-color), rgba(8,24,24, 0.9));}\n    \n    100%{background-image: linear-gradient(to left, rgba(8,24,24, 0.9),var(--primary-txt-color));}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css_files/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css_files/index.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Waiter-pizzeria-1024x683.jpg */ "./src/images/Waiter-pizzeria-1024x683.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg */ "./src/images/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Cookies-and-cream-milkshake-500x500.jpg */ "./src/images/Cookies-and-cream-milkshake-500x500.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Healthy-Oven-Roasted-Pork-3x2-055-bbcd2b5b79904af4a26a9a4f63223e4a.jpg */ "./src/images/Healthy-Oven-Roasted-Pork-3x2-055-bbcd2b5b79904af4a26a9a4f63223e4a.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/air-fryer-chips-featured-d.jpg */ "./src/images/air-fryer-chips-featured-d.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/body-scrubbing.jpg */ "./src/images/body-scrubbing.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bednbrk.jpg */ "./src/images/bednbrk.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Aqua-Play-family-1-1920x1195.jpg */ "./src/images/Aqua-Play-family-1-1920x1195.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/conference.jpg */ "./src/images/conference.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/swimmingpool.jpeg */ "./src/images/swimmingpool.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --primary-color: #0e7364;
    --primary-bg-color: #87deac;
    --footer-bg: hsl(256, 76%, 5%);
    --primary-width: calc(100vw / 3);
    --primary-height: calc(200vh / 3);
    --mainHeight : 200vh;
    --main-width: 100vw;
    --primary-txt-color: #edd832;

}

*{
    box-sizing: border-box;
    padding: 0%;
    font-size: clamp(6px, 1.5vw, 16px);

}

body{
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: auto;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    overflow-x: hidden;
    background-attachment: fixed;

}

.main-container{ 
    display: grid;
    width: 100%;
    height: 100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-attachment: fixed;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    grid-template-rows: calc(5 / var(--mainHeight)) calc(80 / var(--mainHeight)) calc(20 / var(--mainHeight));
    grid-gap: 3vw;
}


.header-container{
    display: grid;
    position: sticky;
    top: 0;
    z-index: 10;
    grid-template-columns: 1fr 10fr 1fr;
    background-color: rgba(8,24,24, 0.9);
}

.menu{
    position: relative;
}



.header-links{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 2vw;
}

.header-links  a{
    text-decoration: none;
    color: var(--primary-txt-color);
    text-transform: uppercase;
    font-weight: 800;
    font-size: 3vmin;
    font-family: 'Croissant One', serif;
    
}

.header-links a:hover{
    font-family: 'Josefin Sans', sans-serif;
    color: hsl(325, 82%, 24%);
}

.header-btn-container{
    text-align: center;
    display: grid;

}


.marketing-pik-container{
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 2vh;
    
}


.megatron-text{
    font-size: 1.5em;
    font-family: 'Croissant One', serif;
    font-weight: 800;
    letter-spacing: .2em;
    text-transform: uppercase;
    line-height: 1.5em;
    color: #661962;
    background-color: var(--primary-bg-color);
    padding: 1em;
    opacity: .7;
    animation: anime 5s ease-in-out infinite;
}

.main-content-two{
    display: grid;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
    grid-gap: 2vw;
}

.pizza-dish{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});

}
.milk-dish{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});

}
.pork-dish{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});

}
.chips-dish{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});

}

.dishes-advert{
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom-left-radius: 2vmin;
    border-top-right-radius: 2vmin;
    border-top: 10px solid var(--primary-color);
    box-shadow: 0px 0px 100px rgb(228, 95, 6), 0px 0px 90px 40px black inset;
    /* border-bottom:10px solid var(--primary-color); */
}

.dishes-advert > a:hover{
    transform: scale(1.02,1.02);
    opacity: 1;
}

.dishes-advert > a{
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 600;
    opacity: .9;
    transition: transform 5s linear forwards;
}

.dish-para{
    background-color: #070c09;
    margin: 2vw;
    text-transform: capitalize;
    padding: 1vw;
    color: var(--primary-txt-color);
    border-radius: inherit;
    font-size: .5em;
}


.main-content-three{
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    height: 100%;
    grid-gap: 2vw;
}

.main-content-three-item{
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    align-items: center;
    justify-items: center;
    background-size: cover;
    box-shadow: 0px 0px 100px rgb(228, 95, 6), 0px 0px 90px 40px black inset;

}

.spa{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});    
}

.rooms{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
 }

.kidsplay{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}
 .conference{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
 }

.swimmingpool{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
}

.footer-container{
    background-color: var(--footer-bg);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(20 / var(--mainHeight));
    align-items: center;
    justify-content: center;
}

.footer-item{
    --footer-height: calc(20 / var(--mainHeight));
    color: white;
    padding: calc(var(--footer-height) / 4 );
}


.footer-container{
    background-color: var(--footer-bg);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(20 / var(--max-height));
    align-items: center;
    justify-content: center;
}

.footer-item{
    color: white;
    padding: 2vw;
}


.social-link{
    border: 1px solid transparent;
    outline: 1px solid white;
    outline-offset: 3px;
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    border-radius: 5px;
    background-color: #fff;
}

#social-links{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2vw;
    align-content: center;
    justify-content: center;
}

.social-link a{
    text-decoration: none;
    color: #505ec7;
    font-family: 'Croissant One', serif;
    font-size: .2em;
}


@keyframes anime {
    0%{
        box-shadow: 0px 0px 50px rgb(129, 8, 89) inset, 0px 0px 30px 10px hotpink;
    }
    
    20%{
        box-shadow: 0px 0px 50px rgb(133, 58, 108) inset, 0px 0px 30px 10px hotpink;
    }
    
    50%{
        box-shadow: 0px 0px 50px black inset, 0px 0px 30px 10px hotpink;
    }

    70%{
        box-shadow: 0px 0px 50px rgb(102, 84, 84) inset, 0px 0px 30px 10px hotpink;
    }

    100%{
        box-shadow: 0px 0px 50px rgb(102, 15, 76) inset, 0px 0px 30px 10px hotpink;
    }
}




`, "",{"version":3,"sources":["webpack://./src/css_files/index.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --primary-color: #0e7364;\n    --primary-bg-color: #87deac;\n    --footer-bg: hsl(256, 76%, 5%);\n    --primary-width: calc(100vw / 3);\n    --primary-height: calc(200vh / 3);\n    --mainHeight : 200vh;\n    --main-width: 100vw;\n    --primary-txt-color: #edd832;\n\n}\n\n*{\n    box-sizing: border-box;\n    padding: 0%;\n    font-size: clamp(6px, 1.5vw, 16px);\n\n}\n\nbody{\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    margin: auto;\n    background-image: url('../images/Waiter-pizzeria-1024x683.jpg');\n    background-size: cover;\n    overflow-x: hidden;\n    background-attachment: fixed;\n\n}\n\n.main-container{ \n    display: grid;\n    width: 100%;\n    height: 100%;\n    background-image: url('../images/Waiter-pizzeria-1024x683.jpg');\n    background-attachment: fixed;\n    background-position: 50% 50%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    grid-template-rows: calc(5 / var(--mainHeight)) calc(80 / var(--mainHeight)) calc(20 / var(--mainHeight));\n    grid-gap: 3vw;\n}\n\n\n.header-container{\n    display: grid;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n    grid-template-columns: 1fr 10fr 1fr;\n    background-color: rgba(8,24,24, 0.9);\n}\n\n.menu{\n    position: relative;\n}\n\n\n\n.header-links{\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    align-items: center;\n    justify-content: center;\n    grid-gap: 2vw;\n}\n\n.header-links  a{\n    text-decoration: none;\n    color: var(--primary-txt-color);\n    text-transform: uppercase;\n    font-weight: 800;\n    font-size: 3vmin;\n    font-family: 'Croissant One', serif;\n    \n}\n\n.header-links a:hover{\n    font-family: 'Josefin Sans', sans-serif;\n    color: hsl(325, 82%, 24%);\n}\n\n.header-btn-container{\n    text-align: center;\n    display: grid;\n\n}\n\n\n.marketing-pik-container{\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    grid-template-rows: repeat(3, 1fr);\n    grid-gap: 2vh;\n    \n}\n\n\n.megatron-text{\n    font-size: 1.5em;\n    font-family: 'Croissant One', serif;\n    font-weight: 800;\n    letter-spacing: .2em;\n    text-transform: uppercase;\n    line-height: 1.5em;\n    color: #661962;\n    background-color: var(--primary-bg-color);\n    padding: 1em;\n    opacity: .7;\n    animation: anime 5s ease-in-out infinite;\n}\n\n.main-content-two{\n    display: grid;\n    position: relative;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: 200px;\n    grid-gap: 2vw;\n}\n\n.pizza-dish{\n    background-image: url('../images/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg');\n\n}\n.milk-dish{\n    background-image: url('../images/Cookies-and-cream-milkshake-500x500.jpg');\n\n}\n.pork-dish{\n    background-image: url('../images/Healthy-Oven-Roasted-Pork-3x2-055-bbcd2b5b79904af4a26a9a4f63223e4a.jpg');\n\n}\n.chips-dish{\n    background-image: url('../images/air-fryer-chips-featured-d.jpg');\n\n}\n\n.dishes-advert{\n    height: 100%;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    border-bottom-left-radius: 2vmin;\n    border-top-right-radius: 2vmin;\n    border-top: 10px solid var(--primary-color);\n    box-shadow: 0px 0px 100px rgb(228, 95, 6), 0px 0px 90px 40px black inset;\n    /* border-bottom:10px solid var(--primary-color); */\n}\n\n.dishes-advert > a:hover{\n    transform: scale(1.02,1.02);\n    opacity: 1;\n}\n\n.dishes-advert > a{\n    text-decoration: none;\n    font-size: 1.2em;\n    font-weight: 600;\n    opacity: .9;\n    transition: transform 5s linear forwards;\n}\n\n.dish-para{\n    background-color: #070c09;\n    margin: 2vw;\n    text-transform: capitalize;\n    padding: 1vw;\n    color: var(--primary-txt-color);\n    border-radius: inherit;\n    font-size: .5em;\n}\n\n\n.main-content-three{\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    height: 100%;\n    grid-gap: 2vw;\n}\n\n.main-content-three-item{\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    background-size: cover;\n    box-shadow: 0px 0px 100px rgb(228, 95, 6), 0px 0px 90px 40px black inset;\n\n}\n\n.spa{\n    background-image: url(\"../images/body-scrubbing.jpg\");    \n}\n\n.rooms{\n    background-image: url(\"../images/bednbrk.jpg\");\n }\n\n.kidsplay{\n    background-image: url(\"../images/Aqua-Play-family-1-1920x1195.jpg\");\n}\n .conference{\n    background-image: url(\"../images/conference.jpg\");\n }\n\n.swimmingpool{\n    background-image: url(\"../images/swimmingpool.jpeg\");\n}\n\n.footer-container{\n    background-color: var(--footer-bg);\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: calc(20 / var(--mainHeight));\n    align-items: center;\n    justify-content: center;\n}\n\n.footer-item{\n    --footer-height: calc(20 / var(--mainHeight));\n    color: white;\n    padding: calc(var(--footer-height) / 4 );\n}\n\n\n.footer-container{\n    background-color: var(--footer-bg);\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: calc(20 / var(--max-height));\n    align-items: center;\n    justify-content: center;\n}\n\n.footer-item{\n    color: white;\n    padding: 2vw;\n}\n\n\n.social-link{\n    border: 1px solid transparent;\n    outline: 1px solid white;\n    outline-offset: 3px;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    padding: 1vw;\n    border-radius: 5px;\n    background-color: #fff;\n}\n\n#social-links{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2vw;\n    align-content: center;\n    justify-content: center;\n}\n\n.social-link a{\n    text-decoration: none;\n    color: #505ec7;\n    font-family: 'Croissant One', serif;\n    font-size: .2em;\n}\n\n\n@keyframes anime {\n    0%{\n        box-shadow: 0px 0px 50px rgb(129, 8, 89) inset, 0px 0px 30px 10px hotpink;\n    }\n    \n    20%{\n        box-shadow: 0px 0px 50px rgb(133, 58, 108) inset, 0px 0px 30px 10px hotpink;\n    }\n    \n    50%{\n        box-shadow: 0px 0px 50px black inset, 0px 0px 30px 10px hotpink;\n    }\n\n    70%{\n        box-shadow: 0px 0px 50px rgb(102, 84, 84) inset, 0px 0px 30px 10px hotpink;\n    }\n\n    100%{\n        box-shadow: 0px 0px 50px rgb(102, 15, 76) inset, 0px 0px 30px 10px hotpink;\n    }\n}\n\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/css_files/about.css":
/*!*********************************!*\
  !*** ./src/css_files/about.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/css_files/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css_files/index.css":
/*!*********************************!*\
  !*** ./src/css_files/index.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css_files/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index/index.js":
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOOTER_CONTAINER: () => (/* binding */ FOOTER_CONTAINER),
/* harmony export */   HEADER_CONTAINER: () => (/* binding */ HEADER_CONTAINER)
/* harmony export */ });
/* harmony import */ var _shared_Dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Dom.js */ "./src/shared/Dom.js");
/* harmony import */ var _css_files_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css_files/index.css */ "./src/css_files/index.css");

const DOMWRITER = new _shared_Dom_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

const BODY = document.body;
const MAIN_CONTAINER = DOMWRITER.createElement('div',['main-container']);

function generateDishAdvert(unique_class_name, dish_details='delicious meal'){
    const container = DOMWRITER.createElement('div', [unique_class_name, 'dishes-advert'])
    const dishDetail = DOMWRITER.createElement('div', ['dish-para']);
    const link = DOMWRITER.createElement('a');
    dishDetail.textContent = dish_details;
    link.setAttribute('href', '#');
    link.appendChild(dishDetail);
    container.appendChild(link);

    return container;
}


function drawHomeDocument(){
    BODY.innerHTML = "";
    BODY.appendChild(MAIN_CONTAINER);
}

//header section
const HEADER_CONTAINER = DOMWRITER.createElement('div',['header-container', 'content']);

//header children
const HEADER_LOGO = DOMWRITER.createElement('div',['header-logo-pik'])
const HEADER_LINKS = DOMWRITER.createElement('div',['header-links'])
const HEADER_LOGO_TEXT = DOMWRITER.createElement('div',['header-logo-text'])

const homeLink = DOMWRITER.generateHeaderLink('home', 'index.html', ['fa-solid', 'fa-house-user'])
const menuLink = DOMWRITER.generateHeaderLink('menu', 'menu.html', ['fa-solid', 'fa-bars'])
const orderLink = DOMWRITER.generateHeaderLink('order', 'order.html', ['fa-solid', 'fa-message'])
const aboutLink = DOMWRITER.generateHeaderLink('about', 'about.html', ['fa-solid', 'fa-person-chalkboard'])
const findUsLink = DOMWRITER.generateHeaderLink('find us', '#contact-info', ['fa-solid', 'fa-location-dot'])
const galleryLink = DOMWRITER.generateHeaderLink('gallery', 'gallery.html', ['fa-solid', 'fa-photo-film'])


HEADER_LINKS.append(homeLink, menuLink, orderLink, aboutLink, findUsLink, galleryLink);
HEADER_CONTAINER.append(HEADER_LOGO, HEADER_LINKS, HEADER_LOGO_TEXT);




//main content section
const CONTENT_CONTAINER = DOMWRITER.createElement('div',['marketing-pik-container', 'content']);

//content children
const CONTENT_ONE = DOMWRITER.createElement('div',['main-content-item', 'main-content-one'])
const CONTENT_TWO = DOMWRITER.createElement('div',['main-content-item', 'main-content-two'])
const CONTENT_THREE = DOMWRITER.createElement('div',['main-content-item', 'main-content-three'])


//content one container children
const Megatron = DOMWRITER.createElement('div', ['megatron-text'])
Megatron.textContent = '\" Indulge in luxurious tranquil escapes\"'
CONTENT_ONE.appendChild(Megatron);


//content two container children
const Pizza = generateDishAdvert('pizza-dish', 'Satisfy Your Cravings: Hot, Fresh, and Irresistibly Delicious Pizzas Await!"' )
const Chips = generateDishAdvert('chips-dish', 'Crunch into Flavorful Delight: Our Chips, Your Perfect Snack Companion!"' )
const Pork = generateDishAdvert('pork-dish', 'Savor Juicy, Grilled Perfection: Your Pork Steak, Your Way!"' )
const Milk = generateDishAdvert('milk-dish', '"Indulge in Creamy Bliss: Sip, Savor, and Sweeten Your Moments!"' )
CONTENT_TWO.append(Pizza, Chips, Pork, Milk);


//content three container children
const swimmingAdvert = DOMWRITER.createElement('div', ['main-content-three-item', 'swimmingpool'])
const roomsAdvert = DOMWRITER.createElement('div', ['main-content-three-item', 'rooms'])
const spaAdvert = DOMWRITER.createElement('div', ['main-content-three-item', 'spa'])
CONTENT_THREE.append(swimmingAdvert, roomsAdvert, spaAdvert);

//finalizing on the content
CONTENT_CONTAINER.append(CONTENT_ONE, CONTENT_TWO, CONTENT_THREE);





//footer section
const FOOTER_CONTAINER = DOMWRITER.createElement('div',['footer-container', 'content']);

//footer children
const HotelLogo = document.createTextNode('Luxurious Tranquil Escapes')
const PhoneContact = document.createTextNode('phone: +254711226102')
const OfficeContact = document.createTextNode('office: +254795774650')

const facebookLink = DOMWRITER.generateFooterLink('facebook', 'https://www.facebook.com/jeremmy.mwas/',['fa-brands', 'fa-facebook'])

const instagramLink = DOMWRITER.generateFooterLink('instagram', 'https://www.instagram.com/cybeymafia/',['fa-brands', 'fa-instagram'])

const linkedinLink = DOMWRITER.generateFooterLink('linkedIn', 'https://www.linkedin.com/in/jeremy-mwangi-375ba7151',['fa-brands', 'fa-linkedin'])


const newsLetter = DOMWRITER.footerItem('news-letter', [HotelLogo]);
const contactInfo = DOMWRITER.footerItem('contact-info', [PhoneContact, DOMWRITER.createElement('br'), OfficeContact])
const socialLinks = DOMWRITER.footerItem('social-links', [facebookLink, instagramLink, linkedinLink])
FOOTER_CONTAINER.append(newsLetter, contactInfo, socialLinks);








MAIN_CONTAINER.append(HEADER_CONTAINER, CONTENT_CONTAINER, FOOTER_CONTAINER);

drawHomeDocument();





















/***/ }),

/***/ "./src/shared/Dom.js":
/*!***************************!*\
  !*** ./src/shared/Dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMAPI)
/* harmony export */ });
class DOMAPI{
    constructor(){
        
    }


    setClassNames(target, classes=[]){
        classes.forEach(className=>{
            target.classList.add(className);
        })
        
        return target;
    }


    generateHeaderLink(header_name='header', link_url='#', avatar_classes=['fa-solid']){
   
        //elements declaring
        const container = document.createElement('div');
        const link = document.createElement('a');
        const avatar = document.createElement('i');
        const span = document.createElement('span');

        //setting values
        this.setClassNames(container, ['header-btn-container']);
        this.setClassNames(avatar, avatar_classes);
        span.textContent = header_name;
        link.setAttribute('href', link_url)

        //structuring the elements
        link.appendChild(avatar);
        link.appendChild(span);
        container.appendChild(link);


        return container;
    }


    generateFooterLink(footer_name='footer', link_url='#', avatar_classes=['fa-solid']){
    
        //declaring elements
        const container = document.createElement('div');
        const link = document.createElement('a');
        const avatar = document.createElement('i');

        //setting values
        this.setClassNames(container, ['social-link']);
        this.setClassNames(avatar, avatar_classes);
        link.setAttribute('href', link_url);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');

        //structuring 
        // link.appendChild(avatar);
        link.append(avatar, footer_name);
        container.appendChild(link);


        return container;

    }


    footerItem(id_name, child_nodes=[]){
        const container = document.createElement('div');
        container.classList.add('footer-item');
        container.setAttribute('id', id_name);
        child_nodes.forEach(child=>{
        container.appendChild(child);
            })
        return container;
    }


    createElement(type, class_names=[], id){
        //create a element of the type given and add relevant classnames and id;
        const container = document.createElement(type);
        this.setClassNames(container, class_names);
        if(id){
            container.setAttribute('id', id);
        }
        return container;
    }

    
    fixClass(target, classes_to_append=[]){
        
        // Remove all existing classes from the target element
        target.classList = '';

        // Add the new classes to the target element
        classes_to_append.forEach(className => {
            target.classList.add(className);
        })

        return target;
    }
}


















/***/ }),

/***/ "./src/images/51840c4d9c8568a0c03f165c21c0c78d_XL.svg":
/*!************************************************************!*\
  !*** ./src/images/51840c4d9c8568a0c03f165c21c0c78d_XL.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52c9d9431243a7a0fda5.svg";

/***/ }),

/***/ "./src/images/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg":
/*!*****************************************************************************************!*\
  !*** ./src/images/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85e55f45605212f806be.jpg";

/***/ }),

/***/ "./src/images/Aqua-Play-family-1-1920x1195.jpg":
/*!*****************************************************!*\
  !*** ./src/images/Aqua-Play-family-1-1920x1195.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c52766d7005b602f4b9a.jpg";

/***/ }),

/***/ "./src/images/Cookies-and-cream-milkshake-500x500.jpg":
/*!************************************************************!*\
  !*** ./src/images/Cookies-and-cream-milkshake-500x500.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abe86383c072bcf5a23e.jpg";

/***/ }),

/***/ "./src/images/Healthy-Oven-Roasted-Pork-3x2-055-bbcd2b5b79904af4a26a9a4f63223e4a.jpg":
/*!*******************************************************************************************!*\
  !*** ./src/images/Healthy-Oven-Roasted-Pork-3x2-055-bbcd2b5b79904af4a26a9a4f63223e4a.jpg ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65667a724b1bc4695e1b.jpg";

/***/ }),

/***/ "./src/images/Waiter-pizzeria-1024x683.jpg":
/*!*************************************************!*\
  !*** ./src/images/Waiter-pizzeria-1024x683.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33bbf17d9564ccc74425.jpg";

/***/ }),

/***/ "./src/images/air-fryer-chips-featured-d.jpg":
/*!***************************************************!*\
  !*** ./src/images/air-fryer-chips-featured-d.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5d45aa026cc803981f7.jpg";

/***/ }),

/***/ "./src/images/bednbrk.jpg":
/*!********************************!*\
  !*** ./src/images/bednbrk.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59d786706e28af7373c1.jpg";

/***/ }),

/***/ "./src/images/board.svg":
/*!******************************!*\
  !*** ./src/images/board.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f41f530ed415d10a0df.svg";

/***/ }),

/***/ "./src/images/body-scrubbing.jpg":
/*!***************************************!*\
  !*** ./src/images/body-scrubbing.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "779b53a2f285d10ea653.jpg";

/***/ }),

/***/ "./src/images/chefs.svg":
/*!******************************!*\
  !*** ./src/images/chefs.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "951dc4cc48701f149371.svg";

/***/ }),

/***/ "./src/images/conference.jpg":
/*!***********************************!*\
  !*** ./src/images/conference.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d31f58b03a71fefcd3e2.jpg";

/***/ }),

/***/ "./src/images/invst.svg":
/*!******************************!*\
  !*** ./src/images/invst.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90ea3e0ff51f10408a3c.svg";

/***/ }),

/***/ "./src/images/mainhotel.jpg":
/*!**********************************!*\
  !*** ./src/images/mainhotel.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fc20023111ffc0b1dfe.jpg";

/***/ }),

/***/ "./src/images/manager.svg":
/*!********************************!*\
  !*** ./src/images/manager.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a1f66a7f95ceb7c13ac.svg";

/***/ }),

/***/ "./src/images/receptionist.svg":
/*!*************************************!*\
  !*** ./src/images/receptionist.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc9bf1a5357194ddfe88.svg";

/***/ }),

/***/ "./src/images/swimmingpool.jpeg":
/*!**************************************!*\
  !*** ./src/images/swimmingpool.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9aec62d11a87d69594a.jpeg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"about": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/about/about.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_Dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Dom.js */ "./src/shared/Dom.js");
/* harmony import */ var _index_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index/index.js */ "./src/index/index.js");
/* harmony import */ var _css_files_about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css_files/about.css */ "./src/css_files/about.css");



const DOMWRITER = new _shared_Dom_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

function drawAboutDocument(){
    document.body.innerHTML = "";
    document.body.append(ABOUT_MAIN_CONTAINER);
}

function generateAboutItem(persona_name, details){
    const mainContainer = DOMWRITER.createElement('div', ['content', persona_name])
    const container = DOMWRITER.createElement('div', ['content-item-text', `${persona_name}-txt`]);
    const innerContainer = DOMWRITER.createElement('div', ['text-content']);
    const detailDiv = DOMWRITER.createElement('div', [`${persona_name}-para`]);

    detailDiv.textContent = details;

    innerContainer.appendChild(detailDiv);
    container.appendChild(innerContainer);
    mainContainer.appendChild(container);


    return mainContainer;
}

const ABOUT_MAIN_CONTAINER = DOMWRITER.createElement('div', ['about-main-container'])

const ABOUT_FOOTER_CONTAINER = DOMWRITER.fixClass(_index_index_js__WEBPACK_IMPORTED_MODULE_1__.FOOTER_CONTAINER, ['about-footer-container']);

const ABOUT_HEADER_CONTAINER = DOMWRITER.fixClass(_index_index_js__WEBPACK_IMPORTED_MODULE_1__.HEADER_CONTAINER, ['about-header-container']);

const ABOUT_CONTENT_CONTAINER = DOMWRITER.createElement('div', ['about-content-container']);

const item1 = generateAboutItem('manager', 'Results-driven Luxury Hotel Manager with a proven track record in delivering exceptional guest experiences, optimizing operations, and exceeding revenue targets.With a passion for creating a warm and inviting atmosphere, I ensure guests feel not just like customers, but valued members of our hospitality family.')

const item2 = generateAboutItem('board', 'distinguished Board of Directors. Committed to quality oversight, our expert team ensures impeccable standards, strategic direction, and lasting success in the hospitality industry.')

const item3 = generateAboutItem('receptionist', 'Experience the difference with our Receptionist team. Our dedicated professionals go the extra mile to ensure a warm and efficient welcome. With exceptional interpersonal skills and a commitment to guest satisfaction, they set the tone for a memorable stay.')


const item4 = generateAboutItem('chef', 'Savor excellence in culinary artistry with our Chefs. Combining creativity, skill, and a passion for gastronomy, our chefs crafts unforgettable dining experiences that leave a lasting impression on your guests.')


const item5 = generateAboutItem('staff', 'Experience unparalleled service from our dedicated team of staff members. From housekeeping to concierge, our skilled professionals work in harmony to ensure every guest enjoys a flawless and memorable stay. Your satisfaction is our collective mission.')

ABOUT_CONTENT_CONTAINER.append(item1, item2, item3, item4, item5);

ABOUT_MAIN_CONTAINER.append(ABOUT_HEADER_CONTAINER, ABOUT_CONTENT_CONTAINER, ABOUT_FOOTER_CONTAINER);

drawAboutDocument();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZDk2YmFhOTdmZTY4ZTcwODIxNjcuYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsMEhBQTBDO0FBQ3RGLDRDQUE0QyxzSEFBd0M7QUFDcEYsNENBQTRDLGtIQUFzQztBQUNsRiw0Q0FBNEMsZ0lBQTZDO0FBQ3pGLDRDQUE0QyxrSEFBc0M7QUFDbEYsNENBQTRDLGtIQUFzQztBQUNsRiw0Q0FBNEMsOEtBQW9FO0FBQ2hILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQzs7QUFFL0Q7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7O0FBRS9EO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DOztBQUUvRDtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQzs7QUFFL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUTRDO0FBQzVDOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dlO0FBQ2Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ2dDO0FBQ3RDO0FBQ2hDLHNCQUFzQixzREFBTTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhFQUE4RSxhQUFhO0FBQzNGO0FBQ0EseURBQXlELGFBQWE7O0FBRXRFOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0QsNkRBQWdCOztBQUVsRSxrREFBa0QsNkRBQWdCOztBQUVsRTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2Nzc19maWxlcy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2Nzc19maWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FwcC8uL3NyYy9jc3NfZmlsZXMvYWJvdXQuY3NzP2ViM2UiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2Nzc19maWxlcy9pbmRleC5jc3M/NDgxMiIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FwcC8uL3NyYy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvc2hhcmVkL0RvbS5qcyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FwcC8uL3NyYy9hYm91dC9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL21haW5ob3RlbC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbWFuYWdlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYm9hcmQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3JlY2VwdGlvbmlzdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2hlZnMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2ludnN0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy81MTg0MGM0ZDljODU2OGEwYzAzZjE2NWMyMWMwYzc4ZF9YTC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tbWF4LXdpZHRoOiAxMDB2dztcbiAgICAtLW1heC1oZWlnaHQ6IDIwMHZoO1xuICAgICAgLS1wcmltYXJ5LWNvbG9yOiAjMGU3MzY0O1xuICAgIC0tcHJpbWFyeS1iZy1jb2xvcjogIzg3ZGVhYztcbiAgICAtLWZvb3Rlci1iZzogaHNsKDI1NiwgNzYlLCA1JSk7XG4gICAgLS1wcmltYXJ5LXR4dC1jb2xvcjogI2VkZDgzMjtcbn1cblxuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbmJvZHl7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogdmFyKC0tbWF4LWhlaWdodCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG59XG5cblxuLmFib3V0LW1haW4tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDI1ZnIgLjVmcjtcblxufVxuXG5cbi5hYm91dC1oZWFkZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB3aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LDI0LDI0LCAwLjkpO1xufVxuXG4ubWVudXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuXG4uaGVhZGVyLWxpbmtze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtZ2FwOiAydnc7XG59XG5cbi5oZWFkZXItbGlua3MgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiAnQ3JvaXNzYW50IE9uZScsIHNlcmlmOyAgXG59XG5cbi5oZWFkZXItbGlua3MgYTpob3Zlcjpub3QoLnNwZWNpYWwpe1xuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogaHNsKDEyMCwgNzElLCA4MSUpO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjZmZmO1xuICAgIHBhZGRpbmc6IDF2dztcbiAgICBib3JkZXItcmFkaXVzOiAxdnc7XG59XG5cblxuLmhlYWRlci1idG4tY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG59XG5cbi5tYXJrZXRpbmctcGlrLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC1nYXA6IDJ2aDtcbiAgICBcbn1cblxuXG4uYWJvdXQtY29udGVudC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCAxZnIpO1xuICAgIGdyaWQtZ2FwOiAxMHZoO1xufVxuXG4uY29udGVudHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMCU7XG4gICAgcGFkZGluZzogM3Z3O1xuICBcbn1cblxuLmNvbnRlbnQtaXRlbS10ZXh0e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMGFlNDE4O1xufVxuXG4udGV4dC1jb250ZW50e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvciksIHJnYmEoOCwyNCwyNCwgMC45KSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnZ3O1xuICAgIHBhZGRpbmc6IDJ2dztcbiAgICBcbiAgICBcbn1cblxuLnRleHQtY29udGVudCA+IGRpdntcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgXG59XG5cblxuLnRleHQtY29udGVudDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1MHB4IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKSwgMXB4IDFweCA1MHB4ICNmZmY7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICBcbiAgICAvKiBhbmltYXRpb246IGJnLWNoYW5nZXIgMTBzIGVhc2UtaW4tb3V0IGZvcndhcmRzOyAqL1xuICAgIFxufVxuXG4ubWFuYWdlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgXG59XG5cblxuLmJvYXJke1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLnJlY2VwdGlvbmlzdHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgXG59XG5cbi5jaGllZmNoZWZ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xufVxuXG4uaW52ZXN0b3Jze1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KSA7XG4gXG59XG5cbi5zdGFmZntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG59XG5cbi5tYW5hZ2VyLXR4dHtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uYm9hcmQtdHh0e1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ucmVjZXB0aW9uaXN0LXR4dHtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uY2hlZi10eHR7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5zdGFmZi10eHR7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5pbnZlc3RvcnMtdHh0e1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG5cbi5hYm91dC1mb290ZXItY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0Nyb2lzc2FudCBPbmUnLCBzZXJpZjtcbn1cblxuLmZvb3Rlci1pdGVte1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAydnc7XG59XG5cblxuLnNvY2lhbC1saW5re1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuNXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4jc29jaWFsLWxpbmtze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLWdhcDogMnZ3O1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjb250YWN0LWluZm97XG4gICAgZm9udC1zaXplOiAuN2VtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zb2NpYWwtbGluayBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzUwNWVjNztcbiAgICBmb250LWZhbWlseTogJ0Nyb2lzc2FudCBPbmUnLCBzZXJpZjtcbiAgICBmb250LXNpemU6IC4yZW07XG59XG5cbkBrZXlmcmFtZXMgYmctY2hhbmdlciB7XG4gICAgMCV7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoOCwyNCwyNCwgMC45KSwgdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpKTt9XG5cblxuICAgIDMwJXtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpLCByZ2JhKDgsMjQsMjQsIDAuOSkpO31cblxuXG4gICAgNjAle2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDgsMjQsMjQsIDAuOSksdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpKTt9XG5cblxuICAgIDkwJXtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpLCByZ2JhKDgsMjQsMjQsIDAuOSkpO31cbiAgICBcbiAgICAxMDAle2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDgsMjQsMjQsIDAuOSksdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpKTt9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzX2ZpbGVzL2Fib3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7TUFDakIsd0JBQXdCO0lBQzFCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIseURBQWdEO0lBQ2hELHNCQUFzQjtJQUN0QixrQkFBa0I7O0FBRXRCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0NBQWtDOztBQUV0Qzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sV0FBVztJQUNYLG1DQUFtQztJQUNuQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGFBQWE7O0FBRWpCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osd0ZBQXdGO0lBQ3hGLGtCQUFrQjtJQUNsQixZQUFZOzs7QUFHaEI7O0FBRUE7SUFDSSxlQUFlOztBQUVuQjs7O0FBR0E7SUFDSSwwQ0FBMEM7SUFDMUMsb0VBQW9FO0lBQ3BFLHNCQUFzQjs7SUFFdEIsb0RBQW9EOztBQUV4RDs7QUFFQTtJQUNJLHlEQUE4Qzs7QUFFbEQ7OztBQUdBO0lBQ0kseURBQTRDO0FBQ2hEOztBQUVBO0lBQ0kseURBQW1EOztBQUV2RDs7QUFFQTtJQUNJLHlEQUE0QztBQUNoRDs7QUFFQTtJQUNJLDBEQUE2Qzs7QUFFakQ7O0FBRUE7SUFDSSx5REFBMEU7QUFDOUU7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7OztBQUdBO0lBQ0ksa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLEdBQUcsd0ZBQXdGLENBQUM7OztJQUc1RixJQUFJLHdGQUF3RixDQUFDOzs7SUFHN0YsSUFBSSx1RkFBdUYsQ0FBQzs7O0lBRzVGLElBQUksd0ZBQXdGLENBQUM7O0lBRTdGLEtBQUssdUZBQXVGLENBQUM7QUFDakdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgLS1tYXgtaGVpZ2h0OiAyMDB2aDtcXG4gICAgICAtLXByaW1hcnktY29sb3I6ICMwZTczNjQ7XFxuICAgIC0tcHJpbWFyeS1iZy1jb2xvcjogIzg3ZGVhYztcXG4gICAgLS1mb290ZXItYmc6IGhzbCgyNTYsIDc2JSwgNSUpO1xcbiAgICAtLXByaW1hcnktdHh0LWNvbG9yOiAjZWRkODMyO1xcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAlO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvbWFpbmhvdGVsLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxufVxcblxcblxcbi5hYm91dC1tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAyNWZyIC41ZnI7XFxuXFxufVxcblxcblxcbi5hYm91dC1oZWFkZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB3aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwyNCwyNCwgMC45KTtcXG59XFxuXFxuLm1lbnV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuXFxuLmhlYWRlci1saW5rc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiAydnc7XFxufVxcblxcbi5oZWFkZXItbGlua3MgYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LWZhbWlseTogJ0Nyb2lzc2FudCBPbmUnLCBzZXJpZjsgIFxcbn1cXG5cXG4uaGVhZGVyLWxpbmtzIGE6aG92ZXI6bm90KC5zcGVjaWFsKXtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogaHNsKDEyMCwgNzElLCA4MSUpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggI2ZmZjtcXG4gICAgcGFkZGluZzogMXZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAxdnc7XFxufVxcblxcblxcbi5oZWFkZXItYnRuLWNvbnRhaW5lcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbn1cXG5cXG4ubWFya2V0aW5nLXBpay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAydmg7XFxuICAgIFxcbn1cXG5cXG5cXG4uYWJvdXQtY29udGVudC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxMHZoO1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwJTtcXG4gICAgcGFkZGluZzogM3Z3O1xcbiAgXFxufVxcblxcbi5jb250ZW50LWl0ZW0tdGV4dHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzBhZTQxODtcXG59XFxuXFxuLnRleHQtY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvciksIHJnYmEoOCwyNCwyNCwgMC45KSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2dztcXG4gICAgcGFkZGluZzogMnZ3O1xcbiAgICBcXG4gICAgXFxufVxcblxcbi50ZXh0LWNvbnRlbnQgPiBkaXZ7XFxuICAgIGZvbnQtc2l6ZTogLjhlbTtcXG4gICAgXFxufVxcblxcblxcbi50ZXh0LWNvbnRlbnQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1MHB4IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKSwgMXB4IDFweCA1MHB4ICNmZmY7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICAgIFxcbiAgICAvKiBhbmltYXRpb246IGJnLWNoYW5nZXIgMTBzIGVhc2UtaW4tb3V0IGZvcndhcmRzOyAqL1xcbiAgICBcXG59XFxuXFxuLm1hbmFnZXJ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL21hbmFnZXIuc3ZnJyk7XFxuICAgIFxcbn1cXG5cXG5cXG4uYm9hcmR7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JvYXJkLnN2ZycpO1xcbn1cXG5cXG4ucmVjZXB0aW9uaXN0e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9yZWNlcHRpb25pc3Quc3ZnJyk7XFxuICAgIFxcbn1cXG5cXG4uY2hpZWZjaGVme1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9jaGVmcy5zdmcnKTtcXG59XFxuXFxuLmludmVzdG9yc3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvaW52c3Quc3ZnJykgO1xcbiBcXG59XFxuXFxuLnN0YWZme1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy81MTg0MGM0ZDljODU2OGEwYzAzZjE2NWMyMWMwYzc4ZF9YTC5zdmcnKTtcXG59XFxuXFxuLm1hbmFnZXItdHh0e1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmJvYXJkLXR4dHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5yZWNlcHRpb25pc3QtdHh0e1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uY2hlZi10eHR7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnN0YWZmLXR4dHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaW52ZXN0b3JzLXR4dHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcblxcbi5hYm91dC1mb290ZXItY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0Nyb2lzc2FudCBPbmUnLCBzZXJpZjtcXG59XFxuXFxuLmZvb3Rlci1pdGVte1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDJ2dztcXG59XFxuXFxuXFxuLnNvY2lhbC1saW5re1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjV2dztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jc29jaWFsLWxpbmtze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLWdhcDogMnZ3O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtaW5mb3tcXG4gICAgZm9udC1zaXplOiAuN2VtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uc29jaWFsLWxpbmsgYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzUwNWVjNztcXG4gICAgZm9udC1mYW1pbHk6ICdDcm9pc3NhbnQgT25lJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogLjJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBiZy1jaGFuZ2VyIHtcXG4gICAgMCV7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoOCwyNCwyNCwgMC45KSwgdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpKTt9XFxuXFxuXFxuICAgIDMwJXtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpLCByZ2JhKDgsMjQsMjQsIDAuOSkpO31cXG5cXG5cXG4gICAgNjAle2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDgsMjQsMjQsIDAuOSksdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpKTt9XFxuXFxuXFxuICAgIDkwJXtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpLCByZ2JhKDgsMjQsMjQsIDAuOSkpO31cXG4gICAgXFxuICAgIDEwMCV7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoOCwyNCwyNCwgMC45KSx2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcikpO31cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvV2FpdGVyLXBpenplcmlhLTEwMjR4NjgzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy82Nzc2X1BpenphLURvdWdoX2RkbWZzXzJ4MV8xNzI1LWZkYWE3NjQ5NmRhMDQ1YjNiZGFhZGNlYzZkNGM1Mzk4LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9Db29raWVzLWFuZC1jcmVhbS1taWxrc2hha2UtNTAweDUwMC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvSGVhbHRoeS1PdmVuLVJvYXN0ZWQtUG9yay0zeDItMDU1LWJiY2QyYjViNzk5MDRhZjRhMjZhOWE0ZjYzMjIzZTRhLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9haXItZnJ5ZXItY2hpcHMtZmVhdHVyZWQtZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYm9keS1zY3J1YmJpbmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JlZG5icmsuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0FxdWEtUGxheS1mYW1pbHktMS0xOTIweDExOTUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2NvbmZlcmVuY2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3N3aW1taW5ncG9vbC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLXByaW1hcnktY29sb3I6ICMwZTczNjQ7XG4gICAgLS1wcmltYXJ5LWJnLWNvbG9yOiAjODdkZWFjO1xuICAgIC0tZm9vdGVyLWJnOiBoc2woMjU2LCA3NiUsIDUlKTtcbiAgICAtLXByaW1hcnktd2lkdGg6IGNhbGMoMTAwdncgLyAzKTtcbiAgICAtLXByaW1hcnktaGVpZ2h0OiBjYWxjKDIwMHZoIC8gMyk7XG4gICAgLS1tYWluSGVpZ2h0IDogMjAwdmg7XG4gICAgLS1tYWluLXdpZHRoOiAxMDB2dztcbiAgICAtLXByaW1hcnktdHh0LWNvbG9yOiAjZWRkODMyO1xuXG59XG5cbip7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBmb250LXNpemU6IGNsYW1wKDZweCwgMS41dncsIDE2cHgpO1xuXG59XG5cbmJvZHl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblxufVxuXG4ubWFpbi1jb250YWluZXJ7IFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2FsYyg1IC8gdmFyKC0tbWFpbkhlaWdodCkpIGNhbGMoODAgLyB2YXIoLS1tYWluSGVpZ2h0KSkgY2FsYygyMCAvIHZhcigtLW1haW5IZWlnaHQpKTtcbiAgICBncmlkLWdhcDogM3Z3O1xufVxuXG5cbi5oZWFkZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LDI0LDI0LCAwLjkpO1xufVxuXG4ubWVudXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuXG4uaGVhZGVyLWxpbmtze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtZ2FwOiAydnc7XG59XG5cbi5oZWFkZXItbGlua3MgIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogM3ZtaW47XG4gICAgZm9udC1mYW1pbHk6ICdDcm9pc3NhbnQgT25lJywgc2VyaWY7XG4gICAgXG59XG5cbi5oZWFkZXItbGlua3MgYTpob3ZlcntcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGhzbCgzMjUsIDgyJSwgMjQlKTtcbn1cblxuLmhlYWRlci1idG4tY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG59XG5cblxuLm1hcmtldGluZy1waWstY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLWdhcDogMnZoO1xuICAgIFxufVxuXG5cbi5tZWdhdHJvbi10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC1mYW1pbHk6ICdDcm9pc3NhbnQgT25lJywgc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBjb2xvcjogIzY2MTk2MjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgb3BhY2l0eTogLjc7XG4gICAgYW5pbWF0aW9uOiBhbmltZSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLm1haW4tY29udGVudC10d297XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XG4gICAgZ3JpZC1nYXA6IDJ2dztcbn1cblxuLnBpenphLWRpc2h7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuXG59XG4ubWlsay1kaXNoe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcblxufVxuLnBvcmstZGlzaHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG5cbn1cbi5jaGlwcy1kaXNoe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcblxufVxuXG4uZGlzaGVzLWFkdmVydHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnZtaW47XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJ2bWluO1xuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCByZ2IoMjI4LCA5NSwgNiksIDBweCAwcHggOTBweCA0MHB4IGJsYWNrIGluc2V0O1xuICAgIC8qIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgKi9cbn1cblxuLmRpc2hlcy1hZHZlcnQgPiBhOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMiwxLjAyKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uZGlzaGVzLWFkdmVydCA+IGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBvcGFjaXR5OiAuOTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uZGlzaC1wYXJhe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzBjMDk7XG4gICAgbWFyZ2luOiAydnc7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgcGFkZGluZzogMXZ3O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IC41ZW07XG59XG5cblxuLm1haW4tY29udGVudC10aHJlZXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAyZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtZ2FwOiAydnc7XG59XG5cbi5tYWluLWNvbnRlbnQtdGhyZWUtaXRlbXtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggcmdiKDIyOCwgOTUsIDYpLCAwcHggMHB4IDkwcHggNDBweCBibGFjayBpbnNldDtcblxufVxuXG4uc3Bhe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTsgICAgXG59XG5cbi5yb29tc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gfVxuXG4ua2lkc3BsYXl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fX30pO1xufVxuIC5jb25mZXJlbmNle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTtcbiB9XG5cbi5zd2ltbWluZ3Bvb2x7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fX30pO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogY2FsYygyMCAvIHZhcigtLW1haW5IZWlnaHQpKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyLWl0ZW17XG4gICAgLS1mb290ZXItaGVpZ2h0OiBjYWxjKDIwIC8gdmFyKC0tbWFpbkhlaWdodCkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWZvb3Rlci1oZWlnaHQpIC8gNCApO1xufVxuXG5cbi5mb290ZXItY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtYXV0by1yb3dzOiBjYWxjKDIwIC8gdmFyKC0tbWF4LWhlaWdodCkpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb290ZXItaXRlbXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnZ3O1xufVxuXG5cbi5zb2NpYWwtbGlua3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDNweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4jc29jaWFsLWxpbmtze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLWdhcDogMnZ3O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNvY2lhbC1saW5rIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNTA1ZWM3O1xuICAgIGZvbnQtZmFtaWx5OiAnQ3JvaXNzYW50IE9uZScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogLjJlbTtcbn1cblxuXG5Aa2V5ZnJhbWVzIGFuaW1lIHtcbiAgICAwJXtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IHJnYigxMjksIDgsIDg5KSBpbnNldCwgMHB4IDBweCAzMHB4IDEwcHggaG90cGluaztcbiAgICB9XG4gICAgXG4gICAgMjAle1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggcmdiKDEzMywgNTgsIDEwOCkgaW5zZXQsIDBweCAwcHggMzBweCAxMHB4IGhvdHBpbms7XG4gICAgfVxuICAgIFxuICAgIDUwJXtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IGJsYWNrIGluc2V0LCAwcHggMHB4IDMwcHggMTBweCBob3RwaW5rO1xuICAgIH1cblxuICAgIDcwJXtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IHJnYigxMDIsIDg0LCA4NCkgaW5zZXQsIDBweCAwcHggMzBweCAxMHB4IGhvdHBpbms7XG4gICAgfVxuXG4gICAgMTAwJXtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IHJnYigxMDIsIDE1LCA3NikgaW5zZXQsIDBweCAwcHggMzBweCAxMHB4IGhvdHBpbms7XG4gICAgfVxufVxuXG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3NfZmlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1oseURBQStEO0lBQy9ELHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlE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LGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSTtRQUNJLHlFQUF5RTtJQUM3RTs7SUFFQTtRQUNJLDJFQUEyRTtJQUMvRTs7SUFFQTtRQUNJLCtEQUErRDtJQUNuRTs7SUFFQTtRQUNJLDBFQUEwRTtJQUM5RTs7SUFFQTtRQUNJLDBFQUEwRTtJQUM5RTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLXByaW1hcnktY29sb3I6ICMwZTczNjQ7XFxuICAgIC0tcHJpbWFyeS1iZy1jb2xvcjogIzg3ZGVhYztcXG4gICAgLS1mb290ZXItYmc6IGhzbCgyNTYsIDc2JSwgNSUpO1xcbiAgICAtLXByaW1hcnktd2lkdGg6IGNhbGMoMTAwdncgLyAzKTtcXG4gICAgLS1wcmltYXJ5LWhlaWdodDogY2FsYygyMDB2aCAvIDMpO1xcbiAgICAtLW1haW5IZWlnaHQgOiAyMDB2aDtcXG4gICAgLS1tYWluLXdpZHRoOiAxMDB2dztcXG4gICAgLS1wcmltYXJ5LXR4dC1jb2xvcjogI2VkZDgzMjtcXG5cXG59XFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNnB4LCAxLjV2dywgMTZweCk7XFxuXFxufVxcblxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL1dhaXRlci1waXp6ZXJpYS0xMDI0eDY4My5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcblxcbn1cXG5cXG4ubWFpbi1jb250YWluZXJ7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9XYWl0ZXItcGl6emVyaWEtMTAyNHg2ODMuanBnJyk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2FsYyg1IC8gdmFyKC0tbWFpbkhlaWdodCkpIGNhbGMoODAgLyB2YXIoLS1tYWluSGVpZ2h0KSkgY2FsYygyMCAvIHZhcigtLW1haW5IZWlnaHQpKTtcXG4gICAgZ3JpZC1nYXA6IDN2dztcXG59XFxuXFxuXFxuLmhlYWRlci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsMjQsMjQsIDAuOSk7XFxufVxcblxcbi5tZW51e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcblxcbi5oZWFkZXItbGlua3N7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWdhcDogMnZ3O1xcbn1cXG5cXG4uaGVhZGVyLWxpbmtzICBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogM3ZtaW47XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3JvaXNzYW50IE9uZScsIHNlcmlmO1xcbiAgICBcXG59XFxuXFxuLmhlYWRlci1saW5rcyBhOmhvdmVye1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiBoc2woMzI1LCA4MiUsIDI0JSk7XFxufVxcblxcbi5oZWFkZXItYnRuLWNvbnRhaW5lcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbn1cXG5cXG5cXG4ubWFya2V0aW5nLXBpay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAydmg7XFxuICAgIFxcbn1cXG5cXG5cXG4ubWVnYXRyb24tdGV4dHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdDcm9pc3NhbnQgT25lJywgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIGNvbG9yOiAjNjYxOTYyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgYW5pbWF0aW9uOiBhbmltZSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG59XFxuXFxuLm1haW4tY29udGVudC10d297XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xcbiAgICBncmlkLWdhcDogMnZ3O1xcbn1cXG5cXG4ucGl6emEtZGlzaHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvNjc3Nl9QaXp6YS1Eb3VnaF9kZG1mc18yeDFfMTcyNS1mZGFhNzY0OTZkYTA0NWIzYmRhYWRjZWM2ZDRjNTM5OC5qcGcnKTtcXG5cXG59XFxuLm1pbGstZGlzaHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvQ29va2llcy1hbmQtY3JlYW0tbWlsa3NoYWtlLTUwMHg1MDAuanBnJyk7XFxuXFxufVxcbi5wb3JrLWRpc2h7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0hlYWx0aHktT3Zlbi1Sb2FzdGVkLVBvcmstM3gyLTA1NS1iYmNkMmI1Yjc5OTA0YWY0YTI2YTlhNGY2MzIyM2U0YS5qcGcnKTtcXG5cXG59XFxuLmNoaXBzLWRpc2h7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2Fpci1mcnllci1jaGlwcy1mZWF0dXJlZC1kLmpwZycpO1xcblxcbn1cXG5cXG4uZGlzaGVzLWFkdmVydHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJ2bWluO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnZtaW47XFxuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggcmdiKDIyOCwgOTUsIDYpLCAwcHggMHB4IDkwcHggNDBweCBibGFjayBpbnNldDtcXG4gICAgLyogYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpOyAqL1xcbn1cXG5cXG4uZGlzaGVzLWFkdmVydCA+IGE6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMiwxLjAyKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRpc2hlcy1hZHZlcnQgPiBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG9wYWNpdHk6IC45O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNXMgbGluZWFyIGZvcndhcmRzO1xcbn1cXG5cXG4uZGlzaC1wYXJhe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwYzA5O1xcbiAgICBtYXJnaW46IDJ2dztcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIHBhZGRpbmc6IDF2dztcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAuNWVtO1xcbn1cXG5cXG5cXG4ubWFpbi1jb250ZW50LXRocmVle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMmZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtZ2FwOiAydnc7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtdGhyZWUtaXRlbXtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IHJnYigyMjgsIDk1LCA2KSwgMHB4IDBweCA5MHB4IDQwcHggYmxhY2sgaW5zZXQ7XFxuXFxufVxcblxcbi5zcGF7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2JvZHktc2NydWJiaW5nLmpwZ1xcXCIpOyAgICBcXG59XFxuXFxuLnJvb21ze1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9iZWRuYnJrLmpwZ1xcXCIpO1xcbiB9XFxuXFxuLmtpZHNwbGF5e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9BcXVhLVBsYXktZmFtaWx5LTEtMTkyMHgxMTk1LmpwZ1xcXCIpO1xcbn1cXG4gLmNvbmZlcmVuY2V7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2NvbmZlcmVuY2UuanBnXFxcIik7XFxuIH1cXG5cXG4uc3dpbW1pbmdwb29se1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9zd2ltbWluZ3Bvb2wuanBlZ1xcXCIpO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGNhbGMoMjAgLyB2YXIoLS1tYWluSGVpZ2h0KSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWl0ZW17XFxuICAgIC0tZm9vdGVyLWhlaWdodDogY2FsYygyMCAvIHZhcigtLW1haW5IZWlnaHQpKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWZvb3Rlci1oZWlnaHQpIC8gNCApO1xcbn1cXG5cXG5cXG4uZm9vdGVyLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGNhbGMoMjAgLyB2YXIoLS1tYXgtaGVpZ2h0KSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWl0ZW17XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMnZ3O1xcbn1cXG5cXG5cXG4uc29jaWFsLWxpbmt7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAzcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxdnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuI3NvY2lhbC1saW5rc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDJ2dztcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNvY2lhbC1saW5rIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICM1MDVlYzc7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3JvaXNzYW50IE9uZScsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IC4yZW07XFxufVxcblxcblxcbkBrZXlmcmFtZXMgYW5pbWUge1xcbiAgICAwJXtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCByZ2IoMTI5LCA4LCA4OSkgaW5zZXQsIDBweCAwcHggMzBweCAxMHB4IGhvdHBpbms7XFxuICAgIH1cXG4gICAgXFxuICAgIDIwJXtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCByZ2IoMTMzLCA1OCwgMTA4KSBpbnNldCwgMHB4IDBweCAzMHB4IDEwcHggaG90cGluaztcXG4gICAgfVxcbiAgICBcXG4gICAgNTAle1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IGJsYWNrIGluc2V0LCAwcHggMHB4IDMwcHggMTBweCBob3RwaW5rO1xcbiAgICB9XFxuXFxuICAgIDcwJXtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCByZ2IoMTAyLCA4NCwgODQpIGluc2V0LCAwcHggMHB4IDMwcHggMTBweCBob3RwaW5rO1xcbiAgICB9XFxuXFxuICAgIDEwMCV7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggcmdiKDEwMiwgMTUsIDc2KSBpbnNldCwgMHB4IDBweCAzMHB4IDEwcHggaG90cGluaztcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBET01BUEkgZnJvbSBcIi4uL3NoYXJlZC9Eb20uanNcIjtcbmNvbnN0IERPTVdSSVRFUiA9IG5ldyBET01BUEkoKTtcbmltcG9ydCAnLi4vY3NzX2ZpbGVzL2luZGV4LmNzcyc7XG5jb25zdCBCT0RZID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IE1BSU5fQ09OVEFJTkVSID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsWydtYWluLWNvbnRhaW5lciddKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVEaXNoQWR2ZXJ0KHVuaXF1ZV9jbGFzc19uYW1lLCBkaXNoX2RldGFpbHM9J2RlbGljaW91cyBtZWFsJyl7XG4gICAgY29uc3QgY29udGFpbmVyID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFt1bmlxdWVfY2xhc3NfbmFtZSwgJ2Rpc2hlcy1hZHZlcnQnXSlcbiAgICBjb25zdCBkaXNoRGV0YWlsID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZGlzaC1wYXJhJ10pO1xuICAgIGNvbnN0IGxpbmsgPSBET01XUklURVIuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGRpc2hEZXRhaWwudGV4dENvbnRlbnQgPSBkaXNoX2RldGFpbHM7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICAgIGxpbmsuYXBwZW5kQ2hpbGQoZGlzaERldGFpbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBkcmF3SG9tZURvY3VtZW50KCl7XG4gICAgQk9EWS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIEJPRFkuYXBwZW5kQ2hpbGQoTUFJTl9DT05UQUlORVIpO1xufVxuXG4vL2hlYWRlciBzZWN0aW9uXG5jb25zdCBIRUFERVJfQ09OVEFJTkVSID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsWydoZWFkZXItY29udGFpbmVyJywgJ2NvbnRlbnQnXSk7XG5cbi8vaGVhZGVyIGNoaWxkcmVuXG5jb25zdCBIRUFERVJfTE9HTyA9IERPTVdSSVRFUi5jcmVhdGVFbGVtZW50KCdkaXYnLFsnaGVhZGVyLWxvZ28tcGlrJ10pXG5jb25zdCBIRUFERVJfTElOS1MgPSBET01XUklURVIuY3JlYXRlRWxlbWVudCgnZGl2JyxbJ2hlYWRlci1saW5rcyddKVxuY29uc3QgSEVBREVSX0xPR09fVEVYVCA9IERPTVdSSVRFUi5jcmVhdGVFbGVtZW50KCdkaXYnLFsnaGVhZGVyLWxvZ28tdGV4dCddKVxuXG5jb25zdCBob21lTGluayA9IERPTVdSSVRFUi5nZW5lcmF0ZUhlYWRlckxpbmsoJ2hvbWUnLCAnaW5kZXguaHRtbCcsIFsnZmEtc29saWQnLCAnZmEtaG91c2UtdXNlciddKVxuY29uc3QgbWVudUxpbmsgPSBET01XUklURVIuZ2VuZXJhdGVIZWFkZXJMaW5rKCdtZW51JywgJ21lbnUuaHRtbCcsIFsnZmEtc29saWQnLCAnZmEtYmFycyddKVxuY29uc3Qgb3JkZXJMaW5rID0gRE9NV1JJVEVSLmdlbmVyYXRlSGVhZGVyTGluaygnb3JkZXInLCAnb3JkZXIuaHRtbCcsIFsnZmEtc29saWQnLCAnZmEtbWVzc2FnZSddKVxuY29uc3QgYWJvdXRMaW5rID0gRE9NV1JJVEVSLmdlbmVyYXRlSGVhZGVyTGluaygnYWJvdXQnLCAnYWJvdXQuaHRtbCcsIFsnZmEtc29saWQnLCAnZmEtcGVyc29uLWNoYWxrYm9hcmQnXSlcbmNvbnN0IGZpbmRVc0xpbmsgPSBET01XUklURVIuZ2VuZXJhdGVIZWFkZXJMaW5rKCdmaW5kIHVzJywgJyNjb250YWN0LWluZm8nLCBbJ2ZhLXNvbGlkJywgJ2ZhLWxvY2F0aW9uLWRvdCddKVxuY29uc3QgZ2FsbGVyeUxpbmsgPSBET01XUklURVIuZ2VuZXJhdGVIZWFkZXJMaW5rKCdnYWxsZXJ5JywgJ2dhbGxlcnkuaHRtbCcsIFsnZmEtc29saWQnLCAnZmEtcGhvdG8tZmlsbSddKVxuXG5cbkhFQURFUl9MSU5LUy5hcHBlbmQoaG9tZUxpbmssIG1lbnVMaW5rLCBvcmRlckxpbmssIGFib3V0TGluaywgZmluZFVzTGluaywgZ2FsbGVyeUxpbmspO1xuSEVBREVSX0NPTlRBSU5FUi5hcHBlbmQoSEVBREVSX0xPR08sIEhFQURFUl9MSU5LUywgSEVBREVSX0xPR09fVEVYVCk7XG5cblxuXG5cbi8vbWFpbiBjb250ZW50IHNlY3Rpb25cbmNvbnN0IENPTlRFTlRfQ09OVEFJTkVSID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsWydtYXJrZXRpbmctcGlrLWNvbnRhaW5lcicsICdjb250ZW50J10pO1xuXG4vL2NvbnRlbnQgY2hpbGRyZW5cbmNvbnN0IENPTlRFTlRfT05FID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsWydtYWluLWNvbnRlbnQtaXRlbScsICdtYWluLWNvbnRlbnQtb25lJ10pXG5jb25zdCBDT05URU5UX1RXTyA9IERPTVdSSVRFUi5jcmVhdGVFbGVtZW50KCdkaXYnLFsnbWFpbi1jb250ZW50LWl0ZW0nLCAnbWFpbi1jb250ZW50LXR3byddKVxuY29uc3QgQ09OVEVOVF9USFJFRSA9IERPTVdSSVRFUi5jcmVhdGVFbGVtZW50KCdkaXYnLFsnbWFpbi1jb250ZW50LWl0ZW0nLCAnbWFpbi1jb250ZW50LXRocmVlJ10pXG5cblxuLy9jb250ZW50IG9uZSBjb250YWluZXIgY2hpbGRyZW5cbmNvbnN0IE1lZ2F0cm9uID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbWVnYXRyb24tdGV4dCddKVxuTWVnYXRyb24udGV4dENvbnRlbnQgPSAnXFxcIiBJbmR1bGdlIGluIGx1eHVyaW91cyB0cmFucXVpbCBlc2NhcGVzXFxcIidcbkNPTlRFTlRfT05FLmFwcGVuZENoaWxkKE1lZ2F0cm9uKTtcblxuXG4vL2NvbnRlbnQgdHdvIGNvbnRhaW5lciBjaGlsZHJlblxuY29uc3QgUGl6emEgPSBnZW5lcmF0ZURpc2hBZHZlcnQoJ3BpenphLWRpc2gnLCAnU2F0aXNmeSBZb3VyIENyYXZpbmdzOiBIb3QsIEZyZXNoLCBhbmQgSXJyZXNpc3RpYmx5IERlbGljaW91cyBQaXp6YXMgQXdhaXQhXCInIClcbmNvbnN0IENoaXBzID0gZ2VuZXJhdGVEaXNoQWR2ZXJ0KCdjaGlwcy1kaXNoJywgJ0NydW5jaCBpbnRvIEZsYXZvcmZ1bCBEZWxpZ2h0OiBPdXIgQ2hpcHMsIFlvdXIgUGVyZmVjdCBTbmFjayBDb21wYW5pb24hXCInIClcbmNvbnN0IFBvcmsgPSBnZW5lcmF0ZURpc2hBZHZlcnQoJ3BvcmstZGlzaCcsICdTYXZvciBKdWljeSwgR3JpbGxlZCBQZXJmZWN0aW9uOiBZb3VyIFBvcmsgU3RlYWssIFlvdXIgV2F5IVwiJyApXG5jb25zdCBNaWxrID0gZ2VuZXJhdGVEaXNoQWR2ZXJ0KCdtaWxrLWRpc2gnLCAnXCJJbmR1bGdlIGluIENyZWFteSBCbGlzczogU2lwLCBTYXZvciwgYW5kIFN3ZWV0ZW4gWW91ciBNb21lbnRzIVwiJyApXG5DT05URU5UX1RXTy5hcHBlbmQoUGl6emEsIENoaXBzLCBQb3JrLCBNaWxrKTtcblxuXG4vL2NvbnRlbnQgdGhyZWUgY29udGFpbmVyIGNoaWxkcmVuXG5jb25zdCBzd2ltbWluZ0FkdmVydCA9IERPTVdSSVRFUi5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ21haW4tY29udGVudC10aHJlZS1pdGVtJywgJ3N3aW1taW5ncG9vbCddKVxuY29uc3Qgcm9vbXNBZHZlcnQgPSBET01XUklURVIuY3JlYXRlRWxlbWVudCgnZGl2JywgWydtYWluLWNvbnRlbnQtdGhyZWUtaXRlbScsICdyb29tcyddKVxuY29uc3Qgc3BhQWR2ZXJ0ID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbWFpbi1jb250ZW50LXRocmVlLWl0ZW0nLCAnc3BhJ10pXG5DT05URU5UX1RIUkVFLmFwcGVuZChzd2ltbWluZ0FkdmVydCwgcm9vbXNBZHZlcnQsIHNwYUFkdmVydCk7XG5cbi8vZmluYWxpemluZyBvbiB0aGUgY29udGVudFxuQ09OVEVOVF9DT05UQUlORVIuYXBwZW5kKENPTlRFTlRfT05FLCBDT05URU5UX1RXTywgQ09OVEVOVF9USFJFRSk7XG5cblxuXG5cblxuLy9mb290ZXIgc2VjdGlvblxuY29uc3QgRk9PVEVSX0NPTlRBSU5FUiA9IERPTVdSSVRFUi5jcmVhdGVFbGVtZW50KCdkaXYnLFsnZm9vdGVyLWNvbnRhaW5lcicsICdjb250ZW50J10pO1xuXG4vL2Zvb3RlciBjaGlsZHJlblxuY29uc3QgSG90ZWxMb2dvID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0x1eHVyaW91cyBUcmFucXVpbCBFc2NhcGVzJylcbmNvbnN0IFBob25lQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdwaG9uZTogKzI1NDcxMTIyNjEwMicpXG5jb25zdCBPZmZpY2VDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ29mZmljZTogKzI1NDc5NTc3NDY1MCcpXG5cbmNvbnN0IGZhY2Vib29rTGluayA9IERPTVdSSVRFUi5nZW5lcmF0ZUZvb3RlckxpbmsoJ2ZhY2Vib29rJywgJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9qZXJlbW15Lm13YXMvJyxbJ2ZhLWJyYW5kcycsICdmYS1mYWNlYm9vayddKVxuXG5jb25zdCBpbnN0YWdyYW1MaW5rID0gRE9NV1JJVEVSLmdlbmVyYXRlRm9vdGVyTGluaygnaW5zdGFncmFtJywgJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vY3liZXltYWZpYS8nLFsnZmEtYnJhbmRzJywgJ2ZhLWluc3RhZ3JhbSddKVxuXG5jb25zdCBsaW5rZWRpbkxpbmsgPSBET01XUklURVIuZ2VuZXJhdGVGb290ZXJMaW5rKCdsaW5rZWRJbicsICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamVyZW15LW13YW5naS0zNzViYTcxNTEnLFsnZmEtYnJhbmRzJywgJ2ZhLWxpbmtlZGluJ10pXG5cblxuY29uc3QgbmV3c0xldHRlciA9IERPTVdSSVRFUi5mb290ZXJJdGVtKCduZXdzLWxldHRlcicsIFtIb3RlbExvZ29dKTtcbmNvbnN0IGNvbnRhY3RJbmZvID0gRE9NV1JJVEVSLmZvb3Rlckl0ZW0oJ2NvbnRhY3QtaW5mbycsIFtQaG9uZUNvbnRhY3QsIERPTVdSSVRFUi5jcmVhdGVFbGVtZW50KCdicicpLCBPZmZpY2VDb250YWN0XSlcbmNvbnN0IHNvY2lhbExpbmtzID0gRE9NV1JJVEVSLmZvb3Rlckl0ZW0oJ3NvY2lhbC1saW5rcycsIFtmYWNlYm9va0xpbmssIGluc3RhZ3JhbUxpbmssIGxpbmtlZGluTGlua10pXG5GT09URVJfQ09OVEFJTkVSLmFwcGVuZChuZXdzTGV0dGVyLCBjb250YWN0SW5mbywgc29jaWFsTGlua3MpO1xuXG5cblxuXG5cblxuXG5leHBvcnQge0hFQURFUl9DT05UQUlORVIsIEZPT1RFUl9DT05UQUlORVJ9O1xuTUFJTl9DT05UQUlORVIuYXBwZW5kKEhFQURFUl9DT05UQUlORVIsIENPTlRFTlRfQ09OVEFJTkVSLCBGT09URVJfQ09OVEFJTkVSKTtcblxuZHJhd0hvbWVEb2N1bWVudCgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01BUEl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBzZXRDbGFzc05hbWVzKHRhcmdldCwgY2xhc3Nlcz1bXSl7XG4gICAgICAgIGNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWU9PntcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuXG4gICAgZ2VuZXJhdGVIZWFkZXJMaW5rKGhlYWRlcl9uYW1lPSdoZWFkZXInLCBsaW5rX3VybD0nIycsIGF2YXRhcl9jbGFzc2VzPVsnZmEtc29saWQnXSl7XG4gICBcbiAgICAgICAgLy9lbGVtZW50cyBkZWNsYXJpbmdcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IGF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAvL3NldHRpbmcgdmFsdWVzXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NOYW1lcyhjb250YWluZXIsIFsnaGVhZGVyLWJ0bi1jb250YWluZXInXSk7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NOYW1lcyhhdmF0YXIsIGF2YXRhcl9jbGFzc2VzKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGhlYWRlcl9uYW1lO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmtfdXJsKVxuXG4gICAgICAgIC8vc3RydWN0dXJpbmcgdGhlIGVsZW1lbnRzXG4gICAgICAgIGxpbmsuYXBwZW5kQ2hpbGQoYXZhdGFyKTtcbiAgICAgICAgbGluay5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmspO1xuXG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cblxuICAgIGdlbmVyYXRlRm9vdGVyTGluayhmb290ZXJfbmFtZT0nZm9vdGVyJywgbGlua191cmw9JyMnLCBhdmF0YXJfY2xhc3Nlcz1bJ2ZhLXNvbGlkJ10pe1xuICAgIFxuICAgICAgICAvL2RlY2xhcmluZyBlbGVtZW50c1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gICAgICAgIC8vc2V0dGluZyB2YWx1ZXNcbiAgICAgICAgdGhpcy5zZXRDbGFzc05hbWVzKGNvbnRhaW5lciwgWydzb2NpYWwtbGluayddKTtcbiAgICAgICAgdGhpcy5zZXRDbGFzc05hbWVzKGF2YXRhciwgYXZhdGFyX2NsYXNzZXMpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmtfdXJsKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lcicpO1xuXG4gICAgICAgIC8vc3RydWN0dXJpbmcgXG4gICAgICAgIC8vIGxpbmsuYXBwZW5kQ2hpbGQoYXZhdGFyKTtcbiAgICAgICAgbGluay5hcHBlbmQoYXZhdGFyLCBmb290ZXJfbmFtZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcblxuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG5cbiAgICB9XG5cblxuICAgIGZvb3Rlckl0ZW0oaWRfbmFtZSwgY2hpbGRfbm9kZXM9W10pe1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1pdGVtJyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRfbmFtZSk7XG4gICAgICAgIGNoaWxkX25vZGVzLmZvckVhY2goY2hpbGQ9PntcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVFbGVtZW50KHR5cGUsIGNsYXNzX25hbWVzPVtdLCBpZCl7XG4gICAgICAgIC8vY3JlYXRlIGEgZWxlbWVudCBvZiB0aGUgdHlwZSBnaXZlbiBhbmQgYWRkIHJlbGV2YW50IGNsYXNzbmFtZXMgYW5kIGlkO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICB0aGlzLnNldENsYXNzTmFtZXMoY29udGFpbmVyLCBjbGFzc19uYW1lcyk7XG4gICAgICAgIGlmKGlkKXtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgXG4gICAgZml4Q2xhc3ModGFyZ2V0LCBjbGFzc2VzX3RvX2FwcGVuZD1bXSl7XG4gICAgICAgIFxuICAgICAgICAvLyBSZW1vdmUgYWxsIGV4aXN0aW5nIGNsYXNzZXMgZnJvbSB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdCA9ICcnO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgbmV3IGNsYXNzZXMgdG8gdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICAgIGNsYXNzZXNfdG9fYXBwZW5kLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFib3V0XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBET01BUEkgZnJvbSBcIi4uL3NoYXJlZC9Eb20uanNcIjtcbmltcG9ydCAge0hFQURFUl9DT05UQUlORVIsIEZPT1RFUl9DT05UQUlORVJ9IGZyb20gJy4uL2luZGV4L2luZGV4LmpzJztcbmltcG9ydCAnLi4vY3NzX2ZpbGVzL2Fib3V0LmNzcyc7XG5jb25zdCBET01XUklURVIgPSBuZXcgRE9NQVBJKCk7XG5cbmZ1bmN0aW9uIGRyYXdBYm91dERvY3VtZW50KCl7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKEFCT1VUX01BSU5fQ09OVEFJTkVSKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVBYm91dEl0ZW0ocGVyc29uYV9uYW1lLCBkZXRhaWxzKXtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGVudCcsIHBlcnNvbmFfbmFtZV0pXG4gICAgY29uc3QgY29udGFpbmVyID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGVudC1pdGVtLXRleHQnLCBgJHtwZXJzb25hX25hbWV9LXR4dGBdKTtcbiAgICBjb25zdCBpbm5lckNvbnRhaW5lciA9IERPTVdSSVRFUi5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3RleHQtY29udGVudCddKTtcbiAgICBjb25zdCBkZXRhaWxEaXYgPSBET01XUklURVIuY3JlYXRlRWxlbWVudCgnZGl2JywgW2Ake3BlcnNvbmFfbmFtZX0tcGFyYWBdKTtcblxuICAgIGRldGFpbERpdi50ZXh0Q29udGVudCA9IGRldGFpbHM7XG5cbiAgICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxEaXYpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbn1cblxuY29uc3QgQUJPVVRfTUFJTl9DT05UQUlORVIgPSBET01XUklURVIuY3JlYXRlRWxlbWVudCgnZGl2JywgWydhYm91dC1tYWluLWNvbnRhaW5lciddKVxuXG5jb25zdCBBQk9VVF9GT09URVJfQ09OVEFJTkVSID0gRE9NV1JJVEVSLmZpeENsYXNzKEZPT1RFUl9DT05UQUlORVIsIFsnYWJvdXQtZm9vdGVyLWNvbnRhaW5lciddKTtcblxuY29uc3QgQUJPVVRfSEVBREVSX0NPTlRBSU5FUiA9IERPTVdSSVRFUi5maXhDbGFzcyhIRUFERVJfQ09OVEFJTkVSLCBbJ2Fib3V0LWhlYWRlci1jb250YWluZXInXSk7XG5cbmNvbnN0IEFCT1VUX0NPTlRFTlRfQ09OVEFJTkVSID0gRE9NV1JJVEVSLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnYWJvdXQtY29udGVudC1jb250YWluZXInXSk7XG5cbmNvbnN0IGl0ZW0xID0gZ2VuZXJhdGVBYm91dEl0ZW0oJ21hbmFnZXInLCAnUmVzdWx0cy1kcml2ZW4gTHV4dXJ5IEhvdGVsIE1hbmFnZXIgd2l0aCBhIHByb3ZlbiB0cmFjayByZWNvcmQgaW4gZGVsaXZlcmluZyBleGNlcHRpb25hbCBndWVzdCBleHBlcmllbmNlcywgb3B0aW1pemluZyBvcGVyYXRpb25zLCBhbmQgZXhjZWVkaW5nIHJldmVudWUgdGFyZ2V0cy5XaXRoIGEgcGFzc2lvbiBmb3IgY3JlYXRpbmcgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlLCBJIGVuc3VyZSBndWVzdHMgZmVlbCBub3QganVzdCBsaWtlIGN1c3RvbWVycywgYnV0IHZhbHVlZCBtZW1iZXJzIG9mIG91ciBob3NwaXRhbGl0eSBmYW1pbHkuJylcblxuY29uc3QgaXRlbTIgPSBnZW5lcmF0ZUFib3V0SXRlbSgnYm9hcmQnLCAnZGlzdGluZ3Vpc2hlZCBCb2FyZCBvZiBEaXJlY3RvcnMuIENvbW1pdHRlZCB0byBxdWFsaXR5IG92ZXJzaWdodCwgb3VyIGV4cGVydCB0ZWFtIGVuc3VyZXMgaW1wZWNjYWJsZSBzdGFuZGFyZHMsIHN0cmF0ZWdpYyBkaXJlY3Rpb24sIGFuZCBsYXN0aW5nIHN1Y2Nlc3MgaW4gdGhlIGhvc3BpdGFsaXR5IGluZHVzdHJ5LicpXG5cbmNvbnN0IGl0ZW0zID0gZ2VuZXJhdGVBYm91dEl0ZW0oJ3JlY2VwdGlvbmlzdCcsICdFeHBlcmllbmNlIHRoZSBkaWZmZXJlbmNlIHdpdGggb3VyIFJlY2VwdGlvbmlzdCB0ZWFtLiBPdXIgZGVkaWNhdGVkIHByb2Zlc3Npb25hbHMgZ28gdGhlIGV4dHJhIG1pbGUgdG8gZW5zdXJlIGEgd2FybSBhbmQgZWZmaWNpZW50IHdlbGNvbWUuIFdpdGggZXhjZXB0aW9uYWwgaW50ZXJwZXJzb25hbCBza2lsbHMgYW5kIGEgY29tbWl0bWVudCB0byBndWVzdCBzYXRpc2ZhY3Rpb24sIHRoZXkgc2V0IHRoZSB0b25lIGZvciBhIG1lbW9yYWJsZSBzdGF5LicpXG5cblxuY29uc3QgaXRlbTQgPSBnZW5lcmF0ZUFib3V0SXRlbSgnY2hlZicsICdTYXZvciBleGNlbGxlbmNlIGluIGN1bGluYXJ5IGFydGlzdHJ5IHdpdGggb3VyIENoZWZzLiBDb21iaW5pbmcgY3JlYXRpdml0eSwgc2tpbGwsIGFuZCBhIHBhc3Npb24gZm9yIGdhc3Ryb25vbXksIG91ciBjaGVmcyBjcmFmdHMgdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZXMgdGhhdCBsZWF2ZSBhIGxhc3RpbmcgaW1wcmVzc2lvbiBvbiB5b3VyIGd1ZXN0cy4nKVxuXG5cbmNvbnN0IGl0ZW01ID0gZ2VuZXJhdGVBYm91dEl0ZW0oJ3N0YWZmJywgJ0V4cGVyaWVuY2UgdW5wYXJhbGxlbGVkIHNlcnZpY2UgZnJvbSBvdXIgZGVkaWNhdGVkIHRlYW0gb2Ygc3RhZmYgbWVtYmVycy4gRnJvbSBob3VzZWtlZXBpbmcgdG8gY29uY2llcmdlLCBvdXIgc2tpbGxlZCBwcm9mZXNzaW9uYWxzIHdvcmsgaW4gaGFybW9ueSB0byBlbnN1cmUgZXZlcnkgZ3Vlc3QgZW5qb3lzIGEgZmxhd2xlc3MgYW5kIG1lbW9yYWJsZSBzdGF5LiBZb3VyIHNhdGlzZmFjdGlvbiBpcyBvdXIgY29sbGVjdGl2ZSBtaXNzaW9uLicpXG5cbkFCT1VUX0NPTlRFTlRfQ09OVEFJTkVSLmFwcGVuZChpdGVtMSwgaXRlbTIsIGl0ZW0zLCBpdGVtNCwgaXRlbTUpO1xuXG5BQk9VVF9NQUlOX0NPTlRBSU5FUi5hcHBlbmQoQUJPVVRfSEVBREVSX0NPTlRBSU5FUiwgQUJPVVRfQ09OVEVOVF9DT05UQUlORVIsIEFCT1VUX0ZPT1RFUl9DT05UQUlORVIpO1xuXG5kcmF3QWJvdXREb2N1bWVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==