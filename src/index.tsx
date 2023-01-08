import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Jajal from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <Toaster position='top-center' reverseOrder={false} />
      <Jajal />
    </Provider>
  </>
);

