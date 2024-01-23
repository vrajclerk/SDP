
import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import HeroSlider from '../components/Home/HeroSlider'
import HomeLayout from '../layouts/Home.layout'


function HomePage() {
  `const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 600);
  }, [])
  if (!active) {
    return (
      <div className='w-full flex items-center justify-center' style={{ height: '85vh' }}>
        <CircularProgress />
      </div>
    )
  }
 `
  return (
    <div>
   <HeroSlider />
    </div>
  )
}

export default HomeLayout(HomePage)
