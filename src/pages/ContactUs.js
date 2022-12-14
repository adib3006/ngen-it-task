import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swal } from 'sweetalert2';

const ContactUs = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/contact-us/queries');
        Swal.fire(
            'Thanks !',
            'We will get back to you shortly.',
            'success'
        );
    }
    return (
        <div>
            <h1 className='text-center my-2'>Contact Us</h1>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit} className='w-75 w-md-50'>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required/>
                    </div>
                    <div class="mb-3">
                        <label for="text" class="form-label">Your Message</label>
                        <textarea type="text" class="form-control" id="text" required/>
                    </div>
                    <div class="mb-3">
                    <label for="queries">Choose an option:</label>
                        <select name="queries" id="queries" className='w-md-25 ms-3 py-2 px-3'>
                            <option value="support">Support</option>
                            <option value="billing">Billing</option>
                            <option value="solution">Solution</option>
                            <option value="service">Service</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;