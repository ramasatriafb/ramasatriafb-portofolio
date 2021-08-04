
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function ProjectsHero() {
    return (
        <>
            <Container className="projects-section">
                <Row className="mt-2">
                    <Col className="col-8"></Col>
                    <div  className="project-ornament "  data-aos="fade-right" data-aos-duration="5000">

                    </div>
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
                            className="projects-box " title="MAGIC APP"
                            />
                            <Link to="/magic-project" className="link-detail mt-5">View Detail Project</Link>
                            </Row>
                       
                        </Col>
                        <Col md={6}>
                            <Row className="project-second">
                            <img data-aos="fade-right"
                            src="/assets/magic-desktop.png"
                            alt="Me"
                            className="projects-box " title="MAGIC Desktop"
                            />
                            <Link to="/magic-desktop-project" className="link-detail mt-5">View Detail Project</Link>
                            </Row>
                       
                        </Col>  
                    </Row>
                </Row>
            </Container>
        </>
    )
}