<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use inertia\inertia;

class PageController extends Controller
{
    // public function index()
    // {
    //     return view('index');
    // }

    public function home()
    {
        return Inertia::render('Home/index', [
            'title' => 'Home - Seniom Foundation',
            'description' => 'Welcome to Seniom Foundation, empowering education and enriching lives.',
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
        return Inertia::render('Blog/index', [
            'title' => 'Blog - Seniom Foundation',
            'description' => 'Read the latest updates and stories from Seniom Foundation.',
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
