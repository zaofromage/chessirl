var canvas = document.querySelector("#chess");
var ctx = canvas.getContext("2d");
const tileSize = canvas.width/8;
//load images
const pawnWhite = new Image();
pawnWhite.src = "chess_set/PNGs/No shadow/1x/w_pawn_1x_ns.png"

const pawnBlack = new Image();
pawnBlack.src = "chess_set/PNGs/No shadow/1x/b_pawn_1x_ns.png"

const bishopWhite = new Image();
bishopWhite.src = "chess_set/PNGs/No shadow/1x/w_bishop_1x_ns.png"

const bishopBlack = new Image();
bishopBlack.src = "chess_set/PNGs/No shadow/1x/b_bishop_1x_ns.png"

const knightWhite = new Image();
knightWhite.src = "chess_set/PNGs/No shadow/1x/w_knight_1x_ns.png"

const knightBlack = new Image();
knightBlack.src = "chess_set/PNGs/No shadow/1x/b_knight_1x_ns.png"

const rookWhite = new Image();
rookWhite.src = "chess_set/PNGs/No shadow/1x/w_rook_1x_ns.png"

const rookBlack = new Image();
rookBlack.src = "chess_set/PNGs/No shadow/1x/b_rook_1x_ns.png"

const queenWhite = new Image();
queenWhite.src = "chess_set/PNGs/No shadow/1x/w_queen_1x_ns.png"

const queenBlack = new Image();
queenBlack.src = "chess_set/PNGs/No shadow/1x/b_queen_1x_ns.png"

const kingWhite = new Image();
kingWhite.src = "chess_set/PNGs/No shadow/1x/w_king_1x_ns.png"

const kingBlack = new Image();
kingBlack.src = "chess_set/PNGs/No shadow/2x/b_king_2x_ns.png"

//presets
const basePosition = [
[p(rookBlack,   0, 0), p(pawnBlack, 0, 1), undefined, undefined, undefined, undefined, p(pawnWhite, 0, 6), p(rookWhite,   0, 7)],
[p(knightBlack, 1, 0), p(pawnBlack, 1, 1), undefined, undefined, undefined, undefined, p(pawnWhite, 1, 6), p(knightWhite, 1, 7)],
[p(bishopBlack, 2, 0), p(pawnBlack, 2, 1), undefined, undefined, undefined, undefined, p(pawnWhite, 2, 6), p(bishopWhite, 2, 7)],
[p(queenBlack,  3, 0), p(pawnBlack, 3, 1), undefined, undefined, undefined, undefined, p(pawnWhite, 3, 6), p(queenWhite,  3, 7)],
[p(kingBlack,   4, 0), p(pawnBlack, 4, 1), undefined, undefined, undefined, undefined, p(pawnWhite, 4, 6), p(kingWhite,   4, 7)],
[p(bishopBlack, 5, 0), p(pawnBlack, 5, 1), undefined, undefined, undefined, undefined, p(pawnWhite, 5, 6), p(bishopWhite, 5, 7)],
[p(knightBlack, 6, 0), p(pawnBlack, 6, 1), undefined, undefined, undefined, undefined, p(pawnWhite, 6, 6), p(knightWhite, 6, 7)],
[p(rookBlack,   7, 0), p(pawnBlack, 7, 1), undefined, undefined, undefined, undefined, p(pawnWhite, 7, 6), p(rookWhite,   7, 7)]
];

var mousePosX;
var mousePosY;
var selected = undefined;
var isWhite = true;
var board = Array(8).fill().map(()=>Array(8).fill());
var savePosition;

canvas.addEventListener("click", function(evt){
    var boardMousePos = getMouseBoardPos();
    var boardElem = board[boardMousePos.x][boardMousePos.y];
    if (selected != undefined && boardElem != undefined){
        board[boardMousePos.x][boardMousePos.y] = {type : selected, x : boardMousePos.x * tileSize, y : boardMousePos.y * tileSize};
        selected = undefined;
    }
    else if(boardElem != undefined){
        selected = boardElem.type;
        board[boardMousePos.x][boardMousePos.y] = undefined;
    }
    else if (selected != undefined ){
        board[boardMousePos.x][boardMousePos.y] = {type : selected, x : boardMousePos.x * tileSize, y : boardMousePos.y * tileSize};
        console.log(board[boardMousePos.x][boardMousePos.y]);
        selected = undefined;
    }
}), {once: true};

canvas.addEventListener("mousemove", function(evt){
    var mousePos = getMousePos(canvas, evt);
    mousePosX = mousePos.x;
    mousePosY = mousePos.y;
});


(function update() {
    //print plateau
    for (var i = 0; i < 8; i++){
        for (var j = 0; j < 8; j++){
            if (i%2 == 0){
                if (j%2 == 0){
                    ctx.fillStyle = "rgb(225, 225, 225)"
                    ctx.fillRect(i*tileSize, j*tileSize, tileSize, tileSize);
                }
                else{
                    ctx.fillStyle = "rgb(0, 0, 0)"
                    ctx.fillRect(i*tileSize, j*tileSize, tileSize, tileSize);
                }
            }
            else {
                if (j%2 == 1){
                    ctx.fillStyle = "rgb(225, 225, 225)"
                    ctx.fillRect(i*tileSize, j*tileSize, tileSize, tileSize);
                }
                else{
                    ctx.fillStyle = "rgb(0, 0, 0)"
                    ctx.fillRect(i*tileSize, j*tileSize, tileSize, tileSize);
                }
            }
        }
    }

    board.forEach((row) => {
        row.forEach((piece) => {
            if (piece != undefined){
                drawPiece(piece);
            }
        });
    });

    if (selected != undefined){
        drawPiece({type : selected, x : mousePosX - tileSize / 2, y : mousePosY - tileSize / 2});
    }

    requestAnimationFrame(update);
})();

function drawPiece(piece){
    ctx.drawImage(piece.type, piece.x, piece.y, tileSize, tileSize);
}


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function round(val){
    return val - val%tileSize
}

function getBoardPos(piece){
    return {
        x : piece.x/tileSize,
        y : piece.y/tileSize
    };
}

function getMouseBoardPos(){
    return {
        x : round(mousePosX)/tileSize,
        y : round(mousePosY)/tileSize
    };
}

function getPawn(){
    if (isWhite) selected = pawnWhite;
    else selected = pawnBlack;
}

function getBishop(){
    if (isWhite) selected = bishopWhite;
    else selected = bishopBlack;
}

function getKnight(){
    if (isWhite) selected = knightWhite;
    else selected = knightBlack;
}

function getRook(){
    if (isWhite) selected = rookWhite;
    else selected = rookBlack;
}

function getQueen(){
    if (isWhite) selected = queenWhite;
    else selected = queenBlack;
}

function getKing(){
    if (isWhite) selected = kingWhite;
    else selected = kingBlack;
}

function switchColor(){
    isWhite = !isWhite;
    var switchButton = document.getElementById("switch").style;
    if (isWhite) {
        switchButton.backgroundColor = "white";
        switchButton.color = "black";
    }
    else {
        switchButton.backgroundColor = "black";
        switchButton.color = "white";
    }
}

function save(){
    savePosition = board.map((arr) => arr.slice());
    alert('Position Enregistrée');
}

function setSaved(){
    board = savePosition.map((arr) => arr.slice());

}

function p(type, x, y){
    return {
        type : type,
        x : x * tileSize,
        y : y * tileSize
    };
}
