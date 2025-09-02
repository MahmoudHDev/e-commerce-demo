import { useParams } from "react-router-dom";
import useProductDetails from './useProductDetails.js';
import './ProductDetails.css';
import { useEffect, useState } from "react";
export default function ProductDetails() {

    const { id } = useParams();
    const { details } = useProductDetails(id);
    const [proDetails, setProDetails] = useState(null)

    useEffect(() => {
        setProDetails(details)
    }, [details])



    return (<>
        <div className="parent pt-5">
            <div className="div1">
                <img src={proDetails && proDetails.image} width={"500px"} />
            </div>
            <div className="div2">
                <h1>{proDetails && proDetails.title}</h1>
                <p><strong>Description:</strong>  ${proDetails && proDetails.description}</p>
            </div>
        </div>
    </>);
}
