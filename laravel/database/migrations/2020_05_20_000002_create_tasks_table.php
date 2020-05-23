<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            // primary
            $table->id('id');

            $table->unsignedBigInteger('todo_id');
            $table->foreign('todo_id')->references('id')->on('todos');

            $table->string('name');
            $table->text('description');
            $table->boolean('complete')->default(false);

            $table->dateTime('target_completion')->useCurrent();
            $table->dateTime('completion', null)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
