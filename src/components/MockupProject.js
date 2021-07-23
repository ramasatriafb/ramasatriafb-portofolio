
import { Row, Col, Container } from 'react-bootstrap';
import { SRLWrapper } from "simple-react-lightbox";
export default function MockupProject() {
    const options = {
        settings: {
            overlayColor: 'rgba(32, 31, 37,0.15)',
            autoplaySpeed: 1500,
            transitionSpeed: 900,
        },
        buttons: {
            backgroundColor: 'grey',
            iconColor: 'rgba(255, 255, 255, 1)',
            showAutoplayButton: false,
            showFullscreenButton: true,
            showNextButton: false,
            showPrevButton: false,
            showThumbnailsButton: false,
        },
        progressBar: {
            height: '20px',
            fillColor: 'blue',
            backgroundColor: 'white'
        },
        thumbnails: {
            showThumbnails: false,
        }
    };
    return (
        <>
            <Container className=" col mb-5">
               <Row>
               <h5 className="subParagraph text-start">Mockup</h5>
                    <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}> The initial application design refers to the google maps application design where when opening the application, displays a map that shows the user's current location along with the closest BTS location points from the user's point. plus a layer button to select the map layer.</p>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}> As the requirements and features developed, the desired application display changes to adjust the features so that the display is made more concise with only the search form, BTS classification filter, settings button and map layer button.</p>
                    </Col>
                    <SRLWrapper options={options}>
                        <img
                        src="/assets/mockup-magic 1.png"
                        alt="Mockup"
                        className="project-image mockup mt-5" title="Mockup"
                        />
                    </SRLWrapper>
                </Row>
                <h5 className="subParagraph text-start mt-5">User Flow</h5>
                <Row data-aos="zoom-in-up" data-aos-duration="2000">
                    <SRLWrapper options={options}>
                        <img
                            src="/assets/General User Flow 1.png"
                            alt="Me"
                            className="image-flow mt-5" title="User Flow"
                        />
                    </SRLWrapper>
                </Row>
            </Container>
        </>
    )
}