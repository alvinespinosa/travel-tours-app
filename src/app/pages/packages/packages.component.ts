import { Component, OnInit } from '@angular/core';
import { Package } from './model';
import { Router, ActivatedRoute } from '@angular/router';
import { PackageService } from 'src/app/shared/services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  public packages: Package[];
  public errMsg;

  constructor(
    private packageService: PackageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.packageService.getPackages()
      .subscribe(data => this.packages = data,
                 error => this.errMsg = error);
  }

  onSelect(travelPackage): void {
    this.router.navigate([travelPackage.id], {relativeTo: this.route});
  }
}
