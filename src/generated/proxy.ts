﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v10.6.6324.28497 (NJsonSchema v8.33.6323.36213) (http://NSwag.org)
// </auto-generated>
//----------------------

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';

export const API_BASE_URL = new OpaqueToken('API_BASE_URL');

@Injectable()
export class LoginClient {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost/Api";
    }

    /**
     * @return OK
     */
    logIn(input: LogInIn): Observable<LogInOut | null> {
        let url_ = this.baseUrl + "/api/Login/LogIn";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input ? input.toJSON() : null);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processLogIn(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processLogIn(response_);
                } catch (e) {
                    return <Observable<LogInOut>><any>Observable.throw(e);
                }
            } else
                return <Observable<LogInOut>><any>Observable.throw(response_);
        });
    }

    protected processLogIn(response: Response): Observable<LogInOut | null> {
        const status = response.status; 

        if (status === 200) {
            const responseText = response.text();
            let result200: LogInOut | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? LogInOut.fromJS(resultData200) : new LogInOut();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return Observable.of<LogInOut | null>(<any>null);
    }

    /**
     * @return OK
     */
    signUp(input: SignUpIn): Observable<SignUpOut | null> {
        let url_ = this.baseUrl + "/api/Login/SignUp";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input ? input.toJSON() : null);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processSignUp(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSignUp(response_);
                } catch (e) {
                    return <Observable<SignUpOut>><any>Observable.throw(e);
                }
            } else
                return <Observable<SignUpOut>><any>Observable.throw(response_);
        });
    }

    protected processSignUp(response: Response): Observable<SignUpOut | null> {
        const status = response.status; 

        if (status === 200) {
            const responseText = response.text();
            let result200: SignUpOut | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? SignUpOut.fromJS(resultData200) : new SignUpOut();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return Observable.of<SignUpOut | null>(<any>null);
    }
}

@Injectable()
export class SnippetsClient {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost/Api";
    }

    /**
     * @return OK
     */
    firstSnippets(input: FirstSnippetsIn): Observable<FirstSnippetsOut | null> {
        let url_ = this.baseUrl + "/api/Snippets/FirstSnippets";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input ? input.toJSON() : null);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processFirstSnippets(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processFirstSnippets(response_);
                } catch (e) {
                    return <Observable<FirstSnippetsOut>><any>Observable.throw(e);
                }
            } else
                return <Observable<FirstSnippetsOut>><any>Observable.throw(response_);
        });
    }

    protected processFirstSnippets(response: Response): Observable<FirstSnippetsOut | null> {
        const status = response.status; 

        if (status === 200) {
            const responseText = response.text();
            let result200: FirstSnippetsOut | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? FirstSnippetsOut.fromJS(resultData200) : new FirstSnippetsOut();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return Observable.of<FirstSnippetsOut | null>(<any>null);
    }

    /**
     * @return OK
     */
    addSnippet(input: AddSnippetIn): Observable<AddSnippetOut | null> {
        let url_ = this.baseUrl + "/api/Snippets/AddSnippet";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input ? input.toJSON() : null);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processAddSnippet(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processAddSnippet(response_);
                } catch (e) {
                    return <Observable<AddSnippetOut>><any>Observable.throw(e);
                }
            } else
                return <Observable<AddSnippetOut>><any>Observable.throw(response_);
        });
    }

    protected processAddSnippet(response: Response): Observable<AddSnippetOut | null> {
        const status = response.status; 

        if (status === 200) {
            const responseText = response.text();
            let result200: AddSnippetOut | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? AddSnippetOut.fromJS(resultData200) : new AddSnippetOut();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return Observable.of<AddSnippetOut | null>(<any>null);
    }
}

export class LogInIn implements ILogInIn {
    fireBaseForce?: boolean | undefined;
    user?: User | undefined;
    result?: string | undefined;

    constructor(data?: ILogInIn) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.fireBaseForce = data["fireBaseForce"];
            this.user = data["user"] ? User.fromJS(data["user"]) : <any>undefined;
            this.result = data["result"];
        }
    }

    static fromJS(data: any): LogInIn {
        let result = new LogInIn();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["fireBaseForce"] = this.fireBaseForce;
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        data["result"] = this.result;
        return data; 
    }
}

