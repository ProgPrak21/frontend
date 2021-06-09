import React,{useMemo} from "react";
import { makeStyles,Button } from "@material-ui/core";

import {useDropzone} from 'react-dropzone'

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'grey',
    borderStyle: 'dashed',
    
    color: 'black',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676',
    borderWidth: 4
  };
  
  const rejectStyle = {
    borderColor: '#ff1744',
    borderWidth: 4
  };

const useStyles = makeStyles((theme) => ({
  
  
  txt:{
    color:"grey"
  }
}));






const DragDrop = () => {
  const classes = useStyles();

  async function uploadFile(file) {
    const json = JSON.stringify(file);
    const blob = new Blob([json], {
      type: "application/json",
    });
    const data = new FormData();
    data.append("facebook", blob);

    await fetch("https://datainfo.gwhy.de/data/facebook/advertisement", {
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
 

  


 
    const {acceptedFiles, getRootProps, getInputProps,isDragActive,
      isDragAccept,
      isDragReject} = useDropzone({
        accept:"application/json"
        
      });

    function upload() {
     
     for (let i = 0; i < acceptedFiles.length; i++) {
        console.log(acceptedFiles[i])
        uploadFile(acceptedFiles[i])
      }
    
    }
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isDragActive,
        isDragReject,
        isDragAccept
      ]);
      
   
    
    
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        
        {file.path} - {file.size} bytes
      </li>
    ));

    
        
        
      
        return (
          <div >
          <div {...getRootProps({style})} className={classes.drop}   >
            <input {...getInputProps()}   />
            <p className={classes.txt}>drop file here or click to upload</p>
          </div>
          <aside>
          <h4 className={classes.txt}>Files</h4>
          <ul className={classes.txt}>{files}</ul>
        </aside>
        
        <Button onClick={upload} variant="contained" color="primary" component="span">
          Submit
        </Button>
        </div>
        )
      }
      

export default DragDrop;