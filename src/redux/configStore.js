import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import Books from './books/books';
import Categories from './categories/categories';

const reducer = combineReducers({
  Categories,
  Books,
});

const theStore = configureStore(reducer);

export default theStore;
