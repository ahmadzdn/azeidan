<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));

if ($data) {
    $response = ["message" => "Contact form submitted successfully.", "data" => $data];
    echo json_encode($response);
} else {
    echo json_encode(["message" => "No data received."]);
}
?>