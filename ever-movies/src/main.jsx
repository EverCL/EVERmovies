import { BrowserRouter} from 'react-router-dom'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Routes/routes'
import   GlobalStyle  from "./styles/globalstyles"



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
<Router/>
   </BrowserRouter>
   <GlobalStyle/>
  </StrictMode>
)
