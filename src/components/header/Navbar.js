import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "../search/Search";
import Button from "@material-ui/core/Button";
import { TiHome, FaUsers, AiTwotoneShop, MdOndemandVideo, FaUserFriends } from "react-icons/all";
import Tools from "../tools/Tools";


export default function Navbar() {
  return (
    <Wrapper>
      <Left>
        <Logo>
          <Link to='/'>
            <img src="/logo.svg" alt="Yoursocial" />
          </Link>
        </Logo>
        <Search />
      </Left>

      <Center>
        <Nav>
          <NavLinkStyle exact to="/" activeClassName="active">
            <Button>
              <TiHome size={30} />
            </Button>
          </NavLinkStyle>
          <NavLinkStyle to="/friends" activeClassName="active">
            <Button>
              <FaUserFriends size={30} />
            </Button>
          </NavLinkStyle>
          <NavLinkStyle to="/watch" activeClassName="active">
            <Button>
              <MdOndemandVideo size={30}/>
            </Button>
          </NavLinkStyle>
          <NavLinkStyle to="/marketplace" activeClassName="active">
            <Button>
              <AiTwotoneShop size={30}/>
            </Button>
          </NavLinkStyle>
          <NavLinkStyle to="/groups/discover" activeClassName="active">
            <Button>
              <FaUsers size={30}/>
            </Button>
          </NavLinkStyle>
        </Nav>
      </Center>

      <Right>
          <Tools/>
      </Right>
    </Wrapper>
  );
}

// styled components

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 6px 12px -4px #00000030;
  position:fixed;
  top:0;
  z-index:1000;
`;
const Left = styled.div`
  padding: 0 16px;
  max-width: 312px;
  height: auto;
  display:flex;
  align-items:center;
`;
const Logo = styled.div`
  width: 48px;
  height: 48px;
  img {
    width: 48px;
    height: 48px;
  }
`;
const Center = styled.div`
  width: 42%;
  max-width:570px;
  margin:auto;
  min-width:420px;
  height: 56px;
  background-color:#fff;
`;
const Nav = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
`;
const NavLinkStyle = styled(NavLink)`
  width: 120px;
  height: 55px;
  border-bottom: 3px solid #fff;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:all 0.2s;
  &.active {
    border-color: #1877f2;
    color:#1877f2;
  }
  &.active button{
    color:#1877f2;
  }
  &.active button:hover{
      background:none;
  }
  button {
    height: 46px;
    width: 90%;
    color:#606770;
    
  }
`;

const Right = styled.div`
  width: 310px;
  height: 56px;
  background-color: #fff;
  display:flex;
  align-items:center;
`;
