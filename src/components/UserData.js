import { useLazyQuery } from "@apollo/client";
import { GET_USER_DATA } from "../graphql/get-user-data";
// import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

export default function UserData() {
  const [userId, setUserId] = useState("");
  const [secret, setSecret] = useState("");

  const [getData, { loading, error, data }] = useLazyQuery(GET_USER_DATA, {
    variables: { secret, userId },
    onCompleted: () => {
      console.log(data);
    },
    onError: () => {
      console.log(error);
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form noValidate autoComplete="off">
          <TextField
            onChange={({ target }) => setUserId(target.value)}
            label="User ID"
            variant="outlined"
          />
          <TextField
            onChange={({ target }) => setSecret(target.value)}
            label="Secret"
            variant="outlined"
          />
        </form>
        <Button onClick={() => getData()} color="primary" variant="contained">
          Analyse
        </Button>
      </div>
      <div style={{ color: "white" }}>data will be here!</div>
    </div>
  );
}
