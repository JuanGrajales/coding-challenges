/*
  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.

 */

// Solution 1
function tournamentWinner(competitions, results) {
  // Write your code here.
  // Space O(n) n is the number of teams
  // Time O(k), k is the length of results
  let winner = competitions[0][results[0] === 1 ? 0 : 1];
  let rowIndex = 0;
  const teams = {};

  for (num of results) {
    const homeTeam = competitions[rowIndex][0];
    const awayTeam = competitions[rowIndex][1];
    let roundWinner = "";

    if (num === 0) {
      teams[awayTeam] = (teams[awayTeam] || 0) + 3;
      roundWinner = awayTeam;
    } else {
      teams[homeTeam] = (teams[homeTeam] || 0) + 3;
      roundWinner = homeTeam;
    }

    winner = teams[winner] < teams[roundWinner] ? roundWinner : winner;
    rowIndex++;
  }

  return winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
