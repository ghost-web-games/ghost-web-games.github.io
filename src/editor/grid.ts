import Vector from "../libs/vector.js"


export default class Grid{
    width: number
    height: number
    gridpx: number
    cursor: Vector

    constructor(width: number, height: number, gridpx: number){
        this.width = width
        this.height = height
        this.gridpx = gridpx
        this.cursor = new Vector(-1000, -1000)
    }

    public update(pos: Vector) {
        this.cursor.setXY(pos.x, pos.y)
    }

    public draw(ctx: CanvasRenderingContext2D | null) {
        if (ctx == null) return

        ctx.clearRect(0, 0, this.width, this.height);
        ctx.beginPath();

        for(let i = 0; i < this.width; i += this.gridpx) {
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, this.height)
            ctx.strokeStyle = 'silver'
            ctx.stroke()
        }
        for(let i = 0; i < this.height; i += this.gridpx) {
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(this.width, i)
            ctx.strokeStyle = 'silver'
            ctx.stroke()
        }

        const x = this.cursor.x - this.cursor.x % this.gridpx
        const y = this.cursor.y - this.cursor.y % this.gridpx
        if (x > 0 && x < this.width && y > 0 && y < this.height) {
            ctx.fillStyle = 'pink'
            ctx.fillRect(x, y, this.gridpx, this.gridpx)
        }
    }
}