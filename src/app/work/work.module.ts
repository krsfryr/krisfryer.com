import { NgModule } from '@angular/core';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { ListingModule } from '../listing/listing.module';

@NgModule({
  declarations: [
    WorkComponent,
  ],
  imports: [
		WorkRoutingModule,
		ListingModule,
  ],
	exports: [
		WorkComponent,
	],
  providers: [],
})
export class WorkModule { }
