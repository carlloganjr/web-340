/* 
================================================================
    Title: team.js
    Author: Carl Logan
    Date: 8/25/2022
    Description: Learning to use modules through practice.
================================================================
*/

// A class for creating team objects
class Team {
  constructor(name, mascot, playerCount) {
    this.name = name;
    this.mascot = mascot;
    this.playerCount = playerCount;
  }
}

// export the modules for use elsewhere
module.exports = Team;