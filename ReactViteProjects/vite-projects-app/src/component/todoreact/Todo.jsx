import React from "react";
import "./style/style.css";
const Todo = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
            <div className="addItems">
              <input
                type="text"
                placeholder="✍ Add Item"
                className="form-control"
              />
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Todo;
