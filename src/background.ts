import Vector from "./libs/vector"
import * as pxutil from "./libs/pixelutil"
import { IDraw } from "./interface/IDraw"
import { IMouseEvent } from "./mouse"
import { ObjConfig } from "./models/objconfig"



export class Background implements IDraw, IMouseEvent{
    img: HTMLImageElement
    pixel: number
    width: number
    height: number
    mag: number
    rightPos: Vector
    leftPos: Vector
    tileVec: Array<Vector>
    map: Array<Vector>

    constructor(config: ObjConfig) {
        this.img = config.img
        this.pixel = config.pixel
        this.mag = config.mag
        this.height = pxutil.pixelFitUp(config.height, config.pixel)
        this.width = pxutil.pixelFitUp(config.width, config.pixel)
        this.leftPos = new Vector(0, 0)
        this.rightPos = new Vector(this.width - 4, 0)
        this.tileVec = new Array<Vector>()
        this.map = new Array<Vector>()
        this.selectTile(config.tiles)
    }

    public selectTile(offsets: number[]) {
        offsets.forEach((offset) => {
            const x = offset % (this.img.width / this.pixel) * this.pixel
            const y = Math.floor(offset / (this.img.width / this.pixel)) * this.pixel
            const v = new Vector(x, y)
            this.tileVec.push(v)
        })
        this.fillBackground()
    }
    get viewpixel() : number {
        return this.pixel * this.mag
    }
    fillBackground(){
        const x_tile = Math.floor(this.width / this.viewpixel)
        const y_tile = Math.floor(this.height / this.viewpixel)

        for (let i = 0; i < x_tile * y_tile; i++) {
            const tileRdIdx = Math.floor(Math.random() * this.tileVec.length)
            const tile = this.tileVec[tileRdIdx]
            this.map.push(tile)
        }
    }

    OverEvent(x: number, y: number): void {
    }
    ClickUpEvent(x: number, y: number): void { 
    }
    ClickEvent(x: number, y: number): void {
    }

    public update() {

    }

    public resize(width: number, height: number) {
        this.width = width
        this.height = height
        this.fillBackground()
    }

    public draw(ctx: CanvasRenderingContext2D | null, magnifiaction: number) {
        if (ctx == null) return
        if (this.mag != magnifiaction) {
            this.mag = magnifiaction
            this.fillBackground()
        }
        const x_tile = Math.floor(pxutil.pixelFitUp(this.width, this.viewpixel) / this.viewpixel)
        const y_tile = Math.floor(pxutil.pixelFitUp(this.height, this.viewpixel) / this.viewpixel)

        for (let i = 0; i < x_tile * y_tile; i++) {
            const x = (i % x_tile) * this.viewpixel
            const y = Math.floor(i / x_tile) * this.viewpixel
            const tile = this.map[i]
            ctx.drawImage(
                this.img,
                tile.x, tile.y, this.pixel, this.pixel,
                x, y, this.viewpixel, this.viewpixel
            )
        }
    }
}