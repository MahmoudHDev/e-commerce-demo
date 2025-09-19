import { useAuth } from "../../context/AuthProvider";

function Payment() {

    // Enter shipping info, payment method, complete purchase.
    const { user } = useAuth();

    return (

        <div>

            <h1>Payment Page</h1>
            <h1>Welcome {user?.email}</h1>

        </div>
    );

}
export default Payment;