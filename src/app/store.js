import { configureStore } from "@reduxjs/toolkit";
import  booksReducer  from "../feature/books/BooksSlice";


const store = configureStore({
    reducer: {
        booksReducer: booksReducer
    }
})

export default store;