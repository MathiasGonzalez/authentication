import { BaseEntity } from "./baseEntity";
import { Field } from "./field";

export class MainItem extends BaseEntity {
    constructor() {
        super();
    }
    fields: Array<Field>;


}