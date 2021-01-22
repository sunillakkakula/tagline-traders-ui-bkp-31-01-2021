// import Header from "./ui/Header";
// import MainMenu from "../components/ui/MainMenu";
// import Example from "../components/ui/Example";
// import ThemeProvider from "@material-ui/styles/ThemeProvider";
// import theme from "./ui/Theme";
// import Typography from "@material-ui/core/Typography";
import { Button, Dropdown, Popover } from "react-bootstrap";
import React from "react";
import { OverlayTrigger } from "react-bootstrap";
// import { usePopper } from "react-popper";
// import "bootstrap/dist/css/bootstrap.min.css";
import MainMenu from "./ui/MainMenu";

function CustomPopperMenu() {
  const popover = (
    <Popover>
      <Popover.Content>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
        <Button variant="primary">Hover over me</Button>
      </OverlayTrigger>
      <MainMenu></MainMenu>
    </>
  );
}

export default CustomPopperMenu;
