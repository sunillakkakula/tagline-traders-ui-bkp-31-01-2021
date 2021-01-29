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
  const [qty, setQty] = useState(1);
  const [counter, setCounter] = useState(0);
  const [orderTypeSelected, setOrderTypeSelected] = useState("loose");
  let orderInput = "";
  const handleIncrement = () => {
    setCounter(counter + 1);
    // this.setState((state) => ({ counter: state.counter + 1 }));
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
    // this.setState((state) => ({ counter: state.counter - 1 }));
  };
  // const productDetails = useSelector((state) => state.productDetails);
  // const { loading, error, product } = productDetails;
  // dispatch(listProductDetails(productDetails.product._id));

  const addToCartHandler = () => {
    // history.push(`/cart/${prd._id}?qty=${prd.qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const looseBtnGroup = (
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
  const bulkTextField = (
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

  const currentCBHandler = (orderTypeValue) => {
    console.log("Order Type Selected :" + orderTypeValue);
    // orderInput = orderTypeValue === "loose" ? looseBtnGroup : bulkTextField;
    orderInput = orderTypeValue === "loose" ? <h3>Loose</h3> : <h3>Bulk</h3>;
    console.log(orderInput);
  };

  return (
    <>
      <BulkLooseRadioGroup parentCB={currentCBHandler} />
      {orderInput}
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>
                {product.name}
                <div>{orderInput}</div>
              </h3>
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
        <Col md={3}>{orderInput}</Col>
        <Col md={3}>
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
                <Col>
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
                </Col>
                <Col>
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    {<Button onClick={handleDecrement}>-</Button>}
                    {<Button disabled>{counter}</Button>}
                    <Button onClick={handleIncrement}>+</Button>
                  </ButtonGroup>
                </Col>
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
