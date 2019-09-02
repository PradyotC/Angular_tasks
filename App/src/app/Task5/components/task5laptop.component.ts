import { Component } from '@angular/core';
import { image } from '../../shared/model/image';
@Component ({
    selector: 'app-t4lap',
    template: `
    <div  class="row">
        <div class="col-md-4" *ngFor="let x of laptoplist">
            <div class="row"><img class="img-fluid" src="{{x.url}}"></div>
            <div class="row"><h2 class="mx-auto">{{x.title}}</h2></div>
        </div>
    </div>
    `,
    styles: [`
    
    `]
})

export class Task5LaptopComponent
{
    public laptoplist:image[] = [
        {
            title: 'laptop1',
            url: '../assets/img/laptop/laptop1.png'
        },
        {
            title: 'laptop2',
            url: '../assets/img/laptop/laptop2.png'
        },
        {
            title: 'laptop3',
            url: '../assets/img/laptop/laptop3.png'
        },
        {
            title: 'laptop4',
            url: '../assets/img/laptop/laptop4.png'
        },
        {
            title: 'laptop5',
            url: '../assets/img/laptop/laptop5.png'
        },
        {
            title: 'laptop6',
            url: '../assets/img/laptop/laptop6.png'
        },
        {
            title: 'laptop7',
            url: '../assets/img/laptop/laptop7.png'
        },
        {
            title: 'laptop8',
            url: '../assets/img/laptop/laptop8.png'
        },
        {
            title: 'laptop9',
            url: '../assets/img/laptop/laptop9.png'
        }
    ];
}
