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

    onCheckboxChange(e) {
        const isComplete = e.target.checked;
        this.toggleComplete.emit(isComplete);
    }

}
