import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  url:string
  list:any
  city:object  
  constructor( private _http: HttpService ) {
    this.url = '5392171'
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