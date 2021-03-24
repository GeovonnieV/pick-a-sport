import React from 'react'
import {Container} from "react-bootstrap"
import LoginButton from "./LoginButton";

function LoginPage() {
    return (
        <Container className="login-container">
            <h2>Pick A Sport</h2>
            <LoginButton />
        </Container>
    )
}

export default LoginPage

