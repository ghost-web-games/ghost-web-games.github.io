import { IDraw } from "../interface/IDraw"
import Vector from "../libs/vector"
import { IMouseEvent } from "../mouse"
import { ObjConfig } from "../models/objconfig"
import { IMoveState, MoveState } from "./movestate"

export default class Player implements IDraw, IMouseEvent {
    leftStat: IMoveState
    rightStat: IMoveState
    upStat: IMoveState
    downStat: IMoveState
    curStat: IMoveState
    stateList: IMoveState[]

    pixel: number
    mag: number
    pos: Vector


    constructor(config: ObjConfig) {
        this.mag = config.mag
        this.pixel = config.pixel
        this.pos = new Vector((config.width - this.viewpixel) / 2,
            (config.height - this.viewpixel) / 2)
        config.idleTiles = [85, 88]
        config.tiles = [91, 94]
        this.leftStat = new MoveState(config)
        config.idleTiles = [49, 52]
        config.tiles = [55, 58]
        this.upStat = new MoveState(config)
        config.idleTiles = [13, 16]
        config.tiles = [19, 22]
        this.downStat = new MoveState(config)
        config.idleTiles = [121, 124]
        config.tiles = [127, 130]
        this.rightStat = new MoveState(config)

        this.stateList = [this.leftStat, this.rightStat, this.upStat, this.downStat]
        this.curStat = this.downStat
    }
    get viewpixel(): number {
        return this.pixel * this.mag
    }

    OverEvent(x: number, y: number): void {
    }
    ClickUpEvent(x: number, y: number): void { 
        this.curStat.Moving = false
    }
    ClickEvent(x: number, y: number): void {
        const x_di = this.pos.x - x
        if ( x_di < 0 ) {
            this.curStat = this.rightStat
        } else {
            this.curStat = this.leftStat
        }
        this.curStat.Moving = true
    }

    public resize(width: number, height: number) {
        this.pos = new Vector((width - this.viewpixel) / 2,
            (height - this.viewpixel) / 2)
        this.stateList.forEach((state) => {
            state.resize(width, height)
        })
    }

    public update() {
        this.curStat.update()
    }

    public draw(ctx: CanvasRenderingContext2D | null, magnifiaction: number) {
        this.curStat.draw(ctx, magnifiaction)
    }
}