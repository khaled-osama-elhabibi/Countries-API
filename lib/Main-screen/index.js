var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Bar from "../common-components/bar.js";
import ControlBar from "./Components/ControlBar.js";
import Countries from "./Components/CountryMinCard.js";

var MainScreen = function (_React$Component) {
    _inherits(MainScreen, _React$Component);

    function MainScreen(props) {
        _classCallCheck(this, MainScreen);

        var _this = _possibleConstructorReturn(this, (MainScreen.__proto__ || Object.getPrototypeOf(MainScreen)).call(this, props));

        _this.state = {
            data: [{
                "name": "Germany",
                "flag": "https://restcountries.eu/data/deu.svg",
                "population": 81770900,
                "region": "Europe",
                "capital": "Berlin",
                "alpha3Code": "DEU"
            }, {
                "name": "United States of America",
                "flag": "https://restcountries.eu/data/usa.svg",
                "population": 323947000,
                "region": "Americas",
                "capital": "Washington, D.C.",
                "alpha3Code": "USA"
            }, {
                "name": "Brazil",
                "flag": "https://restcountries.eu/data/bra.svg",
                "population": 206135893,
                "region": "Americas",
                "capital": "Brasília",
                "alpha3Code": "BRA"
            }, {
                "name": "Iceland",
                "flag": "https://restcountries.eu/data/isl.svg",
                "population": 334300,
                "region": "Europe",
                "capital": "Reykjavík",
                "alpha3Code": "ISL"
            }, {
                "name": "Afghanistan",
                "flag": "https://restcountries.eu/data/afg.svg",
                "population": 321547861,
                "region": "Asia",
                "capital": "Kabul",
                "alpha3Code": "AFG"
            }, {
                "name": "Åland Islands",
                "flag": "https://restcountries.eu/data/ala.svg",
                "population": 28875,
                "region": "Europe",
                "capital": "Mariehamn",
                "alpha3Code": "ALA"
            }, {
                "name": "Albania",
                "flag": "https://restcountries.eu/data/alb.svg",
                "population": 2886026,
                "region": "Europe",
                "capital": "Tirana",
                "alpha3Code": "ALB"
            }, {
                "name": "Algeria",
                "flag": "https://restcountries.eu/data/dza.svg",
                "population": 40400000,
                "region": "Africa",
                "capital": "Algiers",
                "alpha3Code": "DZA"
            }],
            key: 0
        };
        _this.respond = _this.respond.bind(_this);
        return _this;
    }

    _createClass(MainScreen, [{
        key: "respond",
        value: function respond(data) {
            this.setState(function (state) {
                return {
                    data: data,
                    key: state.key + 1
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "main-screen" },
                React.createElement(Bar, null),
                React.createElement(ControlBar, { respondToApp: this.props.respondToApp, respond: this.respond }),
                React.createElement(Countries, { respondToApp: this.props.respondToApp, key: this.state.key, data: this.state.data })
            );
        }
    }]);

    return MainScreen;
}(React.Component);

export default MainScreen;