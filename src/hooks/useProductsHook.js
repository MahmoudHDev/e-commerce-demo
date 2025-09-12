import axios from 'axios';
import { useEffect, useState } from 'react';

const useProductsHook = (categoryType) => {


    const [productsData, setProductsData] = useState(null);
    console.log(categoryType)
    const fetchProducts = async () => {
        console.log("Fetching Products from the hook")

        // https://api.escuelajs.co/api/v1/categories/slug/
        const myURL = `https://api.escuelajs.co/api/v1${categoryType !== "" ? `/categories/${categoryType}/products` : "/products"}`;
        try {

            const response = await axios.get(myURL)
            if (response.status === 200) {
                console.log(response.data)
                setProductsData(response.data)
            } else {
                console.log("error in API")
            }


        } catch (err) {
            return { message: "Network Error", error: err || "Error has been occured" }
        }
    };

    useEffect(() => {
        fetchProducts()
    }, [categoryType])

    return { productsData }
}


export default useProductsHook;