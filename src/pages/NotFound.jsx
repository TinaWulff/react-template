import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <h1>Not Found 404</h1>
            <p>
                The page you are looking for does not exist.
                Please check the URL or return to the home page.
                <Link to="/">Go to Home</Link>  
            </p>
        </>
    );
}