import  MainScreen from "./Main-screen/index.js";
import CountryScreen from "./Country-screen/index.js"
let root = document.getElementById('root') ;

document.documentElement.addEventListener('click',()=>{
    if(document.getElementsByClassName("control-bar__search__list")[0] != undefined)
    {
        document.getElementsByClassName("control-bar__search__list")[0].style.display = "none" ;  
        document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none" ;
    }

})
  

class App extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {isSearchActive : false , isoAlpha3Code : "TUR" , countryKey : 0}
        this.searchActivate = this.searchActivate.bind(this) ;
        this.searchDeactivate = this.searchDeactivate.bind(this) ;
        this.respondToApp = this.respondToApp.bind(this) ;
        this.returnToMainSc = this.returnToMainSc.bind(this) ;
    }
    searchDeactivate(){
        this.setState({isSearchActive : false});
    }
    searchActivate(){
        this.setState({isSearchActive : true});
    }
    respondToApp(isoAlpha3Code){
        this.setState((state)=>{
          return {
            isoAlpha3Code : isoAlpha3Code ,
            isSearchActive : true ,
            countryKey : state.countryKey+1
          }
        })  
    }
    returnToMainSc(){
        this.setState((state)=>{
            return {
              isSearchActive : false ,
              countryKey : 0
            }
        }) 
    }
    render(){
        return(
            <div className = "App">
                {(   this.state.isSearchActive
                    ?
                    <CountryScreen 
                        key = {this.state.countryKey} 
                        isoAlpha3Code = {this.state.isoAlpha3Code}
                        returnToMainSc = {this.returnToMainSc}
                    /> 
                    : 
                    <MainScreen respondToApp = {this.respondToApp} /> 
                )}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    root
)