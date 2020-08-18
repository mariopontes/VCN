import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class RequestGenericService {

  httpOptions: { headers: HttpHeaders };

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) {
    // setTimeout(() => {
    //   debugger
    //   this.alertService.notify('success', 'Operação realizada com sucesso!')
    // }, 3000);
  }

  private setHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer c15455e3-36fa-3b27-92c0-5db99af3bb8c'
      })
    };
  }

  get(url: string, useHeaders?: boolean) {
    useHeaders == true || useHeaders == undefined ? this.setHeaders() : null;
    return this.http.get(url, this.httpOptions).pipe(catchError((err) => {
      this.alertError(err.error.mensagem)
      return throwError(err);
    }))
  }

  post(url: string, body: object, useHeaders?: boolean): Observable<any> {
    useHeaders == true || useHeaders == undefined ? this.setHeaders() : null;
    return this.http.post(url, body, this.httpOptions).pipe(catchError((err) => {
      this.alertError(err.error.mensagem)
      return throwError(err);
    }))
  }

  update(url: string, body: object, useHeaders?: boolean) {
    useHeaders == true || useHeaders == undefined ? this.setHeaders() : null;
    return this.http.put(url, body, this.httpOptions).pipe(catchError((err) => {
      this.alertError(err.error.mensagem)
      return throwError(err);
    }))
  }

  delete(url: string, useHeaders?: boolean) {
    useHeaders == true || useHeaders == undefined ? this.setHeaders() : null;
    return this.http.delete(url, this.httpOptions).pipe(catchError((err) => {
      this.alertError(err.error.mensagem)
      return throwError(err);
    }))
  }

  private alertError(message: string) {
    this.alertService.notify('error', message)
  }
}
