import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    getServerTime() {
        return this.http.get('/api/time/server');
    }

    getHistory() {
        return this.http.get<any[]>('/api/time');
    }

    saveTime(time: { Start: string }) {
        return this.http.post('/api/time', time, httpOptions);
    }
}
