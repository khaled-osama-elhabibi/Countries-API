var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import MainScreen from "./Main-screen/index.js";
import CountryScreen from "./Country-screen/index.js";
var root = document.getElementById('root');

document.documentElement.addEventListener('click', function () {
    if (document.getElementsByClassName("control-bar__search__list")[0] != undefined) {
        document.getElementsByClassName("control-bar__search__list")[0].style.display = "none";
        document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none";
    }
});

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { isSearchActive: false, isoAlpha3Code: "TUR", countryKey: 0 };
        _this.searchActivate = _this.searchActivate.bind(_this);
        _this.searchDeactivate = _this.searchDeactivate.bind(_this);
        _this.respondToApp = _this.respondToApp.bind(_this);
        _this.returnToMainSc = _this.returnToMainSc.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "searchDeactivate",
        value: function searchDeactivate() {
            this.setState({ isSearchActive: false });
        }
    }, {
        key: "searchActivate",
        value: function searchActivate() {
            this.setState({ isSearchActive: true });
        }
    }, {
        key: "respondToApp",
        value: function respondToApp(isoAlpha3Code) {
            this.setState(function (state) {
                return {
                    isoAlpha3Code: isoAlpha3Code,
                    isSearchActive: true,
                    countryKey: state.countryKey + 1
                };
            });
        }
    }, {
        key: "returnToMainSc",
        value: function returnToMainSc() {
            this.setState(function (state) {
                return {
                    isSearchActive: false,
                    countryKey: 0
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "App" },
                this.state.isSearchActive ? React.createElement(CountryScreen, {
                    key: this.state.countryKey,
                    isoAlpha3Code: this.state.isoAlpha3Code,
                    returnToMainSc: this.returnToMainSc
                }) : React.createElement(MainScreen, { respondToApp: this.respondToApp })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), root);