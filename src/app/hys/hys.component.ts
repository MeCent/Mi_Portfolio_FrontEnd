import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Skills } from '../model/skills';
import { SkillsService } from '../service/skills.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skills[] = [];
  porcentaje: number;
  get style(){
    return 'width:' + this.porcentaje + '%'
  }

  constructor(
    private skillsS: SkillsService,
    private tokenService: TokenService,
  ) { }

    isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    timer(1000, 100).subscribe(d => {
          this.porcentaje = d;
    })
  }

  cargarSkills(): void {
    this.skillsS.lista().subscribe(
      data => {
        this.skill = data
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillsS.delete(id).subscribe({
        next: (data) => {
          this.cargarSkills();
        },
        error: (err) => {
          alert('No se pudo borrar');
        },
      });
    }
  }
}
