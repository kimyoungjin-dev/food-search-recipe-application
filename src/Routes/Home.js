import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "Components/GlobalStyles";
import Form from "Components/Home/Form";

const Container = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.span`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 30px;
  display: block;
`;

const SubTitle = styled.span`
  display: block;
  margin: 10px 0px;
  font-size: 18px;
`;

const Name = styled.span`
  font-style: italic;
  font-size: 16px;
`;

const Home = () => {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState({
    loading: true,
    searchData: [],
    searchDataError: [],
  });

  const { searchData } = response;

  return (
    <>
      <GlobalStyles />
      <Container>
        <TitleContainer>
          <Title>Find Meals For your Ingredient</Title>
          <SubTitle>
            Real food doesn`t have ingredients, real food is ingredients.
          </SubTitle>
          <div style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}>
            <Name>- Young jin -</Name>
          </div>
        </TitleContainer>
        <Form
          value={value}
          setValue={setValue}
          searchData={searchData}
          setResponse={setResponse}
        />
      </Container>
    </>
  );
};

export default Home;
