import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { RatingDemoComponent } from './rating-demo/rating-demo.component';
import { RatingApiComponent } from './rating-api/rating-api.component';
import { RatingRoutingModule } from './rating-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { NgRatingModule } from 'projects/ng-rating/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RatingComponent, RatingDemoComponent, RatingApiComponent],
  imports: [
    CommonModule,
    RatingRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    NgRatingModule,
  ],
})
export class RatingModule {}
