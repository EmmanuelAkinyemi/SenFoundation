<?php
namespace App\Mail;

use Illuminate\Mail\Mailable;

class ContactUsMail extends Mailable
{
    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->subject('New Contact Form Submission')
                    ->view('emails.contact');
    }
}
