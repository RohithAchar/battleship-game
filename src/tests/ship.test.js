import Ship from "../class/ship";

test('create ship of length 3', () => {
    expect(new Ship(3)).toEqual({length: 3, hits: 0});
})
test('takes hit', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.hits).toEqual(1);
})
test('ship sink', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
})