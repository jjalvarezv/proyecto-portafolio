import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public mail: string;
  public subtitle: string;
  public description: string;
  public curriculum : string;

  constructor() {
    this.mail = 'jjalvarezv97@gmail.com'
    this.subtitle = 'Estudiante de Ingenieria de Sistemas y Desarrollador Web';
    this.description = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod sed culpa. 
      Officia dolorum ea dolore quibusdam architecto, laboriosam, numquam totam sit in id sint repudiandae 
      natus exercitationem dolores cum?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod sed culpa. 
      Officia dolorum ea dolore quibusdam architecto, laboriosam, numquam totam sit in id sint repudiandae 
      natus exercitationem dolores cum?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod sed culpa. 
      Officia dolorum ea dolore quibusdam architecto, laboriosam, numquam totam sit in id sint repudiandae 
      natus exercitationem dolores cum?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod sed culpa. 
      Officia dolorum ea dolore quibusdam architecto, laboriosam, numquam totam sit in id sint repudiandae 
      natus exercitationem dolores cum?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod sed culpa. 
      Officia dolorum ea dolore quibusdam architecto, laboriosam, numquam totam sit in id sint repudiandae 
      natus exercitationem dolores cum?`;
    this.curriculum = 'Aca se carga mi Hoja de Vida en PDF'

  }

  ngOnInit(): void {
  }

}
