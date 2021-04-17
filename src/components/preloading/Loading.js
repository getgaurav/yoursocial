import React from "react";
import styled from "styled-components";

export default function Loading() {
  return (
    <Bouncer>
        <Bounce>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </Bounce>
    </Bouncer>
  );
}

const Bouncer = styled.div`
    position:fixed;
    width:100%;
    height:100vh;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(255, 255, 255, .8);
`;

const Bounce = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100px;
  height: 100px;
  position:relative;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  z-index:9999999;
  div {
    width: 20px;
    height: 20px;
    background-color: #0077ff;
    border-radius: 50%;
    animation: bouncer 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite
      alternate;
    /* use https://cubic-bezier.com/ to customize the curve */
  }
  div:nth-child(2) {
    animation-delay: 0.1s;
    opacity: 0.8;
  }

  div:nth-child(3) {
    animation-delay: 0.2s;
    opacity: 0.6;
  }

  div:nth-child(4) {
    animation-delay: 0.3s;
    opacity: 0.4;
  }

  @keyframes bouncer {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100px);
    }
  }
`;
