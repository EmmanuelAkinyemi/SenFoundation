<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\Blog;
use Illuminate\Support\Facades\DB;
class DashboardController extends Controller
{
    public function index()
{
    // Fetch statistics from the database
    $categoriesCount = Category::count();
    $blogPostsCount = Blog::count();
    $viewsCount = DB::table('blogs')->sum('views'); // Assuming you track views in the blog_posts table

    // Calculate changes (example: compare with last week)
    $lastWeekCategories = Category::where('created_at', '>=', now()->subWeek())->count();
    $lastWeekBlogPosts = Blog::where('created_at', '>=', now()->subWeek())->count();
    $lastWeekViews = DB::table('blogs')
        ->where('updated_at', '>=', now()->subWeek())
        ->sum('views');

    $stats = [
        'categories' => [
            'total' => $categoriesCount,
            'change' => $categoriesCount - $lastWeekCategories,
            'lastWeek' => $lastWeekCategories,
        ],
        'blogPosts' => [
            'total' => $blogPostsCount,
            'change' => $blogPostsCount - $lastWeekBlogPosts,
            'lastWeek' => $lastWeekBlogPosts,
        ],
        'views' => [
            'total' => $viewsCount,
            'change' => $viewsCount - $lastWeekViews,
            'lastWeek' => $lastWeekViews,
        ],
    ];

    return Inertia::render('Dashboard/index', [
        'stats' => $stats,
    ]);
}
}
