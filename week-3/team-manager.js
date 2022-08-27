/* 
================================================================
    Title: team-manager.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Learning to use modules through practice.
================================================================
*/

// imported modules
const team = require("./team.js");
const moment = require("moment");
const time = moment;

// Team objects are created using the Team class from team.js
// The objects are captured in an array named TEAMS_ARRAY
function findTeams() {
  const TEAMS_ARRAY = [
    new team("Muskogee", "Rough Necks", "25"),
    new team("Owasso", "Blue Jays", "33"),
    new team("Hillsboro", "Cougars", "12"),
    new team("Alexandria", "Patriots", "76"),
    new team("Durango", "Prairie Dogs", "47")
  ];
  
  return TEAMS_ARRAY;
}

// Search through an array of teams to find a team using the name as search
function findTeam(name) {
  const TEAMS = findTeams();
  for(let i = 0; i < TEAMS.length; i++) {
    if(TEAMS[i].name === name) return TEAMS[i];
  }
}

// Find the teams and create the schedule for the game
function getGame() {
  const ALEXANDRIA = findTeam("Alexandria");
  const OWASSO = findTeam("Owasso");

  return `${ALEXANDRIA.name} ${ALEXANDRIA.mascot} is playing ${OWASSO.name} `+
          `${OWASSO.mascot} on ${time().add(7, "days").format("MM-DD-YYYY")} ` +
          `at ${time('7:30 PM', 'h:mm A').format("h:mm A")} CST.`
}

// export the modules for use elsewhere
module.exports = {findTeams, getGame};