import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import InquiryForm from "@/Components/InquiryForm"; // Import the new InquiryForm component

export default function Products() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [formData, setFormData] = useState({
        topic: "",
        product: "",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleInquireClick = (product) => {
        setSelectedProduct(product);
        setFormData({
            ...formData,
            product: product,
            topic: `${product} Inquiry`,
        });
        setModalOpen(true); // Open modal when a product is selected
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
                        {/* Car Insurance */}
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
                                <p>
                                    Protect your vehicle against accidents,
                                    theft, and damage.
                                </p>
                                <div className="card-actions">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            handleInquireClick("Car Insurance")
                                        }
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Health Insurance */}
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
                                <p>
                                    Get coverage for medical expenses, including
                                    hospital stays, treatments, and surgeries.
                                </p>
                                <div className="card-actions">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            handleInquireClick(
                                                "Health Insurance"
                                            )
                                        }
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Life Insurance */}
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
                                <p>
                                    Ensure financial security for your loved
                                    ones in the event of your passing.
                                </p>
                                <div className="card-actions">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            handleInquireClick("Life Insurance")
                                        }
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Home Insurance */}
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
                                <p>
                                    Protect your home and belongings from fire,
                                    theft, and natural disasters.
                                </p>
                                <div className="card-actions">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            handleInquireClick("Home Insurance")
                                        }
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Travel Insurance */}
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
                                <p>
                                    Stay covered for unexpected incidents while
                                    traveling, including medical emergencies and
                                    trip cancellations.
                                </p>
                                <div className="card-actions">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            handleInquireClick(
                                                "Travel Insurance"
                                            )
                                        }
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pet Insurance */}
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
                                <p>
                                    Ensure your furry friend’s medical expenses
                                    are covered with a reliable pet insurance
                                    plan.
                                </p>
                                <div className="card-actions">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            handleInquireClick("Pet Insurance")
                                        }
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
                <InquiryForm
                    formData={formData}
                    setFormData={setFormData}
                    setModalOpen={setModalOpen}
                />
            )}
        </AuthenticatedLayout>
    );
}
