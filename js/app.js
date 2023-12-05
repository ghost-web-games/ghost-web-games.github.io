import { Background } from "./background.js";
class App {
    constructor() {
        this.backgrounds = [
            new Background({
                img: document.querySelector('#bg1-img'),
            }, App.height)
        ];
    }
    init() {
        var _a;
        App.canvas.width = App.width * App.dpr;
        App.canvas.height = App.height * App.dpr;
        (_a = App.ctx) === null || _a === void 0 ? void 0 : _a.scale(App.dpr, App.dpr);
        this.backgrounds.forEach(bg => {
            bg.update();
            bg.draw(App.ctx);
        });
    }
    render() {
        let now, delta;
        let then = Date.now();
        const frame = () => {
            requestAnimationFrame(frame);
        };
    }
}
App.canvas = document.querySelector('canvas');
App.ctx = App.canvas.getContext('2d');
App.dpr = devicePixelRatio > 1 ? 2 : 1;
App.interval = 1000 / 60;
App.width = 1024;
App.height = 768;
export default App;
//# sourceMappingURL=app.js.map