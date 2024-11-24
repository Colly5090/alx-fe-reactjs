import React from 'react'
import { Outlet, useParams, Link } from 'react-router-dom'

function Profile() {
    const { userId } = useParams();

  return (
    <div>
        <p>Welcome Collins!</p>
        <nav>
            <ul>
                <li>
                    <Link to={`/profile/${userId}/profiledetails`}>Pofile Details</Link>
                </li>
                <li>
                    <Link to={`/profile/${userId}/profilesettings`}>Profile Settings</Link>
                </li>
            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Profile