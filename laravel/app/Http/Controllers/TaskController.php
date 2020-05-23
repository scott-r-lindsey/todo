<?php

namespace App\Http\Controllers;

use App\Task;
use App\Todo;
use Illuminate\Http\Request;
use DateTime;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::all();
        return response()->json($tasks);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        return $task;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'target_completion' => 'required',
            'todo_id' => 'required'
        ]);

        $task = Task::create([
            'name' =>  $request->name,
            'description' => $request->description,
            'todo_id' => $request->todo_id,
            'target_completion' =>
                new DateTime($request->target_completion),
            'complete'  => false,
        ]);

        return response()->json([
            'message' => 'task created!',
            'task' => $task
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'target_completion' => 'required',
            'todo_id' => 'required',
        ]);

        $task->name = $request->name;
        $task->description = $request->description;

        if (!$task->complete){
            if ($request->complete){
                $task->complete = true;
                $task->completion = now();
            }
        }

        $task->save();
        
        return response()->json([
            'message' => 'task updated!',   
            'task' => $task
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json([
            'message' => 'task deleted'
        ]);

    }
}
