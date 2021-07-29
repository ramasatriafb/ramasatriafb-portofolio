
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
        title = "How the MAGIC Dekstop Work";
        imageProject = "/assets/MagicDekstop-Main.png";
        desc1 = "Before I explain the MAGIC Desktop application in detail, I will give an overview of the mobile version of the MAGIC application which has the aim of helping the sales and network analysis division to find out the development of network access in each coverage area based on network usage data in BTS so that they will get an overview of the steps to take. next step of business strategy for market expansion. By utilizing big data to accommodate strategic data about the network, several APIs were created that provide data to be displayed in the application.";
        desc2 = "MAGIC Desktop was created to meet the needs of expert users who want to display detailed and comprehensive geospatial data. How to use the application? When the user opens the application, the user will be asked to login first with the authentication process on the telegram account that has been registered with the internal telegram bot. Then the user will receive an OTP code from the bot account for the next login process. After the user logs in, the user will be shown map layer image data, some basic map tools and a tree menu for branching region, branch and city data to select the site to be displayed whether by region, branch or city.";
    }else if (projects === 'DNS Monitoring'){
        title = "System Development Methodology";
        imageProject = "/assets/System Development Methodology.png";
        desc1 = "In this system, the traffic from tapping from the first Newsletter will be processed and stored in Bro-IDS in the form of log files.";
        desc2 = "In this Figure , Bro-IDS can be visualized on Kibana so it can be an informative dashboard. The log data that parsed on Logstash namely Conn log, DNS Log and Intel.log. These data are saved and converted into template files Elasticsearch so that it can make it easier to query data. The result of the data stored in Elastic is in the form of JSON";
    }else if (projects === 'My Doctor'){
        title = "My Doctor : General System";
        imageProject = "/assets/my-doctor-general.png";
        desc1 = "Before getting into the case study, I think it is better to explain a little about the device itself. This My Doctor application utilizes firebase technology to serve authentication and realtime database replacement for backend functions. So for user login data and doctor data are stored in the realtime database feature. This realtime database is also useful for storing chat data between patients and doctors.";
        desc2 = "How to use the application? When the user opens the application, the user as a patient when opening the application will be offered to login or sign up. If the user does not have an account, the user will be invited to register first. The user will fill in some data such as name, email, password along with a profile picture for the application avatar. after completion the user will be directed to the home my doctor application and can access the features in the My Doctor application.";
    
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