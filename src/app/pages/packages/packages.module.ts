import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCardComponent } from './package-card/package-card.component';
import { PackageDetailsComponent } from './package-card/package-details/package-details.component';
import { PackagesComponent } from './packages.component';

@NgModule({
  declarations: [
    PackageCardComponent,
    PackageDetailsComponent,
    PackagesComponent
  ],
  exports: [
    // PackageCardComponent,
    // PackageDetailsComponent,
    // PackagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PackagesModule { }
