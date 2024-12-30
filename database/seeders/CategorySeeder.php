<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Education', 'slug' => 'education'],
            ['name' => 'Technology', 'slug' => 'technology'],
            ['name' => 'Innovation', 'slug' => 'innovation'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
