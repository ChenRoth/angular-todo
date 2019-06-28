import { Component } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasks: Task[] = [
        {
            title: 'Buy Milk',
            isComplete: false,
        }, {
            title: 'Wake the Dog',
            isComplete: true,
        }
    ];

    onToggleComplete(index: number, isComplete: boolean) {
        this.tasks[index].isComplete = isComplete;
    }
}
