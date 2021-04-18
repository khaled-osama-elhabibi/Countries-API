class Countries extends React.Component{
    constructor(props){
        super(props);
    }
    getListOfItems(){
        return this.props.data.map((Element,index)=>(
        <CountryMinCard 
            mode = {this.props.mode}
            getInfoOfCountry ={this.props.getInfoOfCountry} 
            info = {Element} 
            key = {index}

        />))
    }
    render(){
        let listOfItems = this.getListOfItems() ;
        return(
            <div className = "countries">
                {listOfItems}
            </div>
        )
    }
}

class CountryMinCard extends React.Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this) ;
    }
    clickHandler(){
        this.props.getInfoOfCountry(this.props.info.alpha3Code)
    }
    getElementStyle(){
        if(this.props.mode === "light"){
            return{
                color : "black" ,
                backgroundColor : "hsl(0, 0%, 100%)"
            }
        }
        else if (this.props.mode === "dark")
        {
            return{
                color : "white",
                backgroundColor : "hsl(209, 23%, 22%)"
            }
        }
    }
    render(){
        return(
            <div style ={this.getElementStyle()} onClick={this.clickHandler} className = "country-min-card">
                <img className = "country-min-card__flag" src = {this.props.info.flag}/>
                <div className = "country-min-card__name">{this.props.info.name}</div>
                <ul className = "country-min-card__list">
                    
                    <li className = "country-min-card__list__item">
                        <span className = "country-min-card__list__item-name">Population:</span> 
                        {this.props.info.population} 
                    </li>
                    
                    <li className = "country-min-card__list__item">
                        <span className = "country-min-card__list__item-name">Region:</span> 
                        {this.props.info.region} 
                    </li>
                    
                    <li className = "country-min-card__list__item">
                        <span className = "country-min-card__list__item-name">Capital:</span> 
                        {this.props.info.capital}
                    </li>
                    
                </ul>

            </div>
        )
    }
}



export default Countries ;