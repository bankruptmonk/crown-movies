import React from 'react';

import './footer.styles.scss';

const Footer = (props) => {
    return (
        <footer className="ontario-footer ontario-footer--default">
            <div className="ontario-row">
                <div className="ontario-columns ontario-small-12">
                    <ul className="ontario-footer__links-container ontario-footer__links-container--inline">
                        <li><a className="ontario-footer__link" href="https://www.ontario.ca/page/accessibility">Accessibility</a></li>
                        <li><a className="ontario-footer__link" href="https://www.ontario.ca/page/privacy-statement">Privacy</a></li>
                        <li><a className="ontario-footer__link" href="https://www.ontario.ca/feedback/contact-us">Contact us</a></li>
                    </ul>
                    <div className="ontario-footer__copyright">
                        <a className="ontario-footer__link" href="https://www.ontario.ca/page/copyright-information-c-queens-printer-ontario">&copy; Queen’s Printer for {process.env.REACT_APP_COMPANY_NAME}, <span className="ontario-nbsp">2012&ndash;21</span></a>
                    </div>
                </div>
            </div>
            <div className='ontario-row build-number-row'>
                <div className='ontario-columns ontario-small-12'>
                    Build Number: {process.env.REACT_APP_BUILD_NUMBER}
                </div>
            </div>
            <div className='ontario-row build-number-row'>
                <div className='ontario-columns ontario-small-12'>
                    Front End Code: <a className='ontario-footer__link' href="https://github.com/bankruptmonk/crown-movies" target={'_blank'} rel="noreferrer">
                        https://github.com/bankruptmonk/crown-movies
                    </a>
                </div>
            </div>
            <div className='ontario-row build-number-row'>
                <div className='ontario-columns ontario-small-12'>
                    Back End Code: <a className='ontario-footer__link' href="https://github.com/bankruptmonk/crown-movies" target={'_blank'} rel="noreferrer">
                        https://github.com/bankruptmonk/crown-movies-api
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;