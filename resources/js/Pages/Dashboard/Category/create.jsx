import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';
import BreadCrumbs from '@/Components/BreadCrumbs';
import SideNav from '@/Components/SideNav';
import Pagination from '@/Components/Pagination';

const Create = ({ category }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/dashboard/category');
    };

    return (
        <>
            <Head title='Create category' />
            <div className="bg-gray-50 transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px]">
                {/* <!-- ========== MAIN CONTENT ========== --> */}
                <main id="content">
                    <BreadCrumbs />

                    <SideNav />

                    {/* <!-- Content --> */}
                    <div className="w-full">
                        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                <div className="mx-auto max-w-2xl">
                                    <div className="text-center">
                                        <h2 className="text-xl text-gray-800 font-bold sm:text-3xl capitalize font-heading">
                                            Create Category
                                        </h2>
                                    </div>

                                    <div className="mt-5 p-4 bg-white border rounded-xl sm:mt-10 md:p-10">
                                        <form onSubmit={handleSubmit}>
                                            {/* Title */}
                                            <div className="mb-4 sm:mb-8">
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                                    Category Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={data.name}
                                                    onChange={(e) => setData("name", e.target.value)}
                                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border"
                                                    placeholder="Category Name"
                                                />
                                                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                                            </div>

                                            <div className="mt-6 grid">
                                                <button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="w-full py-3 px-4 text-sm font-medium rounded-lg bg-secondary text-white hover:bg-secondary-light transition duration-200"
                                                >
                                                    {processing ? "Saving..." : "Save Changes"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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

export default Create;
