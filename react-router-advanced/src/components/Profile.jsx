import React from 'react'
import { Outlet, useParams, Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
    const { userId } = useParams();

  return (
    <div>
        <p>Welcome Collins!</p>
        <nav>
            <ul>
                <li>
                    <Link to={`/profile/${userId}/ProfileDetails`}>Pofile Details</Link>
                </li>
                <li>
                    <Link to={`/profile/${userId}/ProfileSettings`}>Profile Settings</Link>
                </li>
            </ul>
        </nav>
        <div>
            <Routes>
                <Route path='ProfileDetails' element={<ProfileDetails />} />
                <Route path='ProfileSettings' element={<ProfileSettings />} />
            </Routes>
            <Outlet />
        </div>
    </div>
  )
}

export default Profile