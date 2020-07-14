import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import $ from 'jquery';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [UserService]
})
export class LoginComponent implements OnInit {

	public userName: string;
	public pwd: string;
	public spanRequerido: any;
	public spanSuccesful: any;
	public spanInvalido: any;

	constructor(
		private _userService: UserService
	) {

	}

	ngOnInit(): void {
		this.spanRequerido = $('.requerido').hide();
		this.spanSuccesful = $('.succesful').hide();
		this.spanInvalido = $('.invalid').hide();
	}

	public login(form: any) {

		if (form.valid) {

			this.spanRequerido.slideUp(200);
			// Verifico que el userName se encuentre en la BD

			const loginData = {
				userName: this.userName,
				pass: this.pwd
			}
			
			this._userService.login(loginData).subscribe(
				// request successful
				response => {
					console.log(response);
				},
				// request unsuccessful
				err => {
					console.log(err);
				});

			/*
			this._userService.getUser(this.userName).subscribe(
				response => {
					const user = response.user;
					console.log(user);

					// Valido Usuario
					if (this.pwd === user.pass) {
						this.spanInvalido.slideUp(200);
						this.spanRequerido.slideUp(200);
						this.spanSuccesful.slideDown(300);
					} else {
						// Se muestra luego de 300ms para mejor apariencia
						setTimeout(function () {
							$('.invalid').slideDown(300);
						}, 300);
						form.reset();
					}
				},
				reject => { // Erro en la peticion
					// Se muestra luego de 300ms para mejor apariencia
					setTimeout(function () {
						$('.invalid').slideDown(300);
					}, 300);
					form.reset();
				}
			); */

		} else {
			this.spanRequerido.slideDown(300);
		}

	}

}
