import { Component, OnInit } from '@angular/core';
import { Mobilelist } from './mobile-list';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {

  public mobilelist = new Mobilelist();
  
  constructor() { }

  ngOnInit() {
  }

}
