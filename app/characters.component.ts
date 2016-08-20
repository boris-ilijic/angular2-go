import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Character, CharacterService } from './character.service';

@Component({
  moduleId: module.id,
  selector: 'my-characters',
  templateUrl: 'characters.component.html',
  styleUrls: ['characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  currentCharacter: Character;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.getCharacters();
  }

  onSelect(character: Character) {
    // this.currentCharacter = character;
    this._characterService.getCharacter(character.id)
      .subscribe(character => this.currentCharacter = character);
  }

  /////////////////

  getCharacters() {
    this.currentCharacter = undefined;
    this.characters = [];

    this._characterService.getCharacters()
      .subscribe(characters => this.characters = characters);

    return this.characters;
  }
}
