import React from 'react';
import {Container} from "react-bootstrap";
import LoginButton from "./LoginButton";
import {useAuth0} from "@auth0/auth0-react";

function LoginPage() {

    const {isAuthenticated} = useAuth0(); 

    return (
        // if user is not authenitcated show 
        !isAuthenticated && (
        <Container className="login-container">
            <h2>Pick A Sport</h2>
            <LoginButton />
        </Container>
        )
    )
};

export default LoginPage

