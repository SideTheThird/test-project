import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './reducers/index.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserIndex from './components/users/index';
import UserCreate from './components/users/create';
import UserShow from './components/users/show';
import UserEdit from './components/users/edit';


const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = { store }>
      <Router>
        <Routes>
          { /* User routes*/ }
          <Route path='/users' element = {<UserIndex />} />
          <Route path='/users/create' element = {<UserCreate />} />
          <Route path='/users/:id' element = {<UserShow />} />
          <Route path='/users/:id/edit' element = {<UserEdit />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();