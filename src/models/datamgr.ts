import axios from "axios";
import { GlobalData } from "../factory/webfactory";
import { CategoryTree, StoreData } from "./type";

export default class DataManager {
    url = `${window.location.origin}/posts/category.json`
    
    constructor(private data: GlobalData) { }

    async LoadData() {
        const params = {
            file_type: 'json'
        }
        const response = await axios.get(this.url, { params })
        this.data.root = response.data as CategoryTree
        await this.LoadCategoryPost(this.data.root)
        this.data.Loaded = true
    }
    async LoadCategoryPost(node: CategoryTree) {
        const p1 = node.postIds.map(async (id) => {
            await this.LoadPost(id)
        })
        await Promise.all(p1)

        const p2 = node.children.map(async (child) => {
            await this.LoadCategoryPost(child)
        })
        await Promise.all(p2)
    }
    async LoadPost(id: string) {
        const params = {
            file_type: 'json'
        }
        const url = `${window.location.origin}/posts/${id}.json`
        const response = await axios.get(url, { params })
        const post = response.data as StoreData
        const ret = this.data.postMap.get(id)
        if (!ret) {
            this.data.posts.push(post)
            this.data.postMap.set(id, post)
        }
    }
}