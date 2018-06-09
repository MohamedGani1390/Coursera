import { Injectable } from '@angular/core';

import { Workout } from '../shared/workout';

import { MENU } from '../constants/menu';



@Injectable()
export class GymService {

  constructor() { }

  getMenu ()
  {
     return MENU;
  }

}
