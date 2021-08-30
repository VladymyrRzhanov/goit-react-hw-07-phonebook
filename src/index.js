import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { PersistGate } from 'redux-persist/integration/react'
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);