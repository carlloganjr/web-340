/* 
================================================================
    Title: index.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Learning to use modules through practice.
================================================================
*/

// imported modules
const searchTeams = require("./team-manager");
const TEAMS = searchTeams.findTeams();

// Print the header for the displayed teams
console.log(
  "-- DISPLAYING TEAMS --"
);

// Print each team name, mascot and player count
TEAMS.forEach(element => {
  console.log(
    `Name: ${element.name} \n`+
    `Mascot: ${element.mascot} \n`+
    `Player Count: ${element.playerCount} \n`
  );
});

// Print the teams playing and time of the game
console.log("-- CHAMPIONSHIP GAME -- \n", searchTeams.getGame());
