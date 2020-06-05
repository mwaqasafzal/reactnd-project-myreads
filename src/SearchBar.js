import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {debounce} from 'throttle-debounce'

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
            <Link 
                className="close-search"
                to="/">Close
            </Link>
            
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

export default SearchBar;