export interface ILogInIn {
    fireBaseForce?: boolean | undefined;
    user?: User | undefined;
    result?: string | undefined;
}

export class User implements IUser {
    userid?: string | undefined;
    uid?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    userName?: string | undefined;
    password?: string | undefined;
    status?: UserStatus | undefined;

    constructor(data?: IUser) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userid = data["userid"];
            this.uid = data["uid"];
            this.email = data["email"];
            this.firstName = data["firstName"];
            this.lastName = data["lastName"];
            this.userName = data["userName"];
            this.password = data["password"];
            this.status = data["status"];
        }
    }

    static fromJS(data: any): User {
        let result = new User();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userid"] = this.userid;
        data["uid"] = this.uid;
        data["email"] = this.email;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["userName"] = this.userName;
        data["password"] = this.password;
        data["status"] = this.status;
        return data; 
    }
}

export interface IUser {
    userid?: string | undefined;
    uid?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    userName?: string | undefined;
    password?: string | undefined;
    status?: UserStatus | undefined;
}

export class LogInOut implements ILogInOut {
    user?: User | undefined;
    result?: string | undefined;

    constructor(data?: ILogInOut) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.user = data["user"] ? User.fromJS(data["user"]) : <any>undefined;
            this.result = data["result"];
        }
    }

    static fromJS(data: any): LogInOut {
        let result = new LogInOut();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        data["result"] = this.result;
        return data; 
    }
}

export interface ILogInOut {
    user?: User | undefined;
    result?: string | undefined;
}

export class SignUpIn implements ISignUpIn {
    user?: User | undefined;
    result?: string | undefined;

    constructor(data?: ISignUpIn) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.user = data["user"] ? User.fromJS(data["user"]) : <any>undefined;
            this.result = data["result"];
        }
    }

    static fromJS(data: any): SignUpIn {
        let result = new SignUpIn();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        data["result"] = this.result;
        return data; 
    }
}

export interface ISignUpIn {
    user?: User | undefined;
    result?: string | undefined;
}

export class SignUpOut implements ISignUpOut {
    user?: User | undefined;
    result?: string | undefined;

    constructor(data?: ISignUpOut) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.user = data["user"] ? User.fromJS(data["user"]) : <any>undefined;
            this.result = data["result"];
        }
    }

    static fromJS(data: any): SignUpOut {
        let result = new SignUpOut();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        data["result"] = this.result;
        return data; 
    }
}

export interface ISignUpOut {
    user?: User | undefined;
    result?: string | undefined;
}

export class FirstSnippetsIn implements IFirstSnippetsIn {
    user?: User | undefined;
    result?: string | undefined;

    constructor(data?: IFirstSnippetsIn) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.user = data["user"] ? User.fromJS(data["user"]) : <any>undefined;
            this.result = data["result"];
        }
    }

    static fromJS(data: any): FirstSnippetsIn {
        let result = new FirstSnippetsIn();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        data["result"] = this.result;
        return data; 
    }
}

export interface IFirstSnippetsIn {
    user?: User | undefined;
    result?: string | undefined;
}

export class FirstSnippetsOut implements IFirstSnippetsOut {
    snippets?: Snippet[] | undefined;
    result?: string | undefined;

    constructor(data?: IFirstSnippetsOut) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["snippets"] && data["snippets"].constructor === Array) {
                this.snippets = [];
                for (let item of data["snippets"])
                    this.snippets.push(Snippet.fromJS(item));
            }
            this.result = data["result"];
        }
    }

    static fromJS(data: any): FirstSnippetsOut {
        let result = new FirstSnippetsOut();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.snippets && this.snippets.constructor === Array) {
            data["snippets"] = [];
            for (let item of this.snippets)
                data["snippets"].push(item.toJSON());
        }
        data["result"] = this.result;
        return data; 
    }
}

export interface IFirstSnippetsOut {
    snippets?: Snippet[] | undefined;
    result?: string | undefined;
}

export class Snippet implements ISnippet {
    snipetid?: string | undefined;
    id?: number | undefined;
    groupid?: number | undefined;
    title?: string | undefined;
    description?: string | undefined;
    tags?: Tag[] | undefined;
    date?: Date | undefined;
    fields?: Field[] | undefined;
    group?: Group | undefined;

