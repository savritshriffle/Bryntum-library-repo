import { Component } from '@angular/core';
import { Column, Gantt } from '@bryntum/gantt';


@Component({
  selector: 'app-third-gantt',
  templateUrl: './third-gantt.component.html',
  styleUrls: ['./third-gantt.component.css']
})
export class ThirdGanttComponent {
  gantt = new Gantt ({
    columns : [
      { type: "name" , text: "Task Name", field: 'name'},
      { type: "date" , text: "Start Date", field: 'start date'},
      { type: "date" , text: "Finish Date", field: 'end date'},

    ]
  })
  }



