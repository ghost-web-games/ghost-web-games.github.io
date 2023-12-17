import { AccountParam, GhostWebUser } from "../models/param";

const MaxUnsignedInt = ((1 << 31) >>> 0); // unsigned int max


export class BlockStore {
    m_minBlockId: number;
    m_accountMap: Map<string, AccountParam>;
    m_masterNodes: GhostWebUser[];
    m_gwsFilename: string;
    m_ip: string;
    m_os: string;
    m_masterAddr: string

    public constructor() {
        this.m_minBlockId = MaxUnsignedInt
        this.m_accountMap = new Map<string, AccountParam>()
        this.m_masterNodes = new Array<GhostWebUser>()
        this.m_os = this.m_ip = this.m_gwsFilename = ""
        this.m_masterAddr = window.MasterAddr
    }

    public SetDeviceInfo(ip: string, os: string) { 
        this.m_ip = ip; 
        this.m_os = os; 
    }

    public GetDeviceOs(): string { return this.m_os; }
    public GetDeviceIp(): string { return this.m_ip; }

    public SetGWSPath(filename: string) {
        this.m_gwsFilename = filename;
    }

    public GetGWSPath(): string {
        return this.m_gwsFilename;
    }

    public AddMasters(nodes: GhostWebUser[]) {
        this.m_masterNodes = nodes;
    }
    public GetMasters() :GhostWebUser[] {
        return this.m_masterNodes;
    } 
    public set MasterAddr(addr: string) {
        this.m_masterAddr = addr
    }
    public get MasterAddr() {
        return this.m_masterAddr
    }

    public GetAccount(nick:string): AccountParam|undefined {
        return this.m_accountMap.get(nick);
    }

    public RequestAccount(addr: string): Promise<AccountParam> {
        const encodeAddr = encodeURIComponent(addr);
        if (encodeAddr == null) return Promise.reject();
        const account = this.m_accountMap.get(encodeAddr);
        if (account != undefined) {
            return new Promise<AccountParam>(account=>account);
        }
        return fetch(this.m_masterAddr + `/account?addr=${encodeAddr}`)
            .then((response) => response.json())
            .then((account:AccountParam)=>{
                this.m_accountMap.set(account.Nickname, account);
                return account;
            });
    }
    public RequestAccountbyNick(nickname: string): Promise<string> {
        return fetch(this.m_masterAddr + `/getpubkey?nickname=${nickname}`)
            .then((response) => {
                console.log(response)
                return response.json()
            });
    }
    public RequestAccountList(start: number, count: number): Promise<AccountParam[]> {
        if (count == null) return Promise.reject();
        return fetch(this.m_masterAddr + `/accountlist?start=${start}&cnt=${count}`)
            .then((response) => {
                return response.json();
            });
    }
    public RequestScript(txId: string): Promise<string> {
        if (txId == null) return Promise.reject();
        return fetch(this.m_masterAddr + `/script?txid=${txId}`)
            .then((response) => response.json());
    }

    
}