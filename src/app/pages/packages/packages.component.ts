import { Component, OnInit } from '@angular/core';
import { Package } from './model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  public packages: Package[] = [
    { id: 1, location: 'Valenzuela', price: 200, img: '../' },
    { id: 2, location: 'Malabon', price: 300, img: '../' },
    { id: 3, location: 'Navotas', price: 100, img: '../' },
    { id: 4, location: 'Quezon City', price: 400, img: '../' },
    { id: 5, location: 'Pasig', price: 900, img: '../' },
    { id: 6, location: 'Makati', price: 800, img: '../' },
    { id: 7, location: 'Mandaluyong', price: 700, img: '../' },
    { id: 8, location: 'Caloocan', price: 600, img: '../' },
    { id: 9, location: 'Parañaque', price: 500, img: '../' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(travelPackage): void {
    this.router.navigate(['./packages', travelPackage.id]);
  }
}
