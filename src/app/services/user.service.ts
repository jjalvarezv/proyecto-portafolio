
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../models/global';

@Injectable()
export class UserService {

    public url: string;

    constructor(
        private _http: HttpClient,
    ) {
        this.url = Global.url;
    }

    public getUser(userName): Observable<any> {

        // Hago peticion para obtener usuario buscado
        return this._http.get(this.url+'user/getUser/'+userName);
    }

    public login(requestData): Observable<any> {
        
        const dataJSON = JSON.stringify(requestData);

        const headers = new HttpHeaders().set('Content-Type', 'application-json');

        return this._http.post(this.url+'user/login', dataJSON, {headers: headers});
    } 

}
