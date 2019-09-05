import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder  } from '@angular/forms'
import { Iusers } from '../shared/model/user.reactive';
import { UserRegx } from './userRegx';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public userForm:FormGroup;
  public submitted:boolean = false;

  constructor( private fb:FormBuilder ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'username':['',[Validators.required,Validators.minLength(5),UserRegx.Username
      ]],
      'password':['',[Validators.required,UserRegx.Password]],
      'email':['',[Validators.required,UserRegx.Email]]
    });
  }

  Save(data: Iusers)
  {
    this.submitted = true;
    if(!this.userForm.valid){return}
    console.log(data);
  }

}
