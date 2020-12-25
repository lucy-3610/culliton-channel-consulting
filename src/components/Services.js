import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default class Services extends React.Component {
    render() {
        console.log("New Render")
        window.scrollTo(0, 0)
        return (
            <div className="services">
                <Header />
                <div className="flex-wrapper">
                    <div>
                        <div id={this.props.id} className="header-image">
                            <img alt={this.props.alt}
                                src={this.props.img2600}
                                srcSet={`${this.props.mobileImg} 500w, ${this.props.img1500} 1500w, ${this.props.img2600} 2600w`} />
                            <h1 className="centered centered-style">{this.props.title}</h1>
                        </div>
                        <div className="body">
                            <p className="text">{this.props.info}</p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}