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
                <a class="hand nav-item nav-link link-body-emphsis">${node.title}</a>
            `
        })
        html +=`</nav> `
        return html
    }

    StartUpdate() {
        if(!this.param.domId) throw new Error("undefined dom id");
        
        this.treemap.set(this.data.root.id, this.data.root)
        let html = this.skinHtmlS
        for(const node of this.data.root.children){
            html += this.UpdateCategory(node, 0)
        }
        html += this.skinHtmlE

        const dom = document.getElementById(this.param.domId)
        if (dom) dom.innerHTML = html
        
        return html
    }
    UpdateCategory(node: CategoryTree, depth: number): string {
        const padding = "&nbsp;".repeat(depth)
        let html = `
        <li class="mb-1">${padding}
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse" data-bs-target="#h${node.id}-collapse" aria-expanded="false">
            ${node.title}
        </button>
        <div class="collapse" id="h${node.id}-collapse">
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