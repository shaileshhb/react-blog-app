import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="not-found">
            <h2>Page Not Found!</h2>
            <Link to="/">Go to home</Link>
        </div>
    );
}
 
export default PageNotFound;