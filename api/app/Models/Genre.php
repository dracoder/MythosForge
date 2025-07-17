<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $fillable = ['name', 'slug', 'features'];

    protected $casts = [
        'features' => 'array',
    ];

    public function setFeaturesAttribute($value)
    {
        $this->attributes['features'] = json_encode($value);
    }

    public function getFeaturesAttribute($value)
    {
        return $value ? json_decode($value, true) : [];
    }

    public function stories()
    {
        return $this->belongsToMany(Story::class, 'story_genre');
    }
}
