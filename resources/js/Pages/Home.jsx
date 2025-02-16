import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Welcome to InsureTest
                </h2>
            }
        >
            <Head title="Home" />

            {/* Hero Section */}
            <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">Protect What Matters Most</h1>
                        <p className="mb-5">Our comprehensive insurance plans provide peace of mind for you and your family.</p>
                        <button className="btn btn-primary">Explore More</button>
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="py-12 bg-gray-50">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold text-center text-gray-800">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {/* Card 1 */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <h3 className="card-title">Reliable Coverage</h3>
                                <p>Our insurance plans are designed to provide you with the most reliable coverage.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <h3 className="card-title">Affordable Prices</h3>
                                <p>Get the best coverage at competitive prices. We believe in making insurance affordable.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <h3 className="card-title">Fast and Easy Claims</h3>
                                <p>We make the claims process simple and fast, so you can focus on what really matters.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold text-center text-gray-100">Customer Testimonials</h2>
                    <div className="flex flex-col sm:flex-row justify-between gap-8 mt-8">
                        {/* Testimonial 1 */}
                        <div className="card bg-base-100 shadow-xl p-6">
                            <p className="text-gray-100">"The best insurance company I have ever worked with. Their customer service is exceptional!"</p>
                            <div className="mt-4 text-right text-gray-100">- Jane Doe</div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="card bg-base-100 shadow-xl p-6">
                            <p className="text-gray-100">"Their plans gave me peace of mind knowing that my family is well taken care of."</p>
                            <div className="mt-4 text-right text-gray-100">- John Smith</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="py-12 bg-gray-800 text-white text-center">
                <h2 className="text-3xl font-semibold">Ready to Get Started?</h2>
                <p className="mb-5">Contact us today to find the right insurance plan for you.</p>
                <button className="btn btn-primary">Contact Us</button>
            </div>
        </AuthenticatedLayout>
    );
}
