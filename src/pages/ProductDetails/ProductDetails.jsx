import { useParams } from "react-router-dom";
import useProductDetails from './useProductDetails.js';
import './ProductDetails.css';
import { useEffect, useState } from "react";
import GetCategoryIcon from "../../utils/GetCategoryIcon.jsx";
export default function ProductDetails() {

    const { id } = useParams();
    const { details } = useProductDetails(id);
    const [proDetails, setProDetails] = useState(null)

    useEffect(() => {

        setProDetails(details);
    }, [details]);

    return (<>
        <div className="parent pt-5">
            <div className="div1">
                <img src={proDetails && proDetails.image || ""} width={"500px"} />
            </div>
            <div className="div2">
                <div>
                    <h2>{proDetails && proDetails.title || ""}</h2>
                    <p> Brand: {proDetails && proDetails.brand || ""}</p>

                </div>
                <p> Price: {proDetails && proDetails.price || ""} EGP </p>
                <hr />
                <p><strong>Description:</strong> {proDetails && proDetails.description}</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <p className="">Model: {proDetails && proDetails.model} </p>
                    <p>Category: {proDetails && proDetails.category} {proDetails && <GetCategoryIcon category={proDetails.category || ""} />}</p>
                </div>

            </div>
        </div >
    </>);
}
