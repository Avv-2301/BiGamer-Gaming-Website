const title = "Search Your keywords";



function Search(){
    return(
        <div>
            <div className="widget widget-search">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <form action="/" className="search-wrapper">
                    <input
                        type="text"
                        name="s"
                        id="item01"
                        // value={this.state.search}
                        onChange={(e)=>{this.setState({search: e.target.value});}}
                        placeholder="Search Here..."
                    />
                    <button type="submit"><i className="icofont-search-2"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Search;