<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class SelectController extends Controller
{
    public string $model;

    public function selectOptions(Request $request, string $model)
    {
        $modelName = ucfirst($model);
        $model = "App\\Models\\" . ucfirst($model);
        $limit = $request->query('limit', 10);
        $order = $request->query('order', 'asc');
        $orderBy = $request->query('orderBy', 'id');
        $search = $request->query('search', '');
        $labelKey = $request->query('labelKey', 'name');
        $filters = json_decode($request->query('filters', ''), true);
        $scoped = json_decode($request->query('scoped', ''), true);
        $searchKeys = $request->query('searchKeys', null);
        $searchIds = json_decode($request->query('searchIds'), true) ?? [];
        $concat = json_decode($request->query('concat'), true) ?? [];
        $hideIds = $request->query('hideIds', null);
        $query = $model::query();

        if (!empty($concat)) {
            $query->select('id as value', DB::raw("CONCAT_WS(' ', " . implode(', ', $concat) . ") as label"));
        } else {
            $query->select("id as value", DB::raw("$labelKey as label"));
        }

        if ($request->has('searchIds')) {
            $query->whereIn('id', $searchIds);
        }

        if ($searchKeys) {
            $searchKeys = explode(',', $searchKeys);
            $query->where(function ($q) use ($searchKeys, $search) {
                foreach ($searchKeys as $field) {
                    if ($field == 'full_name') {
                        $q->orWhere(DB::raw("CONCAT(first_name, ' ', last_name)"), 'like', "%$search%");
                    } else {
                        $q->orWhere($field, 'like', "%$search%");
                    }
                }
            });
        }

        if ($filters) {
            $query->filter($filters);
        }

        if ($scoped) {
            foreach ($scoped as $field => $value) {
                if ($modelName === 'Tag') {
                    $query->where(function ($q) use ($field, $value) {
                        $q->where($field, $value)->orWhereNull($field);
                    });
                } else {
                    $query->where($field, $value);
                }
            }
        }

        if ($hideIds) {
            $query->whereNotIn('id', explode(',', $hideIds));
        }

        return $query->orderBy($orderBy, $order)->limit($limit)->get();
    }

    public function countries()
    {
        return Cache::remember('countries', 3600, function () {
            return Country::query()->select('code as value', 'name as label')->get();
        });
    }
}
