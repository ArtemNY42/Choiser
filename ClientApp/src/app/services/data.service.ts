import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { getBaseUrl } from 'src/main';

@Injectable()
export class DataService {
    constructor(
        private http: HttpClient) {
    }
//'http://localhost:52044/api'
    public get<T>(uri: string): Observable<T> {
        return this.http.get(getBaseUrl() + uri,  { headers: this.getHeaders() })
            .pipe(
                map((res) => <T>res)
            );
    }

    public post<T> (uri: string, data?: any): Observable<T>  {
            return this.http.post(getBaseUrl() + uri, data,  { headers: this.getHeaders() })
                .pipe(
                    map((res) => <T>res)
                );
    }

    public put<T>(uri: string, data?: any): Observable<T> {
        return this.http.put(getBaseUrl() + uri, data,  { headers: this.getHeaders() })
            .pipe(
                map((res) => <T>res)
            );
    }

    public delete<T>(uri: string): Observable<T> {
        return this.http.delete(getBaseUrl() + uri,  { headers: this.getHeaders() })
            .pipe(
                map((res) => <T>res)
            );
    }

    public getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            // 'Authorization': 'Bearer ' + this.getToken(),

        });
    }

    // public getToken(): string {
    //     let token = '';
    //     let user: User = null;
    //     let userString = localStorage.getItem('user');

    //     if (userString != null) {
    //         user = JSON.parse(userString);
    //     }

    //     if (user != null) {
    //         token = user.Token;
    //     }
    //     return token;
    // }
}