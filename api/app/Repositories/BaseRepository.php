<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Log;

class BaseRepository
{
    protected $model;


    public function getQuery($search = '', $filters = [])
    {
        $query = $this->model->query();
        if (!empty($search)) {
            // check in all fillable fields
            $query->where(function ($query) use ($search) {
                foreach ($this->model->getFillable() as $field) {
                    $query->orWhere($field, 'LIKE', '%' . $search . '%');
                }
            });
        }
        if (!empty($filters)) {
            foreach ($filters as $key => $value) {
                $query->where($key, $value);
            }
        }
        return $query;
    }

    public function getList($search = '', $filters = [], $orderBy = [], $perPage = null, $with = [], $select = [])
    {
        // if it has getQuery method, use it
        if (!method_exists($this, 'getQuery')) {
            return [];
        }
        $list = $this->getQuery($search, $filters);
        if (!empty($select)) {
            $list = $list->select($select);
        }
        if (!empty($with)) {
            $list = $list->with($with);
        }
        if (!empty($orderBy)) {
            foreach ($orderBy as $key => $value) {
                $list->orderBy($key, $value);
            }
        } else {
            $list->orderBy('created_at', 'desc');
        }
        if ($perPage == -1) {
            $list = $list->get();
        } else {
            if ($perPage) {
                $list = $list->paginate($perPage);
            } else {
                $list = $list->paginate(config('settings.pagination.per_page', 10));
            }
        }
        return $list;
    }

    public function getAll($relations = [])
    {
        try {
            return $this->model->with($relations)->get();
        } catch (\Exception $exception) {
            Log::error(($exception));
            return false;
        }
    }

    public function getById($id, $relations = [])
    {
        try {
            return $this->model->with($relations)->find($id);
        } catch (\Exception $exception) {
            Log::error(($exception));
            return false;
        }
    }

    public function store($data)
    {
        try {
            return $this->model->create($data);
        } catch (\Exception $exception) {
            Log::error(($exception));
            return false;
        }
    }

    public function update($data, $id)
    {
        try {
            $model = $this->model->find($id);
            if (!$model) {
                return false;
            }
            $model->update($data);
            return $model;
        } catch (\Exception $exception) {
            Log::error(($exception));
            return false;
        }
    }


    public function save($data, $id = null)
    {
        try {
            if ($id) {
                return $this->update($data, $id);
            } else {
                return $this->store($data);
            }
        } catch (\Exception $exception) {
            Log::error(($exception));
            return false;
        }
    }

    public function delete($id)
    {
        try {
            $model = $this->model->find($id);
            if ($model) {
                $model->delete();
            }
            return $model;
        } catch (\Exception $exception) {
            Log::error(($exception));
            return false;
        }
    }
}
