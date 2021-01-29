import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";
import { Button, makeStyles, Paper } from "@material-ui/core";
import { BiRupee } from "react-icons/bi";
import Controls from "./controls/Controls";
import AddProductForm from "./AddProductForm";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Popup from "./Popup";
// import  from "../screens/ProductScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Product = ({ product }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const useStyles = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
    searchInput: {
      width: "75%",
    },
    newButton: {
      position: "absolute",
      right: "10px",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Card
        className="my-1 p-1 rounded"
        style={{
          maxWidth: "18rem",
          maxHeight: "16rem",
          boxShadow: "0 1px 1px rgba(0,0,0,.4)",
        }}
      >
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            variant="top"
            style={{
              maxWidth: "6em",
              maxHeight: "7em",
              marginLeft: "6rem",
              marginRight: "6rem",
            }}
          />
        </Link>
        <Card.Body>
          {/* <Link to={`/product/${product._id}`}> */}
          <div>
            <strong>{product.name}</strong>
            <span style={{ position: "absolute", right: "5px" }}>
              <BiRupee />
              {product.price}
            </span>
          </div>
          {/* </Link> */}
          <Button variant="contained" disabled>
            1 kg
          </Button>
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
            }}
          />
        </Card.Body>
      </Card>
      <Popup
        title="Ordering Bulk / Loose ?"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        {/* <AddProductForm></AddProductForm> */}
        {/* <ProductScreen /> */}
        <ProductDetailsScreen product={product}></ProductDetailsScreen>
      </Popup>
    </>
  );
};

export default Product;
