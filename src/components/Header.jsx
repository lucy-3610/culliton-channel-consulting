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
                    <NavLink to={"/services"}>
                        <p>Services</p>
                    </NavLink>
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