<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User; 
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create an admin user
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('Admin@0000'), // Example password
        ]);
        $admin->role = 'admin'; // Assigning the 'admin' role
        $admin->save();

        // Create a regular customer user
        $customer = User::create([
            'name' => 'Customer User',
            'email' => 'customer@example.com',
            'password' => Hash::make('customerpassword'), // Example password
        ]);
        $customer->role = 'customer'; // Assigning the 'customer' role
        $customer->save();
    }
}
