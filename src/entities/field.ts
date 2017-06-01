import { BaseEntity } from "./baseEntity";

export class Field extends BaseEntity {
    valor1: string = "valor1";
    valor2: string = "valor2";
    isLink: boolean;
    constructor() {
        super();
    }
}