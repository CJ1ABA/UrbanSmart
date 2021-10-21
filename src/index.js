import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Main() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));
reportWebVitals();
