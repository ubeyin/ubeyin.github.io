<?php
include_once "../connect/index.php";
$state = 0;

$login_id   = mysqli_real_escape_string($server, $_REQUEST['id']);
$login_pass = mysqli_real_escape_string($server, $_REQUEST['open']);


$login_in_user1 = "SELECT * FROM users WHERE username = '" . $login_id . "' AND password = '" . $login_pass . "'";
$login_in_user2 = "SELECT * FROM users WHERE username = '" . $login_id . "'";
$login_in_user3 = "SELECT * FROM users WHERE name = '" . $login_id . "' AND password = '" . $login_pass . "'";
$login_in_user4 = "SELECT * FROM users WHERE name = '" . $login_id . "'";

if (filter_var($login_id, FILTER_VALIDATE_EMAIL)) {
    $login_in_user1 = "SELECT * FROM users WHERE email = '" . $login_id . "' AND password = '" . $login_pass . "'";
    $login_in_user2 = "SELECT * FROM users WHERE email = '" . $login_id . "'";
    $login_in_user3 = "SELECT * FROM users WHERE email = '" . $login_id . "' AND password = '" . $login_pass . "'";
    $login_in_user4 = "SELECT * FROM users WHERE email = '" . $login_id . "'";
}

if ($state === 0) {
    if (mysqli_query($server, $login_in_user1) && mysqli_num_rows(mysqli_query($server, $login_in_user1)) > 0) {
        echo 200;
    } else if (mysqli_query($server, $login_in_user3) && mysqli_num_rows(mysqli_query($server, $login_in_user3)) > 0) {
        echo 200;
    } else if (mysqli_query($server, $login_in_user2) && mysqli_num_rows(mysqli_query($server, $login_in_user2)) > 0) {
        echo 400;
    } else if (mysqli_query($server, $login_in_user4) && mysqli_num_rows(mysqli_query($server, $login_in_user4)) > 0) {
        echo 400;
    } else {
        echo 404;
    }
}

mysqli_close($server);

?> 