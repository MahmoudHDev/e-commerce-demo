import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { useAuth } from '../../context/AuthProvider.jsx';
import { useEffect, useState } from 'react';
import GetCategoryIcon from '../../utils/GetCategoryIcon.jsx';

export default function Header({ selectedProductsNumber }) {

    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("access_token"))
    const { userAuth } = useAuth();

    const handleProfile = () => {
        // Local storage, token expire date.

        if (userAuth && userAuth.email !== "") {
            navigate(`/profile/${userAuth.email}`);
        } else {
            navigate('/login');
        };

    };

    useEffect(() => {
        console.log(selectedProductsNumber);
    }, [selectedProductsNumber])

    return (<div className="header flex align-items-center container-fluid">

        <div className='logo-sec'>
            <Link to='/'><i className="fa-solid fa-bag-shopping"></i></Link>
        </div>
        <SearchBar />

        <div className='personal-btns d-flex'>

            <Button variant="danger" onClick={() => navigate(`/cart`)}><i className="fa-solid fa-cart-shopping"></i></Button>


            {token ? <Button variant="success" onClick={() => navigate(`/profile/${userAuth.email}`)}>{<GetCategoryIcon category={"profile"} />}</Button>
                :
                <Button variant="dark" onClick={() => handleProfile()}><i className="fa-solid fa-user"></i></Button>}
            <Button variant="light"><i className="fa-solid fa-bell"></i></Button>

        </div>
    </div>);


};
