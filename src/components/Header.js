import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';

function Header() {
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Paradise Nursery</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {location.pathname !== '/products' && (
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          )}
          {location.pathname !== '/cart' && (
            <Nav.Link as={Link} to="/cart">
              Cart <Badge bg="success">{totalItems}</Badge>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;