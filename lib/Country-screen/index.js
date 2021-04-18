var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Bar from "../common-components/bar.js";
import CountryCard from "./Components/CountryCard.js";
import BackButton from "./Components/BackButton.js";

var CountryScreen = function (_React$Component) {
    _inherits(CountryScreen, _React$Component);

    function CountryScreen(props) {
        _classCallCheck(this, CountryScreen);

        var _this = _possibleConstructorReturn(this, (CountryScreen.__proto__ || Object.getPrototypeOf(CountryScreen)).call(this, props));

        _this.state = { isoAlpha3Code: _this.props.isoAlpha3Code, countryKey: 0 };
        _this.respond = _this.respond.bind(_this);
        return _this;
    }

    _createClass(CountryScreen, [{
        key: "respond",
        value: function respond(isoAlpha3Code) {
            this.setState(function (state) {
                return {
                    isoAlpha3Code: isoAlpha3Code,
                    countryKey: state.countryKey + 1
                };
            });
        }
    }, {
        key: "getBackgroundStyle",
        value: function getBackgroundStyle() {
            if (this.props.mode === "light") {
                return {
                    color: "black",
                    backgroundColor: "hsl(0, 0%, 98%)"
                };
            } else if (this.props.mode === "dark") {
                return {
                    color: "white",
                    backgroundColor: "hsl(207, 26%, 17%)"
                };
            }
        }
    }, {
        key: "render",
        value: function render() {
            console.log(this.props.mode);
            return React.createElement(
                "div",
                { style: this.getBackgroundStyle(), className: "country-screen" },
                React.createElement(Bar, { modeChange: this.props.modeChange, mode: this.props.mode }),
                React.createElement(BackButton, { mode: this.props.mode, backToMainSc: this.props.backToMainSc }),
                React.createElement(CountryCard, {
                    mode: this.props.mode,
                    respond: this.respond,
                    key: this.state.countryKey,
                    isoAlpha3Code: this.state.isoAlpha3Code
                })
            );
        }
    }]);

    return CountryScreen;
}(React.Component);

export default CountryScreen;