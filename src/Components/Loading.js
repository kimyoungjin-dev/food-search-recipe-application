import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 111, 7);
`;

const LoadingText = styled.span`
  animation: fadeIn 0.8s linear;
  color: white;
  font-size: 30px;

  @keyframes fadeIn {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: none;
      opacity: 1;
    }
  }
`;

const Loading = () => {
  return (
    <Container>
      <LoadingText>Loading...</LoadingText>
    </Container>
  );
};

export default Loading;
