import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BryntumGanttModule } from '@bryntum/gantt-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FirstGanttComponent } from './first-gantt/first-gantt.component';
import { SecandGanttComponent } from './secand-gantt/secand-gantt.component';
import { ThirdGanttComponent } from './third-gantt/third-gantt.component';
import { BryntumFirstComponent } from './bryntum-first/bryntum-first.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, FirstGanttComponent, SecandGanttComponent, ThirdGanttComponent, BryntumFirstComponent],
  imports: [
    BrowserModule,
    BryntumGanttModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  
})
export class AppModule {}
