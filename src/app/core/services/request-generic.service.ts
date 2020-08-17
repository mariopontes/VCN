import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RequestGenericService {

  httpOptions: { headers: HttpHeaders };

  constructor(
    private http: HttpClient
  ) { }

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
    return this.http.get(url, this.httpOptions).pipe(catchError(this.handleError)
    )
  }

  post(url: string, body: object, useHeaders?: boolean): Observable<any> {
    useHeaders == true || useHeaders == undefined ? this.setHeaders() : null;
    return this.http.post(url, body, this.httpOptions).pipe(catchError(this.handleError)
    )
  }

  update(url: string, body: object, useHeaders?: boolean) {
    useHeaders == true || useHeaders == undefined ? this.setHeaders() : null;
    return this.http.put(url, body, this.httpOptions).pipe(catchError(this.handleError)
    )
  }

  delete(url: string, useHeaders?: boolean) {
    useHeaders == true || useHeaders == undefined ? this.setHeaders() : null;
    return this.http.delete(url, this.httpOptions).pipe(catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: error.error.mensagem
    })

    return throwError(error);
  }
}
