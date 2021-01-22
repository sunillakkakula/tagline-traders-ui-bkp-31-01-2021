import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    //  <input
    //               className={classes.searchInput}
    //               placeholder={"search for products, brands and more"}
    //             />
    //             <div className={classes.searchIconContainer}>
    //               <IoIosSearch
    //                 style={{
    //                   color: "#2874f0",
    //                 }}
    //               />
    //             </div>
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        style={{
          width: "518px",
          border: "0",
          height: "36px",
          outline: "none",
          boxSizing: "border-box",
          padding: "0 10px",
        }}
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products...."
      ></Form.Control>
      <div
        style={{
          display: "flex",
          flex: "1",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IoIosSearch
          style={{
            color: "#2874f0",
          }}
        ></IoIosSearch>
      </div>
    </Form>
  );
};

export default SearchBox;
