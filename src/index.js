import  MainScreen from "./Main-screen/index.js";
import CountryScreen from "./Country-screen/index.js"
let root = document.getElementById('root') ;

document.documentElement.addEventListener('click',()=>{
    if(document.getElementsByClassName("control-bar__search__list")[0] != undefined) 
    document.getElementsByClassName("control-bar__search__list")[0].style.display = "none" ;  
    if(document.getElementsByClassName("control-bar__filter-list")[0] != undefined)
    document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none" ;

})
class App extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            isSearchActive : false ,
            isoAlpha3Code : "" ,
            mode : "light" , 
            countryKey : 0
        }
        this.getInfoOfCountry = this.getInfoOfCountry.bind(this) ;
        this.backToMainSc = this.backToMainSc.bind(this) ;
        this.modeChange = this.modeChange.bind(this) 
    }
    modeChange(){
        this.setState((state)=>{
            if( state.mode === "dark" )
            return { mode : "light" }
            else if( state.mode === "light" )
            return {mode : "dark"}
        })
    }
    getInfoOfCountry(isoAlpha3Code){
        this.setState((state)=>{
          return {
            isoAlpha3Code : isoAlpha3Code ,
            isSearchActive : true ,
            countryKey : state.countryKey+1
          }
        })  
    }
    backToMainSc(){
        this.setState(()=>{
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
                        backToMainSc = {this.backToMainSc}
                        mode = {this.state.mode}
                        modeChange = {this.modeChange} 
                    /> 
                    : 
                    <MainScreen
                        mode = {this.state.mode} 
                        modeChange = {this.modeChange} 
                        getInfoOfCountry = {this.getInfoOfCountry} 
                    /> 
                )}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    root
)