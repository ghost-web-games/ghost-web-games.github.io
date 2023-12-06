import Vector from "./libs/vector"

type BackgroundConfig = {
    img: HTMLImageElement
}

export class Background {
    img: HTMLImageElement
    width: number
    height: number
    rightPos: Vector
    leftPos: Vector

    constructor(config: BackgroundConfig, y: number) {
        this.img = config.img
        this.height = y
        this.width = y * (this.img.width / this.img.height)
        this.leftPos = new Vector(0, 0)
        this.rightPos = new Vector(this.width - 4, 0)
    }

    public update() {

    }
    public draw(ctx: CanvasRenderingContext2D | null) {
        if (ctx == null) return
        ctx.drawImage(
            this.img,
            this.leftPos.x, this.leftPos.y, this.width, this.height
        )

    }
}