import { useState, useEffect } from "react";
import './Profile.css';
import { Button } from "react-bootstrap";
import useProfile from './useProfile';
import UserContext from '../../context/UserContext.js';
import { useNavigate } from 'react-router-dom';
function Profile() {

    // States
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const { setLogin, userAuth, loginErr } = useProfile(userInfo || "")


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        // To prevent a page reload when a submit button is clicked within a form in React.
        e.preventDefault();
        setLogin(userInfo);
    };


    useEffect(() => {
        if (userAuth) {
            console.log("Redirect to home");
            navigate('/');
        };
    }, [userAuth])

    return (
        <UserContext.Provider value={userAuth || ""} >
            <div>
                <h1>Profile</h1>
                <h3>Please login to continue</h3>

                <form onSubmit={handleSubmit}>
                    <div className="profile-info d-flex flex-column">
                        <input
                            placeholder="Username..."
                            name="email"
                            type="text"
                            onChange={handleChange}
                            value={userInfo.email || ""}>
                        </input>
                        <br />
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={userInfo.password || ""}>
                        </input>
                        {loginErr && !loginErr.isLoggedIn ? <p className="text-danger">{loginErr.message || "Error occured"}</p> : <></>}
                        <Button type="submit" variant="primary">Sign in</Button>
                    </div>
                </form>
            </div>
        </UserContext.Provider>)
}

export default Profile;