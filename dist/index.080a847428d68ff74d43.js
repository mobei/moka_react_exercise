webpackJsonp([1,2],{

/***/ 187:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _layout = __webpack_require__(83);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_layout2.default, null), document.getElementById('app'));

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(187);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	desc: checkbox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	params: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		checked: boolean  是否选中  必选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		indeterminate: boolean 是否半选 可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		onCheckChange: function  事件方法 可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		label: string 显示文本 可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		className: string 样式 可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	author: lianhy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Checkbox = function (_Component) {
	_inherits(Checkbox, _Component);

	function Checkbox(props) {
		_classCallCheck(this, Checkbox);

		var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

		_this.state = { checked: props.checked, indeterminate: props.indeterminate };
		return _this;
	}

	_createClass(Checkbox, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var checked = nextProps.checked,
			    indeterminate = nextProps.indeterminate;

			if (checked) {
				indeterminate = false;
			}

			this.setState({ checked: checked, indeterminate: indeterminate });
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.refs.checkBoxNode.indeterminate = this.state.indeterminate;
		}
	}, {
		key: 'onCheckChange',
		value: function onCheckChange(e) {
			this.setState({ checked: e.target.checked, indeterminate: false });
			if (this.props.onCheckChange) {
				this.props.onCheckChange(e.target.checked);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var clazzs = 'mk-checkbox ' + this.props.className;
			var checkedClass = '';
			var _state = this.state,
			    checked = _state.checked,
			    indeterminate = _state.indeterminate;


			if (checked) {
				checkedClass = 'mk-checkbox-checked';
			} else if (indeterminate) {
				checkedClass = 'mk-checkbox-indeterminate';
			}

			return _react2.default.createElement(
				'label',
				{ className: clazzs },
				_react2.default.createElement('input', { ref: 'checkBoxNode', className: 'mk-checkbox-input', type: 'checkbox', checked: checked, onChange: this.onCheckChange.bind(this) }),
				_react2.default.createElement('span', { className: 'mk-checkbox-label ' + checkedClass }),
				_react2.default.createElement(
					'span',
					{ className: 'mk-checkbox-text' },
					this.props.label
				)
			);
		}
	}]);

	return Checkbox;
}(_react.Component);

exports.default = Checkbox;


Checkbox.propTypes = {
	checked: _react.PropTypes.bool.isRequired,
	indeterminate: _react.PropTypes.bool,
	label: _react.PropTypes.string,
	onCheckChange: _react.PropTypes.func,
	className: _react.PropTypes.string
};

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(88);

var _header2 = _interopRequireDefault(_header);

var _sider = __webpack_require__(89);

var _sider2 = _interopRequireDefault(_sider);

var _container = __webpack_require__(87);

var _container2 = _interopRequireDefault(_container);

__webpack_require__(190);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
	_inherits(Layout, _Component);

	function Layout() {
		_classCallCheck(this, Layout);

		return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
	}

	_createClass(Layout, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'mk-application' },
				_react2.default.createElement(_header2.default, null),
				_react2.default.createElement(_sider2.default, null),
				_react2.default.createElement(_container2.default, null)
			);
		}
	}]);

	return Layout;
}(_react.Component);

exports.default = Layout;


Layout.propTypes = {};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _multiSelectGroup = __webpack_require__(85);

var _multiSelectGroup2 = _interopRequireDefault(_multiSelectGroup);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clearText = '清空';

