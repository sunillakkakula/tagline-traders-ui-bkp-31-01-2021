import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Message from "../components/Message";
import BulkLooseRadioGroup from "../components/controls/BulkLooseRadioGroup";

import Loader from "../components/Loader";
import Meta from "../components/Meta";
import { listProductDetails } from "../actions/productAction";
import { BiRupee } from "react-icons/bi";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: "1.5em",
  },
}));

const ProductDetailsScreen = (prd) => {
  const { product } = prd;
  let [qty, setQty] = useState(1);
  let [counter, setCounter] = useState(0);
  let [orderTypeSelected, setOrderTypeSelected] = useState("loose");
  let [isBulkOrder, setIsBulkOrder] = useState(false);
  useEffect(() => {
    console.log("Exec Use Effect as order Type is Chnaged");
    setOrderTypeSelected(orderTypeSelected);
  }, [orderTypeSelected]);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const addToCartHandler = () => {
    // history.push(`/cart/${prd._id}?qty=${prd.qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const renderQtyUI = ({ isBulkOrder, qty }) => {
    if (orderTypeSelected === "b") {
      console.log(" IS BULK ORDER so return UI for that" + orderTypeSelected);

      return (
        <Form.Control
          as="select"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        >
          {[...Array(product.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </Form.Control>
      );
    } else {
      console.log(" IS LOOSE ORDER so return UI for that" + orderTypeSelected);
      return (
        <ButtonGroup
          style={{ size: "small" }}
          className="small outlined button group"
          aria-label="small outlined button group"
        >
          {<Button onClick={handleDecrement}>-</Button>}
          {<Button disabled>{counter}</Button>}
          <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
      );
    }
  };

  const currentCBHandler = (orderTypeValue) => {
    // console.log("Order Type Selected :" + orderTypeValue);
    orderTypeSelected = orderTypeValue;
    setOrderTypeSelected(...orderTypeSelected, orderTypeSelected);
    console.log(
      "orderTypeValue :" +
        orderTypeValue +
        " orderTypeSelected : " +
        orderTypeSelected
    );

    setIsBulkOrder(orderTypeValue === "bulk" ? true : false);
    console.log(
      "is Order Type Bulk ? " +
        isBulkOrder +
        ", orderTypeValue: " +
        orderTypeValue
    );
  };

  return (
    <>
      <BulkLooseRadioGroup parentCB={currentCBHandler} />
      <Row>
        <Col md={3}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price:{" "}
              <span style={{ position: "absolute", right: "5px" }}>
                <BiRupee />
              </span>
              {product.price}
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          {/* <Card> */}
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Col>Price:</Col>
              <Col>
                <strong>
                  <span style={{ position: "absolute", right: "5px" }}>
                    <BiRupee />
                  </span>{" "}
                  {product.price}
                </strong>
              </Col>
            </ListGroup.Item>

            <ListGroup.Item>
              <Col>Status:</Col>
              <Col>
                {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </Col>
            </ListGroup.Item>

            {product.countInStock > 0 && (
              <ListGroup.Item>
                <Col>Qty</Col>
                <Col>{renderQtyUI(isBulkOrder, qty)}</Col>
              </ListGroup.Item>
            )}
            <ListGroup.Item>
              <Button
                onClick={addToCartHandler}
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetailsScreen;
