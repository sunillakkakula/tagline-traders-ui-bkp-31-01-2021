import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, Image } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import StaplesMenu from "./StaplesMenu";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    /*backgroundImage: `url(${process.env.PUBLIC_URL + "/logo.jpg"})`,*/
    // backgroundColor: theme.palette.background.paper,
  },
  palette: {
    primary: "white",
  },
}));

export default function MenuHeader() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          style={{ background: "white", color: "black" }}
          variant="scrollable"
        >
          <Tab
            label="Staples"
            {...a11yProps(0)}
            // icon={<Avatar alt="test avatar" src="/Staples.jpg" />}
            component={() => <StaplesMenu />}
          ></Tab>
          <Tab
            style={{ backgroungImage: "/logo.jpg" }}
            label="Snacks & Beverages"
            {...a11yProps(1)}
            icon={<Avatar alt="test avatar" src="/Snacks-Beverages.jpg" />}
          ></Tab>
          <Tab
            label="Packaged Food"
            {...a11yProps(2)}
            icon={<Avatar alt="test avatar" src="/Packaged-Food.jpg" />}
          />
          <Tab
            label="Personal & Baby Care"
            {...a11yProps(3)}
            icon={<Avatar alt="test avatar" src="/Baby-Care.jpg" />}
          />
          <Tab
            label="Household Care"
            {...a11yProps(4)}
            icon={<Avatar alt="test avatar" src="/Household-Care.jpg" />}
          />
          <Tab
            label="Dairy & Eggs"
            {...a11yProps(5)}
            icon={<Avatar alt="test avatar" src="/Dairy-Eggs.jpg" />}
          ></Tab>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Staples
      </TabPanel>
      <TabPanel value={value} index={1}>
        Snacks & Beverages
      </TabPanel>
      <TabPanel value={value} index={2}>
        Packaged Food
      </TabPanel>
      <TabPanel value={value} index={3}>
        Personal & Baby Care
      </TabPanel>
      <TabPanel value={value} index={4}>
        Household Care
      </TabPanel>
      <TabPanel value={value} index={5}>
        Dairy & Eggs
      </TabPanel>
    </div>
  );
}
