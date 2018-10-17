import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  url:string
  list:any
  city:object  
  constructor( private _http: HttpService ) {
    this.url = '4497666'
  }
  ngOnInit(){this.getData()}
  toggleshow =(entry)=> entry['show']=(entry['show'])?false:true;
  
  getData=()=> this._http.getData(this.url)
        .subscribe(
            data => { this.list = data['list'];  this.city = data['city']; },
            error => console.log('Logging errors from SeattleComponent route',error),
        )
}
// see service or server.js for more routes