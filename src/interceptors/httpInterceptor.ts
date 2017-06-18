import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';
import { Http, Headers, ResponseContentType, Response, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs } from '@angular/http';

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
        return super.request(url, options);
    }

}