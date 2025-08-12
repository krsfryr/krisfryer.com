// import { NgModule } from '@angular/core';

// import { ListingComponent } from './listing.component';
// import { CardComponent } from './components/card/card.component';

// @NgModule({
//   declarations: [
//     ListingComponent,
//     CardComponent,
//   ],
//   imports: [
//   ],
// 	exports: [
// 		ListingComponent,
//     CardComponent,
// 	],
//   providers: [],
// })
// export class ListingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // <-- add this

import { ListingComponent } from './listing.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    ListingComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,                                  // <-- and include it here
  ],
  exports: [
    ListingComponent,
    CardComponent,
  ],
  providers: [],
})
export class ListingModule { }
