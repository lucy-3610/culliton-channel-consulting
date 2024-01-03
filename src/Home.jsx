import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import home2600 from './images/Home-Page/Times-Square_2600.jpg';
import mobileHome from './images/Mobile-Images/mobile-home.png';
import home1500 from './images/Home-Page/Times-Square_1500.jpg';
import planImg from './images/Home-Page/culliton-icons-plan.png';
import executeImg from './images/Home-Page/culliton-icons-execute.png';

export default class Home extends React.Component {
    render() {
        window.scrollTo(0, 0)
        return (
            <div className="home">
                <Header />
                <div id="home" className="header-image">
                    <img alt="Culliton Channel Consulting Home" src={home2600} srcSet={`${mobileHome} 500w, ${home1500} 1500w, ${home2600} 2600w`} />
                    <div className="overlay"></div>
                    <h1 className="centered centered-style">Specializing in taking early-stage consumer tech companies to the US and Canadian Markets</h1>
                </div>

                <div className="body pt-2 pb-0 p-sm-5">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-5">
                                <h5>
                                    Reaching customers with your brand or products is getting more difficult every day. The channels, or pathways are
                                    becoming more challenging, more costly, or are closing altogether. Thankfully, new opportunities are opening.
                                    <br className='d-block d-lg-none'></br>
                                    <br className='d-block d-lg-none'></br>
                                </h5>
                            </div>
                            <div className="col-lg-7">
                                Culliton Channel Consulting is expert in finding the best path for your brand and products to reach customers in the
                                US and Canada. Since our firm opened in early 2015, we have applied our vast experience of preparing and launching
                                new brands and products, leveraging our broad channel customer relationships and a robust services network to
                                maximize the potential for our client's.
                                <br></br>
                                <br></br>
                                Our team assists clients prepare for market entrance through careful
                                analysis and strategy, and then helps them become channel or retail ready. We work with our clients to set up and
                                manage logistics, run sales and create and execute channel marketing. For some clients we run their US operations.
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5 my-sm-5">
                        <div className="row">
                            <div className="col-12 text-center mb-4">
                                <h2>The Process we use for our Clients</h2>
                            </div>
                            <div className="col-lg-9 color-white bg-signature py-4 p-sm-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className='text-uppercase text-center fw-800'>We Plan</h3>
                                        </div>
                                    </div>
                                    <div className="row align-items-start">
                                        <div className="col-lg-4">
                                            <img className="d-flex justify-content-center w-100" alt="Checklist" src={planImg} />
                                        </div>
                                        <div className="col-lg-8">
                                            <ul className='d-block text-center text-lg-left mt-lg-5 p-0'>
                                                <li><h5>Market Assessment</h5></li>
                                                <li><h5>Product and Pricing Analysis and Guidance</h5></li>
                                                <li><h5>Channel Strategy Assessment and Formulation</h5></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 offset-lg-3 color-white bg-dark-gray p-4 p-sm-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className='text-uppercase text-center fw-800'>And We Execute</h3>
                                        </div>
                                    </div>
                                    <div className="row align-items-start">
                                        <div className="col-lg-4">
                                            <img className="d-flex justify-content-center w-100" alt="Upward trending graph" src={executeImg} />
                                        </div>
                                        <div className="col-lg-8">
                                            <ul className='d-block text-center text-lg-left mt-lg-5 p-0'>
                                                <li><h5>Logistics Optimization and Setup</h5></li>
                                                <li><h5>Channel Negotiations and Contract Execution</h5></li>
                                                <li><h5>Sales and Account Management</h5></li>
                                                <li><h5>Channel Marketing and Merchandising</h5></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}