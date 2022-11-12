import { Link } from "react-router-dom";

const NotFount = () => {
    return ( 
        <div className="notfount">
            <h2>404 Sorry</h2>
            <p>This page cannot be found</p>
            <Link to="/">Go to home</Link>
        </div>
     );
}
 
export default NotFount;