import { GlobalData } from "../factory/webfactory"
import { Channel } from "./com"
import { CategoryTree } from "./type"

export type CateParam = {
    domId?: string,
    nodeBeforeHtmlEvent?: Function
}

export default class CategoryView {
    treemap = new Map<string, CategoryTree>()
    skinHtmlS: string = `<ul class="list-unstyled ps-0">`
    skinHtmlE: string = `</ul>`

    constructor(
        private data: GlobalData,
        public param: CateParam
    ) {
    }
    GetNode(id: string) {
        const ret = this.treemap.get(id)
        if (!ret) throw new Error("undefined node key = " + id);
        return ret
    }
    DrawMenu() {
        let html = `
        <nav class="nav nav-underline justify-content-between">`
        this.data.root.children.forEach((node) => {
            html += `
                <a class="hand nav-item nav-link link-body-emphsis" 
                onclick='ClickLoadPage("posts", false, "&cateid=${node.id}")'>${node.title}</a>
            `
        })
        html +=`</nav> `
        return html
    }

    StartUpdate(openPostId?: string) {
        if(!this.param.domId) throw new Error("undefined dom id");
        
        this.treemap.set(this.data.root.id, this.data.root)
        let html = this.skinHtmlS
        for(const node of this.data.root.children){
            html += this.UpdateCategory(node, 0)
        }
        html += this.skinHtmlE

        const dom = document.getElementById(this.param.domId)
        if (dom) dom.innerHTML = html

        if (openPostId) {
            const paths: string[] = []
            this.openPostCate(openPostId, this.data.root, paths)
            paths.forEach((path) => {
                const dom = document.getElementById(`btn-${path}`)
                if (dom) dom.click()
            })
        }
        
        return html
    }
    openPostCate(id: string, node: CategoryTree, path: string[]) {
        if (node.id != "root") {
            const ret = node.postIds.findIndex((f) => f == id)
            path.push(node.id)
            if (ret >= 0) return true
        }
        for(const child of node.children){
            if(this.openPostCate(id, child, path)) {
                return true
            }
            path.pop()
        }
        return false
    }
    UpdateCategory(node: CategoryTree, depth: number): string {
        let html = `
        <li class="mb-1">
        <button id="btn-${node.id}" class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse" data-bs-target="#h${node.id}-collapse" aria-expanded="false">
            ${node.title}
        </button>
        <div class="collapse border-start ms-3" id="h${node.id}-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
        `
        this.treemap.set(node.id, node)
        for(const child of node.children){
            html += this.UpdateCategory(child, depth + 1)
        }
        html += `</ul>
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                ${this.param.nodeBeforeHtmlEvent?.(node, depth) ?? ""}
                </ul>
                </div>
            </il>`
        return html
    }
}