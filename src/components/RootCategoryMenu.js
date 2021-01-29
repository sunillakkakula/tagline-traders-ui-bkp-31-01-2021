import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { listRootCategories } from "../actions/rootCategoryAction";
import { listCategories } from "../actions/categoryAction";
import { Table } from "@material-ui/core";
import Message from "./Message";

const RootCategoryMenu = ({ history }) => {
  const dispatch = useDispatch();
  const rootCategoryList = useSelector((state) => state.rootCategoryList);
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, rootCategories } = rootCategoryList;
  const { categories } = categoryList;
  useEffect(() => {
    dispatch(listRootCategories());
    dispatch(listCategories());
  }, [dispatch, history]);
  return (
    <div id="container">
      <>
        {/* <h1>Root Categories</h1> */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            {/* <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rootCategories.map((eachRootCategory) => (
                  <tr key={eachRootCategory._id}>
                    <td>{eachRootCategory._id}</td>
                    <td>{eachRootCategory.name}</td>
                    <td>{eachRootCategory.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h1> Categories</h1>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((eachCategory) => (
                  <tr key={eachCategory._id}>
                    <td>{eachCategory._id}</td>
                    <td>{eachCategory.name}</td>
                    <td>{eachCategory.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table> */}
          </>
        )}
      </>
    </div>
  );
};

export default RootCategoryMenu;
