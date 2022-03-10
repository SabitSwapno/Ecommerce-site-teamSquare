import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className="container">
            <h2 style={{
                color: "#212529",
                fontWeight: 700,
            }}>Frequiently Asked <span style={{
                color: "#fd7e14"
            }}>Questions</span></h2>
            <h4 style={{
                color: "#212529"
            }}>We almost try to answer our every customers questions.</h4>
            <div className="row my-5 d-flex align-items-center">
                <div className="col-md-6 col-sm-12">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="borders">How can we believe this website is secured?</Accordion.Header>
                            <Accordion.Body className="borders">
                                We applied for CTA designation with at least 12 months of experience in the retail eCommerce industry. Whereas, we became eligible to apply for a CTC designation after getting 2 years of experience in this industry to prove that the applicants have requisite skills to be effective managers.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="borders">If I get any dublicate products then what will I do?</Accordion.Header>
                            <Accordion.Body className="borders">
                                <ul>
                                    <li>First of all take a picture of the product for a prove.</li>
                                    <li>Call your Area manager!</li>
                                    <li>Email us & write a brief about what happend.</li>
                                    <li>Don't worry if your informations are correct then you will be refunded.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="borders">If we want an exchange then what will be your offer?</Accordion.Header>
                            <Accordion.Body className="borders">
                                We will simply return it within 30 days for an exchange if your previous products isn't hampared yet.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src="https://i.ibb.co/ykKQQz3/5098466.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;