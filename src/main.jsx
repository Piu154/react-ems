import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { TaskContext } from './context/TaskContext.jsx'
// localStorage.clear();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <TaskContext>
      <App />
      </TaskContext>
      
       
       </AuthProvider>
   
  </StrictMode>,
)
