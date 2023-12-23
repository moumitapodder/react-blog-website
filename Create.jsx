import React, { useState } from "react";
function Create() {
  const [values, setvalues] = useState({ name: "", desc: "", img: "" });
  function convertFormToJson(event) {
    event.preventDefault();
    console.log(event.target);
  }

  // Use the JSON object as needed

  return (
    <div className="form-container">
      <form onSubmit={convertFormToJson}>
        <div className="addnewblog">
          <h2>Add a New Blog</h2>
        </div>
        <div>
          <label for="title">Title:</label>
          <input
            type="text"
            value={values.name}
            onChange={(e) => {
              console.log(e.target.value);
              setvalues((a) => {
                return { ...a, name: e.target.value };
              });
            }}
            name="title"
            placeholder="Write Title"
          ></input>
        </div>
        <div>
          <label for="description">Description:</label>
          <input
            type="text"
            values={values.desc}
            onChange={(e) => {
              console.log(e.target.value);
              setvalues((a) => {
                return { ...a, name: e.target.values };
              });
            }}
            name="desc"
            placeholder="Write Description"
          ></input>
        </div>

        <div className="file">
          <label for="file">
            Input File:
            <input type="file" name="file" placeholder="File"></input>
          </label>
        </div>
        <button className="newblog-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
