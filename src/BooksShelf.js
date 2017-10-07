import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BooksShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }
    render() {
        const { title, type, books } = this.props
        let showingBooks = books.filter((book) => book.shelf === type)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <li key={book.id}>
                                <Book book="{book}" onMoveBook={this.props.onMoveBook}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BooksShelf