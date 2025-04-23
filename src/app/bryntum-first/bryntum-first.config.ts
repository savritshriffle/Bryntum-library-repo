import { Baseline, TaskStore } from "@bryntum/gantt";
import { BryntumGanttProjectModelProps, BryntumGanttProps } from "@bryntum/gantt-angular";

export const projectProps: BryntumGanttProjectModelProps = {

    tasksData : [
        { id : 1, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05', percentDone: 80 },
        { id : 2, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10', percentDone: 60 },
        { id : 3, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05', percentDone: 50 },
        { id : 4, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10', percentDone: 20 },
        { id : 5, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05' , percentDone: 30},
        { id : 6, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10', percentDone: 60 },
        { id : 7, name : 'Proof-read docs', startDate : '2017-01-02', endDate : '2017-01-05' , percentDone: 10},
        { id : 8, name : 'Release docs', startDate : '2017-01-09', endDate : '2017-01-10', percentDone: 70 } 

],
dependenciesData : [
{ fromTask : 2, toTask : 3 }
],
autoLoad: true,


}


export const ganttProps : BryntumGanttProps  = {
    columns: [
     
        { type: 'name', field: 'name', text: 'Task Name', width: 250,},
        { type: 'date', text: 'StartDate', field:'startDate'},
        { type: 'date', text:'EndDate', field: 'endDate'},
        { type: 'percentdone', text:'Progress', field:'percentDone'}  
    ],
}
