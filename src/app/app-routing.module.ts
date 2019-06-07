import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackagesComponent } from './pages/packages/packages.component';
import { PackageDetailsComponent } from './pages/packages/package-card/package-details/package-details.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { PromosComponent } from './pages/promos/promos.component';
import { NotFoundComponent } from './pages/common/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/packages', pathMatch: 'full'},
  { path: 'packages', component:  PackagesComponent },
  {
    path: 'packages/:id', component: PackageDetailsComponent,
    children: [
      { path: '', component: PackageDetailsComponent }
    ]
  },
  { path: 'hotels',  component: HotelsComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'promos', component: PromosComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
