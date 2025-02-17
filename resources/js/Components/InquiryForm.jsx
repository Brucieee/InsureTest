import React from "react";
import axios from "axios";

const InquiryForm = ({ formData, setFormData, setModalOpen }) => {
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.message
        ) {
            alert("Please fill out all fields");
            return;
        }

        try {
            // Make the POST request to the Laravel backend
            const response = await axios.post("/submit-inquiry", {
                topic: formData.topic,
                product: formData.product,
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                message: formData.message,
            });

            // Handle success (e.g., show a success message or redirect)
            console.log(response.data.message);
            alert("Inquiry submitted successfully!");
            setModalOpen(false); // Close the modal after submission
        } catch (error) {
            // Log the full error object
            console.error(
                "Error submitting the form:",
                error.response || error
            );
            alert("Something went wrong. Please try again.");
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Close the modal when cancel button is clicked
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="modal modal-open">
                <div className="modal-box w-full max-w-lg">
                    <h3 className="text-xl font-semibold mb-4">Send Inquiry</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="topic"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Topic
                            </label>
                            <input
                                type="text"
                                id="topic"
                                value={formData.topic}
                                readOnly
                                className="input input-bordered w-full mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="product"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Product
                            </label>
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
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            firstName: e.target.value,
                                        })
                                    }
                                    className="input input-bordered w-full mt-2"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            lastName: e.target.value,
                                        })
                                    }
                                    className="input input-bordered w-full mt-2"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="input input-bordered w-full mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                className="textarea textarea-bordered w-full mt-2"
                            />
                        </div>

                        <div className="modal-action">
                            <button
                                type="button"
                                className="btn"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Submit Inquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InquiryForm;
