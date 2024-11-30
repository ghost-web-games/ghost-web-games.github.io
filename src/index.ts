import { WebFactory } from "./factory/webfactory";
import { Base } from "./views/base";

const factory = new WebFactory();
const session = factory.GetSession();
const funcMap = factory.Build();

const dataMgr = factory.dataMgr
const InitLoadData = async () => {
    await dataMgr.LoadData()
}

const base = new Base("./", funcMap, session)

window.ClickLoadPage = (key: string, fromEvent: boolean, ...args: string[]) => {
    base.ClickLoadPage(key, fromEvent, ...args)
}

window.onpopstate = (event) => {
    //window.ClickLoadPage(event.state['key'], event.state['fromEvent'], event.state['args'])
    base.includeContentHTML()
};

InitLoadData()
base.Initialize()

addEventListener("load", async () => {
    base.includeContentHTML()
});

