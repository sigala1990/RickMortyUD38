import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListCharactersService } from '../list-characters.service';

@Component({
  selector: 'app-character-app',
  templateUrl: './character-app.component.html',
  styleUrls: ['./character-app.component.css'],
})
export class CharacterAppComponent implements OnInit {
  // @Input()   listaCharacters: any = [];
  listcharacter: ListCharactersService;
  articulos: any = null;

  constructor(private listCharService: ListCharactersService) {
    this.listcharacter = listCharService;
  }

  ngOnInit(): void {
    this.articulos = this.listCharService.retornar();
  }
  
}
