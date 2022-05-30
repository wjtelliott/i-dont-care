import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApiUrls } from './Context/ApiUrls';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <ApiUrls.Provider value={{
        SearchUrl: process.env.REACT_APP_API_URL,
        SearchAuth: process.env.REACT_APP_API_AUTH,
        GeoIpUrl: process.env.REACT_APP_IP_URL,
        IpLookupUrl: process.env.REACT_APP_GEO_URL
      }}>
        <App />
      </ApiUrls.Provider>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
