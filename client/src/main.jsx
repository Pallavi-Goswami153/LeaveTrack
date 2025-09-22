import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProviderLeave } from './Components/ContextLevve.jsx';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <ProviderLeave>
    <App />
  </ProviderLeave>
  </BrowserRouter>
  </StrictMode>
)
