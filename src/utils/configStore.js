'use es6';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('../reducers', () =>
    createStoreWithMiddleware.replaceReducer(rootReducer)
  );
}

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
