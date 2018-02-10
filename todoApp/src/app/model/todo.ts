export class Todo {
    private id: number;
    private _title: string;
    private user: string;
    private createdAt: string;
    private _done: boolean;

    constructor(id: number, title: string, user: string, createdAt: string, done: boolean) {
        this.id = id;
        this._title = title;
        this.user = user;
        this.createdAt = createdAt;
        this._done = done;
    }


    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get done(): boolean {
        return this._done;
    }

    set done(value: boolean) {
        this._done = value;
    }
}