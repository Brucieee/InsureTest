import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import axios from "axios";

export default function Approval() {
    const { auth, requests } = usePage().props;

    // Local state to track status for each request
    const [statuses, setStatuses] = useState(
        requests.reduce((acc, request) => {
            acc[request.id] = request.status;
            return acc;
        }, {})
    );

    const [loading, setLoading] = useState(false);

    // Check if the user is an admin
    if (!auth.user || auth.user.role !== "admin") {
        return <div>Access Denied</div>;
    }

    // Handle status change for each request
    const handleStatusChange = (id, newStatus) => {
        setLoading(true);

        // API request to update status
        axios
            .post(`/update-inquiry-status/${id}`, { status: newStatus })
            .then((response) => {
                alert(response.data.message);

                // Update status locally after successful update
                setStatuses((prevStatuses) => ({
                    ...prevStatuses,
                    [id]: newStatus,
                }));
            })
            .catch((error) => {
                console.error("Error updating status:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

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
                                            <th>Action</th> {/* Action column */}
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
                                                <th>{statuses[row.id]}</th>
                                                <th>
                                                    {/* Edit button to change status */}
                                                    <select
                                                        value={statuses[row.id] || row.status}
                                                        onChange={(e) =>
                                                            setStatuses((prev) => ({
                                                                ...prev,
                                                                [row.id]: e.target.value,
                                                            }))
                                                        }
                                                        className="select select-bordered"
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="approved">Approved</option>
                                                        <option value="denied">Denied</option>
                                                    </select>
                                                    <button
                                                        onClick={() =>
                                                            handleStatusChange(row.id, statuses[row.id])
                                                        }
                                                        className="btn btn-sm btn-primary ml-2"
                                                        disabled={loading}
                                                    >
                                                        {loading
                                                            ? "Updating..."
                                                            : "Update Status"}
                                                    </button>
                                                </th>
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
