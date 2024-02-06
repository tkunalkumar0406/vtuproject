import React from 'react';
import{Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';

const Header = () => {

return(
<header>
<Navbar className="navbar-style" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
      <Image className='logo-img-style' src="images.logo/logo.jpg" alt="vtu"  roundedCircle/>
      <h6 className='logo-text-style'>Visvervaya Technological Univercity Belgavi</h6>
      </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


        <Nav className="ml-auto">
         <Nav.Link href="#home">Home</Nav.Link>
         <Nav.Link href="#link">As About</Nav.Link>
         <NavDropdown title="Academic" id="basic-nav-dropdown">
            <NavDropdown.Item href="#"> Admision </NavDropdown.Item>
            <NavDropdown.Item href="#">circulars & Notification</NavDropdown.Item>
            <NavDropdown.Item href="#">certificate Issused</NavDropdown.Item>
         </NavDropdown>
  
         <NavDropdown title="Examination" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Examination & guidlines </NavDropdown.Item>
            <NavDropdown.Item href="#">Examination Appliaction</NavDropdown.Item>
            <NavDropdown.Item href="#">Result</NavDropdown.Item>
         </NavDropdown>

         <NavDropdown title="VTU Department" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">computer Science engg </NavDropdown.Item>
            <NavDropdown.Item href="#">elecronics & Communication</NavDropdown.Item>
            <NavDropdown.Item href="#">mechanical engg</NavDropdown.Item>
         </NavDropdown>

         <NavDropdown title="Staff Login" id="basic-nav-dropdown">
            <NavDropdown.Item href="#"> Login as admin</NavDropdown.Item>
         </NavDropdown>


      </Nav>
    </Navbar.Collapse>
  </Container>
  

</Navbar>
</header>
)
}
export default Header