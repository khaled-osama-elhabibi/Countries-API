var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchItem = function (_React$Component) {
  _inherits(SearchItem, _React$Component);

  function SearchItem() {
    _classCallCheck(this, SearchItem);

    var _this = _possibleConstructorReturn(this, (SearchItem.__proto__ || Object.getPrototypeOf(SearchItem)).call(this));

    _this.clickHandler = _this.clickHandler.bind(_this);
    return _this;
  }

  _createClass(SearchItem, [{
    key: "clickHandler",
    value: function clickHandler() {
      this.props.getInfoOfCountry(this.props.countryCode);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        { onClick: this.clickHandler, className: "control-bar__search__list-item" },
        React.createElement("img", { className: "control-bar__search__list-item__flag", src: this.props.countryFlag }),
        React.createElement(
          "p",
          { className: "control-bar__search__list-item__name" },
          this.props.countryName
        )
      );
    }
  }]);

  return SearchItem;
}(React.Component);

export default SearchItem;