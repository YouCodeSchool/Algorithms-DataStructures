<?php
    class Pages extends Controller{
        public function __construct(){
            $this->userModel = $this->model('User');
        }

        public function index(){
            // echo "home page";
            $data = [
                'title' => 'Home',
                'name' => 'ARID'
            ];

            $this->view('pages/index', $data);
        }

        public function contact(){
            // echo 'contact page';
            $this->view('pages/contact');
        }

    }
?>