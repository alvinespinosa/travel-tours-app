import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from 'src/app/pages/packages/model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private url: string;

  constructor(private http: HttpClient) { }

  getPackages(): Observable<Package[]> {
    this.url = '/assets/data/packages.json';

    return this.http
      .get<Package[]>(this.url)
      .pipe(catchError(err => throwError(err)));
  }

  getPackage(id: string): Observable<Package> {
    this.url = '/assets/data/packages_1.json';

    return this.http
      .get<Package>(this.url)
      .pipe(catchError(err => throwError(err)));
  }
}
