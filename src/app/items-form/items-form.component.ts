import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.css']
})
export class ItemsFormComponent implements OnInit {

  starttime:string='';
  endtime:string='';

  time1:string[];
  time2:string[];
  constructor() {
    this.time1=[
      '7AM',
      '8AM',
      '9AM',
      '10AM',
      '11AM',
      '12PM',
      '1PM',
      '2PM',
      '3PM',
      '4PM',
      '5PM',
      '6PM',
      '7PM',
      '9PM',
      '10PM'
    ]
    this.time2=[
      '7AM',
      '8AM',
      '9AM',
      '10AM',
      '11AM',
      '12PM',
      '1PM',
      '2PM',
      '3PM',
      '4PM',
      '5PM',
      '6PM',
      '7PM',
      '9PM',
      '10PM'
    ]
   }

  ngOnInit(): void {
  }

  save(){
    console.log("Saved");
  }

}
