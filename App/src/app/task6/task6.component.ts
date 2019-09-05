import { Component } from "@angular/core";
@Component({
  selector: "app-dropdown",
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-2 border border-primary text-white bg-primary"  (click)="inverse()">
          <div class="float-left">dropdown</div>
          <div class="float-right">
            <i class="fa" [ngClass]="arrow?('fa-caret-up'):('fa-caret-down')" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="row" *ngIf="arrow">
        <div class="col-md-2 border border-primary">
          <div class="float-left">
            <p>
              cghfghfgk sdjhfjksd juky k ujut g
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class DropdownComponent {
  public arrow: boolean = false;

    inverse()
    {
        this.arrow = !this.arrow;
    }

}
