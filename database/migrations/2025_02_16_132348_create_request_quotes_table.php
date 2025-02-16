<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('request_quotes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('topic');
            $table->string('product');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->text('message'); // Changed to text to handle longer messages
            $table->string('status')->default('pending'); // Set a default status value
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_quotes');
    }
};
