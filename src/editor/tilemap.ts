import { IDraw } from "../interface/IDraw"
import Vector from "../libs/vector"
import { IMouseEvent } from "../mouse"

export default class TileMap implements IMouseEvent, IDraw {
    img: HTMLImageElement
    width: number
    height: number
    gridpx: number
    cursor: Vector
    leftPos: Vector
    choiceEntry: Vector
    choiceFlag: boolean
    mag: number

    constructor(width: number, height: number, gridpx: number, id: string) {
        this.img = document.querySelector(id) as HTMLImageElement
        this.width = width
        this.height = height
        this.gridpx = gridpx
        this.cursor = new Vector(-1000, -1000)
        this.leftPos = new Vector(-1000, -1000)
        this.choiceEntry = new Vector(-1000, -1000)
        this.choiceFlag = false
        this.mag = 1

        this.updatePos()
    }

    OverEvent(x: number, y: number): void {
        this.cursor.setXY(x, y)
    }

    ClickUpEvent(x: number, y: number): void { }

    ClickEvent(x: number, y: number): void {
        if (x > this.leftPos.x && x < this.leftPos.x + this.img.width * this.mag &&
            y > this.leftPos.y && y < this.leftPos.y + this.img.height * this.mag) {
            this.choiceMap((x - this.leftPos.x) * this.mag, (y - this.leftPos.y) * this.mag)
        }
    }
    choiceMap(x: number, y: number): void {
        if (this.choiceFlag == false) {
            this.choiceEntry.setXY(x, y)
            this.choiceFlag = true
        } else {
            this.choiceFlag = false
        }
    }
    updatePos() {
        const _x = (this.width - this.img.width * this.mag) / 2
        const x = _x - _x % (this.gridpx * this.mag)
        const _y = (this.height - this.img.height * this.mag)
        const y =  _y - _y  % (this.gridpx * this.mag) - this.gridpx * this.mag * 4
        this.leftPos.setXY(x, y)
        console.log(this.leftPos, ", ", this.mag)
    }

    public resize(width: number, height: number) {
        this.width = width
        this.height = height
        this.updatePos()
    }

    public draw(ctx: CanvasRenderingContext2D | null, magnifiaction: number) {
        if (ctx == null) return
        if (this.mag != magnifiaction) {
            this.mag = magnifiaction
            this.updatePos()
        }

        ctx.drawImage(
            this.img,
            this.leftPos.x, this.leftPos.y, 
            this.img.width * this.mag, this.img.height * this.mag
        )
        if (this.choiceFlag == true) {
            const x = this.cursor.x - this.cursor.x % (this.gridpx * this.mag)
            const y = this.cursor.y - this.cursor.y % (this.gridpx * this.mag)
            ctx.drawImage(
                this.img,
                this.choiceEntry.x, this.choiceEntry.y, this.gridpx, this.gridpx,
                x, y, this.gridpx * this.mag, this.gridpx * this.mag)
        }
    }
}