<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    protected $fillable = ['description', 'prompt'];

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'story_genre');
    }
}
