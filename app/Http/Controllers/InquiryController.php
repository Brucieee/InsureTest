<?php
namespace App\Http\Controllers;

use App\Models\RequestQuote;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming data
        $validatedData = $request->validate([
            'topic' => 'required|string',
            'product' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        // Create a new request quote entry in the database
        $requestQuote = RequestQuote::create($validatedData);

        // Return a JSON response indicating success
        return response()->json(['message' => 'Inquiry submitted successfully.', 'data' => $requestQuote], 200);
    }
}
