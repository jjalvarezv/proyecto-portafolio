import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [UserService]
})
export class LoginComponent implements OnInit {

	public userName: string;
	public pwd: string;

	constructor(
		private _userService: UserService
	) { }

	ngOnInit(): void {
	}

	public login(form: any) {

		let datosLogin = {
			userName: this.userName,
			pass: this.pwd
		}

		this._userService.getUser(datosLogin.userName).subscribe(
			response => {
				console.log(response);
			},
			reject => {
				console.log('Error en la peticion');
			});


	}

}
