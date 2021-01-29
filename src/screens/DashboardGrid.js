import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Image } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "10rem",
    width: "20rem",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const DashboardGrid = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid key="1" item>
              <Paper className={classes.paper}>
                <img
                  style={{ opacity: "1", width: "19rem", height: "9rem" }}
                  alt="Chillis"
                  src="/images/4.jpg"
                />
              </Paper>
            </Grid>
            <Grid key="2" item>
              <Paper className={classes.paper}>
                <img
                  style={{ opacity: "1", width: "19rem", height: "9rem" }}
                  alt="Turmeric"
                  src="/images/3.jpg"
                />
              </Paper>
            </Grid>
            <Grid key="3" item>
              <Paper className={classes.paper}>
                <Paper className={classes.paper}>
                  <img
                    style={{ opacity: "1", width: "19rem", height: "9rem" }}
                    alt="Coriander"
                    src="/images/5.jpg"
                  />
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid key="2" item>
              <Paper className={classes.paper}>
                <img
                  style={{ opacity: "1", width: "19rem", height: "9rem" }}
                  alt="Turmeric"
                  src="/images/1.jpg"
                />
              </Paper>
            </Grid>
            <Grid key="3" item>
              <Paper className={classes.paper}>
                <Paper className={classes.paper}>
                  <img
                    style={{ opacity: "1", width: "19rem", height: "9rem" }}
                    alt="Coriander"
                    src="/images/2.jpg"
                  />
                </Paper>
              </Paper>
            </Grid>
            {/* {[0, 1].map((value) => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))} */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default DashboardGrid;
