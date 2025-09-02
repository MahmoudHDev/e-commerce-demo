import { useEffect } from "react";
import useProductsHook from "./useProductsHook";
import ProductCard from "../../components/Cards/ProductCard";
import { Row } from 'react-bootstrap';
function Home() {
    const { productsData } = useProductsHook()

    useEffect(() => {
        console.log(productsData)
    }, [productsData])


    return (<>
        {!productsData ? <></> : <Row xs={1} md={5} className="g-4">{productsData.map(ProductCard)}</Row>}
    </>);

}

export default Home;
