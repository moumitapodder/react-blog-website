import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const url = "https://dummyjson.com/products/" + id;
    axios
      .get(url)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  if (post) {
    return (
      <>
        <div className="detail-post-container">
          <div className="title-description">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
          <div className="images-container">
            {post.images?.map((image, index) => (
              <img src={image} alt="image" key={index}></img>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Detail;
