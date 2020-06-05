import React from 'react';
import Book from './Book';

const BookShelf=props=>{
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book=>(<Book 
                                            changeBookShelf={props.changeBookShelf}
                                            shelf={book.shelf}
                                            key={book.id}
                                            bookId={book.id}
                                            imageLink={book.imageLinks.thumbnail} 
                                            authors={book.authors} 
                                            title={book.title}/>))}
                </ol>
            </div>
        </div>
    );
}
export default BookShelf;