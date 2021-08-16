
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
                        alt="HTML" title="HTML" className="icon-skill"
                        />
                    <img data-aos="zoom-in"
                    src="/assets/css.png"
                    alt="CSS"
                    className="icon-skill"
                    />
                    <img data-aos="zoom-in"
                    src="/assets/js.png"
                    alt="Javascript" title="Javascript"
                    className="icon-skill"
                    />
                    <img data-aos="zoom-in"
                    src="/assets/vue.png"
                    alt="Vue JS" title="Vue JS"
                    className="icon-skill"
                    />
                    <img data-aos="zoom-in"
                    src="/assets/react.png"
                    alt="React JS" title="React JS"
                    className="icon-skill"
                    />
                    <img data-aos="zoom-in"
                    src="/assets/figma.png"
                    alt="Figma" title="Figma"
                    className="icon-skill"
                    />
                    </Col>
                        
                </Row>
            </Container>
        </>
    )
}