import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loading from './Components/Loading'

const Home = lazy(() => import('./Screens/Home'))
const Products = lazy(() => import('./Screens/Products'))
const ProductsDetails = lazy(() => import('./Screens/ProductDetails'))
const Cart = lazy(() => import('./Screens/Cart'))

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id/:name' element={<ProductsDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
