// import React from 'react'
// import "../css/styles.css"
// import "../css/bootstrap.css"
// // import "../js/bootstrap.js"
import logo from "../images/icons/logo-sm.png"
import search from "../images/icons/search-icon-sm.png"
import cart from "../images/icons/cart-sm.png"
import { Link } from "react-router";

//  function Header() {
//   return (
//     <>
//       <div className="nav-wrapper fixed-top">
//         <div className="container">
//           <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//             <button
//               className="navbar-toggler navbar-toggler-right"
//               type="button"
//               data-toggle="collapse"
//               data-target=".navbar-collapse"
//             >
//               ☰
//             </button>
//             <Link className="navbar-brand mx-auto" to="/">
//               <img src={logo} />
//             </Link>

//             <div className="navbar-collapse collapse">
//               <ul className="navbar-nav nav-justified w-100 nav-fill">
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/mac/">
//                     Mac
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/iphone">
//                     iphone
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="#">
//                     ipad
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="#">
//                     watch
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="#">
//                     tv
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="#">
//                     Music
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="#">
//                     Support
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/search/">
//                     <img src={search} />
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/cart/">
//                     <img src={cart} />
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function Header() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="mx-auto">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls=" basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100 nav-fill">
            {" "}
            {/* nav-justified and nav-fill are handled by w-100 and nav-fill className */}
            <Nav.Link as={Link} to="/mac/">
              Mac
            </Nav.Link>
            <Nav.Link as={Link} to="/iphone">
              iphone
            </Nav.Link>
            {/* For links that don't navigate using react-router-dom (e.g., #),
                you can use a standard Nav.Link or handle their behavior differently.
                Here I'll keep them as Nav.Link with '#' for simplicity, but you
                might want to change '#' based on your actual link logic.
            */}
            <Nav.Link as={Link} to="ipad">
              ipad
            </Nav.Link>
            <Nav.Link as={Link} to="watch">
              watch
            </Nav.Link>
            <Nav.Link as={Link} to="tv">
              tv
            </Nav.Link>
            <Nav.Link as={Link} to="music">
              Music
            </Nav.Link>
            <Nav.Link as={Link} to="support">
              Support
            </Nav.Link>
            {/* Links with images */}
            <Nav.Link as={Link} to="/search/">
              <img src={search} alt="Search" />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart/">
              <img src={cart} alt="Cart" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;