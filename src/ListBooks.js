import React,{Component} from 'react';
import BookShelf from './BookShelf';

class ListBooks extends Component{


  render(){
    
      return(
          
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf books={this.props.books.filter(book=>book.shelf==="currentlyReading")} 
                                shelfName="Currently Reading" changeBookShelf={this.props.changeBookShelf}/>
                    <BookShelf books={this.props.books.filter(book=>book.shelf==="wantToRead")} 
                                shelfName="Want to Read" changeBookShelf={this.props.changeBookShelf}/>

                    <BookShelf books={this.props.books.filter(book=>book.shelf==="read")} 
                                shelfName="Read" changeBookShelf={this.props.changeBookShelf}/>
                </div>
            </div>
            <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
      );
  }

}

export default ListBooks;