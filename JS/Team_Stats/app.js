const team = {
    _players: [
      {
        firstName: 'Jack',
          lastName: 'Smith',
        age: 23
      },
      {
        firstName: 'Mark',
          lastName: 'Miller',
        age: 22
      },
      {
        firstName: 'Pete',
          lastName: 'Brown',
        age: 25
      }
    ],
    _games: [
      {
        opponent: 'Aliens',
        teamPoints: 6,
        opponentPoints: 3
      },
      {
        opponent: 'Pedators',
        teamPoints: 7,
        opponentPoints: 5
      },
      {
        opponent: 'Monsters',
        teamPoints: 5,
        opponentPoints: 4
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer (firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age
      };
      this._players.push(player);
    },
    addGame (opponent, teamPoints, opponentPoints) {
      let game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Unicorns', 6, 8);
  team.addGame('Alligators', 6, 10);
  team.addGame('Sharks', 11, 8);
  console.log(team.games);