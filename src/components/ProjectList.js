
import { Row, Col, Container } from 'react-bootstrap';
export default function ProjectList(){
    return(
        <>
        <Container>
        <h2 className="tagPro2 text-start mt-5">My Projects</h2>
                <Row className="position-relative flex mb-5" data-aos="zoom-in">
                    <Col md={6}>
                        <Row>
                            <img
                            src="/assets/magic-app.png"
                            alt="Me"
                            className="projects-box "
                            />
                            <a href="#index" className="link-detail link-detail2"> <img
                            src="/assets/edit.png"
                            alt="Edit"
                            style={{marginRight:"12px"}}
                            />View Detail Project</a>
                        </Row>
                    
                    </Col>
                    <Col md={6}>
                        <Row>
                            <img
                            src="/assets/magic-desktop.png"
                            alt="Me"
                            className="projects-box "
                            />
                            <a href="#index" className="link-detail link-detail2">
                            <img
                            src="/assets/edit.png"
                            alt="Edit"
                            style={{marginRight:"12px"}}
                            />View Detail Project</a>
                        </Row>
                    
                    </Col>  
                </Row>
                <Row className="position-relative flex mb-5" data-aos="zoom-in">
                    <Col md={6}>
                        <Row>
                            <img
                            src="/assets/DNS-APP.png"
                            alt="Me"
                            className="projects-box "
                            />
                            <a href="#index" className="link-detail link-detail2"> <img
                            src="/assets/edit.png"
                            alt="Edit"
                            style={{marginRight:"12px"}}
                            />View Detail Project</a>
                        </Row>
                    
                    </Col>
                    <Col md={6}>
                        <Row>
                            <img
                            src="/assets/MYDOCTOR.png"
                            alt="Me"
                            className="projects-box "
                            />
                            <a href="#index" className="link-detail link-detail2">
                            <img
                            src="/assets/edit.png"
                            alt="Edit"
                            style={{marginRight:"12px"}}
                            />View Detail Project</a>
                        </Row>
                    
                    </Col>  
                </Row>
            </Container>
        </>
    )
}