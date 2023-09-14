import React from 'react';

import aboutUsMobile from './images/Mobile-Images/mobile-map.jpg';
import aboutUs1500 from './images/About-Us/blue-map_1500.jpg';
import aboutUs2600 from './images/About-Us/blue-map_2600.jpg';
import bob from './images/About-Us/Bob_Culliton.jpg';
import david from './images/About-Us/David_Nalley.jpg';
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
                            <div style={{ overflow: "hidden" }}>
                                <div className="container">
                                    <div className="row mb-5">
                                        <div className="col">
                                            <p>
                                                Our practice is based in Ponte Vedra Beach, Florida. Through extended hours of operation, we maximize the business day with our European and Asian clients and US Customers. Our expertise and knowledge, coupled with vast network and lean organization enables us to deliver terrific value to our clients.
                                                <br /><br />
                                                Our team of industry executives affords clients over 75 years of combined experience bringing technology products to retail and commercial reseller markets, accelerating revenue and profit and managing businesses. Our backgrounds are from some of the biggest to some of the smallest brands, highlighted by Microsoft, Technology Distributors Ingram Micro and SYNNEX, Take Two Entertainment, Epson America, NCR Corp and Convergys.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row flex-column-reverse flex-lg-row align-items-start mb-5">
                                        <div className="col-lg-8 col-xl-9">
                                            <h4>Bob Culliton, Managing Director</h4>
                                            <h5>Bob brings more than 30 years of technology channel experience to clients</h5>
                                            <p className="bio">
                                                Bob has served as National Sales &amp; Channel Marketing Manager at Microsoft, Vice President at the technology
                                                distributor SYNNEX, Sales Manager at Zenith Data Systems, lead his own tech startup, Intuitive Software and has been
                                                running Culliton Channel Consulting since early 2015. A Masters in Technology Management from Pepperdine
                                                University and a Marketing undergraduate degree further enhances his ability to provide valuable insights to
                                                tech companies from product concept to market adoption using creative business models and approaches. For
                                                addition background on Bob please visit his LinkedIn page at:&nbsp;
                                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bobculliton">https://www.linkedin.com/in/bobculliton</a>
                                            </p>
                                        </div>
                                        <div class="col-lg-4 col-xl-3">
                                            <img className="mb-3 mb-lg-0" alt="Bob Culliton" src={bob} />
                                        </div>
                                    </div>
                                    <div className="row align-items-start mb-5">
                                        <div class="col-lg-4 col-xl-3">
                                            <img className="mb-3 mb-lg-0" alt="David Nalley" src={david} />
                                        </div>
                                        <div className="col-lg-8 col-xl-9">
                                            <h4>David Nalley, Executive Consultant</h4>
                                            <h5>David brings more than 35 years of IT and CE channel experience to <br class="d-none d-md-block d-lg-none" />our clients</h5>
                                            <p className="bio">
                                                Through our partnership with Channel Direct Group, David brings our clients unparalleled insights to set the right channel and logistics strategies and the experience and relationships to execute them.  His personal channel journey includes an 18-year career at Ingram Micro, one of the world’s largest information technology and consumer electronics distributor, where he led North American retail and internet reseller sales and managed some of the world’s largest resellers in these categories.  Additionally, David led Ingram Micro’s enterprise computing sales effort with value added resellers, corporate resellers, direct solution providers and global resellers. Prior to that he honed his business skills as vice president of worldwide sales for Baker and Taylor Software and held management positions with Epson America and NCR Corporation. For additional background on David, please visit his LinkedIn page at:&nbsp;<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/david-nalley-65176b7">https://www.linkedin.com/in/david-nalley-65176b7</a>
                                            </p>
                                        </div>
                                    </div>
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