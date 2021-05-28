import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));

const Upload = () => {
  const classes = useStyles();

  async function uploadFile(file) {
    const json = JSON.stringify(file);
    const blob = new Blob([json], {
      type: "application/json",
    });
    const data = new FormData();
    data.append("facebook", blob);

    await fetch("https://dara.gwhy.de/data/facebook/advertisement", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((success) => {
        console.log(success);
      })
      .catch((error) => console.log(error));
  }

  const changeHandler = async (event) => {
    console.log(event.target.files[0]);
    uploadFile(event.target.files[0]);
  };

  return (
    <div>
      <input
        accept="application/JSON"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={changeHandler}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};

export default Upload;
