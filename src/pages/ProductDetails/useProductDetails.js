import axios from 'axios';
import { useEffect, useState } from 'react';


const useProductDetails = (id) => {

    const [details, setDetails] = useState(null)

    const fetchProductDetails = async () => {
        console.log("The ID: " + id)
        const api_URL = `https://api.escuelajs.co/api/v1/products/${id}`;
        try {
            const response = await axios.get(api_URL);
            if (response.data) {

                setDetails(response.data)
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