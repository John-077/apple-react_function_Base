import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Four04 from "../Four04/Four04";

function Singlepage() {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();

  useEffect(() => {
    fetch("/appledata.json")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products.filter(
          (product) => product.product_url === productID
        );
        setProduct(productList);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productID]);
  console.log(product);
  // console.log(productID);
  // console.log(useParams());
  if (product.length) {
  return (
    <div>
      <section className="internal-page-wrapper ">
        <div className="container">
          {product.map((product) => {
            return (
              <div key={product.product_id}>
                <div className="row justify-content-center text-center">
                  <div className="col-12 mt-5 pt-5">
                    <div className="title-wraper iphone">
                      {product.product_name}
                    </div>
                    <div className="brief-description just">
                      {product.product_brief_description}
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100  m-5">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${product.starting_price}`}
                    </div>
                    <div className="monthly-range">{product.price_range}</div>
                    <div className="product-details">
                      {product.product_description}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="product-image">
                      <img src={product.product_img} alt="product" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
} else {
    return <Four04/>;
}
}

export default Singlepage;
