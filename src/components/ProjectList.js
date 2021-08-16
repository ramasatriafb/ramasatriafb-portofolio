
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function ProjectList(){
    return(
        <>
        <Container>
        <h5 className="tagPro2 text-start mt-5">My Projects</h5>
                <Row className="position-relative flex" data-aos="zoom-in">
                    <Col md={6}>
                        <Row>
                            <img
                            src="/assets/magic-app.png"
                            alt="MAGIC APP"
                            className="projects-box " title="MAGIC APP"
                            />
                            <Link to="/magic-project" className="link-detail link-detail2"> <img
                            src="/assets/edit.png"
                            alt="Edit"
                            style={{marginRight:"12px"}}
                            />View Detail Project</Link>
                        </Row>
                    
                    </Col>
                    <Col md={6}>
                        <Row>
                            <img
                            src="/assets/magic-desktop.png"
                            alt="MAGIC Desktop"
                            className="projects-box " title="MAGIC Desktop"
                            />
                            <Link to="/magic-desktop-project" className="link-detail link-detail2">
                            <img
                            src="/assets/edit.png"
                            alt="Edit"
                            style={{marginRight:"12px"}} 
                            />View Detail Project</Link>
                        </Row>
                    
                    </Col>  
                </Row>
                <Row className="position-relative flex mb-5 mt-3" data-aos="zoom-in">
                    <Col md={6}>
                        <Row>
                            <img
                            src="/assets/DNS-APP.png"
                            alt="DNS Monitoring"
                            className="projects-box " title="DNS Monitoring"
                            />
                            <Link to="/dns-monitoring-project" className="link-detail link-detail2"> <img
                            src="/assets/edit.png"
                            alt="Edit"
                            style={{marginRight:"12px"}}
                            />View Detail Project</Link>
                        </Row>
                    
                    </Col>
                    <Col md={6}>
                        <Row>
                            <img
                            src="/assets/MYDOCTOR.png"
                            alt="My Doctor"
                            className="projects-box " title="My Doctor"
                            />
                            <Link to="/my-doctor-project" className="link-detail link-detail2">
                            <img
                            src="/assets/edit.png"
                            alt="Edit"
                            style={{marginRight:"12px"}}
                            />View Detail Project</Link>
                        </Row>
                    
                    </Col>  
                </Row>
            </Container>
        </>
    )
}