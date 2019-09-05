import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { App1Component } from './task3/heart.component';
import { Task2Component } from './task2/task2.component';
import { Task4Component } from './task4/task4.component';
import { Task4parentComponent } from './task4/task4parent.component';
import { Task5Component } from './Task5/task5.component';
import { Task5LaptopComponent } from './Task5/components/task5laptop.component';
import { Task5TVComponent } from './Task5/components/task5tv.component';
import { Task5MobileComponent } from './Task5/components/task5mob.component';
import { Task5ACComponent } from './Task5/components/task5ac.component';
import { DropdownComponent } from './task6/task6.component';
import { PipeComponent } from './Task7/task7.component';
import { ContentPipe } from './Task7/http.pipe';
import { Task1Component } from './task1/task1.component';
import { MobileListComponent } from './task1/mobile-list/mobile-list.component';
import { LaptopListComponent } from './task1/laptop-list/laptop-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { route } from './app.routes';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    Task2Component,
    Task4Component,
    Task4parentComponent,
    Task5Component,
    Task5LaptopComponent,
    Task5TVComponent,
    Task5MobileComponent,
    Task5ACComponent,
    DropdownComponent,
    PipeComponent,
    ContentPipe,
    Task1Component,
    MobileListComponent,
    LaptopListComponent,
    NavigationComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
