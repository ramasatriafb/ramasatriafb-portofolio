
import { Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function Header({pages}) {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className="my-theme">ramasatriafb.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav mx-auto ">
                        <Nav className="ms-auto " >
                        <Nav.Item><NavLink className= {`${pages ==='Home'? 'nav-link link-theme active' : 'nav-link link-theme hover'}`} exact to={"/"}>Home</NavLink></Nav.Item>
                       
                        <Nav.Item><NavLink className={`${pages ==='Projects'? 'nav-link link-theme active' : 'nav-link link-theme hover'}`} exact to={"/projects"}>Projects</NavLink></Nav.Item>
                       
                        <Nav.Link className="link-theme hover" href="https://wa.me/6282132282972" target="blank">Contact</Nav.Link>
                            
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}