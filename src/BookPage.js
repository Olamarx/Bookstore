import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Nav from './components/Nav';
import style from './BookPage.module.css';
import EachBook from './components/BookComponent/eachBook';
import AddBook from './components/BookComponent/AddBook';
import { booksFromAPI } from './redux/books/books';

function BookPage() {
  const books = useSelector((state) => state.Books, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(booksFromAPI());
  }, []);
  return (
    <div style={{ border: '10px solid grey', height: '100vh' }}>
      <Nav />
      <div className={style.body}>
        <div className={style.action}>
          {books.map((book) => (
            <EachBook
              topic={book.topic}
              author={book.author}
              title={book.title}
              key={book.item_id}
              id={book.item_id}
              category={book.category}

            />
          ))}

        </div>
      </div>
      <AddBook />
    </div>
  );
}

export default BookPage;
