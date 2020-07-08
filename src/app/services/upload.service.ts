
import { Injectable } from '@angular/core';
import { Global } from '../models/global';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {

    public url: string;

    constructor(
        private _http : HttpClient
    ) {
        this.url = Global.url;
    }

    // Metodo para peticion ajax con un archivo para subir
    
    makeFileRequest(formData : any, id:string):Observable<any> {
        // retorna una peticion http por post, un objeto observable
        return this._http.post(this.url+'/upload-img/'+id, formData);
    }

}
