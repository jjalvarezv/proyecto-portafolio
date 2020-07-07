
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../models/global';
import { Projects } from '../models/projects';

@Injectable()
export class ProjectsService {
    public url:string;

    constructor(
        private _http : HttpClient,
        private _httpHeaders : HttpHeaders
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Servicio projects funcionando'
    }

}
