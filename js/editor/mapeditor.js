import Grid from "./grid";
class MapEditor {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
        this.grid = new Grid(this.canvas.width, this.canvas.height, 16);
        this.init();
    }
    init() {
        this.grid.draw(this.ctx);
    }
    render() {
        let now, delta;
        let then = Date.now();
        const frame = () => {
            requestAnimationFrame(frame);
        };
    }
    resize() {
        var _a;
        MapEditor.width = innerWidth;
        MapEditor.height = innerHeight;
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.width = MapEditor.width * MapEditor.dpr;
        this.canvas.height = MapEditor.height * MapEditor.dpr;
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.scale(MapEditor.dpr, MapEditor.dpr);
    }
}
MapEditor.dpr = devicePixelRatio > 1 ? 2 : 1;
MapEditor.interval = 1000 / 60;
MapEditor.width = 1024;
MapEditor.height = 768;
export default MapEditor;
//# sourceMappingURL=mapeditor.js.map