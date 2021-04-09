class CountryInfoItem extends React.Component{
    render(){
        return (
            <li className = "country__main-info-item">
                <span className = "country__main-info-item--name">{this.props.item.name}</span>   
                {this.props.item.value}
            </li>
        );
    }
}
export default CountryInfoItem ;