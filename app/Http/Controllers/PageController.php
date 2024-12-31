<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use inertia\inertia;
use App\Models\Blog;

class PageController extends Controller
{
    public function home()
    {

        $blogs = Blog::latest()->take(3)->with('category')->get(); // Display 6 latest blogs
        return Inertia::render('Home/index', [
            'blogs' => $blogs->load('user'),
        ]);
    }

    public function about()
    {
        return Inertia::render('About/index', [
            'title' => 'About Us - Seniom Foundation',
            'description' => 'Learn more about Seniom Foundation and our mission to provide education for all.',
        ]);
    }

    public function services()
    {
        return Inertia::render('Services/index', [
            'title' => 'Services - Seniom Foundation'
        ]);
    }

    public function blog()
    {
        $blogs = Blog::latest()->take(9)->with('category')->get(); // Display 6 latest blogs
        return Inertia::render('Blog/index', [
            'blogs' => $blogs->load('user', 'category'),
        ]);
    }

    // Show a single blog post based on the slug
    public function show($slug)
    {
        // Find the blog post by slug, or return a 404 if not found
        $blogPost = Blog::where('slug', $slug)->firstOrFail();

        // Return the Inertia view with the blog post and its category
        return Inertia::render('Blog/show', [
            'blogPost' => $blogPost,
            'category' => $blogPost->category, // Also passing the category to the frontend
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact/index', [
            'title' => 'Contact Us - Seniom Foundation',
            'description' => 'Get in touch with Seniom Foundation for inquiries or support.',
        ]);
    }
}
