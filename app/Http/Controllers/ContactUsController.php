<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactUsMail;
class ContactUsController extends Controller
{
    public function store(Request $request)
    {
        // Validate form input
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:1000',
        ]);

        // Send email
        Mail::to('your-email@example.com')->send(new ContactUsMail($validated));

        // Optionally, store the message in a database or log
        // ContactUs::create($validated);

        return redirect()->back()->with('success', 'Your message has been sent successfully.');
    }
}
