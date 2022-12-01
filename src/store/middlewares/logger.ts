import { Middleware } from 'redux';

const logger: Middleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('dispatching', action);
  console.log('prev state', store.getState());
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
