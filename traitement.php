<?php 

$users = array();
if (file_exists("users.json")) {
    $users = json_decode(file_get_contents("users.json"));
}

if (isset($_POST["ok"])){
    extract($_POST);
    $user = [
        "pseudo"   => $pseudo,
        "email"    => $email,
        "password" => $password,
        "mac"      => $mac
    ];
    $users[] = $user;
    file_put_contents('users.json', json_encode($users));
}
session_start();
$_SESSION['pseudo'] = $user["pseudo"];

?>

<meta http-equiv="refresh" content="0; url=index.php" />
