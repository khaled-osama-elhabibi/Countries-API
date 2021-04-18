class CountryBorderBtn extends React.Component{ //this.props.respond
    constructor(){
        super();
        this.state = {}
        this.clickHandler = this.clickHandler.bind(this) ;
    }
    render(){
        return (<button onClick={this.clickHandler} className="country-border">{this.state.name}</button>);
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.countryIsoCode)
        .then(resp => {this.setState({name : resp.data.name}) ;})    
    }
    clickHandler() { this.props.respond(this.props.countryIsoCode) }
}

export default CountryBorderBtn ;