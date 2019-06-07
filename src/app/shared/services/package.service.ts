import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from 'src/app/pages/packages/model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private url = '/assets/data/packages.json';

  constructor(private http: HttpClient) { }

  getPackages(): Observable<Package[]> {
    return this.http
      .get<Package[]>(this.url)
      .pipe(catchError(err => throwError(err)));
  }

}
