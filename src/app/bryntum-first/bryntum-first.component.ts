
import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ganttProps , projectProps } from './bryntum-first.config';
import { BryntumGanttComponent, BryntumGanttProjectModelComponent } from '@bryntum/gantt-angular';
import { PercentBar } from '@bryntum/gantt';
@Component({
  selector: 'app-bryntum-first',
  templateUrl: './bryntum-first.component.html',
  styleUrls: ['./bryntum-first.component.css']
})
export class BryntumFirstComponent  implements OnInit , AfterViewInit { 
  ganttProps = ganttProps;
  projectProps = projectProps;

  @ViewChild('ganttProject') project!: BryntumGanttProjectModelComponent;
  @ViewChild('gantt') ganttComponent!: BryntumGanttComponent;

 ngOnInit(): void {
   this.projectProps.tasksData?.forEach((value) => {
     value.resizable = false;
     value.draggable = false;
     console.log( value.percentDone)
    
    //  console.log(this.ganttComponent)

    })
    
    
    
    
  }
  ngAfterViewInit(): void {
  //  this.ganttComponent.instance.features.percentBar.disabled = true
  // console.log(this.ganttComponent);

  this.ganttComponent.instance.onPercentBarDrag = (event: any) => {
    // event.moveUnblocked = false;
    // debugger
     console.log(event)
    //  enableCellContextMenu
    //  enableHeaderContextMenu

    console.log(this.ganttComponent.instance)
    this.ganttComponent.instance.onMouseOut = (event) =>{}
    }
  }
}
 
  
  



