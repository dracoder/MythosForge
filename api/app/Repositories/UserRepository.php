<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserRepository extends BaseRepository
{
    protected $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function getQuery($search = '', $filters = [])
    {
        $query = $this->model->query();
        if (!empty($search)) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'LIKE', '%' . $search . '%')
                    ->orWhere('email', 'LIKE', '%' . $search . '%');
            });
        }
        if (!empty($filters)) {
            foreach ($filters as $key => $value) {
                $query->where($key, $value);
            }
        }
        return $query;
    }

    public function switchRole($role = null)
    {
        if ($role && !$this->model->hasRole($role)) {
            $this->model->roles()->detach();
            $this->model->assignRole($role);
        }
    }

    public function useBatteries($tokens)
    {
        $oldestNotFullyUsedBattery = $this->model->batteries()->notFullyUsed()->orderBy('created_at', 'asc')->first();

        if (!$oldestNotFullyUsedBattery) {
            return false;
        }

        if ($oldestNotFullyUsedBattery->remaining_tokens < $tokens) {
            // check if there's another battery to use with remaiing tokens
            $newerBattery = $this->model->batteries()->notFullyUsed()->where('id', '!=', $oldestNotFullyUsedBattery->id)->orderBy('created_at', 'asc')->first();
            if (!$newerBattery) {
                return false;
            }

            if ($newerBattery->remaining_tokens < ($tokens - $oldestNotFullyUsedBattery->remaining_tokens)) {
                return false;
            }

            $tokens -= $oldestNotFullyUsedBattery->remaining_tokens;
            $oldestNotFullyUsedBattery->remaining_tokens = 0;
            $oldestNotFullyUsedBattery->used_tokens = $oldestNotFullyUsedBattery->total_tokens;
            $oldestNotFullyUsedBattery->fully_used = true;
            $oldestNotFullyUsedBattery->save();

            $newerBattery->used_tokens += $tokens;
            $newerBattery->remaining_tokens -= $tokens;
            if ($newerBattery->remaining_tokens = 0) {
                $newerBattery->fully_used = true;
            }
            $newerBattery->save();
        }

        $oldestNotFullyUsedBattery->used_tokens += $tokens;
        $oldestNotFullyUsedBattery->remaining_tokens -= $tokens;
        if ($oldestNotFullyUsedBattery->remaining_tokens = 0) {
            $oldestNotFullyUsedBattery->fully_used = true;
        }
        $oldestNotFullyUsedBattery->save();
    }
}
