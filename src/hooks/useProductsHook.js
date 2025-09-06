import axios from 'axios';
import { useEffect, useState } from 'react';

const useProductsHook = (categoryType) => {


    const [productsData, setProductsData] = useState(null);
    // const [choosenCategory, setChoosenCategory] = useState(categoryType)


    console.log(categoryType)

    const fetchProducts = async () => {
        console.log("Fetching Products from the hook")
        const myURL = `https://fakestoreapi.in/api/products${categoryType !== "" ? `/category?type=${categoryType}` : ""}`;
        try {

            const response = await axios.get(myURL)
            if (response.status === 200) {
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
    }, [categoryType])

    return { productsData }
}


export default useProductsHook;