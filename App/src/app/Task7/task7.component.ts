import { Component } from '@angular/core';


@Component ({
    selector: 'app-pipe',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <img class="img-fluid mx-auto" src="{{ imgurl | http: 'https' }}"/>
                </div>
            </div>
        </div>
    `,
    styles: [`
    img
    {
        width: 100%;
    }
    `]
})

export class PipeComponent
{
    public imgurl:string = 'http://lorempixel.com/400/200/';

}