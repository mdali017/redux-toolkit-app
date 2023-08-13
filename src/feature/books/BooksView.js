import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books)

    const dispatch = useDispatch();

    const handleDelete = (book) => {
          dispatch(deleteBook(book.id))
    } 
    
    return (
        <div>
            <h2>List of Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titile</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books.map( (book) => {
                            const {id, title, author} = book
                            return <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>
                                    <button>Edit</button>
                                    <button onClick={() => handleDelete(book)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;