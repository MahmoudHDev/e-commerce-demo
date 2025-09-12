import { Link } from "react-router-dom";

export default function NotFound() {

    return (<>
        <div className="text-center w-100 pt-5">
            <h1 className="text-danger">Error 404, Page wasn't found!</h1>
            <Link to={"/"}>Go to Home page</Link>
        </div>
    </>);
}