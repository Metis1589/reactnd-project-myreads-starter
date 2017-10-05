import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import BooksList from './BooksList'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    }
    moveBook = (book, status) => {
        this.setState((state) => ({
            books: state.books.map((b) => {if(b.id===book.id){b.shelf = status}; return b})
        }));
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }
    render() {
        return (
            <div className="app">
                <Route path='/' exact render={() => (
                    <BooksList books={this.state.books} onMoveBook={this.moveBook}/>
                )}/>
                <Route path='/search' render={({history}) => (
                    <Search books={this.state.books} onMoveBook={this.moveBook}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
