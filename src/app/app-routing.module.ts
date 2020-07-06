import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importo componentes
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {CreateComponent} from './components/create/create.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ErrorComponent} from './components/error/error.component';


const appRoutes: Routes = [
  {path : '', component : AboutComponent},
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'create', component : CreateComponent},
  {path : 'projects', component : ProjectsComponent},
  {path : '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
