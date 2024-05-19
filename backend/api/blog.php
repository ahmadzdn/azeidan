<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$posts = [
    ["id" => 1, "title" => "First Blog Post", "content" => "Content of the first blog post..."],
    ["id" => 2, "title" => "Second Blog Post", "content" => "Content of the second blog post..."]
];

echo json_encode($posts);
?>