var MultiSelect = function (_Component) {
	_inherits(MultiSelect, _Component);

	function MultiSelect(props) {
		_classCallCheck(this, MultiSelect);

		var _this = _possibleConstructorReturn(this, (MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call(this, props));

		_this.state = { clearFlag: false };
		return _this;
	}

	_createClass(MultiSelect, [{
		key: 'clear',
		value: function clear() {
			this.setState({ clearFlag: !this.state.clearFlag });
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$data = this.props.data,
			    title = _props$data.title,
			    departments = _props$data.departments;

			var clearFlag = this.state.clearFlag;

			return _react2.default.createElement(
				'div',
				{ className: 'multi-select' },
				_react2.default.createElement(
					'div',
					{ className: 'multi-select-header' },
					_react2.default.createElement(
						'span',
						{ className: 'multi-select-title' },
						title
					),
					_react2.default.createElement(
						'a',
						{ className: 'multi-select-clear', onClick: this.clear.bind(this) },
						clearText
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'multi-select-content' },
					departments.map(function (group) {
						return _react2.default.createElement(_multiSelectGroup2.default, { key: group.id, group: group, clearFlag: clearFlag });
					})
				)
			);
		}
	}]);

	return MultiSelect;
}(_react.Component);

exports.default = MultiSelect;


MultiSelect.propTypes = {
	data: _react.PropTypes.object.isRequired
};

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _multiSelectItem = __webpack_require__(86);

var _multiSelectItem2 = _interopRequireDefault(_multiSelectItem);

var _checkbox = __webpack_require__(55);

var _checkbox2 = _interopRequireDefault(_checkbox);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiSelectGroup = function (_Component) {
	_inherits(MultiSelectGroup, _Component);

	function MultiSelectGroup(props) {
		_classCallCheck(this, MultiSelectGroup);

		var _this = _possibleConstructorReturn(this, (MultiSelectGroup.__proto__ || Object.getPrototypeOf(MultiSelectGroup)).call(this, props));

		_this.state = {
			checkAll: false,
			positions: props.group.positions,
			indeterminate: false,
			showPositions: true
		};
		return _this;
	}

	_createClass(MultiSelectGroup, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.clearFlag !== this.props.clearFlag) {
				this.checkAll(false, false);
			}
		}
	}, {
		key: 'onCheckAllChange',
		value: function onCheckAllChange(checked) {
			this.checkAll(checked, false);
		}
	}, {
		key: 'onToggle',
		value: function onToggle() {
			this.setState({
				showPositions: !this.state.showPositions
			});
		}
	}, {
		key: 'onItemCheckChange',
		value: function onItemCheckChange(id, checked) {
			var positions = this.state.positions || [];
			var checkedList = [];
			var checkAll = void 0,
			    indeterminate = void 0;

			var oldCheckedList = positions.filter(function (item) {
				return !!item.checked;
			}) || [];
			positions.forEach(function (position) {
				if (id === position.id) {
					position.checked = checked;
				}

				if (position.checked) {
					checkedList.push(position);
				}
			});

			var oldLength = oldCheckedList.length,
			    checkedLength = checkedList.length,
			    allLength = positions.length;

			//优化
			if (oldLength > 0 && oldLength < allLength && checkedLength < allLength && checkedLength > 0) {
				return;
			}

			checkAll = checkedList.length === positions.length; //全选中
			indeterminate = !!(checkedList.length && checkedList.length < positions.length); //部分选中

			this.checkAll(checkAll, indeterminate, positions);
		}
	}, {
		key: 'checkAll',
		value: function checkAll(_checkAll, indeterminate, positions) {
			positions = positions || this.state.positions || [];

			if (_checkAll) {
				positions = positions.map(function (item) {
					item.checked = true;
					return item;
				});
			} else if (!indeterminate) {
				positions = positions.map(function (item) {
					item.checked = false;
					return item;
				});
			}

			this.setState({ checkAll: _checkAll, indeterminate: indeterminate, positions: positions });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var group = this.props.group;
			var _state = this.state,
			    positions = _state.positions,
			    checkAll = _state.checkAll,
			    indeterminate = _state.indeterminate,
			    showPositions = _state.showPositions;

			var contentClazz = showPositions ? 'show' : 'hide';
			var dropDownClazz = showPositions ? 'drop-down' : 'drop-up';

			return _react2.default.createElement(
				'div',
				{ className: 'multi-select-group' },
				_react2.default.createElement(
					'div',
					{ className: 'multi-select-group-header ' },
					_react2.default.createElement(_checkbox2.default, {
						className: 'multi-select-checkbox',
						checked: checkAll,
						indeterminate: indeterminate,
						onCheckChange: this.onCheckAllChange.bind(this)
					}),
					_react2.default.createElement(
						'label',
						{ className: 'multi-select-group-name', onClick: this.onToggle.bind(this) },
						group.name,
						' ',
						_react2.default.createElement('span', { className: 'drop-btn ' + dropDownClazz })
					),
					_react2.default.createElement(
						'span',
						{ className: 'badge' },
						group.value
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'multi-select-group-content ' + contentClazz },
					positions.map(function (position) {
						return _react2.default.createElement(_multiSelectItem2.default, { key: position.id, itemData: position, onCheckChange: _this2.onItemCheckChange.bind(_this2) });
					})
				)
			);
		}
	}]);

	return MultiSelectGroup;
}(_react.Component);

