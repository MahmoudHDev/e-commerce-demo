import { Col, Card } from 'react-bootstrap';
import './ProductCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';


export default function ProductCard(productItem) {

    const imgStyle = {
        width: "200px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f0f0f0"
    };



    return (
        <Col key={productItem.id}>
            <Link to={`/product/${productItem.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card>
                    <div className='d-flex justify-content-center align-items-center'>

                        <LazyLoadImage
                            className='product-img'
                            height={"200px"} width={"200px"}
                            alt='Product image'
                            effect='blur'
                            wrapperProps={{
                                style: { transitionDelay: "0.8" },
                            }}
                            placeholder={
                                <div
                                    style={imgStyle}
                                    className='mt-2'>
                                    <img src='https://user-images.githubusercontent.com/20684618/31289519-9ebdbe1a-aae6-11e7-8f82-bf794fdd9d1a.png' />
                                </div>

                            }
                            src={productItem.images[0]} />
                    </div>

                    <p className='product-title text-center pb-2'>{productItem.title}</p>

                    {/* <p className='product-brand'>Brand: {productItem.brand}</p> */}

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