    constructor(data?: ISnippet) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.snipetid = data["snipetid"];
            this.id = data["id"];
            this.groupid = data["groupid"];
            this.title = data["title"];
            this.description = data["description"];
            if (data["tags"] && data["tags"].constructor === Array) {
                this.tags = [];
                for (let item of data["tags"])
                    this.tags.push(Tag.fromJS(item));
            }
            this.date = data["date"] ? new Date(data["date"].toString()) : <any>undefined;
            if (data["fields"] && data["fields"].constructor === Array) {
                this.fields = [];
                for (let item of data["fields"])
                    this.fields.push(Field.fromJS(item));
            }
            this.group = data["group"] ? Group.fromJS(data["group"]) : <any>undefined;
        }
    }

    static fromJS(data: any): Snippet {
        let result = new Snippet();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["snipetid"] = this.snipetid;
        data["id"] = this.id;
        data["groupid"] = this.groupid;
        data["title"] = this.title;
        data["description"] = this.description;
        if (this.tags && this.tags.constructor === Array) {
            data["tags"] = [];
            for (let item of this.tags)
                data["tags"].push(item.toJSON());
        }
        data["date"] = this.date ? this.date.toISOString() : <any>undefined;
        if (this.fields && this.fields.constructor === Array) {
            data["fields"] = [];
            for (let item of this.fields)
                data["fields"].push(item.toJSON());
        }
        data["group"] = this.group ? this.group.toJSON() : <any>undefined;
        return data; 
    }
}

export interface ISnippet {
    snipetid?: string | undefined;
    id?: number | undefined;
    groupid?: number | undefined;
    title?: string | undefined;
    description?: string | undefined;
    tags?: Tag[] | undefined;
    date?: Date | undefined;
    fields?: Field[] | undefined;
    group?: Group | undefined;
}

export class Tag implements ITag {
    tag?: string | undefined;
    snippets?: Snippet[] | undefined;

