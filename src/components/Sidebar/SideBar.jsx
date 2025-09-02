import './Sidebar.css';
import useCategories from '../../hooks/useCategories.js';
// import { useEffect } from 'react';


export default function SideBar() {


    const { categories } = useCategories();

    // useEffect(() => {
    // }, [categories])

    return (<div className='sidebar-container'>
        <h5 className='pt-4 pb-2 px-3'><strong>Categories</strong></h5>
        <ul>
            {categories && categories.map((item, i) => <li key={i} className='text-capitalize'>{item}</li>)}
        </ul>
    </div>);
}