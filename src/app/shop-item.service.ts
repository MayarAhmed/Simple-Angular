import { Injectable } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShopItemService {
  constructor(private http:HttpClient ) { }

  getServer(path:string): Observable<any>{
    return this.http.get('../assets/Items.Json');
  }

 
}