    constructor(data?: ITag) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tag = data["tag"];
            if (data["snippets"] && data["snippets"].constructor === Array) {
                this.snippets = [];
                for (let item of data["snippets"])
                    this.snippets.push(Snippet.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Tag {
        let result = new Tag();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tag"] = this.tag;
        if (this.snippets && this.snippets.constructor === Array) {
            data["snippets"] = [];
            for (let item of this.snippets)
                data["snippets"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ITag {
    tag?: string | undefined;
    snippets?: Snippet[] | undefined;
}

export class Field implements IField {
    id?: number | undefined;
    name?: string | undefined;
    type?: string | undefined;
    value?: string | undefined;
    isLink?: boolean | undefined;
    code?: FieldCode | undefined;
    snipettid?: string | undefined;
    snipett?: Snippet | undefined;

    constructor(data?: IField) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.type = data["type"];
            this.value = data["value"];
            this.isLink = data["isLink"];
            this.code = data["code"];
            this.snipettid = data["snipettid"];
            this.snipett = data["snipett"] ? Snippet.fromJS(data["snipett"]) : <any>undefined;
        }
    }

    static fromJS(data: any): Field {
        let result = new Field();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["type"] = this.type;
        data["value"] = this.value;
        data["isLink"] = this.isLink;
        data["code"] = this.code;
        data["snipettid"] = this.snipettid;
        data["snipett"] = this.snipett ? this.snipett.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IField {
    id?: number | undefined;
    name?: string | undefined;
    type?: string | undefined;
    value?: string | undefined;
    isLink?: boolean | undefined;
    code?: FieldCode | undefined;
    snipettid?: string | undefined;
    snipett?: Snippet | undefined;
}

export class Group implements IGroup {
    groupid?: number | undefined;
    title?: string | undefined;
    description?: string | undefined;
    tags?: string | undefined;
    date?: Date | undefined;
    isPrivate?: boolean | undefined;
    categoryid?: number | undefined;
    category?: Category | undefined;
    fields?: Field[] | undefined;

    constructor(data?: IGroup) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.groupid = data["groupid"];
            this.title = data["title"];
            this.description = data["description"];
            this.tags = data["tags"];
            this.date = data["date"] ? new Date(data["date"].toString()) : <any>undefined;
            this.isPrivate = data["isPrivate"];
            this.categoryid = data["categoryid"];
            this.category = data["category"] ? Category.fromJS(data["category"]) : <any>undefined;
            if (data["fields"] && data["fields"].constructor === Array) {
                this.fields = [];
                for (let item of data["fields"])
                    this.fields.push(Field.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Group {
        let result = new Group();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["groupid"] = this.groupid;
        data["title"] = this.title;
        data["description"] = this.description;
        data["tags"] = this.tags;
        data["date"] = this.date ? this.date.toISOString() : <any>undefined;
        data["isPrivate"] = this.isPrivate;
        data["categoryid"] = this.categoryid;
        data["category"] = this.category ? this.category.toJSON() : <any>undefined;
        if (this.fields && this.fields.constructor === Array) {
            data["fields"] = [];
            for (let item of this.fields)
                data["fields"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGroup {
    groupid?: number | undefined;
    title?: string | undefined;
    description?: string | undefined;
    tags?: string | undefined;
    date?: Date | undefined;
    isPrivate?: boolean | undefined;
    categoryid?: number | undefined;
    category?: Category | undefined;
    fields?: Field[] | undefined;
}

export class Category implements ICategory {
    categoryid?: number | undefined;
    name?: string | undefined;
    description?: string | undefined;

    constructor(data?: ICategory) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.categoryid = data["categoryid"];
            this.name = data["name"];
            this.description = data["description"];
        }
    }

    static fromJS(data: any): Category {
        let result = new Category();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["categoryid"] = this.categoryid;
        data["name"] = this.name;
        data["description"] = this.description;
        return data; 
    }
}

export interface ICategory {
    categoryid?: number | undefined;
    name?: string | undefined;
    description?: string | undefined;
}

export class AddSnippetIn implements IAddSnippetIn {
    snippet?: Snippet | undefined;
    group?: Group | undefined;
    user?: User | undefined;
    result?: string | undefined;

    constructor(data?: IAddSnippetIn) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.snippet = data["snippet"] ? Snippet.fromJS(data["snippet"]) : <any>undefined;
            this.group = data["group"] ? Group.fromJS(data["group"]) : <any>undefined;
            this.user = data["user"] ? User.fromJS(data["user"]) : <any>undefined;
            this.result = data["result"];
        }
    }

    static fromJS(data: any): AddSnippetIn {
        let result = new AddSnippetIn();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["snippet"] = this.snippet ? this.snippet.toJSON() : <any>undefined;
        data["group"] = this.group ? this.group.toJSON() : <any>undefined;
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        data["result"] = this.result;
        return data; 
    }
}

export interface IAddSnippetIn {
    snippet?: Snippet | undefined;
    group?: Group | undefined;
    user?: User | undefined;
    result?: string | undefined;
}

export class AddSnippetOut implements IAddSnippetOut {
    user?: User | undefined;
    snippet?: Snippet | undefined;
    result?: string | undefined;

    constructor(data?: IAddSnippetOut) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.user = data["user"] ? User.fromJS(data["user"]) : <any>undefined;
            this.snippet = data["snippet"] ? Snippet.fromJS(data["snippet"]) : <any>undefined;
            this.result = data["result"];
        }
    }

    static fromJS(data: any): AddSnippetOut {
        let result = new AddSnippetOut();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        data["snippet"] = this.snippet ? this.snippet.toJSON() : <any>undefined;
        data["result"] = this.result;
        return data; 
    }
}

export interface IAddSnippetOut {
    user?: User | undefined;
    snippet?: Snippet | undefined;
    result?: string | undefined;
}

export enum UserStatus {
    _0 = 0, 
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
    _4 = 4, 
}

export enum FieldCode {
    _0 = 0, 
    _1 = 1, 
    _2 = 2, 
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    result: any; 

    constructor(message: string, status: number, response: string, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}

function throwException(message: string, status: number, response: string, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return Observable.throw(result);
    else
        return Observable.throw(new SwaggerException(message, status, response, null));
}

function blobToText(blob: Blob): Observable<string> {
    return new Observable<string>((observer: any) => { 
        let reader = new FileReader(); 
        reader.onload = function() { 
            observer.next(this.result);
            observer.complete();
        }
        reader.readAsText(blob); 
    });
}