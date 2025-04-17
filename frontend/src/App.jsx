import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router'
import Navbar from './elements/Navbar'
import HomePage from './pages/HomePage'
import SolarPage from './pages/SolarPage'
import MoonPage from './pages/MoonPage'
import InfoPage from './pages/InfoPage'


function App() {
  

  return (
    <>
      <Box>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/solarsystem' element={<SolarPage />} />
          <Route path='/moonpage' element={<MoonPage />} />
          <Route path='/infopage' element={<InfoPage />} />
        </Routes>
      </Box>
      
    </>
  )
}

export default App
