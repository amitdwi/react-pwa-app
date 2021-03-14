import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Men.scss';

const Men = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:3003/products");
        console.log(result);
        setProducts(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto mt-5">
                    <h1> Shop for Men </h1>
                    <div className="row">

                        {products.map((product, index) => (
                            <div className="col-12 col-md-6 mt-5">
                                <Link className="product-link" to={`/products/${product.id}`}>
                                    <div className="card">
                                        <img className="card-img-top img-fluid" src={product.imageUrl} alt={product.title} />
                                        <div className="card-body">
                                            <h5 className="card-title text-secondary"> {product.title} </h5>
                                            <div className="card-text mb-3 text-secondary"> AED {product.price}</div>
                                            <button className="btn btn-outline-secondary"> View Details </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
                </div>
            </div>
        </div>
    );
}

export default Men;