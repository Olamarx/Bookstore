import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './eachBook.module.css';
import { RemoveBook } from '../../redux/books/books';
import Percentage from './Percentage';

function EachBook(props) {
  const {
    category, title, author, id,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className={style.leftBody}>
      <div className={style.ulBody}>
        <ul>
          <li className={style.category}>{category}</li>
          <li className={style.title}>{title}</li>
          <li className={style.author}>{author}</li>
        </ul>
        <div className={style.button}>
          <button type="button">Comments</button>
          |
          <button type="button" onClick={() => dispatch(RemoveBook(id))}>Remove</button>
          |
          <button type="button">Edit</button>
        </div>
      </div>
      <Percentage />
    </div>
  );
}

EachBook.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default EachBook;
