import {Group} from "./group";

export class Todo {
    id: number;
    title: string;
    user: string;
    group: Group;
    createdAt: string;
    done: boolean;
    description: string;

    constructor(id?: number, title?: string, description?: string,  done?: boolean, group?: Group, user?: string, createdAt?: string) {
        this.id = id;
        this.title = title;
        this.user = user;
        this.createdAt = createdAt;
        this.done = done;
        this.description = description;
        this.group = group;
    }

}