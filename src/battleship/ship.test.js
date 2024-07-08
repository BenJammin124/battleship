import { describe, expect, it } from "@jest/globals";
import { Ships } from "./ship";

describe("Player Battleships", () => {
  it("create carrier", () => {
    expect(new Ships(5)).toBeDefined();
  });
});
