import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
}));

export default function HomeIcon(props) {
  return (
    <SvgIcon {...props} style={{ color: "green" }}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
