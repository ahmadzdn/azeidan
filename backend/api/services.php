<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$services = [
    ["id" => 1, "title" => "Consulting", "description" => "Digital consulting services..."],
    ["id" => 2, "title" => "Training", "description" => "Professional training services..."],
    ["id" => 3, "title" => "Qualiopi Support", "description" => "Qualiopi certification support..."]
];

echo json_encode($services);
?>