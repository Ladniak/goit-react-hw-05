import { Route, Routes } from 'react-router-dom'
import { Suspense } from "react";

import './App.css'

import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import MovieReviews from './components/MovieReviews/MovieReviews'
import MovieCast from './components/MovieCast/MovieCast'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


function App() {
  return (
    <Suspense>
      <Navigation />
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={< MovieDetailsPage />} >
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="cast" element={<MovieCast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} ></Route>

        </Routes>
      </>
    </Suspense>
  )
}

export default App
