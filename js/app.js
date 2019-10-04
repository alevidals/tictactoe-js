var player = 0;
var turno = 0;
var squares = document.getElementById("main").querySelectorAll(".box");
var title = document.getElementById("player");

var modal = document.getElementById("modal");
// var closeButton = document.getElementById("close-button");


addListeners();

function checkEndGame() {
    for (var i = 0; i <= 6; i += 3) {
        if (squares[i].innerHTML != "" && squares[i].innerHTML == squares[i + 1].innerHTML && squares[i].innerHTML == squares[i + 2].innerHTML) {
            return true;
        }
    }
    for (var i = 0; i <= 2; i++) {
        if (squares[i].innerHTML != "" && squares[i].innerHTML == squares[i + 3].innerHTML && squares[i].innerHTML == squares[i + 6].innerHTML) {
            return true;
        }
    }

    if (squares[0].innerHTML != "" && squares[0].innerHTML == squares[4].innerHTML && squares[0].innerHTML == squares[8].innerHTML) {
        return true;
    }

    if (squares[2].innerHTML != "" && squares[2].innerHTML == squares[4].innerHTML && squares[2].innerHTML == squares[6].innerHTML) {
        return true;
    }
}

function addListeners() {
    for (var i = 0; i <= squares.length - 1; i++) {
        squares[i].addEventListener("click", function (e) {
            if (player == 0 && this.innerHTML == "") {
                title.innerHTML = "JUGADOR: 0";
                this.innerHTML = "X";
                cambiarplayer();
            } else if (player == 1 && this.innerHTML == "") {
                title.innerHTML = "JUGADOR: X";
                this.innerHTML = "0";
                cambiarplayer();
            }
        });
    }

}

function cambiarplayer() {
    turno++;
    player = player == 0 ? 1 : 0;
    if (checkEndGame()) {
        toggleModal("HA GANADO EL " + player);
    } else if (turno == 9) {
        toggleModal("EL JUEGO HA QUEDADO EN EMPATE");
    }
}

function newGame() {
    location.reload();
}

function toggleModal(msg) {
    document.getElementById("msg").innerHTML = msg;
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal("");
    }
}

window.addEventListener("click", windowOnClick);