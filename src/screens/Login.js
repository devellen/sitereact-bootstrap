import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Container style={{ width: 300, border: 'solid', borderRadius:20, padding:30}}>
            <h3 style={{ marginLeft: 80 }}>Login</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Link to={"/inicial"}>
                <button style={{ marginLeft: 15, width: 80, height: 30, border: 'none', backgroundColor: '#c5a7ef', color: 'white', borderRadius: 10 }} type="submit">
                    Login
                </button>
                </Link>

                <Link to={"/cadastro"}>
                    <button style={{ marginLeft: 20, width: 100, height: 30, border: 'none', backgroundColor: '#c5a7ef', color: 'white', borderRadius: 10 }} type="submit">
                        Cadastre-se
                    </button>
                </Link>

            </Form>
        </Container>
    )
}


export default Login;