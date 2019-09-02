import { Component } from '@angular/core';
import { image } from '../../shared/model/image';
@Component ({
    selector: 'app-t4ac',
    template: `
    <div  class="row">
        <div class="col-md-4" *ngFor="let x of moblist">
            <div class="row"><img class="img-fluid" src="{{x.url}}"></div>
            <div class="row"><h2 class="mx-auto">{{x.title}}</h2></div>
        </div>
    </div>
    `,
    styles: [`
    
    `]
})

export class Task5ACComponent
{
    public moblist:image[] = [
        {
            title: 'ac1',
            url: '../assets/img/ac/ac1.png'
        },
        {
            title: 'ac2',
            url: '../assets/img/ac/ac2.png'
        },
        {
            title: 'ac3',
            url: '../assets/img/ac/ac3.png'
        },
        {
            title: 'ac4',
            url: '../assets/img/ac/ac4.png'
        },
        {
            title: 'ac5',
            url: '../assets/img/ac/ac5.png'
        },
        {
            title: 'ac6',
            url: '../assets/img/ac/ac6.png'
        },
        {
            title: 'ac7',
            url: '../assets/img/ac/ac7.png'
        },
        {
            title: 'ac8',
            url: '../assets/img/ac/ac8.png'
        },
        {
            title: 'ac9',
            url: '../assets/img/ac/ac9.png'
        }
    ];
}