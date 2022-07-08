import React from 'react';
import Nav from './components/Nav';
import ActionNameButton from './components/BookComponent/ActionNameButton';
import Percentage from './components/BookComponent/Percentage';
import style from './BookPage.module.css';
import AddBook from './components/BookComponent/AddBook';

function BookPage() {
  return (
    <>
      <Nav />
      <div className={style.body}>
        <div className={style.action}>
          <ActionNameButton
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
