import Vector from "./libs/vector";
export class Background {
    constructor(config, y) {
        this.img = config.img;
        this.height = y;
        this.width = y * (this.img.width / this.img.height);
        this.leftPos = new Vector(0, 0);
        this.rightPos = new Vector(this.width - 4, 0);
    }
    update() {
    }
    draw(ctx) {
        if (ctx == null)
            return;
        ctx.drawImage(this.img, this.leftPos.x, this.leftPos.y, this.width, this.height);
    }
}
//# sourceMappingURL=background.js.map