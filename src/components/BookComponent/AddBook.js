import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import BookPage from '../../BookPage';
import { AddBook } from '../../redux/books/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const [singleBook, setSingleBook] = useState({
    title: '',
    category: '',
    author: '',
    item_id: '',
  });

  // Changing state
  const changeFunc = (e) => {
    const [name, value] = [e.target.name, e.target.value];
    if (value.trim() === '') e.target.value = '';

    setSingleBook((previous) => ({
      ...previous,
      [name]: value.trim(),
    }));
  };

  // submit
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(AddBook({ ...singleBook, item_id: uuidv4() }));
    document.querySelector('.form-input').reset();
  };
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form name="addBook" onSubmit={submitForm} className="form-input">
        <input type="text" name="title" placeholder="Book title" onChange={changeFunc} required />
        <input type="text" name="author" placeholder="Author name" onChange={changeFunc} required />
        <select name="category" onChange={changeFunc} required>
          <option value="" defaultValue>category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}

export default AddBookForm;
