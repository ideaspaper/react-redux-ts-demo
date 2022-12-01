import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import booksReducer from './booksReducer';
const reducers = combineReducers({
  counterReducer,
  booksReducer,
});
export default reducers;
export type RootState = ReturnType<typeof reducers>;
