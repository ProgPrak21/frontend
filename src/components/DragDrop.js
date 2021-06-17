import React, { useMemo, useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import Select from "./Select";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "grey",
  borderStyle: "dashed",
  margin: "10px 10%",
  color: "black",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};
const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
  borderWidth: 4,
};

const rejectStyle = {
  borderColor: "#ff1744",
  borderWidth: 4,
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "40px",
  },
  txt: {
    color: "grey",
  },
}));

const DragDrop = () => {
  const classes = useStyles();

  const [service, setService] = useState("facebook");

  async function uploadFile(file) {
    const json = JSON.stringify(file);
    const blob = new Blob([json], {
      type: "application/json",
    });
    const data = new FormData();
    data.append(service, blob);

    await fetch(`https://dara.gwhy.de/data/${service}/advertisement`, {
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

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "application/json",
  });

  function upload() {
    for (let i = 0; i < acceptedFiles.length; i++) {
      console.log(acceptedFiles[i]);
      uploadFile(acceptedFiles[i]);
    }
  }

  // const onClick = async (event) => {
  //   console.log(event.target.files[0]);
  //   uploadFile(event.target.files[0]);
  // };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className={classes.root}>
      <div {...getRootProps({ style })} className={classes.drop}>
        <input {...getInputProps()} />
        <p className={classes.txt}>drop file here or click to upload</p>
      </div>
      <aside>
        <h4 className={classes.txt}>Files</h4>
        <ul className={classes.txt}>{files}</ul>
      </aside>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Select service={service} setService={setService} />

        <Button
          onClick={upload}
          variant="contained"
          color="primary"
          component="span"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default DragDrop;
