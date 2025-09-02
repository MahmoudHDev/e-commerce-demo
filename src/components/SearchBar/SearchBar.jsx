import './SearchBar.css';

export default function SearchBar() {

    const handleSubmit = () => {

    }

    return (<>
        <div className="search-container d-flex align-items-center">
            <form className="d-flex justify-content-center ">
                <div className="magnifier px-2"><i class="fa-solid fa-magnifying-glass"></i></div>
                <input className="search-input" placeholder="Search for a product..." ></input>
            </form>

        </div>
    </>)
};