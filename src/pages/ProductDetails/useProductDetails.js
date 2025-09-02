import axios from 'axios';
import { useEffect, useState } from 'react';


const useProductDetails = (id) => {

    const [details, setDetails] = useState(null)

    const fetchProductDetails = async () => {
        console.log("The ID: " + id)
        const api_URL = `https://fakestoreapi.in/api/products/${id}`;
        try {
            const response = await axios.get(api_URL);
            if (response.data) {
                setDetails(response.data.product)
            } else {
                console.log("Error has been occured from the API")
            }
        } catch (err) {
            console.log(err);
        }
    };



    useEffect(() => {
        if (id) {
            fetchProductDetails();
        }
    }, []);


    return { details }

};
export default useProductDetails;