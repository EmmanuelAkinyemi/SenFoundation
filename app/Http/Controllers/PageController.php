<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use inertia\inertia;
class PageController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function home()
    {
        return Inertia::render('Home', [
            'title' => 'Home - Seniom Foundation',
            'description' => 'Welcome to Seniom Foundation, empowering education and enriching lives.',
        ]);
    }
}
 