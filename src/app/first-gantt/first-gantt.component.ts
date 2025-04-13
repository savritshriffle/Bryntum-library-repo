import { Component } from '@angular/core';
import { Task } from './first-gantt.config';
@Component({
  selector: 'app-first-gantt',
  templateUrl: './first-gantt.component.html',
  styleUrls: ['./first-gantt.component.css']
})
export class FirstGanttComponent {

  tasks: Task[] = [];

  ngOnInit() {
    const saved = localStorage.getItem('ganttTasks');
    if (saved) {
      this.tasks = JSON.parse(saved);
    } else {
      // Default data अगर localStorage खाली हो
      this.tasks = [
        { id: 1, name: 'Task 1', startDate: '2025-04-12', endDate: '2025-04-14' },
        { id: 2, name: 'Task 2', startDate: '2025-04-15', endDate: '2025-04-17' },
      ];
      this.saveTasks();
    }
  }

  saveTasks() {
    localStorage.setItem('ganttTasks', JSON.stringify(this.tasks));
  }

  addTask() {
    const newTask: Task = {
      id: this.tasks.length + 1,
      name: `Task ${this.tasks.length + 1}`,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  updateTask(task: Task) {
    this.saveTasks();
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.saveTasks();
  }

  getLeft(startDate: string): number {
    const start = new Date(startDate).getTime();
    const base = new Date(this.tasks[0].startDate).getTime();
    const day = 1000 * 60 * 60 * 24;
    return (start - base) / day * 30;
  }
  
  getWidth(start: string, end: string): number {
    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();
    const day = 1000 * 60 * 60 * 24;
    return ((endTime - startTime) / day + 1) * 30;
  }
  

}
