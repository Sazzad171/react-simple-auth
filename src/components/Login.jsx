import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function Login({ inputedEmail, inputedPass, setInputedEmail, setInputedPass }) {

  let navigate = useNavigate();

  // submit login form
  const onFormSubmit = (e) => {
    navigate('/settings', {replace: true});
    e.preventDefault();
  }

  // update email and password value when keyup
  const onEmailChange = (e) => {
    setInputedEmail(e.target.value);
  }
  const onPassChange = (e) => {
    setInputedPass(e.target.value);
  }

  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="4">
            <div className="login-box text-center">
              <h1 className='mb-4'>Login</h1>

              <Form onSubmit={onFormSubmit} method="post">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={inputedEmail} onChange={onEmailChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={inputedPass} onChange={onPassChange} />
                </Form.Group>

                <Button className='mt-4' variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
