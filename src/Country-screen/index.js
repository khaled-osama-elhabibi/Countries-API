import Bar  from "../common-components/bar.js" ;
import CountryCard from "./Components/CountryCard.js" ;
import BackButton from "./Components/BackButton.js" ;
class CountryScreen extends React.Component{
    render(){
        return(
            <div className = "country-screen">
                <Bar />
                <BackButton/>
                <CountryCard isoAlpha3Code="EGY"/>
            </div>
        )
    }
}

export default CountryScreen ;