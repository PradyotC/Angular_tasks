import { Component } from '@angular/core';

@Component({
    selector: 'app-task4parent',
    template: `
    <app-task4 [count]="counter"></app-task4>
    `,
    styles: [`
    `],
})

export class Task4parentComponent {
    public counter = 10;
}
