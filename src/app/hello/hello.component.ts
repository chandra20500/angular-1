import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myvar = ""
  mydisabled = false
  constructor() {}
  
  ngOnInit(): void {
  }

  

  changevar(e : any): void {
    console.log(e.target.value)
    this.myvar = e.target.value
    // this.mydisabled = !this.mydisabled
  }

}
