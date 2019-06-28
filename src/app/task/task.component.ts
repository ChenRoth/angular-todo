import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    @Input() task: Task;
    @Output() toggleComplete = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
    }

    onCheckboxChange(isComplete: boolean) {
        this.toggleComplete.emit(isComplete);
    }
}
