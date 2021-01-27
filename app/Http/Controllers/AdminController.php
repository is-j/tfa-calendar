<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    protected function users()
    {
        return view('admin.users');
    }
    protected function strikes()
    {
        return view('admin.strikes');
    }
    protected function probations()
    {
        return view('admin.probations');
    }
    protected function reports()
    {
        return view('admin.reports');
    }
}