import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
{ path: 'game-play', loadChildren: () => import('./pages/game-play/game-play.module').then(m => m.GamePlayModule) },
{ path: '', loadChildren: () => import('./pages/playing/playing.module').then(m => m.PlayingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
