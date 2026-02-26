import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import './index.css';
import './theme/colors.css';
import App from './App.jsx';
import { I18nProvider } from './i18n/I18nProvider';

ReactDOM.createRoot(document.getElementById("root")).render(

  <StrictMode>
    <I18nProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </I18nProvider>
  </StrictMode>

)
