import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Loading from './Components/Loading';
import ProtectedRoute from './Components/ProtectedRoutes';

const Login = lazy(() => import('./Screens/Login'))
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
      behavior: 'smooth',
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
          <Route path="/login" element={<Login />} />

          {/* Public Routes */}
          <Route element={<ProtectedRoute allowedRoles={["User", "Admin"]} />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id/:name" element={<ProductsDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          {/* Admin Routes - Protected */}
          <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
