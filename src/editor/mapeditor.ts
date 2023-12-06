import Mouse from "../mouse"
import Grid from "./grid"


export default class MapEditor {
    static dpr = devicePixelRatio > 1 ? 2 : 1
    static interval = 1000 / 60
    static width = 1024
    static height = 768
    grid: Grid
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D | null
    mouse: Mouse

    constructor() {
        this.canvas = document.querySelector('canvas') as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d')
        this.resize()
        window.addEventListener('resize', this.resize.bind(this))

        this.mouse = new Mouse(this.canvas)
        this.grid = new Grid(this.canvas.width, 
            this.canvas.height, 16)

        this.init()
    }


    public init() {
        this.grid.draw(this.ctx)
    }

    public render() {
        let now, delta
        let then = Date.now()

        const frame = () => {

            this.grid.update(this.mouse.Pos)
            this.grid.draw(this.ctx)
            requestAnimationFrame(frame)
        }
    }

    resize() {
        MapEditor.width = innerWidth
        MapEditor.height = innerHeight

        this.canvas.style.width = '100%'
        this.canvas.style.height = '100%'
        this.canvas.width = MapEditor.width * MapEditor.dpr
        this.canvas.height = MapEditor.height * MapEditor.dpr
        this.ctx?.scale(MapEditor.dpr, MapEditor.dpr)
    }
}