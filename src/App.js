import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <main className="main main-layout">
        <div className="main-wrapper">
          <div className="section">
            <h1 className="mb-2">Heading1</h1>
            <p className="mb-2">Paragraph</p>
          </div>
        </div>
      </main>
    </Provider>
  );
};

export default App;