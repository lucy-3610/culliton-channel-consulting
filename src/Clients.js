import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import iDeal from './images/Client Logos/iDeal-logo.jpg';
import hyper from './images/Client Logos/hyper-logo.jpg';
import chipolo from './images/Client Logos/chipolo-logo.png';
import trax from './images/Client Logos/trax-play-logo.png';
import brewie from './images/Client Logos/brewie-logo.png';
import invidyo from './images/Client Logos/invidyo-logo.png';
import excitrus from './images/Client Logos/excitrus-logo.png';
import PK_paris from './images/Client Logos/PK_paris-logo.jpg';
import knomo from './images/Client Logos/KNOMO-logo.png';
import oaxis from './images/Client Logos/oaxis-logo.png';
import myFirst from './images/Client Logos/MyFirst-Logo.jpg';
import xmi from './images/Client Logos/XMI-logo.jpg';
import juuk from './images/Client Logos/JUUK-logo.png';
import mobyfox from './images/Client Logos/mobyfox_icon_main.png';
import bazzlebaby from './images/Client Logos/bazzlebaby-logo.png';
import moshi from './images/Client Logos/moshi-logo.svg';
import equa from './images/Client Logos/equa-logo.png';
import goat_story from './images/Client Logos/goat-story-logo.png';
import zencase from './images/Client Logos/ZenCase_logo.png';
import RentnConnect from './images/Client Logos/RentnConnect-Logo.jpg';
import laxon from './images/Client Logos/laxon-logo.PNG';
import drwell from './images/Client Logos/dr-well-logo.png';
import tack from './images/Client Logos/Tack-One-Logo.png';
import infinityPro from './images/Client Logos/InfinityPro-New-Logo.png'
import Footer from './components/Footer';
import Header from './components/Header';


export default class Clients extends React.Component {
    render() {
        window.scrollTo(0, 0)
        return (
            <div className="clients">
                <Header />
                <div className="flex-wrapper">
                    <div>
                        <div id="client-header">
                            <h1 className="centered-style">We are honored to work with or to have worked with these terrific Brands</h1>
                        </div>
                        <div className="client-logos container">
                            <div className="row" style={{ paddingBottom: "3%" }}>
                                <div className="md-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="iDeal of Sweden Logo" src={iDeal} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2 px-sm-0">
                                    <img alt="Hyper Logo" src={hyper} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Compass Partners International Logo" src={chipolo} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Wonder Technology Solution Logo" src={trax} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Brewie Logo" src={brewie} />
                                </div>
                                <div className="col-lg-12 d-none d-lg-block"></div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="invidyo Logo" src={invidyo} />
                                </div>

                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2 px-sm-0">
                                    <img alt="Excitrus Logo" src={excitrus} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img style={{ width: "60%" }} alt="PK Paris Logo" src={PK_paris} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="KNOMO Logo" src={knomo} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="New Vision Display Logo"
                                        src="https://newvisiondisplay.com/wp-content/uploads/2016/09/NVD-eye-logo_drop-shadow.jpg" />
                                </div>
                                <div className="col-lg-12 d-none d-lg-block"></div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Rocki Logo"
                                        src="https://i.pinimg.com/originals/17/f4/1f/17f41f5fd46bf17d72ad2048b0dd45aa.jpg" />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Oaxis Logo" src={oaxis} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="My First Logo"
                                        src={myFirst} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Zmodo Logo" src="data:image/png;base64,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" />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="XMI Logo" src={xmi} />
                                </div>
                                <div className="col-lg-12 d-none d-lg-block"></div>
                                <div className="md-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="JUUK Logo" src={juuk} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Mobyfox Logo" src={mobyfox} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2 px-sm-0">
                                    <img alt="Bazzlebaby Logo" src={bazzlebaby} />
                                </div>
                                <div className="md-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Moshi Logo" src={moshi} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Equa Logo" src={equa} />
                                </div>
                                <div className="col-lg-12 d-none d-lg-block"></div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Goat Story Logo" src={goat_story} />
                                </div>
                                <div className="md-img col-xs-9 col-sm-12 col-md-3 col-lg-3">
                                    <img alt="ZenCase Logo" src={zencase} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-3">
                                    <img alt="Rent`nConnect Logo" src={RentnConnect} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Laxon Logo" src={laxon} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Dr. Well Logo" src={drwell} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Tack GPS Logo"
                                        src={tack} />
                                </div>
                                <div className="col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="InfinityPro Logo"
                                        src={infinityPro} />
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