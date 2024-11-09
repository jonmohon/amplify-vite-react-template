import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import App from './App';
import outputs from '../amplify_outputs.json';
import './index.css';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Authenticator>
        <App />
      </Authenticator>
    </BrowserRouter>
  </React.StrictMode>
);
