var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bar = function (_React$Component) {
    _inherits(Bar, _React$Component);

    function Bar(props) {
        _classCallCheck(this, Bar);

        return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).call(this, props));
    }

    _createClass(Bar, [{
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
                { style: this.getElementStyle(), className: "bar-container" },
                React.createElement(
                    "div",
                    { className: "bar" },
                    React.createElement(
                        "h1",
                        { className: "bar__statment" },
                        "Where in the world?"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.props.modeChange, className: "bar__dark-mode" },
                        React.createElement(
                            "span",
                            { className: "material-icons bar__dark-mode__icon" },
                            "dark_mode"
                        ),
                        "Dark Mode"
                    )
                )
            );
        }
    }]);

    return Bar;
}(React.Component);

export default Bar;