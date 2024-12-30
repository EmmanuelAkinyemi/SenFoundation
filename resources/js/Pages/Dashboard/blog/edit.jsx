import { Head } from '@inertiajs/react';
import BreadCrumbs from '@/Components/BreadCrumbs';
import SideNav from '@/Components/SideNav';
import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";

const Edit = ({ blog, categories }) => {
    const { data, setData, put, processing, errors } = useForm({
        title: blog.title,
        content: blog.content,
        category: blog.category_id || '', // Use category_id for mapping
        image: null, // For new uploads
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('blog.update', blog.id)); // Update blog
    };

    useEffect(() => {
        setData({
            ...data,
            title: blog.title,
            content: blog.content,
            category: blog.category_id || '',
        });
    }, [blog]);

    return (
        <>
            <Head title={`Edit Blog - ${blog.title}`} />
            <div className="bg-gray-50 transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px]">
                <main id="content">
                    <BreadCrumbs />
                    <SideNav />

                    <div className="w-full">
                        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                <div className="mx-auto max-w-2xl">
                                    <div className="text-center">
                                        <h2 className="text-xl text-gray-800 font-bold sm:text-3xl capitalize font-heading">
                                            Edit Blog Post
                                        </h2>
                                    </div>

                                    <div className="mt-5 p-4 bg-white border rounded-xl sm:mt-10 md:p-10">
                                        <form onSubmit={handleSubmit}>
                                            {/* Title */}
                                            <div className="mb-4 sm:mb-8">
                                                <label htmlFor="title" className="block mb-2 text-sm font-medium">
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    id="title"
                                                    value={data.title}
                                                    onChange={(e) => setData("title", e.target.value)}
                                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border"
                                                    placeholder="Enter Blog Title"
                                                />
                                                {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                                            </div>

                                            {/* Category Dropdown */}
                                            <div className="mb-4 sm:mb-8">
                                                <label htmlFor="category" className="block mb-2 text-sm font-medium">
                                                    Category
                                                </label>
                                                <select
                                                    id="category"
                                                    value={data.category}
                                                    onChange={(e) => setData("category", e.target.value)}
                                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm"
                                                >
                                                    <option value="">Select a category</option>
                                                    {categories.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.category && <div className="text-red-500 text-sm">{errors.category}</div>}
                                            </div>
                                            {/* Content */}
                                            <div>
                                                <label htmlFor="content" className="block mb-2 text-sm font-medium">
                                                    Content
                                                </label>
                                                <textarea
                                                    id="content"
                                                    value={data.content}
                                                    onChange={(e) => setData("content", e.target.value)}
                                                    name="content"
                                                    rows="6"
                                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm"
                                                    placeholder="Enter blog content"
                                                ></textarea>
                                                {errors.content && <div className="text-red-500 text-sm">{errors.content}</div>}
                                            </div>

                                            {/* Previous Image */}
                                            <div className="mt-6">
                                                <label className="block text-sm font-medium">Current Image</label>
                                                {blog.image ? (
                                                    <img
                                                        src={`/storage/${blog.image}`} // Ensure path is correct
                                                        alt="Blog"
                                                        className="block w-32 h-32 mt-2 rounded-md object-cover"
                                                    />
                                                ) : (
                                                    <p className="text-gray-500">No image uploaded.</p>
                                                )}
                                            </div>

                                            {/* Image Upload */}
                                            <div className="mb-4 mt-6">
                                                <label htmlFor="image" className="block mb-2 text-sm font-medium">
                                                    Upload New Image
                                                </label>
                                                <input
                                                    type="file"
                                                    id="image"
                                                    onChange={(e) => setData("image", e.target.files[0])}
                                                    className="block w-full text-sm text-gray-500"
                                                />
                                                {errors.image && <div className="text-red-500 text-sm">{errors.image}</div>}
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
                </main>
            </div>
        </>
    );
};

export default Edit;
