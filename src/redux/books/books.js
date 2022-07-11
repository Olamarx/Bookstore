/* eslint-disable no-fallthrough */
// Actions
const Actions = [
  { ADD: 'bookstore/book/ADD' },
  { REMOVE: 'bookstore/book/REMOVE' },
];

// Reducer
// state initialized as array
const reducer = (state = [], action) => {
  const { payLoad } = action;
  switch (action.type) {
    case Actions[0].ADD:
      return [...state, payLoad.book];

    case Actions[1].REMOVE:
      state.filter((book) => book.id !== payLoad.id);

    default:
      return state;
  }
};

// The Action   Creators
export const AddBook = (book) => ({ type: Actions[0].ADD, payLoad: { book } });
export const RemoveBook = (id) => ({ type: Actions[1].REMOVE, payLoad: { id } });

export default reducer;
