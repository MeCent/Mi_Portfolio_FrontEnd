import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NewExperiienciaComponent } from './experiencia/new-experiiencia.component';
import { EditHysComponent } from './hys/edit-hys.component';
import { NewHysComponent } from './hys/new-hys.component';
import { EditProyectosComponent } from './proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './proyectos/new-proyectos.component';
import { RegistroComponent } from './registro/registro.component';
import { EditBannerComponent } from './banner/edit-banner.component';

const routes: Routes = [
  {path: '', component:IndexComponent },
  {path: 'login', component:LoginComponent },
  {path: 'editinfo/:id', component:EditBannerComponent},
  {path: 'nuevaexp', component:NewExperiienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component:NewEducacionComponent},
  {path: 'editedu/:id', component:EditEducacionComponent},
  {path: 'nuevahys', component:NewHysComponent},
  {path: 'edithys/:id', component:EditHysComponent},
  {path: 'nuevoproy', component:NewProyectosComponent},
  {path: 'editproy/:id', component:EditProyectosComponent},
  {path: 'registro', component:RegistroComponent},
  {path: '**', component:ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
