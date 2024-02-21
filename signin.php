<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>
    <form action="traitement.php" method="post">
        <label for="pseudo">Pseudo :</label>
        <input type="text" name="pseudo" required><br>
        <label for="email">Email :</label>
        <input type="email" name="email" required><br>
        <label for="password">Mot de passe :</label>
        <input type="password" name="password" required><br>
        <label for="mac">Adresse mac (tkt):</label>
        <input type="text" name="mac" required><br>
        <input type="submit" name="ok">
    </form>
</body>
</html>
