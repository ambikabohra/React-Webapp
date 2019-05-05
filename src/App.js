import React from 'react';
// import logo from './logo.svg';

import HeaderNew from "./components/headerNew.js";
import SignInForm from "./components/signInForm.js";
import { Container } from "react-bootstrap";

function App() {

  var sectionStyle = {
    height: `100%`,
    display: `flex`,
    flexDirection: `column`,
    color: `white`,
    minHeight: `100vh`,
  }

  return (
    <div className="App" style={sectionStyle}>
      <Container className="containerMain">
        <HeaderNew page="signIn"/>
        <SignInForm />
      </Container>
    </div>
  );
}

export default App;
