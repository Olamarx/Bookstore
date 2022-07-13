import { v4 as uuidv4 } from 'uuid';
// Actions
const Actions = [
  { ADD: 'bookstore/book/ADD' },
  { REMOVE: 'bookstore/book/REMOVE' },
];
// state initialized as array

const initialState = [
  {
    id: uuidv4(),
    title: 'The First Game',
    author: 'Suarez',
    topic: 'Actions',
    category: 'Economy',
  },
  {
    id: uuidv4(),
    title: 'The Second Science',
    author: 'Daniel',
    topic: '',
    category: 'Science Fiction',
  },
  {
    id: uuidv4(),
    title: 'The First Game',
    author: 'Suarez',
    topic: 'Actions',
    category: 'Action',
  },
];

// Reducer
const reducer = (state = initialState, action) => {
  const { payLoad } = action;
  switch (action.type) {
    case Actions[0].ADD:
      return [...state, payLoad.book];

    case Actions[1].REMOVE:
      return state.filter((book) => book.id !== payLoad.id);

    default:
      return state;
  }
};

// The Action   Creators
export const AddBook = (book) => ({ type: Actions[0].ADD, payLoad: { book } });
export const RemoveBook = (id) => ({ type: Actions[1].REMOVE, payLoad: { id } });

export default reducer;
