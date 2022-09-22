import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Kofman's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{color:"white", backgroundColor: "#EC7D10", borderRadius: "8px"}}>Create Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;