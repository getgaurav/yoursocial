import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {FaEdit} from 'react-icons/all';

export default function NewMessage() {
    return (
        <Wrapper>
            <StyledButton><FaEdit size={22}/></StyledButton>
        </Wrapper>
    )
};


// Styled Components

const Wrapper = styled.div`
    width:48px;
    height:48px;
    border-radius:50px;
    background-color:#fff;
    position:fixed;
    top:calc(100% - 70px);
    left:calc(100% - 70px);
`;
const StyledButton = styled(IconButton)`
    width:48px;
    height:48px;
    border-radius:50px;
    background-color:#fff;
    position: relative;
    top:0;
    left:0;
    color:#1877f2;
    padding-left:15px;
    box-shadow:0 2px 4px #0000001a,0 12px 28px #00000033;
    :hover{
        background-color:#fff;
    }
`;
