import { Component , Input} from '@angular/core';
@Component({
    selector: 'app-task4',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md">
                <span class="fa fa-3x"
                [ngClass]="
                {
                    'fa-heart-o ': isActive,
                    'fa-heart': !isActive
                }"
                [style.color]="isActive?'black':'red'"
                (click)="change();"
                >
                </span>
                <span>{{count}}</span>
            </div>
        </div>
    </div>
    `,
    styles: [`
    `],
})

export class Task4Component {
    public isActive = true;
    @Input() public count;
    change() {
        this.isActive = !this.isActive;
        (this.isActive) ? (this.count--) : (this.count++) ;
    }
}
