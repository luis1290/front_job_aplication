import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterForm from './components/RegisterForm'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box >
        <RegisterForm />
      </Box>

    </div>
  )
}

export default App
