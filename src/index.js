import  MainScreen from "./Main-screen/index.js";
import CountryScreen from "./Country-screen/index.js"
let root = document.getElementById('root') ;

class App extends React.Component{
    render(){
        return(
            <div className = "App">
                <CountryScreen/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    root
)