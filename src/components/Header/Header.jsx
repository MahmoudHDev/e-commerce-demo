import './Header.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar.jsx';
export default function Header() {
    return (<div className="header flex align-items-center container-fluid">

        <div className='logo-sec'>
            <Link to='/'><i className="fa-solid fa-bag-shopping"></i></Link>
        </div>
        <SearchBar />

        <div className='personal-btns d-flex'>
            <Button variant="danger"><i className="fa-solid fa-cart-shopping"></i></Button>
            <Link className='px-0 py-0 mx-0 my-0' to={`/profile/${'login'}`}>
                <Button variant="dark"><i className="fa-solid fa-user"></i></Button>
            </Link>
            <Button variant="light"><i className="fa-solid fa-bell"></i></Button>

        </div>
    </div>);


};
