import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

export default function Login() {
  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="4">
            <div className="login-box text-center">
              <h1 className='mb-4'>Login</h1>

              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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
