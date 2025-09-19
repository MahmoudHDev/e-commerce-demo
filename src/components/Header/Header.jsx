import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar.jsx';


export default function Header() {

    const navigate = useNavigate();
    // const user = useContext(UseContext);


    // useEffect(() => {
    //     console.log(user);
    // })


    return (<div className="header flex align-items-center container-fluid">

        <div className='logo-sec'>
            <Link to='/'><i className="fa-solid fa-bag-shopping"></i></Link>
        </div>
        <SearchBar />

        <div className='personal-btns d-flex'>

            <Button variant="danger" onClick={() => navigate(`/cart/${"changeThis"}`)}><i className="fa-solid fa-cart-shopping"></i></Button>
            <Button variant="dark" onClick={() => navigate(`/profile/${'login'}`)}><i className="fa-solid fa-user"></i></Button>

            <Button variant="light"><i className="fa-solid fa-bell"></i></Button>

        </div>
    </div>);


};
