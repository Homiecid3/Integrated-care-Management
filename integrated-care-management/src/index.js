import App from './App';

//IMPORT: Packages:
import React from 'react';
import ReactDOM from 'react-dom/client';

//IMPORT: ELements:
import './index.css';

//IMPORT: Components:
import { ThemeProvider } from 'styled-components';

//IMPORT: Themes:
import { darkTheme } from './Themes/darkTheme';
import { lightTheme } from './Themes/lightTheme';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

