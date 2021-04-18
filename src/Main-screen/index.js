import  Bar  from "../common-components/bar.js" ;
import ControlBar from "./Components/ControlBar.js" ;
import  Countries from "./Components/CountryMinCard.js" ;
class MainScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data :[
                {
                    "name":"Germany",
                    "flag":"https://restcountries.eu/data/deu.svg",
                    "population":81770900,
                    "region":"Europe",
                    "capital":"Berlin" ,
                    "alpha3Code":"DEU"
                } ,
                {
                    "name":"United States of America" ,
                    "flag":"https://restcountries.eu/data/usa.svg",
                    "population":323947000,
                    "region":"Americas",
                    "capital":"Washington, D.C.",
                    "alpha3Code":"USA" 
                } ,
                {
                    "name":"Brazil",
                    "flag":"https://restcountries.eu/data/bra.svg",
                    "population":206135893,
                    "region":"Americas",
                    "capital":"Brasília" ,
                    "alpha3Code":"BRA"
                } ,
                {
                    "name":"Iceland",
                    "flag":"https://restcountries.eu/data/isl.svg" ,
                    "population":334300,
                    "region":"Europe",
                    "capital":"Reykjavík",
                    "alpha3Code":"ISL" 
                } ,
                {
                    "name":"Afghanistan",
                    "flag":"https://restcountries.eu/data/afg.svg",
                    "population":321547861,
                    "region":"Asia",
                    "capital":"Kabul" ,
                    "alpha3Code":"AFG"
                } ,
                {
                    "name":"Åland Islands",
                    "flag":"https://restcountries.eu/data/ala.svg",
                    "population":28875,
                    "region":"Europe",
                    "capital":"Mariehamn" ,
                    "alpha3Code":"ALA"
                } ,
                {
                    "name":"Albania",
                    "flag":"https://restcountries.eu/data/alb.svg",
                    "population":2886026,
                    "region":"Europe",
                    "capital":"Tirana" ,
                    "alpha3Code":"ALB"
                } ,
                {
                    "name":"Algeria",
                    "flag":"https://restcountries.eu/data/dza.svg",
                    "population":40400000,
                    "region":"Africa",
                    "capital":"Algiers",
                    "alpha3Code":"DZA" 
                }

            ],
            key : 0
        };
        this.respond = this.respond.bind(this) ; 
    }
    respond(data){
        this.setState((state)=>{
            return {
                data : data ,
                key : state.key + 1
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
        return(
            <div style = {this.getBackgroundStyle()} className = "main-screen">
                <Bar 
                    modeChange={this.props.modeChange}
                    mode = {this.props.mode}
                />
                <ControlBar 
                    getInfoOfCountry = {this.props.getInfoOfCountry} 
                    respond = {this.respond}
                    mode = {this.props.mode}
                />
                <Countries 
                    getInfoOfCountry = {this.props.getInfoOfCountry} 
                    key = {this.state.key} 
                    data = {this.state.data}
                    mode = {this.props.mode}
                />
            </div>
        )
    }
}


export default MainScreen ;