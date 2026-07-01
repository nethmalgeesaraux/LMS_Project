<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Courses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class CourseController extends Controller
{
    public function index() {}

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:5'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        // This will store course in db
        $course = new Courses();
        $course->title = $request->title;
        $course->status = 0;
        $course->user_id = $request->user()->id;
        $course->save();

        return response()->json([
            'status' => 200,
            'message' => 'Course has been created successfully.'
        ], 200);
    }
}
