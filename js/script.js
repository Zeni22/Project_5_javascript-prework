{
  const playGame = function (playerInput) {
    clearMessages();

    const getMoveName= function (MoveId) {
      if (MoveId == 1) {
        return 'kamień';
      } else if (MoveId == 2) {
        return 'papier';
      } else if (MoveId == 3) {
        return 'nożyce';
      }
      printMessage('Nie znam ruchu o id ' + MoveId + '.')
      return 'nieznany ruch';
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const computerMove = getMoveName(randomNumber);

    console.log('Wylosowana liczba to: ' + randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    const playerMove = getMoveName(playerInput);

    console.log('Gracz wpisał: ' + playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    const displayResult= function (computerMove, playerMove) {
      if (computerMove == 'kamień' && playerMove == 'papier') {
        printMessage('Ty wygrywasz!');
      } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
        printMessage('Przegrywasz!');
      } else if (computerMove == 'papier' && playerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
      } else if (computerMove == 'papier' && playerMove == 'kamień') {
        printMessage('Przegrywasz!');
      } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
      } else if (computerMove == 'nożyce' && playerMove == 'papier') {
        printMessage('Przegrywasz!');
      } else if (computerMove == playerMove) {
        printMessage('Remis!');
      } else if (playerMove == 'nieznany ruch') {
        printMessage('Chyba oszukujesz...');
      }
    }
    console.log('moves:', computerMove, playerMove);

    displayResult(computerMove, playerMove);
  }

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
  });
}
