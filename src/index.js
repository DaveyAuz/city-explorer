import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json",
  "method": "GET"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});


