import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        onMoveBook: PropTypes.func.isRequired
    }
    render() {
        const book = this.props.book;
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + (book.imageLinks && book.imageLinks.smallThumbnail) ? book.imageLinks.smallThumbnail : '' + ")" }}></div>
                <div className="book-shelf-changer">
                <select
                    value={book.shelf ? book.shelf : 'None'}
                    onChange={(event) => this.props.onMoveBook(book, event.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option selected value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{ book.title }</div>
            <div className="book-authors">{ book.authors && book.authors.length ? book.authors.join(', ') : '' }</div>
        </div>
        )
    }
}

export default Book