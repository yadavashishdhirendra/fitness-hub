import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Loading from './Components/Loading';

const Home = lazy(() => import('./Screens/Home'));
const Products = lazy(() => import('./Screens/Products'));
const ProductsDetails = lazy(() => import('./Screens/ProductDetails'));
const Cart = lazy(() => import('./Screens/Cart'));
const Dashboard = lazy(() => import('./Screens/Admin/Dashboard'))

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id/:name" element={<ProductsDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* User Routes */}

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          {/* Admin Routes */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
