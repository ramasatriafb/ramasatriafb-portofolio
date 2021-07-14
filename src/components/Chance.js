
import { Row, Col,Button, Container } from 'react-bootstrap';
import { openMail } from '../utils';
export default function Chance({pages}) {
    return (
        <>
            <Container className="mb-5">
               
                    {pages === 'Projects' ? (
                         <Row  className="colChance chance-project" data-aos="zoom-in" data-aos-duration="2000">
                         <Col sm={6} xs={12}>
                        <div>
                      
                        <img
                        src="/assets/ornament.svg"
                        alt="Me"
                        className="ornament2"
                        />
                        <h2 className="text-start text-projects chance-text-project">Have a chance for collaboration ?</h2>
                         </div>
                         
                    </Col>
                    <Col sm={6} xs={12}   className="my-auto">  
                         <Button variant="primary" className="text-center btn-text  email-collaboration email-project" onClick={openMail}>Email Me</Button>
                     </Col>
                    </Row>
                    ):(
                        <Row  className="colChance" data-aos="zoom-in" data-aos-duration="2000">
                         <Col sm={6} xs={12}>
                        <div className="ornament-chance">
                        <h2 className="text-start text-collaboration" style={{marginTop:"10px"}}>Have a chance for collaboration ?</h2>
                        </div>
                        
                    </Col>
                    <Col sm={6} xs={12}   className="my-auto">  
                        <a href="#index" className="link-detail2">Show Project List</a>
                        <Button variant="primary" className="text-center btn-text me-5 mx-5 email-collaboration" onClick={openMail}>Email Me</Button>
                    </Col>
                    </Row>
                    )}
                   
                    {/* <Col sm={6} xs={12}   className="my-auto">  
                        <a href="#index" className="link-detail2">Show Project List</a>
                        <Button variant="primary" className="text-center btn-text me-5 mx-5 email-collaboration">Email Me</Button>
                    </Col> */}
                        
            </Container>
        </>
    )
}