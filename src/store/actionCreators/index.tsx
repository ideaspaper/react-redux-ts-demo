import { AnyAction, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { BooksActionType, CounterActionType } from '../actionTypes';
import { IBook, IBooksState } from '../reducers/booksReducer';

// Counter actions
export interface ICounterAction {
  type: CounterActionType;
  payload: number;
}

export const incrementCounter = (payload: number): ICounterAction => {
  return { type: CounterActionType.COUNTER_INCREMENT, payload };
};

export const decrementCounter = (payload: number): ICounterAction => {
  return { type: CounterActionType.COUNTER_DECREMENT, payload };
};

// Books actions
export interface ISetBooks {
  type: BooksActionType.SET_BOOKS;
  payload: IBook[];
}

export interface ISetBooksLoading {
  type: BooksActionType.SET_BOOKS_LOADING;
  payload: boolean;
}

export interface ISetBooksError {
  type: BooksActionType.SET_BOOKS_ERROR;
  payload: string | null;
}

export type BooksAction = ISetBooks | ISetBooksLoading | ISetBooksError;
export type BooksDispatch = ThunkDispatch<IBooksState, any, AnyAction>;

export const setBooks = (payload: IBook[]): BooksAction => {
  return { type: BooksActionType.SET_BOOKS, payload };
};

export const setBooksLoading = (payload: boolean): BooksAction => {
  return { type: BooksActionType.SET_BOOKS_LOADING, payload };
};

export const setBooksError = (payload: string | null): BooksAction => {
  return { type: BooksActionType.SET_BOOKS_ERROR, payload };
};

export const fetchBooks = () => {
  return (dispatch: Dispatch<BooksAction>): void => {
    dispatch(setBooksLoading(true));
    dispatch(setBooksError(null));
    fetch('http://localhost:8080/books')
      .then((response) => {
        if (!response.ok) throw new Error('cannot fetch books');
        return response.json();
      })
      .then((data) => {
        dispatch(setBooks(data));
      })
      .catch((error) => {
        dispatch(setBooksError(error.message));
      })
      .finally(() => {
        dispatch(setBooksLoading(false));
      });
  };
};

export const deleteBook = (bookId: number) => {
  return (): Promise<IBook | Error> => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:8080/books/${bookId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (!response.ok) throw new Error('cannot delete book');
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

export const addBook = (book: IBook) => {
  return (): Promise<IBook | Error> => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      })
        .then((response) => {
          if (!response.ok) throw new Error('cannot add book');
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};
