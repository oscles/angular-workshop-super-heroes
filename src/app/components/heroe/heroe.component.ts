import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor(private _heroeService: HeroesService,
              private _activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.getHeroe();
  }

  getHeroe() {
    const nombre = this._activeRouter.snapshot.paramMap.get('nombre');
    this.heroe = this._heroeService.getHeroe(nombre);
  }
}
