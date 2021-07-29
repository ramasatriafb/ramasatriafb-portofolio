
import { Row, Col, Container } from 'react-bootstrap';
import parse from 'html-react-parser';
export default function TopProjects({projects}) {
  let title, imageProject, client, year, desc;
    if(projects === 'MAGIC APP'){
        title = "MAGIC: Mobile Analytics Geospatial Intelligence";
        imageProject = "/assets/magic-app.png";
        client = "PT. Telkomsel";
        year = "2020";
        desc = "<b>MAGIC (Mobile Analytics Geospatial Intelligence) </b>is a mobile application that provides geospatial-based information about network usage data on each BTS (Base Transceiver Station) owned by PT Telkomsel in the Central Java, East Java and Bali Nusa Tenggara areas. MAGIC app has the mainstay features of realtime gps live tracking and realtime network detection. This application is intended for the sales and network analysis division to get an overview and information on the development of cellular market expansion based on network usage at each BTS point in the Central Java, East Java and Bali Nusa Tenggara area coverage areas. This application can be accessed via a mobile application and a web application, so that the sales and network analysis division staff can carry and use the application when they are in certain areas.";
    }else if (projects === 'MAGIC Desktop'){
        title = "MAGIC Desktop: Desktop Analytics Geospatial Intelligence";
        imageProject = "/assets/magic-desktop.png";
        client = "PT. Telkomsel";
        desc = "MAGIC Desktop is an extension of the MAGIC (Mobile Analytics Geospatial Intelligence) mobile application created in 2020, namely a mobile application that provides geospatial-based information about network usage data on each BTS (Base Transceiver Station) owned by PT Telkomsel in the Central Java, East Java and Bali Nusa Tenggara areas. Magic Desktop focuses on developing applications for the user expert side, namely user network and business analytics experts that run on a web desktop with a user interface and experience that is devoted to more complex and detailed analytical modes.";
        year = "2021";
    }else if (projects === 'DNS Monitoring'){
        title = "Design of DNS Traffic Monitoring System in Country-Code Top Level Domain (.id)";
        imageProject = "/assets/DNS-APP.png";
        client = "ID-SIRTII (Indonesia Security Incident Response Team on Internet Infrastucture) ";
        year = "2018";
        desc = "In the era of globalization and technology now there are various ways to get information. One of them can be obtained through the Domain Name System. The Domain Name System (DNS) is a complex distributed database that relies on multipleInternet service. Because monitoring is so important, researchers and internet service providers are constantly monitoring DNS traffic to identify anomalies, measure performance, and generate usage statistics. This  project offers a prototype DNS traffic monitoring system application to view DNS traffic in Indonesia using Bro-IDS which can help Newsletter to monitor DNS traffic activity on the internet network in Indonesia. Using Elastic Stack and Bro-IDS technology can make it easier to understand DNS traffic in Indonesia with visualization. The test results show that several ISPs (Internet Service Providers) in Indonesia are still querying a malware domain and domain in the Nawala blacklist consistently.";
    }else if (projects === 'My Doctor'){
        title = "My Doctor : Doctor App Consultation for Help Everyone and Everywhere";
        imageProject = "/assets/MYDOCTOR.png";
        client = "Self Improvement ";
        year = "2021";
        desc = "My Doctor application is my improvement project where this idea came about when the current situation is experiencing a global pandemic. where in fact health consultation becomes one of the main needs. This application provides chat-based consulting services with doctors, so users can choose a doctor based on their needs. Users can chat in real time with the doctor of their choice anytime, anywhere without being limited by place and time.<br/><br/>I built this application using React Native technology as the front end of the mobile framework and firebase as the authentication service and realtime database. By starting with designing the application flow and user interface mockup with Figma";
    }
    return (
        <>
            <Container className=" colTopProjectst mb-5">
               <Row data-aos="fade-up" data-aos-duration="2000">
               <h2 className="headerProject text-start mt-5">{title}</h2>
             
                <img
                    src={imageProject}
                    alt="Me"
                    className="project-image" title={projects}
                    />
             
                    <Col xs={12} md={12}>
                    <h5 className="subHeaderProject text-start mt-5">Client  :  {client} </h5>
                    <h5 className="subHeaderProject text-start">Year     :  {year} </h5>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}> {parse(desc)}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}