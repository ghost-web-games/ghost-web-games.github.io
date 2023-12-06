import Vector from "../libs/vector.js";
export default class AssetLoader {
    constructor(id, gridPx) {
        this.img = document.querySelector(id);
        this.gridPx = gridPx;
        this.leftPos = new Vector(0, 0);
        this.rightPos = new Vector(this.img.width - 4, 0);
    }
    set Pos(pos) {
        this.leftPos = pos;
    }
    draw(ctx) {
        if (ctx == null)
            return;
        ctx.drawImage(this.img, this.leftPos.x, this.leftPos.y, this.img.width, this.img.height);
    }
}
//# sourceMappingURL=assetloader.js.map