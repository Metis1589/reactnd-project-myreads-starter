import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }
    state = {
        query: ''
    }
    render() {
        const { books } = this.props
        const { query } = this.state
        let showingBooks = []
        if (query) {
            BooksAPI.search({query, 100}).then((books) => {
                showingBooks = books
            })
        } else {
            showingBooks = []
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                         NOTES: The search from BooksAPI is limited to a particular set of search terms.
                         You can find these search terms here:
                         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                         you don't find a specific author or title. Every search is limited by search terms.
                         */}
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {showingBooks.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")" }}></div>
                                        <div className="book-shelf-changer">
                                        <select
                                            value={type}
                                            onChange={(event) => this.props.onMoveBook(book, event.target.value)}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{ book.title }</div>
                                <div className="book-authors">{ book.authors.join(', ') }</div>
                            </div>
                        </li>
                    ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search