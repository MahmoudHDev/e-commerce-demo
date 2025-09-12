import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar() {

    const [searchedProducts, setSearchedProdcuts] = useState(null);
    const [showResults, setShowResults] = useState(false)

    const handlChange = (e) => {
        e.preventDefaults();
        if (e.target.value !== "") {
            setSearchedProdcuts(e.target.value)
            // Search
        } else {
            // make the textField Empty.
            setSearchedProdcuts("")
        }
    }
    const handleClick = (e) => {
        console.log(e)
    }

    return (<>
        <div className="search-container d-flex align-items-center">
            <form>
                <div className="d-flex justify-content-center ">
                    <div className="magnifier"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <input className="search-input"
                        placeholder="Search for a product..."
                        name='searchValue'
                        value={searchedProducts || ""}
                        onChange={handlChange}
                        onFocus={() => setShowResults(true)}
                        onBlur={() => setShowResults(false)}
                    ></input>
                </div>

                {showResults && <div className='search-results'>
                    <ul>
                        <li onClick={handleClick}>test</li>
                    </ul>
                </div>}

            </form>

        </div>
    </>)
};