import React from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Search from './Search';
import BooksList from './BooksList';
import './App.css';

class BooksApp extends React.Component {
    state = {
        books: [],
        loaded: false
    }
    moveBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then((books) => {
                // New book
                if (typeof(book.shelf) == 'undefined') {
                    book.shelf = shelf
                    books = this.state.books
                    books.push(book)
                    this.setState((state) => ({books}));
                }
                else {
                    this.setState((state) => ({
                        books: state.books.map((b) => {
                            if (b.id === book.id) { b.shelf = shelf }
                            return b;
                        })
                    }));
                }
            })
            .catch((err) => {
                console.error("error: " + err)
            })
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState({books: books, loaded: true});
            })
            .catch((err) => {
                console.error("error: " + err);
                this.setState({books: [], loaded: true});
            })
    }

    render() {
        return (
            <div className="app">
                <Route path='/' exact render={() => (
                    <BooksList books={this.state.books} onMoveBook={this.moveBook} loaded={this.state.loaded}/>
                )}/>
                <Route path='/search' render={({history}) => (
                    <Search books={this.state.books} onMoveBook={this.moveBook}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
