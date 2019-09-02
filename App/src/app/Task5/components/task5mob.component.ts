import { Component } from '@angular/core';
import { image } from '../../shared/model/image';
@Component ({
    selector: 'app-t4mob',
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

export class Task5MobileComponent
{
    public moblist:image[] = [
        {
            title: 'mobile1',
            url: '../assets/img/mobile/mobile1.png'
        },
        {
            title: 'mobile2',
            url: '../assets/img/mobile/mobile2.png'
        },
        {
            title: 'mobile3',
            url: '../assets/img/mobile/mobile3.png'
        },
        {
            title: 'mobile4',
            url: '../assets/img/mobile/mobile4.png'
        },
        {
            title: 'mobile5',
            url: '../assets/img/mobile/mobile5.png'
        },
        {
            title: 'mobile6',
            url: '../assets/img/mobile/mobile6.png'
        },
        {
            title: 'mobile7',
            url: '../assets/img/mobile/mobile7.png'
        },
        {
            title: 'mobile8',
            url: '../assets/img/mobile/mobile8.png'
        },
        {
            title: 'mobile9',
            url: '../assets/img/mobile/mobile9.png'
        }
    ];
}