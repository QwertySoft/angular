import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  public powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  public model = new Hero('', this.powers[0]);

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { alert(`Superheroe creado: ${this.model.name} => ${this.model.power}`); }

  newHero() {
    this.model = new Hero('', '');
  }

}
