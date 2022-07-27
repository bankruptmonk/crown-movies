import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = (props) => {
    return (
        // <div>
        //     <div className="documentation-only--application">
        //         <div className="ontario-header__container">
        //         <header className="ontario-application-header ontario-header" id="ontario-header">
        //             <div className="ontario-row">
        //                 <div className="ontario-columns ontario-small-12 ontario-application-header__logo">
        //                     <a href="https://www.ontario.ca/page/government-ontario"
        //                         title=''
        //                         target={'_blank'} 
        //                         className='header-link'>
        //                         <div className='logo'>
        //                             <Logo title='company logo'/>
        //                         </div>
        //                         <div className='header-text h1'>
        //                             Crown Fruit Corp
        //                         </div>
        //                     </a>
        //                 </div>
        //                 <div className="ontario-columns ontario-small-6 ontario-application-header__lang-toggle">
                            
        //                 </div>
        //             </div>
        //         </header>
        //         <div className="ontario-application-subheader-menu__container">
        //             <section className="ontario-application-subheader application-subheader">
        //                 <div className="ontario-row">
        //                     <div className="ontario-columns ontario-small-12 ontario-application-subheader__container">
        //                         <p className="ontario-application-subheader__heading">
        //                             <Link to="/">All Things Fruit</Link>
        //                         </p>

        //                         <div className="ontario-application-subheader__menu-container">
        //                             <ul className="ontario-application-subheader__menu ontario-show-for-large">
        //                                 <li><Link to="/add">Add</Link></li>
        //                                 <li><a href="#">Link 2</a></li>
        //                                 <li><a href="#">Link 3</a></li>
        //                             </ul>
        //                             <ul className="ontario-application-subheader__menu ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large">
        //                                 <li><a href="#">Link 1</a></li>
        //                                 <li><a href="#">Link 2</a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </section>
        //             <nav className="ontario-navigation" id="ontario-navigation">
        //                 <button className="ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline" id="ontario-header-nav-toggler" aria-controls="ontario-navigation" aria-label="close">
        //                     <svg className="ontario-icon" focusable="false" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
        //                         <use xlinkHref="#ontario-icon-close"></use>
        //                     </svg>
        //                     <span>Menu</span>
        //                 </button>
        //                 <div className="ontario-navigation__container">
        //                     <ul>
        //                         <li className="ontario-show-for-small-only"><a href="#">Link
        //                                 1</a></li>
        //                         <li className="ontario-show-for-small-only"><a href="#">Link
        //                                 2</a></li>
        //                         <li className="ontario-hide-for-large"><a href="#">Link
        //                                 3</a></li>
        //                         <li className="ontario-hide-for-large"><a href="#">Link
        //                                 4</a></li>
        //                         <li className="ontario-hide-for-large"><a href="#">Link
        //                                 5</a></li>
        //                         <li><a href="#">Link 6</a></li>
        //                         <li><a href="#">Link 7</a></li>
        //                         <li><a href="#">Link 8</a></li>
        //                     </ul>
        //                 </div>
        //             </nav>
        //         </div>
        //     </div>
        //     <div className="ontario-overlay"></div>
        // </div>

        // </div>

        <div className="documentation-only--application">
    <div className="ontario-header__container">
        <header className="ontario-application-header ontario-header" id="ontario-header">
            <div className="ontario-row">
                <div className="ontario-columns ontario-small-12 ontario-application-header__logo">
                    <a href="https://www.ontario.ca/page/government-ontario"
                        title='Go To www.ontario.ca'
                        target={'_blank'} 
                        hout rel="noreferrer"
                        className='header-link'>
                        <div className='logo'>
                            <Logo title='company logo'/>
                        </div>
                        <div className='header-text h1'>
                            {process.env.REACT_APP_COMPANY_NAME}
                        </div>
                    </a>
                </div>
                <div className="ontario-columns ontario-small-6 ontario-application-header__lang-toggle">
                    
                </div>
            </div>
        </header>
        <div className="ontario-application-subheader-menu__container">
            <section className="ontario-application-subheader application-subheader">
                <div className="ontario-row">
                    <div className="ontario-columns ontario-small-12 ontario-application-subheader__container">
                        <p className="ontario-application-subheader__heading">
                            <Link to="/" title='Home'>{process.env.REACT_APP_APPLICATION_NAME}</Link>
                        </p>

                        <div className="ontario-application-subheader__menu-container">
                            <ul className="ontario-application-subheader__menu">
                                <li><Link to="/add" title='Add New Item'>Add</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="ontario-navigation" id="ontario-navigation">
                <button className="ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline" id="ontario-header-nav-toggler" aria-controls="ontario-navigation" aria-label="close">
                    <svg className="ontario-icon" focusable="false" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                        <use xlinkHref="#ontario-icon-close"></use>
                    </svg>
                    <span>Menu</span>
                </button>
                <div className="ontario-navigation__container">
                    <ul>
                        <li className="ontario-show-for-small-only"><a href="#">Link
                                1</a></li>
                        <li className="ontario-show-for-small-only"><a href="#">Link
                                2</a></li>
                        <li className="ontario-hide-for-large"><a href="#">Link
                                3</a></li>
                        <li className="ontario-hide-for-large"><a href="#">Link
                                4</a></li>
                        <li className="ontario-hide-for-large"><a href="#">Link
                                5</a></li>
                        <li><a href="#">Link 6</a></li>
                        <li><a href="#">Link 7</a></li>
                        <li><a href="#">Link 8</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <div className="ontario-overlay"></div>
</div>
    )
}

export default Header;