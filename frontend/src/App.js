import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'


function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route>
            <Route element={<PrivateRoute><Dashboard/></PrivateRoute>} path='/dashboard' exact />
            <Route element={<Loginpage/>} path='/login'/>
            <Route element={<Registerpage/>} path='/register' exact/>
            <Route element={<Homepage/>} path='/' exact />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App