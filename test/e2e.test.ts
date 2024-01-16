import Fotmob from "../src/fotmob";
const fot = new Fotmob();

describe("Transfers", () => {
  it("should return Transfers", async () => {
    await expect(fot.getTransfers()).resolves.not.toThrow();
  });
});
describe("WorldNews", () => {
  it("should return WorldNews", async () => {
    await expect(fot.getWorldNews()).resolves.not.toThrow();
  });
});

describe("AllLeagues", () => {
  it("should return AllLeagues", async () => {
    await expect(fot.getAllLeagues()).resolves.not.toThrow();
  }, 10000);
});
