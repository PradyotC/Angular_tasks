import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/model/user.template';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  public model = new Users();

  constructor() { }

  ngOnInit() {
  }

}
