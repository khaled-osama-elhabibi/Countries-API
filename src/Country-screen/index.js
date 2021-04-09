import  Bar  from "../common-components/bar.js";
import CountryCard from "./Components/CountryCard.js"
class CountryScreen extends React.Component{
    render(){
        return(
            <div className = "country-screen">
                <Bar />
                <CountryCard isoAlpha3Code="IRN"/>
            </div>
        )
    }
}

export default CountryScreen ;