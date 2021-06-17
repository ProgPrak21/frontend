import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({ service, setService }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setService(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-service">Service</InputLabel>
        <Select
          labelId="select-service"
          id="select"
          value={service}
          onChange={handleChange}
        >
          <MenuItem value={"facebook"}>Facebook</MenuItem>
          <MenuItem value={"instagram"}>Instagram</MenuItem>
          <MenuItem value={"linkedin"}>LinkedIn</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
