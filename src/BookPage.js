import React from 'react';
import Nav from './components/Nav';
import eachBook from './components/BookComponent/eachBook';
import Percentage from './components/BookComponent/Percentage';
import style from './BookPage.module.css';
import AddBook from './components/BookComponent/AddBook';

function BookPage() {
  return (
    <>
      <Nav />
      <div className={style.body}>
        <div className={style.action}>
          <eachBook
            userName="Olaoluwa Owoeye"
            gameName="Sokudo"
            category="Moon"
          />
          <Percentage />
        </div>
      </div>
      <AddBook />
    </>
  );
}

export default BookPage;
