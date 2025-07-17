<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Resources\StoryResource;
use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function index(Request $request)
    {
        $stories = Story::all();

        return $this->response(true, StoryResource::collection($stories), __('messages.model_action.retrieve_success', ['attribute' => __('messages.stories')]));
    }

    public function store(Requests\StoryRequest $request)
    {
        $story = Story::create($request->only(app(Story::class)->getFillable()));

        $story->genres()->attach($request->get('genre_ids', []));

        return $this->response(true, new StoryResource($story), __('messages.model_action.create_success', ['attribute' => __('messages.story')]));
    }

    public function show(Story $story)
    {
        return $this->response(true, new StoryResource($story), __('messages.model_action.retrieve_success', ['attribute' => __('messages.story')]));
    }

    public function update(Requests\StoryRequest $request, Story $story)
    {
        $story->fill($request->only(app(Story::class)->getFillable()));

        $story->save();

        $story->genres()->sync($request->get('genre_ids', []));

        return $this->response(true, new StoryResource($story), __('messages.model_action.update_success', ['attribute' => __('messages.story')]));
    }

    public function destroy(Story $story)
    {
        $story->delete();

        return $this->response(true, [], __('messages.model_action.delete_success', ['attribute' => __('messages.story')]));
    }
}
