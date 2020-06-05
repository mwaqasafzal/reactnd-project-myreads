import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import './App.css'
import {Route} from 'react-router-dom'
import {update} from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount(){
   this.getAllBooks();    
  }

  changeBookShelf=bookData=>{
    let books;
    update(bookData,bookData.shelf) //as update requires book{object}..will take id out of it and shelf
        .then(res=>{
          books=[...this.state.books];
          for(let i=0;i<books.length;i++)
            if(books[i].id===bookData.id){
              if(bookData.shelf==="none")
                books.splice(i,1);
              else
                books[i].shelf=bookData.shelf;
              break;
            }

          this.setState({
            books
          });
        });
  }
  
  getAllBooks=()=>{
    BooksAPI.getAll()
    .then(books=>{
      this.setState({
        books
      })
    });    
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={props=>(<ListBooks 
                                             {...props} 
                                              books={this.state.books} 
                                              changeBookShelf={this.changeBookShelf}/>)}/>
       
        <Route path="/search" component={props=><SearchBook {...props} selectedBooks={this.state.books} updateShelves={this.getAllBooks}/>}/>
      </div>
    )
  }
}

export default BooksApp
