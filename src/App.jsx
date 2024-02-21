import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import AdminRoute from './routes/AdminRoute'

// Layputs
import Layout from './layouts/Layout'

// Pages
import Login from './pages/Login'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path='/'
        element={<Layout />}
        errorElement={<Error />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/projects'
          element={<Projects />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        {/* <Route
          path='/register'
          element={<Register />}
        /> */}
        <Route
          path='/forgot-password'
          element={<ForgotPassword />}
        />
        <Route
          path='/reset-password/:token'
          element={<ResetPassword />}
        />

        {/* Private Routes */}
        <Route
          path='/admin'
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />

        {/* Admin Routes */}
        {/* <Route
          path='/admin'
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        /> */}

        {/* Catch all */}
        <Route
          path='/*'
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}

export default App
