import Footer from '@/Components/Footer';
import NavBar from '@/Components/NavBar';
import { Head } from '@inertiajs/react';
import React from 'react';

const Show = ({ blog }) => {
    return (
        <>
            <Head title={blog.title} />
            <NavBar />
            <main className="min-h-screen bg-slate-50/50">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10 py-24 ">
                    <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="py-8">
                                <div className="space-y-5 lg:space-y-8">
                                    <a className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline" href="/dashboard/blog">
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                        Back to Blog
                                    </a>

                                    <h2 className="text-3xl font-bold lg:text-5xl font-heading text-center">
                                        {blog.title}
                                    </h2>

                                    <div className="flex items-center justify-center gap-x-5">
                                        <p className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                                            {blog.category?.name || 'Uncategorized'}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-800">
                                            <strong>Published On:</strong> {new Date(blog.created_at).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <figure className="flex flex-col items-center">
                                        {blog.image && (
                                            <img
                                                className="w-full h-[400px] object-cover rounded-xl bg-slate-200"
                                                src={`/storage/${blog.image}`}
                                                alt={blog.title}
                                            />
                                        )}
                                        <figcaption className="mt-3 text-sm text-center text-gray-500">
                                            {blog.title}
                                        </figcaption>
                                    </figure>

                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-lg text-gray-800 font-body leading-8">
                                            {blog.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-4 space-y-4">
                                {/* Author info, related posts, or other sidebar content can go here */}
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                                    <p className="text-gray-600">
                                        {blog.user?.name || 'Anonymous'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Show;
