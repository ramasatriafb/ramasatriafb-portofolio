
import { Row, Col, Container } from 'react-bootstrap';
export default function FinalResult({projects}) {
    let text, poster ,video, image;
    console.log(projects);
    if(projects === 'MAGIC APP'){
       text = "After the application is complete and according to the requested features and needs, the app is released via the Telegram internal broadcast bot in October 2020 and is downloaded by employees who have registered users on the internal telegram bot.";
       poster = "/assets/FINAL MAGIC 1.png";
       video = "https://drive.google.com/uc?id=12pUEjX4GMtTkGz7lVzsNWqr7qhYbtFS1&export=download&authuser=0";
       image = "/assets/FINAL MAGIC 2.png";
    }else if(projects === 'MAGIC Desktop'){
        text = "After the application is complete and according to the requested features and needs, the app is released via the Telegram internal broadcast bot in October 2020 and is downloaded by employees who have registered users on the internal telegram bot.";
        poster = "/assets/magic-desktop.png";
        video = "https://drive.google.com/uc?id=1VbDXymDzICgTeY3WZGV4-n1usClqz2QI&export=download&authuser=0";
        image = "/assets/magic-desktop2.png";
    }else if(projects === 'DNS Monitoring'){
        text = "After the application is complete and according to the requested features and needs, this application has been activated on one of ID-Sirtii's servers as a helper server to detect the domain access network on the newsletter resolver.";
        poster = "/assets/final result DNS.png";
        video = "https://drive.google.com/uc?id=1AN35KUAqZqCygZfxKtYbPWKdOh4QmtX1&export=download&authuser=0";
        image = "/assets/DNS-APP.png";
     
    }
    return (
        <>
            <Container className=" col mb-2">
               <Row>
               <h5 className="subParagraph text-start">Final Result</h5>
               <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}> {text}</p>
                </Col>
                <video width="800px" height="480px" poster={poster} controls>
                    <source src={video} 
                    type="video/mp4"/>
                </video>
                <img
                    src={image}
                    alt="Final Result"
                    className="final-result-project mt-5" title="Final Result"
                    />
                </Row>
            </Container>
        </>
    )
}