import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Import REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Add Reducers
const feedback = (state=[], action) => {
  if(action.type === "SET_FEEDBACK") {
    const feedbackData = action.payload;
    return feedbackData;
  }
    return state;
};

// Redux store:
const feedbackStore = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(
        logger
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={feedbackStore}>
        <App />
      </Provider>
    </React.StrictMode>
);
