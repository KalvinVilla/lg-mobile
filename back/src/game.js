import { uid } from './utils.js';

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 10;

// const ROLES = [
//     {
//         id: 0,
//         name: 'hunter',
//         max: 1,
//     },
//     {
//         id: 1,
//         name: 'cupid',
//         max: 1,
//     },
//     {
//         id: 2,
//         name: 'witch',
//         max: 1,
//     },
//     {
//         id: 3,
//         name: 'thief',
//         max: 1,
//     },
//     {
//         id: 4,
//         name: 'idiot',
//         max: 1,
//     },
//     {
//         id: 5,
//         name: 'bodyguard',
//         max: 1,
//     },
//     {
//         id: 6,
//         name: 'seer',
//         max: 1,
//     },
//     {
//         id: 7,
//         name: 'villager',
//         max: -1,
//     },
//     {
//         id: 8,
//         name: 'werewolf',
//         max: -1,
//     },
// ]

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

  constructor(player, roles) {
    this.uid = Game.generate_uid();
    this._players = [];

    this.setGameMaster(player);
    this.roles = roles;

    Game.Games.push(this);
  }

  setGameMaster(player) {
    this.gameMaster = player;
    this.addPlayer(player);
  }

  attributesRoles() {
    let rolesRestants = [...this.roles];

    // Créer un tableau pour stocker les affectations joueur-role
    let affectations = [];

    // Fonction pour choisir un élément aléatoire dans un tableau et le retirer
    function choisirRoleAleatoire() {
        const index = Math.floor(Math.random() * rolesRestants.length);
        const role = rolesRestants[index];
        rolesRestants.splice(index, 1);
        return role;
    }

    // Parcourir les joueurs et leur assigner un rôle aléatoire
    this._players.forEach(joueur => {
        if(joueur === this.gameMaster) {
            affectations.push({ joueur, role: "gameMaster" });
        } else {
          if (rolesRestants.length > 0) {
              const roleAleatoire = choisirRoleAleatoire();
              affectations.push({ joueur, role: roleAleatoire.name });
          } else {
              affectations.push({ joueur, role: "villager" });
          }
        }
    });

    return affectations;
  }

  addPlayer(player) {
    this._players.push(player);
  }

  removePlayer(player) {
    const index = this._players.indexOf(player);
    if (index > -1) {
      this._players.splice(index, 1);
    }
  }

  get players() {
    return this._players;
  }

}