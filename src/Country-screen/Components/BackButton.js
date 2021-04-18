class BackButton extends React.Component{
    render(){
        return(
            <div onClick = {this.props.returnToMainSc} className = "back-container">
                <span className = "back-button"><span className="material-icons">arrow_back</span>Back</span>
            </div>
        )
    }
}

export default BackButton ;