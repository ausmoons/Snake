import { Grid } from "./Grid";
import { Configuration } from "./Configuration";
import { Cell } from "./Cell";

describe("Grid", () => {
  const configuration = {
    level: 0,
    speed: 100,
    width: 1000,
    height: 1000,
    nbCellsX: 100,
    nbCellsY: 100,
    cellWidth: 10,
    cellHeight: 10,
    apples: 5
  } as Configuration;

  it("should have five apples present", () => {
    const grid = new Grid(configuration);
    const apples = grid.getApples();
    expect(apples.length).toBe(5);
  });
  it("it should report if apple inside", () => {
    const grid = new Grid(configuration);
    const apple = grid.getApples()[0];
    expect(grid.isAppleInside(apple)).toBe(true);
    expect(grid.isAppleInside(new Cell(99, 99))).toBe(false);   
  });
  it("it should remove apple", () => {
    const grid = new Grid(configuration);
    const apple = grid.getApples()[0];
    grid.removeApple(apple)
    expect(grid.isAppleInside(apple)).toBe(false);
    expect(grid.getApples().length).toBe(4);
  })
  it("it should start a new level if there are no more apples", () => {
    const grid = new Grid(configuration);

    const apple4 = grid.getApples()[4];
    grid.removeApple(apple4)
    expect(grid.isAppleInside(apple4)).toBe(false);

    const apple3 = grid.getApples()[3];
    grid.removeApple(apple3)
    expect(grid.isAppleInside(apple3)).toBe(false);

    const apple2 = grid.getApples()[2];
    grid.removeApple(apple2)
    expect(grid.isAppleInside(apple2)).toBe(false);

    const apple1 = grid.getApples()[1];
    grid.removeApple(apple1)
    expect(grid.isAppleInside(apple1)).toBe(false);

    const apple = grid.getApples()[0];
    grid.removeApple(apple)
    expect(grid.isAppleInside(apple)).toBe(false);

    expect(grid.getApples().length).toBe(0);

    expect(grid.isDone()).toBe(true);
  })

  it("it should show new apples after all are removed", () => {
    const grid = new Grid(configuration);
    const apple4 = grid.getApples()[4];
    grid.removeApple(apple4)
    expect(grid.isAppleInside(apple4)).toBe(false);

    const apple3 = grid.getApples()[3];
    grid.removeApple(apple3)
    expect(grid.isAppleInside(apple3)).toBe(false);

    const apple2 = grid.getApples()[2];
    grid.removeApple(apple2)
    expect(grid.isAppleInside(apple2)).toBe(false);

    const apple1 = grid.getApples()[1];
    grid.removeApple(apple1)
    expect(grid.isAppleInside(apple1)).toBe(false);

    const apple = grid.getApples()[0];
    grid.removeApple(apple)
    expect(grid.isAppleInside(apple)).toBe(false);

    expect(grid.getApples().length).toBe(0);
    expect(grid.isDone()).toBe(true);
    expect(grid.seed())
    expect(grid.getApples().length).toBe(5);
  })

  
})
