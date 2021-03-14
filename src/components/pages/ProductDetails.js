import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './ProductDetails.scss';

const ProductDetails = () => {
    const [product, setProducts] = useState({
        title: "",
        price: "",
        description: "",
        imageUrl: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadProducts();
    }, []);
    const loadProducts = async () => {
        const res = await axios.get(`http://localhost:3003/products/${id}`);
        setProducts(res.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                    <h1 className="my-5"> Product Details </h1>
                    <div className="product-details">
                        <div className="card">
                            <img className="card-img-top img-fluid" src={product.imageUrl} alt={product.title} />
                            <div className="card-body text-left">
                                <h5 className="card-title text-secondary"> {product.title} </h5>
                                <div className="card-text mb-3 text-secondary"> AED {product.price}</div>
                                <p className="product-description">
                                    {product.description} 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;