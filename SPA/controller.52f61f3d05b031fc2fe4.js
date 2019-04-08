/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route */ "./src/route.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    var movies = _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTranding();
    movies.then(function (data) {
      if (!_route__WEBPACK_IMPORTED_MODULE_2__["default"].getRoute()) {
        _view__WEBPACK_IMPORTED_MODULE_1__["default"].renderHome(data);
        window.movies = data;
      } else {
        _view__WEBPACK_IMPORTED_MODULE_1__["default"].renderMovie(data, _route__WEBPACK_IMPORTED_MODULE_2__["default"].getRoute());
        var btn = document.querySelector('.form__btn');
        btn.addEventListener('click', function (e) {
          return location.hash = '';
        });
      }
    });
  }
});

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var apiKey = '?api_key=' + 'f483e55ea009cc45c9679d143f6cfe26';

function getData(url, params) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url + params + apiKey);

    xhr.onload = function () {
      if (xhr.status === 200) {
        var json = JSON.parse(xhr.response);
        resolve(json.results);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = function (err) {
      reject(err);
    };

    xhr.send();
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getTranding: function getTranding() {
    return getData('https://api.themoviedb.org/3/', 'trending/movie/day').then(function (tranding) {
      return tranding;
    });
  },
  getRecomendation: function getRecomendation(movie) {
    return getData('https://api.themoviedb.org/3/', "movie/".concat(movie, "/recommendations"));
  }
});

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  renderHome: function renderHome(data) {
    var template = document.querySelector('#tranding-list-template').cloneNode(true);
    var templateInner = template.content;
    var listWrapper = templateInner.querySelector('.tranding__list');
    var results = document.querySelector('.results');
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].removeContent();

    for (var i = 0; i < data.length; i++) {
      var movie = data[i];
      var listItem = templateInner.querySelector('.tranding__item');
      var listItemNew = listItem.cloneNode(true);
      var link = listItemNew.querySelector('.tranding__link');
      link.textContent = movie.original_title;
      link.href = "#".concat(movie.id);
      listWrapper.appendChild(listItemNew);

      if (i == data.length - 1) {
        listItem.remove();
      }
    }

    results.appendChild(listWrapper);
  }
});

/***/ }),

/***/ "./src/pages/movie.js":
/*!****************************!*\
  !*** ./src/pages/movie.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/model.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  renderMovie: function renderMovie(data, hash) {
    var template = document.querySelector('#trand-item-template').cloneNode(true);
    var templateInner = template.content;
    var img = templateInner.querySelector('.movie__img');
    var title = templateInner.querySelector('.movie__title');
    var description = templateInner.querySelector('.movie__descr');
    var recomendationList = templateInner.querySelector('.recomendation__list');
    var results = document.querySelector('.results');

    var dataItem = function (data) {
      for (var i = 0; i < data.length; i++) {
        var el = data[i];

        if (el.id == hash) {
          return el;
        }
      }
    }(data);

    img.src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(dataItem.poster_path);
    title.textContent = dataItem.original_title;
    description.textContent = dataItem.overview;
    _model__WEBPACK_IMPORTED_MODULE_0__["default"].getRecomendation(hash).then(function (dataRecomendations) {
      var templateItem = templateInner.querySelector('.recomendation__item');

      for (var i = 0; i < dataRecomendations.length; i++) {
        var recomendationData = dataRecomendations[i];
        var recomendationItem = templateItem.cloneNode(true);
        var link = recomendationItem.querySelector('.recomendation__link');
        link.href = "#".concat(recomendationData.id);
        link.textContent = recomendationData.original_title;
        recomendationList.appendChild(recomendationItem);

        if (i == dataRecomendations.length - 1) {
          templateItem.remove();
        }
      }

      results.appendChild(templateInner);
    }).catch(function (err) {
      return new Error(err);
    });
    console.log(templateInner);
  }
});

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  getRoute: function getRoute() {
    var hash = location.hash.slice(1) || '';
    return hash;
  },
  onChangeHash: function onChangeHash() {
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].removeContent();
    _controller__WEBPACK_IMPORTED_MODULE_0__["default"].init();
  },
  init: function init() {
    addEventListener('hashchange', this.onChangeHash);
    this.getRoute();
  }
});

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/movie */ "./src/pages/movie.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  renderHome: function renderHome(data) {
    _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"].renderHome(data);
  },
  renderMovie: function renderMovie(data, hash) {
    _pages_movie__WEBPACK_IMPORTED_MODULE_1__["default"].renderMovie(data, hash);
  },
  removeContent: function removeContent() {
    var resultsContainer = document.querySelector('.results');

    if (resultsContainer.firstElementChild) {
      resultsContainer.firstElementChild.remove();
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=controller.52f61f3d05b031fc2fe4.js.map