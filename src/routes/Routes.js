import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Error from "../pages/Error";
import BooksView from "../feature/books/BooksView";
import AddBooks from "../feature/books/AddBooks";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/show-books',
            element: <BooksView></BooksView>
        },
        {
            path: '/add-book',
            element: <AddBooks></AddBooks>
        }
      ]
    },
  ]);