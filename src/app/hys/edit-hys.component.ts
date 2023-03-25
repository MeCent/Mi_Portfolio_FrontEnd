import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from '../model/skills';
import { SkillsService } from '../service/skills.service';

@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {
  skill: Skills = null;

  constructor(
    private skillsS: SkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.detail(id).subscribe({
      next: (data) => {
      this.skill = data;
      },
      error: (err) => {
        alert("Error al modificar Habilidad");
        this.router.navigate(['']);
      },
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.update(id, this.skill).subscribe({
      next: (data) => {
      this.router.navigate(['']);
      },
      error: (err) => {
        alert("Error al modificar Habilidad");
        this.router.navigate(['']);
      },
    });
  }
}
