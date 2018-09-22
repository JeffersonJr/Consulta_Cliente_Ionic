import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  private baseUrl: string = 'https://reqres.in/api/users/';
 
  constructor(private http : Http){}

  getAll(idcliente:string): Observable<any>{
    let consulta$ = this.http
    .get(`${this.baseUrl}${idcliente}`,{headers:this.getHeaders()});
    return consulta$;
  }
  private getHeaders(){
    let headers = new Headers({'Accept': 'application/json'});
    return headers;
  }
}