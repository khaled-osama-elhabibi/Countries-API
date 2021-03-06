var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountryBorderBtn = function (_React$Component) {
    _inherits(CountryBorderBtn, _React$Component);

    //this.props.respond
    function CountryBorderBtn() {
        _classCallCheck(this, CountryBorderBtn);

        var _this = _possibleConstructorReturn(this, (CountryBorderBtn.__proto__ || Object.getPrototypeOf(CountryBorderBtn)).call(this));

        _this.state = {};
        _this.clickHandler = _this.clickHandler.bind(_this);
        return _this;
    }

    _createClass(CountryBorderBtn, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.countryIsoCode).then(function (resp) {
                _this2.setState({ name: resp.data.name });
            });
        }
    }, {
        key: "getElementStyle",
        value: function getElementStyle() {
            if (this.props.mode === "light") {
                return {
                    color: "black",
                    backgroundColor: "hsl(0, 0%, 100%)"
                };
            } else if (this.props.mode === "dark") {
                return {
                    color: "white",
                    backgroundColor: "hsl(209, 23%, 22%)"
                };
            }
        }
    }, {
        key: "clickHandler",
        value: function clickHandler() {
            this.props.respond(this.props.countryIsoCode);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                {
                    onClick: this.clickHandler,
                    className: "country-border",
                    style: this.getElementStyle() },
                this.state.name
            );
        }
    }]);

    return CountryBorderBtn;
}(React.Component);

export default CountryBorderBtn;