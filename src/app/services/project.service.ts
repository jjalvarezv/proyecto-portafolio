
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../models/global';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {
    public url:string;
    

    constructor(
        public _http : HttpClient,
    ){
        this.url = Global.url;
        console.log('F');
    }

    // Guardar Proyectos petición por post
    saveProject(project:Project): Observable<any>{
        console.log(project);
        // Convertir el objeto a un JSON string
        const projectString = JSON.stringify(project);

        // Indico las cabeceras de la peticion
        const headers = new HttpHeaders().set('Content-type','application/json');

        // Se hace la Peticion de Guardar al ApiRest
        return this._http.post(this.url+'project/save-project',projectString,{headers: headers});
    }

}
