import { BooksAction } from '../actionCreators';
import { BooksActionType } from '../actionTypes';

export interface IBook {
  id?: number;
  title: string;
  author: string;
  image_url: string;
  synopsis: string;
  price: number;
}

export interface IBooksState {
  books: IBook[];
  booksLoading: boolean;
  booksError: string | null;
}

const initialState: IBooksState = {
  books: [],
  booksLoading: false,
  booksError: null,
};

export default function booksReducer(
  state = initialState,
  action: BooksAction,
): IBooksState {
  switch (action.type) {
    case BooksActionType.SET_BOOKS:
      return { ...state, books: action.payload };
    case BooksActionType.SET_BOOKS_LOADING:
      return { ...state, booksLoading: action.payload };
    case BooksActionType.SET_BOOKS_ERROR:
      return { ...state, booksError: action.payload };
    default:
      return state;
  }
}
