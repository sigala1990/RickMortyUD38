import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { AppComponent } from './app.component';
import { CharacterAppComponent } from './character-app/character-app.component';
import { HomeAppComponent } from './home-app/home-app.component';

const routes: Routes = [


  {
    path:'home',
    component:HomeAppComponent
  },
  {
    path:'character',
    component:CharacterAppComponent
  },
  {
    path:'about',
    component:AboutAppComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
