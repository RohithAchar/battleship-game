import Player from "../class/player";
import Ship from "../class/ship";

const player = new Player();
test('placing player ship', () =>{
    player.gameboard.placeShip(new Ship(3), 0, 0, false);
    expect(player.gameboard.board[0][0]).toEqual(new Ship(3));
});
test('receive attack', () => {
    expect(player.gameboard.receiveAttack(0, 0)).toEqual('hit');
});