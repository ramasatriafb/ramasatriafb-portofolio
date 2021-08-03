import React from 'react';
import '../App.css';
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Chance from '../components/Chance';
import Footer from '../components/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProjects from '../components/TopProjects';
import HowProjects from '../components/HowProjects';
import { Row, Col, Container } from 'react-bootstrap';
import MockupProject from '../components/MockupProject';
import FinalResult from '../components/FinalResult';
class MyDoctorProject extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pages: "Projects",
            title: "My Doctor"
        };
    }
    componentDidMount() {
        document.title = this.props.title
    }
    render(){
        AOS.init();
        AOS.refresh();
    return (
        <div className="App">
            <Header pages={this.state.pages}/>
            <TopProjects projects={this.state.title}/>
            <HowProjects projects={this.state.title}/>
            <Container className=" col mb-5">
                <Row >
                    <h5 className="subParagraph text-start">Features</h5>
                    <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}> With so many views and ideas for this My Doctor application, I present some basic features to support the needs of this doctor consultation application, which are as follows: </p>
                    <ol type="A" className="list">
                        <li className="text-start">User Login</li>
                        <li className="text-start">User Register</li>
                        <li className="text-start">Category Doctor</li>
                        <li className="text-start"> Top Rated Doctor</li>
                        <li className="text-start">Good News</li>
                        <li className="text-start">Real Time Chat</li>
                        <li className="text-start">History Messages</li>
                        <li className="text-start">Hospital Info Address</li>
                    </ol> 
                    </Col>
                </Row>

                <Row  className="mt-5">
                    <h5 className="subParagraph text-start">Role in the project</h5>
                    <Col xs={12} md={12}>
                        <p className="paragraph-project text-start" style={{marginTop: "37px"}}> I am  front end developer in this project, and I’m the main and only develop for this mobile app, so i do all the develop work for this app. From mockup, prototype, query , build API's, compiling  and i also involved in the user testing. </p>
                    </Col>
                </Row>

                <Row  className="mt-5">
                    <h5 className="subParagraph text-start">Process</h5>
                    <h5 className="subParagraph text-start">Research & Gathering Requirement</h5>
                    <Col xs={12} md={12}>
                        <p className="paragraph-project text-start" style={{marginTop: "37px"}}> In the process of developing this application, I researched several similar telemedicine application designs such as Halodoc and Alodokter from the application flow to the available features. From the results of this research, I designed the application in such a way with the features of the doctor category, chat and info.</p>
                    </Col>
                </Row>

            </Container>
            <MockupProject projects={this.state.title}/>
            {/* <Container>
            <Row  className="mt-5">
                <h5 className="subParagraph text-start">Problem Solving</h5>
                <h5 className="subParagraph text-start">Problem 1</h5>
                <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}>1. The unavailability of information about BTS when the sales division is on a realtime and accurate business trip.
                    <br/><br/>
                    <b>Solution: </b> Using the app, the sales division  can access information about BTS and network usage at BTS anytime, anywhere</p>
                </Col>
                <h5 className="subParagraph text-start mt-3">Problem 2</h5>
                <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}>2. It takes time for sales and network analysis to find out the location of BTS because you have to manually search for BTS locations.
                    <br/><br/>
                    <b>Solution: </b> With the realtime based location detection and find direction features, users can get directions to the BTS location without having to search manually through third-party applications.</p>
                </Col>
                <h5 className="subParagraph text-start mt-3">Problem 3</h5>
                <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}>3. Sales division cannot compare BTS data between BTS at a glance. They need to compare them manually by looking at the data one by one.
                    <br/><br/>
                    <b>Solution: </b> With the realtime based location detection and find direction features, users can get directions to the BTS location without having to search manually through third-party applications.</p>
                </Col>
                <h5 className="subParagraph text-start mt-3">Problem 4</h5>
                <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}>4. Network analyzers must manually analyze the data they get from BTS to determine the next steps / plans for market expansion.
                    <br/><br/>
                    <b>Solution: </b> With the chart feature on BTS information that displays revenue, payload and traffic data as well as BTS classification based on revenue levels on the map. The user can find out which BTS has a good profit or which loss in revenue. Coupled with the map layer feature, the heat map network usage will increase user insight about network usage in certain areas.</p>
                </Col>
                <h5 className="subParagraph text-start mt-3">Problem 5</h5>
                <Col xs={12} md={12} className="mb-5">
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}>5. Finding the way to the BTS location still has to use a third party application so that it is less effective and efficient.
                    <br/><br/>
                    <b>Solution: </b>The real time live location tracking and find direction features make it easier for users to find road routes to the desired BTS location with only 2 steps. with the live tracking feature can help users ensure that users are on the right track according to the suggested path in the application.</p>
                </Col>
            </Row>
            </Container> */}
            <FinalResult projects={this.state.title}/>
            <Chance pages={this.props.pages}/>
            <Footer/>
        </div>
    );    
    }
    
}

export default MyDoctorProject;
