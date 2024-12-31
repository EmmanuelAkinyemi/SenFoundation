import React from 'react';
import { usePage } from '@inertiajs/react';

const ShowBlogPost = () => {
    const { blogPost, category } = usePage().props;

    if (!blogPost) {
        return <div>Blog post not found!</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">{blogPost.title}</h1>
            <div className="mt-4 text-gray-700">
                <p>{blogPost.content}</p>
            </div>
            <div className="mt-4 text-gray-600">
                <span>Category: {category ? category.name : 'Uncategorized'}</span>
            </div>
        </div>
    );
};

export default ShowBlogPost;
