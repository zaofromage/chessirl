<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Chess IRL</title>
    <link href="style.css" rel="stylesheet"/>
  </head>
  <body>
    <h1><?php 
        session_start();
        $user = $_SESSION["pseudo"];
        if (isset($user)){
            echo "Bonjour $user, profite du jeu d'échecs sans règles en illimité pour impréssionner tout tes amis";
        }
        else {
            echo "Connectez vous avant de jouez pour gagner des v-bucks gratuit";
        }
    ?></h1>
    <canvas id="chess" width="600" height="600"></canvas>
    <a href="login.php">Se Connecter</a>
    <a href="signin.php">S'inscrire</a>
    <div id="controls">
        <img src="chess_set/PNGs/No shadow/1x/w_pawn_1x_ns.png" onclick="getPawn()" alt="Get Pawn">
        <img src="chess_set/PNGs/No shadow/1x/w_bishop_1x_ns.png" onclick="getBishop()" alt="Get Bishop">
        <img src="chess_set/PNGs/No shadow/1x/w_knight_1x_ns.png" onclick="getKnight()" alt="Get Knight">
        <img src="chess_set/PNGs/No shadow/1x/w_rook_1x_ns.png" onclick="getRook()" alt="Get Rook">
        <img src="chess_set/PNGs/No shadow/1x/w_queen_1x_ns.png" onclick="getQueen()" alt="Get Queen">
        <img src="chess_set/PNGs/No shadow/1x/w_king_1x_ns.png" onclick="getKing()" alt="Get King">
    </div>
    <a id="switch" onclick="switchColor()">Switch Color</a>
    <a onclick="board = basePosition.map((arr) => arr.slice())">Base Position</a>
    <a id="save" onclick="save()">Save Position</a>
    <a onclick="setSaved()">Set Position</a>

    <script type="text/javascript" src="script.js"></script>

  </body>
</html>
