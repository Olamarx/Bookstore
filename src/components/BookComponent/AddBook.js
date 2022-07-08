import React from 'react';

function AddBook() {
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <div>
        <input placeholder="Book title" />
        <select>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>

        <button type="button">ADD BOOK</button>
      </div>
    </div>
  );
}

export default AddBook;
