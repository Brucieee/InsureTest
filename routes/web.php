<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\RequestQuoteController;
use App\Http\Controllers\InquiryController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Add the submit-inquiry route here, outside of the admin group
    
});

Route::get('/home', [HomeController::class, 'home'])->name('home');
Route::get('/products', [HomeController::class, 'products'])->name('products');
Route::get('/approval', [HomeController::class, 'approval'])->name('approval');
Route::post('/submit-inquiry', [RequestQuoteController::class, 'store']);
Route::post('/update-inquiry-status/{id}', [InquiryController::class, 'updateStatus']);
Route::middleware('auth')->get('/my-inquiries', [InquiryController::class, 'userInquiries']);
Route::middleware('auth')->post('/update-inquiry-status/{id}', [InquiryController::class, 'updateStatus']);

// Admin routes
Route::middleware([AdminMiddleware::class])->group(function () {
    Route::get('/admin/approval', [AdminMiddleware::class, 'approvalPage'])->name('admin.approval');
});

require __DIR__.'/auth.php';
