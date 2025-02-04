import Footer from '@/Components/Footer';
import NavBar from '@/Components/NavBar';
import { Head, usePage } from '@inertiajs/react';
import React from 'react';

const Show = () => {
    const { blogPost, category } = usePage().props;

    if (!blogPost) {
        return <div>Blog post not found!</div>;
    }
    return (
        <>
            <Head title={blogPost.title} />
            <NavBar />
            <main className="min-h-screen bg-slate-50/50">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 ">
                    <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="py-8">
                                <div className="space-y-5 lg:space-y-8">
                                    <a className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline" href="/blog">
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                        Back to Blog
                                    </a>

                                    <h2 className="text-3xl font-bold lg:text-5xl font-heading">
                                        {blogPost.title}
                                    </h2>

                                    <div className="flex items-center  gap-x-5">
                                        <p className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                                            {category ? category.name : 'Uncategorized'}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-800">
                                            <strong>Published On:</strong> {new Date(blogPost.created_at).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <figure className="flex flex-col items-center">
                                        {blogPost.image && (
                                            <img
                                                className="w-full h-[400px] object-cover rounded-xl bg-slate-200"
                                                src={`/storage/${blogPost.image}`}
                                                alt={blogPost.title}
                                            />
                                        )}
                                        <figcaption className="mt-3 text-sm text-center text-gray-500">
                                            {blogPost.title}
                                        </figcaption>
                                    </figure>

                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-lg text-gray-800 font-body leading-8">
                                            {blogPost.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-20 space-y-4">
                                {/* Author info, related posts, or other sidebar content can go here */}
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                                    <p className="text-gray-600">
                                        {blogPost.user?.name || 'Anonymous'}
                                    </p>
                                    <p className="text-gray-600">
                                    {blogPost.user?.email || 'Not Available'}
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
