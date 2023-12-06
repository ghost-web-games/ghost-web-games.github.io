import Vector from "./libs/vector.js";

export default class Mouse {
    pos: Vector
    radius: number
    eventHandler: Array<Function>

    constructor(canvas: HTMLCanvasElement) {
        this.pos = new Vector(-1000, -1000)
        this.radius = 40
        this.eventHandler = new Array<Function>()

        canvas.onmousemove = e => this.overEvent(e.clientX, e.clientY)
        canvas.ontouchmove = e => this.clickEvent(e.touches[0].clientX, e.touches[0].clientY)
        canvas.ontouchcancel = () => this.pos.setXY(-1000, -1000)
        canvas.ontouchend = () => this.pos.setXY(-1000, -1000)
    }
    overEvent(x: number, y: number) {
        this.pos.setXY(x, y)
    }

    clickEvent(x: number, y: number) {
        this.pos.setXY(x, y)
        this.eventHandler.forEach((e) => {
            e()
        })
    }
    public RegisterHandler(callback: Function) {
        this.eventHandler.push(callback)
    }

    get Pos(): Vector { return this.pos }
}