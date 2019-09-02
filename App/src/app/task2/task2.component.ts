import { Component } from '@angular/core';

@Component ({
    selector: 'app-task2',
    template: `
    <div class="container">
        <br>
        <br>
        <div class="row">
            <div class="col-md">
                &nbsp;&nbsp;
                <button class="btn btn-primary"
                (click)="gender=male"
                [disabled]="gender==male"
                >Male</button>
                &nbsp;&nbsp;
                <button class="btn btn-primary"
                (click)="gender=female"
                [disabled]="gender==female"
                >Female</button>
            </div>
        </div>
        <div *ngIf="gender">
            <img src="{{gender.imgUrl}}"/>
            <h4>{{gender.name}}</h4>
        </div>
    </div>
    `,
    styles: [`
    `],
})

export class Task2Component {
    title: 'Task1';
    public gender;
    public male =
    {
        name: 'abc',
        imgUrl: '../assets/img/Male.jpg',
    };
    public female =
    {
        name: 'xyz',
        imgUrl: '../assets/img/female.png',
    };
}
