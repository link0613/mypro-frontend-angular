import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeUpdatesComponent} from './updates.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeUpdatesComponent
  ],
  exports: [
    HomeUpdatesComponent
  ]
})
export class HomeUpdatesModule {}