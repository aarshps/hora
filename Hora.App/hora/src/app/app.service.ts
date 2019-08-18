import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    getTime() {
        return this.http.get('https://localhost:44383/api/time');
    }
}
