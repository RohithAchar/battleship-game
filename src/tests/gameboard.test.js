import Gameboard from "../class/gameboard";
import Ship from "../class/ship";

const myGameBoard = new Gameboard();
const ship1 = new Ship(3);

test('placing ship horizontally', () => {
    myGameBoard.placeShip(ship1, 0, 0, false);
    expect(myGameBoard.board[0][0]).toEqual(ship1);
})
test('placing ship vertically', () => {
    const ship2 = new Ship(2);
    myGameBoard.placeShip(ship2, 1, 0, true);
    expect(myGameBoard.board[1][0]).toEqual(ship2);
})
test('placing ship adjacent', () => {
    const ship2 = new Ship(2);
    myGameBoard.placeShip(ship2, 0, 3, false);
    expect(myGameBoard.board[0][3]).toEqual(ship2);
})

// receive attack
test('receive attack on water', () => {
    expect(myGameBoard.receiveAttack(3, 1)).toBeTruthy();
})
test('receive attack on ship', () => {
    const ship3 = new Ship(5);
    myGameBoard.placeShip(ship3, 9, 0, false);
    expect(myGameBoard.receiveAttack(9, 1)).toEqual('hit');
})
test('ship sunk', () => {
    const ship4 = new Ship(3);
    myGameBoard.placeShip(ship4, 8, 0, false);
    myGameBoard.receiveAttack(8, 0);
    myGameBoard.receiveAttack(8, 1);
    myGameBoard.receiveAttack(8, 2);
    expect(ship4.isSunk()).toBeTruthy();
})