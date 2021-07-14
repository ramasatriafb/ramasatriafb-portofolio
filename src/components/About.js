
import { Row, Col, Container } from 'react-bootstrap';
export default function About() {
    return (
        <>
            <Container className=" colAbout mb-5">
                <Row data-aos="zoom-in-up" data-aos-duration="2000">
                    <Col xs={12} md={6}>
                        <div className="ornament-about">
                        <img
                            src="/assets/pitch.png"
                            alt="Me"
                            className="object-cover" style={{width: "80%",height: "90%"}}
                            />
                        </div>
                    </Col>
                    <Col xs={12}md={6} className="mx-auto">  
                    <h2 className="text-start mt-5 tagPro2 ">Why  I started focusing <p style={{color: "#114A90"}}>Front End Dev ? </p></h2>
                    <p className="paragraph-pro text-start me-5">
                        I am currently working at one of the telecommunications companies in Indonesia, namely Telkomsel as a Full Stack Engineer in the Network Performance and Business Process Analyst division who is responsible for presenting business data automatically with automated digitization
                    </p>
                    </Col>
                        
                </Row>
            </Container>
        </>
    )
}