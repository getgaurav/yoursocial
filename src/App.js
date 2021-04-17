import React, { useEffect, useState } from 'react';
import LoginHome from './components/authentication/LoginHome';
import User from './components/profile/User';
import Navbar from './components/header/Navbar';
import NewMessage from './components/chat/NewMessage';
import Home from './views/Home';
import styled from 'styled-components';
import GamingVideo from './views/GamingVideo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {

  const [login, setLogin] = useState(window.localStorage.getItem('login'));
  

  return (
    <Router>
      {
        !login? <LoginHome/> : 
      
      <Wrapper>
      <Navbar/>
      <Main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/friends" component={Home}/>
        <Route path="/watch" component={Home}/>
        <Route path="/marketplace" component={Home}/>
        <Route path="/groups/discover" component={Home}/>
        <Route path="/profile" component={User}/>
        <Route path="/gaming-video" component={GamingVideo}/>
      </Switch>
      </Main>
      <NewMessage/>
      </Wrapper>
}
    </Router>
  )
}

// Styled Components


const Main = styled.div`
  width:100%;
  min-height:calc(100vh - 56px);
  position:relative;
  top:56px;
`;
const Wrapper = styled.div`

`;