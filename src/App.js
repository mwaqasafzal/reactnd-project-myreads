import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll()
            .then(books=>{
              console.log(books);
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
          <ListBooks books={this.state.books} changeBookShelf={this.changeBookShelf}/>
      </div>
    )
  }
}

export default BooksApp
