<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;


use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::get("/dashboard", [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/blog', [BlogController::class, 'index'])->name('blog.index');
    Route::get('/dashboard/blog/create', [BlogController::class, 'create'])->name('blog.create');
    Route::post('/dashboard/blog', [BlogController::class, 'store'])->name('blog.store');
    Route::get('/dashboard/blog/{id}/edit', [BlogController::class, 'edit'])->name('blog.edit');
    Route::put('/dashboard/blog/{id}', [BlogController::class, 'update'])->name('blog.update');
    Route::get('/dashboard/blog/{id}', [BlogController::class, 'show'])->name('blog.show');
    Route::delete('/dashboard/blog/{blog}', [BlogController::class, 'destroy'])->name('blog.destroy');
});

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/services', [PageController::class, 'services'])->name('services');
Route::get('/blog', [PageController::class, 'blog'])->name('blog');
Route::get('/latest-blog', [PageController::class, 'latest'])->name('blogs.latest');
Route::get('/blog/{slug}', [PageController::class, 'show'])->name('blogs.show');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');



Route::middleware(['auth'])->prefix('dashboard')->group(function () {
    Route::resource('category', CategoryController::class);
});

// Route::resource('category', CategoryController::class);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
