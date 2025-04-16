import { Component } from '@angular/core';
import { Gantt, ProjectModel, TaskStore } from '@bryntum/gantt';

@Component({
  selector: 'app-bryntum-first',
  templateUrl: './bryntum-first.component.html',
  styleUrls: ['./bryntum-first.component.css']
})
export class BryntumFirstComponent {

  gantt = new Gantt({
    
    
    columns: [
      { type:'number', text:'id', field: 'id' , filterable: true},
      { type: 'name', text:'name', field: 'name', filterable: true},
      { type: 'startdate', text:'startdate', field:'startdate'},
      { type: 'enddate', text:'enddate', field: 'enddate'}
    ]
  })

  project = new ProjectModel({
    startDate : new Date(2017, 0, 1),

    tasksData : [
       
            
                { id : 2, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05' },
                { id : 3, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10' },
                { id : 2, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05' },
                { id : 3, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10' },
                { id : 2, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05' },
                { id : 3, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10' },
                { id : 2, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05' },
                { id : 3, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10' }
            
            
        
    ],

    dependenciesData : [
        { fromTask : 2, toTask : 3 }
    ]
});
}
