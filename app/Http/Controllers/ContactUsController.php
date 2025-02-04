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
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:1000',
        ]);

        // Send email
        Mail::to('emmanuelakinyemi772@gmail.com')->send(new ContactUsMail($validated));

        // Optionally, store the message in a database or log
        // ContactUs::create($validated);

        return redirect()->back()->with('success', 'Your message has been sent successfully.');
    }
}
