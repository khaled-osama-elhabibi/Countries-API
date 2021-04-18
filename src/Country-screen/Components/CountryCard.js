import CountryInfoItem from "./CountryInfoItem.js"
import CountryBorderBtn from "./CountryBorderItem.js"

class CountryCard extends React.Component {
    constructor() {
        super();
        this.state = {searched : false};
        this.getCountryInfo = this.getCountryInfo.bind(this) 

    }
    getCountryInfo(){
        axios.get('https://restcountries.eu/rest/v2/alpha/'+this.props.isoAlpha3Code).then(resp => {
            this.setState({...resp.data , searched : true})
        });
    }
    componentDidMount(){
        this.getCountryInfo();
    }
    getCountryInfoItems(countryInfoItemMat){
        return (
            countryInfoItemMat.map((element,index)=>(
                <CountryInfoItem
                    key = {index} 
                    item = {{name : Object.keys(element)[0] ,value : Object.values(element)[0] }}
                />
          ))
        )
    }
    getCountryBorder(arr){
        if( arr.length !== 0 ){
            return arr.map(Element => 
            <CountryBorderBtn 
                respond={this.props.respond} 
                key = {Element} 
                countryIsoCode = {Element} 
                mode = {this.props.mode}    
            />
            )
        }
        else{
            console.log("here")
            return <span>None!</span>
        }
    }
    render(){
        let countryInfoItems , countriesOnBorder , countryInfoItemMat ;
        if(this.state.searched) {
            countryInfoItemMat = [
                {"Native Name: " : this.state.nativeName } ,
                {"Population: " : this.state.population} ,
                {"Region: " : this.state.region},
                {"Sub Region: " : this.state.subregion},
                {"Capital: " : this.state.capital},
                {"Top Level Domain: " : this.state.topLevelDomain},
                {"Currencies: " : this.state.currencies[0].name},
                {"Languages: " : this.state.languages[0].name},
            ];
            countryInfoItems = this.getCountryInfoItems(countryInfoItemMat);
            countriesOnBorder = this.getCountryBorder(this.state.borders);
        }
        return (
            this.props.isoAlpha3Code ? <div className = 'country' >
              <img className = "country__flag" src = {this.state.flag}/>
              <div className = "country__info" >
                <h1 className = "country__name">{this.state.name}</h1>
                <ul className = "country__main-info">
                  {countryInfoItems}
                </ul>
                <div className = "country__border-countries">
                  <span className = "country__border-countries--name">Border Countries: </span>
                    {countriesOnBorder}  
                  </div>
                </div>  
              </div> : ""
            );
    }

}

export default CountryCard ;  