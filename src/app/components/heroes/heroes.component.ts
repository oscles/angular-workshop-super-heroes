import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService: HeroesService,
              private _router:Router) { 
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  getHeroe(nombre:string):void {
    //other option for to navigate a pagine
    this._router.navigate(['/heroe', nombre.toLocaleLowerCase()]);
  }
}
