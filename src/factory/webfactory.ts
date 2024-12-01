import { Session } from "../models/session";
import { CategoryTree, FuncMap, StoreData } from "../models/type";
import { Socket } from "../libs/socket"
import Main from "../views/main";
import DataManager from "../models/datamgr";
import CategoryView from "../models/cateview";
import Post from "../views/post";
import Posts from "../views/posts";

export type GlobalData = {
    root: CategoryTree
    cateMap: Map<string, CategoryTree>
    posts: StoreData[]
    postMap: Map<string, StoreData>
    Loaded: boolean
}


export class WebFactory {
    socket: Socket
    session: Session
    data: GlobalData = {
        root: {
            id: "root",
            title: "",
            date: 1,
            children: [],
            postIds: []
        },
        cateMap: new Map<string, CategoryTree>(),
        posts: [],
        postMap: new Map<string, StoreData>(),
        Loaded: false
    }
    dataMgr = new DataManager(this.data)
    cateView = new CategoryView(this.data, {})

    public constructor() {
        this.socket = new Socket()
        this.session = new Session()
    }

    public Build(): FuncMap {

        const funcMap: FuncMap = {
            "main": new Main(this.data, this.cateView),
            "post": new Post(this.data, this.cateView),
            "posts": new Posts(this.data, this.cateView),
        };
        return funcMap;
    }

    public GetSession(): Session { return this.session; }
}