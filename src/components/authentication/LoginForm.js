import React, { Suspense, useState, lazy } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Loading from '../Loading';
// For lazy Loading - means when we need the component the load the component
const Modal = lazy(() => import("../modal/Modal"));
const SignUp = lazy(() => import("./SignUp"));

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    window.localStorage.setItem('login', true);    // for showing home dashboard
    window.location.reload();                  // for reflecting changes
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Email Address" value="GuestMode@guest.com"/>
        <Input type="password" placeholder="Password" autoComplete="on" value="123456789$#dfs3#@@s"/>
        <Input type="submit" value="Log In" />
      </form>
      <ForgetPass to="forget-password" title="Recover your Password">
        Forgotten password?
      </ForgetPass>
      <Line />
      <NewAccount onClick={handleOpen}>Create New Account</NewAccount>
      <Suspense fallback={""}>
        
        <Modal open={open} onClose={handleClose} component={SignUp} />

      </Suspense>
    </Form>
  );
}

// Styled components

const Form = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 14px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  background-color: #fff;
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 17px;
  margin: 8px 0;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  outline: none;
  color: #1c1e21;
  &[type="submit"] {
    background-color: #1877f2;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    border: none;
  }
  &::placeholder {
    color: #ababab;
  }
  &:focus {
    border-color: #1877f2;
  }
`;
const ForgetPass = styled(Link)`
  margin: 12px 0;
  &:hover {
    text-decoration: underline;
  }
`;
const Line = styled.span`
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background-color: #dfdfdf;
`;
const NewAccount = styled.div`
  width: 60%;
  height: 50px;
  border-radius: 6px;
  background-color: #42b72a;
  color: #fff;
  padding: 14px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  margin: 10px 0;
`;
