import { uid } from './utils.js';

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 10;

const ROLES = [
    {
        id: 0,
        name: 'hunter',
        max: 1,
    },
    {
        id: 1,
        name: 'cupid',
        max: 1,
    },
    {
        id: 2,
        name: 'witch',
        max: 1,
    },
    {
        id: 3,
        name: 'thief',
        max: 1,
    },
    {
        id: 4,
        name: 'idiot',
        max: 1,
    },
    {
        id: 5,
        name: 'bodyguard',
        max: 1,
    },
    {
        id: 6,
        name: 'seer',
        max: 1,
    },
    {
        id: 7,
        name: 'villager',
        max: -1,
    },
    {
        id: 8,
        name: 'werewolf',
        max: -1,
    },
]

export default class Game {

  static Games = [];

  static generate_uid() {
    let id;
    let exist;
    
    do {
      id = uid();
      exist = Game.Games.some(game => game.uid === id);
    } while (exist);

    return id;
  }

  static getGame(uid) {
    return Game.Games.find(game => game.uid == uid);
  }

  constructor() {
    this.uid = Game.generate_uid();
    this._players = [];
    this._turn = 0;

    Game.Games.push(this);
  }

  addPlayer(player) {
    this._players.push(player);
  }

  get players() {
    return this._players;
  }

  get turn() {
    return this._turn;
  }

  nextTurn() {
    this._turn++;
  }
}   