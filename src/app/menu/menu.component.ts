import { Component, OnInit } from '@angular/core';
import { Workout } from '../shared/workout';
import { GymService } from '../services/gym.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  menuList:Workout[];

  constructor(private gymService:GymService) { }

  ngOnInit() {
      this.menuList = this.gymService.getMenu();
  }

  
 
}
 