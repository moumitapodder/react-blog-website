import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Post({ imgSrc, title, id }) {
  return (
    <>
      <Link to={`/read/${id}`}>
        <img
          src={imgSrc}
          alt="asas"
          width="100%"
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <div style={{ textAlign: "center" }}>{title}</div>
      </Link>
    </>
  );
}

export default Post;
