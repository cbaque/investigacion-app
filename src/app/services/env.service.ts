import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@app/environments/environment';
import { map } from 'rxjs';

const apiUlr = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class EnvService {
  private http = inject( HttpClient );

  public getQuery<T>(query: string) {
    query = apiUlr + query;
    return this.http.get<T>(query).pipe(map((data: any) => data));
  }

  public postQuery<T>(query: string, form: any) {
    query = apiUlr + query;
    return this.http.post<T>(query, form).pipe(map((data: any) => data));
  }

  public putQuery<T>(query: string, form: any) {
    query = apiUlr + query;
    return this.http.put<T>(query, form).pipe(map((data: any) => data));
  }

  public deleteQuery<T>(query: string) {
    query = apiUlr + query;
    return this.http.delete<T>(query).pipe(map((data: any) => data));
  }

}
