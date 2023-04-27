import React, { Fragment } from "react";
// import Products from "../Products";

const Card = (props) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h3>{props.product.name}</h3>
        </div>
        <div className="card-body">
          <p>Weight: {props.product.weight} kg</p>
          <p style={{ color: props.product.color }}>
            Color: {props.product.color}
          </p>
          <p>Price: {props.product.price} $</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => props.deleteProduct(props.product.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-success"
            type="button"
            onClick={props.updateProduct(props.index)}
          >
            Edit
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
