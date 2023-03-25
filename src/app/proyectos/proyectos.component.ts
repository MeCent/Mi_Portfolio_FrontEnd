import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { ProyectosService } from '../service/proyectos.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];

  constructor(
    private proyectosS: ProyectosService,
    private tokenService: TokenService
    ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectosS.lista().subscribe(
      data => {
        this.proyectos = data
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectosS.delete(id).subscribe({
        next: (data) => {
          this.cargarProyectos();
        },
        error: (err) => {
          alert('No se pudo borrar');
        },
      });
    }
  }

}
