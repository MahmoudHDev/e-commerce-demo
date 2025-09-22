import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // User Info.

    const [user, setUser] = useState({ email: "", password: "" });
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const [userAuth, setUserAuth] = useState(false);
    const [loginErr, setLoginErr] = useState(null);
    const [profileData, setProfileData] = useState(null)

    const navigate = useNavigate();

    const loginAction = async (data) => {

        try {
            if (!userAuth) {
                const url = "https://api.escuelajs.co/api/v1/auth/login";
                const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/json' } })
                if (response && response.status == 201) {
                    console.log("token is " + response.data.access_token)
                    setToken(response.data.access_token);
                    setUserAuth({ ...response.data, email: data.email })
                    localStorage.setItem('access_token', response.data.access_token);
                    localStorage.setItem('refresh_token', response.data.refresh_token);
                    setLoginErr({ message: "", isLoggedIn: true });
                    console.log(response)
                    navigate(`/profile/${data.email}`);
                } else {
                    console.log("Show Error")
                    setLoginErr({ message: "Login failed, Please check your username or password", isLoggedIn: false });
                };
            };
        } catch (err) {
            console.log(err)
            setLoginErr({ message: "Error occured, Please Check your Network", isLoggedIn: false })
        };
    };

    const logOut = () => {
        // Set all states of login to null and remove the old token from Localstorage, then nav to /login
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
        setProfileData(null);
    };


    const fetchInfo = async () => {
        console.log("fetching user's info")
        try {
            const url = "https://api.escuelajs.co/api/v1/auth/profile"
            const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
            if (response && response.data) {
                const newData = response.data
                const { password, ...rest } = newData;
                setProfileData(rest)
            } else {
                setLoginErr("Error while fetching user's Info")
            }
        } catch (err) {
            console.log("Erro has been occured." + err)
        };
    };

    useEffect(() => {
        fetchInfo();
    }, [token]);


    return <AuthContext.Provider value={{ token, user, loginAction, logOut, loginErr, userAuth, profileData }}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};