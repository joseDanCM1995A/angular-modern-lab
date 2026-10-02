import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';

@Service()
export class SayajinService {
  http = inject(HttpClient)
  urlBase: string = 'https://dragonball-api.com/api'

  getAllSayajins(page: number): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.urlBase}/characters`, {params: {page, limit: 12}})
  }

  getSayajinById(id: number): Observable<any>{
    return this.http.get(`${this.urlBase}/characters/${id}`)
  }

  filterSayajimsByFilter(params: any): Observable<any>{
    return this.http.get(`${this.urlBase}/characters`, {params: {...params, limit: 12}})
  }


}
