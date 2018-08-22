import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  termineSearch:string;

  constructor(
    private _heroeServices: HeroesService, 
    private _activeRouter:ActivatedRoute
  ) {}

  ngOnInit() {
    this._activeRouter.params.subscribe( (params) => {
      this.termineSearch = params['termine'];
      this.heroes = this._heroeServices.SearchHeroe(this.termineSearch);
    });
  }
}
