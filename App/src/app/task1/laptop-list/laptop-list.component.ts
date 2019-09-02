import { Component, OnInit } from '@angular/core';
import { Laptoplist } from "./laptop-list"

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {

  public laplist = new Laptoplist();
  constructor() { }

  ngOnInit() {
  }

}
