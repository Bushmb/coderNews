import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Components
import Home from './components/Home';

const store = configureStore(); 

ReactDOM.render(
	<Provider store={store}>
  		<Home />
  	</Provider>,
  document.getElementById('root')
);