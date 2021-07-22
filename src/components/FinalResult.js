
import { Row, Col, Container } from 'react-bootstrap';
export default function FinalResult() {
    return (
        <>
            <Container className=" col mb-2">
               <Row>
               <h5 className="subParagraph text-start">Final Result</h5>
               <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}> After the application is complete and according to the requested features and needs, the app is released via the Telegram internal broadcast bot in October 2020 and is downloaded by employees who have registered users on the internal telegram bot.</p>
                </Col>
                <video width="800px" height="480px" poster="/assets/FINAL MAGIC 1.png" controls>
                    <source src="https://drive.google.com/uc?id=12pUEjX4GMtTkGz7lVzsNWqr7qhYbtFS1&export=download&authuser=0" 
                    type="video/mp4"/>
                </video>
                <img
                    src="/assets/FINAL MAGIC 2.png"
                    alt="Me"
                    className="final-result-project mt-5" title="Final Result"
                    />
             
                   
                </Row>
            </Container>
        </>
    )
}