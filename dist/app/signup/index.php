<?php
include_once "../connect/index.php";
$state = 0;

$signup_id    = mysqli_real_escape_string($server, $_REQUEST['id']);
$signup_pass  = mysqli_real_escape_string($server, $_REQUEST['open']);
$signup_email = mysqli_real_escape_string($server, $_REQUEST['email']);

if ($signup_id) {
    $signup_un = strtolower($signup_id);
    $signup_un = vun($signup_un);
}

function vun($str)
{
    $allowed = array(
        ".",
        "-",
        "_",
        " ",
    );
    if (ctype_alnum(str_replace($allowed, '', $str))) {
        return str_replace($allowed, '', $str);
    } else {
        return str_replace($allowed, '', $str);
    }
}

if (mysqli_query($server, "SELECT * FROM users WHERE username = '" . $signup_un . "'") && mysqli_num_rows(mysqli_query($server, "SELECT * FROM users WHERE username = '" . $signup_un . "'")) > 0) {
    $signup_un .= "" . rand(10,99);
    $signup_un .= rand(10,99);
} 

if (mysqli_query($server, "SELECT * FROM users WHERE name = '" . $signup_id . "' AND password = '". $signup_pass ."'") && mysqli_num_rows(mysqli_query($server, "SELECT * FROM users WHERE name = '" . $signup_id . "' AND password = '". $signup_pass ."'")) > 0) {
    $state = 1;
    echo 400;
}

    $signup_in_user1 = "INSERT INTO users (name, email, password, username)
VALUES ('" . $signup_id . "', '" . $signup_email . "' , '" . $signup_pass . "' , '" . $signup_un . "')";
    
    if ($state === 0) {
        if (mysqli_query($server, $signup_in_user1)) {
            echo 200;
        } else {
            echo 404;
        }
    }
mysqli_close($server);

?> 