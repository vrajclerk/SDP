import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div className='w-full-black'>
        <Navbar/>
        <main className='pt-14'>
          <Outlet />
        </main>
        <Footer />
      </div>
      
  )
}

export default App
