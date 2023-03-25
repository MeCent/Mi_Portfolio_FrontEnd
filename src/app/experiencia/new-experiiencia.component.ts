import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../service/s-experiencia.service';

@Component({
  selector: 'app-new-experiiencia',
  templateUrl: './new-experiiencia.component.html',
  styleUrls: ['./new-experiiencia.component.css'],
})
export class NewExperiienciaComponent implements OnInit {
  nombreE: string = '';
  inicioE: string = '';
  finE: string = '';
  descripcionE: string = '';

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.inicioE, this.finE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe({
      next: (data) => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Falló');
        this.router.navigate(['']);
      },
    });
  }
}
