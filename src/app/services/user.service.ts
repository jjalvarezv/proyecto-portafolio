
import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../models/global';

@Injectable()
export class UserService {

    public url: string;

    constructor(
        private _http: HttpClient,
        private _httpHeaders: HttpHeaders
    ) {
        this.url = Global.url;
    }

    public getUser(userName:string): Observable<any> {
        let headers = this._httpHeaders.set('content-type', 'application/json');
        return this._http.get(this.url+'/user/getUser/'+userName,{headers:headers});
    }

}
