import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

export const GridDropdown = ({ parts, option }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <LocationOnIcon className={classes.icon} />
      </Grid>
      <Grid item xs>
        {parts.map((part, index) => (
          <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
            {part.text}
          </span>
        ))}
        <Typography variant="body2" color="textSecondary">
          {option.structured_formatting.secondary_text}
        </Typography>
      </Grid>
    </Grid>
  );
};
