<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscriber;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        // Validate form input
        $validated = $request->validate([
            'email' => 'required|email|max:255|unique:subscribers,email',
        ]);

        // Store email in database (you can store the email in a 'subscribers' table)
        Subscriber::create($validated);

        return redirect()->back()->with('success', 'You have subscribed to our newsletter!');
    }
}
