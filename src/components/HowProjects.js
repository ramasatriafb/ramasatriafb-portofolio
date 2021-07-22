
import { Row, Col, Container } from 'react-bootstrap';
import { SRLWrapper } from "simple-react-lightbox";
export default function HowProjects() {
    
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
               <h5 className="subParagraph text-start">How the MAGIC App Work</h5>
               <SRLWrapper options={options}>
                <img
                    src="/assets/arsitektur-magic(1).png"
                    alt="Me"
                    className="project-image mt-5" title="General Architecture"
                    />
             
                </SRLWrapper>
                    <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}> Before getting into the case study, I think it is better to explain a little about the device itself. The aim of MAGIC is to help the sales and network analysis division to know the development of network access in each coverage area based on network usage data on BTS so that they will get an overview of the next business strategy steps for market expansion. By utilizing big data to accommodate strategic data about the network, several APIs were made that provide data that will be displayed in the application.</p>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}> How to use the application? When the user opens the application, the user will be asked to log in first with the authentication process on the telegram account that has been registered on the internal telegram bot. Then the user will receive an OTP code from the bot account for the next login process. After the user logs in, it will automatically detect the location, what network is being used and the nearest BTS that is connected to the user's cellphone. Users can view network usage information from several nearby BTS. Users can take advantage of the find direction feature to go to a specific BTS location and live GPS tracking to ensure the user's location while moving.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}