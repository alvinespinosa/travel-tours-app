import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageService } from './services/package.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ PackageService ]
})
export class SharedModule { }
