import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {


  constructor(){
    navigator.geolocation.getCurrentPosition((e)=>{
      console.log(e.coords.latitude);
      console.log(e.coords.longitude);
    })
    
    
  }
}
