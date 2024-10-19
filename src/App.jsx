import { Route, Routes } from 'react-router-dom'

import './App.css'

import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'


function App() {
  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
