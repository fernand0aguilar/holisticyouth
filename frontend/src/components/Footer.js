import React from 'react'

const Footer = () => (
    <footer id="footer" className="wrapper style1-alt">
        <div className="inner">
            <ul className="menu contact">
                <li>
                    <h3>Email</h3>
                    <a href="#">contact@holisticyouth.org</a>
                </li>
                <li>
                    <h3>Social</h3>
                    <ul className="icons">
                        <li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    </ul>
                </li>
            </ul>
            <ul className="menu">
                <li className="label">
                    &copy; HolisticYouth. 2020 All rights reserved.
                    <br/>
                    Design: <a href="http://www.fraguilar.com">fraguilar</a>
                </li>
            </ul>
        </div>
    </footer>
);
export default Footer;
