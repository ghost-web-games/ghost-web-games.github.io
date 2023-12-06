import Vector from "./libs/vector";

export default class Mouse {
    pos: Vector
    radius: number

    constructor(canvas: HTMLCanvasElement) {
        this.pos = new Vector(-1000, -1000)
        this.radius = 40

        canvas.onmousemove = e => this.pos.setXY(e.clientX, e.clientY)
        canvas.ontouchmove = e => this.pos.setXY(e.touches[0].clientX, e.touches[0].clientY)
        canvas.ontouchcancel = () => this.pos.setXY(-1000, -1000)
        canvas.ontouchend = () => this.pos.setXY(-1000, -1000)
    }

    get Pos(): Vector { return this.pos }
}