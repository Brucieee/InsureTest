<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\RequestQuote;

class HomeController extends Controller
{
    public function home(){
        

        return Inertia::render ('Home');
    }

    public function approval(){

        $requests = RequestQuote::all();

        return Inertia::render ('Approval', compact('requests'));
    }

    public function products(){
        

        return Inertia::render ('Products');
    }
}
