
import { Row, Col, Container } from 'react-bootstrap';
export default function TechSkill() {
    return (
        <>
            <Container className="mb-5">
                <Row >
                    <Col xs={12}>
                    <h2 className="tagPro2 text-center tag-skill">Tech Skills</h2>
                    <img data-aos="zoom-in"
                        src="/assets/html.png"
                        alt="html" className="icon-skill"
                        />
                    <img data-aos="zoom-in"
                    src="/assets/css.png"
                    alt="html"
                    className="icon-skill"
                    />
                    <img data-aos="zoom-in"
                    src="/assets/js.png"
                    alt="html"
                    className="icon-skill"
                    />
                    <img data-aos="zoom-in"
                    src="/assets/vue.png"
                    alt="html"
                    className="icon-skill"
                    />
                    <img data-aos="zoom-in"
                    src="/assets/react.png"
                    alt="html"
                    className="icon-skill"
                    />
                    <img data-aos="zoom-in"
                    src="/assets/figma.png"
                    alt="html"
                    className="icon-skill"
                    />
                    </Col>
                        
                </Row>
            </Container>
        </>
    )
}