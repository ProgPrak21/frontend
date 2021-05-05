import React from 'react';
import {
    Button,
    
    makeStyles,
    
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
    nav: {
      background: "black",
      color:"white",
      paddingTop: "10px",
      paddingBottom: "10px"
    },
    button:{
        color:"#5aadaa", 
        backgroundColor:"black",
        marginLeft:"5px",
        fontSize:"20px",
        border: "none",
        fontWeight:"bold"
        
    }
    
  }));
   
const Navbar = () =>{
    const classes = useStyles();
    
        return(<div className={classes.nav}>
            
            <button className={classes.button} >Home</button>
            <button className={classes.button} >About</button>
            </div>)
    

}
export default Navbar;
