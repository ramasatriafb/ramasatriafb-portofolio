
import { Row, Col} from 'react-bootstrap';
export default function Footer() {
    return (
        <>
                <Row style={{backgroundColor: "#fff"}}>
                    <Col xs={12} >
                    <h2 className="tagPro2 text-start mt-5 text-footer-tag">Get in Touch</h2>
                    <p className="paragraph-pro text-start text-footer-tag-paragraph" >
                    For business inquiry please send email to  <a href="mailto:ramasatriafb@gmail.com"> ramasatriafb@gmail.com</a>
                    </p>
                    <div className="logo-footer">
                       <a
                                    href="https://id.linkedin.com/in/ramasatriafb" target="blank"

                                >
                                    <img
                                        src="/assets/in.svg"
                                        alt="LinkedIn" className="icon-footer"
                                        style={{textAlign: "left",backgroundColor: "#fff"}}
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/ramasatriafb/?hl=id" target="blank"

                                >
                                    <img
                                        src="/assets/ig.svg"
                                        alt="Instagram"
                                        className="contact ms-5 icon-footer"
                                    />
                                </a>
                                <a
                                   href="https://wa.me/6282132282972" target="blank"

                                >
                                    <img
                                        src="/assets/whatsapp.svg"
                                        alt="WhatsApp"
                                        className="contact ms-5 icon-footer"
                                    />
                                </a>
                    </div>
                    
                    </Col>
                        
                </Row>
        </>
    )
}