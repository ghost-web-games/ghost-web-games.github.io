export default class Grid {
    constructor(width, height, gridpx) {
        this.width = width;
        this.height = height;
        this.gridpx = gridpx;
    }
    update() {
    }
    draw(ctx) {
        if (ctx == null)
            return;
        for (let i = 0; i < this.width; i += this.gridpx) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, this.height);
            ctx.strokeStyle = 'pink';
            ctx.stroke();
        }
        for (let i = 0; i < this.height; i += this.gridpx) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(0, this.width);
            ctx.strokeStyle = 'pink';
            ctx.stroke();
        }
    }
}
//# sourceMappingURL=grid.js.map