import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd: string;
  descripcionEd: string;

  constructor(
    private educacionS: EducacionService,
    private router: Router
    ) { }

  ngOnInit(): void {}

  onCreate(): void {
    const educacion = new Educacion(this.nombreEd, this.descripcionEd);
    this.educacionS.save(educacion).subscribe({
      next: (data) => {
        alert('Educación añadida');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Falló');
        this.router.navigate(['']);
      },
    });
  }

}
