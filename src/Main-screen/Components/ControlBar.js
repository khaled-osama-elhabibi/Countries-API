import SearchItem from "./SearchItem.js" ;
/*----------------------------------------ControlBar----------------------------------------*/

class ControlBar extends React.Component{
    render(){
        return(
            <div className = "control-bar">
                <Search respondToApp = {this.props.respondToApp}/>
                <Filter respond = {this.props.respond}/>
            </div>
        )
    }
}

/*----------------------------------------------------------------------------------------*/
/*-----------------------------------------Search-----------------------------------------*/
/*----------------------------------------------------------------------------------------*/
class Search extends React.Component{
    constructor() {
        super() ;
        this.state = {searchActive : false} ;
        this.closeSearch = this.closeSearch.bind(this) ;
        this.pressHandler = this.pressHandler.bind(this) ;
        this.searchForCountry = this.searchForCountry.bind(this) ;
    }
    closeSearch() {this.setState({searchActive : false})}
    isSearchActive = () => (this.state.searchActive)
    searchForCountry(name){
        axios.get('https://restcountries.eu/rest/v2/name/'+name).then(resp=> 
        {
          this.setState(
            {
              alphaCodes : resp.data.map(element => element["alpha3Code"]) 
              ,names : resp.data.map(element => element.name) 
              ,flags : resp.data.map(element => element.flag) 
              ,searchActive : true
            })
        })
    }
    pressHandler(e){
        clearTimeout(this.state.timerId) ;
        e.persist();
        this.setState({timerId : setTimeout(()=>{this.searchForCountry(e.target.value);},500)})
        document.getElementsByClassName("control-bar__search__list")[0].style.display = "inline-block" ;
    }
    render(){
        let listOfCount = [] ;
        if(this.state.names != undefined){
            listOfCount = this.state.names.map((elem , index) => 
            <SearchItem 
                countryName = {elem} 
                key = {index} 
                countryCode = {this.state.alphaCodes[index]} 
                countryFlag = {this.state.flags[index]} 
                respondToApp = {this.props.respondToApp}
            />
            )
        }
        return (
            <div className = "control-bar__search-container">
                <div className = "control-bar__search">
                    <span className = "material-icons control-bar__search__icon">search</span>
                    <input 
                    className = "control-bar__search__bar" 
                    placeholder = "Search For A Country"
                    onKeyDown = {this.pressHandler} 
                    />
                </div>
                {
                    this.isSearchActive() ?
                        <ul className = "control-bar__search__list">
                            {listOfCount}
                        </ul> 
                    : ""
                }
        </div>
        )
    }
}
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------Filter------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
class Filter extends React.Component{
    constructor(){
        super();
        this.state = {};
        this.getRegionCountriesInAfrica = this.getRegionCountriesInAfrica.bind(this) ;
        this.getRegionCountriesInAmericas = this.getRegionCountriesInAmericas.bind(this) ;
        this.getRegionCountriesInAsia = this.getRegionCountriesInAsia.bind(this) ;
        this.getRegionCountriesInEurope = this.getRegionCountriesInEurope.bind(this) ;
        this.getRegionCountriesInOceania = this.getRegionCountriesInOceania.bind(this) ;

    }
    getRegionCountriesInAfrica(){
        axios.get( 'https://restcountries.eu/rest/v2/region/Africa' ).then(resp => {
            this.props.respond(resp.data)
        });
        document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none" ;
    }
    getRegionCountriesInAsia(){
        axios.get( 'https://restcountries.eu/rest/v2/region/Asia' ).then(resp => {
            this.props.respond(resp.data)
        });
        document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none" ;
    }
    getRegionCountriesInAmericas(){
        axios.get( 'https://restcountries.eu/rest/v2/region/Americas' ).then(resp => {
            this.props.respond(resp.data)
        });
        document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none" ;
    }
    getRegionCountriesInEurope(){
        axios.get( 'https://restcountries.eu/rest/v2/region/Europe' ).then(resp => {
            this.props.respond(resp.data)
        });
        document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none" ;
    }
    getRegionCountriesInOceania(){
        axios.get( 'https://restcountries.eu/rest/v2/region/Oceania' ).then(resp => {
            this.props.respond(resp.data)
        });
        document.getElementsByClassName("control-bar__filter-list")[0].style.display = "none" ;
    }

    onClickHandlerRegions(){
        document.getElementsByClassName("control-bar__filter-list")[0].style.display = "inline-block" ;
    }
    render(){
        return(
            <div className = "control-bar__filter">
            <button onClick={this.onClickHandlerRegions} className = "control-bar__filter-btn">
                Filter By Region 
                <span className = "material-icons">expand_more</span>
            </button>
            <ul className = "control-bar__filter-list">
            <li onClick={this.getRegionCountriesInAfrica} className = "control-bar__filter-list-item">Africa</li>
            <li onClick={this.getRegionCountriesInAmericas} className = "control-bar__filter-list-item">Americas</li>
            <li onClick={this.getRegionCountriesInAsia} className = "control-bar__filter-list-item">Asia</li>
            <li onClick={this.getRegionCountriesInEurope} className = "control-bar__filter-list-item">Europe</li>
            <li onClick={this.getRegionCountriesInOceania} className = "control-bar__filter-list-item">Oceania</li>

            </ul>
        </div>

        )    
    }
}

export default ControlBar ;
