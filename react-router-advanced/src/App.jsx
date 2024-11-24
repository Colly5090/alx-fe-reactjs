import './App.css'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import { useState } from 'react'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />

        <Route path='login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        <Route 
          path='/profile/:userId/*' 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Profile setIsAuthenticated={setIsAuthenticated} />
            </PrivateRoute>}
        >
          <Route path='profiledetails' element={<ProfileDetails />} />
          <Route path='profilesettings' element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
