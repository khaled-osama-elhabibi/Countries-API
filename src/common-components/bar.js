class Bar extends React.Component{
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
            <div style = {this.getElementStyle()} className = "bar-container">
                <div className = "bar">
                    <h1 className = "bar__statment">Where in the world?</h1>
                    <button onClick={this.props.modeChange} className = "bar__dark-mode">
                        <span className="material-icons bar__dark-mode__icon">dark_mode</span>
                        Dark Mode
                    </button>
                </div>
            </div>
        )
    }
}

export default Bar ;  