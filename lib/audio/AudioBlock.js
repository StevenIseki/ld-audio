'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 90%;\n  padding-bottom: 2rem;\n  margin: 0 auto;\n'], ['\n  position: relative;\n  width: 90%;\n  padding-bottom: 2rem;\n  margin: 0 auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Block = require('../block/Block');

var _Block2 = _interopRequireDefault(_Block);

var _Close = require('./Close');

var _Close2 = _interopRequireDefault(_Close);

var _Player = require('./Player');

var _Player2 = _interopRequireDefault(_Player);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Globo.com (https://github.com/globocom)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.actions = [{
      key: 'delete',
      icon: _Close2.default,
      action: _this.props.container.remove
    }];
    return _this;
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Block2.default,
        _extends({}, this.props, { actions: this.actions }),
        _react2.default.createElement(
          AudioBlockWrapper,
          { className: 'ld-Audio-block-wrapper' },
          _react2.default.createElement(_Player2.default, {
            url: this.props.data.src })
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;


var AudioBlockWrapper = _styledComponents2.default.div(_templateObject);

var AudioBlock = _styledComponents2.default.iframe(_templateObject2);