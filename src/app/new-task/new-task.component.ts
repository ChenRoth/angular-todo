import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
    @Output() addTask = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onAdd(title: string) {
        this.addTask.emit(title);
    }
}
