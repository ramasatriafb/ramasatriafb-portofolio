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
class MagicDekstop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pages: "Projects",
            title: "MAGIC Desktop"
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
                        <p className="paragraph-project text-start" style={{marginTop: "37px"}}>In the MAGIC mobile application, the data presented as well as the user interface arrangement are intended for non-expert users where the data and appearance of the application are made for the public so that expert users lack depth for analysis. and also for the needs of office users who need globally accessible applications where the web platform is chosen to be built into MAGIC Desktop.</p>
                        <p className="paragraph-project text-start">The main problems to be innovation:</p>
                        <ol className="list">
                            <li className="text-start">Availability of filter data for more specific site points with criteria tailored to business needs</li>
                            <li className="text-start">Limited tools to display site points that are wider and free according to the selected region, branch and city</li>
                        </ol> 
                        </Col>
                    </Row>

                    <Row  className="mt-5">
                        <h5 className="subParagraph text-start">Role & The User Audience</h5>
                        <Col xs={12} md={12}>
                            <p className="paragraph-project text-start" style={{marginTop: "37px"}}> I am  front end developer in this team, and I’m the main and only develop for this web app, so i do all the develop work for this app. From mockup, prototype, query , build API's, compiling  and i also involved in the user testing. </p>
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
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}>1. Availability of filter data for more specific site points with criteria tailored to business needs.
                    <br/><br/>
                    <b>Solution: </b> With the addition of advanced menu filter options, namely show outlets, site colored by Profitability, Red Site Status, Revenue and Payload as well as technology filters available at each site (BTS) such as 2G (DCS, GSM), 3G (U900, U2100,), 4G (L900, L1800, L2100, L2300).</p>

                    <img
                                src="assets/tech-site-menu.gif" className="image-problem mt-2"
                                alt="Solution 1" title="Solution 1"
                            />
                </Col>
                <h5 className="subParagraph text-start mt-3">Problem 2</h5>
                <Col xs={12} md={12}>
                    <p className="paragraph-project text-start" style={{marginTop: "37px"}}>2. Limited tools to display site points that are wider and free according to the selected region, branch and city.
                    <br/><br/>
                    <b>Solution: </b>With the addition of a tree menu filter option for region, branch and city, users can choose which sites (BTS) will be displayed on the map based on a sequential and orderly hierarchy according to the site grouping.</p>

                    <img
                                src="assets/site-branch-menu.PNG"
                                alt="Solution 2"
                                className="image-problem mt-2" title="Solution 2"
                            />
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

export default MagicDekstop;
