import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-app',
  templateUrl: './character-app.component.html',
  styleUrls: ['./character-app.component.css']
})
export class CharacterAppComponent implements OnInit {

  // @Input()   listaCharacters: any = [];

   articulos: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5').subscribe(
      (result) => {
        this.articulos = result;
      },
      (error) => {
        console.log('problemas');
      }
    );
  }
}
