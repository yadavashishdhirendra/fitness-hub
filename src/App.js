import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./Screens/Home'))
const Products = lazy(() => import('./Screens/Products'))

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <p>Loading...</p>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
