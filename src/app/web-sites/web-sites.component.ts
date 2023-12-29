import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-sites',
  templateUrl: './web-sites.component.html',
  styleUrls: []
})
export class WebSitesComponent implements OnInit {

  status: boolean = false;

  constructor() { }

  ngOnInit() {    
  }

 switchStyle = () => {
    // if (document.getElementById('styleSwitch').checked) {
    //   document.getElementById('gallery').classList.add("custom");
    //   document.getElementById('exampleModal').classList.add("custom");
    // } else {
    //   document.getElementById('gallery').classList.remove("custom");
    //   document.getElementById('exampleModal').classList.remove("custom");
    // }
  }

  clickEvent(val: any){
    console.log({val})
    console.log(this.status)
    this.status = !this.status;       
 }
}
