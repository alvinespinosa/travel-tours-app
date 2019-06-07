import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  @Input() public package;
  constructor() { }

  ngOnInit() {
  }

}
