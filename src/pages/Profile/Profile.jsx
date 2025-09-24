import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthProvider'

import './Profile.css';
function Profile() {

    const { logOut, profileData } = useAuth();

    const [profile, setProfile] = useState({ name: "", email: "", role: "", creationAt: new Date() })


    useEffect(() => {
        if (profileData) {
            setProfile(profileData);
        } else {
            console.log("else profile blog");
        }

    }, [profileData])

    return (<div>

        <h1>user Profile</h1>
        <hr />


        <div className='profile-container'>
            <div className='data-cont'>
                {/* data */}
                <p>Name: {profile.name || ""}</p>
                <p>Email: {profile.email || ""}</p>
                <p>Role: {profile.role || ""}</p>
                <p>creation at: {new Date(profile.creationAt).getDay() + "/" + new Date(profile.creationAt).getMonth() + "/" + new Date(profile.creationAt).getFullYear()}</p>
            </div>
            <div className='img-cont'>
                <img src={profile.avatar} />
            </div>
        </div>








        <button onClick={() => logOut()}>logout</button>




    </div>)
}

export default Profile