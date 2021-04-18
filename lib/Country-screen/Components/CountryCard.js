var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import CountryInfoItem from "./CountryInfoItem.js";
import CountryBorderBtn from "./CountryBorderItem.js";

var CountryCard = function (_React$Component) {
    _inherits(CountryCard, _React$Component);

    function CountryCard() {
        _classCallCheck(this, CountryCard);

        var _this = _possibleConstructorReturn(this, (CountryCard.__proto__ || Object.getPrototypeOf(CountryCard)).call(this));

        _this.state = { searched: false };
        _this.getCountryInfo = _this.getCountryInfo.bind(_this);

        return _this;
    }

    _createClass(CountryCard, [{
        key: "getCountryInfo",
        value: function getCountryInfo() {
            var _this2 = this;

            axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.isoAlpha3Code).then(function (resp) {
                _this2.setState(Object.assign({}, resp.data, { searched: true }));
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getCountryInfo();
        }
    }, {
        key: "getCountryInfoItems",
        value: function getCountryInfoItems(countryInfoItemMat) {
            return countryInfoItemMat.map(function (element, index) {
                return React.createElement(CountryInfoItem, {
                    key: index,
                    item: { name: Object.keys(element)[0], value: Object.values(element)[0] }
                });
            });
        }
    }, {
        key: "getCountryBorder",
        value: function getCountryBorder(arr) {
            var _this3 = this;

            if (arr.length !== 0) {
                return arr.map(function (Element) {
                    return React.createElement(CountryBorderBtn, { respond: _this3.props.respond, key: Element, countryIsoCode: Element });
                });
            } else {
                console.log("here");
                return React.createElement(
                    "span",
                    null,
                    "None!"
                );
            }
        }
    }, {
        key: "render",
        value: function render() {
            var countryInfoItems = void 0,
                countriesOnBorder = void 0,
                countryInfoItemMat = void 0;
            if (this.state.searched) {
                countryInfoItemMat = [{ "Native Name: ": this.state.nativeName }, { "Population: ": this.state.population }, { "Region: ": this.state.region }, { "Sub Region: ": this.state.subregion }, { "Capital: ": this.state.capital }, { "Top Level Domain: ": this.state.topLevelDomain }, { "Currencies: ": this.state.currencies[0].name }, { "Languages: ": this.state.languages[0].name }];
                countryInfoItems = this.getCountryInfoItems(countryInfoItemMat);
                countriesOnBorder = this.getCountryBorder(this.state.borders);
            }
            return this.props.isoAlpha3Code ? React.createElement(
                "div",
                { className: "country" },
                React.createElement("img", { className: "country__flag", src: this.state.flag }),
                React.createElement(
                    "div",
                    { className: "country__info" },
                    React.createElement(
                        "h1",
                        { className: "country__name" },
                        this.state.name
                    ),
                    React.createElement(
                        "ul",
                        { className: "country__main-info" },
                        countryInfoItems
                    ),
                    React.createElement(
                        "div",
                        { className: "country__border-countries" },
                        React.createElement(
                            "span",
                            { className: "country__border-countries--name" },
                            "Border Countries: "
                        ),
                        countriesOnBorder
                    )
                )
            ) : "";
        }
    }]);

    return CountryCard;
}(React.Component);

export default CountryCard;