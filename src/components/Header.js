
import { Navbar, Container, Nav} from 'react-bootstrap';
export default function Header({pages}) {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className="my-theme" href="#home">ramasatriafb.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav mx-auto ">
                        <Nav className="ms-auto " >
                            <Nav.Link className={`${pages ==='Home'? 'link-theme active' : 'link-theme hover'}`} href="#home">Home</Nav.Link>
                            <Nav.Link className={`${pages ==='Projects'? 'link-theme active' : 'link-theme hover'}`} href="#link">Project</Nav.Link>
                            <Nav.Link className="link-theme hover" href="https://wa.me/6282132282972" target="blank">Contact</Nav.Link>
                            
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}