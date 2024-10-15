import { NgModule } from '@angular/core';

import { ListingComponent } from './listing.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    ListingComponent,
    CardComponent,
  ],
  imports: [
  ],
	exports: [
		ListingComponent,
    CardComponent,
	],
  providers: [],
})
export class ListingModule { }
