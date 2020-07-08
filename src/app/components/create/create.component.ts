import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../models/global';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css'],
	// Los servicios usados siempre se cargan en providers para poder usarlos 
	// sin necesidad de instanciar un objeto
	providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

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
	}

	createProject(formulario: any) {
		console.log(this.project);
		// Llamo a mi servicio de projects y me suscribo a lo que retorne la peticion
		this._projectSevice.saveProject(this.project).subscribe(
			response => {

				// Subir imagenes
				this._uploadService.makeFileRequest(this.url + '/upload-img/' + response.project._id, [], this.filesToUpload, 'image')
					// El metodo makeFileRequest retorna una promesa, con then se recogen los datos	
					.then((result) => {
						console.log('El projecto se ha guardado');
						console.log(result);
						formulario.reset();
					})
					.catch((err) => {
						console.log(err);
					});	
			},
			err => {
				console.log(err);
			}
		);
	}

	fileChangeEvent(fileInput: any) {
		console.log(fileInput);
		this.filesToUpload = fileInput.target.files;
		console.log(this.filesToUpload);
	}

}
