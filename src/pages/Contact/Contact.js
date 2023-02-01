

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import './Contact.css'
export default function ContactUs() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const mailToLink = `mailto:hshafiquedev@gmail.com?subject=Contact Request&body=${encodeURIComponent(body)}`;
    window.location.href = mailToLink;
    setName('');
    setEmail('');
    setMessage('');

    alert(`Your message has been sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  };





  const contactConfig = {
    YOUR_EMAIL: 'hshafiquedev@gmail.com',
    YOUR_FONE: '(469)388-5842',
    description:
      'I look forward to hearing from you and our future collaborations! ',
    YOUR_SERVICE_ID: 'service_id',
    YOUR_TEMPLATE_ID: 'template_id',
    YOUR_USER_ID: 'user_id',
  };


  return (

    <Container className="contain animate__animated animate__lightSpeedInLeft " >

      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Me</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Hadia Shafique</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form onSubmit={handleSubmit} className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>


  );
}
