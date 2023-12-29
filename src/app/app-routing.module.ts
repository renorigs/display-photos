import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebSitesComponent } from './web-sites/web-sites.component'

const routes: Routes = [
  {path: "web-sites", component: WebSitesComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
