class BackButton extends React.Component{
    constructor(props){
        super(props) ;
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
            <div  onClick = {this.props.backToMainSc} className = "back-container">
                <span style = {this.getElementStyle()} className = "back-button"><span className="material-icons">arrow_back</span>Back</span>
            </div>
        )
    }
}

export default BackButton ;