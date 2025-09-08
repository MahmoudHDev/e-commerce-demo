import { useEffect, useState } from "react";
import axios from 'axios';

const useCategories = () => {

    const [categories, setCategoies] = useState(null);


    const fetchCategories = async () => {
        try {
            if (!categories) {
                // const apiURL = "https://fakestoreapi.in/api/products/category";  // ==> old API 
                const newAPIURL = "https://api.escuelajs.co/api/v1/categories";
                const response = await axios.get(newAPIURL);
                if (response.data) {
                    console.log(response.data);
                    setCategoies(response.data);
                }
            };
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])



    return { categories }
}

export default useCategories;