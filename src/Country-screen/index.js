import Bar  from "../common-components/bar.js" ;
import CountryCard from "./Components/CountryCard.js" ;
import BackButton from "./Components/BackButton.js" ;
class CountryScreen extends React.Component{
    constructor(props){
        super(props) ; 
        this.state = {isoAlpha3Code : this.props.isoAlpha3Code , countryKey : 0}
        this.respond = this.respond.bind(this) ;
    }
    respond(isoAlpha3Code){
        this.setState((state)=>{
          return {
            isoAlpha3Code : isoAlpha3Code ,
            countryKey : state.countryKey+1
          }
        })  
    }
    render(){
        return(
            <div className = "country-screen">
                <Bar />
                <BackButton returnToMainSc = {this.props.returnToMainSc}/>    
                <CountryCard 
                    respond={this.respond}  
                    key={this.state.countryKey} 
                    isoAlpha3Code = {this.state.isoAlpha3Code}
                />
            </div>
        )
    }
}

export default CountryScreen ;