import BreadCrumbs from '@/Components/BreadCrumbs';
import SideNav from '@/Components/SideNav';
import React, { useState } from "react";
import { useForm, usePage, } from "@inertiajs/react";

const Create = () => {
    const { categories } = usePage().props; // Categories passed from the controller
    const { data, setData, post, errors, processing } = useForm({
        title: "",
        content: "",
        category_id: "",
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("blog.store")); // POST to the `store` route
    };
    return (
        <>
            <div className="bg-gray-50 transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px]">
                {/* <!-- ========== MAIN CONTENT ========== --> */}
                <main id="content">
                    <BreadCrumbs />

                    <SideNav />

                    {/* <!-- Content --> */}
                    <div className="w-full">
                        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                            {/* <!-- Comment Form --> */}
                            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                <div class="mx-auto max-w-2xl">
                                    <div class="text-center">
                                        <h2 class="text-xl text-gray-800 font-bold sm:text-3xl capitalize font-heading">
                                            Create new blog post
                                        </h2>
                                    </div>

                                    {/* <!-- Card --> */}
                                    <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-4 sm:mb-8">
                                                <label htmlFor="title" className="block mb-2 text-sm font-medium">Title</label>
                                                <input
                                                    type="text"
                                                    id="title"
                                                    value={data.title}
                                                    onChange={(e) => setData("title", e.target.value)}
                                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                    placeholder="Enter Blog Title" />
                                                {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                                            </div>

                                            <div className="mb-4">
                                                <label className="block text-sm font-medium mb-2" htmlFor="category">
                                                    Category
                                                </label>
                                                <select
                                                    id="category"
                                                    value={data.category_id}
                                                    onChange={(e) => setData("category_id", e.target.value)} class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                                    <option selected="">Select a category</option>
                                                    {categories.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.category_id && <div className="text-red-500 text-sm">{errors.category_id}</div>}
                                            </div>
                                            

                                            <div>
                                                <label htmlFor="content" className="block mb-2 text-sm font-medium">Content</label>
                                                <div class="mt-1">
                                                    <textarea
                                                        id="content"
                                                        value={data.content}
                                                        onChange={(e) => setData("content", e.target.value)}
                                                        name="content"
                                                        rows="6"
                                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                        placeholder="Enter blog content"
                                                    ></textarea>
                                                    {errors.content && <div className="text-red-500 text-sm">{errors.content}</div>}
                                                </div>
                                                {/* Image Upload */}
                                                <div className="mb-4 mt-6">
                                                    <label className="block">
                                                        <span className="sr-only">Choose Blog Image</span>
                                                        <input
                                                            type="file"
                                                            id="image"
                                                            onChange={(e) => setData("image", e.target.files[0])}
                                                            className="block w-full text-sm text-gray-500
                                                            file:me-4 file:py-2 file:px-4
                                                            file:rounded-lg file:border-0
                                                            file:text-sm file:font-semibold
                                                            file:bg-blue-600 file:text-white
                                                            hover:file:bg-blue-700
                                                            file:disabled:opacity-50 file:disabled:pointer-events-none
                                                            dark:text-neutral-500
                                                            dark:file:bg-blue-500
                                                            dark:hover:file:bg-blue-400
                                                        "/>
                                                    </label>
                                                    {errors.image && <div className="text-red-500 text-sm">{errors.image}</div>}
                                                </div>
                                            </div>

                                            <div class="mt-6 grid">
                                                <button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                                    {processing ? "Saving..." : "Save Blog Post"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- End Card --> */}
                                </div>
                            </div>
                            {/* <!-- End Comment Form --> */}
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
