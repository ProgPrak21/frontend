import React, { useState } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
  },
  formEle: {
    flexGrow: 1,
    margin: 10,
  },
  text: {
    color: "#F0F0F0",
    textShadow:
      "0.05em 0 black,0 0.05em black,-0.05em 0 black,0 -0.05em black,-0.05em -0.05em black,-0.05em 0.05em black,0.05em -0.05em black,0.05em 0.05em black",
  },
}));

const Fetch = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    sendToServer();
  };

  const onKeyPress = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      sendToServer();
    }
  };

  const sendToServer = () => {
    let data = { emailAddress: email, firstName: "Majed" };
    if (!name) return setError("Please provide a Name");
    if (!email.includes("@")) return setError("Not a Valid email address");
    setError("");
    const url = "http://35.228.32.56:8080/email";
    console.log(JSON.stringify(data));
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Response is not okay!");
        return response.json();
      })
      .then((result) => {
        setResponse(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            size="small"
            className={classes.formEle}
            fullWidth
            color="primary"
            id="name"
            variant="filled"
            value={name}
            onChange={({ target: { value } }) => {
              setName(value.trim());
            }}
            onKeyPress={onKeyPress}
            placeholder={"Please provide first name"}
          />
          <TextField
            size="small"
            className={classes.formEle}
            fullWidth
            color="primary"
            id="filled-basic"
            variant="filled"
            value={email}
            onChange={({ target: { value } }) => {
              setEmail(value.trim());
            }}
            onKeyPress={onKeyPress}
            placeholder={"Please provide an email address"}
          />
          <Button
            className={classes.formEle}
            variant="contained"
            onClick={handleChange}
            color={"primary"}
          >
            Send
          </Button>
        </form>
      </div>
      {error && <div className={classes.text}>{error}</div>}
      {response && (
        <div className={classes.text}>
          The response from the server is: <br />
          {response.content}
        </div>
      )}
    </div>
  );
};

export default Fetch;
