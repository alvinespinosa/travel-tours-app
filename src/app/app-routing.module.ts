import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsComponent } from './header/hotels/hotels.component';
import { FlightsComponent } from './header/flights/flights.component';
import { PromosComponent } from './header/promos/promos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { PackageDetailsComponent } from './pages/packages/package-list/package-details/package-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/packages', pathMatch: 'full'},
  { path: 'packages', component:  PackagesComponent },
  { path: 'packages/:id', component: PackageDetailsComponent },
  { path: 'hotels',  component: HotelsComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'promos', component: PromosComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HotelsComponent,
  FlightsComponent,
  PromosComponent
];
