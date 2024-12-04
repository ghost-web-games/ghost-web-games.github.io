import Page from "./page";
import { CategoryTree, IPage, StoreData } from "../models/type";
import { GlobalData } from "../factory/webfactory";
import CategoryView from "../models/cateview";
import Editor from "../models/editor";
import { OutputData } from "@editorjs/editorjs";

export default class Main extends Page implements IPage {
    editor = new Editor()
    constructor(private data: GlobalData, private cateView: CategoryView) {
        super("layout/main.html")
    }
    InitPostBinding() {
        const post = this.data.posts[0]
        const date = new Date(post.date)
        this.domInnerText("title", post.title)
        this.domInnerText("postdate", new Intl.DateTimeFormat('en-US', {
            month: "long",
            day: "numeric",
            year: "numeric"
        }).format(date))

        this.editor.NewEditor("editorjs", () => {
            if (!this.editor) return
            this.editor.Render(JSON.parse(post.data))
        })
    }
    drawRecentPost(post:StoreData) {
        const date = new Date(post.date)
        const html = `
        <li><a class="d-flex flex-column flex-lg-row gap-3 align-items-start 
            align-items-lg-center py-3 link-body-emphasis text-decoration-none
            border-top hand" onclick="window.ClickLoadPage('post', false, '&postid=${post.id}')">
            <div class="col-lg-8">
                <h6 class="mb-0">${post.title}</h6>
                <small class="text-body-secondary">
                ${new Intl.DateTimeFormat('en-US', {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }).format(date)}</small>
            </div>
        </a></li>
        `
        return html
    }
    RecentPosts() {
        this.data.posts.sort((a, b) => b.date - a.date)
        let html = ""
        for (let i = 1; i < 5; i++) {
            if (!this.data.posts[i]) break
            html += this.drawRecentPost(this.data.posts[i])
        }
        this.domInnerHTML("recentposts", html)
    }
    UpdateMainPost() {
        let find: StoreData | undefined
        let content = "", imgUrl = ""
        this.data.posts.every((post) => {
            const output = JSON.parse(post.data) as OutputData
            output.blocks.forEach((data) => {
                if(data.type == "image") {
                    console.log(data.data.file.url)
                    imgUrl = data.data.file.url
                    find = post
                }
                if(data.type == "paragraph") {
                    content = data.data.text
                }
            })
            return (!find)
        })
        if (!find) return
        const dom = document.getElementById("bgimage")
        if (dom) {
            dom.style.backgroundImage = `url("${imgUrl}")`
            dom.classList.add("animated")
        }
        const more = document.getElementById("mainmore")
        if (more) more.onclick = () => {
            window.ClickLoadPage("post", false, "&postid=" + find?.id)
        }
        this.domInnerText("maintitle", find.title)
        this.domInnerText("maincontent", content)
    }
    StartUpdate() {
        const html = this.cateView.StartUpdate()
        this.domInnerHTML("category", html)
        this.domInnerHTML("firstchildren", this.cateView.DrawMenu())
    }
    InitTree() {
        this.cateView.param = {
            domId: "catelist",
            nodeBeforeHtmlEvent: (node: CategoryTree, _: number) => {
                let html = ""
                for (const id of node.postIds) {
                    const post = this.data.postMap.get(id)
                    if (!post) continue
                    //html += "&nbsp;".repeat(depth + 1)
                    html += `<li class="mb-1"><a id="post-${id}" class="hand"
                    onclick="window.ClickLoadPage('post', false, '&postid=${id}')">${post.title}</a></li>`
                }
                return html
            },
        }
    }
    waitForCondition(conditionFunc: () => boolean, interval: number = 100): Promise<void> {
        return new Promise((resolve) => {
            const checkCondition = () => {
                if (conditionFunc()) {
                    resolve();
                } else {
                    setTimeout(checkCondition, interval);
                }
            };
            checkCondition();
        });
    }
    public async Run(): Promise<boolean> {
        await this.LoadHtml()
        await this.waitForCondition(() => this.data.Loaded)
        this.InitTree()
        this.StartUpdate()
        this.UpdateMainPost()
        this.RecentPosts()
        this.InitPostBinding()

        return true
    }

    public Release(): void { }
}