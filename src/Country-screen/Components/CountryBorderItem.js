class CountryBorderBtn extends React.Component{ //this.props.respond
    constructor(){
        super();
        this.state = {}
        this.clickHandler = this.clickHandler.bind(this) ;
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.countryIsoCode)
        .then(resp => {this.setState({name : resp.data.name}) ;})    
    }
    getElementStyle(){
        if(this.props.mode === "light"){
            return{
                color : "black" ,
                backgroundColor : "hsl(0, 0%, 100%)"
            }
        }
        else if (this.props.mode === "dark")
        {
            return{
                color : "white",
                backgroundColor : "hsl(209, 23%, 22%)"
            }
        }
    }
    clickHandler() { this.props.respond(this.props.countryIsoCode) }
    render(){
        return (
        <button 
            onClick={this.clickHandler} 
            className="country-border"
            style = {this.getElementStyle()}>

            {this.state.name}
        </button>
        );
    }
}

export default CountryBorderBtn ;