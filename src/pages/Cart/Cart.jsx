import { useEffect } from "react";

function Cart(selectedProducts) {


    useEffect(() => {
        console.log(selectedProducts.selectedProducts);
    }, [selectedProducts])

    // All cartProducts will be showing here.
    // Cart Page: View/edit items, see totals, proceed to checkout
    // NOTE: Remember to use the props in order to update/delete/edit all cart status.



    return (<>
        <h1>Cart</h1>
    </>)
}

export default Cart;