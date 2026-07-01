import Register from './components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App