import React from 'react';
import { Container } from "react-bootstrap";
import HeaderNew from "../components/headerNew.js";
import SignUpForm from "../components/signUpForm.js";

export default class SignUpPage extends React.Component {
    

    render() {
        var sectionStyle = {
            height: `100%`,
            display: `flex`,
            flexDirection: `column`,
            color: `white`,
            minHeight: `100vh`,
          }
        return (
            <div className="App" style={sectionStyle}>
                <Container >
                    <HeaderNew  page="signUp"/>
                    <SignUpForm />
                </Container>
            </div>
        )
    }
}
