import { useParams } from "react-router-dom";
import useProductDetails from './useProductDetails.js';
import './ProductDetails.css';
import { useEffect, useState } from "react";
import GetCategoryIcon from "../../utils/GetCategoryIcon.jsx";
import { Form, Button, Carousel } from "react-bootstrap";
import { useAuth } from "../../context/AuthProvider.jsx";

export default function ProductDetails({ onSelectProducts }) {
    // Properties
    const { id } = useParams();
    const { details } = useProductDetails(id);
    const quantityDefNumber = 10;
    // state Hooks:
    const [proDetails, setProDetails] = useState(null)
    const [index, setIndex] = useState(0);
    const [selectedQuantity, setSelectedQuantity] = useState("Quantity");
    const { profileData } = useAuth();
    const [profileId, setProfileID] = useState(false)
    const [btnStatus, setBtnStatus] = useState(false)

    // Methods:
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        setProDetails(details);
        // console.log(userAuth)
        if (profileData && profileData.id) {
            setProfileID(profileData.id);
        };
    }, [details, profileData]);

    const handleQuantities = (e) => {
        const newValue = e.target.value;
        setSelectedQuantity(newValue);
        setBtnStatus(newValue !== "Quantity")
    };

    const handleSubmitCart = () => {
        onSelectProducts(prev => {
            const arrIndex = prev.findIndex(item => item.product === proDetails.id);
            console.log(prev)
            if (arrIndex !== -1) {
                const updatedProducts = [...prev];
                updatedProducts[arrIndex] = {
                    ...updatedProducts[arrIndex], quantity: parseInt(updatedProducts[arrIndex].quantity) + parseInt(selectedQuantity)
                };
                return updatedProducts;
            } else {

                return [...prev, { quantity: parseInt(selectedQuantity), product: proDetails.id, userID: profileId }];
            };
        });
    };

    return (<>
        <div className="parent pt-5">
            <div className="div1">
                <Carousel activeIndex={index} onSelect={handleSelect} fade variant="dark" >
                    {proDetails && proDetails.images.map((imgSrc, i) =>
                        <Carousel.Item className="carousel-item-inner" key={i} >
                            <img className="custom-carousel-img" src={imgSrc} alt="First slide" width={"500px"} />
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
            <div className="div2">
                <div>
                    <h2>{proDetails && proDetails.title || ""}</h2>
                    {/* <p> Brand: {proDetails && proDetails.brand || ""}</p>     // old one */}
                </div>
                <p> Price: {proDetails && proDetails.price || ""} EGP </p>
                <hr />
                <p><strong>Description:</strong> {proDetails && proDetails.description}</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <p className="">Model: {proDetails && proDetails.model} </p>
                    <p>Category: {proDetails && proDetails.slug} {proDetails && <GetCategoryIcon category={proDetails.category || ""} />}</p>
                </div>

                <div className="d-flex align-items-center q-container" >

                    <Form.Select aria-label="Default select example" onChange={handleQuantities} value={selectedQuantity || "Quantity"}>
                        <option value={"Quantity"}>{"Quantity"}</option>
                        {/* length = N number of entries ==> quantityDefNumber */}
                        {Array.from({ length: quantityDefNumber }, (_, i) => {
                            const n = i + 1;
                            return <option key={n} value={n}>{n}</option>
                        })}
                    </Form.Select>
                    <Button variant="dark" disabled={!btnStatus} onClick={() => handleSubmitCart()}>Add to <GetCategoryIcon category={"cart"} /></Button>
                </div>
            </div>
        </div >
    </>);
}
