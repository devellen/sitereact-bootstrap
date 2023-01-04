import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cadastro() {
    return (
        <Container style={{ width: 300, border: 'solid', borderRadius: 20, padding: 30 }}>
            <h3 style={{ marginLeft: 10, fontSize:23 }}>Cadastro de Usuário</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Link to={"/"}>
                    <button style={{ marginLeft: 70, width: 100, height: 40, border: 'none', backgroundColor: '#c5a7ef', color: 'white', borderRadius: 10 }} type="submit">
                        Cadastrar
                    </button>
                </Link>

            </Form>
        </Container>
    )
}

export default Cadastro;