<?php
$isValid = false;
$connectedUser = null;
if (isset($_POST["ok"])){
    extract($_POST);
    $users = json_decode(file_get_contents("users.json"), true);
    foreach ($users as $user){
        if ($pseudo === $user["pseudo"] && $password === $user["password"]){
            $isValid = true;
            $connectedUser = $user;
        }
    }
}
?>

<?php if ($isValid): ?>
    Vous êtes connecté.e.s
<?php 
    session_start();
    $_SESSION["pseudo"] = $connectedUser["pseudo"];
?>
    <meta http-equiv="refresh" content="0; url=index.php" />
<?php else : ?>
    Pseudo ou mot de passe incorrect.e.s
    <meta http-equiv="refresh" content="0; url=login.php" />
<?php endif; ?>

