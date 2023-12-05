
type BackgroundConfig = {
    img: HTMLImageElement
}
type Position = {
    x: number
    y: number
}

export class Background {
    img: HTMLImageElement
    width: number
    height: number
    rightPos: Position
    leftPos: Position

    constructor(config: BackgroundConfig, y: number) {
        this.img = config.img
        this.height = y
        this.width = y * (this.img.width / this.img.height)
        this.leftPos = { x: 0, y: 0 }
        this.rightPos = { x: this.width - 4, y: 0 }
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