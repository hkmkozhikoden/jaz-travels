import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../assets/css/navbar.css'
import '../assets/css/main.css'
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
                    <div className="col-md-9 col-6 text-end">
                       <nav ref={navRef} className="w-100 text-end"> 
			           	<a href="/#">Home</a>
			           	<a href="/#">My work</a>
			           	<a href="/#">Blog</a>
			           	<a href="/#">About me</a>
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