import { describe, expect, it } from "@jest/globals";
import { Ship } from "./ship";

describe("Player Battleships", () => {
  it("create carrier", () => {
    expect(new Ship("carrier", 5)).toBeDefined();
  });

  it("hits ship", () => {
    const ship = new Ship("patrol boat", 2);
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
    expect(ship.sunk).toBe(true);
  });
});
