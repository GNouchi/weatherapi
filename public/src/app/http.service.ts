import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({  providedIn: 'root' })

export class HttpService {
  apikey:string
  constructor( 
    private _http:HttpClient ) { 
    this.apikey = '0e54f14017df4fd209c9376f10d06106'
  }  
  getData=(cityid)=> this._http.get('http://api.openweathermap.org/data/2.5/forecast?id='+cityid+'&APPID='+this.apikey);

}


// Seattle: http://api.openweathermap.org/data/2.5/forecast?id=5809844
// San Jose: http://api.openweathermap.org/data/2.5/forecast?id=5392171
// Burbank: http://api.openweathermap.org/data/2.5/forecast?id=5331835
// Dallas: http://api.openweathermap.org/data/2.5/forecast?id=4462896
// Washington D.C.: http://api.openweathermap.org/data/2.5/forecast?id=4497666
// Chicago: http://api.openweathermap.org/data/2.5/forecast?id=4887398
