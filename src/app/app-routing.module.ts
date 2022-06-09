import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { CharacterAppComponent } from './character-app/character-app.component';
import { DetailsComponent } from './details/details.component';
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
  },
  {
    path:'details',
    component:DetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
