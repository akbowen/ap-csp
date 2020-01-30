var player = [
  {
    gameName: "Chess",
    gameWins: 10,
    gameLosses: 90
  },
  {
    gameName: "Checkers",
    gameWins: 20,
    gameLosses: 2
  },
  {
    gameName: "Clash Royale",
    gameWins: 443,
    gameLosses: 400
  },
  {
    gameName: "Clash of Clans",
    gameWins: 500,
    gameLosses: 459
  },
  {
    gameName: "Archery",
    gameWins: 4,
    gameLosses: 5
  },
  {
    gameName: "Knockout",
    gameWins: 1,
    gameLosses: 3
  },
  {
    gameName: "Reversi",
    gameWins: 0,
    gameLosses: 0
  },
  {
    gameName: "Solitaire",
    gameWins: 20,
    gameLosses: 20
  },
  {
    gameName: "Mini Golf",
    gameWins: 4,
    gameLosses: 5
  },
  {
    gameName: "Cup Pong",
    gameWins: 2,
    gameLosses: 10
  }
];

function start(){
  for(var i = 0; i < player.length; i++){
    console.log(player[i].gameName + ':', player[i].gameWins + " wins", player[i].gameLosses + " losses");
  }
}
