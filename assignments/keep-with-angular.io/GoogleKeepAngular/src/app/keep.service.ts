import { Injectable } from '@angular/core';
import { KeepClass } from '../app/keepClass';
import { KEEPS } from '../app/mock-keeps';
import { Observable, of } from 'rxjs';
import { MessageService } from '../app/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { $ } from 'protractor';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class KeepService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`KeepserviceService: ${message}`);
  }

  private keepsUrl = 'https://localhost:44379/api/keep';

  getKeeps(): Observable<KeepClass[]> {
    return this.http.get<KeepClass[]>(this.keepsUrl)
      .pipe(
        tap(keeps => this.log('fetched heroes')),
        catchError(this.handleError('getKeeps', []))
      );
  }

  getKeep(id: string): Observable<KeepClass> {
    console.log(id);
    const url = `${this.keepsUrl}/${id}`;
    return this.http.get<KeepClass>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<KeepClass>(`getHero id=${id}`))
    );
  }

  updateKeep(keep: KeepClass): Observable<any> {
    const urlput = `${this.keepsUrl}/${keep.id}`;
    return this.http.put(urlput, keep, httpOptions).pipe(
      tap(_ => this.log(`updated keep id=${keep.id}`)),
      catchError(this.handleError<any>('updateKeep'))
    );
  }

  deleteKeep (keep: KeepClass | string): Observable<KeepClass> {
    const id = typeof keep === 'string' ? keep : keep.id;
    const url = `${this.keepsUrl}/${id}`;

    return this.http.delete<KeepClass>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted keep id=${id}`)),
      catchError(this.handleError<KeepClass>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
