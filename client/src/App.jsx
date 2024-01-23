
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

import ProviderRegistration from './pages/ProviderRegistration'
import ProviderLogin from './pages/ProviderLogin'
import HomePage from './pages/Home.page'


function App() {


  return (
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/signin" element={<SignInPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/registerProvider" element={<ProviderRegistration />} />
    <Route path="/loginProvider" element={<ProviderLogin />} />
    </Routes>
  )
}

export default App
