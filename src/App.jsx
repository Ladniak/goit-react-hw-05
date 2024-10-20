import { Route, Routes } from 'react-router-dom'

import './App.css'

import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import MovieReviews from './components/MovieReviews/MovieReviews'
import MovieCast from './components/MovieCast/MovieCast'


function App() {
  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={< MovieDetailsPage />} >
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="cast" element={<MovieCast />} />
          </Route>

        </Routes>
      </div>
    </>
  )
}

export default App
