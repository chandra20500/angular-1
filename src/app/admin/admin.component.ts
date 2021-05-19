import { Component, OnInit } from '@angular/core';
/* recond service to get data */
import { RecordsService } from '../records.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  playerList : any = []
  dplayerList : any = []
  offList : any = []

  constructor(private rec : RecordsService) { }

  ngOnInit(): void {
    /* player data */
    this.playerList = this.rec.getdata()
    this.dplayerList = this.rec.getDef()
    this.offList = this.rec.getOff()
  }

}
