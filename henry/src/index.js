import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './store/store'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Provider store={store}>
        <Auth0Provider
          domain='dev-28jtvddr.us.auth0.com'
          clientId='SmBOSlF50Z53bYJLiyvVhl4l41uqhaY7'
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
