import React,{Component} from 'react'
import {debounce} from 'throttle-debounce'
import {withRouter} from 'react-router-dom' //hoc that will put special props[e.g history etc] on SearchBar
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={query:""};
        this.searchBooks=debounce(500,this.searchBooks);
    }
  

    inputSearchHandler=event=>{

        const value=event.target.value;
        this.setState({
            query:value
        });

        //debounced method
        this.searchBooks(value.trim());
    }

    searchBooks=(value)=>{
        this.props.bookSearchHandler(value);
    }

    render(){
        return(
            <div className="search-books-bar">
            <button onClick={()=>{
                                    this.props.updateShelves();
                                    this.props.history.push('/');
                                }}
                    className="close-search"></button>
            
            <div className="search-books-input-wrapper">
              <input type="text" 
                    placeholder="Search by title or author"
                    onChange={this.inputSearchHandler}
                    value={this.state.query}/>
            </div>
          </div>
        );

    }
}

export default withRouter(SearchBar);