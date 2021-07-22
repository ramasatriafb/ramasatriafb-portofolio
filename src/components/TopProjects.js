
import { Row, Col, Container } from 'react-bootstrap';
export default function TopProjects() {
    return (
        <>
            <Container className=" colTopProjectst mb-5">
               <Row data-aos="fade-up" data-aos-duration="2000">
               <h2 className="headerProject text-start mt-5">MAGIC: Mobile Analytics Geospatial Intelligence</h2>
             
                <img
                    src="/assets/magic-app.png"
                    alt="Me"
                    className="project-image" title="MAGIC APP"
                    />
             
                    <Col xs={12} md={12}>
                    <h5 className="subHeaderProject text-start mt-5">Client  :  PT. Telkomsel </h5>
                    <h5 className="subHeaderProject text-start">Year     :  2020 </h5>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}> <b>MAGIC (Mobile Analytics Geospatial Intelligence)</b> is a mobile application that provides geospatial-based information about network usage data on each BTS (Base Transceiver Station) owned by PT Telkomsel in the Central Java, East Java and Bali Nusa Tenggara areas. MAGIC app has the mainstay features of realtime gps live tracking and realtime network detection. This application is intended for the sales and network analysis division to get an overview and information on the development of cellular market expansion based on network usage at each BTS point in the Central Java, East Java and Bali Nusa Tenggara area coverage areas. This application can be accessed via a mobile application and a web application, so that the sales and network analysis division staff can carry and use the application when they are in certain areas.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}