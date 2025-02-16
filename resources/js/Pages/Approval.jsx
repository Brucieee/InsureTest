import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Approval() {
    const { auth, requests } = usePage().props; // Ensure auth is included

    // if (!auth.user || auth.user.role !== "admin") {
    //     return ;
    // }


    if (!auth.user || auth.user.role !== "admin") {
        return ;
    }

    
    console.log(requests);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Approval Table
                </h2>
            }
        >
            <Head title="Approval" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Topic</th>
                                            <th>Product</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Message</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {requests.map((row) => (
                                            <tr key={row.id} className="bg-base-200">
                                                <th>{row.id}</th>
                                                <th>{row.topic}</th>
                                                <th>{row.product}</th>
                                                <th>{row.first_name}</th>
                                                <th>{row.last_name}</th>
                                                <th>{row.email}</th>
                                                <th>{row.message}</th>
                                                <th>{row.status}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
