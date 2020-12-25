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
                    <h1 className="centered centered-style">Specializing in taking early-stage consumer tech companies to the US and Canadian Markets</h1>
                </div>
                <div id="home-header" className="centered">

                </div>

                <div className="body">
                    <p className="text">
                        Reaching customers with your brand or products is getting more difficult every day. The channels, or pathways are
                        becoming more challenging, more costly, or are closing altogether. Thankfully, new opportunities are opening.
                        <br /><br />
                        Culliton Channel Consulting is expert in finding the best path for your brand and products to reach customers in the
                        US and Canada. Since our firm opened in early 2015, we have applied our vast experience of preparing and launching
                        new brands and products, leveraging our broad channel customer relationships and a robust services network to
                        maximize the potential for our client's. Our team assists clients prepare for market entrance through careful
                        analysis and strategy, and then helps them become channel or retail ready. We work with our clients to set up and
                        manage logistics, run sales and create and execute channel marketing. For some clients we run their US operations.
                    </p>
                    <div id="service-info">
                        <div className="plan">
                            <h1>Plan&nbsp;&amp;&nbsp;Execute</h1>
                            <h2 id="desktop-plan">That's what we do for our clients!</h2>
                            <h2 id="mobile-plan">That's what we do<br />for our clients!</h2>

                            <div id="plan-execute" className="not-visible" onScroll="Animation">
                                <div className="service-block">
                                    <img alt="checklist" src={planImg} />
                                    <div className="info">
                                        <h1>Plan</h1>
                                        <ul>
                                            <li><h5>Market Assessment</h5></li>
                                            <li><h5>Product and Pricing Analysis and Guidance</h5></li>
                                            <li><h5>Channel Strategy Assessment and Formulation</h5></li>
                                        </ul>

                                    </div>
                                </div>

                                <div className="service-block">
                                    <img alt="upward trending graph" src={executeImg} />
                                    <div className="info">
                                        <h1>Execution</h1>
                                        <ul>
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
                <Footer />
            </div>
        );
    }
}