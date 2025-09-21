import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LoaderProvider } from './Components/GlobalLoader/GlobalLoader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
    {/* <JalaliDatePicker></JalaliDatePicker> */}
  </StrictMode>,
)
