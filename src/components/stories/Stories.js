import { IconButton } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import {FiPlus } from 'react-icons/all'

export default function Stories() {
    return (
        <Wrapper>
            <AddStories>
                <Btn>
                    <IconBtn><FiPlus size={28}/></IconBtn>
                    <Title>
                        <h3>Create Story</h3>
                        <p>Share a photo or write something.</p>
                    </Title>
                </Btn>
            </AddStories>
            
        </Wrapper>
    )
};


// Styled components 


const Wrapper = styled.div`
    max-width:590px;
    min-width:300px;
    width:100%;
    min-height:100px;
    margin:0 auto;
`;
const AddStories = styled.div`
  width:100%;
  height:72px;
  background-color:#fff;  
  border-radius:10px;
  box-shadow:0 1px 2px #00000033;
  padding:8px;
  cursor: pointer;
  `;

  const IconBtn = styled(IconButton)`
      background-color:#e7f3ff;
      color:#0571ed;
      width:46px;
      height:46px;
      padding:0;
  `;
const Btn = styled.div`
    width:100%;
    height:56px;
    transition:all 0.3s;
    border-radius:6px;
    display:flex;
    align-items:center;
    padding:0 10px;
    :hover{
        background-color:#efefef98;
    }
    :hover ${IconBtn}{
        background-color:#d4e8fa;
    }
`;
const Title = styled.div`
    width:auto;
    height:auto;
    margin-left:10px;
    h3{
        font-weight:500;
    }
    p{
        font-size:15px;
        color:#666;
    }
`;