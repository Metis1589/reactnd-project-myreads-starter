import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book.js';
import Spinner from 'react-spinner';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }
    state = {
        query: '',
        showingBooks : [],
        loaded: true,
    }
    updateQuery = (query) => {
        this.setState({ query: query.trim(), loaded: false});
        const shelfBooks = this.props.books;
        BooksAPI.search(query, 100)
            .then((books) => {
                const showingBooks = books.map((book) => {
                    const shelfBook = shelfBooks.filter((shelfBook) => (shelfBook.id === book.id));
                    if(shelfBook.length > 0){
                        book.shelf = shelfBook[0]['shelf'];
                    }
                    return book;
                });
                this.setState({ showingBooks: showingBooks, loaded: true });
            })
            .catch((err) => {
                console.error("error: " + err);
                this.setState({showingBooks:[], loaded: true});
            })
    }
    render() {
        const { loaded, query, showingBooks } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {!loaded && (
                        <div className="spinner-wrapper">
                            <Spinner />
                        </div>
                    )}
                    {loaded && !showingBooks.length && query.trim()!=='' && (
                        <div className='showing-contacts'> No books were found</div>
                    )}
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <li key={book.id}>
                                <Book book={book} onMoveBook={this.props.onMoveBook}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search