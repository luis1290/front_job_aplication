import { useState } from 'react'
import './App.css'
import RegisterUser from './components/loguin/RegisterUser'
import { Box } from '@mui/material'
import LoguinForm from './components/loguin/SignInSide'
import LoguinPage from './pages/LoguinPage'

import RegisterPage from './pages/RegisterPage'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Companies from './pages/Companies'
import Loader from './components/Loader'
import { useSelector } from 'react-redux'
import Index from './pages/Index'

function App() {
  const [count, setCount] = useState(0)
  const isLoading = useSelector(state => state.isLoading)

  return (
    <>
      <HashRouter>
        {
          isLoading && <Loader />
        }
        <Routes>
          <Route path='/loguin' element={<LoguinPage />} />

          <Route path='/register' element={<RegisterPage />} />


          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
            {/* <Route path='/home' element={<Home />} /> */}
            <Route path='/companies' element={<Companies />} />
          </Route>


        </Routes>
      </HashRouter>
    </>
  )
}

export default App
