export default function MyInquiries() {
    const { inquiries } = usePage().props;

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">My Inquiries</h2>}
        >
            <Head title="My Inquiries" />

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
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {inquiries.map((inquiry) => (
                                            <tr key={inquiry.id} className="bg-base-200">
                                                <th>{inquiry.id}</th>
                                                <th>{inquiry.topic}</th>
                                                <th>{inquiry.product}</th>
                                                <th>{inquiry.status}</th>
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
