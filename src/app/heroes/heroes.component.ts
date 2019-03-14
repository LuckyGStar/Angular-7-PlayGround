import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero.service';

import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
    @Input() hero: Hero;

    heroes: Hero[];

    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
      this.heroes = this.heroService.getHeroes();
    }

    ngOnInit() {
      this.getHeroes();
  }

}
