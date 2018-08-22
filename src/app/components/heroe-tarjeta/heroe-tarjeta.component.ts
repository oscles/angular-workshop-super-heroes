import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../models/heroe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;

  constructor() { }

  ngOnInit() {

  }

}
