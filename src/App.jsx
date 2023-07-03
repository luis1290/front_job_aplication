import { useState } from 'react'
import './App.css'
import RegisterUser from './components/loguin/RegisterUser'
import { Box } from '@mui/material'
import LoguinForm from './components/loguin/SignInSide'
import LoguinPage from './pages/LoguinPage'

import RegisterPage from './pages/RegisterPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home />} />
          <Route path='/loguin' element={<LoguinPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
