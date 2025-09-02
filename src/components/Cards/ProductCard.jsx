import { Col, Card } from 'react-bootstrap';
import './ProductCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
export default function ProductCard(productItem) {
    return (
        <Col key={productItem.id}>
            <Link to={`/product/${productItem.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card>
                    <div className='d-flex justify-content-center align-items-center'>
                        {/* <img className='product-img' src={productItem.image} height={"200px"} width={"200px"} /> */}
                        <LazyLoadImage
                            className='product-img'
                            height={"200px"} width={"200px"}
                            alt='Product image'
                            effect='blur'
                            wrapperProps={{
                                style: { transitionDelay: "0.8" },
                            }}
                            placeholder={
                                <div style={{
                                    width: "200px",
                                    height: "200px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "#f0f0f0"
                                }}>
                                    <span>Loading...</span>
                                </div>

                            }
                            src={productItem.image} />
                    </div>

                    <p className='product-title text-center pb-2'>{productItem.title}</p>

                    <p className='product-brand'>Brand: {productItem.brand}</p>

                    {/* Color cube */}
                    <div className='d-flex'>
                        {productItem.color && <>
                            <p className='product-color'>color: </p>
                            <div className='color-cube' style={{ backgroundColor: productItem.color || "" }}></div>
                        </>}
                    </div>
                    <p className='product-desc'>Description: {productItem.description}</p>

                    <div className='product-container'>

                        <p className='product-price'>Price: {productItem.price} LE</p>
                    </div>

                </Card>
            </Link>
        </Col>);
}