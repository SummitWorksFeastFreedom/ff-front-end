import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kitchen } from './kitchen';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class KitchenService {

    private apiServerUrl = environment.apiBaseUrl;
    headers = new HttpHeaders().set('access-control-allow-origin', this.apiServerUrl);

    items: Kitchen[] = [];

    getItems(): Kitchen[] {
        return this.items;
    }

    constructor(private http: HttpClient){}

    public getKitchens(): Observable<Kitchen[]> {
        return this.http.get<Kitchen[]>(`${this.apiServerUrl}/kitchen/all`, {headers: this.headers});
    }

    public addKitchen(kitchen: Kitchen): Observable<Kitchen> {
        return this.http.post<Kitchen>(`${this.apiServerUrl}/kitchen/create`, kitchen, {headers: this.headers});
    }

    public updateKitchen(kitchen: Kitchen): Observable<Kitchen> {
        return this.http.put<Kitchen>(`${this.apiServerUrl}/kitchen/update`, kitchen, {headers: this.headers});
    }

    public deleteKitchen(kitchenId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/kitchen/delete/${kitchenId}`, {headers: this.headers});
    }
}