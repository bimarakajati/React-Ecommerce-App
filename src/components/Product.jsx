import React from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";

const Product = () => {
    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{ width: "18rem", border: "2px solid #2d3436", borderRadius: "10px" }}>
                {/* <div class="card my-3 py-4" key={item.id} style={{ width: "16rem", border: "2px solid #2d3436", borderRadius: "10px" }}> */}
                <img src={item.img} class="card-img-top" alt={item.title} />
                <div class="card-body text-center">
                    <h5 class="card-title">{item.title}</h5>
                    <p className="lead">${item.price}</p>
                    <NavLink to={`/products/${item.id}`} class="btn btn-outline-danger">
                        Beli
                    </NavLink>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Produk</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">{DATA.map(cardItem)}</div>
            </div>
        </div>
    );
};

export default Product;
