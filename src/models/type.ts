
declare global {
    interface Window {
        ClickLoadPage: (key: string, from: boolean, ...arg: string[]) => void;
        MasterAddr: string;
        NodeCount: number;
    }
}

export interface IPage {
    Run(): Promise<boolean>;
    Release(): void;
}

export type FuncMap = { [key: string]: IPage };

export type UserAccount = {
    id: string,
    pw: string,
    ip: string,
    port: string,
    wport: string,
}

export type StoreData = {
    id?: string
    title: string
    date: number
    data: string
}

export type CategoryTree = {
    id: string
    title: string
    date: number
    parentId?: string
    children: CategoryTree[]
    postIds: string[]
}

