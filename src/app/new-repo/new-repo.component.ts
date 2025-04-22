import { Component } from '@angular/core';
import { Interface } from "../interface"

@Component({
  selector: 'app-new-repo',
  templateUrl: './new-repo.component.html',
  styleUrls: ['./new-repo.component.css']
})
export class NewRepoComponent {
  data: string = "Hello new branch";
   infe: Interface ={
    id: 101,
    name: 'abcd',
    date: new Date()
  }
 constructor() {
  console.log(this.infe.id)
 }
}
