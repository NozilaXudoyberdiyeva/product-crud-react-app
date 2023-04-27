import React, { Fragment, useState } from "react";
import Card from "../Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const addProduct = (evt) => {
    evt.preventDefault();
    const [product_name, product_price, product_weight, product_color] =
      evt.target.elements;
    const newProduct = {
      id: products.length + 1,
      name: product_name.value.trim(),
      price: product_price.value.trim(),
      weight: product_weight.value.trim(),
      color: product_color.value.trim(),
    };
    if (selectedIndex >= 0) {
      products[selectedIndex] = newProduct;
      setSelectedIndex(-1);
    } else {
      setProducts([...products, newProduct]);
    }
    evt.target.reset();
    product_name.focus();
  };
  const deleteProduct = (id) => {
    // console.log(id);
    const filteredProduct = products.filter((product) => product.id !== id);
    setProducts([...filteredProduct]);
  };
  const updateProduct = (index) => {
    setSelectedIndex(index);
  };
  //   console.log(products);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-3 my-5">
            <div className="card">
              <div className="card-header">
                <h2>Add product</h2>
              </div>
              <div className="card-body">
                <form onSubmit={(evt) => addProduct(evt)}>
                  <input
                    className="form-control mb-3"
                    type="text"
                    name="product_name"
                    placeholder="Product name"
                    // defaultValue={products[selectedIndex]?.name}
                    required
                  />
                  <input
                    className="form-control mb-3"
                    type="number"
                    name="product_price"
                    placeholder="Product price"
                    // defaultValue={products[selectedIndex]?.price}
                    required
                  />
                  <input
                    className="form-control mb-3"
                    type="number"
                    name="product_weight"
                    placeholder="Product weight"
                    // defaultValue={products[selectedIndex]?.weight}
                    required
                  />
                  <input
                    className="form-control mb-3"
                    type="color"
                    name="product_color"
                    placeholder="Product color"
                    // defaultValue={products[selectedIndex]?.color}
                    required
                  />
                  <button className="btn btn-primary w-100" type="submit">
                    Add product
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-9 my-5">
            <div className="row">
              {products.length > 0 &&
                products.map((product, index) => (
                  <div className="col-4 mb-3" key={index}>
                    <Card
                      product={product}
                      index={index}
                      deleteProduct={deleteProduct}
                      updateProduct={updateProduct}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
