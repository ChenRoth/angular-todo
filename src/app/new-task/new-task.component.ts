import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
    title: string = '';

    @Output() addTask = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onAdd() {
        // check if the input is empty (only whitespaces)
        if (!this.title.trim()) {
            return;
        }
        this.addTask.emit(this.title);
        this.title = '';
    }
}
