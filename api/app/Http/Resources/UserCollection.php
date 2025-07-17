<?php

namespace App\Http\Resources;

use App\Http\Resources\PaginationResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        // if has pagination then send pagination data else return just resource
        if (method_exists($this->resource, 'currentPage')) {
            return [
                'data' => UserResource::collection($this->collection),
                'meta' => new PaginationResource($this->resource),
            ];
        } else {
            return [
                'data' => UserResource::collection($this->collection)
            ];
        }
    }
}
