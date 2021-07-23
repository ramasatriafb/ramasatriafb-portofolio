
import { Row, Col, Container } from 'react-bootstrap';
import { SRLWrapper } from "simple-react-lightbox";
export default function HowProjects({projects}) {
    let title, imageProject, desc1, desc2;
    if(projects === 'MAGIC APP'){
        title = "How the MAGIC App Work";
        imageProject = "/assets/arsitektur-magic(1).png";
        desc1 = "Before getting into the case study, I think it is better to explain a little about the device itself. The aim of MAGIC is to help the sales and network analysis division to know the development of network access in each coverage area based on network usage data on BTS so that they will get an overview of the next business strategy steps for market expansion. By utilizing big data to accommodate strategic data about the network, several APIs were made that provide data that will be displayed in the application.";
        desc2 = "How to use the application? When the user opens the application, the user will be asked to log in first with the authentication process on the telegram account that has been registered on the internal telegram bot. Then the user will receive an OTP code from the bot account for the next login process. After the user logs in, it will automatically detect the location, what network is being used and the nearest BTS that is connected to the user's cellphone. Users can view network usage information from several nearby BTS. Users can take advantage of the find direction feature to go to a specific BTS location and live GPS tracking to ensure the user's location while moving.";
    }else if (projects === 'MAGIC Desktop'){
        title = "MAGIC Desktop: Desktop Analytics Geospatial Intelligence";
        imageProject = "/assets/magic-desktop.png";
        desc1 = "Before getting into the case study, I think it is better to explain a little about the device itself. The aim of MAGIC is to help the sales and network analysis division to know the development of network access in each coverage area based on network usage data on BTS so that they will get an overview of the next business strategy steps for market expansion. By utilizing big data to accommodate strategic data about the network, several APIs were made that provide data that will be displayed in the application.";
        desc2 = "How to use the application? When the user opens the application, the user will be asked to log in first with the authentication process on the telegram account that has been registered on the internal telegram bot. Then the user will receive an OTP code from the bot account for the next login process. After the user logs in, it will automatically detect the location, what network is being used and the nearest BTS that is connected to the user's cellphone. Users can view network usage information from several nearby BTS. Users can take advantage of the find direction feature to go to a specific BTS location and live GPS tracking to ensure the user's location while moving.";
    }else if (projects === 'DNS Monitoring'){
        title = "System Development Methodology";
        imageProject = "/assets/System Development Methodology.png";
        desc1 = "In this system, the traffic from tapping from the first Newsletter will be processed and stored in Bro-IDS in the form of log files.";
        desc2 = "In this Figure , Bro-IDS can be visualized on Kibana so it can be an informative dashboard. The log data that parsed on Logstash namely Conn log, DNS Log and Intel.log. These data are saved and converted into template files Elasticsearch so that it can make it easier to query data. The result of the data stored in Elastic is in the form of JSON";
    }else if (projects === 'My Doctor'){
        title = "Doctor App Consultation for Help Everyone and Everywhere";
        imageProject = "/assets/MYDOCTOR.png";
        desc1 = "Before getting into the case study, I think it is better to explain a little about the device itself. The aim of MAGIC is to help the sales and network analysis division to know the development of network access in each coverage area based on network usage data on BTS so that they will get an overview of the next business strategy steps for market expansion. By utilizing big data to accommodate strategic data about the network, several APIs were made that provide data that will be displayed in the application.";
        desc2 = "How to use the application? When the user opens the application, the user will be asked to log in first with the authentication process on the telegram account that has been registered on the internal telegram bot. Then the user will receive an OTP code from the bot account for the next login process. After the user logs in, it will automatically detect the location, what network is being used and the nearest BTS that is connected to the user's cellphone. Users can view network usage information from several nearby BTS. Users can take advantage of the find direction feature to go to a specific BTS location and live GPS tracking to ensure the user's location while moving.";
    
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
               <h5 className="subParagraph text-start">{title}</h5>
               <SRLWrapper options={options}>
                <img
                    src={imageProject}
                    alt="System"
                    className="project-image mt-5" title="General Architecture"
                    />
             
                </SRLWrapper>
                    <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}>{desc1} </p>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}> {desc2}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}