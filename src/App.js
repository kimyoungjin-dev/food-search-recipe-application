import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import GlobalStyles from "GlobalStyles";

//font-family: 'Noto Sans KR', sans-serif;

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

const SearchContainer = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 40rem;
`;

const SearchBox = styled.input`
  outline: none;
  padding-left: 10px;
  font-size: 20px;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  width: 100%;
  border: 1px solid orange;

  ::placeholder {
    padding-left: 10px;
    color: orange;
  }
`;

const SearchBtn = styled.button`
  width: 40px;
  height: 40px;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border: 1px solid orange;
  background-color: orange;
`;

const App = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValue("");
  };

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
        <SearchContainer>
          <SearchBox
            type="text"
            placeholder="Search Food"
            maxLength={20}
            onChange={onChange}
            value={value}
          />
          <SearchBtn type="submit">
            <AiOutlineSearch style={{ color: "white" }} size={20} />
          </SearchBtn>
        </SearchContainer>
      </Container>
    </>
  );
};

export default App;
