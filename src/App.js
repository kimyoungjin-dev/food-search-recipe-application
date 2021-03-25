import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import GlobalStyles from "GlobalStyles";
import { foodApi } from "api";

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

const SearchContainer = styled.div`
  padding: 20px 0px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const SearchInput = styled.input`
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

//////// search

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchDataResult = styled.div`
  @media screen and (min-width: 300px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ResultContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoImage = styled.img`
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 300px;
  width: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const FoodName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState({
    loading: true,
    searchData: [],
    searchDataError: [],
  });

  const widthValue = document.body.scrollWidth;
  console.log(widthValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const [searchData, searchDataError] = await foodApi.search(value);
    setResponse({
      searchData,
      searchDataError,
      loading: false,
    });
    setValue("");
  };

  const { searchData } = response;
  console.log(searchData);

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
          <SearchForm onSubmit={onSubmit}>
            <SearchInput
              type="text"
              placeholder="Search Food"
              maxLength={20}
              onChange={onChange}
              value={value}
            />
            <SearchBtn type="submit">
              <AiOutlineSearch style={{ color: "white" }} size={20} />
            </SearchBtn>
          </SearchForm>
          <ResultContainer>
            <div
              style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}
            >
              <span style={{ fontSize: 30, fontWeight: "bold" }}>
                Your Search Results
              </span>
            </div>

            <SearchDataResult>
              {searchData.map((food) => (
                <ResultContents
                  key={food.idMeal}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <PhotoImage
                    bgImage={food?.strMealThumb}
                    onClick={() => <a href="#" target="_blank"></a>}
                  />
                  <FoodName>
                    <span style={{ fontSize: 16 }}>Name : </span>
                    <span style={{ fontWeight: "bold" }}>{food.strMeal}</span>
                  </FoodName>
                </ResultContents>
              ))}
            </SearchDataResult>
          </ResultContainer>
        </SearchContainer>
      </Container>
    </>
  );
};

export default App;
