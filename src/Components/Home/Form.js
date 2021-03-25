import React from "react";
import { foodApi } from "api";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchForm = styled.form`
  display: flex;
  width: 600px;

  @media screen and (max-width: 700px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 200px;
  }
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

//////// searchdata

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Form = ({ value, setValue, searchData, setResponse }) => {
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
  return (
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
        <div style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}>
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
              <Link to={`/${food.idMeal}`}>
                <PhotoImage bgImage={food?.strMealThumb} />
              </Link>
              <FoodName>
                <span style={{ fontSize: 16 }}>Food Name</span>
                <span style={{ fontWeight: "bold", marginLeft: 10 }}>
                  {food.strMeal}
                </span>
              </FoodName>
            </ResultContents>
          ))}
        </SearchDataResult>
      </ResultContainer>
    </SearchContainer>
  );
};

export default Form;
