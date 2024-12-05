import Page from "./page";
import { GlobalData } from "../factory/webfactory";
import CategoryView from "../models/cateview";
import { CategoryTree } from "../models/type";
import Editor from "../models/editor";

export default class Post extends Page {
    editor = new Editor()
    postId: string | null = ""
    constructor(private data: GlobalData, private cateView: CategoryView) {
        super("layout/post.html")
    }
    InitPostBinding() {
        if(this.postId == null) throw new Error("undefined post id");
        
        const post = this.data.postMap.get(this.postId)
        if(!post) throw new Error("undefined post id");
        
        const date = new Date(post.date)
        const domTitle = document.getElementById("title")
        if (domTitle) domTitle.innerText = post.title
        const domDate = document.getElementById("postdate")
        if (domDate) domDate.innerText = new Intl.DateTimeFormat('en-US', {
            month: "long",
            day: "numeric",
            year: "numeric"
        }).format(date)

        this.editor.NewEditor("editorjs", () => {
            if (!this.editor) return
            this.editor.Render(JSON.parse(post.data))
        })
    }
    StartUpdate(id: string) {
        this.cateView.StartUpdate(id)
        const dom = document.getElementById(`post-${id}`)
        if (dom) {
            dom.classList.add("fw-bold")
            dom.classList.add("text-decoration-underline")
        }
    }
    InitTree() {
        this.cateView.param = {
            domId: "category",
            nodeBeforeHtmlEvent: (node: CategoryTree, _: number) => {
                let html = ""
                for (const id of node.postIds) {
                    const post = this.data.postMap.get(id)
                    if (!post) continue
                    //html += "&nbsp;".repeat(depth + 1)
                    html += `<li class="mb-1"><a id="post-${id}" class="hand ms-1"
                    onclick="window.ClickLoadPage('post', false, '&postid=${id}')">${post.title}</a></li>`
                }
                return html
            },
        }
    }
    public async Run(): Promise<boolean> {
        await this.LoadHtml()
        await this.waitForCondition(() => this.data.Loaded)
        this.postId = this.getParam("postid")
        if(this.postId == null) {
            window.ClickLoadPage("main", false)
            return false
        }
        this.InitTree()
        this.StartUpdate(this.postId)
        this.InitPostBinding()

        return true
    }

    public Release(): void { }
}