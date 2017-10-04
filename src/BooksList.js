import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BooksShelf from './BooksShelf'

class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BooksShelf title="Currently Reading" type="currentlyReading" books={this.props.books} onMoveBook={this.props.onMoveBook} />
                        <BooksShelf title="Want to Read" type="wantToRead" books={this.props.books} onMoveBook={this.props.onMoveBook} />
                        <BooksShelf title="Read" type="read" books={this.props.books} onMoveBook={this.props.onMoveBook} />
                    </div>
                </div>
                <div className="open-search">
                    <Link className='close-search' to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BooksList