import { Component, OnInit } from '@angular/core';
import { Gantt } from '@bryntum/gantt/gantt.umd';

@Component({
  selector: 'app-third-gantt',
  templateUrl: './third-gantt.component.html',
  styleUrls: ['./third-gantt.component.css']
})
export class ThirdGanttComponent  implements OnInit{
  ganttInstance: any;

  ngOnInit(): void {
    const savedState = localStorage.getItem('gantt-state');

    this.ganttInstance = new Gantt({
      adopt: '#gantt-container',
      columns: [
        { type: 'name', field: 'name', text: 'Task Name', width: 200 },
        { type: 'startdate' },
        { type: 'duration' },
        { type: 'constrainttype' },
        { type: 'check', field: 'isDone', text: 'Done?' }
      ],
      project: {
        startDate: '2025-01-01',
        tasksData: savedState ? JSON.parse(savedState).tasks : [],
      },
      listeners: { 
        change: () => this.saveState(),
        filter: () => this.saveState(),
        sort: () => this.saveState(),
        add: () => this.saveState(),
        remove: () => this.saveState(),
        columnResize: () => this.saveState(),
        columnToggle: () => this.saveState()
      } as any
    });
  }

  saveState() {
    const tasks = this.ganttInstance.project.taskStore.records.map((task: any ) => task.data);
    const state = {
      tasks,
    };
    localStorage.setItem('gantt-state', JSON.stringify(state));
  }
}


