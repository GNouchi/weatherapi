import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  url:string
  list:any
  city:object  
  constructor( private _http: HttpService ) {
    this.url = '4462896'
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