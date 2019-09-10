import { Cell } from "./Cell";
import { Configuration } from "./Configuration";
import { Game } from "./Game";
import { getStringDiff } from "jest-diff";

export class Grid {
  private configuration: Configuration;
  apples = [
      new Cell(33, 22),
      new Cell(35, 22),
      new Cell(37, 22),
      new Cell(39, 22),
      new Cell(41, 22)
    ];
​
  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }
​
  seed(): void {
     this.apples.push(new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)));
     this.apples.push(new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)));
     this.apples.push(new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)));
     this.apples.push(new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)));
     this.apples.push(new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)));  
  }
​
  isAppleInside(cell: Cell): boolean {
    return this.apples.find(apples => apples.x === cell.x && apples.y === cell.y) !== undefined
  }
​
  removeApple(cell: Cell): void {
    const apple = this.apples.find(apple => apple.x === cell.x && apple.y === cell.y)!
    const i = this.apples.indexOf(apple)
    this.apples.splice(i,1)
  }
​
  isDone(): boolean {
    var isDone = false;
    if( this.apples.length === 0 )
    {
      isDone = true;
    }
      return isDone;
  }
​
  getApples(): Cell[] {
    return this.apples
  }
}
