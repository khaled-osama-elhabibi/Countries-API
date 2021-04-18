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
    getBackgroundStyle(){
        if(this.props.mode === "light"){
            return{
                color : "black" ,
                backgroundColor : "hsl(0, 0%, 98%)"
            }
        }
        else if (this.props.mode === "dark")
        {
            return{
                color : "white",
                backgroundColor : "hsl(207, 26%, 17%)"
            }
        }
    }
    render(){
        console.log(this.props.mode)
        return(
            <div style = {this.getBackgroundStyle()} className = "country-screen">
                <Bar modeChange = {this.props.modeChange}  mode = {this.props.mode}/>
                <BackButton mode = {this.props.mode} backToMainSc = {this.props.backToMainSc}/>    
                <CountryCard 
                    mode = {this.props.mode}
                    respond={this.respond}  
                    key={this.state.countryKey} 
                    isoAlpha3Code = {this.state.isoAlpha3Code}
                />
            </div>
        )
    }
}

export default CountryScreen ;