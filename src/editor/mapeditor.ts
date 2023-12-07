import EditorFactory from "../factory/editorfactory"
import { Mouse } from "../mouse"
import AssetLoader from "./assetloader"
import Grid from "./grid"
import { GUI } from "dat.gui"
import TileMap from "./tilemap"
import { IDraw } from "../interface/IDraw"


export default class MapEditor {
    static dpr = devicePixelRatio > 1 ? 2 : 1
    static interval = 1000 / 60
    static width = 1024
    static height = 768
    grid: Grid
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D | null
    mouse: Mouse
    tilemap: TileMap
    gui: GUI
    drawObject: Array<IDraw>
    magnification: number

    constructor() {
        const factory = new EditorFactory(16)
        this.canvas = factory.Canvas
        this.ctx = factory.Context

        this.mouse = factory.Mouse
        this.grid = factory.Grid
        this.gui = factory.Gui
        this.tilemap = factory.TileMap

        this.drawObject = new Array<IDraw>()
        this.drawObject.push(this.grid)
        this.drawObject.push(this.tilemap)

        this.mouse.RegisterHandler(this.grid)
        this.mouse.RegisterHandler(this.tilemap)

        this.magnification = 2

        this.resize()
        window.addEventListener('resize', this.resize.bind(this))
    }

    public init() {

    }


    public render() {
        let now, delta
        let then = Date.now()

        const frame = () => {

            this.drawObject.forEach((o)=> {
                o.draw(this.ctx, this.magnification)
            })
            requestAnimationFrame(frame)
        }
        frame()
    }

    resize() {
        MapEditor.width = innerWidth
        MapEditor.height = innerHeight

        this.canvas.style.width = '100%'
        this.canvas.style.height = '100%'
        this.canvas.width = MapEditor.width * MapEditor.dpr
        this.canvas.height = MapEditor.height * MapEditor.dpr
        this.ctx?.scale(MapEditor.dpr, MapEditor.dpr)
        this.drawObject.forEach((o) => {
            o.resize(this.canvas.width, this.canvas.height)
        })
    }
}