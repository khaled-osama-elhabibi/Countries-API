class SearchItem extends React.Component {
    constructor() {
      super();
      this.clickHandler = this.clickHandler.bind(this) ;
    }
    clickHandler(){
      this.props.respondToApp(this.props.countryCode)
    }
    render() {
      return (
        <li onClick ={this.clickHandler} className = "control-bar__search__list-item">
          <img className = "control-bar__search__list-item__flag" src = {this.props.countryFlag} />
          <p className = "control-bar__search__list-item__name">{this.props.countryName}</p>
        </li>
        ) ; 
    }

}
export default SearchItem ;