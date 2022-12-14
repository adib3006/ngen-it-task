import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import apple from '../assets/apple.jpg';
import laptop from '../assets/laptop.json';
import Lottie from "lottie-react";

const ProductInfo = () => {
    const [item, setItem] = useState({
        title: "",
        quantity: 0,
        price: 0
    });

    const handleAdd = () => {
        const newQuantity = item.quantity + 1;
        setItem({
            title: "MacBook",
            quantity: newQuantity,
            price: 1500
        })
    }

    const handlePay = () => {
        setItem({
            title: "",
            quantity: 0,
            price: 0
        });
        Swal.fire(
            'Thanks !',
            'Your delivery will be done within 2 working days.',
            'success'
        );
    }

    const handleMinus = () => {
        const newQuantity = item.quantity - 1;
        setItem({
            title: "MacBook",
            quantity: newQuantity,
            price: 1500
        })
    }

    const handlePlus = () => {
        const newQuantity = item.quantity + 1;
        setItem({
            title: "MacBook",
            quantity: newQuantity,
            price: 1500
        })
    }
    return (
        <div className='d-md-flex'>
            <div className='col-12 col-md-9 container d-md-flex mt-5'>
                <div className='col-12 col-md-6 px-5'>
                    <img className='img-fluid rounded border' src={apple} alt="" />
                    <div className='w-75'><Lottie animationData={laptop} loop={true}></Lottie></div>
                </div>
                <div className='col-12 col-md-6 px-5'>
                    <div className='d-flex justify-content-between aling-items-center'>
                        <span style={{ color: "#f7782a" }}>Laptop</span>
                        <div className='d-flex'>
                            <FaStar style={{ color: "#f7782a" }} />
                            <FaStar style={{ color: "#f7782a" }} />
                            <FaStar style={{ color: "#f7782a" }} />
                            <FaStar style={{ color: "#f7782a" }} />
                            <FaStar style={{ color: "#f7782a" }} />
                        </div>
                    </div>
                    <h2 className='my-3'>MacBook Pro M1</h2>
                    <div className='d-flex justify-content-between aling-items-center my-3'>
                        <div>
                            <p className='mb-0'>Ram</p>
                            <h5 className='mt-2'>16 GB</h5>
                        </div>
                        <div>
                            <p className='mb-0'>Storage</p>
                            <h5 className='mt-2'>1 TB</h5>
                        </div>
                        <div>
                            <p className='mb-0'>Chipset</p>
                            <h5 className='mt-2'>M1</h5>
                        </div>
                    </div>
                    <div className='d-flex aling-items-center mt-20'>
                        <h2>$1500</h2>
                        <button onClick={handleAdd} className='btn btn-primary rounded-pill ms-5'>
                            Add to Cart
                        </button>
                    </div>
                    <p className='my-5'>Cupertino, California — Apple today unveiled an all-new 16-inch MacBook Pro — the world’s best pro notebook — designed for developers, photographers, filmmakers, scientists, music producers and anyone who relies on a Mac to create their life’s best work. The all-new MacBook Pro features a brilliant 16-inch Retina Display, the latest 8-core processors, up to 64GB of memory, next-generation graphics with up to 8GB of VRAM and a new advanced thermal design, making it the most powerful MacBook Pro ever.</p>
                </div>
            </div>
            <div className='col-12 col-md-3 ps-2 bg-light h-100 pb-5' style={{height : "100vh"}}>
                <h1 className='mb-2 mt-3 text-center'>Cart</h1>
                <p className='mb-2 fw-bold'>Title: {item?.title}</p>
                <p className='mb-5 fw-bold'>Price : ${item?.price} X {item?.quantity} = ${(item?.price) * (item?.quantity)}</p>
                <div className='d-flex justify-content-center'>
                    <button onClick={handlePlus} className='btn btn-primary rounded-pill'>+</button>
                    <button onClick={handlePay} className={`btn btn-primary rounded-pill item-center px-4 mx-3 ${(item.quantity) ? "" : 'disabled'}`}>Pay</button>
                    <button onClick={handleMinus} className={`btn btn-primary rounded-pill item-center ${(item.quantity) ? "" : 'disabled'}`}>-</button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;