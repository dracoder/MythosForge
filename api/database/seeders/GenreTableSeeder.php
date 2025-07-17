<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class GenreTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (Genre::count() > 0) return;

        $genres = [
            'Action',
            'Adventure',
            'Animation',
            'Comedy',
            'Drama',
            'Fantasy',
            'History',
            'Horror',
            'Musical',
            'Romance',
            'Sci-Fi',
            'Sport',
            'Western',
        ];

        foreach ($genres as $genre) {
            Genre::create([
                'name' => $genre,
                'slug' => Str::slug($genre),
            ]);
        }
    }
}
