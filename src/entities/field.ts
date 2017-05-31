import { BaseEntity } from "./baseEntity";

export class Field extends BaseEntity {
    valor1: string = "valor1";
    valor2: string = "valor2";
    tags: Array<string> = ["tag1", "tag2"];
    fecha: string = new Date().toDateString()
    constructor() {
        super();
    }
}