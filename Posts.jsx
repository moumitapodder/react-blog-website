import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./styles.css";
import data from "./data/data.json";

function Posts() {
  const [blogs, setBlogs] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get("C:BlogWebsitemy-appsrcdatadata.json")
      .then((res) => {
        setBlogs(res.data.products);
        setRecords(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  const getInputData = (event) => {
    setBlogs(
      records.filter((r) =>
        r.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  console.log(data);
  return (
    <div className="posts">
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          onInput={getInputData}
          className="search-input"
        />
      </div>
      <div className="blog-icon">
        <h3>Blogs</h3>
        <i className="fa fa-calculator"></i>
      </div>
      <div className="posts-container">
        {data.products.map((blog, index) => (
          <Post imgSrc={blog.images[0]} title={blog.title} id={blog.id} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
