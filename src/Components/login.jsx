import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const Login = () => {
    return (
        <div className="loginForm"><br/><br/>
        <h3 className="text-center">The Hiring Manager</h3>
        <br/><br/>
            <Col lg={6} className="center">
            <Form className="jumbotron">
                <h2 className="text-center">Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree to our terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" className="">
                    Login
                </Button>

            </Form>
            
            </Col>
            <a href="#root1"><Button variant="primary" type="submit" className="">
                    <h1>signup</h1>
                </Button></a>
            </div>
    )
}

export default Login;