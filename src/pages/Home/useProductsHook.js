import axios from 'axios';
import { useEffect, useState } from 'react';

const useProductsHook = () => {


    const [productsData, setProductsData] = useState(null);


    const fetchProducts = async () => {
        console.log("Fetching Products from the hook")
        try {

            const response = await axios.get("https://fakestoreapi.in/api/products")
            // console.log(response)
            if (response.status === 200) {
                // console.log(response.data.products)
                setProductsData(response.data.products)
            } else {
                console.log("error in API")
            }


        } catch (err) {
            return { message: "Network Error", error: err || "Error has been occured" }
        }



    }


    useEffect(() => {
        fetchProducts()
    }, [])

    return { productsData }
}


export default useProductsHook;