class Bar extends React.Component{
    render(){
        return(
            <div className = "bar-container">
                <div className = "bar">
                    <h1 className = "bar__statment">Where in the world?</h1>
                    <button className = "bar__dark-mode">
                        <span className="material-icons bar__dark-mode__icon">dark_mode</span>
                        Dark Mode
                    </button>
                </div>
            </div>
        )
    }
}

export default Bar ;  