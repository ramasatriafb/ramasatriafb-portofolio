import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { openMail } from '../utils';
export default class Hero extends Component {
    state = {
        left: 0,
        top: 0
      }
    
      componentDidMount() {
        // When the component is mounted, add your DOM listener.
        document.addEventListener("mousemove", this.handleCursor);
        // document.addEventListener("mouseleave", this.handleCursorLeave);
      }
    
      componentWillUnmount() {
        // Make sure to remove the DOM listener when the component is unmounted.
        document.removeEventListener("mousemove", this.handleCursor);
        // document.removeEventListener("mouseleave", this.handleCursorLeave);
      }
    
      handleCursor = (e) => {
          const width = document.getElementsByClassName('box').offsetWidth;
          const height = document.getElementsByClassName('box').offsetHeight;
       
          var addX = 0;
          var addY = 0;
        if (e.clientX > width/2){
            addX = 20;
          }
          if(e.clientX < width/2){
            addX = -20;
          }
          if(e.clientY > height/2){
            addY = 20;
          }
          if(e.clientY < height/2){
            addY = -20;
          }
        //           $("#followC").css("top", e.clientY + addY)
        //     .css("left", e.clientX + addX);
        //   });
          const cursor = document.getElementsByClassName('cursor')[0];     
        //   cursor.setAttribute('style','top:'+e.clientY +'px;left:'+ e.clientX+'px;');
        //   console.log(document.getElementsByClassName('pict'))
        //   document.getElementsByClassName('pict')[0].addEventListener("mouseleave", this.handleCursorLeave);
      }

    //   handleCursorLeave = (e) => {
       
    //     const cursor = document.getElementsByClassName('cursor')[0];     
    //     cursor.setAttribute('style','top:50%; left:50%;');
    // }
      render(){
        return (
            <>
                <Container className="mb-2">
                    <Row  >
                        <Col className="pict " 
                       >
                            <div className="box-pict">
                                <img data-aos="fade-up"
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