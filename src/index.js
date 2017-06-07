import 'babel-polyfill';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './../node_modules/toastr/build/toastr.min.css';

import PlacesPage from './components/places/PlacesPage';
import configureStore from './store/configureStore';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
  <PlacesPage />
  </Provider>
  , document.getElementById('app')
);
