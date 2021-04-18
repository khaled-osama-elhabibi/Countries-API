var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countries = function (_React$Component) {
    _inherits(Countries, _React$Component);

    function Countries(props) {
        _classCallCheck(this, Countries);

        return _possibleConstructorReturn(this, (Countries.__proto__ || Object.getPrototypeOf(Countries)).call(this, props));
    }

    _createClass(Countries, [{
        key: "getListOfItems",
        value: function getListOfItems() {
            var _this2 = this;

            return this.props.data.map(function (Element, index) {
                return React.createElement(CountryMinCard, {
                    mode: _this2.props.mode,
                    getInfoOfCountry: _this2.props.getInfoOfCountry,
                    info: Element,
                    key: index

                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var listOfItems = this.getListOfItems();
            return React.createElement(
                "div",
                { className: "countries" },
                listOfItems
            );
        }
    }]);

    return Countries;
}(React.Component);

var CountryMinCard = function (_React$Component2) {
    _inherits(CountryMinCard, _React$Component2);

    function CountryMinCard(props) {
        _classCallCheck(this, CountryMinCard);

        var _this3 = _possibleConstructorReturn(this, (CountryMinCard.__proto__ || Object.getPrototypeOf(CountryMinCard)).call(this, props));

        _this3.clickHandler = _this3.clickHandler.bind(_this3);
        return _this3;
    }

    _createClass(CountryMinCard, [{
        key: "clickHandler",
        value: function clickHandler() {
            this.props.getInfoOfCountry(this.props.info.alpha3Code);
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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: this.getElementStyle(), onClick: this.clickHandler, className: "country-min-card" },
                React.createElement("img", { className: "country-min-card__flag", src: this.props.info.flag }),
                React.createElement(
                    "div",
                    { className: "country-min-card__name" },
                    this.props.info.name
                ),
                React.createElement(
                    "ul",
                    { className: "country-min-card__list" },
                    React.createElement(
                        "li",
                        { className: "country-min-card__list__item" },
                        React.createElement(
                            "span",
                            { className: "country-min-card__list__item-name" },
                            "Population:"
                        ),
                        this.props.info.population
                    ),
                    React.createElement(
                        "li",
                        { className: "country-min-card__list__item" },
                        React.createElement(
                            "span",
                            { className: "country-min-card__list__item-name" },
                            "Region:"
                        ),
                        this.props.info.region
                    ),
                    React.createElement(
                        "li",
                        { className: "country-min-card__list__item" },
                        React.createElement(
                            "span",
                            { className: "country-min-card__list__item-name" },
                            "Capital:"
                        ),
                        this.props.info.capital
                    )
                )
            );
        }
    }]);

    return CountryMinCard;
}(React.Component);

export default Countries;