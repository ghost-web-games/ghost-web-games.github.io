import { BlockStore } from "./store";
import { Session } from "./session";

export class Hon {
    m_session: Session
    public constructor(private blockStore: BlockStore
        , private session: Session) {
        this.m_session = session;
    }

    public Run(masterAddr: string): boolean {
        return true;
    }

    public Release(): void { }
}