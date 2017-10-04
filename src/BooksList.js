import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksShelf from './BooksShelf'

class BooksList extends Component {

    render() {

        const { title, type, books } = this.props

        let showingBooks
        showingBooks = books

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {showingBooks.map((book) => (
                                    <li key={book.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                                                <div className="book-shelf-changer">
                                                    <select>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">To Kill a Mockingbird</div>
                                            <div className="book-authors">Harper Lee</div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        /*
                        <BooksShelf title="Currently Reading" type="currentlyReading" books="{this.props.books}"/>
                        <BooksShelf title="Want to Read" type="wantToRead" books="{this.props.books}"/>
                        <BooksShelf title="Read" type="read" books="{this.props.books}"/>
                        */
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