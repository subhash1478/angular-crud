import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(public services:WebService) { }

  ngOnInit() {

    this.services.getTestapi().subscribe((Response)=>{
      console.log(Response);
      
    })
  }

}
