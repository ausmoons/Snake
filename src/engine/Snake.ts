import { Cell } from "./Cell";
import { Direction } from "./Direction";
import { Game } from "./Game";

export class Snake {
  head = new Cell(2, 0)
  tail = [new Cell(0, 0), new Cell(1, 0)]
  direction: Direction = 'Right'
  tailSize = 2


  setDirection(direction: Direction) {
    
if(this.direction === 'Right')
{
  if(direction === 'Left')
  {
    direction = 'Right'
  }
 
  
}  
else if(this.direction === 'Left')
{
  if(direction === 'Right')
  {
    direction = 'Left'
  }
} 
else if(this.direction === 'Up')
{
  if(direction === 'Down')
  {
    direction = 'Up'
  }
} 
else if(this.direction === 'Down')
{
  if(direction === 'Up')
  {
    direction = 'Down'
  }
} 
this.direction = direction
  }

  move() {
    this.tail.push(this.head)
    if (this.tailSize < this.tail.length) {
      this.tail.shift()
    }
    switch (this.direction) {
      case 'Right':
        this.head = new Cell(this.head.x + 1, this.head.y)
        break
      case 'Down':
        this.head = new Cell(this.head.x, this.head.y + 1)
        break
      case 'Up':
        this.head = new Cell(this.head.x, this.head.y - 1)
        break
      case 'Left':
        this.head = new Cell(this.head.x - 1, this.head.y)
        break
    }

  }

  grow() {
    this.tailSize += 3
  }

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell): boolean {
   var stop = false;
   
   if (this.tail.some(element => element.x === cell.x && element.y === cell.y) === true)
   {
    stop = true;
   }
  return stop
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail
  }

}
