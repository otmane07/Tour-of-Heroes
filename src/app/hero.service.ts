import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    //of convert the argument to an observable sequence
    const heroes = of(HEROES);
    return heroes;
  }
}