import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component'
import { RecordsService } from './records.service'

interface myData {
  obj: Object
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  records : any = []

  constructor(private firstservice : RecordsService) { }

  ngOnInit() {
    // this.firstservice.getdata().subscribe(data => {
    //   console.log("data", data,"data.obj", data.obj)
    //   this.records = data
    //   this.records.forEach(m => console.log(m.id));
    //   console.log(this.records)
    // })
  }
}