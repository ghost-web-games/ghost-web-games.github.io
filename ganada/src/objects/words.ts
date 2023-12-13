import { IMover } from "../contoller/usercontoller";
import { IDraw } from "../interface/IDraw";
import * as pxutil from "../libs/pixelutil"
import Vector from "../libs/vector";
import { ObjConfig } from "../models/objconfig";
import { IBox } from "./boundingbox";
import Word from "./word";

export default class Words implements IDraw, IMover {
    centerPos: Vector
    pixel: number
    mag: number
    wordStr: string[]
    words: Array<Word>
    width: number
    height: number
    wordsBox: Array<IBox>
    completeWord: string

    constructor(config: ObjConfig) {
        this.mag = config.mag
        this.pixel = config.pixel
        this.centerPos = new Vector(0, 0)
        this.height = pxutil.pixelFitUp(config.height, this.viewpixel)
        this.width = pxutil.pixelFitUp(config.width, this.viewpixel)
        
        this.completeWord = "강아지"
        this.words = new Array<Word>()
        this.wordsBox = new Array<IBox>()
        const colors = ["red", "orange", "yellow", "green", "blue", "purple", "indigo"]
        this.wordStr = ["ㄱ", "ㅏ", "ㅇ", "ㅇ", "ㅏ", "ㅈ", "ㅣ"]
        this.wordStr.forEach((w, i) => {
            const word = new Word(config, colors[i], w)
            this.words.push(word)
            this.wordsBox.push(word)
        })
    }

    InitCoord(playerCoord: Vector): void {
        this.words.forEach((w) => {
            w.InitCoord(playerCoord)
        })
    }
    Moving(playerCoord: Vector): void {
        this.words.forEach((w) => {
            w.Moving(playerCoord)
        })
    }
    MoveStart(playerCoord: Vector): void {
        this.words.forEach((w) => {
            w.MoveStart(playerCoord)
        })
    }
    MoveEnd(playerCoord: Vector): void {
        this.words.forEach((w) => {
            w.MoveEnd(playerCoord)
        })
    }
    public resize(width: number, height: number) {
        this.height = pxutil.pixelFitUp(height, this.viewpixel)
        this.width = pxutil.pixelFitUp(width, this.viewpixel)
        this.centerPos = new Vector((this.width - this.viewpixel) / 2,
            (this.height - this.viewpixel) / 2)
        this.words.forEach((w) => { 
            w.resize(width, height)
        })
    }

    public CollidingCheck(target: IBox) {
        if (this.wordStr.length == 0) return

        for (let i = 0; i < this.words.length; i++) {
            if (this.words[i].BBox.isColliding(target) &&
                this.words[i].Str == this.wordStr[0]) {
                this.words.splice(i, 1)
                this.wordStr.splice(0, 1)
            }
        }
    }

    get viewpixel(): number {
        return this.pixel * this.mag
    }

    public update() {
    }

    public draw(ctx: CanvasRenderingContext2D | null, magnifiaction: number) {
        if (ctx == null) return
        if (this.mag != magnifiaction) {
            this.mag = magnifiaction
        }
 
        ctx.font = `${this.viewpixel}px verdana bold`
        ctx.textBaseline = "top"
        ctx.strokeStyle = "blue"
        ctx.fillStyle = "white"
        ctx.fillText(this.completeWord, 16, 16)
        ctx.strokeText(this.completeWord, 16, 16)
        this.words.forEach((w, i) => {
            ctx.strokeText(this.wordStr[i], this.viewpixel * i + 16, this.viewpixel + 16)
            w.draw(ctx, magnifiaction)
            //for debugging
            w.BBox.draw(ctx, magnifiaction)
        })
    }
}