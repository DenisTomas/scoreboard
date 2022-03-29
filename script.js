var denis = { name: "Denis", victories: 0, defeats: 0, draw: 0, points: 0 };
var maria = { name: "Maria", victories: 0, defeats: 0, draw: 0, points: 0 };
var bella = { name: "Bella", victories: 0, defeats: 0, draw: 0, points: 0 };

var players = [denis, maria, bella];

denis.points = calculatePoints(denis);
maria.points = calculatePoints(maria);
bella.points = calculatePoints(bella);

function buildPlayersList(name) {
  return (player = {
    name: name,
    victories: 0,
    defeats: 0,
    draw: 0,
    points: 0
  });
}

function addNewPlayer() {
  var name = document.getElementById("playerName");
  players.push(buildPlayersList(name.value));
  name.value = "";
  showPlayersOnScreen(players);
}

function calculatePoints(player) {
  var points = player.victories * 3 + player.draw - player.defeats;
  return points;
}

function showPlayersOnScreen(players) {
  var element = "";
  players.forEach(function (item, i) {
    element += "<tr>";
    element += "<td>" + item.name + "</td>";
    element += "<td>" + item.victories + "</td>";
    element += "<td>" + item.defeats + "</td>";
    element += "<td>" + item.draw + "</td>";
    element += "<td>" + item.points + "</td>";
    element +=
      "<td> <button onClick='addVictory(" + i + ")'>Victories</button> </td>";
    element += "<td> <button onClick='addDraw(" + i + ")'>Draw</button> </td>";
    element +=
      "<td> <button onClick='addDefeat(" + i + ")'>Defeats</button> </td>";
    element += "</tr>";
  });

  var playersTable = document.getElementById("playersTable");
  playersTable.innerHTML = element;
}

showPlayersOnScreen(players);

function addVictory(i) {
  var player = players[i];
  player.victories++;
  player.points = calculatePoints(player);
  showPlayersOnScreen(players);
}

function addDraw(i) {
  var player = players[i];
  player.draw++;
  player.points = calculatePoints(player);
  showPlayersOnScreen(players);
}

function addDefeat(i) {
  var player = players[i];
  player.defeats++;
  player.points = calculatePoints(player);
  showPlayersOnScreen(players);
}

function resetPoints() {
  players.forEach(function (item, i) {
    players[i].victories = 0;
    players[i].defeats = 0;
    players[i].draw = 0;
    players[i].points = 0;
  });
  showPlayersOnScreen(players);
}

function resePlayersList() {
  players.length = 0;
  showPlayersOnScreen(players);
}
