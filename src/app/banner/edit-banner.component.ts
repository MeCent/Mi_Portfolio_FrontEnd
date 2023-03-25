import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from '../model/persona.model';
import { ImageService } from '../service/image.service';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
  persona: persona = null;

  constructor(
    private personaS: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ){}

ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.personaS.detail(id).subscribe({
    next: (data) => {
    this.persona = data;
    },
    error: (err) => {
      alert("Error al modificar Información.");
      this.router.navigate(['']);
    }
  })
}

onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.persona.img = this.imageService.url
  this.personaS.update(id, this.persona).subscribe({
    next: (data) => {
    this.router.navigate(['']);
    },
    error: (err) => {
      alert("Error al modificar Información");
      this.router.navigate(['']);
    }
  })
}

uploadImage($event: any) {
  const id = this.activatedRouter.snapshot.params['id'];
  const name = "perfil_" + id;
  this.imageService.uploadImage($event, name)
}
}
