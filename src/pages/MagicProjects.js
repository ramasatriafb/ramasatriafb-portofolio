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
class MagicProjects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pages: "Projects",
            title: "MAGIC APP"
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
                        <h5 className="subParagraph text-start">The Problem</h5>
                        <Col xs={12} md={12}>
                        <p className="paragraph-project text-start" style={{marginTop: "37px"}}> Similar applications previously existed with web-based and could only be accessed by the intranet network, which became less mobile with the needs of sales and network analysis when outside the office or on a business trip. so that this application is made fresher with mobile and web which can be accessed anywhere and anytime. There are some problems with this method: </p>
                        <ol className="list">
                            <li className="text-start">The unavailability of information about BTS when the sales division is on a realtime and accurate business trip.</li>
                            <li className="text-start">It takes time for sales and network analysis to find out the location of BTS because you have to manually search for BTS locations.</li>
                            <li className="text-start">Sales division cannot compare BTS data between BTS at a glance. They need to compare them manually by looking at the data one by one.</li>
                            <li className="text-start"> Network analyzers must manually analyze the data they get from BTS to determine the next steps / plans for market expansion.</li>
                            <li className="text-start">Finding the way to the BTS location still has to use a third party application so that it is less effective and efficient</li>
                        </ol> 
                        </Col>
                    </Row>

                    <Row  className="mt-5">
                        <h5 className="subParagraph text-start">Role & The User Audience</h5>
                        <Col xs={12} md={12}>
                            <p className="paragraph-project text-start" style={{marginTop: "37px"}}> I am  front end developer in this team, and I’m the main and only develop for this mobile app, so i do all the develop work for this app. From mockup, prototype, query , build API's, compiling  and i also involved in the user testing. </p>
                            <p className="paragraph-project text-start" style={{marginTop: "37px"}}> The MAGIC application is intended for regional sales divisions and business network analysis that can be used by mobile </p>
                        </Col>
                    </Row>

                    <Row  className="mt-5">
                        <h5 className="subParagraph text-start">Process</h5>
                        <h5 className="subParagraph text-start">Research & Gathering Requirement</h5>
                        <Col xs={12} md={12}>
                            <p className="paragraph-project text-start" style={{marginTop: "37px"}}> Actually what I did was just interviewing and collaborating for data provision and application flow with a network performance staff manager as a communication bridge with the sales manager and network analysis manager for the application development process. Application development is done in an agile manner where application development is made feature per feature which is then tested directly and demonstrated to users and sales and network managers to confirm whether the features are in accordance with what is needed.</p>
                        </Col>
                    </Row>

            </Container>
            <MockupProject projects={this.state.title}/>
            <Container>
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
            </Container>
            <FinalResult projects={this.state.title}/>
            <Chance pages={this.props.pages}/>
            <Footer/>
        </div>
    );    
    }
    
}

export default MagicProjects;
