
import { Row, Col, Container } from 'react-bootstrap';
export default function About() {
    return (
        <>
            <Container className=" colAbout mb-5">
                <Row data-aos="zoom-in-up" data-aos-duration="2000">
                    <Col xs={12} md={6}>
                        <div className="ornament-about">
                        <img
                            src="/assets/man.png"
                            alt="Me"
                            className="object-cover" style={{width: "100%",height: "100%"}}
                            />
                        </div>
                    </Col>
                    <Col xs={12}md={6} className="mx-auto">  
                    <h2 className="text-start mt-5 tagPro2 ">Why  I started focusing <p style={{color: "#114A90"}}>Front End Dev ? </p></h2>
                    <p className="paragraph-pro text-start me-5">
                    My interest in application design started in 2020 where I handled projects that required me to learn UI and UX and develop front end applications. Since this experience I began to practice to deepen the field of Front End. With several projects that I have worked on related to the frontend and my great interest in user interfaces and problem solving through application design. I convinced myself to focus on Front End Developer where previously I was a full stack programmer.
                    </p>
                    </Col>
                        
                </Row>
            </Container>
        </>
    )
}