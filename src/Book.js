import React,{Component} from 'react'

class Book extends Component{

    changeBookShelfHandler=(bookId,shelfName)=>{
        const bookData={
            id:bookId,
            shelf:shelfName
        }

        this.props.changeBookShelf(bookData);
    }
    render(){
        return(
            <li>
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLink})` }}></div>
                <div className="book-shelf-changer">
                <select value={this.props.shelf} onChange={(event)=>this.changeBookShelfHandler(this.props.bookId,event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
                <div className="book-title">{this.props.title}</div>
                {this.props.authors?this.props.authors.map(author=><div key={author} className="book-authors">{author}</div>):""} 
            </div>
        </li>
        );
        
    }

}

export default Book;