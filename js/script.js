function getMoveName (MoveId) {
  if (MoveId == 1) {
    return 'kamień'
  } else if (MoveId == 2) {
    return 'papier'
  } else if (MoveId == 3) {
    return 'nożyce'
  }
  printMessage('Nie znam ruchu o id ' + MoveId + '.')
  return 'nieznany ruch'
}

let randomNumber = Math.floor(Math.random() * 3 + 1)

console.log('Wylosowana liczba to: ' + randomNumber)

let computerMove = getMoveName(randomNumber)

/*if (randomNumber == 1) {
  computerMove = 'kamień'
} else if (randomNumber == 2) {
  computerMove = 'papier'
} else if (randomNumber == 3) {
  computerMove = 'nożyce'
}*/

printMessage('Mój ruch to: ' + computerMove)

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')

console.log('Gracz wpisał: ' + playerInput)

let playerMove = getMoveName(playerInput)

/*if (playerInput == '1') {
  playerMove = 'kamień'
} else if (playerInput == '2') {
  playerMove = 'papier'
} else if (playerInput == '3') {
  playerMove = 'nożyce'
}*/

printMessage('Twój ruch to: ' + playerMove)

console.log('moves:', computerMove, playerMove)

function displayResult (computerMove, playerMove) {
  if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!')
  } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Przegrywasz!')
  } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!')
  } else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Przegrywasz!')
  } else if (computerMove == playerMove) {
    printMessage('Remis!')
  } else if (playerMove == 'nieznany ruch') {
    printMessage('Chyba oszukujesz...')
  }
}

displayResult(computerMove, playerMove)
