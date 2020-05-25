<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $with = ['tasks'];

    protected $fillable = [
        'name',
        'description',
    ];

    public function tasks()
    {
        return $this->hasMany('App\Task')->without('todo');
    }

    public function delete()
    {
        $this->tasks()->delete();
        return parent::delete();
    }

}
