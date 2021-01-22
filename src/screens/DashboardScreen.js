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
      <Meta />
      {!keyword ? (
        <Writeup />
      ) : (
        <Link to="/" classNameName="btn btn-light">
          Go Back
        </Link>
      )}
      <div className="_2pi5LC col-12-12" style={{ padding: "0px 0px 10px" }}>
        <div
          className="_2oNtQM"
          data-tkid="M_f36c3225-8644-4475-bc34-96ac70b791de_12"
        >
          <div
            className="qrCnTo"
            style={{ paddingTop: "28.76%", width: "100%" }}
          >
            <a
              className="_28Go3e _2JsIUT"
              href="/grocery/~cs-80c1wez06o/pr?sid=73z&amp;marketplace=GROCERY&amp;collection-tab-name=Top+75+Deals&amp;otracker=clp_banner_1_12.banner.BANNER_grocery-supermart-store_HW2NZVH7T32S"
            >
              <div
                className="_1bEAQy _2iN8uD"
                style={{ paddingTop: "28.76%", width: "100%" }}
              >
                <img
                  className="_2OHU_q aA9eLq"
                  alt="Hyd DT banner "
                  srcSet="https://rukminim1.flixcart.com/flap/3600/3600/image/3dcbe3f2e52d2d94.jpg?q=80 2x, https://rukminim1.flixcart.com/flap/1800/1800/image/3dcbe3f2e52d2d94.jpg?q=80 1x"
                  src="https://rukminim1.flixcart.com/flap/1800/1800/image/3dcbe3f2e52d2d94.jpg?q=80"
                  data-tkid="M_f36c3225-8644-4475-bc34-96ac70b791de_12.HW2NZVH7T32S"
                />
                <img
                  className="kJjFO0 _3DIhEh"
                  src="https://rukminim1.flixcart.com/flap/50/50/image/3dcbe3f2e52d2d94.jpg?q=50"
                  alt="Hyd DT banner "
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <ProductCarousel /> */}
    </>
  );
};

export default DashboardScreen;
