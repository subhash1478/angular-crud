import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { config } from './config';
 
@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(public http:HttpClient) {

   }

   getTestapi(){
     return this.http.get(`${config.apiendpoint}get`)
   }
}
