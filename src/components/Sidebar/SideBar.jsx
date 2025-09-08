import './Sidebar.css';
import useCategories from '../../hooks/useCategories.js';
import GetCategoryIcon from '../../utils/GetCategoryIcon.jsx';
import { useLocation, useNavigate } from 'react-router-dom';


export default function SideBar({ selectedCategory, onSelectCategory }) {

    const { categories } = useCategories();

    const location = useLocation(); // to get the currernt path.

    const navigate = useNavigate(); // to navigate || Redirect use to a specific pages.

    const handleClick = (item) => {
        if (location.pathname !== '/') {
            navigate('/');
            onSelectCategory(item);
        } else {
            onSelectCategory(item);
        };

    };

    return (<div className='sidebar-container'>
        <h5 className='pt-4 pb-2 px-3 text-light'><strong>Categories</strong></h5>
        <ul className='glassy-bg'>
            <li key={"all"} onClick={() => handleClick("all")}
                className={selectedCategory === "all" ? 'active text-capitalize cat-list' : "text-capitalize cat-list"}> <GetCategoryIcon category={"all"} /> All</li>

            {categories && categories.map((item, i) => <li
                onClick={() => handleClick(item.id)}
                key={i}
                className={selectedCategory === item.slug ? 'active text-capitalize cat-list' : "text-capitalize cat-list"}>
                {categories && <GetCategoryIcon category={item.slug} />} {item.name}</li>)}
        </ul>
    </div>);
};