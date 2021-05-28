import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // title = 'angular-ecommerce';

 constructor(private _router:Router){}

 onBackButtonClick():void{
   this._router.navigate(['/checkout'])
 }
 
 
 ngOnInit():void{}

}

