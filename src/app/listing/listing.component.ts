import { Component, OnInit } from '@angular/core';
import { ListingService } from './services/listing.service';
import { Observable } from 'rxjs';
import { Listing } from './models/Listing';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private service: ListingService) {
	}

  ngOnInit(): void {
      this.service.GetListings().subscribe(
        items => {this.listings = items }
      )
  } 
}
