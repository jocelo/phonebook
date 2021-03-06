import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import Home from './components/home';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
