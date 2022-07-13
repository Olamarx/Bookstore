import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Nav from './components/Nav';
import Percentage from './components/BookComponent/Percentage';
import style from './BookPage.module.css';
import EachBook from './components/BookComponent/eachBook';
import AddBook from './components/BookComponent/AddBook';

function BookPage() {
  const books = useSelector((state) => state.Books, shallowEqual);
  return (
    <>
      <Nav />
      <div className={style.body}>
        <div className={style.action}>
          {books.map((book) => (
            <EachBook
              topic={book.topic}
              author={book.author}
              title={book.title}
              key={book.id}
              id={book.id}
              category={book.category}
            />
          ))}

          <Percentage />
        </div>
      </div>
      <AddBook />
    </>
  );
}

export default BookPage;
