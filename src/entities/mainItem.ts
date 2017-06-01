import { BaseEntity } from "./baseEntity";
import { Field } from "./field";

export class MainItem extends BaseEntity {
    constructor() {
        super();
    }
    id: string;
    fields: Array<Field>;
    tags: Array<string>
    fecha: string;


}