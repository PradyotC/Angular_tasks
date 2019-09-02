import { Component } from '@angular/core';

@Component({
  selector: 'app-heart',
  template: `
    <span
    class="fa fa-3x"
    [ngClass]="
    {
    'fa-heart-o ': isActive,
    'fa-heart': !isActive
    }"
    (click)="Action();"
    ></span>
    `,
  styles: [`
    `],
})

export class App1Component {
  title = 'Heart';
  public isActive = true;

  Action() {
    this.isActive = !this.isActive;
  }
}
