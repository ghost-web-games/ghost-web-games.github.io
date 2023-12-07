import { Background } from "./background"


export default class App {
    static canvas = document.querySelector('canvas') as HTMLCanvasElement
    static ctx = App.canvas.getContext('2d')
    static dpr = devicePixelRatio > 1 ? 2 : 1
    static interval = 1000 / 60
    static width = 1024
    static height = 768
    backgrounds: Background[]

    constructor() {
        this.backgrounds = [
            new Background({
                img: document.querySelector('#bg1-img') as HTMLImageElement,
            }, App.height)
        ]
    }

    public init() {
        App.canvas.width = App.width * App.dpr
        App.canvas.height = App.height * App.dpr
        App.ctx?.scale(App.dpr, App.dpr)
        this.backgrounds.forEach(bg => {
            bg.update()
            bg.draw(App.ctx)
        })
    }
    public render() {
        let now, delta
        let then = Date.now()

        const frame = () => {

            requestAnimationFrame(frame)
        }

    }
}