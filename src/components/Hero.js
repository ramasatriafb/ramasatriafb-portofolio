import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { openMail } from '../utils';
export default class Hero extends Component {
      render(){
        return (
            <>
                <Container className="mb-2">
                    <Row  >
                        <Col className="pict " 
                       >
                            <div className="box-pict" data-aos="zoom-in" data-aos-duration="3000">
                                <img
                                src="/assets/man.png"
                                alt="Me"
                                className="object-cover"  id="box-pict"
                                />
                            </div>
                        </Col>
                        <Col>
                            <h2 className="tagPro text-start" data-aos="fade-left">ramasatriafb</h2>
                            <h2 className="tagPro2 text-start" data-aos="fade-left" data-aos-duration="1500" >Frontend developer who love mobile first design.</h2>
                            <p className="paragraph-pro text-start" data-aos="fade-left" data-aos-duration="2000">
                                I am currently working at one of the telecommunications companies in Indonesia, namely Telkomsel as a Full Stack Engineer in the Network Performance and Business Process Analyst division who is responsible for presenting business data automatically with automated digitization
                            </p>
                            <Row md={2}>
                                <Col className="ms-auto mt-2">
                                    <Button variant="primary" className="text-center btn-text " onClick={openMail}>Email Me</Button>
                                </Col>
                                <Col className="ms-auto mt-2">
                                <a
                                        href="https://id.linkedin.com/in/ramasatriafb" target="blank"
    
                                    >
                                        <img
                                            src="/assets/in.svg"
                                            alt="LinkedIn"
                                            className="contact  " style={{ marginTop: "5px"}}
                                        />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/ramasatriafb/?hl=id" target="blank"
    
                                    >
                                        <img
                                            src="/assets/ig.svg"
                                            alt="Instagram"
                                            className="contact ms-5"
                                        />
                                    </a>
                                    <a
                                       href="https://wa.me/6282132282972" target="blank"
    
                                    >
                                        <img
                                            src="/assets/whatsapp.svg"
                                            alt="WhatsApp"
                                            className="contact ms-5"
                                        />
                                    </a>
                                </Col>
                            </Row>
    
                        </Col>
                    </Row>
                </Container>
            </>
        )
      }
    
}