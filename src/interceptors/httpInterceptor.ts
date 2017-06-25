import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';
import { Http, Headers, ResponseContentType, Response, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { AppModule } from "../app/app.module";

@Injectable()
export class HttpInterceptor extends Http {


    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
        super(_backend, _defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        if (!options.headers) {
            options.headers = new Headers();
        }
        options.headers.append("DEV_KEY", "clave");
        if (AppModule.currentUser) {
            options.headers.append("Uid", AppModule.currentUser.userid);
        }        
        options.headers.append("Token", "valorDelTokenDesdeBD");
        
        return super.request(url, options);
    }

}