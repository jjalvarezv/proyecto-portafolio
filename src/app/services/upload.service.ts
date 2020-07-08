
import { Injectable } from '@angular/core';
import { Global } from '../models/global';

@Injectable()
export class UploadService {

    public url: string;

    constructor() {
        this.url = Global.url;
    }

    // Metodo para peticion ajax con un archivo para subir
    makeFileRequest(
        url: string,
        params: Array<string>, // posibles parametros a enviar
        files: Array<File>, // array de Archivos
        name: string // nombre de parametro que recibirá el backend
    ) {
        // Creo una promesa para retornar
        return new Promise(function (resolve, reject) {
            // Simular formulario clasico, objeto tipo FormData
            var formData = new FormData();
            // xhr sinonimo de ajax, objeto de peticiones asincronas de js
            var xhr = new XMLHttpRequest();

            // Recorrer el array de archivos 
            for (var i = 0; i < files.length; i++) {
                // Agregar cada archivo, con name de parametro, archivo y nombre archivo
                formData.append(name, files[i], files[i].name);
            }

            // Se hace la peticion AJAX
            xhr.onreadystatechange = function () {
                // Todo esta definido así
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            // Para hacer la peticion ajax
            xhr.open('POST', url, true);
            // Se envia el formulario completo
            xhr.send(formData);

        });
    }

}
