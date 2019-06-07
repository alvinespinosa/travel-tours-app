import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageDetailsComponent } from './package-list/package-details/package-details.component';
import { PackagesComponent } from './packages.component';

@NgModule({
  declarations: [
    PackageListComponent,
    PackageDetailsComponent,
    PackagesComponent
  ],
  exports: [
    PackageListComponent,
    PackageDetailsComponent,
    PackagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PackagesModule { }
