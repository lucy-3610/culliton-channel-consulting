import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import excitrus from './images/Client Logos/excitrus-logo.png';
import invidyo from './images/Client Logos/invidyo-logo.png';
import iDeal from './images/Client Logos/iDeal-logo.jpg';
import brewie from './images/Client Logos/brewie-logo.png';
import trax from './images/Client Logos/trax-play-logo.png';
import chipolo from './images/Client Logos/chipolo-logo.png';
import dh from './images/Client Logos/d_h-logo.jpg';
import meta from './images/Client Logos/meta-logo.png';
import Header from './components/Header';
import Footer from './components/Footer';

export default class Testimonials extends React.Component {
    render() {
        window.scrollTo(0, 0)
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        dots: false
                    }
                }
            ]
        };
        return (
            <div className="testimonials">
                <Header />
                <div id="testimonial-header">
                    <h1 className="centered-style">What People are Saying…</h1>
                </div>
                <div className="testimonial-content py-sm-5">
                    <div className="container">
                        <div className="row">
                            <Slider {...settings}>
                                <div>
                                    <img className="client-logo" alt="Excitrus Logo" src={excitrus} />
                                    <p>
                                        Bob and Culliton Channel Consulting has been a terrific partner as we entered the North American market with the EXCITRUS brand. Not only have they have laid out and executed a terrific channel sales strategy, but have been our extended team with just about everything. They have provided market and pricing assessments and guidance for new products, helped us setup logistics and distribution, provided guidance on packaging, our product website, marketing and sales collateral, helped us reach media and influencers and have even supported our crowdfunding efforts. Bob and his team are responsive, detailed and extremely knowledgeable. I would highly recommend Culliton Channel Consulting for any brand looking to enter the US or Canada, especially when you need a full service, cost effective partner.
                                        <br /><br />
                                        Ray Kang &#8211; Director, Excitrus
                                    </p>
                                </div>
                                <div>
                                    <img className="client-logo" alt="invidyo Logo" src={invidyo} />
                                    <p>
                                        We have been working with Bob and Culliton Channel Consulting since early 2018. Bob has taken a real interest
                                        in our company and our product. He assisted us to finalize our product packaging and key messaging, setup our
                                        logistics and built our sales in the US and Canada. I have really enjoyed working with Bob and are very happy
                                        with the results we have achieved under his guidance and hard work.
                                        <br /><br />
                                        Ozgur Deniz Onur &#8211; CEO, invidyo
                                    </p>
                                </div>
                                <div>
                                    <img className="client-logo" alt="iDeal of Sweden Logo" src={iDeal} />
                                    <p>
                                        I have had the opportunity to work with Bob for a while and it has been a true pleasure. Bob is very driven,
                                        and produces results quickly and independently as a consultant. His extensive experience and knowledge of the
                                        US market is clear. Now that he is leading our market expansion in the US, Bob has impressed me and shown
                                        great commitment to our business.
                                        <br /><br />
                                        Joachim Lindstrom &#8211; CEO, iDeal of Sweden
                                    </p>
                                </div>
                                <div>
                                    <img className="client-logo" alt="Brewie Logo" src={brewie} />
                                    <p>
                                        I worked with Bob and his company for a year and a half when I was head of global sales at Brewie. Bob and
                                        his team setup our logistics and service centers in the US, jumped in to assist when we had in-market product
                                        issues, helped us with supply decisions, and then more importantly effectively launched Brewie and our
                                        accessories into the US homebrewing market. Bob sought out the ideal distributor partner, then contracted and
                                        established a close working relationship. He then engaged the top homebrew retail outlets across the country
                                        directly and through events. Bob's retail and distribution knowledge is unmatched, and his ability to aid his
                                        clients in key business decisions, set up and launch the US market provides his clients with the best
                                        opportunity for success. I would highly recommend Culliton Channel Consulting for early-stage companies
                                        looking to enter the US market.
                                        <br /><br />
                                        Csaba Bardossy &#8211; Global Sales Manager, Brewie
                                    </p>
                                </div>
                                <div>
                                    <img id="trax" className="client-logo" alt="Wonder Technology Solution Logo" src={trax} />
                                    <p>
                                        I worked with Bob to address the US market and with his vast experience within Sales and distribution we
                                        quickly came to a path that was accessible for Trax. Bob’s many connections and insight into the market
                                        simplified our way and saved us both time and money. It is a true pleasure to work with a professional and I
                                        have great learnings that I hold in high regard for my future. I highly recommend Bob and If I had a chance I
                                        would love to work with Bob again in the future!
                                        <br /><br />
                                        Mikael Karlsson &#8211; Cofounder &amp; Global Business Development Manager, Wonder Technology Solution
                                    </p>
                                </div>
                                <div>
                                    <img id="dh-logo" className="client-logo" alt="D&amp;H Logo" src={dh} />
                                    <p>
                                        I have been working with Bob for over a year now and his knowledge of the industry and work ethic are among
                                        the best I have seen. He is tireless in launching new vendors and maximizing their potential. He is
                                        professional and courteous in all of his dealings while maintaining a personal touch.
                                        <br /><br />
                                        Cory Karns &#8211; Business Development Manager, D&amp;H Distribution
                                    </p>
                                </div>
                                <div>
                                    <img className="client-logo" alt="Compass Partners International Logo" src={chipolo} />
                                    <p>
                                        Bob Culliton and Julie Coughlin have been an integral part of the Compass team, serving as a consultant for
                                        one of our brands within the consumer electronics channel. Bob’s extensive experience and thorough sales
                                        process has resulted in significant sales growth for our company, including help with navigating the tech
                                        channel. It has been a true pleasure working with Bob, and I would recommend his work to anybody within my
                                        network.
                                        <br /><br />
                                        John Rabold &#8211; General Manager, Compass Partners International
                                    </p>
                                </div>
                                <div>
                                    <img className="client-logo" alt="MetaWatch Logo" src={meta} />
                                    <p>
                                        They say building hardware is hard. But even after the hours and efforts to get the product right, you still
                                        need to sell it. That is where Bob comes in. Bob has been a wonderful resource with deep understanding and
                                        insight of the consumer electronics channel. Where were we right? Where were we wrong? Where could the
                                        offering best fit the rapidly changing world of retail? Working together, I've learned what it takes to build,
                                        support, and grow the channel (and even alternative strategies to consider).
                                        <br /><br />
                                        Andy Tarczon &#8211; VP, MetaWatch
                                    </p>
                                </div>
                                <div>
                                    <img className="client-logo" alt="New Vision Display Logo"
                                        src="https://newvisiondisplay.com/wp-content/uploads/2016/09/NVD-eye-logo_drop-shadow.jpg" />
                                    <p>
                                        Bob and I met while working together at Microsoft, and Bob/Culliton Channel Consulting was the first
                                        person/company I thought of to ask for help when we had the opportunity and mandate to grow a mobile phone
                                        accessory business in North America. Bob's ability to pick up and run, coupled with his product, channel and
                                        operations knowledge and business development skills are exceptional. Bob is foremost in helping branded
                                        product companies develop and realize their market ambition and potential.
                                        <br /><br />
                                        Jeff Hoffman &#8211; Sales Director, NVD
                                    </p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}