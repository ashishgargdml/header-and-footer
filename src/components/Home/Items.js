import React from "react";
import "../../assets/CSS/item.css";
import { smallRight } from "./images";

const Items = () => {
  return (
    <>
      <section className="banners mb-25">
        <div className="banner-container">
          <div className="card text-bg-dark custom-banners">
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png"
              className="card-img"
              alt="banner-1"
            />
            <div className="card-img-overlay">
              <h4 className="card-title text-black">
                Everyday Fresh & Clean with Our Products
              </h4>
              <p className="card-text">
                <a href="shop-grid-right.html" className="btn btn-xs">
                  Shop Now -{">"}
                </a>
              </p>
            </div>
          </div>
          <div className="card text-bg-dark custom-banners">
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png"
              className="card-img"
              alt="banner-2"
            />
            <div className="card-img-overlay">
              <h4 className="card-title text-black">
                Make your Breakfast Healthy and Easy
              </h4>
              <p className="card-text">
                <a href="shop-grid-right.html" className="btn btn-xs">
                  Shop Now -{">"}
                </a>
              </p>
            </div>
          </div>
          <div className="card text-bg-dark custom-banners">
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png"
              className="card-img"
              alt="banner-3"
            />
            <div className="card-img-overlay">
              <h4 className="card-title text-black">
                The best Organic Products Online
              </h4>
              <p className="card-text">
                <a href="shop-grid-right.html" className="btn btn-xs">
                  Shop Now -{">"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="section-title style-2 wow animate__ animate__fadeIn animated d-flex justify-content-between"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <h3>Popular Products</h3>
        <ul className="nav  links custom-links-list" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="nav-tab-one"
              data-bs-toggle="tab"
              data-bs-target="#tab-one"
              type="button"
              role="tab"
              aria-controls="tab-one"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-two"
              data-bs-toggle="tab"
              data-bs-target="#tab-two"
              type="button"
              role="tab"
              aria-controls="tab-two"
              aria-selected="false"
            >
              Milks &amp; Dairies
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-three"
              data-bs-toggle="tab"
              data-bs-target="#tab-three"
              type="button"
              role="tab"
              aria-controls="tab-three"
              aria-selected="false"
            >
              Coffes &amp; Teas
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-four"
              data-bs-toggle="tab"
              data-bs-target="#tab-four"
              type="button"
              role="tab"
              aria-controls="tab-four"
              aria-selected="false"
            >
              Pet Foods
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-five"
              data-bs-toggle="tab"
              data-bs-target="#tab-five"
              type="button"
              role="tab"
              aria-controls="tab-five"
              aria-selected="false"
            >
              Meats
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-six"
              data-bs-toggle="tab"
              data-bs-target="#tab-six"
              type="button"
              role="tab"
              aria-controls="tab-six"
              aria-selected="false"
            >
              Vegetables
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-seven"
              data-bs-toggle="tab"
              data-bs-target="#tab-seven"
              type="button"
              role="tab"
              aria-controls="tab-seven"
              aria-selected="false"
            >
              Fruits
            </button>
          </li>
        </ul>
      </div>
      <div className="card-container">
        <div className="card">
          <a href="shop-product-right.html">
            <img
              className="default-img card-img-top"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
              alt=""
            />
            <img
              className="hover-img"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
              alt=""
            />
          </a>
          <div className="card-body">
            <p className="card-title">Snack</p>
            <p className="card-text">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </p>
          </div>
        </div>
        <div className="card">
          <a href="shop-product-right.html">
            <img
              className="default-img card-img-top"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
              alt=""
            />
            <img
              className="hover-img"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
              alt=""
            />
          </a>
          <div className="card-body">
            <p className="card-title">Snack</p>
            <p className="card-text">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </p>
          </div>
        </div>
        <div className="card">
          <a href="shop-product-right.html">
            <img
              className="default-img card-img-top"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
              alt=""
            />
            <img
              className="hover-img"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
              alt=""
            />
          </a>
          <div className="card-body">
            <p className="card-title">Snack</p>
            <p className="card-text">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </p>
          </div>
        </div>
        <div className="card">
          <a href="shop-product-right.html">
            <img
              className="default-img card-img-top"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
              alt=""
            />
            <img
              className="hover-img"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
              alt=""
            />
          </a>
          <div className="card-body">
            <p className="card-title">Snack</p>
            <p className="card-text">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </p>
          </div>
        </div>
        <div className="card">
          <a href="shop-product-right.html">
            <img
              className="default-img card-img-top"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
              alt=""
            />
            <img
              className="hover-img"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
              alt=""
            />
          </a>
          <div className="card-body">
            <p className="card-title">Snack</p>
            <p className="card-text">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </p>
          </div>
        </div>
        <div className="card">
          <a href="shop-product-right.html">
            <img
              className="default-img card-img-top"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
              alt=""
            />
            <img
              className="hover-img"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
              alt=""
            />
          </a>
          <div className="card-body">
            <p className="card-title">Snack</p>
            <p className="card-text">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </p>
          </div>
        </div>
        <div className="card">
          <a href="shop-product-right.html">
            <img
              className="default-img card-img-top"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
              alt=""
            />
            <img
              className="hover-img"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
              alt=""
            />
          </a>
          <div className="card-body">
            <p className="card-title">Snack</p>
            <p className="card-text">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
