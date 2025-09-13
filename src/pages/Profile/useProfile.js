import axios from "axios";
import { useEffect, useState } from "react";

const useProfile = () => {


    const [login, setLogin] = useState({ email: "", password: "" });
    const [loginErr, setLoginErr] = useState(null);
    const [userAuth, setUserAuth] = useState(false);

    const loginReq = async () => {

        try {
            const url = "https://api.escuelajs.co/api/v1/auth/login"
            const response = await axios.post(url, login, { headers: { 'Content-Type': 'application/json' } })
            console.log(response)
            if (response && response.status == 201) {
                setUserAuth({ ...response.data, email: login.email })
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
            } else {
                setLoginErr({ message: "Login failed, Please check your username or password", isLoggedIn: false })
            }

        } catch (err) {
            console.log(err)
            setLoginErr({ message: "Error occured, Please Check your Network", isLoggedIn: false })
        }
    }


    useEffect(() => {

        if (login.name !== "" && login.password !== "") {
            console.log("UseEffect method")
            loginReq();
        };


    }, [login])

    return { login, setLogin, loginErr, userAuth }
}


export default useProfile;