<?php
// Rewrite the front-end routing to index.html
if (preg_match('/\.(?:png|jpg|jpeg|gif|css|js)$/', $_SERVER["REQUEST_URI"])) {
    return false;
} else {
    include_once('public/index.php');
}
?>