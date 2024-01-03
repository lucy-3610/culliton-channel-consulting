import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer text-center text-lg-left py-4 py-sm-5">
                <p className='mb-0'><strong>Culliton Channel Consulting</strong><br />
                    <a href="mailto: Info@cullitonchannelconsulting.com">Info@cullitonchannelconsulting.com</a>
                    <br />
                    <a href="tel:904-273-0315">(904) 273-0315</a>
                    <br />
                    513 South Sea Lake Lane
                    <br />
                    Ponte Vedra Beach, FL 32082
                </p>
                <p id="copy" className='mb-0'>&copy; Copyright {(new Date().getFullYear())}, Culliton Channel Consulting. All Rights Reserved.</p>
            </div>
        );
    }
}
