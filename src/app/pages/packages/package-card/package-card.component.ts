import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCardComponent implements OnInit {

  @Input() public package;
  constructor() { }

  ngOnInit() {
  }

}
