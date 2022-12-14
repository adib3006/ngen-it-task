import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Dashbaord = () => {
    const [show, setShow] = useState(true);
    return (
        <div className='d-flex'>
            <button className={`${show ? 'd-none' : 'btn mx-3'}`} onClick={() => setShow(!show)}> Click to expand<FaArrowRight/></button>
            <div className={`${show ? 'd-block px-3 border rounded bg-light' : 'd-none'}`}>
                <div>
                    <button className='btn ms-5' onClick={() => setShow(!show)}><FaArrowLeft /></button>
                    <ul>
                        <li>Add</li>
                        <li>Delete</li>
                        <li>Options</li>
                        <li>Update</li>
                    </ul>
                </div>
            </div>
            <div className='col-11'>
                <div className='d-flex ms-5 ps-5'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>MacBook</td>
                                <td>$1500</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>I Phone 14</td>
                                <td>$900</td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>I Phone X</td>
                                <td>$600</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>I Phone X</td>
                                <td>$600</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>I Phone X</td>
                                <td>$600</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>I Phone X</td>
                                <td>$600</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>I Phone X</td>
                                <td>$600</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashbaord;