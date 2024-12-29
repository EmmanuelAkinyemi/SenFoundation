<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\BlogController;

use Inertia\Inertia;



Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/services', [PageController::class, 'services'])->name('services');
Route::get('/blog', [PageController::class, 'blog'])->name('blog');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard/blog', [BlogController::class, 'index'])->name('blog');
    Route::get('/dashboard/blog/create', [BlogController::class, 'create'])->name('blog.create');
    Route::post('/dashboard/blog', [BlogController::class, 'store'])->name('blog.store');
    Route::get('/dashboard/blog/{blog}/edit', [BlogController::class, 'edit'])->name('blog.edit');
    Route::patch('/dashboard/blog/{blog}', [BlogController::class, 'update'])->name('blog.update');
    Route::get('/dashboard/blog/{blog}', [BlogController::class, 'show'])->name('blog.show');
    Route::delete('/dashboard/blog/{blog}', [BlogController::class, 'destroy'])->name('blog.destroy');
});


// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
