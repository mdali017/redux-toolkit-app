const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
    books: [
        {id: 1, title: "Love Bangladesh", author: "Mohabbat"},
        {id: 2, title: "Bangladesh Beauty", author: "Mohabbat"}
    ]
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            const id = action.payload;
           state.books = state.books.filter(book => book.id !== id)
            state.books.push(action.payload)
        }
    }
})

export const {showBooks, addBook, deleteBook} = booksSlice.actions;
export default booksSlice.reducer;