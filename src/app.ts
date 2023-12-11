import { GUI } from "dat.gui"
import { Mouse } from "./mouse"
import AppFactory from "./factory/appfactory"
import { IDraw } from "./interface/IDraw"


export default class App {
    static dpr = devicePixelRatio > 1 ? 2 : 1
    static interval = 1000 / 60
    static width = innerWidth
    static height = innerHeight
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D | null
    mouse: Mouse
    drawObject: Array<IDraw>
    gui: GUI
    magnification: number

    constructor() {
        const factory = new AppFactory(16)
        this.canvas = factory.Canvas
        this.ctx = factory.Context
        this.mouse = factory.Mouse
        this.gui = factory.Gui

        this.drawObject = new Array<IDraw>()
        this.magnification = 2


        const bgs = factory.Backgrounds
        bgs.forEach((bg) => {
            this.mouse.RegisterHandler(bg)
            this.drawObject.push(bg)
        })

        const player = factory.Player
        this.mouse.RegisterHandler(player)
        this.drawObject.push(player)

        this.resize()
        window.addEventListener('resize', this.resize.bind(this))
    }

    public init() {
        this.resize()
        this.gui.add(this, "magnification")
    }

    public render() {
        let now, delta
        let then = Date.now()

        const frame = () => {
            requestAnimationFrame(frame)

            now = Date.now()
            delta = now - then
            if (delta < App.interval) return

            this.drawObject.forEach((o) => {
                o.update()
            })
            this.drawObject.forEach((o) => {
                o.draw(this.ctx, this.magnification)
            })
         
            then = now - (delta % App.interval)
        }

        requestAnimationFrame(frame)
    }
    resize() {
        this.canvas.style.width = App.width + "px"
        this.canvas.style.height = App.height + "px"
        this.canvas.width = App.width * App.dpr
        this.canvas.height = App.height * App.dpr
        this.ctx?.scale(App.dpr, App.dpr)
        this.drawObject.forEach((o) => {
            o.resize(this.canvas.width / App.dpr, this.canvas.height / App.dpr)
        })
    }
}