import { Head, Link } from '@inertiajs/react';
import React from 'react';
import BreadCrumbs from '@/Components/BreadCrumbs';
import SideNav from '@/Components/SideNav';

const Index = ({ categories }) => {
    return (
        <>
            <Head title='Category List' />
            <div className="bg-gray-50 transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px]">
                {/* <!-- ========== MAIN CONTENT ========== --> */}
                <main id="content">
                    <BreadCrumbs />

                    <SideNav />

                    {/* <!-- Content --> */}
                    <div className="w-full">
                        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                            <div>
                                <h1>Categories</h1>
                                <Link href="/category/create" className="btn btn-primary">Create Category</Link>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.map(category => (
                                            <tr key={category.id}>
                                                <td>{category.id}</td>
                                                <td>{category.name}</td>
                                                <td>
                                                    <Link href={`/category/${category.id}/edit`} className="btn btn-secondary">Edit</Link>
                                                    <Link
                                                        href={`/category/${category.id}`}
                                                        method="delete"
                                                        as="button"
                                                        className="btn btn-danger"
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Content --> */}
                </main>
                {/* <!-- ========== END MAIN CONTENT ========== --> */}
            </div>
        </>
    );
}

export default Index;
