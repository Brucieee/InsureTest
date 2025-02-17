<?php
namespace App\Http\Controllers;

use App\Models\RequestQuote;
use Illuminate\Http\Request;

class RequestQuoteController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'topic' => 'required|string',
            'product' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        // Store the data in the request_quotes table
        RequestQuote::create($validated);

        // Return a success message
        return response()->json(['message' => 'Inquiry submitted successfully'], 200);
    }
}
