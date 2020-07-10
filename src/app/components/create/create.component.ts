import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../models/global';
import $ from 'jquery';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css'],
	// Los servicios usados siempre se cargan en providers para poder usarlos 
	// sin necesidad de instanciar un objeto
	providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

	public spanRequerido:any;
	public spanSuccesful:any;
	public title: string;
	public project: Project;
	public url: string;
	public filesToUpload: Array<File>; // Array de Files

	constructor(
		private _projectSevice: ProjectService,
		private _uploadService: UploadService
	) {
		this.title = 'Crear Proyecto';
		this.project = new Project('', '', '', '', 0, '', '',);
		this.url = Global.url;
	}

	ngOnInit(): void {
		this.spanRequerido = $('.requerido').hide();
		this.spanSuccesful = $('.succesful').hide();
	}

	createProject(formulario: any) {
		if (!formulario.valid) {
			//alert('El formulario no es válido, complete todos los campos');
			this.spanRequerido.slideDown(300);
		} else {
			// Llamo a mi servicio de projects y me suscribo a lo que retorne la peticion
			this.spanRequerido.slideUp(300);
			this._projectSevice.saveProject(this.project).subscribe(
				response => {

					// Subir imagenes
					let formData = new FormData();
					// recorrer el array de files
					for (let i = 0; i < this.filesToUpload.length; i++) {
						formData.append('image', this.filesToUpload[i], this.filesToUpload[i].name);
					}
					// hago uso de mi servicio upload para subir la imagen
					this._uploadService.makeFileRequest(formData, response.project._id).subscribe(
						response => {
							this.spanSuccesful.slideDown(300);
							console.log('El proyecto se ha guardado');
							formulario.reset();
						},
						err => console.log(err)
					);
				},
				err => {
					console.log(err);
				}
			);
		}
	}

	fileChangeEvent(fileInput: any) {
		console.log(fileInput);
		this.filesToUpload = fileInput.target.files;
		console.log(this.filesToUpload);
	}


}
