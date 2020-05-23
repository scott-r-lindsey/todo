<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('v1/task', 'TaskController@index')->name('task.index');
Route::get('v1/task/{task}', 'TaskController@show')->name('task.show');
Route::put('v1/task', 'TaskController@store')->name('task.store');
Route::patch('v1/task/{task}', 'TaskController@update')->name('task.update');
Route::delete('v1/task/{task}', 'TaskController@destroy')->name('task.destroy');

Route::get('v1/todo', 'TodoController@index')->name('todo.index');
Route::get('v1/todo/{todo}', 'TodoController@show')->name('todo.show');
Route::put('v1/todo', 'TodoController@store')->name('todo.store');
Route::patch('v1/todo/{todo}', 'TodoController@update')->name('todo.update');
Route::delete('v1/todo/{todo}', 'TodoController@destroy')->name('todo.destroy');

