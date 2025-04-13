import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BryntumGanttComponent } from '@bryntum/gantt-angular';
import { ganttConfig, projectConfig } from './secand-gantt.config';
@Component({
  selector: 'app-secand-gantt',
  templateUrl: './secand-gantt.component.html',
  styleUrls: ['./secand-gantt.component.css']
})
export class SecandGanttComponent implements AfterViewInit {
  ganttConfig = ganttConfig;
    projectConfig = projectConfig;
  
    @ViewChild('gantt') ganttComponent!: BryntumGanttComponent;
  
    ngAfterViewInit(): void {
      if (this.ganttComponent?.instance) {
        this.ganttComponent.instance.project.loadInlineData(this.projectConfig);
      }
    }
}
