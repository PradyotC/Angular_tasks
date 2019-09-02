import { Component } from "@angular/core";

@Component({
    selector: "app-task5",
    template: `
    <br />
    <div class="container container_border">
      <div class="row">
        <div class="col-md-3 container_border">
          <div class="row">
            <button
              type="button"
              class="btn btn-primary col-md-11 b1"
              (click)="clickvar = 'Laptop'"
            >
              Laptop
            </button>
          </div>
          <div class="row">
            <button
              type="button"
              class="btn btn-primary col-md-11 b1"
              (click)="clickvar = 'Mobile'"
            >
              Mobile
            </button>
          </div>
          <div class="row">
            <button
              type="button"
              class="btn btn-primary col-md-11 b1"
              (click)="clickvar = 'AC'"
            >
              AC
            </button>
          </div>
          <div class="row">
            <button
              type="button"
              class="btn btn-primary col-md-11 b1"
              (click)="clickvar = 'TV'"
            >
              TV
            </button>
          </div>
        </div>
        <div class="col-md-9 container_border" [ngSwitch]="clickvar">
          <div *ngSwitchDefault></div>
          <div *ngSwitchCase="'Laptop'">
            <app-t4lap></app-t4lap>
          </div>
          <div *ngSwitchCase="'Mobile'">
            <app-t4mob></app-t4mob>
          </div>
          <div *ngSwitchCase="'AC'">
            <app-t4ac></app-t4ac>
          </div>
          <div *ngSwitchCase="'TV'">
            <app-t4tv></app-t4tv>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: [
        `
      .container_border {
        border: 1px solid black;
      }
      .b1 {
        margin: 2px auto;
      }
    `
    ]
})
export class Task5Component {
    public moblist = [
        "mob1",
        "mob2",
        "mob3",
        "mob4",
        "mob5",
        "mob6",
        "mob7",
        "mob8",
        "mob9"
    ];
    public AClist = [
        "AC1",
        "AC2",
        "AC3",
        "AC4",
        "AC5",
        "AC6",
        "AC7",
        "AC8",
        "AC9"
    ];
    public clickvar;
}
