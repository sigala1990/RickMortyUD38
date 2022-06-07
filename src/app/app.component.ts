import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RickMorty';
  // articulos: any = null;

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5').subscribe(
  //     (result) => {
  //       this.articulos = result;
  //     },
  //     (error) => {
  //       console.log('problemas');
  //     }
  //   );
  // }
}
