
import { Row, Col, Container } from 'react-bootstrap';
import { SRLWrapper } from "simple-react-lightbox";
export default function MockupProject({projects}) {
    let imageProject,userFlow, desc1, desc2;
    if(projects === 'MAGIC APP'){
        imageProject = "/assets/mockup-magic 1.png";
        userFlow = "/assets/General User Flow 1.png";
        desc1 = "The initial application design refers to the google maps application design where when opening the application, displays a map that shows the user's current location along with the closest BTS location points from the user's point. plus a layer button to select the map layer.";
        desc2 = "As the requirements and features developed, the desired application display changes to adjust the features so that the display is made more concise with only the search form, BTS classification filter, settings button and map layer button.";
    }else if (projects === 'MAGIC Desktop'){
        imageProject = "/assets/MagicDesktop-Mockup.png";
        userFlow = "/assets/General User Flow 1.png";
        desc1 = "The initial application design refers to the google maps application design where when opening the application, displays a map that shows the user's current location along with the closest BTS location points from the user's point. plus a layer button to select the map layer.";
        desc2 = "As the requirements and features developed, the desired application display changes to adjust the features so that the display is made more concise with only the search form, BTS classification filter, settings button and map layer button.";
    }else if (projects === 'DNS Monitoring'){
        imageProject = "/assets/dns-mockup.png";
        userFlow = "/assets/General User Flow 1.png";
        desc1 = "In this project, we will implement application on Nawala's server that has been installed with Bro IDS sensors to capture network traffic data that has been tapped or mirrored from Nawala's Resolver with IP access xxx.xxx.xxx.245";
        desc2 = "Front-end UI built using Kibana for Log visualization on JavaScript-based Bro-IDS. Interaction data with Elasticsearch as the log data store.";
    }else if (projects === 'My Doctor'){
        imageProject = "/assets/my-doctor-mockup-full.png";
        userFlow = "/assets/my-doctor-complex.png";
        desc1 = "Based on the research that I have done before, I made a design where when the user opens the application after logging in, it will immediately display a list of doctor categories, top rated doctors along with some of the latest health-related news.";
        desc2 = "And not only that, this application provides a message chat feature with doctors and saves chat history from each doctor to make it easier for users when they want to consult or view information from past chats. And to complete the basic features, this application also provides hospital address information and edit user profile features.";
    
    }

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
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}>{desc1} </p>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}>{desc2} </p>
                    </Col>
                    <SRLWrapper options={options}>
                        <img
                        src={imageProject}
                        alt="Mockup"
                        className="project-image mockup mt-5" title="Mockup"
                        />
                    </SRLWrapper>
                </Row>

                {projects !== 'MAGIC Desktop' && projects !== 'DNS Monitoring' ? (
                    <Row className="mt-4" data-aos="zoom-in" data-aos-duration="2000">
                        <h5 className="subParagraph text-start mt-5">User Flow</h5>
                        <SRLWrapper options={options}>
                             <img
                                src={userFlow}
                                alt="Me"
                                className="image-flow mt-5" title="User Flow"
                            />
                        </SRLWrapper>
                    </Row>
                    ):null}
                
            </Container>
        </>
    )
}