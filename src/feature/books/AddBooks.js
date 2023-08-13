import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const numberOfBooks = useSelector((state) => state.booksReducer.books.length)

    const handleSubmit = (event) =>{
        event.preventDefault();

        const book = {id: numberOfBooks + 1, title, author}
        dispatch(addBook(book))
        navigate('/show-books', {replace: true})
    }

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="title">Title: </label>
                    <input 
                    type="text" 
                    id='title' 
                    name='title' 
                    value={title} 
                    required
                    onChange={(e) => setTitle(e.target.value) } />
                </div>
                <div className='form-field'>
                    <label htmlFor="title">Author: </label>
                    <input 
                    type="text" 
                    id='author' 
                    name='author' 
                    value={author} 
                    required
                    onChange={(e) => setAuthor(e.target.value) } />
                </div>
                <button type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default AddBooks;