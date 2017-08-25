<?php

namespace App\Http\Controllers;

use App\Post;
use App\Http\Requests;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function get()
    {
        try {
            //some code
        }catch (Exception $e){
            return response()->error($e->getMessage);
        }

        $posts = Post::get()->toArray();

        return response()->success(compact('posts'));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'name'  => 'required|string|min:3',
            'topic' => 'required|string',
        ]);

        $post = new Post;
        $post->name = $request->input('name');
        $post->topic = $request->input('topic');
        $post->save();

        $posts = Post::get()->toArray();

        return response()->success(compact('posts'));
    }

    public function delete($id)
    {
        $post = Post::destroy($id);

        $posts = Post::get()->toArray();
        return response()->success(compact('posts'));
    }
}
