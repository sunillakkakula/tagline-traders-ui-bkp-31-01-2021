import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import Writeup from "../components/Writeup";
import { listProducts } from "../actions/productAction";
import DashboardGrid from "./DashboardGrid";
import MainCarousel from "./MainCarousel";
import { Divider } from "@material-ui/core";

const DashboardScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Writeup />
      <DashboardGrid style={{ marginBottom: "5rem" }} />
      <MainCarousel style={{ marginTop: "5rem" }} />
    </>
  );
};

export default DashboardScreen;
