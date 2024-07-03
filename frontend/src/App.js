import React from 'react'
import Inventory from './components/Inventory.jsx';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './utils/ErrorBoundary.js';




const App = () => {
  
  return (

    <ErrorBoundary>
      <div className="App">
        <ToastContainer />
        <Inventory />
      </div>
    </ErrorBoundary>

  )
}

export default App