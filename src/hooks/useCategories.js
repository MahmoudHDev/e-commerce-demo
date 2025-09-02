import { useEffect, useState } from "react";
import axios from 'axios';

const useCategories = () => {

    const [categories, setCategoies] = useState(null);


    const fetchCategories = async () => {
        try {
            if (!categories) {
                const apiURL = "https://fakestoreapi.in/api/products/category";
                const response = await axios.get(apiURL);
                if (response.data) {
                    setCategoies(response.data.categories)
                }
            };
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])



    return { categories }
}

export default useCategories;