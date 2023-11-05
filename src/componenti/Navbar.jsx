import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../sky.png'



function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className='ms-0 '>
        <img src={logo} alt="logo" className='ms-2'  style={{width : '20em'}}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5">
            <Nav.Link href="#home" className='fs-4 ms-4'>Home</Nav.Link>
            <Nav.Link href="#link" className='fs-4 ms-4'>Meteo</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;