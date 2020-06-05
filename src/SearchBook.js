import React,{Component} from 'react';
import SearchBar from './SearchBar';
import  {search,update} from './BooksAPI' 
import Book from './Book'

class SearchBook extends Component{
  state={
    books:[]
  }


  //bookData->{id:---,shelf:---}
  changeBookShelf=(bookData)=>{
    const books=[...this.state.books];
    //not getting the book directly because will use index of book ahead
    const bookIndex=books.findIndex(book=>book.id===bookData.id);

    update(books[bookIndex],bookData.shelf)//updating the book over the server
          .then(()=>{//updating the book in state

            //immutably updating the state to the lower level of nesting

            //getting the book out of array of books and updating it with the shelf
            const book={
              ...books[bookIndex],
              shelf:bookData.shelf
            }

            //adding the updated book on same index
            books.splice(bookIndex,1,book);
            
            this.setState({
              books
            })
          })

  }

    //this method will update the state based upon the input to search box
  bookSearchHandler=query=>{
    if(query.length>0){
      search(query)
        .then(books=>{
          if(this.checkFetchError(books)){
            this.setState({
              books:[]
            })
          }
          else{//retrived successfully
              //adding shelf to the selected books(passed as props)
              for(let selectedBook of this.props.selectedBooks)
              for(let book of books)
                if(selectedBook.id===book.id){
                  book.shelf=selectedBook.shelf
                  break;
                }
              this.setState({
                books
              });
          }
        })
    }
    else{
      this.setState({
        books:[]
      })
    }
      
    
  }

  checkFetchError=response=>{
    return response.error?true:false;
  }
  render(){
    return(
      <div className="search-books">
             <SearchBar bookSearchHandler={this.bookSearchHandler}
                        updateShelves={this.props.updateShelves}/>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.state.books.map(book=>(<Book
                                              changeBookShelf={this.changeBookShelf}
                                              shelf={book.shelf || "none"} 
                                              key={book.id}
                                              bookId={book.id}
                                              imageLink={book.imageLinks?book.imageLinks.thumbnail:""} 
                                              authors={book.authors} 
                                              title={book.title} />))}
                </ol>
              </div>
            </div>
    );
  }
  
}

export default SearchBook;