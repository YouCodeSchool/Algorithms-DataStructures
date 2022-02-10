<?php
//core app class
    class Core{
        protected $currentController = 'Pages';
        protected $currentMethod = 'index';
        protected $params = [];

        public function getUrl(){
            if(isset($_GET['url'])){
                $url = rtrim($_GET['url'], '/');

                $url = filter_var($url, FILTER_SANITIZE_URL);
                $url = explode('/', $url);  
            }
        }
    }
?>