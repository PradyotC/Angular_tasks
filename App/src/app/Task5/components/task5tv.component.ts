import { Component } from '@angular/core';
import { image } from '../../shared/model/image';
@Component ({
    selector: 'app-t4tv',
    template: `
    <div  class="row">
        <div class="col-md-4" *ngFor="let x of tvlist">
            <div class="row"><img class="img-fluid" src="{{x.url}}"></div>
            <div class="row"><h2 class="mx-auto">{{x.title}}</h2></div>
        </div>
    </div>
    `,
    styles: [`
    
    `]
})

export class Task5TVComponent
{
    public tvlist:image[] = [
        {
            title: 'tv1',
            url: '../assets/img/tv/tv1.png'
        },
        {
            title: 'tv2',
            url: '../assets/img/tv/tv2.png'
        },
        {
            title: 'tv3',
            url: '../assets/img/tv/tv3.png'
        },
        {
            title: 'tv4',
            url: '../assets/img/tv/tv4.png'
        },
        {
            title: 'tv5',
            url: '../assets/img/tv/tv5.png'
        },
        {
            title: 'tv6',
            url: '../assets/img/tv/tv6.png'
        },
        {
            title: 'tv7',
            url: '../assets/img/tv/tv7.png'
        },
        {
            title: 'tv8',
            url: '../assets/img/tv/tv8.png'
        },
        {
            title: 'tv9',
            url: '../assets/img/tv/tv9.png'
        }
    ];
}