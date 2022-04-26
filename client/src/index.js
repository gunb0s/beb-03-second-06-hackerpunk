import { React, ReactDOM, SWRConfig } from './common';
import { Provider } from 'react-redux';
import { store } from './store';

import fetcher from './api/fetcher';

import App from './routers/App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Redux Store */}
    <Provider store={store}>
      <SWRConfig
        value={{
          fetcher,
          suspense: true,
        }}
      >
        <App />
      </SWRConfig>
    </Provider>
  </React.StrictMode>
);