import Vector from "./libs/vector.js";
export default class Mouse {
    constructor(canvas) {
        this.pos = new Vector(-1000, -1000);
        this.radius = 40;
        this.eventHandler = new Array();
        canvas.onmousemove = e => this.overEvent(e.clientX, e.clientY);
        canvas.ontouchmove = e => this.clickEvent(e.touches[0].clientX, e.touches[0].clientY);
        canvas.ontouchcancel = () => this.pos.setXY(-1000, -1000);
        canvas.ontouchend = () => this.pos.setXY(-1000, -1000);
    }
    overEvent(x, y) {
        this.pos.setXY(x, y);
    }
    clickEvent(x, y) {
        this.pos.setXY(x, y);
        this.eventHandler.forEach((e) => {
            e();
        });
    }
    RegisterHandler(callback) {
        this.eventHandler.push(callback);
    }
    get Pos() { return this.pos; }
}
//# sourceMappingURL=mouse.js.map