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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Updates = __webpack_require__(4);

var _Updates2 = _interopRequireDefault(_Updates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdatesFromEndpoint = function (_React$Component) {
  _inherits(UpdatesFromEndpoint, _React$Component);

  function UpdatesFromEndpoint(props) {
    _classCallCheck(this, UpdatesFromEndpoint);

    var _this = _possibleConstructorReturn(this, (UpdatesFromEndpoint.__proto__ || Object.getPrototypeOf(UpdatesFromEndpoint)).call(this, props));

    _this.state = {
      updates: []
    };

    _this.fetchUpdates = _this.fetchUpdates.bind(_this);
    return _this;
  }

  _createClass(UpdatesFromEndpoint, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchUpdates();
    }
  }, {
    key: 'fetchUpdates',
    value: function fetchUpdates() {
      var _this2 = this;

      var url = this.props.endpoint.replace('{{siteUrl}}', window.COLBY_SITE_URL);

      fetch(url).then(function (response) {
        return response.json();
      }).then(function (updates) {
        _this2.setState({ updates: updates });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Updates2.default, {
        updates: this.state.updates,
        moreLink: this.props.moreLink ? this.props.moreLink.replace('{{siteUrl}}', window.COLBY_SITE_URL) : null
      });
    }
  }]);

  return UpdatesFromEndpoint;
}(_react2.default.Component);

UpdatesFromEndpoint.propTypes = {
  moreLink: _propTypes2.default.string,
  endpoint: _propTypes2.default.string.isRequired
};
UpdatesFromEndpoint.defaultProps = {
  moreLink: null
};
exports.default = UpdatesFromEndpoint;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dateFns = __webpack_require__(7);

var _dateFns2 = _interopRequireDefault(_dateFns);

var _UpdatesModule = __webpack_require__(6);

var _UpdatesModule2 = _interopRequireDefault(_UpdatesModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/no-danger: 0 */
var Updates = function Updates(_ref) {
  var extraClass = _ref.extraClass,
      moreLink = _ref.moreLink,
      style = _ref.style,
      title = _ref.title,
      updates = _ref.updates,
      accent = _ref.accent,
      accentText = _ref.accentText;
  return _react2.default.createElement(
    'div',
    {
      className: (style === 'card' ? 'card' : '') + ' ' + _UpdatesModule2.default.Updates + ' ' + _UpdatesModule2.default[extraClass]
    },
    _react2.default.createElement(
      'div',
      { className: _UpdatesModule2.default.badgeContainer },
      _react2.default.createElement('span', {
        className: 'badge ' + _UpdatesModule2.default.badge,
        dangerouslySetInnerHTML: { __html: title },
        style: { color: accentText, backgroundColor: accent }
      })
    ),
    (updates || []).map(function (update) {
      return _react2.default.createElement(
        'div',
        { key: update.id, className: _UpdatesModule2.default.update },
        _react2.default.createElement(
          'h4',
          null,
          _react2.default.createElement('a', {
            href: update.link,
            dangerouslySetInnerHTML: { __html: update.title.rendered }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: _UpdatesModule2.default.updateDate },
          _dateFns2.default.format(update.date, 'MMMM DD, YYYY')
        ),
        _react2.default.createElement('div', {
          className: _UpdatesModule2.default.excerpt + ' pt-2',
          dangerouslySetInnerHTML: {
            __html: update.excerpt.rendered.split(' ').slice(0, 30).join(' ') + ' <a class="continue-link display-3" href=' + update.link + '>Continue reading</a>'
          }
        })
      );
    }),
    moreLink ? _react2.default.createElement(
      'a',
      { className: _UpdatesModule2.default.moreLink, href: moreLink },
      'More'
    ) : null
  );
};

Updates.propTypes = {
  accent: _propTypes2.default.string,
  accentText: _propTypes2.default.string,
  extraClass: _propTypes2.default.string,
  moreLink: _propTypes2.default.string,
  style: _propTypes2.default.string,
  title: _propTypes2.default.string,
  updates: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

Updates.defaultProps = {
  accent: null,
  accentText: null,
  extraClass: '',
  moreLink: null,
  style: null,
  title: 'Updates'
};

exports.default = Updates;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _UpdatesFromEndpoint = __webpack_require__(2);

var _UpdatesFromEndpoint2 = _interopRequireDefault(_UpdatesFromEndpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadUpdates = function loadUpdates() {
  Array.prototype.forEach.call(document.querySelectorAll('[data-colby-updates]'), function (container) {
    _reactDom2.default.render(_react2.default.createElement(_UpdatesFromEndpoint2.default, container.dataset), container);
  });
};

window.addEventListener('load', loadUpdates);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Updates":"Updates--1hIvX","fadeIn":"fadeIn--3OkRA","update":"update--2SBej","updateDate":"updateDate--1GMmn","badgeContainer":"badgeContainer--q7OrV","badge":"badge--1nNG7","moreLink":"moreLink--5tLAa","excerpt":"excerpt--22Fmi","floatInUp":"floatInUp--IeoBH","floatInLeft":"floatInLeft--OPlSI","slideInDown":"slideInDown--13zT1"};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = dateFns;

/***/ })
/******/ ]);
//# sourceMappingURL=colby-wp-react-updates.js.map