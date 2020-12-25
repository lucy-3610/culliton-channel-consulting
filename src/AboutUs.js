import React from 'react';

import aboutUsMobile from './images/Mobile-Images/mobile-map.jpg';
import aboutUs1500 from './images/About-Us/blue-map_1500.jpg';
import aboutUs2600 from './images/About-Us/blue-map_2600.jpg';
import bob from './images/About-Us/Bob_Culliton.jpg';
import julie from './images/About-Us/Julie_Coughlin.jpg';
import Header from './components/Header';
import Footer from './components/Footer';

export default class AboutUs extends React.Component {
    render() {
        window.scrollTo(0, 0)
        return (
            <div className="about-us">
                <Header />
                <div className="flex-wrapper">
                    <div id="about-us" className="header-image">
                        <img alt="Culliton Channel Consulting Map" src={aboutUs2600}
                            srcSet={`${aboutUsMobile} 500w, ${aboutUs1500} 1500w, ${aboutUs2600} 2600w`} />
                    </div>
                    <div id="about-us-body" className="body">
                        <div className="text">
                            <p>
                                Our practice is based in Ponte Vedra Beach, Florida. Through extended hours of operation, we maximize the business day with our European and Asian clients and US Customers. Our expertise and knowledge, coupled with vast network and lean organization enables us to deliver terrific value to our clients.
                            <br /><br />
                            Our team of industry executives affords clients over 75 years of combined experience bringing
                            technology products to retail and commercial reseller markets, accelerating revenue and profit and managing
                            businesses. Our backgrounds are from some of the biggest to some of the smallest brands, highlighted by
                            Microsoft, Technology Distributors Ingram Micro and SYNNEX, Take Two Entertainment, Epson America, NCR Corp
                            and Convergys.
                        </p>

                            <div style={{ overflow: "hidden" }}>
                                <div style={{ marginBottom: "5%" }}>
                                    <img id="bob" className="headshot" alt="Bob Culliton" src={bob} />
                                    <h4>Bob Culliton, Managing Director</h4>
                                    <h5>Bob brings more than 30 years of technology channel experience to clients</h5>
                                    <p className="bio">
                                        Bob has served as National Sales &amp; Channel Marketing Manager at Microsoft, Vice President at the technology
                                        distributor SYNNEX, Sales Manager at Zenith Data Systems, lead his own tech startup, Intuitive Software and
                                        running Culliton Channel Consulting since early 2015. A Masters in Technology Management from Pepperdine
                                        University and a Marketing undergraduate degree further enhances his ability to provide valuable insights to
                                        tech companies from product concept to market adoption using creative business models and approaches. For
                                        addition background on Bob please visit his LinkedIn page at:&nbsp;
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bobculliton">https://www.linkedin.com/in/bobculliton</a>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="julie-img"><img id="julie" className="headshot" alt="Julie Coughlin" src={julie} /></div>
                                <div>
                                    <h4>Julie Coughlin, Client Engagement Lead</h4>
                                    <h5>Among the Most Powerful Women in Consumer Technology</h5>
                                    <h6>Dealerscope November, 2016</h6>
                                    <p className="bio">
                                        Clients reap Julie’s high energy and broad knowledge and consulting experience working with retailers and alternate sales channels. Julie’s years of experience as a Sr. Director with the technology distributor, SYNNEX, where she oversaw Sales, Product Management and Operations, helps guide our clients effectively. Her financial background as a CPA and Director-level positions in Finance, Continuous Improvement, Performance Management and Capacity Planning at companies like Take Two Interactive and Convergys also benefit our clients to make smart operational decisions. Julie has an MBA with concentration in IT and Finance and a Bachelor of Science degree in Accounting from the University of Dayton. For additional background on Julie, please visit her LinkedIn page at:&nbsp;<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julie-coughlin-a29a522/">https://www.linkedin.com/in/julie-coughlin-a29a522/</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}