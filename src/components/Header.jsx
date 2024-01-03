import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import $ from "jquery";

import culliton_channel_consulting_logo from './../images/Culliton_Channel_Consulting_Logo.png';
import ctaImg from './../images/CTA_Member_treatment.png';
export default class Header extends React.Component {
    componentDidUpdate() {
        $('.nav-toggle').toggleClass('active');
        $('.nav-items').slideToggle();
    }
    componentDidMount() {
        $('.nav-toggle').click(function () {
            $('.nav-toggle').toggleClass('active');
            $('.nav-items').slideToggle();
        });
    }
    render() {
        return (
            <div className="header">

                <Link to={"/"}>
                    <img id="logo" alt="Culliton Channel Consulting logo" src={culliton_channel_consulting_logo} />
                </Link>
                <div className="mobile-nav">
                    <div className="nav-toggle">
                        <i id="bars" className="fa fa-bars"></i>
                    </div>
                    <nav id="navItems" className="nav-items">
                        <NavLink to={"/"}>
                            Home
                        </NavLink>
                        <NavLink to={"/services"}>
                            Services
                        </NavLink>
                        <NavLink to={"/advisory-service"}>
                            Advisory Service
                        </NavLink>
                        <NavLink to={"/product-pricing"}>
                            Product&nbsp;&amp;&nbsp;Pricing
                        </NavLink>
                        <NavLink to={"/channel-account-strategy"}>
                            Channel&nbsp;&amp;&nbsp;Account Strategy
                        </NavLink>
                        <NavLink to={"/logistics"}>
                            Logistics
                        </NavLink>
                        <NavLink to={"/contract-negotiations"}>
                            Contract Negotiations
                        </NavLink>
                        <NavLink to={"/sales"}>
                            Sales
                        </NavLink>
                        <NavLink to={"/channel-marketing"}>
                            Channel Marketing
                        </NavLink>
                        <NavLink to={"clients"}>
                            Clients
                        </NavLink>
                        <NavLink to={"testimonials"}>
                            Testimonials
                        </NavLink>
                        <NavLink to={"about-us"}>
                            About Us
                        </NavLink>
                    </nav>
                </div>

                <div className="desktop-nav">
                    <NavLink to={"/"}>
                        <p>Home</p>
                    </NavLink>

                    <div className="dropdown">
                        <NavLink to={"/services"}>
                            <p>Services &#9660;</p>
                        </NavLink>
                        <div className="dropdown-content">
                            <NavLink to={"/advisory-service"}>
                                Advisory Service
                            </NavLink>
                            <NavLink to={"/product-pricing"}>
                                Product&nbsp;&amp;&nbsp;Pricing
                            </NavLink>
                            <NavLink to={"/channel-account-strategy"}>
                                Channel&nbsp;&amp;&nbsp;Account Strategy
                            </NavLink>
                            <NavLink to={"/logistics"}>
                                Logistics
                            </NavLink>
                            <NavLink to={"/contract-negotiations"}>
                                Contract Negotiations
                            </NavLink>
                            <NavLink to={"/sales"}>
                                Sales
                            </NavLink>
                            <NavLink to={"/channel-marketing"}>
                                Channel Marketing
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to={"clients"}>
                        <p>Clients</p>
                    </NavLink>
                    <NavLink to={"testimonials"}>
                        <p>Testimonials</p>
                    </NavLink>
                    <NavLink to={"about-us"}>
                        <p>About Us</p>
                    </NavLink>
                    <div id="cta-container">
                        <img id="cta-image" alt="Consumer Technology Association Member" src={ctaImg} />
                    </div>
                </div>
            </div>
        );
    }
}