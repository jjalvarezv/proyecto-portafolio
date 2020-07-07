import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../models/global';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css'],
	providers: [ProjectService]
})
export class CreateComponent implements OnInit {

	public title: string;
	public project: Project;

	constructor(
		private _projectSevice: ProjectService
	) {
		this.title = 'Crear Proyecto';
		this.project = new Project('', '', '', '', 0, '', '',);
	}

	ngOnInit(): void {
	}

	createProject(formulario: any) {
		// Llamo a mi servicio de projects y me suscribo a lo que retorne la peticion
		this._projectSevice.saveProject(this.project).subscribe(
			result => {
				console.log('El projecto se ha guardado');
				formulario.reset();
			},
			err => {
				console.log(err);
			}
		);
	}

}
