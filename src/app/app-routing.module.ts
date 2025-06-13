import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'work',
    loadChildren: () => import('./work/work.module').then((m) => m.WorkModule),
  },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // restores previous scroll on back/forward
      anchorScrolling: 'enabled', // optional, for hash links
      scrollOffset: [0, 0], // ensures exact top
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
