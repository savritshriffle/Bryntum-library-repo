import { Component, OnInit, Renderer2 } from '@angular/core';
import { ColumnAutoWidth, ColumnResize, DateField, EventDrag, EventNonWorkingTime, EventResize, Gantt, HeaderMenu, HeaderZoom, PresetManager, ProjectModel, Resizable, Scroller, Slider, StoreDataField, TaskDrag, TaskResize, TaskStore, TimeAxis, TimeAxisColumn, TimeAxisHeaderMenu, TimeColumn, TimelineChart, TimelineScroll, TimelineZoomable, TimeSpan, ViewPreset } from '@bryntum/gantt';

@Component({
  selector: 'app-bryntum-first',
  templateUrl: './bryntum-first.component.html',
  styleUrls: ['./bryntum-first.component.css']
})
export class BryntumFirstComponent implements OnInit{
  
  ganttConfig = {
 
    features: {
      taskTooltip: true,
      dependencies: true,
      
    },
    
    columns: [
     
        { type: 'name', field: 'name', text: 'Task Name', width: 250, resizable :false},
        { type: 'date', text: 'StartDate', field:'start date', resizable :false},
        { type: 'date', text:'EndDate', filed: 'end date', resizable :false},
        
    ]
    };

  project = new ProjectModel({
    
    tasksData : [
                { id : 1, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05'},
                { id : 2, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10' },
                { id : 3, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05' },
                { id : 4, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10' },
                { id : 5, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05' },
                { id : 6, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10' },
                { id : 7, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05' },
                { id : 8, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10' } 
        
    ],

    dependenciesData : [
        { fromTask : 2, toTask : 3 }
    ]
});

ngOnInit(): void {

  this.project.taskStore.forEach((value: any) => {
    // value.resizable = false;
    // value.draggable = false;
    
  })

  // this.project.taskStore.on('beforeLoadPage ', (event: any) => {
  //   debugger
  //   console.log(event.value)
  //   event.ViewPreset = false;
  //   event
  // })
  
}
}
