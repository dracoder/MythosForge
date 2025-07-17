<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Resources\GenreResource;
use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index(Request $request)
    {
        $genres = Genre::all();

        return $this->response(true, GenreResource::collection($genres), __('messages.model_action.retrieve_success', ['attribute' => __('messages.genres')]));
    }

    public function store(Requests\GenreRequest $request)
    {
        $genre = Genre::create($request->only(app(Genre::class)->getFillable()));

        return $this->response(true, new GenreResource($genre), __('messages.model_action.create_success', ['attribute' => __('messages.genre')]));
    }

    public function show(Request $request, Genre $genre)
    {
        return $this->response(true, new GenreResource($genre), __('messages.model_action.retrieve_success', ['attribute' => __('messages.genre')]));
    }

    public function update(Requests\GenreRequest $request, Genre $genre)
    {
        $genre->fill($request->only(app(Genre::class)->getFillable()));

        $genre->save();

        return $this->response(true, new GenreResource($genre), __('messages.model_action.update_success', ['attribute' => __('messages.genre')]));
    }

    public function destroy(Request $request, Genre $genre)
    {
        $genre->delete();

        return $this->response(true, [], __('messages.model_action.delete_success', ['attribute' => __('messages.genre')]));
    }
}
