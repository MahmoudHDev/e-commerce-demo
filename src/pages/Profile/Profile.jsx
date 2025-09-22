import React from 'react'
import { useAuth } from '../../context/AuthProvider'

import './Profile.css';
function Profile() {

    const { logOut, profileData } = useAuth();

    return (<div>

        <h1>user Profile</h1>
        <hr />


        <div className='profile-container'>
            <div className='data-cont'>
                {/* data */}
                <p>Name: {profileData.name}</p>
                <p>Email: {profileData.email}</p>
                <p>Role: {profileData.role}</p>
                <p>creation at: {new Date(profileData.creationAt).getDay() + "/" + new Date(profileData.creationAt).getMonth() + "/" + new Date(profileData.creationAt).getFullYear()}</p>
            </div>
            <div className='img-cont'>
                <img src={profileData.avatar} />
            </div>
        </div>








        <button onClick={() => logOut()}>logout</button>




    </div>)
}

export default Profile