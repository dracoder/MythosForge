<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionsSeeder extends Seeder
{
    const CRUD = [
        'index',
        'store',
        'show',
        'update',
        'destroy',
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'users' => [
                ...self::CRUD,
            ],
            'genres' => [
                ...self::CRUD,
            ],
            'stories' => [
                ...self::CRUD,
            ],
            'subscription_plans' => [
                ...self::CRUD,
            ],
        ];

        foreach ($permissions as $model => $actions) {
            foreach ($actions as $action) {
                Permission::firstOrCreate([
                    'name' => $model . '_' . $action,
                ]);
            }
        }

        $superAdminRole = Role::firstOrCreate(['name' => 'super-admin']);
        $allPermissions = Permission::all();
        $superAdminRole->syncPermissions($allPermissions);

        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $adminPermissions = Permission::query()
            ->where('name', 'like', 'genres_%')
            ->orWhere('name', 'like', 'stories_%')
            ->get();
        $adminRole->syncPermissions($adminPermissions);
    }
}
