import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../assets/css/navbar.css'
import '../assets/css/main.css'
import { Link } from "react-router-dom";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <div className="container">
                <div className="row align-items-center w-100">
                    <div className="col-md-3 col-6">
                    <h3>LOGO</h3>
                    </div>
                    <div className="col-md-9 col-6 justify-content-end">
                       <nav ref={navRef} className=" text-end"> 
					   <Link to={"/"}> <li > Home</li></Link>
          			   <Link to={"/about"}><li>About</li></Link>
          			   <Link to={"/blogs"}><li>Blog</li></Link>
          			   <Link to={"/gallery"}><li>Gallery</li></Link>
          			   <Link to={"/contact"}><li>Contact</li></Link>
			           	<button
			           		className="nav-btn nav-close-btn"
			           		onClick={showNavbar}>
			           		<FaTimes />
			           	</button>
			           </nav>
                       <button
			           	className="nav-btn"
			           	onClick={showNavbar}>
			           	<FaBars />
			           </button>
                    </div>
                </div>
            </div>		
		</header>
	);
}

export default Navbar;