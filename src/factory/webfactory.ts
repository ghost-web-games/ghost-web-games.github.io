import { BlockStore } from "../views/store";
import { Session } from "../models/session";
import { FuncMap } from "../models/type";
import { Socket } from "../libs/socket"
import { HonDetail } from "../views/hondetail";
import { Hons } from "../views/hons";
import { Hon } from "../views/hon";
import { NewHon } from "../views/newhon";
import { Signup } from "../views/signup";
import { Signin } from "../views/signin";
import { GhostWebUser } from "../models/param";

export class WebFactory {
    blockStore: BlockStore
    socket: Socket
    session: Session
    signIn: Signin
    signUp: Signup
    hon: Hon
    hons: Hons
    hondetail: HonDetail
    newHon: NewHon
    

    public constructor() {
        this.blockStore = new BlockStore();
        this.socket = new Socket()

        this.session = new Session()

        this.signIn = new Signin(this.blockStore, this.session)
        this.signUp = new Signup(this.blockStore, this.session)
        this.hon = new Hon(this.blockStore, this.session)
        this.hons = new Hons(this.blockStore, this.session)
        this.hondetail = new HonDetail(this.blockStore, this.session)
        this.newHon = new NewHon(this.blockStore, this.session)
    }

    public Build(): FuncMap {

        const funcMap: FuncMap = {
            "signin": new Signin(this.blockStore, this.session),
            "signup": new Signup(this.blockStore, this.session),
            "hon": new Hon(this.blockStore, this.session),
            "hons": this.hons,
            "main": this.hons,
            "hondetail": new HonDetail(this.blockStore, this.session),
            "newhon": new NewHon(this.blockStore, this.session),
        };
        return funcMap;
    }

    public GetBlockStore(): BlockStore { return this.blockStore; }
    public GetSession(): Session { return this.session; }
}