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
import xmi from './images/Client Logos/XMI-logo.jpg';
import juuk from './images/Client Logos/JUUK-logo.png';
import mobyfox from './images/Client Logos/mobyfox_icon_main.png';
import bazzlebaby from './images/Client Logos/bazzlebaby-logo.png';
import moshi from './images/Client Logos/moshi-logo.svg';
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
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="iDeal of Sweden Logo" src={iDeal} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Hyper Logo" src={hyper} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Compass Partners International Logo" src={chipolo} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Wonder Technology Solution Logo" src={trax} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Brewie Logo" src={brewie} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="invidyo Logo" src={invidyo} />
                                </div>

                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Excitrus Logo" src={excitrus} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img style={{ width: "60%" }} alt="PK Paris Logo" src={PK_paris} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="KNOMO Logo" src={knomo} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="New Vision Display Logo"
                                        src="https://newvisiondisplay.com/wp-content/uploads/2016/09/NVD-eye-logo_drop-shadow.jpg" />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Rocki Logo"
                                        src="https://i.pinimg.com/originals/17/f4/1f/17f41f5fd46bf17d72ad2048b0dd45aa.jpg" />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Oaxis Logo" src={oaxis} />
                                </div>

                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Zmodo Logo" src="https://brandfolder.com/zmodo/logo/zmodo-primary-logo.png" />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="XMI Logo" src={xmi} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="JUUK Logo" src={juuk} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Mobyfox Logo" src={mobyfox} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Bazzlebaby Logo" src={bazzlebaby} />
                                </div>
                                <div className="sm-img col-xs-9 col-sm-12 col-md-3 col-lg-2">
                                    <img alt="Moshi Logo" src={moshi} />
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