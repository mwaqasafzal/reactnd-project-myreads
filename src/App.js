import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import './App.css'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll()
            .then(books=>{
              this.setState({
                books
              })
            })           
  }

  changeBookShelf=bookData=>{
    const books=[...this.state.books];
    for(let book of books)
      if(book.id===bookData.id){
        book.shelf=bookData.shelf;
        break;
      }
    
    this.setState({
      books
    })
        

  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={props=>(<ListBooks 
                                             {...props} 
                                              books={this.state.books} 
                                              changeBookShelf={this.changeBookShelf}/>)}/>
       
        <Route path="/search" component={props=><SearchBook selectedBooks={this.state.books}/>}/>
      </div>
    )
  }
}

export default BooksApp
