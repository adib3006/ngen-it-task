import React from 'react';

const ContactTable = () => {
    return (
        <div>
            <h1 className='text-center my-2'>Your Contact Queries</h1>
            <div className='d-flex justify-content-center'>
            <table className="table table-hover w-75 w-md-50">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Option</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>mac@book.com</td>
                        <td>Support</td>
                        <td>I am facing a problem regarding my account.</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>john@smith.com</td>
                        <td>Billing</td>
                        <td>I need a refund on a product.</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>mark@jon.com</td>
                        <td>Solution</td>
                        <td>I need a full enterprise solution</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>leo@messi.com</td>
                        <td>Service</td>
                        <td>Do you provide softwares?</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>mac@book.com</td>
                        <td>Support</td>
                        <td>I am facing a problem regarding my account.</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>john@smith.com</td>
                        <td>Billing</td>
                        <td>I need a refund on a product.</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>mark@jon.com</td>
                        <td>Solution</td>
                        <td>I need a full enterprise solution</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>leo@messi.com</td>
                        <td>Service</td>
                        <td>Do you provide softwares?</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ContactTable;