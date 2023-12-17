import { BlockStore } from "./store";
import { FuncMap } from "../models/type";
import { Session } from "../models/session";
import { GhostWebUser } from "../models/param";
type UrlMap = { [key: string]: string; }

export class Base {
    m_basePath: string
    urlToFileMap: UrlMap
    beforPage: string
    funcMap: FuncMap
    m_blockStore: BlockStore
    m_session: Session

    constructor(basePath: string, funcMap: FuncMap, blockStore: BlockStore, session: Session) {
        this.m_basePath = basePath
        this.urlToFileMap = {
            "signin": basePath + "layout/signin.html",
            "signup": basePath + "layout/signup.html",
            "main": basePath + "layout/hons.html",
            "hons": basePath + "layout/hons.html",
            "hon": basePath + "layout/hon.html",
            "hondetail": basePath + "layout/hondetail.html",
            "newhon": basePath + "layout/newhon.html",
            "uploadhon": basePath + "layout/uploadhon.html",
            "profile": basePath + "layout/profile.html",
        };
        this.beforPage = ""
        this.funcMap = funcMap
        this.m_blockStore = blockStore
        this.m_session = session
    }
    getPageIdParam() {
        const urlParams = new URLSearchParams(window.location.search);
        const pageid = urlParams.get("pageid");
        const key = (pageid == null) ? "main" : pageid;
        if (this.beforPage == "") this.beforPage = key;
        return key;
    }
    public ClickLoadPage(key: string, fromEvent: boolean, ...args: string[]) {
        //if (getPageIdParam() == key) return;

        const url = this.urlToFileMap[key];
        const state = {
            'url': window.location.href,
            'key': key,
            'fromEvent': fromEvent,
            'args': args
        };
        console.log(`page change : ${this.beforPage} ==> ${key}`)
        const backUpBeforPage = this.beforPage;
        this.beforPage = key;

        history.pushState(state, "login", "./?pageid=" + key + args);
        fetch(url)
            .then(response => { return response.text(); })
            .then(data => { (document.querySelector("contents") as HTMLDivElement).innerHTML = data; })
            .then(() => {
                const beforePageObj = this.funcMap[backUpBeforPage];
                if (beforePageObj != undefined) {
                    beforePageObj.Release();
                }

                const pageObj = this.funcMap[key];
                if (pageObj != undefined) {
                    pageObj.Run(window.MasterAddr);
                }
            });
    };

    public parseResponse(nodes: GhostWebUser[]) {
        let randIdx = Math.floor(Math.random() * nodes.length);
        this.m_blockStore.AddMasters(nodes);
        window.NodeCount = nodes.length;
        console.log(nodes);
        return nodes[randIdx];
    };

    public loadNodesHtml(node: GhostWebUser) {
        window.MasterNode = node;
        window.MasterAddr = `http://${node.User.ip.Ip}:${node.User.ip.Port}`;
        this.m_blockStore.MasterAddr = window.MasterAddr
        return window.MasterAddr;
    };
    public includeHTML(id: string, filename: string) {
        window.addEventListener('load', () => fetch(filename)
            .then(response => { return response.text(); })
            .then(data => { (document.querySelector(id) as HTMLDivElement).innerHTML = data; }));
    }

    public includeContentHTML(master: string) {
        const key = this.getPageIdParam();
        const filename = this.urlToFileMap[key];
        const backUpBeforPage = this.beforPage;
        this.beforPage = key;
        fetch(filename)
            .then(response => { return response.text(); })
            .then(data => { (document.querySelector("contents") as HTMLDivElement).innerHTML = data; })
            .then(() => {
                const beforePageObj = this.funcMap[backUpBeforPage];
                if (beforePageObj != undefined) {
                    beforePageObj.Release();
                }

                const pageObj = this.funcMap[key];
                if (pageObj != undefined) {
                    pageObj.Run(master);
                }
            });
    }
    public InitIncludeHTML() {
        this.includeHTML("header", "navbar.html");
        this.includeHTML("footer", "foot.html");
    }
}