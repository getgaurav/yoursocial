import React from "react";
import styled from "styled-components";

export default function RightSidebar() {
  return (
    <Wrapper>
      <Title>Other Projects</Title>

      <Card href="https://mshows.vercel.app/" target="_Blank" rel="noreferrer">
        <img src="/mshows.jpg" alt="mshows" />
      </Card>

      <Card
        href="https://todo-app-gy.vercel.app/"
        target="_Blank"
        rel="noreferrer"
      >
        <img src="/todo-app.jpg" alt="todo app" />
      </Card>
    </Wrapper>
  );
}

// Styled components

const Wrapper = styled.div`
  min-width: 203px;
  max-width: 302px;
  width: 100%;
  height: calc(100vh - 56px);
  padding: 10px;
  overflow-y: scroll;
  position: sticky;
  top: 56px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Title = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  color: #333;
  background-color: #fff;
  box-shadow: 1px 1px 10px -2px rgba(0, 0, 0, 0.2);
  margin-bottom: 14px;
`;
const Card = styled.a`
  width: 100%;
  display:flex;
  height:auto;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 10px -2px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    border-radius: 10px;
    border: 2px solid #1877f2;
  }
`;
