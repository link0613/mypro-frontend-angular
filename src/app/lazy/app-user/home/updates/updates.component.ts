import {Component, Input, ViewEncapsulation} from '@angular/core';

import {IUserUpdates} from './updates.model';

@Component({
  selector: 'fmp-home-updates-component',
  templateUrl: 'updates.html',
  styles: [require('./updates.scss').toString()],
  encapsulation: ViewEncapsulation.None
})

export class HomeUpdatesComponent {

  @Input()
  updates: IUserUpdates;

}