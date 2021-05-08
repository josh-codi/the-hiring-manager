import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Instagram, Twitter, Linkedin, Phone, Envelope } from 'react-bootstrap-icons';


const Footer = () => {
    return (

        <div className="footer bg-dark">
            <Row className="row">
                <Col xs={10} sm={8} md={4} lg={3} className="col">
                    <p className=""><b>THE HIRING MANAGER<br /></b><br />Enjoy our nice services.<br />Just submit your resume<br />You are welcome to enjoy THE HIRING MANAGER.</p>
                </Col>
                <Col xs={10} sm={8} md={4} lg={3} className="col">
                    <p className="text-center logo"><img src="/images/sampleLogo.png" alt="logo"/></p>
                </Col>
                <Col xs={10} sm={8} md={4} lg={3} className="col">
                    <div>
                        <h3 className="text-center">Follow Us</h3>
                        <aside className="icons"><p><Instagram /></p><p><Twitter /></p><p><Linkedin /></p><p><Phone /></p><p><Envelope /></p></aside>
                    </div>
                </Col>
            </Row>
        </div>

    )
}
export default Footer;