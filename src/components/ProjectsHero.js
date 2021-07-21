
import { Row, Col, Container } from 'react-bootstrap';
export default function ProjectsHero() {
    return (
        <>
            <Container className="projects-section">
                <Row className="mt-2">
                    <Col className="col-8 project-ornament "></Col>
                    <Col className="col-4"></Col>
                </Row>
                <Row className="position-relative flex">
                    <Col className="mt-2">
                    <h2 className="text-white projectsTag text-start" data-aos="fade-right">Best Experience Project</h2>
                   
                    
                    </Col>
                    <Col className="mt-2">
                       
                    </Col>
                    <Row >
                        <Col md={6}>
                            <Row>
                            <img data-aos="fade-right"
                            src="/assets/magic-app.png"
                            alt="Me"
                            className="projects-box "
                            />
                            <a href="#index" className="link-detail">View Detail Project</a>
                            </Row>
                       
                        </Col>
                        <Col md={6}>
                            <Row>
                            <img data-aos="fade-right"
                            src="/assets/magic-desktop.png"
                            alt="Me"
                            className="projects-box " style={{marginLeft: "60px"}}
                            />
                            <a href="#index" className="link-detail">View Detail Project</a>
                            </Row>
                       
                        </Col>  
                    </Row>
                </Row>
            </Container>
        </>
    )
}