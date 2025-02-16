import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Products() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [formData, setFormData] = useState({
        topic: '',
        product: '',
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleInquireClick = (product) => {
        setSelectedProduct(product);
        setFormData({
            ...formData,
            product: product,
            topic: `${product} Inquiry`
        });
        setModalOpen(true); // Open modal when a product is selected
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Close the modal when cancel button is clicked
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Here you would submit the form data to your backend
        console.log('Form Submitted:', formData);
        setModalOpen(false); // Close the modal after submitting the form
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Insurance Products
                </h2>
            }
        >
            <Head title="Insurance Products" />
            
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {/* Insurance Product 1 */}
                        <div className="card bg-gray-800 w-96 shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img
                                    src="/assets/images/car_insurance.png"
                                    alt="Car Insurance"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Car Insurance</h2>
                                <p>Protect your vehicle against accidents, theft, and damage.</p>
                                <div className="card-actions">
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => handleInquireClick('Car Insurance')}
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Insurance Product 2 */}
                        <div className="card bg-gray-800 w-96 shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img
                                    src="/assets/images/home_insurance.png"
                                    alt="Home Insurance"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Home Insurance</h2>
                                <p>Secure your home and belongings from fire, theft, and natural disasters.</p>
                                <div className="card-actions">
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => handleInquireClick('Home Insurance')}
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Insurance Product 3 */}
                        <div className="card bg-gray-800 w-96 shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img
                                    src="/assets/images/health_insurance.png"
                                    alt="Health Insurance"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Health Insurance</h2>
                                <p>Cover medical expenses, hospitalization, and other healthcare needs.</p>
                                <div className="card-actions">
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => handleInquireClick('Health Insurance')}
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Insurance Product 4 */}
                        <div className="card bg-gray-800 w-96 shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img
                                    src="/assets/images/travel_insurance.png"
                                    alt="Travel Insurance"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Travel Insurance</h2>
                                <p>Get coverage for unexpected travel interruptions and medical expenses.</p>
                                <div className="card-actions">
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => handleInquireClick('Travel Insurance')}
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Insurance Product 5 */}
                        <div className="card bg-gray-800 w-96 shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img
                                    src="/assets/images/life_insurance.png"
                                    alt="Life Insurance"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Life Insurance</h2>
                                <p>Provide financial security for your loved ones after your passing.</p>
                                <div className="card-actions">
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => handleInquireClick('Life Insurance')}
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Insurance Product 6 */}
                        <div className="card bg-gray-800 w-96 shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img
                                    src="/assets/images/pet_insurance.png"
                                    alt="Pet Insurance"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Pet Insurance</h2>
                                <p>Cover medical expenses for your pets, ensuring their well-being.</p>
                                <div className="card-actions">
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => handleInquireClick('Pet Insurance')}
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal for Inquiry Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="modal modal-open">
                        <div className="modal-box w-full max-w-lg">
                            <h3 className="text-xl font-semibold mb-4">Send Inquiry</h3>
                            <form onSubmit={handleFormSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Topic</label>
                                    <input
                                        type="text"
                                        id="topic"
                                        value={formData.topic}
                                        readOnly
                                        className="input input-bordered w-full mt-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="product" className="block text-sm font-medium text-gray-700">Product</label>
                                    <input
                                        type="text"
                                        id="product"
                                        value={formData.product}
                                        readOnly
                                        className="input input-bordered w-full mt-2"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            className="input input-bordered w-full mt-2"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="input input-bordered w-full mt-2"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="input input-bordered w-full mt-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="textarea textarea-bordered w-full mt-2"
                                    />
                                </div>

                                <div className="modal-action">
                                    <button type="button" className="btn" onClick={handleCloseModal}>Cancel</button>
                                    <button type="submit" className="btn btn-primary">Submit Inquiry</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
