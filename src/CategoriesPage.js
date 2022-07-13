import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav';
import { Category } from './redux/categories/categories';

function CategoriesPage() {
  const dispatch = useDispatch();

  const position = useSelector((state) => state.categories);
  return (
    <>
      <Nav />
      <div>Categories</div>
      <button type="button" onClick={() => dispatch(Category())}>
        Status
      </button>
      <p>{position}</p>
    </>
  );
}

export default CategoriesPage;
