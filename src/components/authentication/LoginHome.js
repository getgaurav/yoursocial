import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import LoginForm from "./LoginForm";

export default function LoginHome() {
  return (
    <>
      <LoginPage>
        <Clearfix>
          <Brand>
            <Logo>Yoursocial</Logo>
            <Title>
              Yoursocial helps you connect and share with the people in your
              life.
            </Title>
          </Brand>
          <LoginformArea>
            <LoginForm />
          </LoginformArea>
        </Clearfix>
      </LoginPage>
      <Footer />
    </>
  );
}

// Styled Components ............

const LoginPage = styled.div`
  width: 100%;
  height: 720px;
  max-width: 1070px;
  z-index: 1000;
  margin: 0 auto;
`;
const Brand = styled.div`
  max-width: 600px;
  margin-left: 40px;
  position: relative;
  top: -30px;
  @media (max-width: 900px) {
    top: 30px;
    width: auto;
    max-width: 400px;
    margin: 75px auto 46px;
    position: static;
    text-align: center;
  }
`;
const Logo = styled.div`
  font-size: 56px;
  font-weight: 800;
  color: #1877f2;
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;
const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  @media (max-width: 1075px) and (min-width: 900px) {
    font-size: 24px;
    width: 400px;
  }
  @media (max-width: 900px) {
    font-size: 24px;
  }
`;
const LoginformArea = styled.div`
  width: auto;
  height: auto;
  margin-right: 40px;
  @media (max-width: 900px) {
    margin: auto;
    margin-top: 10px;
  }
`;
const Clearfix = styled.div`
  width: 100%;
  height: 600px;
  max-width: 1070px;
  z-index: 1000;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: inherit;
  }
`;
