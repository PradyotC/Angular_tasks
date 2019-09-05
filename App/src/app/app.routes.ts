import { Route } from '@angular/router';

import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { App1Component } from './task3/heart.component';
import { Task4parentComponent } from './task4/task4parent.component';
import { Task5Component } from './Task5/task5.component';
import { DropdownComponent } from './task6/task6.component';
import { PipeComponent } from './Task7/task7.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent} from './reactive-form/reactive-form.component';

export const route:Route[] = [
    {
        path:'task1',
        component: Task1Component
    },
    {
        path:'task2',
        component: Task2Component
    },
    {
        path:'task3',
        component: App1Component
    },
    {
        path:'task4',
        component: Task4parentComponent
    },
    {
        path:'task5',
        component: Task5Component
    },
    {
        path:'task6',
        component: DropdownComponent
    },
    {
        path:'task7',
        component: PipeComponent
    },
    {
        path:'templateform',
        component: TemplateFormComponent
    },
    {
        path:'reactiveform',
        component: ReactiveFormComponent
    }
]