<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inquiry; // Assuming you have a model for storing inquiries

class InquiryController extends Controller
{
    public function submit(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'topic' => 'required|string',
            'product' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        // Optionally, save the inquiry to the database
        Inquiry::create($validatedData);

        // Respond with a success message
        return response()->json(['message' => 'Inquiry submitted successfully!']);
    }
}
