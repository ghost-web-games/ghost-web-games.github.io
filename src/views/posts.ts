import Page from "./page";
import { GlobalData } from "../factory/webfactory";
import CategoryView from "../models/cateview";
import { CategoryTree } from "../models/type";
import { OutputData } from "@editorjs/editorjs";

export default class Posts extends Page {
    cateId: string | null = ""
    constructor(private data: GlobalData, private cateView: CategoryView) {
        super("layout/posts.html")
    }
    getherPost(node: CategoryTree, postIds: string[]) {
        postIds.push(...node.postIds)
        node.children.forEach((child) => {
            this.getherPost(child, postIds)
        })
    }
    InitPostList() {
        if(this.cateId == null) throw new Error("undefined cate id");

        const node = this.data.cateMap.get(this.cateId)
        if(!node) throw new Error("undefined node id");

        const catedom = document.getElementById("catename")
        if (catedom) catedom.innerText = node.title + "'s Posts"

        let html = ""
        const postIds: string[] = []
        this.getherPost(node, postIds)

        postIds.forEach((id) => {
            const post = this.data.postMap.get(id)
            if (!post) throw new Error("undefined post id");
            let imgUrl = "", content = ""
            const output = JSON.parse(post.data) as OutputData
            output.blocks.forEach((data) => {
                if(data.type == "image") {
                    console.log(data.data.file.url)
                    imgUrl = data.data.file.url
                }
                if(data.type == "paragraph") {
                    content = data.data.text
                }
            })
            const date = new Date(post.date)
            html += `
            <div class="row">
                <div class="col"><hr class="border-top"/></div>
            </div>
            <div class="row">
                <div class="col-md-4${(imgUrl != "") ? ` mb-4"><img src="${imgUrl}" class="rounded" style="width:100%;">` : `">`}</div>
                <div class="col-md-8 mb-4">
                    <h3 class="mb-0"><a id="post-${id}" class="hand ms-1"
                    onclick="window.ClickLoadPage('post', false, '&postid=${id}')">${post.title}</a></h3>
                    <div class="mb-1 text-body-secondary">${new Intl.DateTimeFormat('en-US', {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }).format(date)}</div>
                    <p class="card-text mb-auto">
                        ${content}
                    </p>
                </div>
            </div>
            `
        })
        const dom = document.getElementById("postlist")
        if(dom) dom.insertAdjacentHTML("afterbegin", html)
    }
    StartUpdate() {
        this.cateView.StartUpdate()
    }
    InitTree() {
        this.cateView.param = {
            domId: "category",
            nodeBeforeHtmlEvent: (node: CategoryTree, _: number) => {
                let html = ""
                for (const id of node.postIds) {
                    const post = this.data.postMap.get(id)
                    if (!post) continue
                    html += `<li class="mb-1"><a id="post-${id}" class="hand ms-1"
                    onclick="window.ClickLoadPage('post', false, '&postid=${id}')">${post.title}</a>
                    </li>`
                }
                return html
            },
        }
    }
    public async Run(): Promise<boolean> {
        await this.LoadHtml()
        await this.waitForCondition(() => this.data.Loaded)
        this.cateId = this.getParam("cateid")
        if(this.cateId == null) {
            window.ClickLoadPage("main", false)
            return false
        }
        this.InitTree()
        this.StartUpdate()
        this.InitPostList()

        return true
    }

    public Release(): void { }
}