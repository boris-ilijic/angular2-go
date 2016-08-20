import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Character } from './character.service';

export interface Character {
	id: number;
	name: string;
}

@Injectable()
export class CharacterService {
  constructor(private _http: Http) { }

  getCharacters() {
    return this._http.get('characters.json')
      .map((response) => response.json());
  }

	getCharacter(id: number) {
    return this._http.get('characters.json')
      .map((response) => response.json().filter((c: Character) => c.id === id)[0]);
	}
}
