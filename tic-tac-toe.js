//Array que representa el tablero
var board = [                        
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
  ]

var player = 'x'  // Variable que lleva la cuenta del turno de jugador
var gameOver = false // Mientras sea 'false', podemos seguir modificando el tablero

function draw(arr) {  //Función a cargo de dibuar el tablero
for (let i = 0; i < arr.length; i++) {
console.log(arr[i][0] + ' | ' + arr[i][1] + ' | ' + arr[i][2])
}
}

function play(x,y) {  // Función encargada de colocar la 'ficha' del jugador en las coordenadas especificadas
if (board[x][y] === '-' && gameOver === false) { 
board[x][y] = player // Si la casilla no está ocupada por otra ficha de jugador y la partida no ha terminado, colocamos la ficha del jugador al que le toca
}
if(checkWinner() === true) {  // Comprobamos si alguien ha ganado. En caso afirmativo, paramos la partida
gameOver = true
}
switchPlayer()  // Cambiamos de jugador
}

function switchPlayer() {  // Función a cargo de alternar de jugador
if ( player === 'x') {
player = 'o'
} else {
player = 'x'
}
}



function checkWinner() {
// Función que comprueba si hay algún ganador
// Si todos los elementos de una fila, columna, o diagonal son iguales y distintos de una casilla vacía, significa que alguien ha ganado. Esa comparación pasa a valer 'true'.
var row1 = board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][0] !== '-'
var row2 = board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][0] !== '-'
var row3 = board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][0] !== '-'

var col1 = board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[0][0] !== '-'
var col2 = board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[0][1] !== '-'
var col3 = board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[0][2] !== '-'

var diag1 = board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '-'
var diag2 = board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[2][0] !== '-'

return row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2 // En el momento en el que uno sea 'true', la función devuelve 'true'
}

play(1,1)  // Colocamos la primera ficha en las coordenadas 1,1 (Centro del tablero)
play(2,2)
play(2,1)
play(0,0)
play(0,1)
draw(board) // dibujar el tablero actualizado