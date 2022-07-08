import React from 'react';
import PropTypes from 'prop-types';
import style from './ActionNameButton.module.css';

function ActionNameButton(props) {
  const { category, gameName, userName } = props;
  return (
    <div className={style.leftBody}>
      <div>
        <span>{category}</span>
        <h1>{gameName}</h1>
        <h4>{userName}</h4>
      </div>

      <div className={style.button}>
        <button type="button">Comments</button>
        {' '}
        |
        <button type="button">Remove</button>
        {' '}
        |
        <button type="button">Edit</button>
      </div>
    </div>
  );
}

ActionNameButton.propTypes = {
  category: PropTypes.string.isRequired,
  gameName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default ActionNameButton;
