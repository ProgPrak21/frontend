import { useLazyQuery } from "@apollo/client";
import {
  GET_USER_ANALYSED_DATA,
  GET_USER_ANALYSED_COORDS,
} from "../graphql/get-user-data";
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar,
} from "./chart/styles";
import Map from "./Map";

export default function UserData() {
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [userId, setUserId] = useState("");
  const [secret, setSecret] = useState("");
  const [check, setCheck] = useState(false);

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

  //Location Query
  const [getLocationData, locationData] = useLazyQuery(
    GET_USER_ANALYSED_COORDS,
    {
      fetchPolicy: "network-only",
      onCompleted: () => {
        console.log(locationData.data);
      },
      onError: () => {
        console.log(locationData.error);
      },
    }
  );

  const onAnalyseClick = () => {
    if (check) return getLocationData({ variables: { secret, userId } });
    getData({ variables: { secret, userId } });
  };

  const handleChange = (event) => {
    setCheck(event.target.checked);
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
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={check}
              onChange={handleChange}
              name="coord"
              color="primary"
            />
          }
          label={
            <Typography style={{ color: "white" }}>
              Location Analysis
            </Typography>
          }
        />
      </div>
      <div style={{ color: "white" }}>data will be here!</div>
      {locationData.data && <Map data={locationData.data.UserCoordsAnalyzed} />}
      {data?.UserDataAnalyzed && (
        <div>
          <Container>
            <MainContainer>
              {data.UserDataAnalyzed?.map(({ topic, percentage }, i) => {
                const color = getRandomColor();
                return (
                  <BarChartContainer key={i}>
                    <Number color={color}>{`${topic} ${(
                      percentage * 100
                    ).toFixed(0)} %`}</Number>
                    <MakeBar
                      height={(percentage * 100).toFixed(0)}
                      color={color}
                    />
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
