<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $with = ['todo'];

    protected $fillable = [
        'todo_id',
        'name',
        'description',
        'complete',
        'target_completion',
    ];

    public function todo()
    {
        return $this->belongsTo('App\Todo')->without('tasks');
    }
}
