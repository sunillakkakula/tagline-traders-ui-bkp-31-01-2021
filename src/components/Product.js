import React from "react";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { BiRupee } from "react-icons/bi";

const Product = ({ product }) => {
  return (
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
            marginLeft: "5em",

            alignContent: "center",
          }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <Row>
              <strong>{product.name}</strong>
              <strong style={{ marginLeft: "2.5em" }}>
                <BiRupee />
                {product.price}
              </strong>
            </Row>
          </Card.Title>
        </Link>
        <Row>
          <Button
            variant="contained"
            disabled
            className="d-flex align-items-start"
            style={{
              marginLeft: "2em",
            }}
          >
            1 kg
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{
              marginLeft: "0.5em",
            }}
          >
            Add
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Product;
