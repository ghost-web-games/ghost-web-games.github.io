import { FuncMap, IPage } from "../models/type";
import { Session } from "../models/session";
import CategoryView from "../models/cateview";

export class Base {
    m_basePath: string
    beforPage: string
    funcMap: FuncMap
    m_session: Session
    CurrentPage?: IPage

    constructor(basePath: string, funcMap: FuncMap, session: Session) {
        this.m_basePath = basePath
        
        this.beforPage = ""
        this.funcMap = funcMap
        this.m_session = session
    }
    getPageIdParam() {
        const urlParams = new URLSearchParams(window.location.search);
        const pageid = urlParams.get("pageid");
        const key = (pageid == null) ? "main" : pageid;
        if (this.beforPage == "") this.beforPage = key;
        return key;
    }
    public async ClickLoadPage(key: string, fromEvent: boolean, ...args: string[]) {
        //if (getPageIdParam() == key) return;

        const state = {
            'url': window.location.href,
            'key': key,
            'fromEvent': fromEvent,
            'args': args
        };
        console.log(`page change : ${this.beforPage} ==> ${key}`)
        this.beforPage = key;

        history.pushState(state, "login", "./?pageid=" + key + args)

        const beforePageObj = this.CurrentPage
        if (beforePageObj != undefined) {
            beforePageObj.Release();
        }

        this.CurrentPage = this.funcMap[key]
        if (this.CurrentPage != undefined) {
            await this.CurrentPage.Run();
        }

    };

    public includeHTML(id: string, filename: string) {
        window.addEventListener('load', () => fetch(filename)
            .then(response => { return response.text(); })
            .then(data => { 
                const dom = document.querySelector(id) as HTMLDivElement
                if (dom) dom.innerHTML = data; 
            }))
    }

    async includeContentHTML() {
        const key = this.getPageIdParam();
        this.beforPage = key;

        const beforePageObj = this.CurrentPage
        beforePageObj?.Release();

        this.CurrentPage = this.funcMap[key];
        await this.CurrentPage?.Run();
    }
    public Initialize() {
        this.includeHTML("header", "navbar.html");
        this.includeHTML("footer", "foot.html");
    }
}