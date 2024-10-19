import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { PlotComponent } from './components/plot/plot.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sidebar',
    pathMatch: 'full'
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'home',
    component: PlotComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
