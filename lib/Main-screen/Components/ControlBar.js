var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import SearchItem from "./SearchItem.js";
/*----------------------------------------ControlBar----------------------------------------*/

var ControlBar = function (_React$Component) {
    _inherits(ControlBar, _React$Component);

    function ControlBar() {
        _classCallCheck(this, ControlBar);

        return _possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).apply(this, arguments));
    }

    _createClass(ControlBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "control-bar" },
                React.createElement(Search, {
                    getInfoOfCountry: this.props.getInfoOfCountry,
                    mode: this.props.mode
                }),
                React.createElement(Filter, {
                    respond: this.props.respond,
                    mode: this.props.mode
                })
            );
        }
    }]);

    return ControlBar;
}(React.Component);

/*----------------------------------------------------------------------------------------*/
/*-----------------------------------------Search-----------------------------------------*/
/*----------------------------------------------------------------------------------------*/


var Search = function (_React$Component2) {
    _inherits(Search, _React$Component2);

    function Search() {
        _classCallCheck(this, Search);

        var _this2 = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

        _this2.isSearchActive = function () {
            return _this2.state.searchActive;
        };

        _this2.state = { searchActive: false };
        _this2.closeSearch = _this2.closeSearch.bind(_this2);
        _this2.pressHandler = _this2.pressHandler.bind(_this2);
        _this2.searchForCountry = _this2.searchForCountry.bind(_this2);
        return _this2;
    }

    _createClass(Search, [{
        key: "closeSearch",
        value: function closeSearch() {
            this.setState({ searchActive: false });
        }
    }, {
        key: "searchForCountry",
        value: function searchForCountry(name) {
            var _this3 = this;

            axios.get('https://restcountries.eu/rest/v2/name/' + name).then(function (resp) {
                _this3.setState({
                    alphaCodes: resp.data.map(function (element) {
                        return element["alpha3Code"];
                    }),
                    names: resp.data.map(function (element) {
                        return element.name;
                    }),
                    flags: resp.data.map(function (element) {
                        return element.flag;
                    }),
                    searchActive: true
                });
            });
        }
    }, {
        key: "pressHandler",
        value: function pressHandler(e) {
            var _this4 = this;

            clearTimeout(this.state.timerId);
            e.persist();
            this.setState({ timerId: setTimeout(function () {
                    _this4.searchForCountry(e.target.value);
                }, 500) });
            document.getElementsByClassName("control-bar__search__list")[0].style.display = "inline-block";
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
            var _this5 = this;

            var listOfCount = [];
            if (this.state.names != undefined) {
                listOfCount = this.state.names.map(function (elem, index) {
                    return React.createElement(SearchItem, {
                        countryName: elem,
                        key: index,
                        countryCode: _this5.state.alphaCodes[index],
                        countryFlag: _this5.state.flags[index],
                        getInfoOfCountry: _this5.props.getInfoOfCountry
                    });
                });
            }
            return React.createElement(
                "div",
                { className: "control-bar__search-container" },
                React.createElement(
                    "div",
                    { style: this.getElementStyle(), className: "control-bar__search" },
                    React.createElement(
                        "span",
                        { className: "material-icons control-bar__search__icon" },
                        "search"
                    ),
                    React.createElement("input", {
                        style: this.getElementStyle(),
                        className: "control-bar__search__bar",
                        placeholder: "Search For A Country",
                        onKeyDown: this.pressHandler
                    })
                ),
                this.isSearchActive() ? React.createElement(
                    "ul",
                    { style: this.getElementStyle(), className: "control-bar__search__list" },
                    listOfCount
                ) : ""
            );
        }
    }]);

    return Search;
}(React.Component);
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------Filter------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/


var Filter = function (_React$Component3) {
    _inherits(Filter, _React$Component3);

    function Filter() {
        _classCallCheck(this, Filter);

        var _this6 = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

        _this6.state = {};
        _this6.getRegionCountriesInAfrica = _this6.getRegionCountriesInAfrica.bind(_this6);
        _this6.getRegionCountriesInAmericas = _this6.getRegionCountriesInAmericas.bind(_this6);
        _this6.getRegionCountriesInAsia = _this6.getRegionCountriesInAsia.bind(_this6);
        _this6.getRegionCountriesInEurope = _this6.getRegionCountriesInEurope.bind(_this6);
        _this6.getRegionCountriesInOceania = _this6.getRegionCountriesInOceania.bind(_this6);

        return _this6;
    }

    _createClass(Filter, [{
        key: "getRegionCountriesInAfrica",
        value: function getRegionCountriesInAfrica() {
            var _this7 = this;

            axios.get('https://restcountries.eu/rest/v2/region/Africa').then(function (resp) {
                _this7.props.respond(resp.data);
            });
            document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none";
        }
    }, {
        key: "getRegionCountriesInAsia",
        value: function getRegionCountriesInAsia() {
            var _this8 = this;

            axios.get('https://restcountries.eu/rest/v2/region/Asia').then(function (resp) {
                _this8.props.respond(resp.data);
            });
            document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none";
        }
    }, {
        key: "getRegionCountriesInAmericas",
        value: function getRegionCountriesInAmericas() {
            var _this9 = this;

            axios.get('https://restcountries.eu/rest/v2/region/Americas').then(function (resp) {
                _this9.props.respond(resp.data);
            });
            document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none";
        }
    }, {
        key: "getRegionCountriesInEurope",
        value: function getRegionCountriesInEurope() {
            var _this10 = this;

            axios.get('https://restcountries.eu/rest/v2/region/Europe').then(function (resp) {
                _this10.props.respond(resp.data);
            });
            document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none";
        }
    }, {
        key: "getRegionCountriesInOceania",
        value: function getRegionCountriesInOceania() {
            var _this11 = this;

            axios.get('https://restcountries.eu/rest/v2/region/Oceania').then(function (resp) {
                _this11.props.respond(resp.data);
            });
            document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none";
        }
    }, {
        key: "onClickHandlerRegions",
        value: function onClickHandlerRegions() {
            document.getElementsByClassName("control-bar__filter-list")[0].style.display = "inline-block";
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
                { className: "control-bar__filter" },
                React.createElement(
                    "button",
                    { style: this.getElementStyle(), onClick: this.onClickHandlerRegions, className: "control-bar__filter-btn" },
                    "Filter By Region",
                    React.createElement(
                        "span",
                        { className: "material-icons" },
                        "expand_more"
                    )
                ),
                React.createElement(
                    "ul",
                    { style: this.getElementStyle(), className: "control-bar__filter-list" },
                    React.createElement(
                        "li",
                        { onClick: this.getRegionCountriesInAfrica, className: "control-bar__filter-list-item" },
                        "Africa"
                    ),
                    React.createElement(
                        "li",
                        { onClick: this.getRegionCountriesInAmericas, className: "control-bar__filter-list-item" },
                        "Americas"
                    ),
                    React.createElement(
                        "li",
                        { onClick: this.getRegionCountriesInAsia, className: "control-bar__filter-list-item" },
                        "Asia"
                    ),
                    React.createElement(
                        "li",
                        { onClick: this.getRegionCountriesInEurope, className: "control-bar__filter-list-item" },
                        "Europe"
                    ),
                    React.createElement(
                        "li",
                        { onClick: this.getRegionCountriesInOceania, className: "control-bar__filter-list-item" },
                        "Oceania"
                    )
                )
            );
        }
    }]);

    return Filter;
}(React.Component);

export default ControlBar;