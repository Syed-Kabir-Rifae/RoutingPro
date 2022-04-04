import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    
    <h2>EMPLOYEE DEPARTMENTS</h2>
<ul>
<li><button style="color: chartreuse;">Angular</button></li>
<li><button style="border: rgb(0, 255, 229); color: tomato;">Node</button></li>
<li><button style="border: rgb(106, 0, 255); color: teal;">MongoDB</button></li>
<li><button style="border: rgb(255, 89, 0); color: slateblue;">Ruby</button></li>
<li><button style="border: rgb(64, 0, 255); color: darkblue;">Bootstrap</button></li></ul>
  
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
