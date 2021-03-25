import React, { useState, useEffect } from "react";
import { foodApi } from "api";
import styled from "styled-components";
import { BsCaretLeft } from "react-icons/bs";
import { useHistory } from "react-router";
import Loading from "Components/Loading";

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgb(240, 111, 7);
`;

const DataContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
`;

const CategoryButton = styled.button`
  border: none;
  border-radius: 10px;
  color: orange;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 25px;
`;

const PhotoImage = styled.img`
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;
//components
const Detail = ({
  match: {
    params: { id },
  },
}) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({
    detailResult: [],
    detailResultError: null,
  });

  const getData = async () => {
    const [detailResult, detailResultError] = await foodApi.detail(id);
    setResult({
      detailResult,
      detailResultError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const goBack = () => {
    history.push("/");
  };

  const { detailResult } = result;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <div style={{ paddingTop: 20, paddingLeft: 25, cursor: "pointer" }}>
            <BsCaretLeft size={30} onClick={() => goBack()} color={"white"} />
          </div>
          {detailResult.map((food) => (
            <DataContainer>
              <h1>{food.strMeal}</h1>
              <CategoryButton>
                <span>Category : </span>
                <span>{food.strCategory}</span>
              </CategoryButton>
              <div>
                <span style={{ display: "block" }}>Instructions:</span>
              </div>
              <div style={{ paddingRight: 40, paddingLeft: 40 }}>
                <span>{food.strInstructions}</span>
              </div>

              <div>
                <a
                  href={food.strYoutube}
                  target={"_blank"}
                  style={{ color: "white" }}
                >
                  <div>
                    <PhotoImage bgUrl={food.strMealThumb} />
                  </div>

                  <div>
                    <span style={{ color: "white" }}>Watch Video</span>
                  </div>
                </a>
              </div>
            </DataContainer>
          ))}
        </Container>
      )}
    </>
  );
};

export default Detail;
