import { useLazyQuery } from "@apollo/client";
import { GET_USER_DATA } from "../graphql/get-user-data";
// import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

export default function UserData() {
  const [userId, setUserId] = useState("");
  const [secret, setSecret] = useState("");

  const [getData, { loading, error, data }] = useLazyQuery(GET_USER_DATA, {
    fetchPolicy: "network-only",
    onCompleted: () => {
      console.log(data);
    },
    onError: () => {
      console.log(error);
    },
  });

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
    </div>
  );
}
