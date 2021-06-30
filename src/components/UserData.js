import { useLazyQuery } from "@apollo/client";
import { GET_USER_ANALYSED_DATA } from "../graphql/get-user-data";
// import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar,
} from "./chart/styles";

export default function UserData() {
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const mockData = [
    { topic: "gaming", percentage: 37 },
    { topic: "shopping", percentage: 14 },
    { topic: "electronics", percentage: 23 },
    { topic: "social media", percentage: 17 },
  ];

  const [userId, setUserId] = useState("");
  const [secret, setSecret] = useState("");

  const [getData, { loading, error, data }] = useLazyQuery(
    GET_USER_ANALYSED_DATA,
    {
      fetchPolicy: "network-only",
      onCompleted: () => {
        console.log(data);
      },
      onError: () => {
        console.log(error);
      },
    }
  );

  const onAnalyseClick = () => {
    getData({ variables: { secret, userId } });
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form noValidate autoComplete="off">
          <TextField
            onChange={({ target: { value } }) => setUserId(value)}
            label="User ID"
            variant="outlined"
          />
          <TextField
            onChange={({ target: { value } }) => setSecret(value)}
            label="Secret"
            variant="outlined"
          />
        </form>
        <Button
          onClick={() => onAnalyseClick()}
          color="primary"
          variant="contained"
        >
          Analyse
        </Button>
      </div>
      <div style={{ color: "white" }}>data will be here!</div>
      {data.UserData && (
        <div>
          <Container>
            <MainContainer>
              {data.UserData?.map(({ topic, weight }, i) => {
                const color = getRandomColor();
                return (
                  <BarChartContainer key={i}>
                    <Number color={color}>{topic}</Number>
                    <MakeBar height={weight * 20} color={color} />
                  </BarChartContainer>
                );
              })}
            </MainContainer>
            <BlackLine />
          </Container>
        </div>
      )}
      {mockData && (
        <div>
          <Container>
            <MainContainer>
              {mockData.map(({ topic, percentage }, i) => {
                const color = getRandomColor();
                return (
                  <BarChartContainer key={i}>
                    <Number color={color}>
                      {topic} {percentage}%
                    </Number>
                    <MakeBar height={percentage * 2} color={color} />
                  </BarChartContainer>
                );
              })}
            </MainContainer>
            <BlackLine />
          </Container>
        </div>
      )}
    </div>
  );
}
