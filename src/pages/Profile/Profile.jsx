import { useState } from "react";
import './Profile.css';
import { Button } from "react-bootstrap";
import useProfile from './useProfile';

function Profile() {

    const [userInfo, setUserInfo] = useState({ email: "", password: "" })

    const { login, setLogin } = useProfile(userInfo || "")


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

    return (
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
                    <Button type="submit" variant="primary">Sign in</Button>
                </div>

            </form>


        </div>
    )
}

export default Profile;