import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, IconButton } from "@material-ui/core";
import { GoPlus, RiMessage3Fill, IoIosNotifications, BsFillCaretDownFill} from 'react-icons/all';











export default function Tools() {

    
  return (
    <Wrapper>
      <NavLinkStyle to="/profile" activeClassName="active">
        <Button><UserPic></UserPic>Guest</Button>
      </NavLinkStyle>
      <ToolOptions>
      <IconButton><GoPlus size={18}/></IconButton>
      <IconButton><RiMessage3Fill size={20}/></IconButton>
      <IconButton><IoIosNotifications size={23}/></IconButton>
      <IconButton><BsFillCaretDownFill size={23}/></IconButton>
      </ToolOptions>
    </Wrapper>
  );
}



// Styled Components

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding-right:16px;
`;
const NavLinkStyle = styled(NavLink)`
    height:auto;
    margin-right:10px;
    &.active button{
        background-color:#e7f3ff;
        color:#1877f2;
    }
    button{
        border-radius:50px;
        max-width:140px;
        height:36px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:5px;
        padding-right:16px;
        text-transform:capitalize;
        font-size:16px;
    }
    
`;

const UserPic = styled.div`
    width:28px;
    height:28px;
    border-radius:100%;
    margin-right:6px;
    background-image:url('https://source.unsplash.com/random/100x100');
    background-size:cover;
    background-repeat:no-repeat;
`;
const ToolOptions = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    button{
        width:40px;
        height:40px;
        background-color:rgba(0, 0, 0, 0.04);
        padding:5px;
        color:#606770;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`;