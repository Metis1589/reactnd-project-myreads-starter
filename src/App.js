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

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    render() {
        return (
            <div className="app">
                <Route path='/' exact render={() => (
                    <BooksList books={this.state.books} />
                )}/>
                <Route path='/search' render={({history}) => (
                    <Search/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
