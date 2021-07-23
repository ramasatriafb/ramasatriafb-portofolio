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
import { SRLWrapper } from "simple-react-lightbox";
class DNSMonitoring extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: "Projects",
            title: "DNS Monitoring"
        };
    }
    componentDidMount() {
        document.title = this.props.title
    }
    render() {

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
        AOS.init();
        AOS.refresh();
        return (
            <div className="App">
                <Header pages={this.state.pages} />
                <TopProjects projects={this.state.title} />
                <HowProjects projects={this.state.title} />
                <Container className=" col mb-5">
                    <Row >
                        <h5 className="subParagraph text-start">System Test</h5>
                        <Col xs={12} md={12}>
                            <p className="paragraph-project text-start" style={{ marginTop: "37px" }}> In this project, we will implement an application on Nawala's server that has Bro-IDS sensors installed to capture network traffic data that has been tapped or mirrored from Nawala's Resolver with IP access xxx.xxx.xxx.245.</p>
                            <p className="paragraph-project text-start " style={{ marginTop: "37px" }}> The test is carried out remotely on the Id-Sirtii server
                                during manufacture, installation and testing. Implementation time
                                trial for approximately 1 week to see and
                                analyze the performance of the application</p>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <h5 className="subParagraph text-start">Dashboard Features</h5>
                        <Col xs={12} md={12}>
                            <ol type="A">
                                <li className="text-start">Number of DNS Connectivity</li>
                                <li className="text-start">Number of DNS Connectivity</li>
                                <li className="text-start">Query Result</li>
                                <li className="text-start"> Response Result</li>
                                <li className="text-start">Query by Response Code</li>
                                <li className="text-start">Query by Record Type</li>
                                <li className="text-start">Top Queried Returning NXDOMAIN</li>
                                <li className="text-start">Top Queried DNS Records</li>
                                <li className="text-start"> Top 10 Responders</li>
                                <li className="text-start">Top 10 Originators</li>
                                <li className="text-start">IP Queried Malware</li>
                            </ol>
                        </Col>
                    </Row>

                </Container>

                <Container className=" col mb-5">
                    <Row className="mt-5">
                        <h5 className="subParagraph text-start">Role & The User Audience</h5>
                        <Col xs={12} md={12}>
                            <p className="paragraph-project text-start" style={{ marginTop: "37px" }}> I am  front end developer in this team, and in charge of designing the dashboard and integrating network log data for visualization with the dashboard, so i do all the develop work for this app. From mockup, prototype, query , build API's, compiling  and i also involved in the user testing. </p>
                            <p className="paragraph-project text-start" style={{ marginTop: "37px" }}> The users in this application are network security analysts from medium to expert to help analyze and collect domain data. </p>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <h5 className="subParagraph text-start">Process</h5>
                        <h5 className="subParagraph text-start">Research & Gathering Requirement</h5>
                        <Col xs={12} md={12}>
                            <p className="paragraph-project text-start" style={{ marginTop: "37px" }}> First, we need to know what the ELK Stack is and how it works.</p>
                            <SRLWrapper options={options}>
                                <img
                                    src="/assets/ELK-Stack.png"
                                    alt="ELK Stack"
                                    className="project-image mt-5" title="ELK Works"
                                />

                            </SRLWrapper>
                            <p className="paragraph-project text-start" style={{ marginTop: "37px" }}> ELK Stack is an acronym for Elasticsearch, Logstash,
                                Kibana Stack is an open source product that
                                support to provide insight that can
                                actionable in real time of almost any kind
                                structured and unstructured data sources</p>
                            <ul>
                                <li className="text-start">Elasticsearch is a search engine that
                                    full-text or document oriented
                                    accessed via Restful API and can return
                                    the document is indexed in JSON when
                                    queried. Logstash is an open source tool for
                                    collect, parse and store logs for
                                    future server usage.</li>
                                <li className="text-start">Kibana is a Plugin visualization data source sumber
                                    open to Elasticsearch. It provides
                                    visualization capabilities on top of indexed content in the Elasticsearch cluster.</li>
                            </ul>
                        </Col>
                        <h5 className="subParagraph text-start mt-5">System Design</h5>
                        <Col xs={12} md={12}>
                            <p className="paragraph-project text-start" style={{ marginTop: "37px" }}> In project that the author is working on, namely
                                regarding the implementation of applications that can see
                                traffic activity through the internet network based on
                                monitoring of the Domain Name System.</p>
                            <SRLWrapper options={options}>
                                <img
                                    src="/assets/Dashboard Design System.png"
                                    alt="System Design"
                                    className="project-image mt-5" title="System Design"
                                />

                            </SRLWrapper>

                            <p className="paragraph-project text-start" style={{ marginTop: "37px" }}> This system uses the principle of Passive DNS
                                Monitoring i.e. Bro will monitor DNS traffic
                                based on mirroring of proprietary DNS Resolver
                                Newsletters that have been available and from the results of mirroring
                                Bro-IDS will capture the
                                network traffic and generate log then from log
                                processed to be used as traffic analysis material
                                DNS. In addition, DNS traffic captured by censorship
                                Bro-IDS will be displayed in real time together
                                with the results of traffic analysis from the network
                                Figure 3 using Kibana as the visualization.</p>
                        </Col>
                    </Row>

                </Container>

                <MockupProject />
                <Container>
                    <Row className="mt-5 mb-5">
                        <h5 className="subParagraph text-start">Big Problem Solving</h5>
                        <h5 className="subParagraph text-start">Big Problem</h5>
                        <Col xs={12} md={12}>
                            <p className="paragraph-project text-start" style={{ marginTop: "37px" }}>Based on the facts, there have been large-scale attacks targeting Internet Cafes since 2000
                                because of the many activities of pornography, gambling, fraud, and online fraud that are reported through access services
                                Public Internet. Because of this, in 2008 the Nawala project was formed, which was initiated by the Warung Association
                                Internet Indonesia (AWARI) and ID-SIRTII (Indonesian Security Incident Response Team on Internet Infrastructure).</p>
                            <SRLWrapper options={options}>
                                <img
                                    src="/assets/nawala-resolver.png"
                                    alt="Me"
                                    className="project-image mt-5" title="Nawala Resolver"
                                />

                            </SRLWrapper>
                            <h5 className="subParagraph text-start mt-5">Main Goal</h5>
                            <p className="paragraph-project text-start" style={{ marginTop: "37px" }}>The main goal of this project is to prevent negative content (online pornography, gambling, scams, scams) proactive based on DNS filtering</p>
                            <h5 className="subParagraph text-start mt-5">Solution</h5>
                            <p className="paragraph-project text-start" style={{ marginTop: "37px" }}>With application prototype
                                DNS traffic monitoring system on Country-Code Top Level Domain (.id) to monitor DNS traffic in Indonesia
                                using Bro-IDS which can help Nawala to monitor DNS traffic activity on the internet network in Indonesia
                                Indonesia</p>
                        </Col>
                    </Row>
                </Container>
                <FinalResult projects={this.state.title} />
                <Chance pages={this.props.pages} />
                <Footer />
            </div>
        );
    }

}

export default DNSMonitoring;