exports.default = MultiSelectGroup;


MultiSelectGroup.propTypes = {
	group: _react.PropTypes.object.isRequired,
	clearFlag: _react.PropTypes.bool.isRequired
};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _checkbox = __webpack_require__(55);

var _checkbox2 = _interopRequireDefault(_checkbox);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiSelectItem = function (_Component) {
	_inherits(MultiSelectItem, _Component);

	function MultiSelectItem(props) {
		_classCallCheck(this, MultiSelectItem);

		var _this = _possibleConstructorReturn(this, (MultiSelectItem.__proto__ || Object.getPrototypeOf(MultiSelectItem)).call(this, props));

		_this.state = { checked: props.itemData.checked };
		return _this;
	}

	_createClass(MultiSelectItem, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				checked: nextProps.itemData.checked
			});
		}
	}, {
		key: 'onCheckChange',
		value: function onCheckChange(checked) {
			this.setState({ checked: checked });

			if (this.props.onCheckChange) {
				this.props.onCheckChange(this.props.itemData.id, checked);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var item = this.props.itemData;
			var checked = this.state.checked || false;

			return _react2.default.createElement(
				'div',
				{ className: 'multi-select-item' },
				_react2.default.createElement(_checkbox2.default, {
					className: 'multi-select-checkbox',
					checked: checked,
					onCheckChange: this.onCheckChange.bind(this),
					label: item.name
				}),
				_react2.default.createElement(
					'span',
					{ className: 'badge' },
					item.value
				)
			);
		}
	}]);

	return MultiSelectItem;
}(_react.Component);

exports.default = MultiSelectItem;


MultiSelectItem.propTypes = {
	itemData: _react.PropTypes.object.isRequired,
	onCheckChange: _react.PropTypes.func.isRequired
};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(188);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Component) {
	_inherits(Container, _Component);

	function Container() {
		_classCallCheck(this, Container);

		return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	}

	_createClass(Container, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'mk-container' },
				_react2.default.createElement(
					'div',
					null,
					'\u611F\u8C22\u67E5\u770B\uFF01'
				),
				_react2.default.createElement(
					'span',
					null,
					'\u5E0C\u671B\u6709\u673A\u4F1A\u53C2\u52A0\u9762\u8BD5'
				)
			);
		}
	}]);

	return Container;
}(_react.Component);

exports.default = Container;


Container.propTypes = {};

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(189);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'mk-header' },
				'\u7B14\u8BD5\u9879\u76EE\u7ED3\u679C'
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;


Header.propTypes = {};

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _multiSelect = __webpack_require__(84);

var _multiSelect2 = _interopRequireDefault(_multiSelect);

__webpack_require__(191);

var _dataSource = __webpack_require__(90);

var _dataSource2 = _interopRequireDefault(_dataSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//测试数据


var Sider = function (_Component) {
	_inherits(Sider, _Component);

	function Sider() {
		_classCallCheck(this, Sider);

		return _possibleConstructorReturn(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).apply(this, arguments));
	}

	_createClass(Sider, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'mk-sider' },
				_react2.default.createElement(_multiSelect2.default, { data: _dataSource2.default })
			);
		}
	}]);

	return Sider;
}(_react.Component);

exports.default = Sider;


Sider.propTypes = {};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var data = {
	title: '招聘职位',
	departments: [{
		id: 1,
		name: '工程研发部門',
		value: 120,
		positions: [{
			id: 1,
			name: 'Mac 开发工程师',
			value: 9
		}, {
			id: 2,
			name: 'IOS App 测试工程师',
			value: 17
		}, {
			id: 3,
			name: 'Android 远程控制工程师',
			value: 61
		}, {
			id: 4,
			name: 'Web 前端工程师',
			value: 31
		}, {
			id: 5,
			name: 'Android 多媒体软件开发工程师',
			value: 2
		}]
	}, {
		id: 2,
		name: '产品设计部門',
		value: 136,
		positions: [{
			id: 1,
			name: '网页设计师',
			value: 47
		}, {
			id: 2,
			name: 'ID/工业设计师',
			value: 39
		}, {
			id: 3,
			name: '视觉设计师',
			value: 42
		}, {
			id: 4,
			name: '平面设计师',
			value: 8
		}]
	}]
};

exports.default = data;

/***/ })

},[192]);